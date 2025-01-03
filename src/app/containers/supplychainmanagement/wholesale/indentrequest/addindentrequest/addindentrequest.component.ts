import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import {
  AlertService,
  ModeOfPaymentService,
  WholesaleIndentRequestService,
  MasterDropdownsService
} from '@app/services';
import { DatePipe } from '@angular/common';
import { WorkflowcofigService } from '@app/services/ware-house/workflowcofig.service';
import { IDropdownSettings } from 'ng-multiselect-dropdown';

interface Post {
  startDate: Date;
}

@Component({
  selector: 'app-addindentrequest',
  templateUrl: './addindentrequest.component.html',
  styleUrls: ['./addindentrequest.component.scss']
})
export class AddindentrequestComponent implements OnInit {
  formSubmitted = false;
  formSubmittedOne = false
  formSubmittedUnit = false
  formsubmittedRemark = false
  indentStatus = false
  licenselist: any;
  liqourlist: any;
  subliqourlist: any;
  liquorDetailedList: any;
  brandlist: any;
  packageTypelist: any;
  bottlesPerCaseList: any;
  edpCategorylist: any;
  strengthlist: any;
  modelist: any;
  unitForm: FormGroup;
  consignorForm: FormGroup;
  indentDtlsForm: FormGroup;
  totalValuesForm: FormGroup;
  paymentForm: FormGroup;
  remarkForm: FormGroup;
  indentDtlsList: any = [];
  post: Post = {
    startDate: new Date(Date.now())
  }
  editId: any;
  addedit = 'wholesale.indentrequest.addindentreq.add';
  indendDtls: any;
  unitAddress: any = {};
  consignorUnitAddress: { unit: string; address: string; };
  workflowobj: any;
  rejectid
  liqourtypecode: any;
  edpList: any;
  brandDetailsId: any;
  packageSizeList: any;
  parentETINlist: any
  unitNameList: { name: string; }[];
  unitLicenseList: any;
  unitLicenseDetails: any = {};
  iscustomer: string;

  unitNameDropDownSettings: IDropdownSettings;
  searchValue = null;
  unitNameRequired = false;
  unitNameLists: any;
  LicenseMappingDetails: any;
  unitTypeList: any;
  licenseTypeList: any;
  // paymentStatus: any = true;
  disabledUnitName: any = false;
  disabledIndentDetails: any = false;
  isDrafthide: any = false;
  constructor(
    private modeservice: ModeOfPaymentService,
    private indentRequestService: WholesaleIndentRequestService,
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private alert: AlertService,
    private datePipe: DatePipe,
    private WorkflowcofigService: WorkflowcofigService,
    private masterDropdownService: MasterDropdownsService

  ) { }

  ngOnInit() {
    this.createFormGrp();
    this.userType()
    this.workflow();
    this.getAllmode();
    this.indentDtlsFormGroup()
    this.totalValuesFormGroup()
    this.paymentDtlsFormGrp()
    this.unitDetailsFormGroup()
    this.remarkDtlsFormGroup();
    // this.route.params.subscribe(params => {
    //   if (params.id) {
    //     this.indentRequestService.getIndent(params.id).subscribe((responceData: any) => {
    //       this.indendDtls = responceData.data;
    //       console.log('indendDtls--->', this.indendDtls.indentRequestDetails);
    //       this.unitLicenseDetails['licenseNumber'] = this.indendDtls.indentRequestDetails.unitLicenseType;
    //       this.unitLicenseDetails['unitName'] = this.indendDtls.indentRequestDetails.unitName;
    //       this.unitLicenseDetails['unitAddress'] = this.indendDtls.indentRequestDetails.unitAddress;
    //     });
    //   }
    // })
    this.unitNameDropDownSettings = {
      singleSelection: true,
      idField: 'id',
      textField: 'unitName',
      allowSearchFilter: true,
      closeDropDownOnSelection: true
    };
    this.getAllLiquor();
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
      subCategory: this.consignorForm.value.licenseType, // .replace(/[^^a-zA-Z0-9]/g, "")
      size: 5
    };
    console.log(requestParam);
    this.indentRequestService.getUnitName(requestParam)
      .subscribe((resp: any) => {
        this.unitNameLists = resp.content;
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

  workflow() {
    let iscustomer = localStorage.getItem('IS_CUSTOMER');
    console.log('is customer', iscustomer)
    if (iscustomer === "false") {
      this.WorkflowcofigService.getworkflowbydesignation('WHOLESALE', 'WHOLESALE_INDENT_REQUEST').subscribe((resp: any) => {
        this.workflowobj = resp.content
        if (this.workflowobj && this.workflowobj.isEditable == true) {
          this.indentDtlsForm.disable();
          this.consignorForm.disable();
          this.paymentForm.disable();
          this.disabledUnitName = true;
          this.disabledIndentDetails = true;
        }
      })
    }
  }

  // Form Initations //

  unitDetailsFormGroup() {
    this.unitForm = this.formBuilder.group({
      unitLicenseType: [''],
      unitName: [''],
      unitAddress: [''],
      unitType: [''],
      licenseSubCategory: ['']
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
      licenseNo: [''],
      entityType: [''],

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

  paymentDtlsFormGrp() {
    this.paymentForm = this.formBuilder.group({
      totalCost: [''],
      advancedAmt: [''],
      balanceamount: [''],
      modeOfPayment: [''],
      paymentDate: [''],
      modeOfPaymentCode: [''],
      modeOfPaymentValue: [''],
      transactionNo: [''],
      paymentStatus: ['true'],
    })
  }

  indentDtlsFormGroup() {
    this.indentDtlsForm = this.formBuilder.group({

      parentETIN: [''],

      strength: [''],

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

      strengthCode: [''],
      strengthValue: [''],

      packageSize: [''],
      packageSizeCode: [''],
      packageSizeValue: [''],

      edpCategory: [''],
      edpCategoryCode: [''],
      edpCategoryValue: [''],

      EDP: [''],
      edpCode: [''],
      edpValue: [''],

      availCases: 10,
      availBottles: 100,

      noOfBottles: 0,
      noOfCases: [''],

      bottlesPerCase: [''],
      bottlesPerCaseCode: [''],
      bottlesPerCaseValue: [''],

      amount: [''],
    })
  }
  remarkDtlsFormGroup() {
    this.remarkForm = this.formBuilder.group({
      remarks: ['']
    })
  }

  // Unit Details Tab  //

  getUnitLicenseType() {
    this.indentRequestService.unitLicenseTypes().subscribe((resp: any) => {
      this.unitLicenseList = resp.content;
      if (this.unitLicenseList) {
        this.unitForm.patchValue({ unitLicenseType: this.unitLicenseList[0].licenseNumber });
        this.licenseSelect(this.unitLicenseList[0].licenseNumber);
        this.route.params.subscribe(params => {
          if (params.id) {
            this.getIndentById(params.id);
            this.editId = params.id;
            this.addedit = 'wholesale.indentrequest.addindentreq.edit';
          } else {
            this.getIndentFromLocal()
          }
        })
      }
    })
  }

  getUnitLicenseTypetwo() {
    this.route.params.subscribe(params => {
      if (params.id) {
        this.getIndentById(params.id);
        this.editId = params.id;
        this.addedit = 'wholesale.indentrequest.addindentreq.edit';
      } else {
        this.getIndentFromLocal()
      }
    })
  }

  licenseSelect(eventValue) {
    let unitObj = this.unitLicenseList.find(ele => ele.licenseNumber === eventValue);
    console.log('unitObj::', unitObj);
    if (unitObj) {
      this.unitForm.patchValue({
        unitName: unitObj.unitName,
        unitAddress: unitObj.unitAddress,
        unitType: unitObj.unitType,
        licenseSubCategory: unitObj.licenseSubCategory
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

  getConsignorDetails(licenseCategoryType, licenseSubCategory) {
    this.indentRequestService.findLicenseMapping(licenseCategoryType, licenseSubCategory)
      .subscribe((responceData: any) => {
        if (responceData.errorCode == 200) {
          this.LicenseMappingDetails = responceData.data.filter(item => item.mappingType !== 'INITIATE')
          console.log(this.LicenseMappingDetails);
        }
      });
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

  async findBrandDetails(payload) {
    const resp = await this.masterDropdownService.findBrandDetails(payload);
    return resp.content;
  }

  async getAllLiquor() {
    const payload = {
      licenseNumber: this.consignorForm.get('licenseNo').value,
      brandDropdownType: 'LIQUOR_TYPE',
    }
    this.liqourlist = await this.findBrandDetails(payload);
    if (this.liqourlist) {
      if (this.liqourlist.length > 0) {
        this.getSubLiquorType(this.liqourlist[0].code);
      }
    }
  }

  async getSubLiquorType(liquorId) {
    console.log('sub');
    const payload = {
      licenseNumber: this.consignorForm.get('licenseNo').value,
      brandDropdownType: 'SUB_LIQUOR_TYPE',
      liquorTypeCode: liquorId
    }
    this.liqourtypecode = liquorId;
    if (liquorId) {
      this.subliqourlist = await this.findBrandDetails(payload);
      this.indentDtlsForm.patchValue({
        liquorType: liquorId,
        liquorTypeCode: liquorId,
        liquorTypeValue: this.liqourlist.find(x => x.code == liquorId).value
      });
      this.getLiquorDetailed(this.subliqourlist[0].code);
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
        subliquorType: code,
        subLiquorTypeCode: code,
        subLiquorTypeValue: this.subliqourlist.find(x => x.code == code).value
      });
      this.getBrandname(this.liquorDetailedList[0].code);
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
          liquorDetailedDecription: code,
          liquorDetailedDecriptionCode: code,
          liquorDetailedDecriptionValue: this.liquorDetailedList.find(x => x.code == code).value
        });
        this.indentDtlsForm.patchValue({ brandName: this.liqourlist[0].code });
        this.getCategory(this.brandlist[0].code);
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
        this.edpCategorylist = resp.content;
        this.indentDtlsForm.patchValue({
          brandName: code,
          brandNameCode: code,
          brandNameValue: this.brandlist.find(x => x.code == code).value
        });
        this.indentDtlsForm.patchValue({ edpCategory: this.liqourlist[0].code });
        this.getStrength(this.edpCategorylist[0].code);
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
      edpCategory: code,
    }
    if (code) {
      this.masterDropdownService.findBrandDropdowns(payload).subscribe((resp: any) => {
        this.strengthlist = resp.content;
        this.indentDtlsForm.patchValue({
          edpCategory: code,
          edpCategoryCode: code,
          edpCategoryValue: this.edpCategorylist.find(x => x.code == code).value
        });
        this.getEDP(this.strengthlist[0].code);
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
      edpCategory: this.indentDtlsForm.value.edpCategoryCode,
      brandStrength: parseInt(code)
    }
    if (code) {
      this.masterDropdownService.findBrandDropdowns(payload).subscribe((resp: any) => {
        this.edpList = resp.content;
        this.indentDtlsForm.patchValue({
          strength: code,
          strengthCode: code,
          strengthValue: this.strengthlist.find(x => x.code == code).value
        });
        this.getETIN(this.edpList[0].code);
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
      edpCategory: this.indentDtlsForm.value.edpCategoryCode,
      brandStrength: this.indentDtlsForm.value.strengthCode,
      edp: parseInt(code)
    }
    if (code) {
      this.masterDropdownService.findBrandDropdowns(payload).subscribe((resp: any) => {
        this.parentETINlist = resp.content;
        if (this.parentETINlist) {
          this.indentDtlsForm.patchValue({
            EDP: code,
            edpCode: code,
            edpValue: this.edpList.find(x => x.code == code).value,
          })
          console.log(this.parentETINlist);
          console.log(this.parentETINlist[0].code);
          this.getPackageSize(this.parentETINlist[0].code);
        }
      });
    }
  }

  getPackageSize(code?) {
    const payload = {
      licenseNumber: this.consignorForm.get('licenseNo').value,
      brandDropdownType: 'PACKAGE_SIZE',
      liquorTypeCode: this.liqourtypecode,
      subLiquorTypeCode: this.indentDtlsForm.value.subLiquorTypeCode,
      liquorDetailedDescCode: this.indentDtlsForm.value.liquorDetailedDecriptionCode,
      brandCode: this.indentDtlsForm.value.brandNameCode,
      edpCategory: this.indentDtlsForm.value.edpCategoryCode,
      brandStrength: this.indentDtlsForm.value.strengthCode,
      edp: parseInt(this.indentDtlsForm.value.EDP),
      etin: code
    }
    if (code) {
      this.masterDropdownService.findBrandDropdowns(payload).subscribe((resp: any) => {
        this.packageSizeList = resp.content;
        this.indentDtlsForm.patchValue({ parentETIN: code })
        this.getPackagetype(this.packageSizeList[0].code);
      });

    }
  }

  getPackagetype(code) {
    const payload = {
      licenseNumber: this.consignorForm.get('licenseNo').value,
      brandDropdownType: 'PACKAGE_TYPE',
      liquorTypeCode: this.liqourtypecode,
      subLiquorTypeCode: this.indentDtlsForm.value.subLiquorTypeCode,
      liquorDetailedDescCode: this.indentDtlsForm.value.liquorDetailedDecriptionCode,
      brandCode: this.indentDtlsForm.value.brandNameCode,
      edpCategory: this.indentDtlsForm.value.edpCategoryCode,
      brandStrength: this.indentDtlsForm.value.strengthCode,
      edp: parseInt(this.indentDtlsForm.value.EDP),
      etin: this.indentDtlsForm.value.parentETIN,
      packageSize: code
    }
    if (code) {
      this.masterDropdownService.findBrandDropdowns(payload).subscribe((resp: any) => {
        this.packageTypelist = resp.content;
        if (this.packageTypelist) {
          this.indentDtlsForm.patchValue({
            packageSize: code,
            packageSizeCode: this.packageSizeList.find(x => x.code == code).code,
            packageSizeValue: this.packageSizeList.find(x => x.code == code).value
          })
          this.getBottlePerCase(this.packageTypelist[0].code);
        }
      });
    }
  }

  getBottlePerCase(code) {
    const payload = {
      licenseNumber: this.consignorForm.get('licenseNo').value,
      brandDropdownType: 'CARTON_SIZE',
      liquorTypeCode: this.liqourtypecode,
      subLiquorTypeCode: this.indentDtlsForm.value.subLiquorTypeCode,
      liquorDetailedDescCode: this.indentDtlsForm.value.liquorDetailedDecriptionCode,
      brandCode: this.indentDtlsForm.value.brandNameCode,
      edpCategory: this.indentDtlsForm.value.edpCategoryCode,
      brandStrength: this.indentDtlsForm.value.strengthCode,
      edp: parseInt(this.indentDtlsForm.value.EDP),
      etin: this.indentDtlsForm.value.parentETIN,
      packageSize: this.indentDtlsForm.value.packageSizeCode,
      packageType: code
    }
    if (code) {
      this.masterDropdownService.findBrandDropdowns(payload).subscribe((resp: any) => {
        this.bottlesPerCaseList = resp.content;
        this.bottlesPerCaseList = this.bottlesPerCaseList.map(item => ({ code: item.code, value: 5 }));
        if (this.bottlesPerCaseList) {
          this.indentDtlsForm.patchValue({
            packageType: code,
            packageTypeCode: code,
            packageTypeValue: this.packageTypelist.find(x => x.code == code).value
          })
          this.onChangeBottlePerCase(this.bottlesPerCaseList[0].code);
        }
      });
    }
  }

  onChangeBottlePerCase(code) {
    if (code) {
      this.indentDtlsForm.patchValue({
        bottlesPerCase: code,
        bottlesPerCaseCode: code,
        bottlesPerCaseValue: this.bottlesPerCaseList.find(x => x.code == code).value,
        amount: 100,
      })
      console.log(this.indentDtlsForm.value);
    }
  }

  getAllmode() {
    this.modeservice.allPayments().subscribe((responceData: any) => {
      this.modelist = responceData.data;
    });
  }

  getpaymentModeById(event) {
    let data = event.target.value;
    this.paymentForm.patchValue({
      modeOfPaymentCode: data,
      modeOfPaymentValue: data,
    })
  }

  statusBasedDisable(status) {
    if (status === "SENDBACK") {
      debugger
      this.isDrafthide = true;
      this.indentDtlsForm.disable();
      // this.consignorForm.disable();
      this.paymentForm.disable();
      // this.disabledUnitName = true;
      this.disabledIndentDetails = true;
      
    }
  }

  getIndentById(id: any) {
    this.indentRequestService.getIndent(id).subscribe((responceData: any) => {
      console.log(responceData);
      debugger
      // this.statusBasedDisable('SENDBACK');
      debugger
      this.indendDtls = responceData.data;
      this.gettheStatus(responceData.data.status);
      debugger
      this.unitLicenseDetails['licenseNumber'] = this.indendDtls.indentRequestDetails.wholesaleLicenseNumber;
      console.log(this.unitLicenseDetails['licenseNumber'], '24234234234234234234' )
      this.unitLicenseDetails['unitName'] = this.indendDtls.indentRequestDetails.unitName;
      this.unitLicenseDetails['unitAddress'] = this.indendDtls.indentRequestDetails.unitAddress;
      this.LicenseMappingDetails = [{
        entityCode: this.indendDtls.indentRequestDetails.consignorUnitTypeCode,
        entityDesc: this.indendDtls.indentRequestDetails.consignorUnitTypeValue
      }];
      this.licenseTypeList = [{
        entitySubTypeCode: this.indendDtls.indentRequestDetails.consignorLicenseTypeCode,
        entitySubTypeDesc: this.indendDtls.indentRequestDetails.consignorLicenseTypeValue
      }]
      this.unitNameLists = [{
        id: this.indendDtls.indentRequestDetails.consignorLicenseNumber,
        unitName: this.indendDtls.indentRequestDetails.consignorUnitName
      }]
      this.consignorForm.patchValue({
        entityType: this.indendDtls.indentRequestDetails.consignorUnitTypeCode,
        consignorUnitTypeCode: this.indendDtls.indentRequestDetails.consignorUnitTypeCode,
        consignorUnitTypeValue: this.indendDtls.indentRequestDetails.consignorUnitTypeValue,

        licenseType: this.indendDtls.indentRequestDetails.consignorLicenseTypeCode,
        consignorLicenseTypeCode: this.indendDtls.indentRequestDetails.consignorLicenseTypeCode,
        consignorLicenseTypeValue: this.indendDtls.indentRequestDetails.consignorLicenseTypeValue,
        
        consignorUnitNameCode: this.indendDtls.indentRequestDetails.consignorLicenseNumber,
        consignorUnitNameValue: this.indendDtls.indentRequestDetails.consignorUnitName, 

        licenseNo: this.indendDtls.indentRequestDetails.consignorLicenseNumber,
        consignorUnitAddress: this.indendDtls.indentRequestDetails.consignorUnitAddress
      });
      // this.licenseNo = this.unitNameLists;
      this.indentDtlsList = this.indendDtls.indentRequestDetails.indentProductList;
      this.indentDtlsList = this.indentDtlsList.map(function (el) {
        var o = Object.assign({}, el);
        o.availCases = 10
        o.availBottles = 100;
        return o;
      })
      this.totalValuesForm.patchValue({
        totalNoOfCases: this.indendDtls.indentRequestDetails.totalNoOfCases,
        totalNoOfBottles: this.indendDtls.indentRequestDetails.totalNoOfBottles,
        totBulkLitres: this.indendDtls.indentRequestDetails.totBulkLitres,
      })
      this.paymentForm.patchValue({
      paymentStatus: this.indendDtls.indentRequestDetails.isPaymentDone,
      })
      // this.paymentForm.patchValue({
      //   totalCost: this.indendDtls.indentRequestDetails.indentPaymentDetails.totalCost,
      //   advancedAmt: this.indendDtls.indentRequestDetails.indentPaymentDetails.advancedAmt,
      //   balanceamount: this.indendDtls.indentRequestDetails.indentPaymentDetails.totalCost - this.indendDtls.indentRequestDetails.indentPaymentDetails.advancedAmt,
      //   modeOfPayment: this.indendDtls.indentRequestDetails.indentPaymentDetails.modeOfPaymentCode,
      //   modeOfPaymentCode: this.indendDtls.indentRequestDetails.indentPaymentDetails.modeOfPaymentCode,
      //   modeOfPaymentValue: this.indendDtls.indentRequestDetails.indentPaymentDetails.modeOfPaymentValue,
      //   paymentDate: this.datePipe.transform(this.indendDtls.indentRequestDetails.indentPaymentDetails.paymentDate, 'yyyy-MM-dd'),
      //   transactionNo: this.indendDtls.indentRequestDetails.indentPaymentDetails.transactionNo
      // })
      this.statusBasedDisable(this.indendDtls.status)
    });
  }

  getIndentFromLocal() {
    let localData = JSON.parse(sessionStorage.getItem('indentReq'));
    if (localData) {
      this.unitForm.patchValue({
        unitLicenseType: localData.indentRequestDetails.unitLicenseType,
        unitName: localData.indentRequestDetails.unitName,
        unitAddress: localData.indentRequestDetails.unitAddress
      })
      this.consignorForm.patchValue({
        licenseType: localData.indentRequestDetails.consignorLicenseTypeValue,
        consignorLicenseTypeCode: localData.indentRequestDetails.consignorLicenseTypeCode,
        consignorLicenseTypeValue: localData.indentRequestDetails.consignorLicenseTypeValue,

        licenseNo: localData.indentRequestDetails.consignorUnitNameValue,
        consignorUnitNameCode: localData.indentRequestDetails.consignorUnitNameCode,
        consignorUnitNameValue: localData.indentRequestDetails.consignorUnitNameValue,

        entityType: localData.indentRequestDetails.consignorUnitTypeValue,
        consignorUnitTypeCode: localData.indentRequestDetails.consignorUnitTypeCode,
        consignorUnitTypeValue: localData.indentRequestDetails.consignorUnitTypeValue,

        consignorUnitAddress: localData.indentRequestDetails.consignorUnitAddress
      })
      this.indentDtlsList = localData.indentRequestDetails.indentProductList;
      // this.arrangeIndentDtls()
      this.totalValuesForm.patchValue({
        totalNoOfCases: localData.indentRequestDetails.totalNoOfCases,
        totalNoOfBottles: localData.indentRequestDetails.totalNoOfBottles,
        totBulkLitres: localData.indentRequestDetails.totBulkLitres,
      })
      this.paymentForm.patchValue({
        totalCost: localData.indentRequestDetails.indentPaymentDetails.totalCost,
        advancedAmt: localData.indentRequestDetails.indentPaymentDetails.advancedAmt,
        balanceamount: localData.indentRequestDetails.indentPaymentDetails.totalCost - localData.indentRequestDetails.indentPaymentDetails.advancedAmt,
        modeOfPayment: localData.indentRequestDetails.indentPaymentDetails.modeOfPaymentCode,
        modeOfPaymentCode: localData.indentRequestDetails.indentPaymentDetails.modeOfPaymentCode,
        modeOfPaymentValue: localData.indentRequestDetails.indentPaymentDetails.modeOfPaymentValue,
        paymentDate: localData.indentRequestDetails.indentPaymentDetails.paymentDate,
        transactionNo: localData.indentRequestDetails.indentPaymentDetails.transactionNo
      })
      this.statusBasedDisable(localData.status)
    }
  }

  removeRow(value) {
    console.log('etn', value)
    this.indentDtlsList = this.indentDtlsList.filter(data => {
      if (data.productLibrary.parentETIN === value.productLibrary.parentETIN) {
        if (data.productLibrary.packageSizeValue !== value.productLibrary.packageSizeValue) {
          return data
        }
      } else {
        return data
      }
    });
    this.updateTotal()
    this.updateTotalAmt()
    this.calculateAdAmt()
  }

  addIndentForm(form) {

    const obj = {
      "bottlesPerCase": this.indentDtlsForm.value.bottlesPerCase,
      "amount": this.indentDtlsForm.value.amount,
      "noOfBottles": this.indentDtlsForm.value.noOfBottles,
      "noOfCases": this.indentDtlsForm.value.noOfCases,
      "availCases": this.indentDtlsForm.value.availCases ? this.indentDtlsForm.value.availCases : 10,
      "availBottles": this.indentDtlsForm.value.availBottles ? this.indentDtlsForm.value.availBottles : 100,
      productLibrary: {
        "brandNameCode": this.indentDtlsForm.value.brandNameCode,
        "brandNameValue": this.indentDtlsForm.value.brandNameValue,
        "edpCategoryCode": this.indentDtlsForm.value.edpCategoryCode,
        "edpCategoryValue": this.indentDtlsForm.value.edpCategoryValue,
        "edpCode": this.indentDtlsForm.value.edpCode,
        "edpValue": this.indentDtlsForm.value.edpValue,
        "liquorSubTypeCode": this.indentDtlsForm.value.subLiquorTypeCode,
        "liquorSubTypeDescCode": this.indentDtlsForm.value.subLiquorTypeCode,
        "liquorSubTypeDescValue": this.indentDtlsForm.value.subLiquorTypeValue,
        "liquorSubTypeValue": this.indentDtlsForm.value.subLiquorTypeValue,
        "liquorTypeCode": this.indentDtlsForm.value.liquorTypeCode,
        "liquorTypeValue": this.indentDtlsForm.value.liquorTypeValue,
        "packageSizeCode": this.indentDtlsForm.value.packageSizeCode,
        "packageSizeValue": this.indentDtlsForm.value.packageSizeValue,
        "packageTypeCode": this.indentDtlsForm.value.packageTypeCode,
        "packageTypeValue": this.indentDtlsForm.value.packageTypeValue,
        "noOfBottlesPerCase": this.indentDtlsForm.value.bottlesPerCaseValue,
        "parentEtin": this.indentDtlsForm.value.parentETIN,
        "strengthCode": this.indentDtlsForm.value.strengthCode,
        "strengthValue": this.indentDtlsForm.value.strengthValue,
      }
    }
    if (form.valid == false) {
      this.formSubmittedOne = true
    } else {
      if (this.indentDtlsList.length > 0) {

        let findobj = this.indentDtlsList.find((ele: any) => {
          return (ele.productLibrary.parentEtin === this.indentDtlsForm.value.parentETIN &&
            ele.productLibrary.packageSizeValue === this.indentDtlsForm.value.packageSize &&
            ele.productLibrary.packageTypeCode === this.indentDtlsForm.value.packageType)
        })
        if (!findobj) {
          this.indentDtlsList.push({ ...obj })
        } else {
          this.alert.showWarning("Already selected", "Invalid")
        }
      } else {
        this.indentDtlsList.push({ ...obj })
      }
    }

  }

  clearIndentForm() {
    this.indentDtlsForm.reset()
  }

  calculationOfBottlesCasesAmount(data, event) {
    console.log(data)
    let eventValue = event.target ? event.target.value : event
    console.log(eventValue)
    if (parseInt(eventValue) > data.availCases) {
      data.noOfCases = 0;
      this.alert.showError("Error", "Enter lt Avail Cases")
    } else {
      if (eventValue.length > 8) {
        eventValue = eventValue.slice(0, 8)
        data.noOfCases = eventValue.replace(/[&\/\\#,+()$~%.'":*?<>{}]/g, '');
        this.alert.showError("Error", "Max 8 Chracters")
      } else {
        if (eventValue != undefined && eventValue.trim() != "") {
          data.noOfBottles = parseInt(eventValue) * parseInt(data.productLibrary.noOfBottlesPerCase)
          data.totalamount = data.noOfBottles * parseInt(data.amount)
          data.noOfCases = eventValue.replace(/[&\/\\#,+()$~%.'":*?<>{}]/g, '')
          data.litres = (parseInt(data.productLibrary.packageSizeValue) * data.noOfBottles) / 1000
        } else {
          data.noOfBottles = 0
          data.totalamount = 0
          data.noOfCases = 0
          data.litres = 0
        }
      }
    }
    this.updateTotal()
    this.updateTotalAmt()
    this.calculateAdAmt()
  }

  updateTotal() {
    let totalNoOfCases = 0
    let totalNoOfBottles = 0
    let totBulkLitres = 0
    this.indentDtlsList.forEach(element => {
      totalNoOfCases = totalNoOfCases + parseInt(element.noOfCases)
      totalNoOfBottles = totalNoOfBottles + parseInt(element.noOfBottles)
      totBulkLitres = totBulkLitres + parseFloat(element.litres ? element.litres : 0);
    });
    this.totalValuesForm.patchValue({
      totalNoOfCases: totalNoOfCases,
      totalNoOfBottles: totalNoOfBottles,
      totBulkLitres: totBulkLitres,
    });
  }

  updateTotalAmt() {
    let totalCost = 0
    this.indentDtlsList.forEach(element => {
      totalCost = totalCost + parseInt(element.totalamount)
      this.paymentForm.patchValue({
        totalCost: totalCost
      })
    })
  }

  calculateAdAmt() {
    let advancedAmt = this.paymentForm.value.advancedAmt
    if (advancedAmt.length > 6) {
      advancedAmt = advancedAmt.slice(0, 6)
      this.paymentForm.patchValue({
        advancedAmt: advancedAmt
      })
      this.alert.showError("Error", "Max 6 Chracters")
    }
    let adAmt = this.paymentForm.value.advancedAmt ? this.paymentForm.value.advancedAmt : 0
    let balanceamount = this.paymentForm.value.totalCost - adAmt
    this.paymentForm.patchValue({
      balanceamount: balanceamount
    })
  }

  public findInvalidControls(form) {
    const invalid = [];
    const controls = form.controls;
    for (const name in controls) {
      if (controls[name].invalid) {
        invalid.push(name);
      }
    }
    return invalid;
  }

  submit(status) {
    if (this.unitForm.valid === false) {
      this.formSubmittedUnit = true
      this.alert.showError("Error", "Enter Unit Details")
    } else {
      const list = this.findInvalidControls(this.consignorForm);
      console.log(list);
      console.log(this.consignorForm.value);
      if (this.consignorForm.valid === false && !this.editId) {
        this.formSubmitted = true;
        this.alert.showError("Error", "Enter Consignor Details")
      } else {
        let eventt;
        if (status == 'SUBMITTED' || status == 'DRAFT') {
          if ((this.indendDtls && this.indendDtls.status) == 'SENDBACK') {
            eventt = 'SENDBACK'
          } else {
            eventt = "INITIATE"
          }
        } else if (status == 'APPROVED') {
          eventt = "APPROVED"
        } else if (status == 'SENDBACK') {
          eventt = "SENDBACK"
        } else {
          eventt = "REJECTED"
        }
        // if (this.indentDtlsList.length <= 0) {
        // this.alert.showError("Error", "Min 1 Indent details required")
        // } else {
        let findobj = this.indentDtlsList.find((ele: any) => {
          return (ele.noOfCases == null || ele.noOfCases <= 0 || ele.noOfCases == "")
        })
        if (findobj) {
          this.alert.showWarning("Please Enter No of Cases", "Invalid")
        }
        // } 
        let postParams = {
          "event": eventt,
          "comment": this.remarkForm.value.remarks ? this.remarkForm.value.remarks : "",
          "indentRequestDetails": {
            // "consignorUnitNameCode": this.consignorForm.value.consignorUnitNameCode,
            // "consignorUnitNameValue": this.consignorForm.value.consignorUnitNameValue,
            "consignorUnitName": this.consignorForm.value.consignorUnitNameValue,
            "consignorUnitTypeCode": this.consignorForm.value.consignorUnitTypeCode,
            "consignorUnitTypeValue": this.consignorForm.value.consignorUnitTypeValue,
            "consignorLicenseTypeCode": this.consignorForm.value.consignorLicenseTypeCode,
            "consignorLicenseTypeValue": this.consignorForm.value.consignorLicenseTypeValue,
            "consignorUnitAddress": this.consignorForm.value.consignorUnitAddress,
            "isPaymentDone": this.paymentForm.value.paymentStatus,
            "unitLicenseType": this.unitForm.value.licenseSubCategory,
            "unitName": this.unitForm.value.unitName,
            "unitAddress": this.unitForm.value.unitAddress,
            "indentRequestStatus": "NA",
            "wholesaleLicenseNumber": this.unitForm.value.unitLicenseType,
            "consignorLicenseNumber": this.consignorForm.value.licenseNo, // licenseSubCategory
            "indentPaymentDetails": {
              "advancedAmt": this.paymentForm.value.advancedAmt ? this.paymentForm.value.advancedAmt : this.paymentForm.controls['advancedAmt'].value,
              "modeOfPaymentCode": this.paymentForm.value.modeOfPaymentCode ? this.paymentForm.value.modeOfPaymentCode : this.paymentForm.controls['modeOfPaymentCode'].value,
              "modeOfPaymentValue": this.paymentForm.value.modeOfPaymentValue ? this.paymentForm.value.modeOfPaymentValue : this.paymentForm.controls['modeOfPaymentValue'].value,
              "paymentDate": this.paymentForm.value.paymentDate ? this.paymentForm.value.paymentDate : this.paymentForm.controls['paymentDate'].value,
              "totalCost": this.paymentForm.value.totalCost ? this.paymentForm.value.totalCost : this.paymentForm.controls['totalCost'].value,
              "transactionNo": this.paymentForm.value.transactionNo ? this.paymentForm.value.transactionNo : this.paymentForm.controls['transactionNo'].value
            },
            "indentProductList": this.indentDtlsList,
            "totalNoOfBottles": this.totalValuesForm.value.totalNoOfBottles,
            "totalNoOfCases": this.totalValuesForm.value.totalNoOfCases,
            "totBulkLitres": this.totalValuesForm.value.totBulkLitres,
          },
          
          "level": (this.workflowobj && this.workflowobj.level) ? this.workflowobj.level : 'Level 1',
          "sentBackLevels": (this.workflowobj && this.workflowobj.sendback) ? this.workflowobj.sendback : '',
          "stage": "string",
          "stageDesc": "string",
          "status": status,
        }
        // delete postParams.indentRequestDetails.indentProductList[];
        if (this.editId) {
          console.log(this.indendDtls, '00000000sdfsdfsdf00000000');
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
          debugger
          postParams['indentRequestDetails']['id'] = this.indendDtls.indentRequestDetails.id
          postParams['indentRequestDetails']['wholesaleLicenseNumber'] = this.indendDtls.indentRequestDetails.wholesaleLicenseNumber
          console.log(postParams['indentRequestDetails']['wholesaleLicenseNumber'], '0000032423400000000')
          // console.log(this.indendDtls.indentRequestDetails.indentPaymentDetails);
          // postParams['indentRequestDetails']['indentPaymentDetails']['id'] = this.indendDtls.indentRequestDetails.indentPaymentDetails.id
          this.indentRequestService.addIndent(postParams).subscribe((responceData: any) => {
            console.log(responceData)
            if (responceData.status == "s") {
              this.alert.showSuccess(responceData.userDisplayMesg, "Success")
              sessionStorage.removeItem('indentReq')
              this.router.navigate(['/supplychainmanagement/wholesale/indentrequestnew/list'])
            } else {
              this.alert.showError(responceData.userDisplayMesg, 'Error')
            }
          })
        } else {
          this.indentRequestService.addIndent(postParams).subscribe((responceData: any) => {
            console.log(responceData)
            if (responceData.status == "s") {
              this.alert.showSuccess(responceData.userDisplayMesg, "Success")
              sessionStorage.setItem('indentNo', responceData.data.indentNo);
              sessionStorage.setItem('indentDate', responceData.data.indentDate);
              this.router.navigate(['/supplychainmanagement/wholesale/indentrequestnew/success'])
              
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
      // "indentNo": this.indendDtls.indentNo,
      // "indentDate": this.indendDtls.indentDate,
      "indentRequestDetails": {
        "consignorUnitNameCode": this.consignorForm.value.consignorUnitNameCode,
        "consignorUnitNameValue": this.consignorForm.value.consignorUnitNameValue,
        "consignorUnitTypeCode": this.consignorForm.value.consignorUnitTypeCode,
        "consignorUnitTypeValue": this.consignorForm.value.consignorUnitTypeValue,
        "consignorLicenseTypeCode": this.consignorForm.value.consignorLicenseTypeCode,
        "consignorLicenseTypeValue": this.consignorForm.value.consignorLicenseTypeValue,
        "consignorUnitAddress": this.consignorForm.value.consignorUnitAddress,

        "unitLicenseType": this.unitForm.value.unitLicenseType,
        "unitName": this.unitForm.value.unitName,
        "unitAddress": this.unitForm.value.unitAddress,
        "wholesaleLicenseNumber": this.unitForm.value.unitLicenseType,
        "consignorLicenseNumber": this.consignorForm.value.licenseNo,

        "indentPaymentDetails": {
          "advancedAmt": this.paymentForm.value.advancedAmt ? this.paymentForm.value.advancedAmt : this.paymentForm.controls['advancedAmt'].value,
          "indentReqPayDetails": {},
          "modeOfPaymentCode": this.paymentForm.value.modeOfPaymentCode ? this.paymentForm.value.modeOfPaymentCode : this.paymentForm.controls['modeOfPaymentCode'].value,
          "modeOfPaymentValue": this.paymentForm.value.modeOfPaymentValue ? this.paymentForm.value.modeOfPaymentValue : this.paymentForm.controls['modeOfPaymentValue'].value,
          "paymentDate": this.paymentForm.value.paymentDate ? this.paymentForm.value.paymentDate : this.paymentForm.controls['paymentDate'].value,
          "totalCost": this.paymentForm.value.totalCost ? this.paymentForm.value.totalCost : this.paymentForm.controls['totalCost'].value,
          "transactionNo": this.paymentForm.value.transactionNo ? this.paymentForm.value.transactionNo : this.paymentForm.controls['transactionNo'].value
        },
        "indentProductList": this.indentDtlsList,

        "totalNoOfBottles": this.totalValuesForm.value.totalNoOfBottles,
        "totalNoOfCases": this.totalValuesForm.value.totalNoOfCases,
        "totBulkLitres": this.totalValuesForm.value.totBulkLitres,
      },
      "isDigitalSignature": true,
      "level": "string",
      "sentBackLevels": "string",
      "stage": "string",
      "stageDesc": "string",
    }
    if (id) {
      postParams['id'] = id
      postParams["indentNo"] = this.indendDtls.indentNo,
        postParams["indentDate"] = this.indendDtls.indentDate,
        postParams["status"] = this.indendDtls.status,

        sessionStorage.setItem('indentReq', JSON.stringify(postParams))
      this.router.navigate(['/supplychainmanagement/wholesale/indentrequestnew/preview'])

    } else {
      sessionStorage.setItem('indentReq', JSON.stringify(postParams))
      this.router.navigate(['/supplychainmanagement/wholesale/indentrequestnew/preview'])
    }
  }

  backToList() {
    sessionStorage.removeItem('indentReq')
    this.router.navigate(['/supplychainmanagement/wholesale/indentrequestnew/list'])
  }

  gettheStatus(status) {
    if (status === 'SENDBACK') {
      this.indentStatus = true
    }
    else {
      this.indentStatus = false

    }
  }

}
