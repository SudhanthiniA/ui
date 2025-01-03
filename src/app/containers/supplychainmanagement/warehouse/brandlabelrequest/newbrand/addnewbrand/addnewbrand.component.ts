import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { DatePipe } from '@angular/common';
import { AlertService, ApiService, BrandMasterService } from '@app/services';
import { WarehouseNewbrandService } from '@app/services/ware-house';
import { FormBuilder, FormGroup, FormArray } from '@angular/forms';
// import {ApiService,WarehouseNewbrandService} from '@appServices/index.ts';

@Component({
  selector: 'app-addnewbrand',
  templateUrl: './addnewbrand.component.html',
  styleUrls: ['./addnewbrand.component.scss']
})
export class AddnewbrandComponent implements OnInit {
  BrandNewObj: any;
  brandreglist = [{ "id": 1, "name": "Yes", "selectedvalue": true }, { "id": 2, "name": "No", "selectedvalue": false }];
  brandreg = [{ "id": 1, "name": "Yes", "selectedvalue": true }, { "id": 2, "name": "No", "selectedvalue": false }];
  brandregfor = [{ "id": 1, "name": "UP", "selectedvalue": true }, { "id": 2, "name": "Other State", "selectedvalue": false },
  { "id": 3, "name": "Overseas", "selectedvalue": false }];

  statelist: any;
  subcatlist: any;
  packagelist: any;
  liqourlist: any;
  formSubmitted = false;
  domainlist: any;
  sizelist: any;
  editId: any;
  date: any;
  curDate = new Date();


  addedit: any;
  entitylist: any;
  cartlist: any;
  originlistbyId: any;
  editdata: any;
  unitnamelicensename: any;
  brandresp: any;
  others = false
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private datepipe: DatePipe,
    private warehouseNewbrandService: WarehouseNewbrandService,
    private alert: AlertService,
    private apiservice: ApiService,
    private formbuilder: FormBuilder,
    private brndreg: BrandMasterService
  ) { }

  ngOnInit() {
    this.BrandNewObj = this.formbuilder.group({
      originId: '',
      domainId: '',
      liquorTypeId: '',
      subcategoryTypeId: '',
      unitName: '',
      licenseType: '',
      brandStatus: '1',
      brandName: '',
      brandStrength: '',
      brandetails: '1',
      registerNo: '',
      brandregFor: 1,
      brandAlreadyRegisterForYearorlabel: 'Yes',
      brandAlreadyRegister: 'Yes',
      // addressregestrant: '',
      address: 'Plot-254,BanjaraHills',
      state: 'Telanaga',
      city: 'Hyderabad',

      entityId: '1',
      id: 0,
      reqdate: '',

      createdDate: this.datepipe.transform(new Date(), 'yyyy-MM-dd'),
      requestBrandDetlist: this.formbuilder.array([
        this.addFormGroupTable()
      ])
    })
    this.BrandNewObj.createdDate = this.datepipe.transform(new Date(), 'yyyy-MM-dd');
    // this.BrandNewObj.brandAlreadyRegisterForYearorlabel = 'Yes'
    // this.BrandNewObj.brandAlreadyRegister = 'Yes'
    this.getallstatelist();
    this.getallsubcatlist();
    this.getallpackagelist();
    this.getallliquortype();
    this.getalldomain();
    this.getsize();
    this.getentity();
    this.getallcart();
    this.getunitnamelicense();
    this.route.params.subscribe(params => {
      console.log('paramid', params);
      if (params.id) {
        this.getById(params.id);
        this.BrandNewObj.id = params.id;
        this.editId = params.id;
        // this.addedit = 'Edit';
      }
    });
    this.addedit = this.router.url.includes('add') === true ? 'Add' : 'Edit';
    console.log(this.BrandNewObj)
  }
  public removeSelectedRow(idx: number) {
    (this.BrandNewObj.get('requestBrandDetlist') as FormArray).removeAt(idx);
  }
  public getPresFormLength(): number {
    return (this.BrandNewObj.get('requestBrandDetlist') as FormArray).length;
  }

  getById(id) {
    this.warehouseNewbrandService.getbyid(id).subscribe((response: any) => {
      if (response.status == 's') {
        console.log('getbyid', response);
        this.editdata = response.data
        this.BrandNewObj.patchValue({
          licenseType: this.editdata.brandName,
          brandName: this.editdata.brandName,
          brandStatus: this.editdata.status,
          brandStrength: this.editdata.brandStrength,
          registerNo: this.editdata.registerNo,
          createdBy: this.editdata.createdBy,
          createdDate: this.editdata.createdDate,
          domainId: this.editdata.domainId,
          entityId: this.editdata.entityId,
          liquorTypeId: this.editdata.liquorTypeId,
          modifiedBy: "",
          modifiedDate: this.editdata.createdDate,
          originId: this.editdata.originId,
          status: status,
          subcategoryTypeId: this.editdata.subcategoryTypeId,
          unitName: this.editdata.unitName,
          brandregFor: this.editdata.brandregFor,
          address: this.editdata.address,
          state: this.editdata.state,
          city: this.editdata.city,
          reqdate: this.editdata.createdDate,
          brandAlreadyRegister: (this.editdata.brandAlreadyRegister) ? true : false,
          brandAlreadyRegisterForYearorlabel: (this.editdata.brandAlreadyRegisterForYearorlabel) ? true : false,
        })
        this.editdata.requestBrandDetlist.forEach((element: any, idx: number) => {
          if (element) {
            (this.BrandNewObj.get('requestBrandDetlist') as FormArray).removeAt(idx);
            (this.BrandNewObj.get('requestBrandDetlist') as FormArray).push(this.addFormGroupTable(element));
            this.addEmptyCtrl();
          }
        });
        this.BrandNewObj = response.data;
        this.BrandNewObj.createdDate =
          this.datepipe.transform(response.data.createdDate, 'yyyy-MM-dd');
        this.BrandNewObj.brandAlreadyRegisterForYearorlabel = response.data.brandAlreadyRegisterForYearorlabel
      }
    })
  }

  getallcart() {
    this.warehouseNewbrandService.getAllcart().subscribe((responceData: any) => {
      console.log(responceData);
      this.cartlist = responceData.data;
    });

    this.brndreg.getBrandMaster().subscribe((resp: any) => {
      this.brandresp = resp.data;
    })
  }
  getallstatelist() {
    this.warehouseNewbrandService.getAllState().subscribe((responceData: any) => {
      console.log(responceData);
      this.statelist = responceData.data;
    });

  }
  getallsubcatlist() {
    this.warehouseNewbrandService.getAllSubCategory().subscribe((responceData: any) => {
      console.log(responceData);
      this.subcatlist = responceData.data;
    });

  }
  getunitnamelicense() {
    this.warehouseNewbrandService.getunitlicensetype().subscribe((responceData: any) => {
      this.unitnamelicensename = responceData
      console.log('unitname', responceData);
      if (responceData) {
        this.BrandNewObj.patchValue({
          unitName: responceData.unitName,
          licenseType: responceData.licenseType
        })
      }

    })
  }
  getallpackagelist() {
    this.warehouseNewbrandService.getAllpackageType().subscribe((responceData: any) => {
      console.log(responceData);
      this.packagelist = responceData.data;
    });

  }
  public addEmptyCtrl(): void {
    (this.BrandNewObj.get('requestBrandDetlist') as FormArray).push(this.addFormGroupTable());
  }
  
  addrow() {
    (this.BrandNewObj.get('requestBrandDetlist') as FormArray).push(this.addFormGroupTable());
  }
  addNewRow(rowId) {
    const length = this.getPresFormLength()
    if (length == (rowId + 1)) {
      this.addEmptyCtrl();
    }
  }
  buildformgroup(data?: any) {

    return this.formbuilder.group({
      "additionalConsiderationFees": '',
      "bottoleperCase": '',
      "brandRegistrationId": '',
      "cartonTypeId": '',
      "considerationFees": '',
      "edp": '',
      "gs1Standard": "",
      "id": '',
      "mrpRoundedOff": '',
      "packageTypeId": '',
      "remarks": "",
      "retailerMargin": '',
      "sizeId": '',
      "total": '',
      "wholesalerMargin": ''

    });
  }
  addFormGroupTable(data?: any): FormGroup {
    console.log('data=====>', data)
    return this.formbuilder.group({
      additionalConsiderationFees: data && data.additionalConsiderationFees || '',
      bottoleperCase: data && data.bottoleperCase || '',
      cartonTypeId: data && data.cartonTypeId || '',
      considerationFees: data && data.considerationFees || '',
      edp: data && data.tankId || data && data.edp || '',
      gs1Standard: data && data.gs1Standard || '',
      id: data && data.id || '',
      mrpRoundedOff: data && data.mrpRoundedOff || '',
      packageTypeId: data && data.packageTypeId || '',
      brandRegistrationId: data && data.brandRegistrationId || '',
      remarks: data && data.remarks || '',
      retailerMargin: data && data.retailerMargin || '',
      sizeId: data && data.sizeId || '',
      total: data && data.total || '',
      wholesalerMargin: data && data.wholesalerMargin || '',



    });
  }
  getallliquortype() {
    this.warehouseNewbrandService.getAllLiquorType().subscribe((responceData: any) => {
      console.log(responceData);
      this.liqourlist = responceData.data;
    });

  }
  getalldomain() {

    this.warehouseNewbrandService.getAllDomain().subscribe((responceData: any) => {
      console.log(responceData);
      this.domainlist = responceData.data;
    });
  }
  getOriginlistbyDomainId(id) {
    console.log('code', id)
    let code = this.domainlist.find((ele: any) => {
      return ele.id == id;
    })
    this.warehouseNewbrandService.getoriginlistbyDomainId(code.code).subscribe((responceData: any) => {
      this.statelist = responceData.data
    })
  }
  getsize() {
    this.warehouseNewbrandService.getallmeasurement().subscribe((responceData: any) => {
      console.log(responceData);
      this.sizelist = responceData.data;
    });
  }
  getentity() {
    this.warehouseNewbrandService.getEntityName().subscribe((responceData: any) => {
      console.log(responceData);
      this.entitylist = responceData;
      //  this.BrandNewObj.unitName=responceData.unitName;
      //  this.BrandNewObj.licenseType=responceData.licenseType

      this.BrandNewObj.patchValue({
        unitName: responceData.unitName,
        licenseType: responceData.licenseType
      })
    });
  }



  addBrandDetails(form, status) {
    console.log('fordata', form)



    if (this.editId) {
      const data = (this.BrandNewObj.value.requestBrandDetlist).filter((datas: any) => {
        console.log(datas);
        if (datas.packageTypeId !== '') {
          return datas;
        }
      });
      const paramdpd = {

        "address": form.value.address,
        "applicationNumber": "",
        "brandAlreadyRegister": (this.BrandNewObj.brandAlreadyRegister) ? true : false,
        "brandAlreadyRegisterForYearorlabel": (this.BrandNewObj.brandAlreadyRegisterForYearorlabel) ? true : false,
        "brandName": form.value.brandName,
        "brandStatus": "MAINTENANCE",
        "brandStrength": form.value.brandStrength,
        "brandregFor": 0,
        "city": form.value.city,
        "createdBy": " ",
        "createdDate": form.value.createdDate,
        "domainId": form.value.domainId,
        "entityId": 0,
        "liquorTypeId": +(form.value.liquorTypeId),
        "modifiedBy": "",
        "modifiedDate": 0,
        "originId": +(form.value.originId),
        "registerNo": form.value.registerNo,
        "reqdate": form.value.createdDate,
        "requestBrandDetlist": data,
        "selfLive": "str",
        "state": form.value.state,
        "status": status,
        "subcategoryTypeId": +(form.value.subcategoryTypeId),
        "unitName": form.value.unitName
      }
      paramdpd['id'] = this.editId;

      this.warehouseNewbrandService.updatebranddetails(paramdpd).subscribe((response: any) => {
        if (response.status == "s") {
          this.alert.showSuccess(response.userDisplayMesg, 'Success');
          this.router.navigate(['/supplychainmanagement/warehouse/brandlabelrequest/newbrand/list']);
        }
        else {
          this.alert.showError(response['userDisplayMesg'], 'error')
        }
      })
    } else {
      console.log('formdata', form)
      const data = (this.BrandNewObj.value.requestBrandDetlist).filter((datas: any) => {
        // datas.brandRegistrationId = +(datas.brandRegistrationId);
        datas.cartonTypeId = +(datas.cartonTypeId);
        datas.packageTypeId = +(datas.packageTypeId);
        datas.sizeId = +(datas.sizeId)
        console.log(datas);
        if (datas.packageTypeId !== '') {
          return datas;
        }
      });
      const paramdpd = {
        "unitName": form.value.unitName,
        "address": form.value.address,
        "applicationNumber": "",
        "brandAlreadyRegister": (this.BrandNewObj.brandAlreadyRegister) ? true : false,
        "brandAlreadyRegisterForYearorlabel": (this.BrandNewObj.brandAlreadyRegisterForYearorlabel) ? true : false,
        "brandName": form.value.brandName,
        "brandStatus": "MAINTENANCE",
        "brandStrength": form.value.brandStrength,
        "brandregFor": 0,
        "city": form.value.city,
        "createdBy": " ",
        "createdDate": form.value.createdDate,
        "domainId": form.value.domainId,
        "entityId": 0,
        "liquorTypeId": +(form.value.liquorTypeId),
        "modifiedBy": "",
        "modifiedDate": 0,
        "originId": +(form.value.originId),
        "registerNo": form.value.registerNo,
        "reqdate": form.value.createdDate,
        "requestBrandDetlist": data,
        "selfLive": "str",
        "state": form.value.state,
        "status": status,
        "subcategoryTypeId": +(form.value.subcategoryTypeId),
      }

      this.warehouseNewbrandService.addbranddetails(paramdpd).subscribe((response: any) => {
        if (response.status == "s") {
          this.alert.showSuccess(response.userDisplayMesg, 'Success');
          this.router.navigate(['/supplychainmanagement/warehouse/brandlabelrequest/newbrand/list']);
        }
        else {
          this.alert.showError(response['userDisplayMesg'], 'error')
        }
      })
    }
  }
  
  getbrandname(val) {

    if (val == 'Others') {
      this.others = true;
      this.BrandNewObj.get('brandName').reset()

    } else {
      this.others = false;
      this.BrandNewObj.get('brandName').setValue(val);
    }

  }

  caltotal(form) {

    let sum = form.get('edp').value + form.get('considerationFees').value + form.get('wholesalerMargin').value +
      form.get('retailerMargin').value + form.get('mrpRoundedOff').value + form.get('additionalConsiderationFees').value;

    form.get('total').setValue(sum)
    console.log(form)
  }

 
}
