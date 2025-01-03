import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertService, WholesaleStockinService } from '@app/services';
import { FormBuilder, FormGroup, Validators, FormArray } from '@angular/forms';

@Component({
  selector: 'app-addorderpickup',
  templateUrl: './addorderpickup.component.html',
  styleUrls: ['./addorderpickup.component.scss']
})
export class AddorderpickupComponent implements OnInit {
  editId: any;
  orderdata: any;
  indentFormGroup: FormGroup;
  completedstatus: any;
  indentNum: any;
  editid: any;
  barcode: any
  todaydate = new Date();

  constructor(private ActivatedRoute: ActivatedRoute, private formBuilder: FormBuilder, private Router: Router,
    private WholesaleStockinService: WholesaleStockinService, private AlertService: AlertService) { }

  ngOnInit() {
    this.buildindentFormGrp();

    this.ActivatedRoute.params.subscribe(params => {
      console.log('active route', params)
      let data = params.id
      if ((data.length > 4)) {
        this.editId = params.id;
        console.log('ddd',this.editId)
        this.setdatabyindent(this.editId)
      }
      else {
        this.editId = params.id;
        this.setdata(this.editId) 
      }
    });

  }
  buildindentFormGrp() {
    this.indentFormGroup = this.formBuilder.group({
      indentRequestDate: ['', Validators.required],
      indentdetails: this.formBuilder.array([
        // this.addFormGroupTable();
      ])
    });
  }
  addFormGroupTable(data?: any): FormGroup {
    return this.formBuilder.group({
      parentETIN: data && data.parentETIN || data.parentETIN || '',
      liquorTypeValue: data && data.liquorTypeValue || '',
      subLiquorTypeValue: data && data.subLiquorTypeValue || '',
      packageSizeValue: data && data.packageSize || data.packageSizeValue || '',
      packageTypeValue: data && data.packageType || data.packageTypeValue || '',
      totCasesRequested: data && data.totCasesRequested || data.noOfCases || 0,
      totBottlesRequested: data && data.totBottlesRequested || data.noOfBottles || 0,
      barCode: [],
      totCasesScanned: data && data.totCasesScanned ||data.noOfCasesScanned || 0,
      totBottlesScanned: data && data.totBottlesScanned ||data.noOfBottlesScanned || 0,
      id: data && data.id || '',

    });
  }
  setdata(id) {
    console.log('iddd', id)
    this.WholesaleStockinService.getbyorderIdd(id).subscribe((res: any) => {
      this.orderdata = res.data
      this.editid = this.orderdata.id
      this.completedstatus = this.orderdata.indentAcceptance.completedStatus ? this.orderdata.indentAcceptance.completedStatus : '';
      this.indentNum = this.orderdata.indentAcceptance.indentNo
      this.orderdata.orderPickUpProductDetails.forEach(element => {
        (this.indentFormGroup.get('indentdetails') as FormArray).push(this.addFormGroupTable(element));
      });
    })

  }
  setdatabyindent(id) {
    console.log('iddd', id)
    this.WholesaleStockinService.getorderpickupByIdforAllLists(id).subscribe((res: any) => {
      this.orderdata = res.data
      console.log( this.orderdata ,this.orderdata.indentNo)
      this.indentNum = this.orderdata.indentNo
      // this.completedstatus = this.orderdata.indentRequest.completionStatus
      // this.orderdata.indentRequest.indentProductList.forEach(element => {
      //   (this.indentFormGroup.get('indentdetails') as FormArray).push(this.addFormGroupTable(element));
      // });
       this.orderdata.retailIndentProducts.forEach(element => {
        (this.indentFormGroup.get('indentdetails') as FormArray).push(this.addFormGroupTable(element));
      });
    })

  }
  saveorder(form, status) {
    console.log('form', this.indentFormGroup)
    console.log('form', form)
    if (form.value.indentdetails[0].totCasesScanned == 0 || this.barcodeslist.length<0 ) {
      this.AlertService.showWarning("Please Scan Atleast One Barcode", 'warning');
    } else {

      if (this.editid) {

        let sampledata = [];

        sampledata = form.value.indentdetails.map((data) => {
          return {
            "bulkLitresScanned": '200',
            "createdBy": '',
            "createdDate": '',
            "id": this.editid ? this.orderdata.id : '',
            "modifiedBy": '',
            "modifiedDate": '',
            "brandName":data.brandNameValue ||  this.orderdata.retailIndentProducts[0].brandNameValue,
            "liquorType": data.liquorTypeValue,
            "subLiquorType":data.subLiquorTypeValue,
            "orderPickupBarCodeDetailsLst": this.barcodeslist,
            "packageSize": +(data.packageSizeValue),
            "packageType": data.packageTypeValue,
            "parentEtin": data.parentETIN,
            "totBottlesRequested": data.totBottlesRequested ? data.totBottlesRequested : 0,
            "totBottlesScanned":this.barcodeslist.length*10,
            "totCasesRequested": data.totCasesRequested ? data.totCasesRequested : 0,
            "totCasesScanned":  this.barcodeslist.length 
          }
        })
        console.log("sample", sampledata)
        let order = {
          "applicationNumber": '',
          "createdBy": 0,
          "createdDate": "",
          // "entityId": 0,
          "event": "string",
          "id": this.editid ?  this.orderdata.id : '',
          "indentAcceptance": {
            "approvalStatus": 'ACCEPTED',
            "completedStatus": this.completedstatus,
            "createdBy": '',
            "createdDate": '',
            // "entityId": '',
            "id": this.editid ? this.orderdata.indentAcceptance.id : '',
            "indentNo": this.indentNum,
            "modifiedBy": '',
            "modifiedDate": ''
          },
          "isDigitalSignature": true,
          "level": "string",
          "modifiedBy": 0,
          "modifiedDate": "",
          "orderPickUpProductDetails": sampledata,
          "sentBackLevels": "",
          "stage": "",
          "stageDesc": "",
          // "totScannedCases": form.value.indentdetails[0].totCasesScanned,
          // "totScannedBottles": form.value.indentdetails[0].totBottlesScanned,
          "totScannedCases":  this.barcodeslist.length,
          "totScannedBottles": this.barcodeslist.length*10,
          "totBulkLitresScanned": '200',
          "status": status
        }
        console.log('order,', order)
        this.WholesaleStockinService.addorderpickup(order).subscribe((res: any) => {
          this.AlertService.showSuccess(res.userDisplayMesg, 'Success');
          this.Router.navigate(['/supplychainmanagement/wholesale/orderpickup/list'])

        })
      } else {

        let sampledata = [];

        sampledata = form.value.indentdetails.map((data) => {
          return {
            "bulkLitresScanned": '200',
            "createdBy": '',
            "createdDate": '',
            "modifiedBy": '',
            "modifiedDate": '',
            "brandName": data.brandNameValue || this.orderdata.retailIndentProducts[0].brandNameValue,
            "liquorType": data.liquorTypeValue,
            "subLiquorType": data.subLiquorTypeValue,
            "orderPickupBarCodeDetailsLst": this.barcodeslist,
            "packageSize": +(data.packageSizeValue),
            "packageType": data.packageTypeValue,
            "parentEtin": data.parentETIN,
            "totBottlesRequested": data.totBottlesRequested ? data.totBottlesRequested : 0,
            "totBottlesScanned":this.barcodeslist.length*10,
            "totCasesRequested": data.totCasesRequested ? data.totCasesRequested : 0,
            "totCasesScanned":  this.barcodeslist.length 
          }
        })
        console.log("sample", sampledata)
        let order = {
          "applicationNumber": '',
          "createdBy": 0,
          "createdDate": "",
          // "entityId": 0,
          "event": "string",
          "id": this.editid ? this.orderdata.id : '',
          "indentAcceptance": {
            "approvalStatus": 'ACCEPTED',
            "completedStatus": this.completedstatus,
            "createdBy": '',
            "createdDate": '',
            "entityId": '',
            "indentNo": this.indentNum,
            "modifiedBy": '',
            "modifiedDate": ''
          },
          "isDigitalSignature": true,
          "level": "string",
          "modifiedBy": 0,
          "modifiedDate": "",
          "orderPickUpProductDetails": sampledata,
          "sentBackLevels": "",
          "stage": "",
          "stageDesc": "",
          // "totScannedCases": form.value.indentdetails[0].totCasesScanned,
          // "totScannedBottles": form.value.indentdetails[0].totBottlesScanned,
           "totScannedCases":  this.barcodeslist.length,
          "totScannedBottles": this.barcodeslist.length*10,
          "totBulkLitresScanned": '200',
          "status": status
        }
        console.log('order,', order)
        this.WholesaleStockinService.addorderpickup(order).subscribe((res: any) => {
          this.AlertService.showSuccess(res.userDisplayMesg, 'Success');
          this.Router.navigate(['/supplychainmanagement/wholesale/orderpickup/list'])

        })
      }
    }



  }
  draftornot=true;
  orderandbarcodelist = [];
  barcodeslist = []
  addbarcodes(form) {
    console.log('form', form)

    if (this.barcode) {

      if ((this.indentFormGroup.value.indentdetails[0].totCasesRequested == 0) || (this.indentFormGroup.value.indentdetails[0].totCasesRequested == this.indentFormGroup.value.indentdetails[0].totCasesScanned)) {
        this.AlertService.showWarning("No requseted Barcodes", 'warning');
      } else {
        if (this.barcodeslist.length > 0) {

          let exist = this.barcodeslist.find(ele => {
            return ele.barCode == this.barcode
          })
    
          if (exist) {
            this.AlertService.showWarning("Barcode already scanned", 'warning');
          } else {
            this.barcodeslist.push({
              "barCode": this.barcode
            })
            let controlls = this.indentFormGroup.get('indentdetails') as FormArray;
            controlls.controls.forEach((element: any) => {
              element.get('totBottlesScanned').setValue(this.indentFormGroup.value.indentdetails[0].totBottlesScanned + 10);
              element.get('totCasesScanned').setValue(this.indentFormGroup.value.indentdetails[0].totCasesScanned + 1);

            });
          }
        } else {

          this.barcodeslist.push({
            "barCode": this.barcode
          })
          console.log('barcodes', this.barcodeslist)

          let controlls = this.indentFormGroup.get('indentdetails') as FormArray;
          controlls.controls.forEach((element: any) => {
            element.get('totBottlesScanned').setValue(this.indentFormGroup.value.indentdetails[0].totBottlesScanned + 10);
            element.get('totCasesScanned').setValue(this.indentFormGroup.value.indentdetails[0].totCasesScanned + 1);

          });
        }
      } 
    } else {
      this.AlertService.showWarning("Please Enter Barcode ", 'warning');
    }


  }
  resett() {
    this.WholesaleStockinService.getorderpickuplogsReset(this.indentNum).subscribe((res: any) => {
      if(res.status=='f'){
        this.AlertService.showWarning(res.userDisplayMesg, 'warning');
        // this.Router.navigate(['/supplychainmanagement/wholesale/orderpickup/list'])
      }else{
        this.AlertService.showSuccess(res.userDisplayMesg, 'Success');
        this.Router.navigate(['/supplychainmanagement/wholesale/orderpickup/list'])
      }
    })
  }
}
