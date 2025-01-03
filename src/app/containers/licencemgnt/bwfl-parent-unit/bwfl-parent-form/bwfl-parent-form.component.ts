import { Component, OnInit, ViewChild } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormBuilder, FormArray } from '@angular/forms';
import {
  AuthService,  AlertService, StatemasterService, DistrictMasterService,
  TalukMasterService, LicenceManagementService, DropdownConfigService,
  DocumentUploadService, ValidationService
} from '@app/services';
import {
  LicenseConstants
} from '@app/containers/licencemgnt/license.constants';
import { LicenseCommonService } from '@appLicMgntShared/license-common.service';

const {
  docuPropObj, FF_APPLI, FF_ADDRESS, FF_ATTACHMENTS, FF_BANK, FF_BUSS_UNIT, FF_PREMISES,
  SEC_ADDR_BWFL_PARENT_UNIT, SEC_ADDR_BWFL_PREMISES, APPLI_CODE_BWFL,
  PROP_APPLI_DET, PROP_ADDRESS_DET, PROP_BANK_DET, PROP_BUSSIN_UNIT,
  CODE_SALUTATION, CODE_GENDER, CODE_LOCALITYTYPE, CODE_BANK, CODE_ENTITY_FOR_AUTH_PERSON, CODE_ITR,
  CODE_YEAR_OF_REGISTRATION, CODE_BOTTLING_UNIT, CODE_STATE_POPULATION_SUPPLY,
  BWFL_PARENT_LICENSE_CATEGORY, BWFL_PARENT_LICENSE_CATEGORY_DESC,
  LOCALITY_URBAN, LOCALITY_RURAL, MSG_NO_APPLICATION_NUMBER,
  STATUS_DRAFT, STATUS_SAVE, STATUS_SUBMITTED, STATUS_SENDBACK, STATUS_APPROVED, STATUS_PENDING_SITE_INFO,
  STATUS_SENDBACK_SITE_INFO, MODULE_NAME_CODE, COMMENT_ACTION_CLARIFICATION, CUSTOMER, LICENSE_URL,
  FN_BUSSUNIT_UNIT_LICENSE, FN_BUSSUNIT_AFFADAVAIT, FN_BUSSUNIT_COMP_PAN, FN_BUSSUNIT_ITR_LASTYR, FN_BUSSUNIT_GSTIN,
  FN_BUSSUNIT_ANNUAL_TURNOVER_CERT, FN_BUSSUNIT_CERT_OF_OTHER_STATE_OFFICIAL, FN_BUSSUNIT_DECLARATION,
} = LicenseConstants;
const { VIEW_LICENSE_STATUS: viewStatusUrl, ACKNOWLEDGEMENT: acknowledgementUrl, PAYMENT: paymentUrl } = LICENSE_URL;


@Component({
  selector: 'app-bwfl-parent-form',
  templateUrl: './bwfl-parent-form.component.html',
  styleUrls: ['./bwfl-parent-form.component.scss']
})
export class BwflParentFormComponent implements OnInit {
  
  @ViewChild('exampleModalCenter', { static: false }) exampleModalCenter;

  licConst = this.licenseCommonSer.licenseConsts;
  docuPropObj = this.licConst.docuPropObj;
  workFlowNameList = this.licenseCommonSer.workFlowConsts.BWFL;
  subCategoryDesc = this.licenseCommonSer.subCatDescConsts.BWFL;

  bwflParentUnitForm: FormGroup;
  commentForm: FormGroup;
  sendbackForm: FormGroup;

  formSubmitted = false;
  commandformSub = false;
  sendformSub = false;
  isDraftLoading = false;
  isSubmitLoading = false;

  isCustomer: boolean;
  screenSubType: string;
  applicationNumber: string;
  isFormEdit = false;
  randNum: number;

  isActionBtnFor = '';
  isReadOnly = false;
  licenseStatus: string;
  licenseStage: string;
  licenseApplicationData: any;
  licenseComments = [];

  stateList: any;
  municipalityList: any;
  districtsList: any;
  countryList: any;
  districtListByState = {
    [SEC_ADDR_BWFL_PARENT_UNIT]: [],
    [SEC_ADDR_BWFL_PREMISES]: []
  };
  talukList = {
    [SEC_ADDR_BWFL_PARENT_UNIT]: [],
    [SEC_ADDR_BWFL_PREMISES]: []
  };

  unitAddrLocality = '';
  premisesAddrLocality = '';

  fileArr = {
    [FF_APPLI]: [],
    [FF_BUSS_UNIT]: [],
    [FF_BANK]: []
  };

  salutationList: any;
  genderList: any;
  localityTypeList: any;
  bankList: any;
  ITRList: any;
  ownershipList: any;
  entityFirmList: any;
  yearsList: any;
  bottlingUnitList: any;
  statesPopulationList: any;

  workFlowConfig: object;
  officerLevel: string;
  isRejected: boolean;
  isSendBack: boolean;
  sendBackList: any;

  salutationObj: any;
  genders: any;
  districtList: any;
  tehsilList: any;
  muncipalList: any;
  urbanFlag = false;
  ruralFlag = false;

  applicationDate = this.licenseCommonSer.applicationDate;
  maxDOBDate = this.licenseCommonSer.maxDOBDate;
  minDOBDate = this.licenseCommonSer.minDOBDate;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private fb: FormBuilder,
    private alert: AlertService,
    private authService: AuthService,
    private stateSer: StatemasterService,
    private districtSer: DistrictMasterService,
    private talukSer: TalukMasterService,
    private docUplSer: DocumentUploadService,
    private dropdownConfigSer: DropdownConfigService,
    private licenseSer: LicenceManagementService,
    private validateSer: ValidationService,
    private licenseCommonSer: LicenseCommonService,
  ) { }

  async ngOnInit() {
    this.isCustomer = this.authService.isCustomer();
    this.randNum = this.licenseCommonSer.randomNum(1, 99);

    this.route.params.subscribe(params => {
      console.log('params::', params);
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

  getForm() { return this.bwflParentUnitForm; }
  getFormCntr(element) { return this.getForm().get(element); }
  getFormCntrl(formCntrl, element) { return formCntrl.get(element); }
  getAppliFormCntrInst() { return this.getFormCntr(PROP_APPLI_DET); }
  getAppliFormCntr(element = '') { return (element) ? this.getAppliFormCntrInst().get(element) : this.getAppliFormCntrInst(); }
  getAddressFormCntr() { return this.getFormCntr(PROP_ADDRESS_DET); }
  getAddrCtByIdx(idx) { return this.getAddressFormCntr().get(idx); }
  getUnitAddrFormCntr(element = '') { return (element) ? this.getAddrCtByIdx('0').get(element) : this.getAddrCtByIdx('0'); }
  getPremisesAddrFormCntr(element = '') { return (element) ? this.getAddrCtByIdx('1').get(element) : this.getAddrCtByIdx('1'); }
  getBankFormCntrInst() { return this.getFormCntr(PROP_BANK_DET); }
  getBankFormCntr(element = '') {
    return (element) ? this.getBankFormCntrInst().get('0').get(element) : this.getBankFormCntrInst().get('0'); }
  getBussFormCntrInst() { return this.getFormCntr(PROP_BUSSIN_UNIT); }
  getBussinessFormCntr(element = '') { return (element) ? this.getBussFormCntrInst().get(element) : this.getBussFormCntrInst(); }

  loadFormControl() {
    this.createBWFLParentUnitForm();
    (this.isFormEdit) ? this.loadLicenseData() : this.loadInitialFormData();
    this.createcommentForm();
    this.getWorkFlowConfig();
  }
  
  buildBankDetFormGroup(data?: any) { return this.validateSer.buildBankDetFormGroup(data); }

  buildBusinessUnitDetFormGroup(data?: any) {
    const basicEle = {
      firmLicenseNumber: ['', this.validateSer.valiReqOnly],
      licenseValidityDate: ['', this.validateSer.valiReqOnly],
      firmCompanyPanNumber: ['', this.validateSer.valiReqOnly],
      itrAssessmentYearCode: ['', this.validateSer.valiReqOnly],
      itrAssessmentYearDesc: ['', this.validateSer.valiReqOnly],
      previusItrUploadReason: ['', this.validateSer.valiReqOnly],
      gstNumber: ['', this.validateSer.valiReqOnly],
      anuualTurnOver: ['', this.validateSer.valiReqOnly],
      annualProductionCapacity: ['', this.validateSer.valiReqOnly],
      stateSupplyCode: ['', this.validateSer.valiReqOnly],
      stateSupplyDesc: ['', this.validateSer.valiReqOnly],
      stateQuantitySupply: ['', this.validateSer.valiReqOnly],

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

      annualTurnOverCert_file: ['', this.validateSer.valiReqOnly],
      annualTurnOverCert_file_source: ['', this.validateSer.valiReqOnly],

      stateExciseOfficialCert_file: ['', this.validateSer.valiReqOnly],
      stateExciseOfficialCert_file_source: ['', this.validateSer.valiReqOnly],

      declarationCert_file: ['', this.validateSer.valiReqOnly],
      declarationCert_file_source: ['', this.validateSer.valiReqOnly],

    };
    return this.fb.group(basicEle);
  }

  buildAddressFormGroup(identifier, data?: any) {
    const basicEle = {
      addressIdentifier: [identifier],
      districtCode: ['', this.validateSer.valiReqOnly],
      districtDesc: [''],
      country: [{ value: 'INDIA', disabled: true }, this.validateSer.valiReqOnly],
      locality: ['', this.validateSer.valiReqOnly],
      localityType: ['', this.validateSer.valiReqOnly],
      municipalAreaCode: [''],
      municipalAreaDesc: [''],
      pinCode: ['', this.validateSer.valiForPinCode],
      policeStationName: [''],
      stateCode: ['', this.validateSer.valiReqOnly],
      stateDesc: [''],
      street: ['', this.validateSer.valiReqOnly],
      tahsilCode: ['', this.validateSer.valiReqOnly],
      tahsilDesc: [''],
      village: [''],
      block: [''],
      ward: [''],
      unitName: ['', this.validateSer.valiReqOnly]
    };
    return this.fb.group(basicEle);
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
        husbandFatherName: ['', this.validateSer.valiReqOnly],
        dob: ['', this.validateSer.valiReqOnly],
        aadharNumber: ['', this.validateSer.valiReqOnly],
        panNumber: ['', this.validateSer.valiForPan],
        itrAssesmentYearCode: [''],
        itrAssesmentYearDesc: [''],
        previousItrNotFiled: [''],
        entity: ['', this.validateSer.valiReqOnly],

        appli_photo_file: ['', this.validateSer.valiReqOnly],
        appli_photo_file_source: ['', this.validateSer.valiReqOnly],

        appli_aadhar_file: ['', this.validateSer.valiReqOnly],
        appli_aadhar_file_source: ['', this.validateSer.valiReqOnly],

        appli_pan_file: ['', this.validateSer.valiReqOnly],
        appli_pan_file_source: ['', this.validateSer.valiReqOnly],

        appli_itr_file: [''],
        appli_itr_file_source: [''],
    };
    return this.fb.group(basicEle);
  }

  createBWFLParentUnitForm() {
    const basicEle = {
      financialYear: ['', this.validateSer.valiReqOnly],
      applicationDate: [this.applicationDate], 

      distilleryBreweryBottlingUnitCode: ['', this.validateSer.valiReqOnly],
      distilleryBreweryBottlingUnitDesc: ['', this.validateSer.valiReqOnly],
      unitName: [''],

      bondWareHouseRegistration: ['BW01lck(BW01Lucknow)', this.validateSer.valiReqOnly],

      applicantDetails: this.buildAppliDetFormGroup(),
      businessUnitDetails: this.buildBusinessUnitDetFormGroup(),
      addressList: this.fb.array([
        this.buildAddressFormGroup(SEC_ADDR_BWFL_PARENT_UNIT),
        this.buildAddressFormGroup(SEC_ADDR_BWFL_PREMISES),
      ]),
      bankList: this.fb.array([
        this.buildBankDetFormGroup()
      ]),

    };
    this.bwflParentUnitForm = this.fb.group(basicEle);
  }

  createcommentForm(data?: any) { this.commentForm = this.validateSer.buildCommentFormGroup(data); }
  createsendbackForm(data?: any) { this.sendbackForm = this.validateSer.buildSendbackFormGroup(data); }

  loadInitialFormData() {
    this.commonDatas();
    this.processFormActionReadOnly();
  }

  findDropMas(code) { return this.dropdownConfigSer.findDropDownMaster(code); }

  commonDatas() {

    this.getAllStates();
    this.getAllDistricts();

    this.findDropMas(CODE_SALUTATION).subscribe( (res) => this.salutationList = res.data ? res.data.downDropDownMasterValueList : []);
    this.findDropMas(CODE_GENDER).subscribe( (res) => this.genderList = res.data ? res.data.downDropDownMasterValueList : []);
    this.findDropMas(CODE_BANK).subscribe( (res) => this.bankList = res.data ? res.data.downDropDownMasterValueList : []);
    this.findDropMas(CODE_LOCALITYTYPE).subscribe( (res) => this.localityTypeList = res.data ? res.data.downDropDownMasterValueList : []);
    this.findDropMas(CODE_ENTITY_FOR_AUTH_PERSON).subscribe(
      (res) => this.entityFirmList = res.data ? res.data.downDropDownMasterValueList : []);
    this.findDropMas(CODE_ITR).subscribe( (res) => this.ITRList = res.data ? res.data.downDropDownMasterValueList : []);
    this.findDropMas(CODE_YEAR_OF_REGISTRATION).subscribe( (res) => this.yearsList = res.data ? res.data.downDropDownMasterValueList : []);
    this.findDropMas(CODE_BOTTLING_UNIT).subscribe( (res) => this.bottlingUnitList = res.data ? res.data.downDropDownMasterValueList : []);
    this.findDropMas(CODE_STATE_POPULATION_SUPPLY).subscribe( (res) =>
      this.statesPopulationList = res.data ? res.data.downDropDownMasterValueList : []);
  }

  getAllStates() { this.stateSer.getState().subscribe((responceData: any) => { this.stateList = responceData.data; }); }
  getAllDistricts() { this.districtSer.getAllDistrict().subscribe((responceData: any) => this.districtList = responceData.data ); }

  getAddrFormCntl(key) {
    let formContrl;
    switch (key) {
      case SEC_ADDR_BWFL_PARENT_UNIT:
        formContrl = this.getUnitAddrFormCntr();
        break;
      case SEC_ADDR_BWFL_PREMISES:
        formContrl = this.getPremisesAddrFormCntr();
        break;
    }
    return formContrl;
  }

  patchMasVal(list, code, formCntl, key) {
    const obj = list.find((resp: any) => resp.paramKey === code);
    formCntl.patchValue({ [key]: obj.paramValue });
  }

  onBottlingUnitChange(code) { this.patchMasVal(this.bottlingUnitList, code, this.getForm(), 'distilleryBreweryBottlingUnitDesc'); }
  onStateSupplyChange(code) { this.patchMasVal(this.statesPopulationList, code, this.getBussinessFormCntr(), 'stateSupplyDesc'); }
  onSalutationChange(code) { this.patchMasVal(this.salutationList, code, this.getAppliFormCntr(), 'salutationDesc'); }
  onGenderChange(code) { this.patchMasVal(this.genderList, code, this.getAppliFormCntr(), 'genderDesc'); }
  onAppliITRChange(code) { this.patchMasVal(this.ITRList, code, this.getAppliFormCntr(), 'itrAssesmentYearDesc'); }
  onITRChange(code) { this.patchMasVal(this.ITRList, code, this.getBussinessFormCntr(), 'itrAssessmentYearDesc'); }
  onFirmTypeChange(code) { this.patchMasVal(this.entityFirmList, code, this.getBussinessFormCntr(), 'firmTypedDesc'); }
  onBankChange(code) { this.patchMasVal(this.bankList, code, this.getBankFormCntr(), 'bankName'); }

  onStateChange(stateId, key) { 
    this.getAddrFormCntl(key).patchValue({ districtCode: '', tahsilCode: '' });
    this.getDistrictsByStateid(stateId, key);
  }
  getDistrictsByStateid(stateId, key) {
    this.districtSer.getDistrictsByStateid(stateId).subscribe((resp: any) => this.districtListByState[key] = resp.data); }
  onDistrictChange(districtId, key) { 
    this.getAddrFormCntl(key).patchValue({ tahsilCode: '' });
    this.loadTalukByDist(districtId, key);
  }
  loadTalukByDist(districtId, key) { this.talukSer.gettalukByDistId(districtId).subscribe((resp: any) => this.talukList[key] = resp.data); }
  onTalukChange(talukId, key) { console.log('talukId', talukId); }

  onLocalityChange($event, type) {
    const { value: localityType } = $event.target;
    let formContrl;
    switch (type) {
      case SEC_ADDR_BWFL_PARENT_UNIT:
        formContrl = this.getUnitAddrFormCntr();
        this.unitAddrLocality = (localityType === LOCALITY_URBAN) ? LOCALITY_URBAN :
          ((localityType === LOCALITY_RURAL) ? LOCALITY_RURAL : '');
        break;
      case SEC_ADDR_BWFL_PREMISES:
        formContrl = this.getPremisesAddrFormCntr();
        this.premisesAddrLocality = (localityType === LOCALITY_URBAN) ? LOCALITY_URBAN :
          ((localityType === LOCALITY_RURAL) ? LOCALITY_RURAL : '');
        break;
    }
    this.validateSer.localityChangeValidatation(formContrl, localityType);
    return true;
  }

  onAppliFileChange(event, sourceName, fileFor) {
    console.log('photo event ::size', event.target.files[0].size);
    const filesize = event.target.files[0].size;
    const  maxfilesize = 1024 * 1024;  // 1 Mb
    if (filesize < maxfilesize) {
      const formControl = this.getAppliFormCntr();
      const fileUpRes = this.onFileChange(event, sourceName, fileFor, formControl);
      return (fileUpRes) ? this.fileArr[FF_APPLI].push(sourceName) : false;
    } else {
      this.alert.showError('Upload Less Then 1Mb Size Photo');
      if (fileFor === this.licConst.FN_APPLI_PHOTO) { this.bwflParentUnitForm.patchValue({ applicantDetails: {  appli_photo_file: ''} }); }
      if (fileFor === this.licConst.FN_APPLI_AADHAR) {
        this.bwflParentUnitForm.patchValue({ applicantDetails: {  appli_aadhar_file: ''} }); }
      if (fileFor === this.licConst.FN_APPLI_PAN) { this.bwflParentUnitForm.patchValue({ applicantDetails: {  appli_pan_file: ''} }); }
      if (fileFor === this.licConst.FN_APPLI_ITR) { this.bwflParentUnitForm.patchValue({ applicantDetails: {  appli_itr_file: ''} }); }
    }
  }

  onBussinessFileChange(event, sourceName, fileFor) {
    console.log('photo event ::size', event.target.files[0].size);
    const filesize = event.target.files[0].size;
    const  maxfilesize = 1024 * 1024;  // 1 Mb
    if (filesize < maxfilesize) {
      const formControl = this.getBussinessFormCntr();
      const fileUpRes = this.onFileChange(event, sourceName, fileFor, formControl);
      return (fileUpRes) ? this.fileArr[FF_BUSS_UNIT].push(sourceName) : false;
    } else {
      this.alert.showError('Upload Less Then 1Mb Size Photo');
      if (fileFor === FN_BUSSUNIT_UNIT_LICENSE ) { this.bwflParentUnitForm.patchValue({ businessUnitDetails: {  unitLicense_file: ''} }); }
      if (fileFor === FN_BUSSUNIT_AFFADAVAIT ) { this.bwflParentUnitForm.patchValue({ businessUnitDetails: {  unitAffadavait_file: ''} }); }
      if (fileFor === FN_BUSSUNIT_COMP_PAN ) { this.bwflParentUnitForm.patchValue({ businessUnitDetails: {  compFirmPan_file: ''} }); }
      if (fileFor === FN_BUSSUNIT_ITR_LASTYR ) { this.bwflParentUnitForm.patchValue({ businessUnitDetails: {  lastYrITR_file: ''} }); }
      if (fileFor === FN_BUSSUNIT_GSTIN ) { this.bwflParentUnitForm.patchValue({ businessUnitDetails: {  uploadGstin_file: ''} }); }
      if (fileFor === FN_BUSSUNIT_ANNUAL_TURNOVER_CERT ) {
        this.bwflParentUnitForm.patchValue({ businessUnitDetails: {  annualTurnOverCert_file: ''} }); }
      if (fileFor === FN_BUSSUNIT_CERT_OF_OTHER_STATE_OFFICIAL ) {
        this.bwflParentUnitForm.patchValue({ businessUnitDetails: {  stateExciseOfficialCert_file: ''} }); }
      if (fileFor === FN_BUSSUNIT_DECLARATION ) {
        this.bwflParentUnitForm.patchValue({ businessUnitDetails: {  declarationCert_file: ''} }); }
    }

  }

  onBankFileChange(event, sourceName, fileFor) {
    console.log('photo event ::size', event.target.files[0].size);
    const filesize = event.target.files[0].size;
    const  maxfilesize = 1024 * 1024;  // 1 Mb
    if (filesize < maxfilesize) {
      const formControl = this.getBankFormCntr();
      const fileUpRes = this.onFileChange(event, sourceName, fileFor, formControl);
      return (fileUpRes) ? this.fileArr[FF_BANK].push(sourceName) : false;
    } else {
      this.alert.showError('Upload Less Then 1Mb Size Photo');
      const banklistFormCtrl = this.bwflParentUnitForm.get('bankList') as FormArray;
      if (fileFor === this.licConst.FN_BK_CAN_CHEQUE) {
        banklistFormCtrl.controls.forEach((element: any) => {element.get('cancel_cheque_file').patchValue(''); }); }
    }
  }

  onFileChange(event, sourceName, fileFor, formControl) {
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
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
      const { content: applicationNumber } = await this.licenseSer.getApplicationNo(APPLI_CODE_BWFL);
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

    formData.append('moduleName', 'licence-mangement');
    formData.append('screenName', 'retail');
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

  async onSubmit(saveType) {
    this.toggleLoading(saveType);
    this.addBWFLParentLicense(saveType);
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

  async addBWFLParentLicense(saveType) {
    this.formSubmitted = false;
    const form = this.bwflParentUnitForm;
    console.log('this.bwflParentUnitForm.valid::', form.valid);
    console.log('this.bwflParentUnitForm.value::', form.value);
    console.log('this.bwflParentUnitForm::', form);

    const {
      addressList: befformValaddressList
    } = form.value;

    befformValaddressList.forEach(element => this.mapAddress(element, this.getAddrFormCntl(element.addressIdentifier)) );

    if (saveType !== STATUS_DRAFT && form.valid === false) {
      this.formSubmitted = true;
      this.toggleLoading(saveType);
      return false;
    }
    saveType = (saveType === STATUS_SAVE) ? STATUS_SUBMITTED : saveType;

    const formValue = form.value;

    const {
      financialYear, distilleryBreweryBottlingUnitCode, distilleryBreweryBottlingUnitDesc, unitName,
      applicantDetails: formValapplicantDet,
      addressList: formValaddressList,
      businessUnitDetails: formValbusinessUnitDet,
      bankList: formValbankList
    } = formValue;

    console.log('formValue::', formValue);
    console.log('this.fileArr::', this.fileArr);

    const appliDetProp = [
      'appli_photo_file', 'appli_photo_file_source', 'appli_aadhar_file', 'appli_aadhar_file_source',
      'appli_pan_file', 'appli_pan_file_source', 'appli_itr_file', 'appli_itr_file_source'
    ];

    const businessUnitDetProp = [
      'unitLicense_file', 'unitLicense_file_source', 'unitAffadavait_file', 'unitAffadavait_file_source',
      'compFirmPan_file', 'compFirmPan_file_source', 'lastYrITR_file', 'lastYrITR_file_source',
      'uploadGstin_file', 'uploadGstin_file_source', 'annualTurnOverCert_file', 'annualTurnOverCert_file_source',
      'stateExciseOfficialCert_file', 'stateExciseOfficialCert_file_source', 'declarationCert_file', 'declarationCert_file_source'
    ];

    const bankDetProp = [
      'cancel_cheque_file', 'cancel_cheque_file_source'
    ];

    appliDetProp.forEach((ele) => delete formValapplicantDet[ele]);
    businessUnitDetProp.forEach((ele) => delete formValbusinessUnitDet[ele]);
    bankDetProp.forEach((ele) => delete formValbankList[0][ele]);

    let uploadAppliFiles;
    let uploadBankFiles;
    let uploadBussinessUnitFiles;

    const applicationNo = await this.getApplicationNo();
    uploadAppliFiles = await this.uploadAppliFiles(applicationNo);
    console.log('uploadAppliFiles::', uploadAppliFiles);
    uploadBankFiles = await this.uploadBankFiles(applicationNo);
    console.log('uploadBankFiles::', uploadBankFiles);
    uploadBussinessUnitFiles = await this.uploadBussinessFiles(applicationNo);
    console.log('uploadBussinessUnitFiles::', uploadBussinessUnitFiles);

    if (this.isFormEdit) {
      const { licenseObj, applicantDetails, bankList, businessUnitDetails } = this.getLicenseData();

      const { applicantDocumentList: apiDataapplicantDocumentList } = applicantDetails;
      uploadAppliFiles = this.combineArr(apiDataapplicantDocumentList, uploadAppliFiles);

      const { businessUnitDocumentList: apiDatabusinessUnitDocumentList } = businessUnitDetails;
      uploadBussinessUnitFiles = this.combineArr(apiDatabusinessUnitDocumentList, uploadBussinessUnitFiles);

      const { bankDocumentList: apiDatabankDocumentList } = bankList[0];
      uploadBankFiles = this.combineArr(apiDatabankDocumentList, uploadBankFiles);
    }

    formValapplicantDet.applicantDocumentList = uploadAppliFiles;
    formValbusinessUnitDet.businessUnitDocumentList = uploadBussinessUnitFiles;
    formValbankList[0].bankDocumentList = uploadBankFiles;

    console.log('formValapplicantDet.dob::', formValapplicantDet.dob);
    formValapplicantDet.dob = this.invertDate(formValapplicantDet.dob);
    formValbusinessUnitDet.licenseValidityDate = this.invertDate(formValbusinessUnitDet.licenseValidityDate);

    console.log('formValue::', formValue);

    const payload: any = {
      workFlowName: this.workFlowNameList[this.screenSubType],
      financialYear, distilleryBreweryBottlingUnitCode, distilleryBreweryBottlingUnitDesc, unitName,
      applicationNumber: applicationNo,
      status: saveType,
      licenseCategory: BWFL_PARENT_LICENSE_CATEGORY,
      licenseCategoryDesc: BWFL_PARENT_LICENSE_CATEGORY_DESC,
      licenseSubCategory: this.screenSubType,
      licenseSubCategoryDesc: this.subCategoryDesc[this.screenSubType],
      applicantDetails: formValapplicantDet,
      addressList: formValaddressList,
      businessUnitDetails: formValbusinessUnitDet,
      bankList: formValbankList,
    };

    console.log('payload::', payload);
    // return;

    const licenseResp: any = await this.createLicense(payload, form, saveType);
    if (licenseResp.status) {
      this.toggleLoading(saveType);
      this.processNavigation(saveType, form, licenseResp.data);
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

  async getFinalPayload(payload, saveType) {

    const commentForm = this.commentForm;
    const sendbackForm = this.sendbackForm;

    const { comments } = commentForm.value;

    switch (saveType) {
      case STATUS_DRAFT:
      case STATUS_SAVE:
        payload.event = '';
        payload.level = '';
        break;
      case STATUS_SENDBACK:
      case STATUS_SUBMITTED:
        payload.event = 'INITIATE';
        payload.level = 'Level 1';
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
    const { applicationNumber, isProcessingFeePaid } = respContent;
    if (this.isCustomer) {
      if (saveType === STATUS_DRAFT) {
        this.licenseApplicationData = respContent;
        // this.licenseApplicationData['siteDetails'].push(siteRespContent);
        this.isFormEdit = true;
      }

      if ([STATUS_SAVE, STATUS_SENDBACK, STATUS_SUBMITTED].includes(saveType)) {
        form.reset();
        const { isProcessingFeeRequired }: any = this.workFlowConfig;
        console.log('isProcessingFeeRequired::', isProcessingFeeRequired);
        console.log('isProcessingFeePaid::', isProcessingFeePaid);
        const routeUrl = ((isProcessingFeePaid) ? acknowledgementUrl : ((isProcessingFeeRequired) ? paymentUrl : acknowledgementUrl));
        console.log('routeUrl::', routeUrl);
        this.router.navigate([routeUrl + applicationNumber]);
      }

    } else {
      this.router.navigate([viewStatusUrl]);
    }
    return;
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
      const { responseCode: respCode, content: respContent } = resp;
      if (respCode === 200) {
        this.licenseApplicationData = respContent;

        this.commonDatas();
        this.patchForm();

        const { status, commentList } = this.getLicenseData();
        this.isSendBack = (status === STATUS_SENDBACK);
        this.licenseComments = commentList.filter((res) => this.licenseCommonSer.customerCommentFilter(res) );
        this.licenseStatus = this.licenseApplicationData.status;
        this.licenseStage = this.licenseApplicationData.stage;
        this.processFormActionReadOnly();

        this.alert.showSuccess(resp.responseMessage);

      } else {
        this.alert.showError(resp.responseMessage);
      }
    });
  }

  patchForm() {

    const {
      financialYear, distilleryBreweryBottlingUnitCode, distilleryBreweryBottlingUnitDesc,
      unitName, applicationDate, licenseObj, addressList, applicantDetails, bankList, businessUnitDetails,
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
      'unitLicense_file', 'unitAffadavait_file', 'compFirmPan_file', 'lastYrITR_file',
      'uploadGstin_file', 'annualTurnOverCert_file', 'stateExciseOfficialCert_file', 'declarationCert_file'
    ];

    const bankDetProp = [
      'cancel_cheque_file'
    ];

    const form = this.getForm();
    const appliFormCntr = this.getAppliFormCntr();
    const bussinessFormCntr = this.getBussinessFormCntr();
    const bankDetControl = this.getBankFormCntr();

    this.unsetValidator(appliFormCntr, appliDetProp);
    this.unsetValidator(bussinessFormCntr, businessUnitDetProp);
    this.unsetValidator(bankDetControl, bankDetProp);

    applicantDetails.dob = this.invertDate(applicantDetails.dob);
    businessUnitDetails.licenseValidityDate = this.invertDate(businessUnitDetails.licenseValidityDate);

    form.patchValue({
      financialYear, distilleryBreweryBottlingUnitCode, distilleryBreweryBottlingUnitDesc, unitName,
      applicationDate: this.invertDate(applicationDate),
      applicantDetails,
      addressList,
      businessUnitDetails,
      bankList
    });

    return true;

  }

  isEditFormIsReadOnly(isCustomer, status, stage) {
    let readOnly;
    let showActionFor;
    if (isCustomer) {
      console.log('CUSTOMER_ACTION_BUTTONS_WITH_READONLY_YES_OR_NO');
      if (status !== STATUS_APPROVED) { //APPRROVED
        if (stage == null || stage == 'null' || stage === 'customer') {
          console.log('NEED_CUSTOMER_ACTION_BUTTONS_BECAUSE_ITS_IN_CUSTOMER_HAND');
          readOnly = false;
          showActionFor = CUSTOMER;
          // display save, submit cancel
        } else {
          console.log('NO_NEED_CUSTOMER_ACTION_BUTTONS_BECAUSE_ITS_NOT_IN_CUSTOMER_HAND');
          readOnly = true;
          showActionFor = '';
        }
      } else {
        console.log('NO_NEED_CUSTOMER_ACTION_BUTTONS_AFTER_APPROVED');
        readOnly = true;
        showActionFor = '';
      }
    } else {
      // if the user type is officer means NEED_OFFICER_ACTION_BUTTONS_WITH_READONLY approve,reject send back ,cancel
      console.log('NEED_OFFICER_ACTION_BUTTONS_WITH_READONLY');
    }
    return { readOnly, showActionFor };
  }

  processFormActionReadOnly() {
    if (this.isFormEdit) {
      const { readOnly, showActionFor } = this.licenseCommonSer.isEditFormIsReadOnly(
        this.isCustomer, this.licenseStatus, this.licenseStage, BWFL_PARENT_LICENSE_CATEGORY
      );

      this.createsendbackForm();

      this.isActionBtnFor = showActionFor;
      this.isReadOnly = readOnly;
      if (this.isReadOnly) {
        this.bwflParentUnitForm.disable();
      }
    } else {
      this.isActionBtnFor = CUSTOMER;
      this.isReadOnly = false;
    }
  }

  getLicenseData(): any {
    const {
      financialYear, distilleryBreweryBottlingUnitCode, distilleryBreweryBottlingUnitDesc, unitName,
      applicationDate, licenseType, addressList, applicantDetails, bankList,
      businessUnitDetails, commentList, status
    } = this.licenseApplicationData;
    const licenseObj = [];
    this.licenseCommonSer.mergeWith(licenseObj, { addressList, applicantDetails, bankList, businessUnitDetails });

    return {
      financialYear, distilleryBreweryBottlingUnitCode, distilleryBreweryBottlingUnitDesc, unitName,
      applicationDate, licenseType, licenseObj,
      addressList, applicantDetails, businessUnitDetails, bankList, commentList, status
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
        fatherHusbandName : 'test_father_' + this.randNum,
      },
      addressList: [
        {
          block: 'appli_block_name' + this.randNum,
          locality: 'appli_locality' + this.randNum,
          pinCode: 655443,
          street: 'appli_street' + this.randNum,
          village: 'appli_village ' + this.randNum,
          ward: 'appli_ward_' + this.randNum,
        },
        {
          block: 'shop_block_name' + this.randNum,
          locality: 'shop_locality' + this.randNum,
          pinCode: 655443,
          street: 'shop_street' + this.randNum,
          village: 'shop_village ' + this.randNum,
          ward: 'shop_ward_' + this.randNum,
        }
      ],
      businessUnitDetails: {
        firmLicenseNumber: '54435443' + this.randNum,
        firmCompanyName: 'firm_company' + this.randNum,
        firmCompanyPanNumber: '988776655443',
        gstNumber: '876554435465',
        previusItrUploadReason: 'nothing filed previously',
        anuualTurnOver: 123 + this.randNum,
        annualProductionCapacity: 23 + this.randNum,
        stateQuantitySupply: 12 + this.randNum
      },
      bankList: [
        {
          ifscCode: 'CAN002233',
          accountNumber: '8776877687'
        }
      ]
    };

    this.bwflParentUnitForm.patchValue(patchObj);
  }

}
