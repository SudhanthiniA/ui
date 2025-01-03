import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import {
  AuthService, AlertService, DistrictMasterService, TalukMasterService, StatemasterService,
  DocumentUploadService, LicenceManagementService,
  DropdownConfigService,
  ValidationService
} from '@app/services';
import {
  LicenseConstants,
  WorkFlowNameListConstants,
  SubCategoryDescConstants
} from '@app/containers/licencemgnt/license.constants';

import { LicenseCommonService } from '@appLicMgntShared/license-common.service';

const {
  docuPropObj, FF_APPLI, FF_BANK, FF_BUSS_UNIT, FF_ADDRESS,
  SEC_ADDR_APPLICANT, SEC_ADDR_PREMISES, SEC_ADDR_UNIT, APPLI_CODE_BONDWAREHOUSE,
  PROP_APPLI_DET, PROP_ADDRESS_DET, PROP_BANK_DET, PROP_BUSSIN_UNIT,
  CODE_SALUTATION, CODE_GENDER, CODE_LOCALITYTYPE, CODE_BANK,
  CODE_ENTITYOFFIRM, CODE_ITR, CODE_OWNERSHIP_TYPE, CODE_DISTRICT_CATEGORY,
  CODE_STATE_POPULATION_SUPPLY,
  BOND_WAREHOUSE_LICENSE_CATEGORY, BOND_WAREHOUSE_LICENSE_CATEGORY_DESC,
  STATUS_DRAFT, STATUS_SAVE, STATUS_SUBMITTED, STATUS_SENDBACK,
  MODULE_NAME_CODE, CUSTOMER,
  LICENSE_URL, MSG_NO_APPLICATION_NUMBER,
  LOCALITY_URBAN, LOCALITY_RURAL,
  FN_APPLI_PHOTO, FN_APPLI_AADHAR, FN_APPLI_PAN, FN_APPLI_ITR,
  FN_BUSSUNIT_UNIT_LICENSE, FN_BUSSUNIT_BOND_DOC, FN_BUSSUNIT_POWER_OF_ATTORNEY, FN_BUSSUNIT_AFFADAVAIT,
  FN_BUSSUNIT_COMP_PAN, FN_BUSSUNIT_ITR_LASTYR, FN_BUSSUNIT_GSTIN, FN_BUSSUNIT_ANNUAL_TURNOVER_CERT,
  FN_BUSSUNIT_CERT_OF_OTHER_STATE_OFFICIAL, FN_BUSSUNIT_DECLARATION, FN_BK_CAN_CHEQUE,
  FN_ADDR_OWNERSHIIP_DOC, FN_ADDR_BOUNDRY
} = LicenseConstants;
const { VIEW_LICENSE_STATUS: viewStatusUrl, ACKNOWLEDGEMENT: acknowledgementUrl, PAYMENT: paymentUrl } = LICENSE_URL;

@Component({
  selector: 'app-bwfl-license-form',
  templateUrl: './bwfl-license-form.component.html',
  styleUrls: ['./bwfl-license-form.component.scss']
})
export class BwflLicenseFormComponent implements OnInit {

  licConst = LicenseConstants;
  docuPropObj = docuPropObj;
  workFlowNameList = WorkFlowNameListConstants.WAREHOUSE;
  subCategoryDesc = SubCategoryDescConstants.WAREHOUSE;

  fileArr = {
    [FF_APPLI]: [],
    [FF_BANK]: [],
    [FF_BUSS_UNIT]: [],
    [FF_ADDRESS]: []
  };

  salutationList: any;
  genderList: any;
  locTypeList: any;
  bankList: any;
  ITRList: any;
  ownershipList: any;
  entityFirmList: any;
  statePopList: any;
  districtCategoryList: any;

  stateList: any;
  districtList: any;
  countryList: any;
  districtListByState = {
    [SEC_ADDR_UNIT]: [],
    [SEC_ADDR_APPLICANT]: [],
    [SEC_ADDR_PREMISES]: []
  };
  talukList = {
    [SEC_ADDR_UNIT]: [],
    [SEC_ADDR_APPLICANT]: [],
    [SEC_ADDR_PREMISES]: []
  };

  unitAddrLocality = '';
  appliAddrLocality = '';
  premisesAddrLocality = '';

  bwflForm: FormGroup;
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

  urbanKey = 'urban';
  ruralKey = 'rural';

  applicationDate = this.licenseCommonSer.applicationDate;
  maxDOBDate = this.licenseCommonSer.maxDOBDate;
  minDOBDate = this.licenseCommonSer.minDOBDate;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private alert: AlertService,
    private authService: AuthService,
    private formBuilder: FormBuilder,
    private stateSer: StatemasterService,
    private districtSer: DistrictMasterService,
    private dropdownConfigSer: DropdownConfigService,
    private talukSer: TalukMasterService,
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
    this.isCustomerBondLicenseEligible();

  }

  back(): void { this.licenseCommonSer.back(); }
  numberOnly(event): boolean { return this.licenseCommonSer.numberOnly(event); }
  stringToDate(strDate) { return this.licenseCommonSer.stringToDate(strDate); }
  unsetValidator(formControl, fileArr) { return this.licenseCommonSer.unsetValidator(formControl, fileArr); }
  combineArr(oldArr, newArr) { return this.licenseCommonSer.combineArr(oldArr, newArr); }
  invertDate(date) { return this.licenseCommonSer.invertDate(date); }

  getForm() { return this.bwflForm; }
  getFormCntr(element) { return this.getForm().get(element); }
  getFormCntrl(formCntrl, element) { return formCntrl.get(element); }
  getAddressFormCntr() { return this.getFormCntr(PROP_ADDRESS_DET); }
  getAddrCtByIdx(idx) { return this.getAddressFormCntr().get(idx); }
  getUnitAddrFormCntr(element = '') { return (element) ? this.getAddrCtByIdx('0').get(element) : this.getAddrCtByIdx('0'); }
  getAppliAddrFormCntr(element = '') { return (element) ? this.getAddrCtByIdx('1').get(element) : this.getAddrCtByIdx('1'); }
  getPremisesAddrFormCntr(element = '') { return (element) ? this.getAddrCtByIdx('2').get(element) : this.getAddrCtByIdx('2'); }

  getAppliFormCntrInst() { return this.getFormCntr(PROP_APPLI_DET); }
  getAppliFormCntr(element = '') { return (element) ? this.getAppliFormCntrInst().get(element) : this.getAppliFormCntrInst(); }
  getBankFrmCntrInst() { return this.getFormCntr(PROP_BANK_DET); }
  getBankFormCntr(element = '') { return (element) ? this.getBankFrmCntrInst().get('0').get(element) : this.getBankFrmCntrInst().get('0'); }
  getBussFormCntrInst() { return this.getFormCntr(PROP_BUSSIN_UNIT); }
  getBussinessFormCntr(element = '') { return (element) ? this.getBussFormCntrInst().get(element) : this.getBussFormCntrInst(); }

  loadFormControl() {
    this.createBondWarehouseForm();
    (this.isFormEdit) ? this.loadLicenseData() : this.loadInitialFormData();
    this.createcommentForm();
    this.getWorkFlowConfig();
  }

  loadInitialFormData() {
    this.commonDatas();
    this.processFormActionReadOnly();
  }

  findDropMas(code) { return this.dropdownConfigSer.findDropDownMaster(code); }

  commonDatas() {
    this.getFinancialYr();
    this.getAllStates();
    this.getAllDistricts();

    this.findDropMas(CODE_SALUTATION).subscribe( (res) => this.salutationList = res.data ? res.data.downDropDownMasterValueList : []);
    this.findDropMas(CODE_GENDER).subscribe( (res) => this.genderList = res.data ? res.data.downDropDownMasterValueList : []);
    this.findDropMas(CODE_LOCALITYTYPE).subscribe( (res) => this.locTypeList = res.data ? res.data.downDropDownMasterValueList : []);
    this.findDropMas(CODE_STATE_POPULATION_SUPPLY).subscribe(
      (res) => this.statePopList = res.data ? res.data.downDropDownMasterValueList : []);
    this.findDropMas(CODE_BANK).subscribe( (res) => this.bankList = res.data ? res.data.downDropDownMasterValueList : []);
    this.findDropMas(CODE_ENTITYOFFIRM).subscribe( (res) => this.entityFirmList = res.data ? res.data.downDropDownMasterValueList : []);
    this.findDropMas(CODE_ITR).subscribe( (res) => this.ITRList = res.data ? res.data.downDropDownMasterValueList : []);
    this.findDropMas(CODE_OWNERSHIP_TYPE).subscribe((res) => this.ownershipList = res.data ? res.data.downDropDownMasterValueList : []);
    this.findDropMas(CODE_DISTRICT_CATEGORY).subscribe((res) => this.districtCategoryList = res.data ? res.data.downDropDownMasterValueList : []);
  }

  isCustomerBondLicenseEligible() {
    this.licenseSer.isCustomerBondLicenseEligible().subscribe((resp: any) => {
      const { responseCode: respCode, content: respContent } = resp;
      if (respCode === 200 && !respContent) {
        console.log('respContent::', respContent);
        this.alert.showError('You are not authorize to apply this license');
        this.back();
      }
    });
  }

  // buildAppliDetFormGroup(data?: any) { return this.validateSer.buildAppliDetFormGroup(data); }
  buildBusinessUnitDetFormGroup(data?: any) { return this.validateSer.buildBusinessUnitDetFormGroup(data); }
  // buildAddressFormGroup(identifier, data?: any) { return this.validateSer.buildAddressFormGroup(identifier, data); }
  buildBankDetFormGroup(data?: any) { return this.validateSer.buildBankDetFormGroup(data); }

  createcommentForm(data?: any) { this.commentForm = this.validateSer.buildCommentFormGroup(data); }
  createsendbackForm(data?: any) { this.sendbackForm = this.validateSer.buildSendbackFormGroup(data); }

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
    switch (identifier) {
      case SEC_ADDR_PREMISES:
        console.log('Address-SEC_ADDR_PREMISES::');
        this.licenseCommonSer.mergeWith(basicEle, {

          ownershipTypeCode: ['', this.validateSer.valiReqOnly],
          ownershipTypeValue: ['', this.validateSer.valiReqOnly],

          districtCategoryCode: ['', this.validateSer.valiReqOnly],
          districtCategoryValue: ['', this.validateSer.valiReqOnly],

          ownershipDoc_file: ['', this.validateSer.valiReqOnly],
          ownershipDoc_file_source: ['', this.validateSer.valiReqOnly],

          boundries_file: ['', this.validateSer.valiReqOnly],
          boundries_file_source: ['', this.validateSer.valiReqOnly],
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
        fatherHusbandName: [''],
        dob: ['', this.validateSer.valiReqOnly],
        aadharNumber: ['', this.validateSer.valiReqOnly],
        panNumber: ['', this.validateSer.valiForPan],
        itrAssesmentYearCode: ['', this.validateSer.valiReqOnly],
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

  createBondWarehouseForm() {
    const basicEle = {
      financialYear: [''],
      applicationDate: [this.applicationDate],
      licenseType: [this.subCategoryDesc[this.screenSubType], this.validateSer.valiReqOnly],
      parentUnitCode: ['Distillery', this.validateSer.valiReqOnly],
      unitName: ['Krishna Warehouse', this.validateSer.valiReqOnly],

      applicantDetails: this.buildAppliDetFormGroup(),

      bankList: this.formBuilder.array([
        this.buildBankDetFormGroup()
      ]),

      businessUnitDetails: this.buildBusinessUnitDetFormGroup(),
      addressList: this.formBuilder.array([
        this.buildAddressFormGroup(SEC_ADDR_UNIT),
        this.buildAddressFormGroup(SEC_ADDR_APPLICANT),
        this.buildAddressFormGroup(SEC_ADDR_PREMISES),
      ]),

      paymentProcessingFee: [this.processingFee],
    };
    this.bwflForm = this.formBuilder.group(basicEle);
  }

  getFinancialYr() {
    this.licenseSer.findFinancialYear().subscribe((res) => {
      this.financialYear = res ? res.financialYear : '';
      this.getForm().patchValue({ financialYear: this.financialYear });
    });
  }

  getAllStates() { this.stateSer.getState().subscribe((respData: any) => { this.stateList = respData.data; }); }
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

  patchMasVal(list, code, formCntl, key) {
    const obj = list.find((resp: any) => resp.paramKey === code);
    formCntl.patchValue({ [key]: obj.paramValue });
  }

  onStateSupplyChange(code) { this.patchMasVal(this.statePopList, code, this.getBussinessFormCntr(), 'stateSupplyDesc'); }
  onSalutationChange(code) { this.patchMasVal(this.salutationList, code, this.getAppliFormCntr(), 'salutationDesc'); }
  onGenderChange(code) { this.patchMasVal(this.genderList, code, this.getAppliFormCntr(), 'genderDesc'); }
  onAppliITRChange(code) { this.patchMasVal(this.ITRList, code, this.getAppliFormCntr(), 'itrAssesmentYearDesc'); }
  onITRChange(code) { this.patchMasVal(this.ITRList, code, this.getBussinessFormCntr(), 'itrAssessmentYearDesc'); }
  onFirmTypeChange(code) { this.patchMasVal(this.entityFirmList, code, this.getBussinessFormCntr(), 'firmTypedDesc'); }
  onOwnershipTypeChange(code) { this.patchMasVal(this.ownershipList, code, this.getPremisesAddrFormCntr(), 'ownershipTypeValue'); }
  onBankChange(code) { this.patchMasVal(this.bankList, code, this.getBankFormCntr(), 'bankName'); }
  onDistrictCategoryChange(code) { this.patchMasVal(this.districtCategoryList, code, this.getPremisesAddrFormCntr(), 'districtCategoryValue'); }

  onStateChange(stateId, key) {
    this.getAddrFormCntl(key).patchValue({ districtCode: '', tahsilCode: '' });
    this.getDistrictsByStateid(stateId, key);
  }
  getDistrictsByStateid(stateId, key) {
    this.districtSer.getDistrictsByStateid(stateId).subscribe((resp: any) => this.districtListByState[key] = resp.data);
  }
  onDistrictChange(districtId, key) {
    this.getAddrFormCntl(key).patchValue({ tahsilCode: '' });
    this.loadTalukByDist(districtId, key);
  }
  loadTalukByDist(districtId, key) {
    this.talukSer.gettalukByDistId(districtId).subscribe((resp: any) => this.talukList[key] = resp.data);
  }
  onTalukChange(talukId, key) { console.log('talukId', talukId); }

  onLocalityChange(localityType, type) {
    // const { value: localityType } = $event.target;
    console.log('locality type -->>', localityType);
    
    let formContrl;
    switch (type) {
      case SEC_ADDR_UNIT:
        formContrl = this.getUnitAddrFormCntr();
        this.unitAddrLocality = (localityType === LOCALITY_URBAN) ? LOCALITY_URBAN :
          ((localityType === LOCALITY_RURAL) ? LOCALITY_RURAL : '');
        break;
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

  onCheckboxChange(checkStatus, identifier) {
    console.log('checkStatus::', checkStatus);
    const formVal = this.getForm().value;
    let addressObj;
    let addrFormControl;
    console.log('form value ::', formVal);
    switch (identifier) {
      case SEC_ADDR_APPLICANT:
        addressObj = formVal.addressList[0];
        addrFormControl = this.getAppliAddrFormCntr();
        break;
      case SEC_ADDR_PREMISES:
        addressObj = formVal.addressList[1];
        addrFormControl = this.getPremisesAddrFormCntr();
        break;
    }
    if (checkStatus) {
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
    }

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
      if (fileFor === FN_APPLI_PHOTO) { this.getForm().patchValue({ applicantDetails: {  appli_photo_file: ''} }); }
      if (fileFor === FN_APPLI_AADHAR) { this.getForm().patchValue({ applicantDetails: {  appli_aadhar_file: ''} }); }
      if (fileFor === FN_APPLI_PAN) { this.getForm().patchValue({ applicantDetails: {  appli_pan_file: ''} }); }
      if (fileFor === FN_APPLI_ITR) { this.getForm().patchValue({ applicantDetails: {  appli_itr_file: ''} }); }
    }
  }

  onBussinessFileChange(event, sourceName, fileFor) {

    console.log('photo event ::size', event.target.files[0].size);
    const filesize = event.target.files[0].size;
    const maxfilesize = 1024 * 1024;  // 1 Mb

    if (filesize < maxfilesize) {
      const formControl = this.getBussinessFormCntr();
      const fileUpRes = this.onFileChange(event, sourceName, fileFor, formControl);
      return (fileUpRes) ? this.fileArr[FF_BUSS_UNIT].push(sourceName) : false;
    } else {
      this.alert.showError('Upload Less Then 1Mb Size Photo');
      if (fileFor === FN_BUSSUNIT_UNIT_LICENSE) { this.getForm().patchValue({ businessUnitDetails: {  unitLicense_file: ''} }); }
      if (fileFor === FN_BUSSUNIT_BOND_DOC) { this.getForm().patchValue({ businessUnitDetails: {  bwflBondDoc_file: ''} }); }
      if (fileFor === FN_BUSSUNIT_POWER_OF_ATTORNEY) { this.getForm().patchValue({ businessUnitDetails: {  powerOfAttorney_file: ''} }); }
      if (fileFor === FN_BUSSUNIT_AFFADAVAIT) { this.getForm().patchValue({ businessUnitDetails: {  unitAffadavait_file: ''} }); }
      if (fileFor === FN_BUSSUNIT_COMP_PAN) { this.getForm().patchValue({ businessUnitDetails: {  compFirmPan_file: ''} }); }
      if (fileFor === FN_BUSSUNIT_ITR_LASTYR) { this.getForm().patchValue({ businessUnitDetails: {  lastYrITR_file: ''} }); }
      if (fileFor === FN_BUSSUNIT_GSTIN) { this.getForm().patchValue({ businessUnitDetails: {  uploadGstin_file: ''} }); }
      if (fileFor === FN_BUSSUNIT_ANNUAL_TURNOVER_CERT) {
        this.getForm().patchValue({ businessUnitDetails: {  annualTurnOverCert_file: ''} }); }
      if (fileFor === FN_BUSSUNIT_CERT_OF_OTHER_STATE_OFFICIAL) {
        this.getForm().patchValue({ businessUnitDetails: {  stateExciseOfficialCert_file: ''} }); }
      if (fileFor === FN_BUSSUNIT_DECLARATION) { this.getForm().patchValue({ businessUnitDetails: {  declarationCert_file: ''} }); }
    }
  }

  onAddressFileChange1(event, idx, siteDocumentCntrl, sourceName, fileFor) {
    // const filesize = event.target.files[0].size;
    // const maxfilesize = 1024 * 1024; // 1 Mb
    // if (filesize < maxfilesize) {
    //   const secName = FF_ADDRESS;
    //   const fileUpRes = this.onFileChange(event, sourceName, fileFor, siteDocumentCntrl);
    //   if (!fileUpRes) {
    //     return false;
    //   }
    //   if (this.fileArr[secName][idx]) {
    //     this.fileArr[secName][idx].push(sourceName);
    //   } else {
    //     this.fileArr[secName][idx] = [];
    //     this.fileArr[secName][idx].push(sourceName);
    //   }
    // } else {
    //   this.alert.showError('Upload Less Then 1MB Size Photo');
    //   // const controlls = this.siteDetForm.get('documentList') as FormArray;
    //   // if (fileFor === this.licConst.FN_SITE_PHOTO) {
    //   //   controlls.controls.forEach((element: any) => { element.get('site_photo_file').patchValue(''); });
    //   // }
    // }
  }

  onAddressFileChange(event, sourceName, fileFor) {
    console.log('photo event ::size', event.target.files[0].size);
    const filesize = event.target.files[0].size;
    const maxfilesize = 1024 * 1024;  // 1 Mb
    if (filesize < maxfilesize) {
      const formControl = this.getPremisesAddrFormCntr();
      const fileUpRes = this.onFileChange(event, sourceName, fileFor, formControl);
      return (fileUpRes) ? this.fileArr[FF_ADDRESS].push(sourceName) : false;
    } else {
      this.alert.showError('Upload Less Then 1Mb Size Photo');
      const premisesAddrFormCtrl = this.getPremisesAddrFormCntr() as FormArray; 
      if (fileFor === FN_ADDR_OWNERSHIIP_DOC) {
        premisesAddrFormCtrl.controls.forEach((element: any) => { element.get('ownershipDoc_file').patchValue(''); });
      }
      if (fileFor === FN_ADDR_BOUNDRY) {
        premisesAddrFormCtrl.controls.forEach((element: any) => { element.get('boundries_file').patchValue(''); });
      }
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
      const banklistFormCtrl = this.getForm().get('bankList') as FormArray;
      if (fileFor === FN_BK_CAN_CHEQUE) {
        banklistFormCtrl.controls.forEach((element: any) => {element.get('cancel_cheque_file').patchValue(''); });
      }
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
      const { content: applicationNumber } = await this.licenseSer.getApplicationNo(APPLI_CODE_BONDWAREHOUSE);
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

  onSubmit(saveType) {
    this.toggleLoading(saveType);
    this.addLicense(saveType);
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

  async addLicense(saveType) {
    this.formSubmitted = false;
    const form = this.getForm();
    console.log('this.getForm().valid::', form.valid);
    console.log('this.getForm().value::', form.value);
    console.log('this.bwflForm::', form);

    const { addressList: befformValaddressList } = form.value;
    befformValaddressList.forEach(element => this.mapAddress(element, this.getAddrFormCntl(element.addressIdentifier)) );

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

    const appliDetProp = [
      'appli_photo_file', 'appli_photo_file_source', 'appli_aadhar_file', 'appli_aadhar_file_source',
      'appli_pan_file', 'appli_pan_file_source', 'appli_itr_file', 'appli_itr_file_source'
    ];

    const businessUnitDetProp = [
      'unitLicense_file', 'unitLicense_file_source', 'bwflBondDoc_file', 'bwflBondDoc_file_source',
      'powerOfAttorney_file', 'powerOfAttorney_file_source', 'unitAffadavait_file', 'unitAffadavait_file_source',
      'compFirmPan_file', 'compFirmPan_file_source', 'lastYrITR_file', 'lastYrITR_file_source',
      'uploadGstin_file', 'uploadGstin_file_source', 'annualTurnOverCert_file',
      'annualTurnOverCert_file_source', 'stateExciseOfficialCert_file', 'stateExciseOfficialCert_file_source',
      'declarationCert_file', 'declarationCert_file_source'
    ];

    const bankDetProp = [ 'cancel_cheque_file', 'cancel_cheque_file_source' ];

    appliDetProp.forEach((ele) => delete formValapplicantDet[ele]);
    businessUnitDetProp.forEach((ele) => delete formValbusinessUnitDet[ele]);
    bankDetProp.forEach((ele) => delete formValbankList[0][ele]);

    let uploadAppliFiles;
    let uploadAddressFiles;
    let uploadBankFiles;
    let uploadBussinessUnitFiles;

    const applicationNo = await this.getApplicationNo();
    uploadAppliFiles = await this.uploadAppliFiles(applicationNo);
    console.log('uploadAppliFiles::', uploadAppliFiles);
    uploadAddressFiles = await this.uploadAddressFiles(applicationNo);
    console.log('uploadAddressFiles::', uploadAddressFiles);
    uploadBankFiles = await this.uploadBankFiles(applicationNo);
    console.log('uploadBankFiles::', uploadBankFiles);
    uploadBussinessUnitFiles = await this.uploadBussinessFiles(applicationNo);
    console.log('uploadBussinessUnitFiles::', uploadBussinessUnitFiles);

    if (this.isFormEdit) {
      const { applicantDetails, addressList, bankList, businessUnitDetails } = this.getLicenseData();

      const { applicantDocumentList: apiDataapplicantDocumentList } = applicantDetails;
      uploadAppliFiles = this.combineArr(apiDataapplicantDocumentList, uploadAppliFiles);

      const { businessUnitDocumentList: apiDatabusinessUnitDocumentList } = businessUnitDetails;
      uploadBussinessUnitFiles = this.combineArr(apiDatabusinessUnitDocumentList, uploadBussinessUnitFiles);

      const { addressDocumentList: apiDataaddressDocumentList } = addressList[2];
      uploadAddressFiles = this.combineArr(apiDataaddressDocumentList, uploadAddressFiles);

      const { bankDocumentList: apiDatabankDocumentList } = bankList[0];
      uploadBankFiles = this.combineArr(apiDatabankDocumentList, uploadBankFiles);
    }

    formValapplicantDet.applicantDocumentList = uploadAppliFiles;
    formValbusinessUnitDet.businessUnitDocumentList = uploadBussinessUnitFiles;
    formValaddressList[2].addressDocumentList = uploadAddressFiles;
    formValbankList[0].bankDocumentList = uploadBankFiles;

    console.log('formValapplicantDet.dob::', formValapplicantDet.dob);
    formValapplicantDet.dob = this.invertDate(formValapplicantDet.dob);

    console.log('formValue::', formValue);

    const payload: any = {
      workFlowName: this.workFlowNameList[this.screenSubType],
      financialYear,
      applicationNumber: applicationNo,
      status: saveType,
      licenseCategory: BOND_WAREHOUSE_LICENSE_CATEGORY,
      licenseCategoryDesc: BOND_WAREHOUSE_LICENSE_CATEGORY_DESC,
      licenseSubCategory: this.screenSubType,
      licenseSubCategoryDesc: this.subCategoryDesc[this.screenSubType],
      applicantDetails: formValapplicantDet,
      addressList: formValaddressList,
      businessUnitDetails: formValbusinessUnitDet,
      bankList: formValbankList,
      paymentProcessingFee
    };

    console.log('payload::', payload);

    const licenseResp: any = await this.validateSer.createLicense(
      payload, saveType, this.commentForm,
      this.sendbackForm, this.officerLevel, this.isFormEdit, this.licenseApplicationData
    );
    if (licenseResp.status) {
      this.toggleLoading(saveType);
      this.alert.showSuccess(licenseResp.msg);
      this.processNavigation(saveType, form, licenseResp.data);
    } else {
      this.alert.showError(licenseResp.msg);
    }

    return true;
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
        this.patchForm();

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

    const appliDetProp = [
      'appli_photo_file', 'appli_aadhar_file',
      'appli_pan_file', 'appli_itr_file'
    ];

    const businessUnitDetProp = [
      'unitLicense_file', 'bwflBondDoc_file', 'powerOfAttorney_file', 'unitAffadavait_file',
      'compFirmPan_file', 'lastYrITR_file', 'uploadGstin_file', 'annualTurnOverCert_file',
      'stateExciseOfficialCert_file', 'declarationCert_file'
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

    form.patchValue({
      financialYear,
      applicationDate: this.invertDate(applicationDate),
      applicantDetails,
      addressList,
      businessUnitDetails,
      bankList
    });

    return true;

  }

  processFormActionReadOnly() {
    if (this.isFormEdit) {
      const { readOnly, showActionFor } = this.licenseCommonSer.isEditFormIsReadOnly(
        this.isCustomer, this.licenseStatus, this.licenseStage, BOND_WAREHOUSE_LICENSE_CATEGORY
      );

      this.createsendbackForm();

      this.isActionBtnFor = showActionFor;
      this.isReadOnly = readOnly;
      if (readOnly) {
        this.getForm().disable();
      }
    } else {
      this.isActionBtnFor = CUSTOMER;
      this.isReadOnly = false;
    }
  }

  getLicenseData(): any {
    const { financialYear, applicationDate, licenseType, addressList, applicantDetails, bankList, businessUnitDetails, status,
      commentList } = this.licenseApplicationData;
    const licenseObj = [];

    this.licenseCommonSer.mergeWith(licenseObj, { addressList, applicantDetails, bankList, businessUnitDetails });

    return {
      financialYear, applicationDate, licenseType, licenseObj,
      addressList, applicantDetails, businessUnitDetails, bankList, status, commentList
    };
  }

  getFileArr(propertyName, idx = null) {
    const { licenseObj } = this.getLicenseData();
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
        previousItrNotFiled: 'nothing'
      },
      addressList: [
        {
          unitName: 'unit_name_1',
          pinCode: 655443,
          policeStationName: 'station_1',
          block: 'appli_block_name' + this.randNum,
          locality: 'appli_locality' + this.randNum,
          street: 'appli_street' + this.randNum,
          village: 'appli_village ' + this.randNum,
          ward: 'appli_ward_' + this.randNum,
        },
        {
          unitName: 'unit_name_2',
          pinCode: 655443,
          policeStationName: 'station_2',
          block: 'shop_block_name' + this.randNum,
          locality: 'shop_locality' + this.randNum,
          street: 'shop_street' + this.randNum,
          village: 'shop_village ' + this.randNum,
          ward: 'shop_ward_' + this.randNum,
        },
        {
          unitName: 'unit_name_3',
          pinCode: 655443,
          policeStationName: 'station_3',
          block: 'shop_block_name' + this.randNum,
          locality: 'shop_locality' + this.randNum,
          street: 'shop_street' + this.randNum,
          village: 'shop_village ' + this.randNum,
          ward: 'shop_ward_' + this.randNum,
        }
      ],
      businessUnitDetails: {
        firmLicenseNumber: '876554435465',
        firmCompanyPanNumber: 'DTVPP0023S',
        previusItrUploadReason: 'nothing',
        anuualTurnOver: 123,
        annualProductionCapacity: 233,
        stateQuantitySupply: 12
      },
      bankList: [
        {
          ifscCode: 'CAN002233',
          accountNumber: '8776877687'
        }
      ]
    };

    this.getForm().patchValue(patchObj);
  }


}
