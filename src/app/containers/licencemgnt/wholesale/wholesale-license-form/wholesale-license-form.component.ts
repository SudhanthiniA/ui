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
  docuPropObj, FF_APPLI, FF_ADDRESS, FF_ATTACHMENTS, FF_BANK, FF_BUSS_UNIT,
  SEC_ADDR_APPLICANT, SEC_ADDR_PREMISES, APPLI_CODE_WHOLESALE,
  PROP_APPLI_DET, PROP_ADDRESS_DET, PROP_BANK_DET, PROP_LICENSE_WL, PROP_ATTACHMENT_WL, PROP_BUSSIN_UNIT, PROP_SCHEDULE_WL,
  CODE_SALUTATION, CODE_GENDER, CODE_LOCALITYTYPE, CODE_BANK, CODE_ENTITYOFFIRM, CODE_ITR, CODE_OWNERSHIP_TYPE,
  WHOLESALE_LICENSE_CATEGORY, WHOLESALE_LICENSE_CATEGORY_DESC, WHOLESALE_FL2_SUBCATEGORY,
  WHOLESALE_FL2B_SUBCATEGORY, WHOLESALE_CL2_SUBCATEGORY, WHOLESALE_FL2A_SUBCATEGORY, WHOLESALE_ID3_SUBCATEGORY,
  STATUS_DRAFT, STATUS_SAVE, STATUS_SUBMITTED, STATUS_SENDBACK, STATUS_APPROVED, STATUS_PENDING_SITE_INFO,
  STATUS_SENDBACK_SITE_INFO, COMMENT_SENDBACK, COMMENT_ACTION_REJECTED, COMMENT_SENDBACK_SITE_INFO,
  MODULE_NAME_CODE, COMMENT_ACTION_CLARIFICATION, CUSTOMER, LICENSE_URL,
  LOCALITY_URBAN, LOCALITY_RURAL, MSG_NO_APPLICATION_NUMBER,
  SCREEN_NAME_MODULE, SCREEN_NAME_WHOLESALE, MSG_NO_RESP, EVENT_INITIATE, STR_LEVEL_ONE
} = LicenseConstants;
const { VIEW_LICENSE_STATUS: viewStatusUrl, ACKNOWLEDGEMENT: acknowledgementUrl, PAYMENT: paymentUrl } = LICENSE_URL;

@Component({
  selector: 'app-wholesale-license-form',
  templateUrl: './wholesale-license-form.component.html',
  styleUrls: ['./wholesale-license-form.component.scss']
})
export class WholesaleLicenseFormComponent implements OnInit {

  licConst = LicenseConstants;
  docuPropObj = docuPropObj;
  workFlowNameList = WorkFlowNameListConstants.WHOLESALE;
  subCategoryDesc = SubCategoryDescConstants.WHOLESALE;

  fileArr = {
    [FF_APPLI]: [],
    [FF_ADDRESS]: [],
    [FF_ATTACHMENTS]: [],
    [FF_BANK]: [],
    [FF_BUSS_UNIT]: []
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
    [SEC_ADDR_PREMISES]: []
  };
  talukList = {
    [SEC_ADDR_APPLICANT]: [],
    [SEC_ADDR_PREMISES]: []
  };
  municipalityList: any;

  appliAddrLocality = '';
  premisesAddrLocality = '';

  wholesaleForm: FormGroup;
  commentForm: FormGroup;
  sendbackForm: FormGroup;
  licenseType: any;

  formSubmitted = false;
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

  godownList = [
    { name: 'Godown 1', code: 'GODOWN1' },
    { name: 'Godown 2', code: 'GODOWN2' }
  ];

  applicationDate = this.licenseCommonSer.applicationDate;
  maxDOBDate = this.licenseCommonSer.maxDOBDate;
  minDOBDate = this.licenseCommonSer.minDOBDate;
  countDummy = 0;

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

  getForm() { return this.wholesaleForm; }
  getFormCntr(element) { return this.getForm().get(element); }
  getFormCntrl(formCntrl, element) { return formCntrl.get(element); }

  getAppliFormCntrInst() { return this.getFormCntr(PROP_APPLI_DET); }
  getAppliFormCntr(element = '') { return (element) ? this.getAppliFormCntrInst().get(element) : this.getAppliFormCntrInst(); }
  getBankFrmCntrInst() { return this.getFormCntr(PROP_BANK_DET); }
  getBankFormCntr(element = '') { return (element) ? this.getBankFrmCntrInst().get('0').get(element) : this.getBankFrmCntrInst().get('0'); }
  getBussFormCntrInst() { return this.getFormCntr(PROP_BUSSIN_UNIT); }
  getBussinessFormCntr(element = '') { return (element) ? this.getBussFormCntrInst().get(element) : this.getBussFormCntrInst(); }

  getAddressFormCntr() { return this.getFormCntr(PROP_ADDRESS_DET); }
  getAddrCtByIdx(idx) { return this.getAddressFormCntr().get(idx); }
  getAppliAddrFormCntr(element = '') { return (element) ? this.getAddrCtByIdx('0').get(element) : this.getAddrCtByIdx('0'); }
  getPremisesAddrFormCntr(element = '') { return (element) ? this.getAddrCtByIdx('1').get(element) : this.getAddrCtByIdx('1'); }
  getAttachFormCntrInst() { return this.getFormCntr(PROP_LICENSE_WL).get(PROP_ATTACHMENT_WL); }
  getAttachFormCntr(element = '') { return (element) ? this.getAttachFormCntrInst().get(element) : this.getAttachFormCntrInst(); }

  // getScheduleFormCntr() { return this.getFormCntr(PROP_LICENSE_WL).get(PROP_SCHEDULE_WL); }
  // getSchByIdxFrmCntIns(idx) { return this.getScheduleFormCntr().get(idx); }
  // getScheduleByIdxFormCntr(idx, ele = null) { return (ele) ? this.getSchByIdxFrmCntIns(idx).get(ele) : this.getSchByIdxFrmCntIns(idx); }


  getSchedFrmCntrInst() { return this.getFormCntr(PROP_LICENSE_WL).get(PROP_SCHEDULE_WL); }
  getSchedFrmCntr(element = '') { return (element) ? this.getSchedFrmCntrInst().get(element) : this.getSchedFrmCntrInst(); }
  getSchedFrmCntIdxIns(idx) { return (this.getSchedFrmCntr() as FormArray).at(idx); }
  getSchedFrmCntrIdx(idx, element = '') { return (element) ? this.getSchedFrmCntIdxIns(idx).get(element) : this.getSchedFrmCntIdxIns(idx); }

  // addScheduleRow() { (this.getScheduleFormCntr() as FormArray).push(this.buildScheduleListFormGroup()); }
  addScheduleRow() {
    if (!this.getSchedFrmCntr().valid) {
      this.alert.showError('Plesae fill all mandatory fields product details');
      return;
    }
    (this.getSchedFrmCntr() as FormArray).push(this.buildScheduleListFormGroup());
  }
  remScheduleRow(idx: number) { (this.getSchedFrmCntr() as FormArray).removeAt(idx); }
  getScheduleLen(): number { return (this.getSchedFrmCntr() as FormArray).length; }

  loadFormControl() {
    this.createWholesaleForm();
    (this.isFormEdit) ? this.loadLicenseData() : this.loadInitialFormData();
    this.createcommentForm();
    this.getWorkFlowConfig();
  }

  loadInitialFormData() {
    this.getFinancialYr();
    this.commonDatas();
    this.processFormActionReadOnly();
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
      dob: ['', this.validateSer.valiReqOnly],

      appli_photo_file: ['', this.validateSer.valiReqOnly],
      appli_photo_file_source: ['', this.validateSer.valiReqOnly],
    };
    switch (this.screenSubType) {
      case WHOLESALE_FL2_SUBCATEGORY:
      case WHOLESALE_FL2B_SUBCATEGORY:
      case WHOLESALE_CL2_SUBCATEGORY:
      case WHOLESALE_ID3_SUBCATEGORY:
        this.licenseCommonSer.mergeWith(basicEle, {
          aadharNumber: ['', this.validateSer.valiForAadhar],
          panNumber: ['', this.validateSer.valiForPan],
          itrAssesmentYearCode: ['', this.validateSer.valiReqOnly],
          previousItrNotFiled: ['', this.validateSer.valiReqOnly],

          appli_aadhar_file: ['', this.validateSer.valiReqOnly],
          appli_aadhar_file_source: ['', this.validateSer.valiReqOnly],

          appli_pan_file: ['', this.validateSer.valiReqOnly],
          appli_pan_file_source: ['', this.validateSer.valiReqOnly],

          appli_itr_file: ['', this.validateSer.valiReqOnly],
          appli_itr_file_source: ['', this.validateSer.valiReqOnly],
        });
        break;
    }

    return this.formBuilder.group(basicEle);
  }

  buildScheduleListFormGroup(data?: any) {
    const basciEle = {
      districtCode: ['', this.validateSer.valiReqOnly],
      districtDesc: ['', this.validateSer.valiReqOnly],
      godownCode: ['', this.validateSer.valiReqOnly],
      godownDesc: ['', this.validateSer.valiReqOnly],
      price: ['', this.validateSer.valiReqOnly],
    };
    return this.formBuilder.group(basciEle);
  }

  buildBusinessUnitDetFormGroup(data?: any) {
    const basicEle = {
      firmTypeCode: ['', this.validateSer.valiReqOnly],
      firmTypedDesc: ['', this.validateSer.valiReqOnly],
      firmCompanyName: ['', this.validateSer.valiReqOnly],
      ownershipTypeCode: [''],
      ownershipTypeDesc: [''],

      resoluOfAuth_file: ['', this.validateSer.valiReqOnly],
      resoluOfAuth_file_source: ['', this.validateSer.valiReqOnly],

      ownershipDoc_file: [''],
      ownershipDoc_file_source: [''],
    };

    switch (this.screenSubType) {
      case WHOLESALE_FL2_SUBCATEGORY:
      case WHOLESALE_FL2B_SUBCATEGORY:
      case WHOLESALE_CL2_SUBCATEGORY:
        this.licenseCommonSer.mergeWith(basicEle, {
          firmCompanyPanNumber: ['', this.validateSer.valiForPan],
          gstNumber: ['', this.validateSer.valiReqOnly],

          compFirmPan_file: ['', this.validateSer.valiReqOnly],
          compFirmPan_file_source: ['', this.validateSer.valiReqOnly],

          lastYrITR_file: ['', this.validateSer.valiReqOnly],
          lastYrITR_file_source: ['', this.validateSer.valiReqOnly],

          certIncorp_file: ['', this.validateSer.valiReqOnly],
          certIncorp_file_source: ['', this.validateSer.valiReqOnly],

          memoOfArti_file: ['', this.validateSer.valiReqOnly],
          memoOfArti_file_source: ['', this.validateSer.valiReqOnly],

          artiOfAssoc_file: ['', this.validateSer.valiReqOnly],
          artiOfAssoc_file_source: ['', this.validateSer.valiReqOnly],
        });
        break;
    }
    return this.formBuilder.group(basicEle);
  }

  buildAdditionalDetFormGroup(data?: any) { return this.validateSer.buildAdditionalDetFormGroup(data); }
  buildAddressFormGroup(identifier, data?: any) { return this.validateSer.buildAddressFormGroup(identifier, data); }
  buildBankDetFormGroup(data?: any) { return this.validateSer.buildBankDetFormGroup(data); }

  createcommentForm(data?: any) { this.commentForm = this.validateSer.buildCommentFormGroup(data); }
  createsendbackForm(data?: any) { this.sendbackForm = this.validateSer.buildSendbackFormGroup(data); }

  createWholesaleForm() {
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
      case WHOLESALE_FL2_SUBCATEGORY:
      case WHOLESALE_FL2B_SUBCATEGORY:
      case WHOLESALE_CL2_SUBCATEGORY:
        this.licenseCommonSer.mergeWith(basicEle, {
          businessUnitDetails: this.buildBusinessUnitDetFormGroup(),
          addressList: this.formBuilder.array([
            this.buildAddressFormGroup(SEC_ADDR_APPLICANT),
            this.buildAddressFormGroup(SEC_ADDR_PREMISES),
          ]),
          wholeSaleLicenses: this.formBuilder.group({
            wholeSaleAdditionalDetails: this.buildAdditionalDetFormGroup(),
          }),
        });
        break;
      case WHOLESALE_FL2A_SUBCATEGORY:
        this.licenseCommonSer.mergeWith(basicEle, {
          businessUnitDetails: this.buildBusinessUnitDetFormGroup(),
          addressList: this.formBuilder.array([
            this.buildAddressFormGroup(SEC_ADDR_APPLICANT),
            this.buildAddressFormGroup(SEC_ADDR_PREMISES),
          ])
        });
        break;
      case WHOLESALE_ID3_SUBCATEGORY:
        this.licenseCommonSer.mergeWith(basicEle, {
          addressList: this.formBuilder.array([
            this.buildAddressFormGroup(SEC_ADDR_APPLICANT)
          ]),
          wholeSaleLicenses: this.formBuilder.group({
            scheduleList: this.formBuilder.array([
              this.buildScheduleListFormGroup(),
            ])
          }),
        });
        break;
    }
    this.wholesaleForm = this.formBuilder.group(basicEle);
  }

  findDropMas(code) { return this.dropdownConfigSer.findDropDownMaster(code); }

  commonDatas() {
    this.getAllStates();
    this.getAllDistricts();
    this.getAllMunicipal();

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
  onITRChange(code) { this.patchMasVal(this.ITRList, code, this.getAppliFormCntr(), 'itrAssesmentYearDesc'); }
  onFirmTypeChange(code) { this.patchMasVal(this.entityFirmList, code, this.getBussinessFormCntr(), 'firmTypedDesc'); }
  onOwnershipTypeChange(code) { this.patchMasVal(this.ownershipList, code, this.getBussinessFormCntr(), 'ownershipTypeDesc'); }
  onBankChange(code) { this.patchMasVal(this.bankList, code, this.getBankFormCntr(), 'bankName'); }

  onScheduleDistrictChange(districtCode, idx) {
    const districtObj = this.districtList.find((resp: any) => resp.code === districtCode);
    this.getSchedFrmCntIdxIns(idx).patchValue({ districtDesc: districtObj.name });
  }

  onScheduleGodownChange(godownCode, idx) {
    const godownObj = this.godownList.find((resp: any) => resp.code === godownCode);
    this.getSchedFrmCntIdxIns(idx).patchValue({ godownDesc: godownObj.name });
  }

  onCheckboxChange(checkStatus, identifier) {
    console.log('checkStatus::', checkStatus);
    const addrFormControl = this.getPremisesAddrFormCntr();
    if (checkStatus) {
      const formVal = this.getForm().value;
      const addressObj = formVal.addressList[0];

      // Modified By :: SS
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

    console.log('photo event ::size',event.target.files[0].size);
    let filesize = event.target.files[0].size
    let  maxfilesize = 1024 * 1024  // 1 Mb

    if(filesize < maxfilesize){
      const formControl = this.getAppliFormCntr();
      const fileUpRes = this.onFileChange(event, sourceName, fileFor, formControl);
      return (fileUpRes) ? this.fileArr[FF_APPLI].push(sourceName) : false;
    }else{
      this.alert.showError('Upload Less Then 1Mb Size Photo');
      if(fileFor === this.licConst.FN_APPLI_PHOTO){ this.wholesaleForm.patchValue({ applicantDetails:{  appli_photo_file:""} })}
      if(fileFor === this.licConst.FN_APPLI_AADHAR){ this.wholesaleForm.patchValue({ applicantDetails:{  appli_aadhar_file:""} })}
      if(fileFor === this.licConst.FN_APPLI_PAN){ this.wholesaleForm.patchValue({ applicantDetails:{  appli_pan_file:""} })}
      if(fileFor === this.licConst.FN_APPLI_ITR){ this.wholesaleForm.patchValue({ applicantDetails:{  appli_itr_file:""} })}

    }

  }

  onBussinessFileChange(event, sourceName, fileFor) {
    console.log('photo event ::size',event.target.files[0].size);
    let filesize = event.target.files[0].size
    let  maxfilesize = 1024 * 1024  // 1 Mb

    if(filesize < maxfilesize){
      const formControl = this.getBussinessFormCntr();
      const fileUpRes = this.onFileChange(event, sourceName, fileFor, formControl);
      return (fileUpRes) ? this.fileArr[FF_BUSS_UNIT].push(sourceName) : false;
    }else{
      this.alert.showError('Upload Less Then 1Mb Size File');
      if(fileFor === this.licConst.FN_BUSSUNIT_COMP_PAN){ this.wholesaleForm.patchValue({ businessUnitDetails:{  compFirmPan_file:""} })}
      if(fileFor === this.licConst.FN_BUSSUNIT_ITR_LASTYR){ this.wholesaleForm.patchValue({ businessUnitDetails:{  lastYrITR_file:""} })}
      if(fileFor === this.licConst.FN_BUSSUNIT_CERT_INCORP){ this.wholesaleForm.patchValue({ businessUnitDetails:{  certIncorp_file:""} })}
      if(fileFor === this.licConst.FN_BUSSUNIT_MOM_OF_ARTICLE){ this.wholesaleForm.patchValue({ businessUnitDetails:{  memoOfArti_file:""} })}
      if(fileFor === this.licConst.FN_BUSSUNIT_ART_OF_ASSOC){ this.wholesaleForm.patchValue({ businessUnitDetails:{  artiOfAssoc_file:""} })}
      if(fileFor === this.licConst.FN_BUSSUNIT_RESU_OF_AUTH){ this.wholesaleForm.patchValue({ businessUnitDetails:{  resoluOfAuth_file:""} })}
      if(fileFor === this.licConst.FN_BUSSUNIT_OWNERSHIIP_DOC){ this.wholesaleForm.patchValue({ businessUnitDetails:{  ownershipDoc_file:""} })}

    }

  }

  onAttachFileChange(event, sourceName, fileFor) {
    console.log('photo event ::size',event.target.files[0].size);
    let filesize = event.target.files[0].size
    let  maxfilesize = 1024 * 1024  // 1 Mb
    if(filesize < maxfilesize){
      const formControl = this.getAttachFormCntr();
      const fileUpRes = this.onFileChange(event, sourceName, fileFor, formControl);
      return (fileUpRes) ? this.fileArr[FF_ATTACHMENTS].push(sourceName) : false;
    }else{
      this.alert.showError('Upload Less Then 1Mb Size File');
      if(fileFor === this.licConst.FN_ATTACH_SOLVENCYCERT){ this.wholesaleForm.get('wholeSaleLicenses').patchValue({ wholeSaleAdditionalDetails:{solvencyCertByAuth_file:""}})}
      if(fileFor === this.licConst.FN_ATTACH_AFFADAVAIT){ this.wholesaleForm.get('wholeSaleLicenses').patchValue({ wholeSaleAdditionalDetails:{affadavait_file:""}})}
      if(fileFor === this.licConst.FN_ATTACH_BOUNDRY){ this.wholesaleForm.get('wholeSaleLicenses').patchValue({ wholeSaleAdditionalDetails:{boundries_file:""}})}
    }
  }

  onBankFileChange(event, sourceName, fileFor) {
    console.log('photo event ::size',event.target.files[0].size);
    let filesize = event.target.files[0].size
    let  maxfilesize = 1024 * 1024  // 1 Mb
    if(filesize < maxfilesize){
      const formControl = this.getBankFormCntr();
      const fileUpRes = this.onFileChange(event, sourceName, fileFor, formControl);
      return (fileUpRes) ? this.fileArr[FF_BANK].push(sourceName) : false;
    }else{
      this.alert.showError('Upload Less Then 1Mb Size File');
      let banklistFormCtrl = this.wholesaleForm.get('bankList') as FormArray;
      if(fileFor === this.licConst.FN_BK_CAN_CHEQUE){ banklistFormCtrl.controls.forEach((element:any)=>{element.get('cancel_cheque_file').patchValue('')})}

    }

  }

  onFileChange(event, sourceName, fileFor, formControl) {
    const maxSize = 1000000;
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
      const { content: applicationNumber } = await this.licenseSer.getApplicationNo(APPLI_CODE_WHOLESALE);
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
    formData.append('screenName', SCREEN_NAME_WHOLESALE);
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
      case WHOLESALE_FL2_SUBCATEGORY:
      case WHOLESALE_FL2B_SUBCATEGORY:
      case WHOLESALE_CL2_SUBCATEGORY:
        this.addLicenseFor_FL2_FL2B_CL2(saveType);
        break;
      case WHOLESALE_FL2A_SUBCATEGORY:
        this.addLicenseFor_FL2A(saveType);
        break;
      case WHOLESALE_ID3_SUBCATEGORY:
        this.addLicenseFor_ID3(saveType);
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

  async addLicenseFor_FL2_FL2B_CL2(saveType) {
    this.formSubmitted = false;
    const form = this.wholesaleForm;
    console.log('this.wholesaleForm.valid::', form.valid);
    console.log('this.wholesaleForm.value::', form.value);
    console.log('this.wholesaleForm::', form);

    const { addressList: befformValaddressList } = form.value;
    befformValaddressList.forEach(element => this.mapAddress(element, this.getAddrFormCntl(element.addressIdentifier)));

    if (saveType !== STATUS_DRAFT && form.valid === false) {
      this.formSubmitted = true;
      this.toggleLoading(saveType);
      return false;
    }

    const formValue = form.value;

    const {
      financialYear,
      paymentProcessingFee,
      applicantDetails: formValapplicantDet,
      addressList: formValaddressList,
      businessUnitDetails: formValbusinessUnitDet,
      wholeSaleLicenses: formValwholeSaleLicenses,
      bankList: formValbankList
    } = formValue;

    const {
      wholeSaleAdditionalDetails: formValwholeSaleAddiDet
    } = formValwholeSaleLicenses;

    console.log('formValue::', formValue);
    console.log('this.fileArr::', this.fileArr);

    const appliDetProp = [
      'appli_photo_file', 'appli_photo_file_source', 'appli_aadhar_file', 'appli_aadhar_file_source',
      'appli_pan_file', 'appli_pan_file_source', 'appli_itr_file', 'appli_itr_file_source'
    ];

    const businessUnitDetProp = [
      'compFirmPan_file', 'compFirmPan_file_source', 'lastYrITR_file', 'lastYrITR_file_source',
      'certIncorp_file', 'certIncorp_file_source', 'memoOfArti_file', 'memoOfArti_file_source',
      'artiOfAssoc_file', 'artiOfAssoc_file_source', 'resoluOfAuth_file', 'resoluOfAuth_file_source',
      'ownershipDoc_file', 'ownershipDoc_file_source'
    ];

    const wholeSaleAddiDetProp = [
      'solvencyCertByAuth_file', 'solvencyCertByAuth_file_source', 'affadavait_file', 'affadavait_file_source',
      'boundries_file', 'boundries_file_source'
    ];

    const bankDetProp = [
      'cancel_cheque_file', 'cancel_cheque_file_source'
    ];

    appliDetProp.forEach((ele) => delete formValapplicantDet[ele]);
    businessUnitDetProp.forEach((ele) => delete formValbusinessUnitDet[ele]);
    wholeSaleAddiDetProp.forEach((ele) => delete formValwholeSaleAddiDet[ele]);
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

      const { wholeSaleAdditionalDetails } = licenseObj;
      const { additionalDocumentList: apiDataadditionalDocumentList } = wholeSaleAdditionalDetails;
      uploadAttachmentFiles = this.combineArr(apiDataadditionalDocumentList, uploadAttachmentFiles);

      const { bankDocumentList: apiDatabankDocumentList } = bankList[0];
      uploadBankFiles = this.combineArr(apiDatabankDocumentList, uploadBankFiles);
    }

    formValapplicantDet.applicantDocumentList = uploadAppliFiles;
    formValbusinessUnitDet.businessUnitDocumentList = uploadBussinessUnitFiles;
    formValwholeSaleAddiDet.additionalDocumentList = uploadAttachmentFiles;
    formValbankList[0].bankDocumentList = uploadBankFiles;

    console.log('formValapplicantDet.dob::', formValapplicantDet.dob);
    formValapplicantDet.dob = this.invertDate(formValapplicantDet.dob);
    formValwholeSaleAddiDet.solvencyCerticateValidity = this.invertDate(formValwholeSaleAddiDet.solvencyCerticateValidity);

    console.log('formValue::', formValue);

    const payload: any = {
      workFlowName: this.workFlowNameList[this.screenSubType],
      financialYear,
      applicationNumber: applicationNo,
      status: saveType,
      licenseCategory: WHOLESALE_LICENSE_CATEGORY,
      licenseCategoryDesc: WHOLESALE_LICENSE_CATEGORY_DESC,
      licenseSubCategory: this.screenSubType,
      licenseSubCategoryDesc: this.subCategoryDesc[this.screenSubType],
      applicantDetails: formValapplicantDet,
      addressList: formValaddressList,
      businessUnitDetails: formValbusinessUnitDet,
      bankList: formValbankList,
      wholeSaleLicenses: formValwholeSaleLicenses,
      paymentProcessingFee
    };

    console.log('payload::', payload);

    const licenseResp: any = await this.createLicense(payload, form, saveType);
    if (licenseResp.status) {
      this.toggleLoading(saveType);
      this.processNavigation(saveType, form, licenseResp.data);
    }

    return true;
  }

  async addLicenseFor_FL2A(saveType) {
    this.formSubmitted = false;
    const form = this.wholesaleForm;
    console.log('this.wholesaleForm.valid::', form.valid);
    console.log('this.wholesaleForm.value::', form.value);
    console.log('this.wholesaleForm::', form);

    const { addressList: befformValaddressList } = form.value;
    befformValaddressList.forEach(element => this.mapAddress(element, this.getAddrFormCntl(element.addressIdentifier)));

    if (saveType !== STATUS_DRAFT && form.valid === false) {
      this.formSubmitted = true;
      this.toggleLoading(saveType);
      return false;
    }

    const formValue = form.value;

    const {
      financialYear,
      paymentProcessingFee,
      applicantDetails: formValapplicantDet,
      addressList: formValaddressList,
      businessUnitDetails: formValbusinessUnitDet,
      bankList: formValbankList
    } = formValue;

    console.log('formValue::', formValue);
    console.log('this.fileArr::', this.fileArr);

    const appliDetProp = [ 'appli_photo_file', 'appli_photo_file_source' ];

    const businessUnitDetProp = [
      'resoluOfAuth_file', 'resoluOfAuth_file_source',
      'ownershipDoc_file', 'ownershipDoc_file_source'
    ];

    const bankDetProp = [ 'cancel_cheque_file', 'cancel_cheque_file_source' ];

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
      const { applicantDetails, bankList, businessUnitDetails } = this.getLicenseData();

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

    console.log('formValue::', formValue);

    const payload: any = {
      workFlowName: this.workFlowNameList[this.screenSubType],
      financialYear,
      applicationNumber: applicationNo,
      status: saveType,
      licenseCategory: WHOLESALE_LICENSE_CATEGORY,
      licenseCategoryDesc: WHOLESALE_LICENSE_CATEGORY_DESC,
      licenseSubCategory: this.screenSubType,
      licenseSubCategoryDesc: this.subCategoryDesc[this.screenSubType],
      applicantDetails: formValapplicantDet,
      addressList: formValaddressList,
      businessUnitDetails: formValbusinessUnitDet,
      bankList: formValbankList,
      paymentProcessingFee
    };

    console.log('payload::', payload);

    const licenseResp: any = await this.createLicense(payload, form, saveType);
    if (licenseResp.status) {
      this.toggleLoading(saveType);
      this.processNavigation(saveType, form, licenseResp.data);
    }

    return true;
  }

  async addLicenseFor_ID3(saveType) {
    this.formSubmitted = false;
    const form = this.wholesaleForm;
    console.log('this.wholesaleForm.valid::', form.valid);
    console.log('this.wholesaleForm.value::', form.value);
    console.log('this.wholesaleForm::', form);

    const { addressList: befformValaddressList } = form.value;
    befformValaddressList.forEach(element => this.mapAddress(element, this.getAddrFormCntl(element.addressIdentifier)));

    if (saveType !== STATUS_DRAFT && form.valid === false) {
      this.formSubmitted = true;
      return false;
    }

    const formValue = form.value;

    const {
      financialYear,
      paymentProcessingFee,
      applicantDetails: formValapplicantDet,
      addressList: formValaddressList,
      wholeSaleLicenses: formValwholeSaleLicenses,
      bankList: formValbankList
    } = formValue;

    console.log('formValue::', formValue);
    console.log('this.fileArr::', this.fileArr);

    const appliDetProp = [
      'appli_photo_file', 'appli_photo_file_source', 'appli_aadhar_file', 'appli_aadhar_file_source',
      'appli_pan_file', 'appli_pan_file_source', 'appli_itr_file', 'appli_itr_file_source'
    ];

    const bankDetProp = [ 'cancel_cheque_file', 'cancel_cheque_file_source' ];

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
      const { licenseObj, addressList, applicantDetails, bankList, businessUnitDetails } = this.getLicenseData();

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
      licenseCategory: WHOLESALE_LICENSE_CATEGORY,
      licenseCategoryDesc: WHOLESALE_LICENSE_CATEGORY_DESC,
      licenseSubCategory: this.screenSubType,
      licenseSubCategoryDesc: this.subCategoryDesc[this.screenSubType],
      applicantDetails: formValapplicantDet,
      addressList: formValaddressList,
      bankList: formValbankList,
      wholeSaleLicenses: formValwholeSaleLicenses,
      paymentProcessingFee
    };

    console.log('payload::', payload);

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
      case STATUS_SENDBACK:
        payload.event = '';
        payload.level = '';
        break;
      case STATUS_SUBMITTED:
        payload.event = EVENT_INITIATE;
        payload.level = STR_LEVEL_ONE ;
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
        const routeUrl = ((isProcessingFeePaid) ? acknowledgementUrl : ((isProcessingFeeRequired) ? paymentUrl : acknowledgementUrl));
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
          // this.alert.showSuccess('Workflow config Initiated');
        } else {
          this.alert.showError(MSG_NO_RESP);
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
          case WHOLESALE_FL2_SUBCATEGORY:
          case WHOLESALE_FL2B_SUBCATEGORY:
          case WHOLESALE_CL2_SUBCATEGORY:
            this.patchForm();
            break;
          case WHOLESALE_FL2A_SUBCATEGORY:
            this.patchFL2AForm();
            break;
          case WHOLESALE_ID3_SUBCATEGORY:
            this.patchID3Form();
            this.getAllDistricts();
            break;
        }

        const { status, commentList } = this.getLicenseData();
        this.isSendBack = (status === STATUS_SENDBACK) ? true : false;
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
      financialYear, applicationDate, licenseObj, addressList, applicantDetails, bankList, businessUnitDetails,
    } = this.getLicenseData();

    console.log('licenseObj::', licenseObj);

    addressList.forEach(element => {
      this.onStateChange(element.stateCode, element.addressIdentifier);
      this.onDistrictChange(element.districtCode, element.addressIdentifier);
    });

    const appliDetProp = [ 'appli_photo_file', 'appli_aadhar_file', 'appli_pan_file', 'appli_itr_file' ];
    const businessUnitDetProp = [
      'compFirmPan_file', 'lastYrITR_file',
      'certIncorp_file', 'memoOfArti_file',
      'artiOfAssoc_file', 'resoluOfAuth_file',
      'ownershipDoc_file',
    ];
    const wholeSaleAddiDetProp = [ 'solvencyCertByAuth_file', 'affadavait_file', 'boundries_file' ];
    const addressDetProp = [ 'boundries_file' ];
    const bankDetProp = [ 'cancel_cheque_file' ];

    const form = this.wholesaleForm;
    const appliFormCntr = this.getAppliFormCntr();
    const premisesAddrFormCntr = this.getPremisesAddrFormCntr();
    const bussinessFormCntr = this.getBussinessFormCntr();
    const attachFormCntr = this.getAttachFormCntr();
    const bankDetControl = this.getBankFormCntr();

    this.unsetValidator(appliFormCntr, appliDetProp);
    this.unsetValidator(premisesAddrFormCntr, addressDetProp);
    this.unsetValidator(bussinessFormCntr, businessUnitDetProp);
    this.unsetValidator(attachFormCntr, wholeSaleAddiDetProp);
    this.unsetValidator(bankDetControl, bankDetProp);

    applicantDetails.dob = this.invertDate(applicantDetails.dob);
    licenseObj.wholeSaleAdditionalDetails.solvencyCerticateValidity = this.invertDate(
      licenseObj.wholeSaleAdditionalDetails.solvencyCerticateValidity);

    form.patchValue({
      financialYear,
      applicationDate: this.invertDate(applicationDate),
      applicantDetails,
      addressList,
      businessUnitDetails,
      wholeSaleLicenses: licenseObj,
      bankList
    });

    this.setSameAsAboveAddrCheck();

    return true;

  }

  patchFL2AForm() {

    const {
      financialYear, applicationDate, licenseObj, addressList, applicantDetails, bankList, businessUnitDetails,
    } = this.getLicenseData();

    console.log('licenseObj::', licenseObj);

    addressList.forEach(element => {
      this.onStateChange(element.stateCode, element.addressIdentifier);
      this.onDistrictChange(element.districtCode, element.addressIdentifier);
    });

    const appliDetProp = [ 'appli_photo_file' ];
    const businessUnitDetProp = [ 'resoluOfAuth_file', 'ownershipDoc_file' ];
    const bankDetProp = [ 'cancel_cheque_file' ];

    const form = this.wholesaleForm;
    const appliFormCntr = this.getAppliFormCntr();
    const bussinessFormCntr = this.getBussinessFormCntr();
    const bankDetControl = this.getBankFormCntr();

    this.unsetValidator(appliFormCntr, appliDetProp);
    this.unsetValidator(bussinessFormCntr, businessUnitDetProp);
    this.unsetValidator(bankDetControl, bankDetProp);

    applicantDetails.dob = this.invertDate(applicantDetails.dob);

    form.patchValue({
      financialYear,
      applicationDate: this.invertDate(applicationDate),
      applicantDetails,
      addressList,
      businessUnitDetails,
      bankList
    });

    this.setSameAsAboveAddrCheck();

    return true;

  }

  patchID3Form() {

    const {
      financialYear, applicationDate, licenseObj, addressList, applicantDetails, bankList
    } = this.getLicenseData();

    console.log('licenseObj::', licenseObj);

    addressList.forEach(element => {
      this.onStateChange(element.stateCode, element.addressIdentifier);
      this.onDistrictChange(element.districtCode, element.addressIdentifier);
    });

    const appliDetProp = [ 'appli_photo_file', 'appli_aadhar_file', 'appli_pan_file', 'appli_itr_file' ];
    const bankDetProp = [ 'cancel_cheque_file' ];

    const form = this.wholesaleForm;
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
      wholeSaleLicenses: licenseObj,
      bankList
    });

    return true;

  }

  processFormActionReadOnly() {
    if (this.isFormEdit) {
      const { readOnly, showActionFor } = this.licenseCommonSer.isEditFormIsReadOnly(
        this.isCustomer, this.licenseStatus, this.licenseStage, WHOLESALE_LICENSE_CATEGORY
      );

      this.createsendbackForm();

      this.isActionBtnFor = showActionFor;
      this.isReadOnly = readOnly;
      if (readOnly) {
        this.wholesaleForm.disable();
      }
    } else {
      this.isActionBtnFor = CUSTOMER;
      this.isReadOnly = false;
    }
  }

  getLicenseData(): any {
    const { financialYear, applicationDate, licenseType, addressList, applicantDetails, bankList, businessUnitDetails,
      wholeSaleLicenses, status, commentList } = this.licenseApplicationData;
    const licenseObj = wholeSaleLicenses ? wholeSaleLicenses : [];
    this.licenseCommonSer.mergeWith(licenseObj, { addressList, applicantDetails, bankList, businessUnitDetails });

    return {
      financialYear, applicationDate, licenseType, licenseObj,
      addressList, applicantDetails, businessUnitDetails, bankList, status, commentList
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

    if(this.countDummy < 5) {
      this.countDummy++;
      return false;
    }

    const patchObj = {
      applicantDetails: {
        aadharNumber: '9887766554' + this.randNum,
        emailId: 'test_user' + this.randNum + '@gmail.com',
        firstName: 'test' + this.randNum,
        lastName: 'last' + this.randNum,
        middleName: 'mid' + this.randNum,
        mobileNumber: '98765443' + this.randNum,
        panNumber: 'DTVPP22' + this.randNum + 'Z',
        previousItrNotFiled: 'nothing'
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
          block: 'shop_block_name' + this.randNum,
          locality: 'shop_locality' + this.randNum,
          policeStationCode: 1,
          pinCode: 655443,
          street: 'shop_street' + this.randNum,
          village: 'shop_village ' + this.randNum,
          ward: 'shop_ward_' + this.randNum,
          annualQuantity: 543,
          monthlyQuantity: 80,
          annualConsiderationFee: 900,
          descriptionOfPermises: 'nothing special',
        }
      ],
      businessUnitDetails: {
        firmCompanyName: 'firm_company' + this.randNum,
        firmCompanyPanNumber: 'DTVPP22' + this.randNum + 'Z',
        gstNumber: '876554435465'
      },
      bankList: [
        {
          ifscCode: 'CAN002233',
          accountNumber: '8776877687'
        }
      ]
    };

    this.wholesaleForm.patchValue(patchObj);
  }


}
