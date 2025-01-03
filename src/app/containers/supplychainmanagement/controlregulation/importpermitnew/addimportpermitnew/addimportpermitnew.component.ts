import { Component, OnInit } from '@angular/core';
import {
  LiquorTypeService, PackageTypeService, BrandMasterService,
  AlertService, WarehouseNewbrandService, StrengthService, DistileryService,
  WorkflowcofigService, WarehouseMasterDropdownService
} from '@app/services';
import { SubLiquorTypeService } from '@app/services/masters/subliquortype.service';
import { Router, ActivatedRoute } from '@angular/router';
import { DatePipe } from '@angular/common';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { OutofupbrandService } from '@app/services/ware-house/outofupbrand.service';
import { ImportPermitService } from '@app/services/ware-house/importpermit.service';
@Component({
  selector: 'app-addimportpermitnew',
  templateUrl: './addimportpermitnew.component.html',
  styleUrls: ['./addimportpermitnew.component.scss']
})

export class AddimportpermitnewComponent implements OnInit {
  rowFormSubmitted = false;
  formSubmitted = false;
  tabledata = [];
  rawmaterialList: any = [];
  licenceTypeList: any = [];
  licenseeData: any = [];
  packagetypeData: any = [];
  brandlists: any = [];
  viewId: any;
  bottledata: any;
  sizelist: any;
  subliquortype: any;
  allcatagory: any;
  importPermitForm: FormGroup;
  liquorType: any;
  strengthList: any;
  editId: any;
  responseData: any;
  importfee: number = 0;
  splfee: number = 0;
  totalduty: number = 0;
  getAllBrands: any = []
  licenseTypes: any = [];
  liqourtypecode: any = [];
  edpList: any = [];
  etinList: any = [];
  brandDetailsList: any;
  brandDetailsId: any;
  packageSizeList: any;
  categoryList: any;
  workflowobj: any;
  isApprover: boolean;
  disable: boolean = false;
  LicenceDetails: any;
  unitAddress:any;
  sendBackObj = {
    rejectid:''
  };
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private datePipe: DatePipe,
    private fb: FormBuilder,
    private liquorTypeService: LiquorTypeService,
    private packageService: PackageTypeService,
    private brandService: BrandMasterService,
    private alert: AlertService,
    private distilleryService: DistileryService,
    private WarehouseMasterDropdownService: WarehouseMasterDropdownService,
    private brandregservice: OutofupbrandService,
    private strengthService: StrengthService,
    private subliquorService: SubLiquorTypeService,
    private warehouseNewbrandService: WarehouseNewbrandService,
    private importpermitService: ImportPermitService,
    private WorkflowcofigService: WorkflowcofigService,
  ) { }


  ngOnInit() {
    this.workflow()
    this.route.params.subscribe(param => {
      if (param.id) {
        this.editId = param.id;
        this.getImportPermitById(param.id);
      }
    });

    this.buildFormGroup();
    // this.commonControl();
    this.getLicenseType();

  }
 
  workflow() {
    let iscustomer = localStorage.getItem('IS_CUSTOMER');
    console.log('is customer', iscustomer)
    if (iscustomer == "false") {
      this.WorkflowcofigService.getworkflowbydesignation('WAREHOUSE', 'WAREHOUSE_IMPORT_PERMIT_REQUEST').subscribe((resp: any) => {
        this.workflowobj = resp.content
        if (this.workflowobj && this.workflowobj.isEditable == true) {
          this.isApprover = true;
          this.importPermitForm.controls['licenseType'].disable();
          this.importPermitForm.controls['unitAddress'].disable();
          this.importPermitForm.controls['liquorTypeId'].disable();
          this.importPermitForm.controls['subLiquorTypeName'].disable();
          this.importPermitForm.controls['brandId'].disable();
          this.importPermitForm.controls['categoryId'].disable();
          this.importPermitForm.controls['packageSizeId'].disable();
          this.importPermitForm.controls['packageTypeId'].disable();
          this.importPermitForm.controls['strengthName'].disable();
          this.importPermitForm.controls['edp'].disable();
          this.importPermitForm.controls['parentEtin'].disable();
          this.importPermitForm.controls['licenseType'].disable();
        }
      })
    }
  }


  getImportPermitById(id) {
    this.importpermitService.getImportPermitById(id).subscribe((resp: any) => {
      this.responseData = resp.data;
      let toltCases = 0;
      const control = this.importPermitForm.get('products') as FormArray;
      this.importPermitForm.get('licenseType').setValue(resp.data.importPermitIndentDetails.unitLicenseType)
      this.getlicensedata(resp.data.importPermitIndentDetails.unitLicenseType);
      resp.data.importPermitIndentDetails.importPermitProdDetails.forEach((ele, i) => {
        const obj = {
          productLibrary: ele.productLibrary,
          totalDuty: ele.totalDuty,
          calculatedImportFee: ele.calculatedImportFee,
          importPermitRequestDetails: {},
          noOfBottles: ele.noOfBottles,
          noOfCases: ele.noOfCases,
          specialFee: ele.specialFee,
          amount: ele.amount,
          cottonSize: (ele.noOfBottles / ele.noOfCases),
          id: ele.id,
        };
        toltCases = toltCases + parseInt(ele.noOfCases);
        this.importPermitForm.patchValue({
          totalNoOfCases: toltCases
        });
        control.push(this.addProduct(obj));
        this.calculation();
      });
    });
  }
  buildFormGroup() {
    this.importPermitForm = this.fb.group({
      date: [this.datePipe.transform(new Date(), 'yyyy-MM-dd')],
      licenseType: [''],
      licenseNo: [''],
      unitAddress: [''],
      liquorTypeId: [''],
      subLiquorTypeName: [''],
      brandId: [''],
      categoryId: [''],
      packageSizeId: [''],
      packageTypeId: [''],
      // categoryValue: [''],
      strengthName: [''],
      edp: [''],
      cottonSize: '',
      gtin: [''],
      bottlesPerCases: [''],
      totalNoOfCases: [],
      totalNoOfBottles: [],
      totBulkLitres: [],
      parentEtin: [''],
      supplyTypeId: [''],
      domainId: [''],
      rejectid:[''],
      products: this.fb.array([
      ])
    });
  }


  get importForm() {
    return this.importPermitForm.controls;
  }

  //  getLicenseDetails() {
  //   this.importpermitService.getLicenseDetails().subscribe((resp: any) => {
  //     this.LicenceDetails = resp.data;
  //   });
  // }
 
  // getlicensedata(event) {
  //   var findedData = this.LicenceDetails.find(i => i.licenseNumber === event);
  //   if (findedData) {
  //     this.unitAddress=findedData.street+','+findedData.tahsilDesc+','+findedData.districtDesc+','+findedData.pinCode+','+findedData.stateDesc+','+findedData.country
  //     this.importPermitForm.patchValue({
  //       // unitName: findedData.unitName,
  //       // unitAddress: findedData.unitAddress,
  //       street: findedData.street,
  //       tahsilDesc: findedData.tahsilDesc,
  //       districtDesc: findedData.districtDesc,
  //       pinCode: findedData.pinCode,
  //       stateDesc: findedData.stateDesc,
  //       country: findedData.country,
  //     });
  //     this.getAllLiquor()
  //   }
  // }

  getLicenseType() {
    this.WarehouseMasterDropdownService.getTempLicense().subscribe((resp: any) => {
      this.licenseTypes = resp.content;
    });
  }

  getlicensedata(eventValue) {
    var findedData = this.licenseTypes.find(i => i.LicenseType === eventValue);
    if (findedData) {
      this.importPermitForm.patchValue({
        licenseNo: findedData.LicenseNumber,
        unitAddress: findedData.Address,
      });
      this.getAllLiquor()
    }
  }

  getAllLiquor() {
    const payload = {
      licenseNumber: this.importPermitForm.get('licenseNo').value,
      brandDropdownType: 'LIQUOR_TYPE',
    }
    this.WarehouseMasterDropdownService.findBrandDropdowns(payload).subscribe((responceData: any) => {
      this.liquorType = responceData.content;
    });
  }

  getSubLiquorType(liquorId) {
    const payload = {
      licenseNumber: this.importPermitForm.get('licenseNo').value,
      brandDropdownType: 'SUB_LIQUOR_TYPE',
      liquorTypeCode: liquorId
    }
    this.liqourtypecode = liquorId;
    if (liquorId) {
      this.WarehouseMasterDropdownService.findBrandDropdowns(payload).subscribe((resp: any) => {

        this.subliquortype = resp.content;
      });
    }

  }

  getBrandname(code) {
    const payload = {
      licenseNumber: this.importPermitForm.get('licenseNo').value,
      brandDropdownType: 'BRAND_NAME',
      liquorTypeCode: this.liqourtypecode,
      subLiquorTypeCode: code
    }
    if (code) {
      this.WarehouseMasterDropdownService.findBrandDropdowns(payload).subscribe((resp: any) => {
        this.brandlists = resp.content;
      });
    }
  }

  getCategory(code) {
    const payload = {
      licenseNumber: this.importPermitForm.get('licenseNo').value,
      brandDropdownType: 'CATEGORY',
      liquorTypeCode: this.liqourtypecode,
      subLiquorTypeCode: this.importPermitForm.get('subLiquorTypeName').value,
      brandCode: code
    }
    if (code) {
      this.WarehouseMasterDropdownService.findBrandDropdowns(payload).subscribe((resp: any) => {
        this.categoryList = resp.content;
      });
    }
  }

  getStrength(code?) {
    const payload = {
      licenseNumber: this.importPermitForm.get('licenseNo').value,
      brandDropdownType: 'STRENGTH',
      liquorTypeCode: this.liqourtypecode,
      subLiquorTypeCode: this.importPermitForm.get('subLiquorTypeName').value,
      brandCode: this.importPermitForm.get('brandId').value,
      // domainCode: this.importPermitForm.get('domain').value,
      // supplyTypeCode: code
    }
    if (code) {
      this.WarehouseMasterDropdownService.findBrandDropdowns(payload).subscribe((resp: any) => {
        this.strengthList = resp.content;
      });
    }
  }

  getEDP(code?) {
    const payload = {
      licenseNumber: this.importPermitForm.get('licenseNo').value,
      brandDropdownType: 'EDP',
      liquorTypeCode: this.liqourtypecode,
      subLiquorTypeCode: this.importPermitForm.get('subLiquorTypeName').value,
      brandCode: this.importPermitForm.get('brandId').value,
      // domainCode: this.importPermitForm.get('domain').value,
      // supplyTypeCode: this.importPermitForm.get('supplyType').value,
      brandStrength: parseInt(code)
    }
    if (code) {
      this.WarehouseMasterDropdownService.findBrandDropdowns(payload).subscribe((resp: any) => {
        this.edpList = resp.content;
      });
    }
  }

  getETIN(code?) {
    const payload = {
      licenseNumber: this.importPermitForm.get('licenseNo').value,
      brandDropdownType: 'ETIN',
      liquorTypeCode: this.liqourtypecode,
      subLiquorTypeCode: this.importPermitForm.get('subLiquorTypeName').value,
      brandCode: this.importPermitForm.get('brandId').value,
      // domainCode: this.importPermitForm.get('domain').value,
      // supplyTypeCode: this.importPermitForm.get('supplyType').value,
      brandStrength: this.importPermitForm.get('strengthName').value,
      edp: parseInt(code)
    }
    if (code) {
      this.WarehouseMasterDropdownService.findBrandDropdowns(payload).subscribe((resp: any) => {
        this.etinList = resp.content;
      });
      if (this.etinList) {
        this.importPermitForm.patchValue({
          domainId: this.edpList.find(x => x.edp == code).domainCode,
          supplyTypeId: this.edpList.find(x => x.edp == code).supplyTypeCode,
        })
      }
    }
  }

  getBrandId(code?) {
    const payload = {
      licenseNumber: this.importPermitForm.get('licenseNo').value,
      liquorTypeCode: this.liqourtypecode,
      subLiquorTypeCode: this.importPermitForm.get('subLiquorTypeName').value,
      brandCode: this.importPermitForm.get('brandId').value,
      // domainCode: this.importPermitForm.get('domain').value,
      // supplyTypeCode: this.importPermitForm.get('supplyType').value,
      domainCode: this.importPermitForm.get('domainId').value,
      supplyTypeCode: this.importPermitForm.get('supplyTypeId').value,
      brandStrength: this.importPermitForm.get('strengthName').value,
      edp: parseInt(this.importPermitForm.get('edp').value),
      etin: code
    }
    if (code) {
      this.WarehouseMasterDropdownService.findBrand(payload).subscribe((resp: any) => {
        this.brandDetailsList = resp.content;
        this.brandDetailsId = resp.content.id;
        this.getPackageSize(this.brandDetailsId);
      });
    }
  }

  getPackageSize(code?) {
    const payload = {
      brandDetailId: parseInt(code),
      labelDropdownType: 'PACKAGE_SIZE',
    }
    if (code) {
      this.WarehouseMasterDropdownService.findLabelDetails(payload).subscribe((resp: any) => {
        this.packageSizeList = resp.content;
      });
    }
  }

  getPackagetype(code) {
    const payload = {
      brandDetailId: this.brandDetailsId,
      labelDropdownType: 'PACKAGE_TYPE',
      packageSizeCode: code
    }
    if (code) {
      this.WarehouseMasterDropdownService.findLabelDetails(payload).subscribe((resp: any) => {
        this.packagetypeData = resp.content;
      });
    }
  }
  getGtin(code) {
    const { gtin, cartonSize } = this.packagetypeData.find(item => item.packagingTypeCode == code);
    this.importPermitForm.patchValue({
      gtin: gtin,
      bottlesPerCases: cartonSize
    })
  }

  getcommondata(name, val) {
    let data;
    switch (name) {
      case 'Brand':
        data = this.getAllBrands.find(x => x.brandValue == val);
        break;
      case 'category':
        data = this.allcatagory.find(x => x.name == val);
        break;
      case 'liqtype':
        data = this.liquorType.find(x => x.id == val);
        break;
      case 'subliqtype':
        data = this.subliquortype.find(x => x.name == val);
        break;
      case 'packagesize':
        data = this.sizelist.find(x => x.packageSizeName == val);
        break;
      case 'packagetype':
        data = this.packagetypeData.find(x => x.packagingTypeName == val);
        break;
      case 'strength':
        data = this.strengthList.find(x => x.strength == val);
        break;
    }
    return data.brandCode || data.code || data.supplyType || data.packagingCode || data.packagingTypeCode
  }
  addRow(data?: any) {
    if (!data.value.parentEtin || !data.value.packageSizeId) {
      this.rowFormSubmitted = true;
      this.alert.showError('Please fill the all fields', 'Error');
    } else {
      const control = this.importPermitForm.get('products') as FormArray;
      if (control.length < 5) {
        const obj = {
          productLibrary: {
            brandNameValue: this.brandlists.find(x => x.brandCode == data.value.brandId).brandValue,
            brandNameCode: this.brandlists.find(x => x.brandCode == data.value.brandId).brandCode,
            categoryValue: this.categoryList.find(x => x.categoryCode == data.value.categoryId).categoryValue,
            categoryCode: this.categoryList.find(x => x.categoryCode == data.value.categoryId).categoryCode,
            packageSizeValue: this.packageSizeList.find(x => x.packageSizeCode == data.value.packageSizeId).packageSizeName,
            packageSizeCode: this.packageSizeList.find(x => x.packageSizeCode == data.value.packageSizeId).packageSizeCode,
            packageTypeValue: this.packagetypeData.find(x => x.packagingTypeCode == data.value.packageTypeId).packagingTypeName,
            packageTypeCode: this.packagetypeData.find(x => x.packagingTypeCode == data.value.packageTypeId).packagingTypeCode,
            liquorTypeValue: this.liquorType.find(x => x.liquorTypeCode == data.value.liquorTypeId).liquorTypeValue,
            liquorTypeCode: this.liquorType.find(x => x.liquorTypeCode == data.value.liquorTypeId).liquorTypeCode,
            subLiquorTypeCode: this.subliquortype.find(x => x.subLiquorTypeValue == data.value.subLiquorTypeName).subLiquorTypeValue,
            subLiquorTypeValue: this.subliquortype.find(x => x.subLiquorTypeValue == data.value.subLiquorTypeName).subLiquorTypeValue,
            strengthValue: this.strengthList.find(x => x.brandStrength = data.value.strengthName).brandStrength,
            strengthCode: this.strengthList.find(x => x.brandStrength = data.value.strengthName).brandStrength,
            edpcode: this.edpList.find(x => x.edp == data.value.edp).edp,
            edpvalue: this.edpList.find(x => x.edp == data.value.edp).edp,
            // parentETIN: data.value.parentEtin || '',
            parentEtin: this.etinList.find(x => x.parentEtin == data.value.parentEtin).parentEtin,
          },
          "totalDuty": 10,
          "calculatedImportFee": 10,
          "id": 0,
          "importPermitRequestDetails": {},
          "noOfBottles": '',
          "noOfCases": 0,
          "specialFee": 10,
          amount: this.packagetypeData.find(x => x.packagingTypeCode == data.value.packageTypeId).mrp,
          cottonSize: data.value.bottlesPerCases || 0
        };
        let find = this.importPermitForm.get('products')['controls'].find(x => x.value.brandNameValue == data.value.brandId && x.value.packageSizeValue == data.value.packageSizeId);
        if (!find) {
          control.push(this.addProduct(obj));
          this.rowFormSubmitted = false;
          this.resetForm();
        } else {
          this.alert.showError('Data Already Exists', 'Error')
        }
        //  control.push(this.addProduct(obj));
        this.calculation();
      } else {
        this.alert.showError('More than 5 records not allowed', 'Error');
      }
    }
  }
  resetForm() {
    this.importPermitForm.patchValue({
      liquorTypeId: '',
      subLiquorTypeName: '',
      brandId: '',
      packageSizeId: '',
      packageTypeId: '',
      categoryValue: '',
      strengthName: '',
      edp: '',
      gtin: '',
      categoryId: '',
      parentEtin: '',
      bottlesPerCases: '',

    });
  }
  calculation() {
    let tot: any = 0;
    let totQty = 0;
    let totBulkQty
    let importfee = 0;
    let splfee = 0;
    let totalduty = 0;
    this.importPermitForm.get('products')['controls'].forEach((ele, i) => {
      // console.log(ele.value.noOfBottles);
      tot = tot + ele.value.noOfBottles;
      importfee += ele.value.calculatedImportFee;
      splfee += ele.value.specialFee;
      totalduty += ele.value.totalDuty;
      let packagesize = ele.value.productLibrary.packageSizeValue;
      packagesize = parseInt(packagesize) * parseInt(ele.value.noOfBottles);
      totQty = totQty + packagesize;

      totBulkQty = totQty / 1000;
      console.log(totQty / 1000);
      // console.log(ele);
    });
    this.importfee = importfee;
    this.splfee = splfee;
    this.totalduty = totalduty;
    this.importPermitForm.patchValue({
      totalNoOfBottles: tot,
      totBulkLitres: totBulkQty
    });
  }
  addProduct(data?: any): FormGroup {
    return this.fb.group({
      productLibrary: {
        brandNameValue: data && data.productLibrary && data.productLibrary.brandNameValue || '',
        brandNameCode: data && data.productLibrary && data.productLibrary.brandNameCode || '',
        packageSizeValue: data && data.productLibrary && data.productLibrary.packageSizeValue || '',
        packageTypeValue: data && data.productLibrary && data.productLibrary.packageTypeValue || '',
        strengthValue: data && data.productLibrary && data.productLibrary.strength || '',
        categoryValue: data && data.productLibrary && data.productLibrary.categoryValue || '',
        categoryCode: data && data.productLibrary && data.productLibrary.categoryCode || '',
        packageSizeCode: data && data.productLibrary && data.productLibrary.packageSizeCode || '',
        packageTypeCode: data && data.productLibrary && data.productLibrary.packageTypeCode || '',
        liquorTypeValue: data && data.productLibrary && data.productLibrary.liquorTypeValue || '',
        liquorTypeCode: data && data.productLibrary && data.productLibrary.liquorTypeCode || '',
        subLiquorTypeCode: data && data.productLibrary && data.productLibrary.subLiquorTypeCode || '',
        subLiquorTypeValue: data && data.productLibrary && data.productLibrary.subLiquorTypeValue || '',
        strengthCode: data && data.productLibrary && data.productLibrary.strengthCode || '',
        edpcode: data && data.productLibrary && data.productLibrary.edpcode || '',
        edpvalue: data && data.productLibrary && data.productLibrary.edpvalue || 0,
        parentETIN: data && data.productLibrary && data.productLibrary.parentEtin || '',

      },

      // availCases: data && data.availBottles || 10,
      // availBottles:  data && data.availBottles || 100,
      noOfBottles: data && data.noOfBottles || '',
      noOfCases: data && data.noOfCases || ['', Validators.required],
      specialFee: data && data.specialFee || '',
      calculatedImportFee: data && data.calculatedImportFee || '',
      totalDuty: data && data.totalDuty || '',
      amount: 0,
      cottonSize: data.cottonSize || 0,
      id: data && data.id || 0
    });
  }
  keypress(event: any, form) {
    let data = form.get('noOfCases').value
    form.get('noOfBottles').setValue(form.get('cottonSize').value * data);
    this.calculation();
    this.totalCases();
    // const pattern = /^[\d]+$/;
    // const inputChar = String.fromCharCode(event.charCode);
    // if (event.keyCode !== 8 && !pattern.test(inputChar) || event.target.value.length > 4) {
    //   event.preventDefault();
    // }
  }
  totalCases() {
    let toltCases = 0;
    this.importPermitForm.get('products')['controls'].forEach((ele, i) => {
      toltCases = toltCases + parseInt(ele.value.noOfCases);
    });
    this.importPermitForm.patchValue({
      totalNoOfCases: toltCases
    });
  }
  commonControl() {
    this.brandregservice.getallbrand()
      .subscribe((resp: any) => {
        this.brandlists = resp.data;
        this.brandlists.forEach((ele, i) => {
          this.getAllBrands.push(ele.brandRegistrationDetails.brandDetails);
        });
      });
    // this.packageService.allPackageTypes().subscribe((responceData: any) => {
    //   this.packagetypeData = responceData.data;
    // });
    this.subliquorService.getAllCatagory().subscribe((responceData: any) => {
      this.allcatagory = responceData.data;
    });
    this.strengthService.getAllStrength().subscribe((responceData: any) => {
      this.strengthList = responceData.data;
    });
    this.liquorTypeService.getLiquorType().subscribe((responceData: any) => {
      this.liquorType = responceData.data;
    });

    // this.warehouseNewbrandService.getallmeasurement().subscribe((responceData: any) => {
    //   console.log(responceData);
    //   this.sizelist = responceData.data;
    // });
  }

  deleteRow(id, data) {
    (this.importPermitForm.get('products') as FormArray).removeAt(id);
    this.calculation();
    this.totalCases();
  }
  getparentEtin(data) {
    let parentin = this.brandlists.find(x => x.brandRegistrationDetails.brandDetails.parentEtin == data);
    const parentEtion = parentin.brandRegistrationDetails.brandDetails.parentEtin;
    const licencenumber = parentin.brandRegistrationDetails.brandRegistrantLicenseNo;
    this.importpermitService.getbrandddetails(parentEtion, licencenumber)
      .subscribe((resp: any) => {
        let responce = resp.data;
        this.sizelist = resp.data && resp.data.labeldetails;
        this.packagetypeData = resp.data.labeldetails;
        this.getSubLiquorType(this.liquorType.find(x => x.name == responce.liquorTypeValue).id)
        this.importPermitForm.patchValue({
          brandId: responce.brandValue,
          liquorTypeId: this.liquorType.find(x => x.name == responce.liquorTypeValue).id,
          subLiquorTypeName: responce.subLiquorTypeValue,
          categoryValue: responce.categoryValue,
          strengthName: responce.brandStrength,
          edp: responce.edp
        });
      });
  }
  save(form, method) {
    let sendBackLevel =this.importPermitForm.get('rejectid').value;
    if (!form.valid) {
      this.formSubmitted = true;
    } else {
      let event
      if (method == 'SUBMITTED' || method == 'DRAFT') {
        event = 'INITIATE'
      } else {
        event = method
      }
      const control = this.importPermitForm.get('products') as FormArray;
      console.log(control.value);
      console.log(this.importPermitForm.get('products').value);
      const postParm = {
        "applicationNumber": "",
        "createdBy": 0,
        "createdDate": "2021-05-18T09:18:45.402Z",
        "id": this.editId ? this.editId : 0,
        "importPermitIndentDetails": {
          "applicationNumber": "string",
          "createdBy": 0,
          "createdDate": "2021-05-18T09:18:45.402Z",
          "id": this.responseData && this.responseData.importPermitIndentDetails.id ? this.responseData.importPermitIndentDetails.id : 0,
          "importPermitComments": [
            {
              "action": "string",
              "applicationNumber": "string",
              "comments": "string",
              "createdBy": 0,
              "createdDate": "2021-05-18T09:18:45.402Z",
              "designation": "string",
              "id": this.responseData && this.responseData.importPermitIndentDetails.importPermitComments[0].id ? this.responseData.importPermitIndentDetails.importPermitComments[0].id : 0,
              "importPermitRequestDetails": {},
              "level": "",
              "modifiedBy": 0,
              "modifiedDate": "2021-05-18T09:18:45.402Z",
              "userName": "string"
            }
          ],
          "importPermitIndentRequest": {},
          "importPermitPaymentDetails": {
            "advancedAmt": 500,
            "createdBy": 0,
            "createdDate": "2021-05-18T09:18:45.402Z",
            "id": this.responseData && this.responseData.importPermitIndentDetails.importPermitPaymentDetails.id ? this.responseData.importPermitIndentDetails.importPermitPaymentDetails.id : 0,
            "importPermitRequestDetails": {},
            "modeOfPaymentCode": "NEFT",
            "modeOfPaymentValue": "300",
            "modifiedBy": 0,
            "modifiedDate": "2021-05-18T09:18:45.402Z",
            "paymentDate": "2021-05-18T09:18:45.402Z",
            "totalCost": 1000,
            "transactionNo": "string"
          },
          "importPermitProdDetails": control.value,
          "importPermitStatus": "PENDING",
          "isDigitalSignature": true,
          "level": (this.workflowobj && this.workflowobj.level) ? this.workflowobj.level : 'Level 1',
          "modifiedBy": 0,
          "modifiedDate": "2021-05-18T09:18:45.402Z",
          "sentBackLevels": '',
          "stage": "string",
          "stageDesc": "string",
          "status": "INITIATE",
          "totBulkLitres": form.value.totBulkLitres,
          "totalNoOfBottles": form.value.totalNoOfBottles,
          "totalNoOfCases": form.value.totalNoOfCases,
          "unitLicenseType": form.value.licenseType,
          "unitName": "string"
        },
        "indentDate": this.responseData && this.responseData.indentDate ? this.responseData.indentDate : '',
        "indentNo": this.responseData && this.responseData.indentNo ? this.responseData.indentNo : '',
        "isDigitalSignature": true,
        "event": event,
        "level": (this.workflowobj && this.workflowobj.level) ? this.workflowobj.level : 'Level 1',
        "modifiedBy": 0,
        "modifiedDate": "2021-05-18T09:18:45.403Z",
        "sentBackLevels": sendBackLevel ? sendBackLevel : '',
        "stage": "string",
        "stageDesc": "string",
        "status": method
      };
      if (control.length > 0) {
        if (this.editId) {
          postParm['applicationNumber'] = this.responseData.applicationNumber;
          postParm['id'] = this.editId;
          this.importpermitService.addImport(postParm)
            .subscribe((resp: any) => {
              if (resp.status == 's') {
                this.alert.showSuccess(resp.userDisplayMesg, 'Success');
                this.router.navigate(['supplychainmanagement/warehouse/importpermitnew/list']);
              }
            });
          console.log(postParm);
        } else {
          this.importpermitService.addImport(postParm)
            .subscribe((resp: any) => {
              if (resp.status == 's') {
                this.alert.showSuccess(resp.userDisplayMesg, 'Success');
                this.router.navigate(['supplychainmanagement/warehouse/importpermitnew/list']);
              }
            });
        }
      } else {
        this.alert.showError('Please add one record', 'Error');
      }
    }
  }


  getcortonsize(name) {
    let find = this.sizelist.find(x => x.packageSizeName == name);
    this.importPermitForm.patchValue({
      packageTypeId: find.packagingTypeName,
      cottonSize: find.cartonSize
    });
  }


  // keyword = 'name';
  // public countries = [
  //   {
  //     id: 1,
  //     name: 'Albania',
  //   },
  //   {
  //     id: 2,
  //     name: 'Belgium',
  //   },
  //   {
  //     id: 3,
  //     name: 'Denmark',
  //   },
  //   {
  //     id: 4,
  //     name: 'Montenegro',
  //   },
  //   {
  //     id: 5,
  //     name: 'Turkey',
  //   },
  //   {
  //     id: 6,
  //     name: 'Ukraine',
  //   },
  //   {
  //     id: 7,
  //     name: 'Macedonia',
  //   },
  //   {
  //     id: 8,
  //     name: 'Slovenia',
  //   },
  //   {
  //     id: 9,
  //     name: 'Georgia',
  //   },
  //   {
  //     id: 10,
  //     name: 'India',
  //   },
  //   {
  //     id: 11,
  //     name: 'Russia',
  //   },
  //   {
  //     id: 12,
  //     name: 'Switzerland',
  //   }
  // ];
  //   selectEvent(item) {
  //   // do something with selected item
  // }

  // onChangeSearch(search: string) {
  //   // fetch remote data from here
  //   // And reassign the 'data' which is binded to 'data' property.
  // }

  // onFocused(e) {
  //   // do something
  // }

}
function id(id: any) {
  throw new Error('Function not implemented.');
}

