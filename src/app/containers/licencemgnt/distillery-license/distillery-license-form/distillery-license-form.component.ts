import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import {
  LicenseConstants,
  WorkFlowNameListConstants,
  SubCategoryDescConstants
} from '@app/containers/licencemgnt/license.constants';
import {
  AuthService, AlertService, DistrictMasterService, TalukMasterService, StatemasterService,
  DocumentUploadService, LicenceManagementService,
  DropdownConfigService, ValidationService, MunicipalityMasterService
} from '@app/services';

import { LicenseCommonService } from '@appLicMgntShared/license-common.service';

const {
  docuPropObj, FF_APPLI, FF_ADDRESS, FF_ATTACHMENTS, FF_BANK, FF_BUSS_UNIT, FF_SITE_DOCUMENT,
  SEC_ADDR_APPLICANT, SEC_ADDR_PREMISES, SEC_ADDR_UNIT, APPLI_CODE_DISTILLERY,
  PROP_APPLI_DET, PROP_ADDRESS_DET, PROP_BANK_DET, PROP_BUSSIN_UNIT, PROP_LICENSE_DL, PROP_ATTACHMENT_DL, PROP_SITE_DOCUMENT,
  CODE_SALUTATION, CODE_GENDER, CODE_LOCALITYTYPE, CODE_BANK, CODE_ENTITYOFFIRM, CODE_ITR, CODE_OWNERSHIP_TYPE,
  DISTI_BOTTL_LICENSE_CATEGORY, DISTI_BOTTL_LICENSE_CATEGORY_DESC, DISTI_BOTTL_CLB1_SUBCATEGORY,
  DISTI_BOTTL_CLB2_SUBCATEGORY, DISTI_BOTTL_DS1_SUBCATEGORY, DISTI_BOTTL_FL1_SUBCATEGORY, DISTI_BOTTL_FL1A_SUBCATEGORY,
  DISTI_BOTTL_FL3_SUBCATEGORY, DISTI_BOTTL_FL3A_SUBCATEGORY,
  STATUS_DRAFT, STATUS_SAVE, STATUS_SUBMITTED, STATUS_SENDBACK, STATUS_APPROVED, STATUS_PENDING_SITE_INFO,
  STATUS_SENDBACK_SITE_INFO, MODULE_NAME_CODE, COMMENT_ACTION_CLARIFICATION, CUSTOMER,
  LOCALITY_URBAN, LOCALITY_RURAL, LICENSE_URL,
  SCREEN_NAME_MODULE, SCREEN_NAME_DISTILLERY, MSG_NO_APPLICATION_NUMBER,
  FN_ATTACH_BOUNDRY, FN_ATTACH_FIRESAFTEYNOC, FN_ATTACH_AFFADAVAIT,
  FN_ATTACH_LAY_PLAN, FN_ATTACH_CERT_OF_INCORP, FN_ATTACH_RESU_OF_AUTH,
  FN_ATTACH_GSTIN, FN_ATTACH_FSSAI_CERT, FN_ATTACH_NOC_OF_PREMISES,
  FN_ATTACH_CERT_OF_POLLUT_CNTRL
} = LicenseConstants;
const { VIEW_LICENSE_STATUS: viewStatusUrl, ACKNOWLEDGEMENT: acknowledgementUrl, PAYMENT: paymentUrl } = LICENSE_URL;

@Component({
  selector: 'app-distillery-license-form',
  templateUrl: './distillery-license-form.component.html',
  styleUrls: ['./distillery-license-form.component.scss']
})
export class DistilleryLicenseFormComponent implements OnInit {

  licConst = LicenseConstants;
  docuPropObj = docuPropObj;
  workFlowNameList = WorkFlowNameListConstants.DISTILLERY;
  subCategoryDesc = SubCategoryDescConstants.DISTILLERY;

  fileArr = {
    [FF_APPLI]: [],
    [FF_ADDRESS]: [],
    [FF_ATTACHMENTS]: [],
    [FF_BANK]: [],
    [FF_BUSS_UNIT]: [],
    [FF_SITE_DOCUMENT]: []
  };

  salutationList: any;
  genderList: any;
  localityTypeList: any;
  bankList: any;
  ITRList: any;
  ownershipList: any;
  entityFirmList: any;

  stateList: any;
  districtList: any;
  countryList: any;
  districtListByState = {
    [SEC_ADDR_APPLICANT]: [],
    [SEC_ADDR_PREMISES]: [],
    [SEC_ADDR_UNIT]: []
  };
  talukList = {
    [SEC_ADDR_APPLICANT]: [],
    [SEC_ADDR_PREMISES]: [],
    [SEC_ADDR_UNIT]: []
  };
  municipalityList: any;

  appliAddrLocality = '';
  premisesAddrLocality = '';
  unitAddrLocality = '';

  distilleryForm: FormGroup;
  siteDetForm: FormGroup;
  commentForm: FormGroup;
  sendbackForm: FormGroup;
  licenseType: any;

  formSubmitted = false;
  siteDetformSub = false;
  commandformSub = false;
  isDraftLoading = false;
  isSubmitLoading = false;

  isFormEdit = false;
  screenSubType: string;
  applicationNumber: string;
  licenseApplicationData: any;
  licenseComments = [];
  licenseStatus: string;
  licenseStage: string;
  cardTitle: string;

  isReadOnly = false;

  financialYear: string;
  processingFee = 200;

  isActionBtnFor = '';
  isCustomer: boolean;
  randNum: number;

  workFlowConfig: object;
  officerLevel: string;
  isRejected: boolean;
  isSendBack: boolean;
  sendBackList: any;
  isSameAsAboveAddr = [];

  applicationDate = this.licenseCommonSer.applicationDate;
  maxDOBDate = this.licenseCommonSer.maxDOBDate;
  minDOBDate = this.licenseCommonSer.minDOBDate;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private formBuilder: FormBuilder,
    private alert: AlertService,
    private authService: AuthService,
    private stateSer: StatemasterService,
    private districtSer: DistrictMasterService,
    private talukSer: TalukMasterService,
    private municipSer: MunicipalityMasterService,
    private dropdownConfigSer: DropdownConfigService,
    private docUplSer: DocumentUploadService,
    private licenseSer: LicenceManagementService,
    private licenseCommonSer: LicenseCommonService,
    private validateSer: ValidationService,
  ) { }

  async ngOnInit() {
    this.isCustomer = this.authService.isCustomer();
    this.randNum = this.licenseCommonSer.randomNum(10, 99);
    this.route.params.subscribe(params => {
      this.cardTitle = 'Application for License ' + params.screenSubType ;
      if (params.screenSubType) {
        this.screenSubType = params.screenSubType;
      }
      if (params.applicationNumber) {
        this.applicationNumber = params.applicationNumber;
        this.isFormEdit = true;
      }
    });

    this.loadFormControl();

  }

  back(): void { this.licenseCommonSer.back(); }
  numberOnly(event): boolean { return this.licenseCommonSer.numberOnly(event); }
  stringToDate(strDate) { return this.licenseCommonSer.stringToDate(strDate); }
  unsetValidator(formControl, fileArr) { return this.licenseCommonSer.unsetValidator(formControl, fileArr); }
  combineArr(oldArr, newArr) { return this.licenseCommonSer.combineArr(oldArr, newArr); }
  invertDate(date) { return this.licenseCommonSer.invertDate(date); }

  getForm() { return this.distilleryForm; }
  getFormCntr(element) { return this.getForm().get(element); }
  getFormCntrl(formCntrl, element) { return formCntrl.get(element); }

  getAppliFormCntrInst() { return this.getFormCntr(PROP_APPLI_DET); }
  getAppliFormCntr(element = '') { return (element) ? this.getAppliFormCntrInst().get(element) : this.getAppliFormCntrInst(); }
  getBankFrmCntrInst() { return this.getFormCntr(PROP_BANK_DET); }
  getBankFormCntr(element = '') { return (element) ? this.getBankFrmCntrInst().get('0').get(element) : this.getBankFrmCntrInst().get('0'); }
  getBussFormCntrInst() { return this.getFormCntr(PROP_BUSSIN_UNIT); }
  getBussinessFormCntr(element = '') { return (element) ? this.getBussFormCntrInst().get(element) : this.getBussFormCntrInst(); }
  getDLFormCntrInst() { return this.getFormCntr(PROP_LICENSE_DL); }
  getDLFormCntr(element = '') { return (element) ? this.getDLFormCntrInst().get(element) : this.getDLFormCntrInst(); }

  getAddressFormCntr() { return this.getFormCntr(PROP_ADDRESS_DET); }
  getAddrCtByIdx(idx) { return this.getAddressFormCntr().get(idx); }
  getAppliAddrFormCntr(element = '') { return (element) ? this.getAddrCtByIdx('0').get(element) : this.getAddrCtByIdx('0'); }
  getPremisesAddrFormCntr(element = '') { return (element) ? this.getAddrCtByIdx('1').get(element) : this.getAddrCtByIdx('1'); }
  getUnitAddrFormCntr(element = '') { return (element) ? this.getAddrCtByIdx('2').get(element) : this.getAddrCtByIdx('2'); }
  getAttachFormCntrInst() { return this.getDLFormCntr(PROP_ATTACHMENT_DL); }
  getAttachFormCntr(element = '') { return (element) ? this.getAttachFormCntrInst().get(element) : this.getAttachFormCntrInst(); }

  getSiteDetForm() { return this.siteDetForm; }

  get siteDetFormControls() { return this.siteDetForm.controls; }
  get siteDocumentFormControls() { return (this.siteDetFormControls[PROP_SITE_DOCUMENT] as FormArray).controls; }

  getSiteDetFormCntr(element) { return this.getSiteDetForm().get(element); }
  getSiteDocumentFormCntr() { return this.getSiteDetFormCntr(PROP_SITE_DOCUMENT); }

    // modified by::ss
    getSitedocCntrIdxIns(idx) { return (this.getSiteDocumentFormCntr() as FormArray).at(idx); }
    getSitedocCntrIdx(idx, element = '') {
       return (element) ? this.getSitedocCntrIdxIns(idx).get(element) : this.getSitedocCntrIdxIns(idx); }

  getSiteDocumentByIdxFormCntr(idx, element = null) {
    const inst = this.getSiteDocumentFormCntr().get(idx);
    return (element) ? inst.get(element) : inst;
  }

  addSiteDocumentRow() { (this.getSiteDocumentFormCntr() as FormArray).push(this.buildSiteDocumentFormGroup()); }
  remSiteDocumentRow(idx: number) { (this.getSiteDocumentFormCntr() as FormArray).removeAt(idx); }
  getSiteDocumentLen(): number { return (this.getSiteDocumentFormCntr() as FormArray).length; }

  loadFormControl() {
    this.createDistilleryForm();
    this.createSiteDetailForm();
    (this.isFormEdit) ? this.loadLicenseData() : this.loadInitialFormData();
    this.createcommentForm();
    this.getWorkFlowConfig();
  }

  loadInitialFormData() {
    this.getFinancialYr();
    this.commonDatas();
    this.processFormActionReadOnly();
  }

  buildBusinessUnitDetFormGroup(data?: any) {
    const basicEle = {
      firmLicenseNumber: ['', this.validateSer.valiReqOnly],
      licenseValidityDate: ['', this.validateSer.valiReqOnly],
      firmCompanyPanNumber: ['', this.validateSer.valiForPan],
      itrAssesmentYearCode: ['', this.validateSer.valiReqOnly],
      itrAssessmentYearDesc: ['', this.validateSer.valiReqOnly],
      previusItrUploadReason: ['', this.validateSer.valiReqOnly],
      gstNumber: ['', this.validateSer.valiReqOnly],

      unitLicense_file: ['', this.validateSer.valiReqOnly],
      unitLicense_file_source: ['', this.validateSer.valiReqOnly],

      unitAffadavait_file: ['', this.validateSer.valiReqOnly],
      unitAffadavait_file_source: ['', this.validateSer.valiReqOnly],

      compFirmPan_file: ['', this.validateSer.valiReqOnly],
      compFirmPan_file_source: ['', this.validateSer.valiReqOnly],

      lastYrITR_file: ['', this.validateSer.valiReqOnly],
      lastYrITR_file_source: ['', this.validateSer.valiReqOnly],

      uploadGstin_file: ['', this.validateSer.valiReqOnly],
      uploadGstin_file_source: ['', this.validateSer.valiReqOnly],
    };

    switch (this.screenSubType) {
      case DISTI_BOTTL_FL1_SUBCATEGORY:
      case DISTI_BOTTL_FL1A_SUBCATEGORY:
        // this.licenseCommonSer.mergeWith(basicEle, {
        //   firmCompanyPanNumber: ['', this.validateSer.valiForPan],
        //   gstNumber: ['', this.validateSer.valiReqOnly],
        // });
        break;
    }
    return this.formBuilder.group(basicEle);
  }

  // buildAppliDetFormGroup(data?: any) { return this.validateSer.buildAppliDetFormGroup(data); }
  buildBankDetFormGroup(data?: any) { return this.validateSer.buildBankDetFormGroup(data); }

  buildAddressFormGroup(identifier, data?: any) {

    const basicEle = {
      addressIdentifier: [identifier],
      copyIdentifier: [''],
      districtCode: ['', this.validateSer.valiReqOnly],
      districtDesc: [''],
      country: [{ value: 'INDIA', disabled: true }, this.validateSer.valiReqOnly],
      locality: ['', this.validateSer.valiReqOnly],
      localityType: ['', this.validateSer.valiReqOnly],
      municipalAreaCode: [''],
      municipalAreaDesc: [''],
      pinCode: ['', this.validateSer.valiForPinCode],
      policeStationCode: [''],
      policeStationDesc: [''],
      policeStationName: ['', this.validateSer.valiReqOnly],
      stateCode: ['', this.validateSer.valiReqOnly],
      stateDesc: [''],
      street: ['', this.validateSer.valiReqOnly],
      tahsilCode: ['', this.validateSer.valiReqOnly],
      tahsilDesc: [''],
      village: [''],
      block: [''],
      ward: ['']
    };

    switch (identifier) {
      case SEC_ADDR_PREMISES:
        this.licenseCommonSer.mergeWith(basicEle, {
          // unitName: ['', this.validateSer.valiReqOnly],
          unitName: [''],
        });
        break;
      case SEC_ADDR_UNIT:
        this.licenseCommonSer.mergeWith(basicEle, {
          unitName: ['', this.validateSer.valiReqOnly],
          ownershipTypeCode: ['', this.validateSer.valiReqOnly],
          ownershipTypeDesc: [''],
          ownershipDoc_file: ['', this.validateSer.valiReqOnly],
          ownershipDoc_file_source: ['', this.validateSer.valiReqOnly],
        });
        break;
    }

    return this.formBuilder.group(basicEle);
  }
  buildAppliDetFormGroup(data?: any) {
    const basicEle = {
        salutationCode: ['', this.validateSer.valiReqOnly],
        salutationDesc: ['', this.validateSer.valiReqOnly],
        firstName: ['', this.validateSer.valiReqOnly],
        middleName: [''],
        lastName: ['', this.validateSer.valiReqOnly],
        mobileNumber: ['', this.validateSer.valiForMob],
        emailId: ['', this.validateSer.valiForEmail],
        genderCode: ['', this.validateSer.valiReqOnly],
        genderDesc: ['', this.validateSer.valiReqOnly],
        fatherHusbandName: ['', this.validateSer.valiReqOnly],
        dob: ['', this.validateSer.valiReqOnly],
        aadharNumber: ['', this.validateSer.valiForAadhar],
        panNumber: ['', this.validateSer.valiForPan],
        itrAssesmentYearCode: ['', this.validateSer.valiReqOnly],
        itrAssesmentYearDesc: ['', this.validateSer.valiReqOnly],
        previousItrNotFiled: ['', this.validateSer.valiReqOnly],

        appli_photo_file: ['', this.validateSer.valiReqOnly],
        appli_photo_file_source: ['', this.validateSer.valiReqOnly],

        appli_aadhar_file: ['', this.validateSer.valiReqOnly],
        appli_aadhar_file_source: ['', this.validateSer.valiReqOnly],

        appli_pan_file: ['', this.validateSer.valiReqOnly],
        appli_pan_file_source: ['', this.validateSer.valiReqOnly],

        appli_itr_file: ['', this.validateSer.valiReqOnly],
        appli_itr_file_source: ['', this.validateSer.valiReqOnly],
    };
    return this.formBuilder.group(basicEle);
}

  buildAdditionalDetFormGroup(data?: any) {
    const basciEle = {
      gstNumber: ['', this.validateSer.valiReqOnly],

      affadavait_file: ['', this.validateSer.valiReqOnly],
      affadavait_file_source: ['', this.validateSer.valiReqOnly],

      boundries_file: ['', this.validateSer.valiReqOnly],
      boundries_file_source: ['', this.validateSer.valiReqOnly],

      layoutPlan_file: ['', this.validateSer.valiReqOnly],
      layoutPlan_file_source: ['', this.validateSer.valiReqOnly],

      certificationOfIncorporation_file: ['', this.validateSer.valiReqOnly],
      certificationOfIncorporation_file_source: ['', this.validateSer.valiReqOnly],

      resolutionOfAuthorization_file: ['', this.validateSer.valiReqOnly],
      resolutionOfAuthorization_file_source: ['', this.validateSer.valiReqOnly],

      uploadGstin_file: ['', this.validateSer.valiReqOnly],
      uploadGstin_file_source: ['', this.validateSer.valiReqOnly],

      fireSafteyNoc_file: ['', this.validateSer.valiReqOnly],
      fireSafteyNoc_file_source: ['', this.validateSer.valiReqOnly],

      fssaiCertificate_file: ['', this.validateSer.valiReqOnly],
      fssaiCertificate_file_source: ['', this.validateSer.valiReqOnly],

      nocOfPremises_file: ['', this.validateSer.valiReqOnly],
      nocOfPremises_file_source: ['', this.validateSer.valiReqOnly],

      certOfPollutionControl_file: ['', this.validateSer.valiReqOnly],
      certOfPollutionControl_file_source: ['', this.validateSer.valiReqOnly],
    };
    return this.formBuilder.group(basciEle);
  }

  createcommentForm(data?: any) { this.commentForm = this.validateSer.buildCommentFormGroup(data); }
  createsendbackForm(data?: any) { this.sendbackForm = this.validateSer.buildSendbackFormGroup(data); }

  createDistilleryForm() {
    const basicEle = {
      financialYear: [''],
      applicationDate: [this.applicationDate],
      licenseType: [this.subCategoryDesc[this.screenSubType], this.validateSer.valiReqOnly],

      applicantDetails: this.buildAppliDetFormGroup(),

      bankList: this.formBuilder.array([
        this.buildBankDetFormGroup()
      ]),

      paymentProcessingFee: [this.processingFee],
    };
    switch (this.screenSubType) {
      case DISTI_BOTTL_FL1_SUBCATEGORY:
      case DISTI_BOTTL_FL1A_SUBCATEGORY:
      case DISTI_BOTTL_FL3_SUBCATEGORY:
      case DISTI_BOTTL_FL3A_SUBCATEGORY:
        this.licenseCommonSer.mergeWith(basicEle, {
          businessUnitDetails: this.buildBusinessUnitDetFormGroup(),

          addressList: this.formBuilder.array([
            this.buildAddressFormGroup(SEC_ADDR_APPLICANT),
            this.buildAddressFormGroup(SEC_ADDR_PREMISES),
            this.buildAddressFormGroup(SEC_ADDR_UNIT),
          ]),

          distilleryLicenses: this.formBuilder.group({
            distilleryAdditionalDetails: this.buildAdditionalDetFormGroup(),
          }),
        });
        break;
      case DISTI_BOTTL_CLB1_SUBCATEGORY:
      case DISTI_BOTTL_CLB2_SUBCATEGORY:
        this.licenseCommonSer.mergeWith(basicEle, {
          addressList: this.formBuilder.array([
            this.buildAddressFormGroup(SEC_ADDR_APPLICANT),
            this.buildAddressFormGroup(SEC_ADDR_PREMISES),
          ]),
        });
        break;
    }
    this.distilleryForm = this.formBuilder.group(basicEle);

    console.log('this.distilleryForm::', this.distilleryForm);
  }

  buildSiteDocumentFormGroup(data?: any) {
    const basicEle = {
      description: [data ? data.description : '', this.validateSer.valiReqOnly],

      site_photo_file: data ? [''] : ['', this.validateSer.valiReqOnly],
      site_photo_file_source: data ? [''] : ['', this.validateSer.valiReqOnly],
    };
    return this.formBuilder.group(basicEle);
  }

  createSiteDetailForm() {
    const basicEle = {
      latitude: ['', this.validateSer.valiReqOnly],
      longitude: ['', this.validateSer.valiReqOnly],
      east: ['', this.validateSer.valiReqOnly],
      north: ['', this.validateSer.valiReqOnly],
      south: ['', this.validateSer.valiReqOnly],
      west: ['', this.validateSer.valiReqOnly],

      documentList: this.formBuilder.array([
        this.buildSiteDocumentFormGroup()
      ]),
    };

    this.siteDetForm = this.formBuilder.group(basicEle);
  }

  findDropMas(code) { return this.dropdownConfigSer.findDropDownMaster(code); }

  commonDatas() {
    this.getAllStates();
    this.getAllDistricts();

    this.findDropMas(CODE_SALUTATION).subscribe((res) => this.salutationList = res.data ? res.data.downDropDownMasterValueList : []);
    this.findDropMas(CODE_GENDER).subscribe((res) => this.genderList = res.data ? res.data.downDropDownMasterValueList : []);
    this.findDropMas(CODE_LOCALITYTYPE).subscribe((res) => this.localityTypeList = res.data ? res.data.downDropDownMasterValueList : []);
    this.findDropMas(CODE_BANK).subscribe((res) => this.bankList = res.data ? res.data.downDropDownMasterValueList : []);
    this.findDropMas(CODE_ENTITYOFFIRM).subscribe((res) => this.entityFirmList = res.data ? res.data.downDropDownMasterValueList : []);
    this.findDropMas(CODE_ITR).subscribe((res) => this.ITRList = res.data ? res.data.downDropDownMasterValueList : []);
    this.findDropMas(CODE_OWNERSHIP_TYPE).subscribe((res) => this.ownershipList = res.data ? res.data.downDropDownMasterValueList : []);
  }

  getFinancialYr() {
    this.licenseSer.findFinancialYear().subscribe((res) => {
      this.financialYear = res ? res.financialYear : '';
      this.getForm().patchValue({ financialYear: this.financialYear });
    });
  }

  getAllStates() { this.stateSer.getState().subscribe((respData: any) => { this.stateList = respData.data; }); }
  getAllMunicipal() { this.municipSer.getMunicipality().subscribe((respData: any) => this.municipalityList = respData.data); }
  getAllDistricts() { this.districtSer.getAllDistrict().subscribe((respData: any) => { this.districtList = respData.data; }); }

  getAddrFormCntl(key) {
    let formContrl;
    switch (key) {
      case SEC_ADDR_APPLICANT:
        formContrl = this.getAppliAddrFormCntr();
        break;
      case SEC_ADDR_PREMISES:
        formContrl = this.getPremisesAddrFormCntr();
        break;
      case SEC_ADDR_UNIT:
        formContrl = this.getUnitAddrFormCntr();
        break;
    }
    return formContrl;
  }

  onStateChange(stateId, key) {
    this.getAddrFormCntl(key).patchValue({ districtCode: '', tahsilCode: '' });
    this.getDistrictsByStateid(stateId, key);
  }
  getDistrictsByStateid(stateId, key) { this.districtSer.getDistrictsByStateid(stateId).subscribe(
    (resp: any) => this.districtListByState[key] = resp.data); }
  onDistrictChange(districtId, key) {
    this.getAddrFormCntl(key).patchValue({ tahsilCode: '' });
    this.loadTalukByDist(districtId, key);
  }
  loadTalukByDist(districtId, key) { this.talukSer.gettalukByDistId(districtId).subscribe((resp: any) => this.talukList[key] = resp.data); }
  onTalukChange(talukId, key) { console.log('talukId', talukId); }

  onLocalityChange(localityType, type) {
    // const { value: localityType } = $event.target;
    let formContrl;
    switch (type) {
      case SEC_ADDR_APPLICANT:
        formContrl = this.getAppliAddrFormCntr();
        this.appliAddrLocality = (localityType === LOCALITY_URBAN) ? LOCALITY_URBAN :
          ((localityType === LOCALITY_RURAL) ? LOCALITY_RURAL : '');
        break;
      case SEC_ADDR_PREMISES:
        formContrl = this.getPremisesAddrFormCntr();
        this.premisesAddrLocality = (localityType === LOCALITY_URBAN) ? LOCALITY_URBAN :
          ((localityType === LOCALITY_RURAL) ? LOCALITY_RURAL : '');
        break;
      case SEC_ADDR_UNIT:
        formContrl = this.getUnitAddrFormCntr();
        this.unitAddrLocality = (localityType === LOCALITY_URBAN) ? LOCALITY_URBAN :
          ((localityType === LOCALITY_RURAL) ? LOCALITY_RURAL : '');
        break;
    }
    this.validateSer.localityChangeValidatation(formContrl, localityType);
    return true;
  }

  patchMasVal(list, code, formCntl, key) {
    const obj = list.find((resp: any) => resp.paramKey === code);
    formCntl.patchValue({ [key]: obj.paramValue });
  }

  onSalutationChange(code) { this.patchMasVal(this.salutationList, code, this.getAppliFormCntr(), 'salutationDesc'); }
  onGenderChange(code) { this.patchMasVal(this.genderList, code, this.getAppliFormCntr(), 'genderDesc'); }
  onAppliITRChange(code) { this.patchMasVal(this.ITRList, code, this.getAppliFormCntr(), 'itrAssesmentYearDesc'); }
  onITRChange(code) { this.patchMasVal(this.ITRList, code, this.getBussinessFormCntr(), 'itrAssessmentYearDesc'); }
  onFirmTypeChange(code) { this.patchMasVal(this.entityFirmList, code, this.getBussinessFormCntr(), 'firmTypedDesc'); }
  onOwnershipTypeChange(code) { this.patchMasVal(this.ownershipList, code, this.getBussinessFormCntr(), 'ownershipTypeDesc'); }
  onBankChange(code) { this.patchMasVal(this.bankList, code, this.getBankFormCntr(), 'bankName'); }

  onCheckboxChange(checkStatus, identifier) {
    console.log('checkStatus::', checkStatus);
    const addrFormControl = this.getAddrFormCntl(identifier);
    if (checkStatus) {
      const formVal = this.distilleryForm.value;
      let addressObj = formVal.addressList[0];
      if (identifier == SEC_ADDR_UNIT) {
        addressObj = formVal.addressList[1];
      }

      const { localityType, stateCode, districtCode, tahsilCode, addressIdentifier } = addressObj;
      this.onLocalityChange(localityType, identifier);
      this.onStateChange(stateCode, identifier);
      this.onDistrictChange(districtCode, identifier);
      this.onTalukChange(tahsilCode, identifier);
      addrFormControl.patchValue(addressObj);
      addrFormControl.patchValue({
        addressIdentifier: identifier,
        copyIdentifier: addressIdentifier
      });
      console.log('formVal.addressList::', formVal.addressList);
    } else {
      addrFormControl.reset();
      addrFormControl.patchValue({
        addressIdentifier: identifier
      });
    }
  }

  onAppliFileChange(event, sourceName, fileFor) {
    console.log('photo event ::size', event.target.files[0].size);
    const  filesize = event.target.files[0].size;
    const  maxfilesize = 1024 * 1024;  // 1 Mb
    if (filesize < maxfilesize) {
      const formControl = this.getAppliFormCntr();
      const fileUpRes = this.onFileChange(event, sourceName, fileFor, formControl);
      return (fileUpRes) ? this.fileArr[FF_APPLI].push(sourceName) : false;
    } else {
      this.alert.showError('Upload Less Then 1MB Size Photo');
      if (fileFor === this.licConst.FN_APPLI_PHOTO) { this.distilleryForm.patchValue({ applicantDetails: {  appli_photo_file: ''} }); }
      if (fileFor === this.licConst.FN_APPLI_AADHAR) { this.distilleryForm.patchValue({ applicantDetails: {  appli_aadhar_file: ''} }); }
      if (fileFor === this.licConst.FN_APPLI_PAN) { this.distilleryForm.patchValue({ applicantDetails: {  appli_pan_file: ''} }); }
      if (fileFor === this.licConst.FN_APPLI_ITR) { this.distilleryForm.patchValue({ applicantDetails: {  appli_itr_file: ''} }); }
    }
  }

  onBussinessFileChange(event, sourceName, fileFor) {
    console.log('photo event ::size', event.target.files[0].size);
    const  filesize = event.target.files[0].size;
    const  maxfilesize = 1024 * 1024;  // 1 Mb
    if (filesize < maxfilesize) {
      const formControl = this.getBussinessFormCntr();
      const fileUpRes = this.onFileChange(event, sourceName, fileFor, formControl);
      return (fileUpRes) ? this.fileArr[FF_BUSS_UNIT].push(sourceName) : false;
    } else {
      this.alert.showError('Upload Less Then 1MB Size Photo');
      if (fileFor === this.licConst.FN_BUSSUNIT_UNIT_LICENSE ) {
      this.distilleryForm.patchValue({ businessUnitDetails: { unitLicense_file: ''} }); }
      if (fileFor === this.licConst.FN_BUSSUNIT_AFFADAVAIT) {
      this.distilleryForm.patchValue({ businessUnitDetails: {  unitAffadavait_file: ''} }); }
      if (fileFor === this.licConst.FN_BUSSUNIT_COMP_PAN) {
      this.distilleryForm.patchValue({ businessUnitDetails: {  compFirmPan_file: ''} }); }
      if (fileFor === this.licConst.FN_BUSSUNIT_ITR_LASTYR) {
      this.distilleryForm.patchValue({ businessUnitDetails: {  lastYrITR_file: ''} }); }
      if (fileFor === this.licConst.FN_BUSSUNIT_GSTIN) {
      this.distilleryForm.patchValue({ businessUnitDetails: {  uploadGstin_file: ''} }); }

    }
  }

  onAttachFileChange(event, sourceName, fileFor) {
    console.log('photo event ::size', event.target.files[0].size);
    const  filesize = event.target.files[0].size;
    const  maxfilesize = 1024 * 1024;  // 1 Mb
    if (filesize < maxfilesize) {
      const formControl = this.getAttachFormCntr();
      const fileUpRes = this.onFileChange(event, sourceName, fileFor, formControl);
      return (fileUpRes) ? this.fileArr[FF_ATTACHMENTS].push(sourceName) : false;
    } else {
      this.alert.showError('Upload Less Then 1MB Size Photo');
      const formContr = this.getForm();
      let pathObj;
      switch (fileFor) {
        case FN_ATTACH_BOUNDRY:
          pathObj = { boundries_file: '' };
          break;
        case FN_ATTACH_FIRESAFTEYNOC:
          pathObj = { fireSafteyNoc_file: '' };
          break;
        case FN_ATTACH_AFFADAVAIT:
          pathObj = { affadavait_file: '' };
          break;
        case FN_ATTACH_LAY_PLAN:
          pathObj = { layoutPlan_file: '' };
          break;
        case FN_ATTACH_CERT_OF_INCORP:
          pathObj = { certificationOfIncorporation_file: '' };
          break;
        case FN_ATTACH_RESU_OF_AUTH:
          pathObj = { resolutionOfAuthorization_file: '' };
          break;
        case FN_ATTACH_GSTIN:
          pathObj = { uploadGstin_file: '' };
          break;
        case FN_ATTACH_FSSAI_CERT:
          pathObj = { fssaiCertificate_file: '' };
          break;
        case FN_ATTACH_NOC_OF_PREMISES:
          pathObj = { nocOfPremises_file: '' };
          break;
        case FN_ATTACH_CERT_OF_POLLUT_CNTRL:
          pathObj = { certOfPollutionControl_file: '' };
          break;
      }
      formContr.patchValue({ distilleryLicenses: { distilleryAdditionalDetails: pathObj } });
    }
  }

  onBankFileChange(event, sourceName, fileFor) {
    console.log('photo event ::size', event.target.files[0].size);
    const filesize = event.target.files[0].size;
    const  maxfilesize = 1024 * 1024; // 1 Mb
    if (filesize < maxfilesize) {
      const formControl = this.getBankFormCntr();
      const fileUpRes = this.onFileChange(event, sourceName, fileFor, formControl);
      return (fileUpRes) ? this.fileArr[FF_BANK].push(sourceName) : false;
    } else {
      this.alert.showError('Upload Less Then 1MB Size Photo');
      const bankFileControls = this.distilleryForm.get('bankList') as FormArray;
      if (fileFor === this.licConst.FN_BK_CAN_CHEQUE) {
        bankFileControls.controls.forEach((element: any) => { element.get('cancel_cheque_file').patchValue(''); } ); }
       }
  }

  onUnitFileChange(event, sourceName, fileFor) {
    console.log('photo event ::size', event.target.files[0].size);
    const  filesize = event.target.files[0].size;
    const  maxfilesize = 1024 * 1024;  // 1 Mb
    if (filesize < maxfilesize) {
      const formControl = this.getUnitAddrFormCntr();
      const fileUpRes = this.onFileChange(event, sourceName, fileFor, formControl);
      return (fileUpRes) ? this.fileArr[FF_ADDRESS].push(sourceName) : false;
    } else {
      this.alert.showError('Upload Less Then 1MB Size Photo');
      const banklistFormCtrl = this.distilleryForm.get('addressList') as FormArray;
      console.log('doc form', banklistFormCtrl);
      // if (fileFor === this.licConst.FN_BUSSUNIT_OWNERSHIIP_DOC) {
      //   banklistFormCtrl.controls.forEach((element: any) => {element.get('ownershipDoc_file').patchValue(''); }); }
    }
  }

  onSiteDocumentFileChange(event, idx, siteDocumentCntrl, sourceName, fileFor) {
    console.log('photo event ::size', event.target.files[0].size);
    const filesize = event.target.files[0].size;
    const  maxfilesize = 1024 * 1024; // 1 Mb
    if (filesize < maxfilesize) {
      const secName = FF_SITE_DOCUMENT;
      const fileUpRes = this.onFileChange(event, sourceName, fileFor, siteDocumentCntrl);
      if (!fileUpRes) {
        return false;
      }
      if (this.fileArr[secName][idx]) {
        this.fileArr[secName][idx].push(sourceName);
      } else {
        this.fileArr[secName][idx] = [];
        this.fileArr[secName][idx].push(sourceName);
      }
    } else {
      this.alert.showError('Upload Less Then 1MB Size Photo');
      const controlls = this.siteDetForm.get('documentList') as FormArray;
      if (fileFor === this.licConst.FN_SITE_PHOTO) {
        controlls.controls.forEach((element: any) => { element.get('site_photo_file').patchValue(''); }); }
    }
  }

  onFileChange(event, sourceName, fileFor, formControl) {
    const maxSize = 1000000;
    if (event.target.files.length > 0) {
      const file = event.target.files[0];

      if (file.size > maxSize) {
        const imageError = 'Maximum size allowed is ' + maxSize / 1000 + ' Mb';
        this.alert.showError(imageError);

        return false;
      }

      file.fileFor = fileFor;
      formControl.patchValue({ [sourceName]: file });
      return true;
    }
    return false;
  }

  async getApplicationNo() {

    if (this.isFormEdit) {
      return this.licenseApplicationData.applicationNumber;
    } else {
      const { content: applicationNumber } = await this.licenseSer.getApplicationNo(APPLI_CODE_DISTILLERY);
      if (!applicationNumber) {
        this.alert.showError(MSG_NO_APPLICATION_NUMBER);
        return;
      }
      return applicationNumber;
    }
  }

  async createFormData(applicationNo, files, formCntrl) {

    if (files.length === 0) {
      return [];
    }

    const formData = new FormData();
    // tslint:disable-next-line: prefer-for-of
    for (let i = 0; i < files.length; i++) {
      const fileStr = files[i];
      const fileSrc = formCntrl.get(fileStr).value;

      formData.append('files[' + i + '].name', fileSrc.fileFor);
      formData.append('files[' + i + '].file', fileSrc);
    }

    formData.append('moduleName', SCREEN_NAME_MODULE);
    formData.append('screenName', SCREEN_NAME_DISTILLERY);
    formData.append('applicationNumber', applicationNo);

    this.authService.fileUploadFlag = true;
    const res: any = await this.docUplSer.uploadDocuments(formData);
    this.authService.fileUploadFlag = false;
    return res;
  }

  async uploadAppliFiles(applicationNo) {
    const files = this.fileArr[FF_APPLI];
    const formCntrl = this.getAppliFormCntr();
    if (files.length === 0) {
      return [];
    }

    return await this.createFormData(applicationNo, files, formCntrl);
  }

  async uploadAddressFiles(applicationNo) {
    const files = this.fileArr[FF_ADDRESS];
    const formCntrl = this.getPremisesAddrFormCntr();
    if (files.length === 0) {
      return [];
    }

    return await this.createFormData(applicationNo, files, formCntrl);
  }

  async uploadBankFiles(applicationNo) {
    const files = this.fileArr[FF_BANK];
    const formCntrl = this.getBankFormCntr();
    if (files.length === 0) {
      return [];
    }

    return await this.createFormData(applicationNo, files, formCntrl);
  }

  async uploadBussinessFiles(applicationNo) {
    const files = this.fileArr[FF_BUSS_UNIT];
    const formCntrl = this.getBussinessFormCntr();
    if (files.length === 0) {
      return [];
    }

    return await this.createFormData(applicationNo, files, formCntrl);
  }

  async uploadAttachFiles(applicationNo) {
    const files = this.fileArr[FF_ATTACHMENTS];
    const formCntrl = this.getAttachFormCntr();
    if (files.length === 0) {
      return [];
    }

    return await this.createFormData(applicationNo, files, formCntrl);
  }

  async uploadSiteDocumentFiles(applicationNo) {
    const files = this.fileArr[FF_SITE_DOCUMENT];
    const allUpRes = [];

    console.log('files::', files);

    if (files.length === 0) {
      return [];
    }

    for (let idx = 0; idx < files.length; idx++) {
      console.log('idx::', idx);
      // tslint:disable-next-line: no-string-literal
      const formCntrl = this.getSiteDocumentFormCntr()['controls'][idx];
      const fileArr = files[idx];
      console.log('formCntrl::', formCntrl);
      console.log('fileArr::', fileArr);
      const upRes = await this.createFormData(applicationNo, fileArr, formCntrl);
      allUpRes.push(upRes);
    }
    return allUpRes;
  }

  setSameAsAboveAddrCheck() {
    if (this.isFormEdit) {
      this.licenseApplicationData.addressList.forEach((addrObj, ind) => {
        if (ind != 0) {
          const preAddrObj = this.licenseApplicationData.addressList[ind - 1];
          if (addrObj.copyIdentifier && addrObj.copyIdentifier === preAddrObj.addressIdentifier) {
            this.isSameAsAboveAddr.push(true);
            return;
          }
        }
        this.isSameAsAboveAddr.push(false);
      });
      console.log('this.isSameAsAboveAddr::', this.isSameAsAboveAddr);
    }
  }

  onSubmit(saveType) {

    this.toggleLoading(saveType);
    switch (this.screenSubType) {
      case DISTI_BOTTL_CLB1_SUBCATEGORY:
      case DISTI_BOTTL_CLB2_SUBCATEGORY:
      case DISTI_BOTTL_DS1_SUBCATEGORY:
        this.add_CLB1_CLB2_License(saveType);
        break;
      case DISTI_BOTTL_FL1_SUBCATEGORY:
      case DISTI_BOTTL_FL1A_SUBCATEGORY:
      case DISTI_BOTTL_FL3_SUBCATEGORY:
      case DISTI_BOTTL_FL3A_SUBCATEGORY:
        this.add_FL1_FL1A_License(saveType);
        break;
    }
  }

  toggleLoading(saveType) {
    switch (saveType) {
      case STATUS_DRAFT:
        this.isDraftLoading = !this.isDraftLoading;
        break;
      case STATUS_SAVE:
        this.isSubmitLoading = !this.isSubmitLoading;
        break;
    }
  }

  mapAddress(element, formControl) {
    const { stateCode: stateId, districtCode: districtId, tahsilCode: talukId, addressIdentifier: key } = element;

    const stateObj = this.stateList.find((resp: any) => resp.id === Number(stateId));
    if (stateObj) {
      formControl.patchValue({ stateDesc: stateObj.stateName });
    }

    if (this.districtListByState[key]) {
      const districtObj = this.districtListByState[key].find((resp: any) => resp.id === Number(districtId));
      if (districtObj) {
        formControl.patchValue({ districtDesc: districtObj.name });
      }
    }

    if (this.talukList[key]) {
      const tahsilObj = this.talukList[key].find((resp: any) => resp.id === Number(talukId));
      if (tahsilObj) {
        formControl.patchValue({ tahsilDesc: tahsilObj.talukName });
      }
    }
    return true;
  }

  async add_FL1_FL1A_License(saveType) {
    this.formSubmitted = false;
    const form = this.distilleryForm;
    const siteVisitForm = this.siteDetForm;
    console.log('this.distilleryForm.valid::', form.valid);
    console.log('this.distilleryForm.value::', form.value);
    console.log('this.distilleryForm::', form);

    const { addressList: befformValaddressList } = form.value;
    befformValaddressList.forEach(element => this.mapAddress(element, this.getAddrFormCntl(element.addressIdentifier)));

    if (saveType !== STATUS_DRAFT && (form.valid === false || siteVisitForm.valid === false) ) {
      this.toggleLoading(saveType);
      if (siteVisitForm.valid === false) {
        this.siteDetformSub = true;
      }
      if (form.valid === false) {
        this.formSubmitted = true;
      }
      return false;
    }

    if (this.isFormEdit) {
      const commentForm = this.commentForm;
      if (commentForm.valid === false && !this.isCustomer) {
        this.commandformSub = true;
        return false;
      }
    }

    const formValue = form.value;

    const {
      financialYear,
      paymentProcessingFee,
      applicantDetails: formValapplicantDet,
      addressList: formValaddressList,
      businessUnitDetails: formValbusinessUnitDet,
      distilleryLicenses: formValDistilleryLicenses,
      bankList: formValbankList
    } = formValue;

    const {
      distilleryAdditionalDetails: formValdistilleryAddiDet
    } = formValDistilleryLicenses;

    console.log('formValue::', formValue);
    console.log('this.fileArr::', this.fileArr);

    const appliDetProp = [
      'appli_photo_file', 'appli_photo_file_source', 'appli_aadhar_file', 'appli_aadhar_file_source',
      'appli_pan_file', 'appli_pan_file_source', 'appli_itr_file', 'appli_itr_file_source'
    ];

    const businessUnitDetProp = [
      'unitLicense_file', 'unitLicense_file_source', 'unitAffadavait_file', 'unitAffadavait_file_source',
      'compFirmPan_file', 'compFirmPan_file_source', 'lastYrITR_file', 'lastYrITR_file_source',
      'uploadGstin_file', 'uploadGstin_file_source'
    ];

    const distilleryAddiDetProp = [
      'affadavait_file', 'affadavait_file_source', 'boundries_file', 'boundries_file_source',
      'layoutPlan_file', 'layoutPlan_file_source', 'certificationOfIncorporation_file', 'certificationOfIncorporation_file_source',
      'resolutionOfAuthorization_file', 'resolutionOfAuthorization_file_source', 'uploadGstin_file', 'uploadGstin_file_source',
      'fireSafteyNoc_file', 'fireSafteyNoc_file_source', 'fssaiCertificate_file', 'fssaiCertificate_file_source',
      'certOfPollutionControl_file', 'certOfPollutionControl_file_source', 'nocOfPremises_file', 'nocOfPremises_file_source',
    ];

    const bankDetProp = [
      'cancel_cheque_file', 'cancel_cheque_file_source'
    ];

    appliDetProp.forEach((ele) => delete formValapplicantDet[ele]);
    businessUnitDetProp.forEach((ele) => delete formValbusinessUnitDet[ele]);
    distilleryAddiDetProp.forEach((ele) => delete formValdistilleryAddiDet[ele]);
    bankDetProp.forEach((ele) => delete formValbankList[0][ele]);

    let uploadAppliFiles;
    let uploadBankFiles;
    let uploadBussinessUnitFiles;
    let uploadAttachmentFiles;

    const applicationNo = await this.getApplicationNo();
    uploadAppliFiles = await this.uploadAppliFiles(applicationNo);
    console.log('uploadAppliFiles::', uploadAppliFiles);
    uploadBankFiles = await this.uploadBankFiles(applicationNo);
    console.log('uploadBankFiles::', uploadBankFiles);
    uploadBussinessUnitFiles = await this.uploadBussinessFiles(applicationNo);
    console.log('uploadBussinessUnitFiles::', uploadBussinessUnitFiles);
    uploadAttachmentFiles = await this.uploadAttachFiles(applicationNo);
    console.log('uploadAttachmentFiles::', uploadAttachmentFiles);

    if (this.isFormEdit) {
      const { licenseObj, applicantDetails, bankList, businessUnitDetails } = this.getLicenseData();

      const { applicantDocumentList: apiDataapplicantDocumentList } = applicantDetails;
      uploadAppliFiles = this.combineArr(apiDataapplicantDocumentList, uploadAppliFiles);

      const { businessUnitDocumentList: apiDatabusinessUnitDocumentList } = businessUnitDetails;
      uploadBussinessUnitFiles = this.combineArr(apiDatabusinessUnitDocumentList, uploadBussinessUnitFiles);

      const { distilleryAdditionalDetails } = licenseObj;
      const { additionalDocumentList: apiDataadditionalDocumentList } = distilleryAdditionalDetails;
      uploadAttachmentFiles = this.combineArr(apiDataadditionalDocumentList, uploadAttachmentFiles);

      const { bankDocumentList: apiDatabankDocumentList } = bankList[0];
      uploadBankFiles = this.combineArr(apiDatabankDocumentList, uploadBankFiles);
    }

    formValapplicantDet.applicantDocumentList = uploadAppliFiles;
    formValbusinessUnitDet.businessUnitDocumentList = uploadBussinessUnitFiles;
    formValdistilleryAddiDet.additionalDocumentList = uploadAttachmentFiles;
    formValbankList[0].bankDocumentList = uploadBankFiles;

    console.log('formValapplicantDet.dob::', formValapplicantDet.dob);
    formValapplicantDet.dob = this.invertDate(formValapplicantDet.dob);
    formValbusinessUnitDet.licenseValidityDate = this.invertDate(formValbusinessUnitDet.licenseValidityDate);

    console.log('formValue::', formValue);

    const payload: any = {
      workFlowName: this.workFlowNameList[this.screenSubType],
      financialYear,
      applicationNumber: applicationNo,
      status: saveType,
      licenseCategory: DISTI_BOTTL_LICENSE_CATEGORY,
      licenseCategoryDesc: DISTI_BOTTL_LICENSE_CATEGORY_DESC,
      licenseSubCategory: this.screenSubType,
      licenseSubCategoryDesc: this.subCategoryDesc[this.screenSubType],
      applicantDetails: formValapplicantDet,
      addressList: formValaddressList,
      businessUnitDetails: formValbusinessUnitDet,
      bankList: formValbankList,
      distilleryLicenses: formValDistilleryLicenses,
      paymentProcessingFee
    };

    console.log('payload::', payload);
    // return false;

    const licenseResp: any = await this.createLicense(payload, form, saveType);
    if (licenseResp.status) {
      const licenseSiteDetResp: any = await this.addLicenseSiteDet(saveType, applicationNo);
      if (licenseSiteDetResp.status) {
        this.toggleLoading(saveType);
        this.processNavigation(saveType, form, licenseResp.data, licenseSiteDetResp.data);
      }
    }

    return true;
  }

  async add_CLB1_CLB2_License(saveType) {
    this.formSubmitted = false;
    const form = this.distilleryForm;
    const siteVisitForm = this.siteDetForm;
    console.log('this.distilleryForm.valid::', form.valid);
    console.log('this.distilleryForm.value::', form.value);
    console.log('this.distilleryForm::', form);

    const { addressList: befformValaddressList } = form.value;
    befformValaddressList.forEach(element => this.mapAddress(element, this.getAddrFormCntl(element.addressIdentifier)));

    if (saveType !== STATUS_DRAFT && (form.valid === false || siteVisitForm.valid === false)) {
      this.toggleLoading(saveType);
      if (siteVisitForm.valid === false) {
        this.siteDetformSub = true;
      }
      if (form.valid === false) {
        this.formSubmitted = true;
      }
      return false;
    }

    if (this.isFormEdit) {
      const commentForm = this.commentForm;
      if (commentForm.valid === false && !this.isCustomer) {
        this.commandformSub = true;
        return false;
      }
    }

    const formValue = form.value;

    const {
      financialYear,
      paymentProcessingFee,
      applicantDetails: formValapplicantDet,
      addressList: formValaddressList,
      bankList: formValbankList
    } = formValue;

    console.log('formValue::', formValue);
    console.log('this.fileArr::', this.fileArr);

    const appliDetProp = [
      'appli_photo_file', 'appli_photo_file_source', 'appli_aadhar_file', 'appli_aadhar_file_source',
      'appli_pan_file', 'appli_pan_file_source', 'appli_itr_file', 'appli_itr_file_source'
    ];

    const bankDetProp = [
      'cancel_cheque_file', 'cancel_cheque_file_source'
    ];

    appliDetProp.forEach((ele) => delete formValapplicantDet[ele]);
    bankDetProp.forEach((ele) => delete formValbankList[0][ele]);

    let uploadAppliFiles;
    let uploadBankFiles;

    const applicationNo = await this.getApplicationNo();
    uploadAppliFiles = await this.uploadAppliFiles(applicationNo);
    console.log('uploadAppliFiles::', uploadAppliFiles);
    uploadBankFiles = await this.uploadBankFiles(applicationNo);
    console.log('uploadBankFiles::', uploadBankFiles);

    if (this.isFormEdit) {
      const { licenseObj, applicantDetails, bankList, businessUnitDetails } = this.getLicenseData();

      const { applicantDocumentList: apiDataapplicantDocumentList } = applicantDetails;
      uploadAppliFiles = this.combineArr(apiDataapplicantDocumentList, uploadAppliFiles);

      const { bankDocumentList: apiDatabankDocumentList } = bankList[0];
      uploadBankFiles = this.combineArr(apiDatabankDocumentList, uploadBankFiles);
    }

    formValapplicantDet.applicantDocumentList = uploadAppliFiles;
    formValbankList[0].bankDocumentList = uploadBankFiles;

    console.log('formValapplicantDet.dob::', formValapplicantDet.dob);
    formValapplicantDet.dob = this.invertDate(formValapplicantDet.dob);

    console.log('formValue::', formValue);

    const payload: any = {
      workFlowName: this.workFlowNameList[this.screenSubType],
      financialYear,
      applicationNumber: applicationNo,
      status: saveType,
      licenseCategory: DISTI_BOTTL_LICENSE_CATEGORY,
      licenseCategoryDesc: DISTI_BOTTL_LICENSE_CATEGORY_DESC,
      licenseSubCategory: this.screenSubType,
      licenseSubCategoryDesc: this.subCategoryDesc[this.screenSubType],
      applicantDetails: formValapplicantDet,
      addressList: formValaddressList,
      bankList: formValbankList,
      paymentProcessingFee
    };

    console.log('payload::', payload);
    // return false;

    const licenseResp: any = await this.createLicense(payload, form, saveType);
    if (licenseResp.status) {
      const licenseSiteDetResp: any = await this.addLicenseSiteDet(saveType, applicationNo);
      if (licenseSiteDetResp.status) {
        this.toggleLoading(saveType);
        this.processNavigation(saveType, form, licenseResp.data, licenseSiteDetResp.data);
      }
    }

    return true;
  }

  async createLicense(payload, form, saveType) {

    console.log('before-payload::', payload);
    payload = await this.getFinalPayload(payload, saveType);
    if (!payload) {
      console.log('payload problem');
      return false;
    }
    console.log('final-payload::', payload);

    let status = false;
    let data = {};
    const licenseCreationRes: any = await this.licenseSer.createLicense(payload);
    const { responseCode: respCode, responseMessage: respMsg, content: respContent } = licenseCreationRes;
    if (respCode === 200) {
      this.alert.showSuccess(respMsg);
      status = true;
      data = respContent;
    } else {
      this.alert.showError(respMsg);
    }
    return { status, data };
  }

  async getFinalPayload(payload, saveType) {

    const commentForm = this.commentForm;
    const sendbackForm = this.sendbackForm;

    const { comments } = commentForm.value;

    switch (saveType) {
      case STATUS_DRAFT:
      case STATUS_SAVE:
      case STATUS_SENDBACK:
        payload.event = '';
        payload.level = '';
        break;
      case STATUS_SUBMITTED:
        payload.event = 'INITIATE';
        payload.level = 'Level 1' ;
        break;
      default:
        payload.event = saveType;
        payload.level = this.officerLevel;
        break;
    }

    if (comments) {
      payload.comments = comments;
    }

    if (this.isFormEdit) {
      payload.id = this.licenseApplicationData.id;
    }

    if (saveType === STATUS_SENDBACK) {
      const { sendback } = sendbackForm.value;
      payload.sentBackLevels = sendback;
    }

    return payload;
  }

  async processNavigation(saveType, form, respContent, siteRespContent = null) {
    const { applicationNumber, isLicenseFeePaid } = respContent;
    if (this.isCustomer) {
      if (saveType === STATUS_DRAFT) {
        this.licenseApplicationData = respContent;
        // this.licenseApplicationData['siteDetails'].push(siteRespContent);
        this.isFormEdit = true;
      }

      if ([STATUS_SAVE, STATUS_SENDBACK, STATUS_SUBMITTED].includes(saveType)) {
        form.reset();
        const { isLicenseFeeRequired }: any = this.workFlowConfig;
        const routeUrl = ((isLicenseFeePaid) ? acknowledgementUrl : ((isLicenseFeeRequired) ? paymentUrl : acknowledgementUrl));
        this.router.navigate([routeUrl + applicationNumber]);
      }
    } else {
      this.router.navigate([viewStatusUrl]);
    }
    return;
  }

  async addLicenseSiteDet(saveType, applicationNo) {
    this.siteDetformSub = false;
    const form = this.siteDetForm;
    console.log('this.siteDetForm.valid::', form.valid);
    console.log('this.siteDetForm.value::', form.value);
    console.log('this.siteDetForm::', form);

    if (saveType !== STATUS_DRAFT && form.valid === false) {
      this.siteDetformSub = true;
      return false;
    }

    const formValue = form.value;
    const {
      documentList: formValdocumentList
    } = formValue;

    const documentListProp = [
      'site_photo_file', 'site_photo_file_source'
    ];

    documentListProp.forEach((ele) => formValdocumentList.forEach((documentEle) => delete documentEle[ele]));

    let uploadSitePhotoFiles;

    uploadSitePhotoFiles = await this.uploadSiteDocumentFiles(applicationNo);
    console.log('uploadSitePhotoFiles::', uploadSitePhotoFiles);

    if (this.isFormEdit) {
      const {
        siteDetails
      } = this.getLicenseData();
      const {
        documentList: apiDataDocumentList
      } = siteDetails[0];

      if (apiDataDocumentList.length > 0) {
        let fileInst;
        apiDataDocumentList.forEach((ele, ind) => {
          fileInst = uploadSitePhotoFiles[ind];
          if (!fileInst) {
            uploadSitePhotoFiles.push([ele]);
          }
        });
      }
    }

    let fileInstant;
    formValdocumentList.forEach((ele, ind) => {
      fileInstant = (uploadSitePhotoFiles[ind]) ? uploadSitePhotoFiles[ind][0] : {};
      fileInstant.description = ele.description;
      formValdocumentList[ind] = fileInstant;
    });

    console.log('formValue::', formValue);

    const payload: any = {
      applicationNumber: applicationNo,
      licenseCategory: DISTI_BOTTL_LICENSE_CATEGORY,
      licenseSubCategory: this.screenSubType,
      isCustomer: this.isCustomer,
      ...formValue
    };
    console.log('addLicenseSiteDet-payload::', payload);

    let status = false;
    let data = {};
    const saveUpdateSiteDetailsRes: any = await this.licenseSer.saveUpdateSiteDetails(payload);
    const { responseCode: respCode, responseMessage: respMsg, content: respContent } = saveUpdateSiteDetailsRes;
    console.log('respContent::', respContent);
    if (respCode === 200) {
      this.alert.showSuccess(respMsg);
      status = true;
      data = respContent;
    } else {
      this.alert.showError(respMsg);
    }

    return { status, data };
  }

  getWorkFlowConfig() {
    const subModuleCode = this.workFlowNameList[this.screenSubType];
    this.licenseSer.findWorkFlowByModuleAndSubModule(MODULE_NAME_CODE, subModuleCode).subscribe((resp: any) => {
      console.log(resp);
      const { responseCode: respCode, responseMessage: respMsg, content: respCont } = resp;
      if (respCode === 200) {
        console.log(respCont);
        if (respCont) {
          this.workFlowConfig = respCont;
          // this.alert.showSuccess('Workflow config Initiated');
        } else {
          this.alert.showError('respCont Not available');
        }
      } else {
        this.alert.showError(respMsg);
      }
    });
  }

  loadLicenseData() {
    this.licenseSer.findLicenseApplication(this.applicationNumber).subscribe((resp: any) => {
      console.log('resp::', resp);
      const { responseCode: respCode, content: respContent } = resp;
      if (respCode === 200) {
        this.licenseApplicationData = respContent;

        this.commonDatas();

        switch (this.screenSubType) {
          case DISTI_BOTTL_CLB1_SUBCATEGORY:
          case DISTI_BOTTL_CLB2_SUBCATEGORY:
            this.patchCLB1CLB2Form();
            break;
          case DISTI_BOTTL_FL1_SUBCATEGORY:
          case DISTI_BOTTL_FL1A_SUBCATEGORY:
          case DISTI_BOTTL_FL3_SUBCATEGORY:
          case DISTI_BOTTL_FL3A_SUBCATEGORY:
            this.patchFL1FL1AForm();
            break;
        }

        const { status, commentList } = this.getLicenseData();
        this.isSendBack = (status === STATUS_SENDBACK) ? true : false;
        this.licenseComments = commentList.filter((res) => this.licenseCommonSer.customerCommentFilter(res));
        this.licenseStatus = this.licenseApplicationData.status;
        this.licenseStage = this.licenseApplicationData.stage;
        this.processFormActionReadOnly();

        this.alert.showSuccess(resp.responseMessage);

      } else {
        this.alert.showError(resp.responseMessage);
      }
    });
  }

  patchFL1FL1AForm() {

    const {
      financialYear, applicationDate, licenseObj, addressList, applicantDetails, bankList, businessUnitDetails, siteDetails
    } = this.getLicenseData();

    console.log('licenseObj::', licenseObj);

    addressList.forEach(element => {
      this.onStateChange(element.stateCode, element.addressIdentifier);
      this.onDistrictChange(element.districtCode, element.addressIdentifier);
    });

    const appliDetProp = [
      'appli_photo_file', 'appli_aadhar_file',
      'appli_pan_file', 'appli_itr_file'
    ];

    const businessUnitDetProp = [
      'unitLicense_file', 'unitAffadavait_file',
      'compFirmPan_file', 'lastYrITR_file', 'uploadGstin_file'
    ];

    const distilleryAddiDetProp = [
      'affadavait_file', 'boundries_file',
      'layoutPlan_file', 'certificationOfIncorporation_file',
      'resolutionOfAuthorization_file', 'uploadGstin_file',
      'fireSafteyNoc_file', 'fssaiCertificate_file',
      'certOfPollutionControl_file', 'nocOfPremises_file',
    ];

    const bankDetProp = [
      'cancel_cheque_file'
    ];

    const form = this.distilleryForm;
    const appliFormCntr = this.getAppliFormCntr();
    const bussinessFormCntr = this.getBussinessFormCntr();
    const attachFormCntr = this.getAttachFormCntr();
    const bankDetControl = this.getBankFormCntr();

    this.unsetValidator(appliFormCntr, appliDetProp);
    this.unsetValidator(bussinessFormCntr, businessUnitDetProp);
    this.unsetValidator(attachFormCntr, distilleryAddiDetProp);
    this.unsetValidator(bankDetControl, bankDetProp);

    applicantDetails.dob = this.invertDate(applicantDetails.dob);
    businessUnitDetails.licenseValidityDate = this.invertDate(businessUnitDetails.licenseValidityDate);

    form.patchValue({
      financialYear,
      applicationDate: this.invertDate(applicationDate),
      applicantDetails,
      addressList,
      businessUnitDetails,
      distilleryLicenses: licenseObj,
      bankList
    });

    this.siteDetForm.patchValue(siteDetails[0]);

    this.remSiteDocumentRow(0);
    siteDetails[0].documentList.forEach(element => {
      (this.getSiteDocumentFormCntr() as FormArray).push(this.buildSiteDocumentFormGroup(element));
    });
    this.setSameAsAboveAddrCheck();

    return true;

  }

  patchCLB1CLB2Form() {

    const {
      financialYear, applicationDate, licenseObj, addressList, applicantDetails, bankList, businessUnitDetails, siteDetails
    } = this.getLicenseData();

    console.log('licenseObj::', licenseObj);

    addressList.forEach(element => {
      this.onStateChange(element.stateCode, element.addressIdentifier);
      this.onDistrictChange(element.districtCode, element.addressIdentifier);
    });

    const appliDetProp = [
      'appli_photo_file', 'appli_aadhar_file',
      'appli_pan_file', 'appli_itr_file'
    ];

    const bankDetProp = [
      'cancel_cheque_file'
    ];

    const form = this.distilleryForm;
    const appliFormCntr = this.getAppliFormCntr();
    const bankDetControl = this.getBankFormCntr();

    this.unsetValidator(appliFormCntr, appliDetProp);
    this.unsetValidator(bankDetControl, bankDetProp);

    applicantDetails.dob = this.invertDate(applicantDetails.dob);

    form.patchValue({
      financialYear,
      applicationDate: this.invertDate(applicationDate),
      applicantDetails,
      addressList,
      bankList
    });

    this.siteDetForm.patchValue(siteDetails[0]);

    this.remSiteDocumentRow(0);
    siteDetails[0].documentList.forEach(element => {
      (this.getSiteDocumentFormCntr() as FormArray).push(this.buildSiteDocumentFormGroup(element));
    });
    this.setSameAsAboveAddrCheck();

    return true;

  }

  processFormActionReadOnly() {
    if (this.isFormEdit) {
      const { readOnly, showActionFor } = this.licenseCommonSer.isEditFormIsReadOnly(
        this.isCustomer, this.licenseStatus, this.licenseStage, DISTI_BOTTL_LICENSE_CATEGORY
      );

      this.createsendbackForm();

      this.isActionBtnFor = showActionFor;
      this.isReadOnly = readOnly;
      if (readOnly) {
        this.distilleryForm.disable();
        this.siteDetForm.disable();
      }
    } else {
      this.isActionBtnFor = CUSTOMER;
      this.isReadOnly = false;
    }
  }

  getLicenseData(): any {
    const { financialYear, applicationDate, licenseType, addressList, applicantDetails, bankList, businessUnitDetails,
      distilleryLicenses, siteDetails, status, commentList } = this.licenseApplicationData;
    const licenseObj = distilleryLicenses ? distilleryLicenses : [];
    this.licenseCommonSer.mergeWith(licenseObj, { addressList, applicantDetails, bankList, businessUnitDetails });

    return {
      financialYear, applicationDate, licenseType, licenseObj,
      addressList, applicantDetails, businessUnitDetails, bankList,
      siteDetails, status, commentList
    };
  }

  getFileArr(propertyName, idx = null) {
    const { licenseObj } = this.getLicenseData();
    // console.log('licenseObj::', licenseObj);
    const propObj = licenseObj[propertyName];
    const docProp = this.docuPropObj[propertyName];
    const fileArr = (idx !== null) ? propObj[idx][docProp] : propObj[docProp];
    return fileArr;
  }

  isFileExists(propertyName, fileFor, idx = null) {

    let res = false;
    if (this.licenseApplicationData) {

      const fileArr = this.getFileArr(propertyName, idx);
      res = fileArr.find((resp: any) => resp.name === fileFor);
    }

    return res;
  }

  downloadDocument(propertyName, fileFor) {

    if (this.licenseApplicationData) {

      const fileArr = this.getFileArr(propertyName);
      const fileObj = fileArr.find((resp: any) => resp.name === fileFor);

      const { uuid, documentName } = fileObj;

      if (uuid && documentName) {
        this.docUplSer.downloadDocument(uuid, documentName).subscribe(
          (resp: any) => this.licenseCommonSer.fileSaver(resp, documentName),
          (error: any) => this.alert.showError('Error downloading the file'),
          () => console.info('File downloaded successfully')
        );
      } else {
        this.alert.showError('File not available');
      }
    } else {
      this.alert.showError('File details not found');
    }
  }

  getSiteDoc(propertyName, idx, isCustomer) {
    const { siteDetails } = this.getLicenseData();
    const propObj = siteDetails.find((resp: any) => resp.isCustomer === isCustomer);
    if (propObj) {
      return (propObj[propertyName][idx].documentName !== null) ? propObj[propertyName][idx] : false;

    } else {
      return false ;
    }
    // return (propObj[propertyName][idx].documentName !== null) ? propObj[propertyName][idx] : false;
  }

  isSiteDocFileExists(propertyName, idx, isCustomer) {

    let res = false;
    if (this.licenseApplicationData) {
      res = this.getSiteDoc(propertyName, idx, isCustomer);
    }

    return res;
  }

  downloadSiteDocument(propertyName, idx, isCustomer) {

    if (this.licenseApplicationData) {

      const fileObj = this.getSiteDoc(propertyName, idx, isCustomer);

      const { uuid, documentName } = fileObj;

      if (uuid && documentName) {
        this.docUplSer.downloadDocument(uuid, documentName).subscribe(
          (resp: any) => this.licenseCommonSer.fileSaver(resp, documentName),
          (error: any) => this.alert.showError('Error downloading the file'),
          () => console.info('File downloaded successfully')
        );
      } else {
        this.alert.showError('File not available');
      }
    } else {
      this.alert.showError('File details not found');
    }
  }

  loadDummyFormData() {

    const patchObj = {
      applicantDetails: {
        aadharNumber: '9887766554' + this.randNum,
        emailId: 'test_user' + this.randNum + '@gmail.com',
        firstName: 'test' + this.randNum,
        lastName: 'last' + this.randNum,
        middleName: 'mid' + this.randNum,
        mobileNumber: '98765443' + this.randNum,
        panNumber: 'DTVPP22' + this.randNum + 'Z',
        previousItrNotFiled: 'nothing',
        fatherHusbandName: 'test_father_' + this.randNum,
      },
      addressList: [
        {
          block: 'appli_block_name' + this.randNum,
          locality: 'appli_locality' + this.randNum,
          policeStationCode: 1,
          pinCode: 655443,
          street: 'appli_street' + this.randNum,
          village: 'appli_village ' + this.randNum,
          ward: 'appli_ward_' + this.randNum,
        },
        {
          unitName: 'unit_' + this.randNum,
          block: 'shop_block_name' + this.randNum,
          locality: 'shop_locality' + this.randNum,
          policeStationCode: 1,
          pinCode: 655443,
          street: 'shop_street' + this.randNum,
          village: 'shop_village ' + this.randNum,
          ward: 'shop_ward_' + this.randNum,
        },
        // {
        //   unitName: 'unit_' + this.randNum,
        //   block: 'shop_block_name' + this.randNum,
        //   locality: 'shop_locality' + this.randNum,
        //   policeStationCode: 1,
        //   pinCode: 655443,
        //   street: 'shop_street' + this.randNum,
        //   village: 'shop_village ' + this.randNum,
        //   ward: 'shop_ward_' + this.randNum,
        // }
      ],
      // businessUnitDetails: {
      //   firmCompanyName: 'firm_company' + this.randNum,
      //   firmCompanyPanNumber: 'DTVPP22' + this.randNum + 'Z',
      //   gstNumber: '876554435465'
      // },
      // distilleryLicenses: {
      //   distilleryAdditionalDetails: {
      //     gstNumber: '876554435465'
      //   }
      // },
      bankList: [
        {
          ifscCode: 'CAN002233',
          accountNumber: '8776877687'
        }
      ]
    };
    this.distilleryForm.patchValue(patchObj);
  }
}
