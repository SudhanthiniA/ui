import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertService } from '@app/services';
import { OrderpickupService } from '@app/services/ware-house/orderpickup.service';

@Component({
  selector: 'app-addorderpickup',
  templateUrl: './addorderpickup.component.html',
  styleUrls: ['./addorderpickup.component.scss']
})
export class AddorderpickupComponent implements OnInit {
  editId: any;
  indentdetails: any;
  orderPickUpForm: FormGroup;
  orderPickdetails: any = [];
  barcodeslist: any = [];
  isFlag = false;
  orderPickUpLogData: any = [];

  constructor(private route: ActivatedRoute,
    private orderpickupservice: OrderpickupService,
    private fb: FormBuilder,
    private router: Router,
    private alert: AlertService) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      console.log(params);
      if (params.id) {
        this.getById(params.id);
        this.editId = params.id;
      }
    });
    this.buildFormGroup();
  }
  buildFormGroup() {
    this.orderPickUpForm = this.fb.group({
      barCode: [],
      orderpickUpDetails: this.fb.array([])
    });
  }
  addRow(data?: any): FormGroup {
    return this.fb.group({
      parentETIN: data && data.productLibrary.parentEtin || '',
      packageSizeCode: data && data.productLibrary.packageSizeCode || '',
      packageTypeCode: data && data.productLibrary.packageTypeCode || '',
      brandNameValue: data && data.productLibrary.brandNameValue || '',
      liquorTypeValue: data && data.productLibrary.liquorTypeValue || '',
      subLiquorTypeValue: data && data.productLibrary.liquorSubTypeValue || '',
      packageSizeValue: data && data.productLibrary.packageSizeValue || '',
      packageTypeValue: data && data.productLibrary.packageTypeValue || '',
      noOfCases: data && data.noOfCases || '',
      noOfBottles: data && data.noOfBottles || '',
      noOfCasesScanned: data && data.noOfCasesScanned || 0,
      noOfBottlesScanned: data && data.noOfBottlesScanned || 0,
      brandNameCode: data && data.productLibrary.brandNameCode || '',
      liquorTypeCode: data && data.productLibrary.liquorTypeCode || '',
      liquorSubTypeCode: data && data.productLibrary.liquorSubTypeCode || '',
      strengthValue: data && data.productLibrary.strengthValue || '',
      strengthCode: data && data.productLibrary.strengthCode || '',
      categoryValue: data && data.productLibrary.categoryValue || '',
      categoryCode: data && data.productLibrary.categoryCode || ''

    });
  }
  getById(indnum) {
    this.orderpickupservice.getindentbyindnum(indnum)
      .subscribe((resp: any) => {
        this.indentdetails = resp.data;
        let indentNum = resp.data.indentNo;
        this.orderPickUpLogs(indentNum);
        this.orderPickdetails = resp.data.wholesaleIndentProducts;
        this.orderPickdetails.forEach((ele, i) => {
          (this.orderPickUpForm.get('orderpickUpDetails') as FormArray).push(this.addRow(ele));
        });
      });
  }
  orderPickUpLogs(indentId) {
    this.orderpickupservice.getOrderPickUpLogs(indentId).subscribe((resp: any) => {
      let data = resp.data;
      if (data.length > 0) {
        this.isFlag = true;
        this.orderPickUpLogData = resp.data;
      } else {
        this.isFlag = false;
      }
    });
  }
  get orderForm() {
    return this.orderPickUpForm.controls;
  }
  addbarcodes() {
    console.log(this.orderPickUpForm.value);
    if (this.orderForm.barCode.value) {
      if ((this.orderPickdetails[0].noOfCases == 0) || (this.orderPickUpForm.value.orderpickUpDetails[0].noOfCases == this.orderPickUpForm.value.orderpickUpDetails[0].noOfCasesScanned)) {
        this.alert.showWarning('No requseted Barcodes', 'warning');
      } else {
        if (this.barcodeslist.length > 0) {
          let exist = this.barcodeslist.find(ele => {
            return ele.barCode == this.orderForm.barCode.value;
          });
          if (exist) {
            this.alert.showWarning('Barcode already scanned', 'warning');
          } else {
            this.barcodeslist.push({
              barCode: this.orderForm.barCode.value
            });
            const controlls = this.orderPickUpForm.get('orderpickUpDetails') as FormArray;
            controlls.controls.forEach((element, i) => {
              element.get('noOfCasesScanned').setValue(this.orderPickUpForm.value.orderpickUpDetails[0].noOfCasesScanned + 1);
              element.get('noOfBottlesScanned').setValue(this.orderPickUpForm.value.orderpickUpDetails[0].noOfBottlesScanned + 10);
            });
          }
        } else {
          this.barcodeslist.push({
            barCode: this.orderForm.barCode.value,
            orderPickUpProductDetails: {},
            stockInProductBarCode: {}
          });
          const controlls = this.orderPickUpForm.get('orderpickUpDetails') as FormArray;
          controlls.controls.forEach((element, i) => {
            element.get('noOfCasesScanned').setValue(this.orderPickUpForm.value.orderpickUpDetails[0].noOfCasesScanned + 1);
            element.get('noOfBottlesScanned').setValue(this.orderPickUpForm.value.orderpickUpDetails[0].noOfBottlesScanned + 10);
          });
        }
      }
    } else {
      this.alert.showWarning('Please Enter Barcode', 'warning');
    }
  }
  saveorder(form, status) {
    console.log('form', form.value);
    if (form.value.orderpickUpDetails[0].noOfCasesScanned === 0) {
      this.alert.showWarning('Please Scan Atleast One Barcode', 'warning');
    } else {
      if (this.editId) {
        let sampledata = [];
        sampledata = form.value.orderpickUpDetails.map((data) => {
          return {
            bulkLitresScanned: 200,
            createdBy: 0,
            createdDate: '',
            id: 0,
            modifiedBy: 0,
            modifiedDate: '',
            orderPickUp: {},
            orderPickupBarCodeDetailsLst: this.barcodeslist,
            // packageSize: (data.packageSizeValue).slice(0, -2),
            // packageType: data.packageTypeValue,
            parentEtin: data.parentETIN,
            totBottlesRequested: data.noOfBottles ? data.noOfBottles : 0,
            totBottlesScanned: this.barcodeslist.length * 10,
            totCasesRequested: data.noOfCases ? data.noOfCases : 0,
            totCasesScanned: this.barcodeslist.length,
            productLibrary: {
              packageSize: (data.packageSizeValue).slice(0, -2),
              packageType: data.packageTypeValue,
              categoryCode: data.categoryCode,
              brandNameCode: data.brandNameCode,
              brandNameValue: data.brandNameValue,
              "parentEtin": data.parentETIN,
              "categoryValue": data.categoryValue,
              // "edpCode": "string",
              // "edpValue": "string",
              "liquorSubTypeCode": data.liquorSubTypeCode,
              "liquorSubTypeDescCode": "string",
              "liquorSubTypeDescValue": "string",
              "liquorSubTypeValue": data.subLiquorTypeValue,
              "liquorTypeCode": data.liquorTypeCode,
              "liquorTypeValue": data.liquorTypeValue,
              "packageSizeCode": data.packageSizeCode,
              "packageSizeValue": data.packageSizeValue,
              "packageTypeCode": data.packageTypeCode,
              "packageTypeValue": data.packageTypeValue,
              "strengthCode": data.strengthCode,
              "strengthValue": data.strengthValue,
            }
          };
        });
        let barcode = sampledata[0].orderPickupBarCodeDetailsLst[0].barCode;
        let productData = sampledata[0].productLibrary;
        let payload = {
          "createdBy": '',
          "createdDate": "",
          "entityId": 0,
          "id": 0,
          "indentAcceptance": {
            "approvalStatus": "ACCEPTED",
            "createdBy": 0,
            "createdDate": "",
            "entityId": 0,
            "id": 0,
            "indentDate": "",
            "indentNo": this.indentdetails.indentNo,
            "modifiedBy": 0,
            "modifiedDate": "",
            "orderPickUpStatus": "PENDING",
            "totBottlesRequested": this.indentdetails.wholesaleIndentProducts[0].noOfBottlesScanned,
            "totCasesRequested": this.indentdetails.wholesaleIndentProducts[0].noOfCases,
            "transportPassStatus": "PENDING",
            "unitName": "wholesale"
          },

          "orderPickUpProductDetails": [
            {
              "orderPickUp": {},
              "orderPickupBarCodeDetailsLst": [
                {
                  "orderPickUpProductDetails": {},
                  "stockinHandCases": {
                    "reserved": true,
                    "stockInProductBarCode": {
                      "barCode": barcode,
                    }
                  }
                }
              ],
              "productLibrary": {
                "brandNameCode": productData.brandNameCode,
                "brandNameValue": productData.brandNameValue,
                "categoryCode": "string",
                "categoryValue": "string",
                "createdBy": 0,
                "createdDate": "2021-07-12T08:14:42.277Z",
                "edpCode": "string",
                "edpValue": "string",
                "id": 0,
                "liquorSubTypeCode": "string",
                "liquorSubTypeDescCode": "string",
                "liquorSubTypeDescValue": "string",
                "liquorSubTypeValue": "string",
                "liquorTypeCode": "string",
                "liquorTypeValue": "string",
                "modifiedBy": 0,
                "modifiedDate": "2021-07-12T08:14:42.277Z",
                "packageSizeCode": productData.packageSizeCode,
                "packageSizeValue": productData.packageSizeValue,
                "packageTypeCode": productData.packageTypeCode,
                "packageTypeValue": productData.packageTypeValue,
                "parentEtin": productData.parentEtin,
                "strengthCode": "string",
                "strengthValue": "string"
              },
              "totBottlesRequested": 0,
              "totBottlesScanned": 0,
              "totCasesRequested": 0,
              "totCasesScanned": 0
            }
          ],


          "modifiedBy": '',
          "modifiedDate": "",
          "orderPickUpDate": "",
          "status": status,
          "totBulkLitresScanned": 200,
          "totScannedBottles": form.value.orderpickUpDetails[0].noOfBottlesScanned,
          "totScannedCases": form.value.orderpickUpDetails[0].noOfCasesScanned
        };
        console.log(payload);
        this.orderpickupservice.updateOrderPickUp(payload).subscribe((res: any) => {
          this.alert.showSuccess(res.userDisplayMesg, 'Success');
          this.router.navigate(['/supplychainmanagement/warehouse/orderpickup/list']);
        });
      }
    }
  }
  resett() {
    const id = this.indentdetails.indentNo;
    this.orderpickupservice.resetOrderPickUp(id).subscribe((res: any) => {
      if (res.status == 'f') {
        this.alert.showWarning(res.userDisplayMesg, 'warning');
        // this.Router.navigate(['/supplychainmanagement/wholesale/orderpickup/list'])
      } else {
        this.alert.showSuccess(res.userDisplayMesg, 'Success');
        this.router.navigate(['/supplychainmanagement/warehouse/orderpickup/list']);
      }
    });
  }
}
