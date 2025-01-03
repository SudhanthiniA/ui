import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import {
  AlertService, ModeOfPaymentService, MasterDropdownsService,
  WholesaleImportPermitService, WorkflowcofigService, WholesaleIndentRequestService
} from '@app/services';
import { IDropdownSettings } from 'ng-multiselect-dropdown';
interface Post {
  startDate: Date;
}
@Component({
  selector: 'app-addimportpermit',
  templateUrl: './addimportpermit.component.html',
  styleUrls: ['./addimportpermit.component.scss']
})
export class AddimportpermitComponent implements OnInit {
  formSubmitted = false;
  formSubmittedOne = false;
  licenselist: any;
  liqourlist: any;
  subliqourlist: any;
  liquorDetailedList: any;
  brandlist: any;
  packagelist: any;
  categorylist: any;
  strengthlist: any;
  modelist: any;
  consignorForm: FormGroup;
  indentDtlsForm: FormGroup;
  totalValuesForm: FormGroup;
  unitForm: FormGroup;
  paymentForm: FormGroup
  indentDtlsList: any = [];
  totalDuty: any;
  calculatedImportFee: any;
  specialFee: any;
  post: Post = {
    startDate: new Date(Date.now())
  }
  editId: any;
  addedit = 'Add';
  addedithead = 'Add Import Permit';
  indendDtls: any;
  unitAddress: any = {};
  eachlist: any;
  workflowobj: any;
  isApprover = false;
  rejectid: any
  consignorUnitAddress: { unit: string; address: string; };
  unitLicenseList: any;
  liqourtypecode: any;
  edpList: any;
  parentETINlist: any;
  domainId: any;
  supplyTypeId: any;
  brandDetailsId: any;
  packageSizeList: any;
  unitLicenseDetails: any;
  iscustomer: string;

  unitNameDropDownSettings: IDropdownSettings;
  searchValue = null;
  unitNameRequired = false;
  unitNameLists: any;
  disabledUnitName: any = false;
  LicenseMappingDetails: any;
  licenseTypeList: any;

  constructor(
    private modeservice: ModeOfPaymentService,
    private importService: WholesaleImportPermitService,
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private alert: AlertService,
    private datePipe: DatePipe,
    private WorkflowcofigService: WorkflowcofigService,
    private masterDropdownService: MasterDropdownsService,
    private indentRequestService: WholesaleIndentRequestService,
  ) { }

  ngOnInit() {
    this.userType()
    this.workflow()
    this.getAllmode();
    this.unitDetailsFormGroup()
    this.createFormGrp();
    this.indentDtlsFormGroup()
    this.totalValuesFormGroup()
    this.unitNameDropDownSettings = {
      singleSelection: true,
      idField: 'id',
      textField: 'unitName', 
      allowSearchFilter: true,
      closeDropDownOnSelection: true
    };

  }

  statusBasedDisable(status) {
    if (status === "SENDBACK") {
      this.indentDtlsForm.disable();
      this.consignorForm.disable();
      this.paymentForm.disable();
      this.disabledUnitName = true;
      // this.disabledIndentDetails = true;
    }
  }

  onItemSelect(item) {
    this.unitNameRequired = true;

    var findedData = this.unitNameLists.find(i => i.unitName === item.unitName);
    if (findedData) {
      this.consignorForm.patchValue({
        licenseNo: findedData.licenseNumber,
        consignorUnitNameCode: findedData.licenseNumber,
        consignorUnitNameValue: item.unitName,
        consignorUnitAddress: findedData.street + ', ' + findedData.tahsilDesc + ', ' + findedData.districtDesc + ', ' + findedData.stateDesc + ', ' + findedData.country + ', ' + findedData.pinCode,
      });
    }
    console.log(this.consignorForm.get('licenseNo').value, '234234234')
    this.getAllLiquor();
  }

  onItemDeselect(item: any) {
    this.unitNameRequired = false;
    this.consignorForm.patchValue({
      licenseNo: '',
      consignorUnitNameCode: '',
      consignorUnitNameValue: '',
      consignorUnitAddress: ''
    });
  }

  onFilterChange(item: any) {
    console.log(item);
    if (item.length > 2) {
      this.searchValue = item;
      this.getUnitName(this.searchValue);
    } else if (item.length === 0) {
      this.searchValue = null;
      this.getUnitName(this.searchValue);
    }
  }

  onDropDownClose() {
    if (this.searchValue !== null) {
      this.searchValue = null;
      this.getUnitName(this.searchValue);
    }
  }

  getUnitName(unitName) {
    const requestParam = {
      filters: { unitName: unitName, isActive: true },
      pageNo: 0, paginationSize: 10,
      category: this.consignorForm.value.entityType,
      subCategory: this.consignorForm.value.licenseType.replace(/[^^a-zA-Z0-9]/g, ""),
      size: 5
    };
    this.indentRequestService.getUnitName(requestParam)
      .subscribe((resp: any) => {
        this.unitNameLists = resp.content;
      });
  }

  getConsignorDetails(licenseCategoryType, licenseSubCategory) {
    this.indentRequestService.findLicenseMapping(licenseCategoryType, licenseSubCategory)
      .subscribe((responceData: any) => {
        if (responceData.errorCode == 200) {
          this.LicenseMappingDetails = responceData.data.filter(item => item.mappingType !== 'INITIATE')
          // this.LicenseMappingDetails = responceData.data;
          console.log(this.LicenseMappingDetails);
        }
      });
  }

  userType() {
    this.iscustomer = localStorage.getItem('IS_CUSTOMER');
    if (this.iscustomer === "false") {
      this.getUnitLicenseTypetwo()
    } else {
      this.getUnitLicenseType()
    }
  }

  arrangeIndentDtls() {
    let lmmnumber = this.unitForm.value.unitLicenseType
    if (this.iscustomer === "false") {
      this.importService.unitLicenseTypeByOfficer(lmmnumber).subscribe(responce => {
        this.unitLicenseList = responce.content
        this.licenseSelect(this.unitForm.value.unitLicenseType)
        this.getAllLiquor()

      })
      this.indentDtlsList.forEach(data => {
        data.litres = (parseInt(data.packageSizeValue) * data.noOfBottles) / 1000
        data.availBottles = 100
        data.availCases = 10,
          data.bootlesPerCase = 20
      });
    } else {
      this.indentDtlsList.forEach(data => {
        data.litres = (parseInt(data.packageSizeValue) * data.noOfBottles) / 1000
        data.availBottles = 100
        data.availCases = 10,
          data.bootlesPerCase = 20
      });
      this.licenseSelect(this.unitForm.value.unitLicenseType)
      this.getAllLiquor()
    }
  }

  getUnitLicenseType() {
    this.importService.unitLicenseTypes().subscribe((resp: any) => {
      this.unitLicenseList = resp.content
      if (this.unitLicenseList) {
        this.route.params.subscribe(params => {
          if (params.id) {
            this.getImportPermitById(params.id);
            this.editId = params.id;
            this.addedit = 'Edit';
            this.addedithead = 'Edit Import Permit';
          }
          else {
            this.getImportFromLocal()
          }
        })
      }
    })
  }

  getUnitLicenseTypetwo() {
    this.route.params.subscribe(params => {
      if (params.id) {
        this.getImportPermitById(params.id);
        this.editId = params.id;
        this.addedit = 'Edit Import Permit';
      }
      else {
        this.getImportFromLocal()
      }
    })
  }

  licenseSelect(eventValue) {

    let unitObj = this.unitLicenseList.find(ele => ele.licenseNumber === eventValue)
    if (unitObj) {
      this.unitForm.patchValue({
        unitName: unitObj.unitName,
        unitAddress: unitObj.unitAddress,
        unitType: unitObj.unitType

      })
      this.unitLicenseDetails = unitObj;
      this.getConsignorDetails(unitObj.licenseCategory, unitObj.licenseSubCategory);
      this.unitNameLists = [];
      this.licenseTypeList = [];
      this.consignorForm.patchValue({
        entityType: '',
        consignorUnitTypeCode: '',
        consignorUnitTypeValue: '',
        consignorLicenseTypeCode: '',
        consignorLicenseTypeValue: '',
        licenseNo: '',
        consignorUnitNameCode: '',
        consignorUnitNameValue: '',
        consignorUnitAddress: ''
      });
    }
  }

  getEntityType(unitType) {
    const entityObj = this.LicenseMappingDetails.find((resp: any) => resp.entityCode === unitType);
    this.licenseTypeList = entityObj.entitySubTypeList;
    this.consignorForm.patchValue({
      consignorUnitTypeCode: unitType,
      consignorUnitTypeValue: entityObj.entityDesc,
      consignorLicenseTypeCode: '',
      consignorLicenseTypeValue: '',
      licenseNo: '',
      consignorUnitNameCode: '',
      consignorUnitNameValue: '',
      consignorUnitAddress: ''
    });
    this.unitNameLists = [];
  }

  getlicensedata(eventValue) {
    const entityType = this.consignorForm.value.entityType;
    const entityObj = this.LicenseMappingDetails.find((resp: any) => resp.entityCode === entityType);
    const licenseObj = entityObj.entitySubTypeList.find((resp: any) => resp.entitySubTypeCode === eventValue);
    this.getUnitName(null);
    this.consignorForm.patchValue({
      consignorLicenseTypeCode: licenseObj.entitySubTypeCode,
      consignorLicenseTypeValue: licenseObj.entitySubTypeDesc,
      licenseNo: '',
      consignorUnitNameCode: '',
      consignorUnitNameValue: '',
      consignorUnitAddress: ''
    });
    this.unitNameLists = [];
  }

  workflow() {
    let iscustomer = localStorage.getItem('IS_CUSTOMER');
    console.log('is customer', iscustomer)
    // if(){
    // }
    this.WorkflowcofigService.getworkflowbydesignation('WHOLESALE', 'WHOLESALE_IMPORT_PERMIT').subscribe((resp: any) => {
      this.workflowobj = resp.content
      if (this.workflowobj && this.workflowobj.isEditable == true) {
        this.isApprover = true;
        this.indentDtlsForm.controls['parentETIN'].disable();
        this.indentDtlsForm.controls['packageSize'].disable();
        this.indentDtlsForm.controls['packageType'].disable();
        this.indentDtlsForm.controls['strength'].disable();
        this.indentDtlsForm.controls['brandName'].disable();
        this.indentDtlsForm.controls['EDP'].disable();
        this.indentDtlsForm.controls['category'].disable();
        this.indentDtlsForm.controls['liquorType'].disable();
        this.indentDtlsForm.controls['subliquorType'].disable();
        this.paymentForm.controls['modeOfPayment'].disable();
        this.paymentForm.controls['paymentDate'].disable();
        this.paymentForm.controls['advancedAmt'].disable();
        this.paymentForm.controls['transactionNo'].disable();
        this.paymentForm.controls['transactionNo'].disable();
        this.consignorForm.controls['licenseType'].disable();
        this.consignorForm.controls['entityType'].disable();
        this.consignorForm.controls['entityName'].disable();
      }
    })
  }

  getImportPermitById(id: any) {
    this.importService.getImportbyid(id).subscribe((responceData: any) => {
      console.log(responceData);
      this.statusBasedDisable('SENDBACK');
      this.indendDtls = responceData.data

      this.unitForm.patchValue({
        unitLicenseType: this.indendDtls.importPermitIndentDetails.unitLicenseType,
        unitName: this.indendDtls.importPermitIndentDetails.unitName,
        unitAddress: this.indendDtls.importPermitIndentDetails.unitAddress

      })

      this.consignorForm.patchValue({

        licenseType: this.indendDtls.importPermitIndentDetails.consignorLicenseTypeValue,
        consignorLicenseTypeCode: this.indendDtls.importPermitIndentDetails.consignorLicenseTypeCode,
        consignorLicenseTypeValue: this.indendDtls.importPermitIndentDetails.consignorLicenseTypeValue,

        licenseNo: this.indendDtls.importPermitIndentDetails.consignorUnitNameValue,
        entityName: this.indendDtls.importPermitIndentDetails.consignorUnitNameValue,
        consignorUnitNameCode: this.indendDtls.importPermitIndentDetails.consignorUnitNameCode,
        consignorUnitNameValue: this.indendDtls.importPermitIndentDetails.consignorUnitNameValue,

        entityType: this.indendDtls.importPermitIndentDetails.consignorUnitTypeValue,
        consignorUnitTypeCode: this.indendDtls.importPermitIndentDetails.consignorUnitTypeCode,
        consignorUnitTypeValue: this.indendDtls.importPermitIndentDetails.consignorUnitTypeValue,

        consignorUnitAddress: this.indendDtls.importPermitIndentDetails.consignorUnitAddress

      })
      this.indentDtlsList = this.indendDtls.importPermitIndentDetails.importPermitProdDetails;
      console.log(this.indendDtls.importPermitIndentDetails.indentProductList)
      this.arrangeIndentDtls()
      this.totalValuesForm.patchValue({
        totalNoOfCases: this.indendDtls.importPermitIndentDetails.totalNoOfCases,
        totalNoOfBottles: this.indendDtls.importPermitIndentDetails.totalNoOfBottles,
        totBulkLitres: this.indendDtls.importPermitIndentDetails.totBulkLitres,
      })
      this.indendDtls.importPermitIndentDetails.importPermitProdDetails.forEach(element => {
        this.totalDuty = element.totalDuty;
        this.calculatedImportFee = element.calculatedImportFee;
        this.specialFee = element.specialFee;
      })
      this.statusBasedDisable(this.indendDtls.status)
    });
  }

  getImportFromLocal() {
    let localData = JSON.parse(sessionStorage.getItem('indentReq'))
    if (localData) {
      this.unitForm.patchValue({
        unitLicenseType: localData.importPermitIndentDetails.unitLicenseType,
        unitName: localData.importPermitIndentDetails.unitName,
        unitAddress: localData.importPermitIndentDetails.unitAddress
      })
      this.consignorForm.patchValue({

        licenseType: localData.importPermitIndentDetails.consignorLicenseTypeValue,
        consignorLicenseTypeCode: localData.importPermitIndentDetails.consignorLicenseTypeCode,
        consignorLicenseTypeValue: localData.importPermitIndentDetails.consignorLicenseTypeValue,

        entityName: localData.importPermitIndentDetails.consignorUnitNameValue,
        consignorUnitNameCode: localData.importPermitIndentDetails.consignorUnitNameCode,
        consignorUnitNameValue: localData.importPermitIndentDetails.consignorUnitNameValue,

        entityType: localData.importPermitIndentDetails.consignorUnitTypeValue,
        consignorUnitTypeCode: localData.importPermitIndentDetails.consignorUnitTypeCode,
        consignorUnitTypeValue: localData.importPermitIndentDetails.consignorUnitTypeValue,

        consignorUnitAddress: localData.importPermitIndentDetails.consignorUnitAddress,

        licenseNo: localData.importPermitIndentDetails.consignorUnitNameValue,

      })
      this.indentDtlsList = localData.importPermitIndentDetails.importPermitProdDetails;
      // console.log(localData.importPermitIndentDetails.indentProductList)
      this.arrangeIndentDtls()
      this.totalValuesForm.patchValue({
        totalNoOfCases: localData.importPermitIndentDetails.totalNoOfCases,
        totalNoOfBottles: localData.importPermitIndentDetails.totalNoOfBottles,
        totBulkLitres: localData.importPermitIndentDetails.totBulkLitres,
      })
      localData.importPermitIndentDetails.importPermitProdDetails.forEach(element => {
        this.totalDuty = element.totalDuty;
        this.calculatedImportFee = element.calculatedImportFee;
        this.specialFee = element.specialFee;
      })
      this.statusBasedDisable(localData.status)
    }
  }

  removeRow(value, i) {
    console.log('etn', value, i, this.indentDtlsList)

    this.indentDtlsList.splice(i, 1)
    this.updateTotal()
    this.updateTotalAmt()
    this.calculateAdAmt()
    console.log('etn', this.indentDtlsList)
  }

  unitDetailsFormGroup() {
    this.unitForm = this.formBuilder.group({
      unitLicenseType: [''],
      unitName: [''],
      unitAddress: [''],
      unitType: ['']
    })
  }

  createFormGrp() {
    this.consignorForm = this.formBuilder.group({

      consignorUnitNameCode: [''],
      consignorUnitNameValue: [''],

      consignorUnitTypeCode: [''],
      consignorUnitTypeValue: [''],

      consignorUnitAddress: [''],
      event: "INITIATE",

      consignorLicenseTypeCode: [''],
      consignorLicenseTypeValue: [''],

      licenseType: [''],
      entityType: [''],
      entityName: [''],
      licenseNo: [''],

      isDigitalSignature: true,
      level: "string",
      sentBackLevels: "string",
      stage: "string",
      stageDesc: "string",
    });
  }
  totalValuesFormGroup() {
    this.totalValuesForm = this.formBuilder.group({
      totalNoOfCases: [''],
      totalNoOfBottles: [''],
      totBulkLitres: [''],
    })
  }

  indentDtlsFormGroup() {
    this.indentDtlsForm = this.formBuilder.group({
      amount: [''],
      parentETIN: [''],

      brandName: [''],
      brandNameCode: [''],
      brandNameValue: [''],

      packageType: [''],
      packageTypeCode: [''],
      packageTypeValue: [''],

      liquorType: [''],
      liquorTypeCode: [''],
      liquorTypeValue: [''],

      subliquorType: [''],
      subLiquorTypeCode: [''],
      subLiquorTypeValue: [''],

      liquorDetailedDecription: [''],
      liquorDetailedDecriptionCode: [''],
      liquorDetailedDecriptionValue: [''],

      strength: [''],
      strengthCode: [''],
      strengthValue: [''],

      packageSize: [''],
      packageSizeCode: [''],
      packageSizeValue: [''],

      category: [''],
      categoryCode: 'string',
      categoryValue: 'string',

      EDP: [''],
      edpcode: "string",
      edpvalue: "string",

      noOfBottles: 0,
      noOfCases: 0,

      availBottles: 10,
      availCases: 100,
      bootlesPerCase: [''],

    })
  }

  addIndentForm(form) {
    console.log('dorm', form, this.indentDtlsList)
    if (this.indentDtlsList.length > 0) {

      let findobj = this.indentDtlsList.find((ele: any) => {
        return (ele.parentETIN == this.indentDtlsForm.value.parentETIN &&
          ele.packageSizeValue == this.indentDtlsForm.value.packageSize &&
          ele.packageTypeCode == this.indentDtlsForm.value.packageType)
      })
      if (!findobj) {
        this.indentDtlsList.push({ ...this.indentDtlsForm.value })
      } else {
        this.alert.showWarning("Already selected", "Invalid")

      }
    } else {
      if (form.valid === false) {
        this.formSubmittedOne = true
      } else {
        this.indentDtlsList.push({ ...this.indentDtlsForm.value })
      }
    }
  }

  clearIndentForm() {
    this.indentDtlsForm.reset()
  }
  calculationOfBottlesCasesAmount(data, event) {
    let eventValue = event.target ? event.target.value : event
    if (eventValue.length > 8) {
      eventValue = eventValue.slice(0, 8)
      data.noOfCases = eventValue.replace(/[&\/\\#,+()$~%.'":*?<>{}]/g, '');
      this.alert.showError("Error", "Max 8 Chracters")
    } else {
      let specialfee = 100;
      let calculatedfee = 10;
      if (eventValue != undefined && eventValue.trim() != "") {
        data.noOfBottles = parseInt(eventValue) * parseInt(data.bootlesPerCase)
        data.totalDuty = parseInt(data.noOfBottles) * parseInt(data.amount);
        data.calculatedImportFee = data.noOfBottles * calculatedfee;
        data.specialFee = data.noOfBottles * specialfee;
        data.noOfCases = parseInt(eventValue);
        data.litres = (parseInt(data.packageSizeValue) * data.noOfBottles) / 1000;
      } else {
        data.noOfBottles = 0;
        data.totalDuty = 0;
        data.calculatedImportFee = 0;
        data.specialFee = 0;
        data.noOfCases = 0;
        data.litres = 0
      }
      this.updateTotal()
      this.updateTotalAmt()
    }
  }

  updateTotal() {
    let totalNoOfCases = 0
    let totalNoOfBottles = 0
    let totBulkLitres = 0
    this.indentDtlsList.forEach(element => {
      totalNoOfCases = totalNoOfCases + parseInt(element.noOfCases)
      totalNoOfBottles = totalNoOfBottles + parseInt(element.noOfBottles)
      totBulkLitres = totBulkLitres + parseFloat(element.litres ? element.litres : 0);;
    });
    this.totalValuesForm.patchValue({
      totalNoOfCases: totalNoOfCases,
      totalNoOfBottles: totalNoOfBottles,
      totBulkLitres: totBulkLitres,
    });
  }
  updateTotalAmt() {

    let totalCost = 0
    let totalDuty = 0;
    let calculatedImportFee = 0;
    let specialFee = 0;
    this.indentDtlsList.forEach(element => {
      totalDuty = totalDuty + parseInt(element.totalDuty);
      calculatedImportFee = calculatedImportFee + parseInt(element.calculatedImportFee)
      specialFee = specialFee + parseInt(element.specialFee)

      // this.paymentForm.patchValue({
      //   totalCost: totalCost
      // })
    })
    this.totalDuty = totalDuty;
    this.calculatedImportFee = calculatedImportFee;
    this.specialFee = specialFee;
  }
  calculateAdAmt() {
    let balanceamount = this.paymentForm.value.totalCost - this.paymentForm.value.advancedAmt
    this.paymentForm.patchValue({
      balanceamount: balanceamount
    })
  }

  getAllmode() {
    this.modeservice.allPayments().subscribe((responceData: any) => {
      this.modelist = responceData.data;
    });
  }

  // Dropdowns Indent details tab//

  async findBrandDetails(payload) {
    const resp = await this.masterDropdownService.findBrandDetails(payload);
    return resp.content;
  }

  async getAllLiquor() {
    let licenseNo = '';
    if (!this.consignorForm.get('licenseNo').value) {
      licenseNo = 'DL32735174';
      this.indentDtlsForm.patchValue({ licenseNo: licenseNo });
    } else {
      licenseNo = this.consignorForm.get('licenseNo').value;
    }
    const payload = {
      licenseNumber: licenseNo,
      brandDropdownType: 'LIQUOR_TYPE',
    }
    this.liqourlist = await this.findBrandDetails(payload);
  }

  async getSubLiquorType(liquorId) {
    const payload = {
      licenseNumber: this.consignorForm.get('licenseNo').value,
      brandDropdownType: 'SUB_LIQUOR_TYPE',
      liquorTypeCode: liquorId
    }
    this.liqourtypecode = liquorId;
    if (liquorId) {
      this.subliqourlist = await this.findBrandDetails(payload);
      this.indentDtlsForm.patchValue({
        liquorTypeCode: liquorId,
        liquorTypeValue: this.liqourlist.find(x => x.code == liquorId).value
      });
    }
  }

  async getLiquorDetailed(code) {
    const payload = {
      licenseNumber: this.consignorForm.get('licenseNo').value,
      brandDropdownType: 'LIQUOR_DETAILED_DESC',
      liquorTypeCode: this.liqourtypecode,
      subLiquorTypeCode: code
    }
    if (code) {
      this.liquorDetailedList = await this.findBrandDetails(payload);
      console.log(this.subliqourlist);
      console.log(code);
      console.log(this.subliqourlist.find(x => x.code == code).value);
      this.indentDtlsForm.patchValue({
        subLiquorTypeCode: code,
        subLiquorTypeValue: this.subliqourlist.find(x => x.code == code).value
      });
      console.log(this.indentDtlsForm);
    }
  }

  getBrandname(code) {
    const payload = {
      licenseNumber: this.consignorForm.get('licenseNo').value,
      brandDropdownType: 'BRAND_NAME',
      liquorTypeCode: this.liqourtypecode,
      subLiquorTypeCode: this.indentDtlsForm.value.subLiquorTypeCode,
      liquorDetailedDescCode: code
    }
    if (code) {
      this.masterDropdownService.findBrandDropdowns(payload).subscribe((resp: any) => {
        this.brandlist = resp.content;
        this.indentDtlsForm.patchValue({
          liquorDetailedDecriptionCode: code,
          liquorDetailedDecriptionValue: this.liquorDetailedList.find(x => x.code == code).value
        });
      });
    }
  }

  getCategory(code) {
    const payload = {
      licenseNumber: this.consignorForm.get('licenseNo').value,
      brandDropdownType: 'CATEGORY',
      liquorTypeCode: this.liqourtypecode,
      subLiquorTypeCode: this.indentDtlsForm.value.subLiquorTypeCode,
      liquorDetailedDescCode: this.indentDtlsForm.value.liquorDetailedDecriptionCode,
      brandCode: code
    }
    if (code) {
      this.masterDropdownService.findBrandDropdowns(payload).subscribe((resp: any) => {
        this.categorylist = resp.content;
        this.indentDtlsForm.patchValue({
          brandNameCode: code,
          brandNameValue: this.brandlist.find(x => x.code == code).value
        });
      });
    }
  }

  getStrength(code?) {
    const payload = {
      licenseNumber: this.consignorForm.get('licenseNo').value,
      brandDropdownType: 'STRENGTH',
      liquorTypeCode: this.liqourtypecode,
      subLiquorTypeCode: this.indentDtlsForm.value.subLiquorTypeCode,
      liquorDetailedDescCode: this.indentDtlsForm.value.liquorDetailedDecriptionCode,
      brandCode: this.indentDtlsForm.value.brandNameCode,
      category: code,
    }
    if (code) {
      this.masterDropdownService.findBrandDropdowns(payload).subscribe((resp: any) => {
        this.strengthlist = resp.content;
        this.indentDtlsForm.patchValue({
          categoryCode: code,
          categoryValue: this.categorylist.find(x => x.code == code).value
        });
      });
    }
  }

  getEDP(code?) {
    const payload = {
      licenseNumber: this.consignorForm.get('licenseNo').value,
      brandDropdownType: 'EDP',
      liquorTypeCode: this.liqourtypecode,
      subLiquorTypeCode: this.indentDtlsForm.value.subLiquorTypeCode,
      liquorDetailedDescCode: this.indentDtlsForm.value.liquorDetailedDecriptionCode,
      brandCode: this.indentDtlsForm.value.brandNameCode,
      category: this.indentDtlsForm.value.categoryCode,
      // brandStrength: parseInt(code)
    }
    if (code) {
      this.masterDropdownService.findBrandDropdowns(payload).subscribe((resp: any) => {
        this.edpList = resp.content;
        this.indentDtlsForm.patchValue({
          strengthCode: code,
          strengthValue: this.strengthlist.find(x => x.code == code).value
        });
      });
    }
  }

  getETIN(code?) {
    const payload = {
      licenseNumber: this.consignorForm.get('licenseNo').value,
      brandDropdownType: 'ETIN',
      liquorTypeCode: this.liqourtypecode,
      subLiquorTypeCode: this.indentDtlsForm.value.subLiquorTypeCode,
      liquorDetailedDescCode: this.indentDtlsForm.value.liquorDetailedDecriptionCode,
      brandCode: this.indentDtlsForm.value.brandNameCode,
      category: this.indentDtlsForm.value.categoryCode,
      // brandStrength: this.indentDtlsForm.value.strengthCode,
      // edp: parseInt(code)
    }
    if (code) {
      this.masterDropdownService.findBrandDropdowns(payload).subscribe((resp: any) => {
        this.parentETINlist = resp.content;
        if (this.parentETINlist) {
          this.indentDtlsForm.patchValue({
            edpCode: code,
            edpValue: this.edpList.find(x => x.code == code).value,
          })
        }
      });
    }
  }

  getBrandId(code?) {
    const payload = {
      licenseNumber: this.consignorForm.get('licenseNo').value,
      liquorTypeCode: this.liqourtypecode,
      subLiquorTypeCode: this.indentDtlsForm.get('subLiquorTypeCode').value,
      brandCode: this.indentDtlsForm.get('brandName').value,
      domainCode: this.domainId,
      supplyTypeCode: this.supplyTypeId,
      brandStrength: this.indentDtlsForm.get('strength').value,
      edp: parseInt(this.indentDtlsForm.get('EDP').value),
      etin: code
    }
    if (code) {
      this.masterDropdownService.findBrand(payload).subscribe((resp: any) => {
        this.brandDetailsId = resp['content']['id']

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
      this.masterDropdownService.findLabelDetails(payload).subscribe((resp: any) => {
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
      this.masterDropdownService.findLabelDetails(payload).subscribe((resp: any) => {
        this.packagelist = resp.content;
        if (this.packagelist) {
          this.indentDtlsForm.patchValue({
            packageSizeCode: this.packageSizeList.find(x => x.packageSizeCode == code).packageSizeCode,
            packageSizeValue: this.packageSizeList.find(x => x.packageSizeCode == code).packageSizeName,
            packageSize: this.packageSizeList.find(x => x.packageSizeCode == code).packageSizeCode,
            packageTypeCode: this.packagelist.find(x => x.packageSizeCode == code).packagingTypeCode,
            packageTypeValue: this.packagelist.find(x => x.packageSizeCode == code).packagingTypeName,
            bootlesPerCase: this.packagelist.find(x => x.packageSizeCode == code).cartonSize,
            amount: this.packagelist.find(x => x.packageSizeCode == code).mrp,
          })
        }
      });
    }
  }
  //Payment tab//

  getpaymentModeById(event) {
    let data = event.target.value;
    this.paymentForm.patchValue({
      modeOfPaymentCode: data,
      modeOfPaymentValue: data,
    })
  }

  submit(status) {

    let findobj = this.indentDtlsList.find((ele: any) => {
      return (ele.noOfCases == null || ele.noOfCases <= 0 || ele.noOfCases == "")
    })
    if (findobj) {
      this.alert.showWarning("Please Enter No of Cases", "Invalid")
    } else {
      let event
      if (this.consignorForm.valid === false) {
        this.formSubmitted = true;
      } else {
        if (status == 'SUBMITTED' || status == 'DRAFT') {
          if ((this.indendDtls && this.indendDtls.status) == 'SENDBACK') {
            event = 'SENDBACK'
          } else {
            event = "INITIATE"
          }
        } else if (status == 'APPROVED') {
          event = "APPROVED"
        } else if (status == 'SENDBACK') {
          event = "SENDBACK"
        } else {
          event = "REJECTED"
        }
        let postParams = {
          "event": event,

          "importPermitIndentDetails": {
            "consignorUnitNameCode": this.consignorForm.value.consignorUnitNameCode,
            "consignorUnitNameValue": this.consignorForm.value.consignorUnitNameValue,
            "consignorUnitTypeCode": this.consignorForm.value.consignorUnitTypeCode,
            "consignorUnitTypeValue": this.consignorForm.value.consignorUnitTypeValue,
            "consignorLicenseTypeCode": this.consignorForm.value.consignorLicenseTypeCode,
            "consignorLicenseTypeValue": this.consignorForm.value.consignorLicenseTypeValue,
            "consignorUnitAddress": this.consignorForm.value.consignorUnitAddress,

            "importPermitProdDetails": this.indentDtlsList,

            "totalNoOfBottles": this.totalValuesForm.value.totalNoOfBottles ? this.totalValuesForm.value.totalNoOfBottles : 0,
            "totalNoOfCases": this.totalValuesForm.value.totalNoOfCases ? this.totalValuesForm.value.totalNoOfCases : 0,
            "totBulkLitres": this.totalValuesForm.value.totBulkLitres ? this.totalValuesForm.value.totBulkLitres : 0,
            "unitLicenseType": this.unitForm.value.unitLicenseType,
            "unitName": this.unitForm.value.unitName,
            "isDigitalSignature": true,
            "level": "string",
            "sentBackLevels": "string",
            "stage": "string",
            "stageDesc": "string",
            "status": status,
          },
          "isDigitalSignature": true,
          "level": "string",
          "sentBackLevels": "string",
          "stage": "string",
          "stageDesc": "string",
          "status": status,
        }
        if (this.editId) {
          // let postParams=this.indendDtls
          // "indentDate": "string",
          // "indentNo": "string",
          postParams['id'] = this.editId
          postParams['indentNo'] = this.indendDtls.indentNo
          postParams['indentDate'] = this.indendDtls.indentDate
          postParams['entityId'] = this.indendDtls.entityId
          postParams['applicationNumber'] = this.indendDtls.applicationNumber
          postParams['applicationNumber'] = this.indendDtls.applicationNumber
          postParams['createdBy'] = this.indendDtls.createdBy
          postParams['createdDate'] = this.indendDtls.createdDate
          postParams['modifiedBy'] = this.indendDtls.modifiedBy
          postParams['modifiedDate'] = this.indendDtls.modifiedDate

          postParams['importPermitIndentDetails']['id'] = this.indendDtls.importPermitIndentDetails.id
          // postParams['importPermitIndentDetails']['indentPaymentDetails']['id']= this.indendDtls.importPermitIndentDetails.indentPaymentDetails.id
          this.importService.addImport(postParams).subscribe((responceData: any) => {
            console.log(responceData)
            if (responceData.status == "s") {
              this.alert.showSuccess(responceData.userDisplayMesg, "Success")
              sessionStorage.removeItem('indentReq')
              this.router.navigate(['/supplychainmanagement/wholesale/importpermit/list'])
            } else {
              this.alert.showError(responceData.userDisplayMesg, 'Error')
            }
          })
        } else {
          this.importService.addImport(postParams).subscribe((responceData: any) => {
            console.log(responceData)
            if (responceData.status == "s") {
              this.alert.showSuccess(responceData.userDisplayMesg, "Success")
              sessionStorage.removeItem('indentReq')
              this.router.navigate(['/supplychainmanagement/wholesale/importpermit/list'])
            } else {
              this.alert.showError(responceData.userDisplayMesg, 'Error')
            }
          })
        }
      }
    }
  }

  preview() {
    let id = this.editId
    let postParams = {
      "event": "INITIATE",
      // "indentNo":this.indendDtls.indentNo,
      // "indentDate":this.indendDtls.indentDate,
      "importPermitIndentDetails": {
        "consignorUnitNameCode": this.consignorForm.value.consignorUnitNameCode,
        "consignorUnitNameValue": this.consignorForm.value.consignorUnitNameValue,
        "consignorUnitTypeCode": this.consignorForm.value.consignorUnitTypeCode,
        "consignorUnitTypeValue": this.consignorForm.value.consignorUnitTypeValue,
        "consignorLicenseTypeCode": this.consignorForm.value.consignorLicenseTypeCode,
        "consignorLicenseTypeValue": this.consignorForm.value.consignorLicenseTypeValue,
        "consignorUnitAddress": this.consignorForm.value.consignorUnitAddress,

        // "indentPaymentDetails": {
        //   "advancedAmt": this.paymentForm.value.advancedAmt,
        //   "indentReqPayDetails": {},
        //   "modeOfPaymentCode": this.paymentForm.value.modeOfPaymentCode,
        //   "modeOfPaymentValue": this.paymentForm.value.modeOfPaymentValue,
        //   "paymentDate": this.paymentForm.value.paymentDate,
        //   "totalCost": this.paymentForm.value.totalCost,
        //   "transactionNo": this.paymentForm.value.transactionNo
        // },
        "importPermitProdDetails": this.indentDtlsList,

        "totalNoOfBottles": this.totalValuesForm.value.totalNoOfBottles,
        "totalNoOfCases": this.totalValuesForm.value.totalNoOfCases,
        "totBulkLitres": this.totalValuesForm.value.totBulkLitres,
        "unitLicenseType": this.unitForm.value.unitLicenseType,
        "unitName": this.unitForm.value.unitName,
      },
      "isDigitalSignature": true,
      "level": (this.workflowobj && this.workflowobj.level) ? this.workflowobj.level : 'Level 1',
      "sentBackLevels": (this.workflowobj && this.workflowobj.sendback) ? this.workflowobj.sendback : '',
      "stage": "string",
      "stageDesc": "string",
    }
    if (id) {
      postParams['id'] = id
      postParams["indentNo"] = this.indendDtls.indentNo,
        postParams["indentDate"] = this.indendDtls.indentDate,
        postParams["status"] = this.indendDtls.status,

        sessionStorage.setItem('indentReq', JSON.stringify(postParams))
      this.router.navigate(['supplychainmanagement/wholesale/importpermit/view'])

    } else {
      sessionStorage.setItem('indentReq', JSON.stringify(postParams))
      this.router.navigate(['supplychainmanagement/wholesale/importpermit/preview'])
    }
  }

  backToList() {
    sessionStorage.removeItem('indentReq')
    this.router.navigate(['/supplychainmanagement/wholesale/importpermit/list'])
  }
}
