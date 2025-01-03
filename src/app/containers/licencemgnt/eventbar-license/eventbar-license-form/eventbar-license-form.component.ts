import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import {
  AuthService, AlertService, StatemasterService, DistrictMasterService, TalukMasterService,
  MunicipalityMasterService, LicenceManagementService, DocumentUploadService, DropdownConfigService,
  ValidationService,
} from '@app/services';
import { LicenseConstants } from '@app/containers/licencemgnt/license.constants';
import { LicenseCommonService } from '@appLicMgntShared/license-common.service';

const {
  docuPropObj, FF_APPLI, FF_BANK, FF_BUSS_UNIT, FF_ADDRESS, FF_ATTACHMENTS,
  SEC_ADDR_APPLICANT, SEC_ADDR_VENUE,
  PROP_APPLI_DET, PROP_ADDRESS_DET, PROP_BANK_DET, PROP_LICENSE_EVENT_BAR, PROP_PRODUCT_LIST,
  CODE_SALUTATION, CODE_GENDER, CODE_LOCALITYTYPE, CODE_BANK, CODE_ENTITYOFFIRM, CODE_ITR, CODE_OWNERSHIP_TYPE,
  CODE_RETAIL_SHOP, CODE_EVENT_TYPE, CODE_EVENT_HOLDER,
  LOCALITY_URBAN, LOCALITY_RURAL, APPLI_CODE_EVENT_BAR,
  STATUS_DRAFT, STATUS_SAVE, STATUS_SUBMITTED, STATUS_SENDBACK, STATUS_APPROVED,
  MODULE_NAME_CODE, CUSTOMER,
  COMMENT_SENDBACK, COMMENT_ACTION_REJECTED, COMMENT_SENDBACK_SITE_INFO,
  STR_LEVEL_ONE, EVENT_INITIATE, MSG_NO_APPLICATION_NUMBER,
  SCREEN_NAME_MODULE, SCREEN_NAME_EVENT_BAR,
  EVENT_BAR_LICENSE_CATEGORY, EVENT_BAR_LICENSE_CATEGORY_DESC, LICENSE_URL,
  EVENT_BAR_FL11_SUBCATEGORY, EVENT_BAR_FL11_SUBCATEGORY_DESC, EVENT_BAR_FL11_WORKFLOW_NAME
} = LicenseConstants;
const { VIEW_LICENSE_STATUS: viewStatusUrl, ACKNOWLEDGEMENT: acknowledgementUrl, PAYMENT: paymentUrl } = LICENSE_URL;

@Component({
  selector: 'app-eventbar-license-form',
  templateUrl: './eventbar-license-form.component.html',
  styleUrls: ['./eventbar-license-form.component.scss']
})
export class EventbarLicenseFormComponent implements OnInit {

  licConsts = LicenseConstants;
  docuPropObj = docuPropObj;

  fileArr = {
    [FF_APPLI]: [],
    [FF_ADDRESS]: [],
    [FF_ATTACHMENTS]: [],
    [FF_BANK]: [],
    [FF_BUSS_UNIT]: []
  };

  subCategoryDesc = {
    [EVENT_BAR_FL11_SUBCATEGORY]: EVENT_BAR_FL11_SUBCATEGORY_DESC
  };

  workFlowNameList = {
    [EVENT_BAR_FL11_SUBCATEGORY]: EVENT_BAR_FL11_WORKFLOW_NAME
  };

  salutationList: any;
  genderList: any;
  localityTypeList: any;
  bankList: any;
  ITRList: any;
  ownershipList: any;
  entityFirmList: any;
  retailShopsList: any;
  eventTypeList: any;
  eventOwnerList: any;

  stateList: any;
  districtsList: any;
  countryList: any;
  districtListByState = {
    [SEC_ADDR_APPLICANT]: [],
    [SEC_ADDR_VENUE]: []
  };
  talukList = {
    [SEC_ADDR_APPLICANT]: [],
    [SEC_ADDR_VENUE]: []
  };
  municipalityList: any;

  appliAddrLocality = '';
  premisesAddrLocality = '';

  eventbarForm: FormGroup;
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
  randStr: string;

  workFlowConfig: object;
  officerLevel: string;
  isRejected: boolean;
  isSendBack: boolean;
  sendBackList: any;

  applicationDate = this.licenseCommonSer.applicationDate;
  maxDOBDate = this.licenseCommonSer.maxDOBDate;
  minDOBDate = this.licenseCommonSer.minDOBDate;

  constructor(
    private stateSer: StatemasterService,
    private districtSer: DistrictMasterService,
    private dropdownConfigSer: DropdownConfigService,
    private talukSer: TalukMasterService,
    private municipSer: MunicipalityMasterService,
    private formBuilder: FormBuilder,
    private router: Router,
    private route: ActivatedRoute,
    private alert: AlertService,
    private docUplSer: DocumentUploadService,
    private authService: AuthService,
    private licenseSer: LicenceManagementService,
    private validateSer: ValidationService,
    private licenseCommonSer: LicenseCommonService,
  ) { }

  async ngOnInit() {
    this.isCustomer = this.authService.isCustomer();
    this.randNum = this.licenseCommonSer.randomNum(10, 99);
    this.randStr = this.licenseCommonSer.randomStr();
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

  getForm() { return this.eventbarForm; }
  getFormCntr(element) { return this.getForm().get(element); }
  getFormCntrl(formCntrl, element) { return formCntrl.get(element); }

  getAppliFormCntrInst() { return this.getFormCntr(PROP_APPLI_DET); }
  getAppliFormCntr(element = '') { return (element) ? this.getAppliFormCntrInst().get(element) : this.getAppliFormCntrInst(); }
  getBankFrmCntrInst() { return this.getFormCntr(PROP_BANK_DET); }
  getBankFormCntr(element = '') { return (element) ? this.getBankFrmCntrInst().get('0').get(element) : this.getBankFrmCntrInst().get('0'); }

  getAddressFormCntr() { return this.getFormCntr(PROP_ADDRESS_DET); }
  getAddrCtByIdx(idx) { return this.getAddressFormCntr().get(idx); }
  getAppliAddrFormCntr(element = '') { return (element) ? this.getAddrCtByIdx('0').get(element) : this.getAddrCtByIdx('0'); }
  getPremisesAddrFormCntr(element = '') { return (element) ? this.getAddrCtByIdx('1').get(element) : this.getAddrCtByIdx('1'); }

  getAttachFormCntrInst() { return this.getFormCntr(PROP_LICENSE_EVENT_BAR); }
  getAttachFormCntr(element = '') { return (element) ? this.getAttachFormCntrInst().get(element) : this.getAttachFormCntrInst(); }

  getProdFrmCntrInst() { return this.getFormCntr(PROP_LICENSE_EVENT_BAR).get(PROP_PRODUCT_LIST); }
  getProdFrmCntr(element = '') { return (element) ? this.getProdFrmCntrInst().get(element) : this.getProdFrmCntrInst(); }
  getProdFrmCntrIdxIns(idx) { return (this.getProdFrmCntr() as FormArray).at(idx); }
  getProdFrmCntrIdx(idx, element = '') { return (element) ? this.getProdFrmCntrIdxIns(idx).get(element) : this.getProdFrmCntrIdxIns(idx); }

  addProductRow() {
    if (!this.getProdFrmCntr().valid) {
      this.alert.showError('Plesae fill all mandatory fields product details');
      return;
    }
    (this.getProdFrmCntr() as FormArray).push(this.buildProductDetFormGroup());
  }

  remProductRow(idx: number) { (this.getProdFrmCntr() as FormArray).removeAt(idx); }
  getProductLen(): number { return (this.getProdFrmCntr() as FormArray).length; }

  loadFormControl() {
    this.createEventbarFormGrp();
    (this.isFormEdit) ? this.loadLicenseData() : this.loadInitialFormData();
    this.createcommentForm();
    this.getWorkFlowConfig();
  }

  loadInitialFormData() {
    this.getFinancialYr();
    this.commonDatas();
    this.processFormActionReadOnly();
  }

  findDropMas(code) { return this.dropdownConfigSer.findDropDownMaster(code); }

  commonDatas() {
    this.getAllStates();
    this.getAllMunicipal();

    this.findDropMas(CODE_SALUTATION).subscribe((res) => this.salutationList = res.data ? res.data.downDropDownMasterValueList : []);
    this.findDropMas(CODE_GENDER).subscribe((res) => this.genderList = res.data ? res.data.downDropDownMasterValueList : []);
    this.findDropMas(CODE_LOCALITYTYPE).subscribe((res) => this.localityTypeList = res.data ? res.data.downDropDownMasterValueList : []);
    this.findDropMas(CODE_BANK).subscribe((res) => this.bankList = res.data ? res.data.downDropDownMasterValueList : []);
    this.findDropMas(CODE_ENTITYOFFIRM).subscribe((res) => this.entityFirmList = res.data ? res.data.downDropDownMasterValueList : []);
    this.findDropMas(CODE_ITR).subscribe((res) => this.ITRList = res.data ? res.data.downDropDownMasterValueList : []);
    this.findDropMas(CODE_OWNERSHIP_TYPE).subscribe((res) => this.ownershipList = res.data ? res.data.downDropDownMasterValueList : []);
    this.findDropMas(CODE_RETAIL_SHOP).subscribe((res) => this.retailShopsList = res.data ? res.data.downDropDownMasterValueList : []);
    this.findDropMas(CODE_EVENT_TYPE).subscribe((res) => this.eventTypeList = res.data ? res.data.downDropDownMasterValueList : []);
    this.findDropMas(CODE_EVENT_HOLDER).subscribe((res) => this.eventOwnerList = res.data ? res.data.downDropDownMasterValueList : []);
  }

  buildAppliDetFormGroup(data?: any) {
    const basicEle = {
      salutationCode: ['', this.validateSer.valiReqOnly],
      salutationDesc: ['', this.validateSer.valiReqOnly],
      firstName: ['', this.validateSer.valiForName],
      middleName: [''],
      lastName: ['', this.validateSer.valiForName],
      mobileNumber: ['', this.validateSer.valiForMob],
      emailId: ['', this.validateSer.valiForEmail],
      genderCode: ['', this.validateSer.valiReqOnly],
      dob: ['', this.validateSer.valiReqOnly],

      appli_photo_file: ['', this.validateSer.valiReqOnly],
      appli_photo_file_source: ['', this.validateSer.valiReqOnly],
    };
    switch (this.screenSubType) {
      case EVENT_BAR_FL11_SUBCATEGORY:
        this.licenseCommonSer.mergeWith(basicEle, {
          aadharNumber: ['', this.validateSer.valiReqOnly],
          panNumber: ['', this.validateSer.valiForPan],
          itrAssesmentYearCode: ['', this.validateSer.valiReqOnly],
          previousItrNotFiled: ['', this.validateSer.valiReqOnly],

          appli_aadhar_file: ['', this.validateSer.valiReqOnly],
          appli_aadhar_file_source: ['', this.validateSer.valiReqOnly],

          appli_pan_file: ['', this.validateSer.valiReqOnly],
          appli_pan_file_source: ['', this.validateSer.valiReqOnly],
        });
        break;
    }
    return this.formBuilder.group(basicEle);
  }

  buildEventBarLicensesDetFormgroup(data?: any) {
    const basciEle = {
      applicationNumber: [''],
      requiredForCode: ['', this.validateSer.valiReqOnly],
      requiredForDesc: [''],
      organizationName: ['', this.validateSer.valiReqOnly],
      eventType: ['', this.validateSer.valiReqOnly],
      eventDate: ['', this.validateSer.valiReqOnly],
      eventStartTime: ['', this.validateSer.valiReqOnly],
      eventEndTime: ['', this.validateSer.valiReqOnly],
      eventParticipantCount: ['', this.validateSer.valiReqOnly], // *
      approxBottleConsumptionCount: ['', this.validateSer.valiReqOnly],
      shopCityCode: ['', this.validateSer.valiReqOnly],
      shopCityDesc: [''],
      sellerName: ['', this.validateSer.valiReqOnly],
      sellerMobileNumber: ['', this.validateSer.valiReqOnly],
      productList: this.formBuilder.array([
        this.buildProductDetFormGroup()
      ]),
    };
    return this.formBuilder.group(basciEle);
  }

  buildProductDetFormGroup(data?: any) {
    const basicEle = {
      brandName: [data ? data.brandName : '', this.validateSer.valiReqOnly],
      category: [data ? data.category : '', this.validateSer.valiReqOnly],
      price: [data ? data.price : '', this.validateSer.valiReqOnly],
      quatity: [data ? data.quatity : '', this.validateSer.valiReqOnly]
    };
    return this.formBuilder.group(basicEle);
  }

  buildAddressFormGroup(identifier, data?: any) { return this.validateSer.buildAddressFormGroup(identifier, data); }
  buildBankDetFormGroup(data?: any) { return this.validateSer.buildBankDetFormGroup(data); }

  createcommentForm(data?: any) { this.commentForm = this.validateSer.buildCommentFormGroup(data); }
  createsendbackForm(data?: any) { this.sendbackForm = this.validateSer.buildSendbackFormGroup(data); }

  createEventbarFormGrp() {
    const basicEle = {
      financialYear: [''],
      dateOfApplication: [this.applicationDate],
      licenseType: [this.subCategoryDesc[this.screenSubType], Validators.required],

      applicantDetails: this.buildAppliDetFormGroup(),
      eventBarLicenses: this.buildEventBarLicensesDetFormgroup(),
      bankList: this.formBuilder.array([
        this.buildBankDetFormGroup()
      ]),

      paymentProcessingFee: [this.processingFee],
    };
    switch (this.screenSubType) {
      case EVENT_BAR_FL11_SUBCATEGORY:
        this.licenseCommonSer.mergeWith(basicEle, {
          addressList: this.formBuilder.array([
            this.buildAddressFormGroup(SEC_ADDR_APPLICANT),
            this.buildAddressFormGroup(SEC_ADDR_VENUE),
          ])
        });
        break;
    }
    this.eventbarForm = this.formBuilder.group(basicEle);
  }

  getFinancialYr() { this.licenseSer.findFinancialYear().subscribe(
    (res) => res ? this.getForm().patchValue({ financialYear: res.financialYear }) : '' ); }

  getAllStates() { this.stateSer.getState().subscribe((responceData: any) => { this.stateList = responceData.data; }); }
  getAllMunicipal() { this.municipSer.getMunicipality().subscribe((respData: any) => this.municipalityList = respData.data); }

  getAddrFormCntl(key) {
    let formContrl;
    switch (key) {
      case SEC_ADDR_APPLICANT:
        formContrl = this.getAppliAddrFormCntr();
        break;
      case SEC_ADDR_VENUE:
        formContrl = this.getPremisesAddrFormCntr();
        break;
    }
    return formContrl;
  }

  onStateChange(stateId, key) {
    this.getAddrFormCntl(key).patchValue({ districtCode: '', tahsilCode: '' });
    this.getDistByStateid(stateId, key);
  }
  getDistByStateid(stateId, key) { this.districtSer.getDistrictsByStateid(stateId).subscribe(
    (resp: any) => this.districtListByState[key] = resp.data); }

  onDistrictChange(districtId, key) {
    this.getAddrFormCntl(key).patchValue({ tahsilCode: '' });
    this.loadTalukByDist(districtId, key);
  }
  loadTalukByDist(districtId, key) { this.talukSer.gettalukByDistId(districtId).subscribe((resp: any) => this.talukList[key] = resp.data); }
  onTalukChange(talukId, key) {
    const tahsilObj = this.talukList[key].find((resp: any) => resp.id === Number(talukId));
    this.getAddrFormCntl(key).patchValue({ tahsilDesc: tahsilObj ? tahsilObj.talukName : '' });
  }

  onLocalityChange(localityType, type) {
    // const { value: localityType } = $event.target;
    let formContrl;
    switch (type) {
      case SEC_ADDR_APPLICANT:
        formContrl = this.getAppliAddrFormCntr();
        this.appliAddrLocality = (localityType === LOCALITY_URBAN) ? LOCALITY_URBAN :
          ((localityType === LOCALITY_RURAL) ? LOCALITY_RURAL : '');
        break;
      case SEC_ADDR_VENUE:
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
  onRequiredForChange(code) { this.patchMasVal(this.eventOwnerList, code, this.getAttachFormCntr(), 'requiredForDesc'); }
  onShopCityChange(code) { this.patchMasVal(this.retailShopsList, code, this.getAttachFormCntr(), 'shopCityDesc'); }
  onGenderChange(code) { this.patchMasVal(this.genderList, code, this.getAppliFormCntr(), 'genderDesc'); }
  onITRChange(code) { this.patchMasVal(this.ITRList, code, this.getAppliFormCntr(), 'itrAssesmentYearDesc'); }
  onBankChange(code) { this.patchMasVal(this.bankList, code, this.getBankFormCntr(), 'bankName'); }

  onCheckboxChange(checkStatus) {
    console.log('checkStatus::', checkStatus);
    if (checkStatus) {
      const formVal = this.eventbarForm.value;
      const addressObj = formVal.addressList[0];
      // Modified By :: SS
      const localityType  = addressObj.localityType;
      this.onLocalityChange(localityType, SEC_ADDR_VENUE);

      this.onStateChange(addressObj.stateCode, SEC_ADDR_VENUE);
      this.onDistrictChange(addressObj.districtCode, SEC_ADDR_VENUE);
      this.onTalukChange(addressObj.tahsilCode, SEC_ADDR_VENUE);
      this.getPremisesAddrFormCntr().patchValue(addressObj);
      this.getPremisesAddrFormCntr().patchValue({ addressIdentifier: SEC_ADDR_VENUE });
      console.log('formVal.addressList::', formVal.addressList);
    } else {
      this.getPremisesAddrFormCntr().reset();
    }
  }

  onAppliFileChange(event, sourceName, fileFor) {

    console.log('fileFor ::',fileFor);
    console.log('photo event ::size',event.target.files[0].size);
    // console.log('photo event ::sizess',filesize);
    let filesize = event.target.files[0].size
    let  maxfilesize = 1024 * 1024  // 1 Mb

    if(filesize < maxfilesize){
        const formControl = this.getAppliFormCntr();
        const fileUpRes = this.onFileChange(event, sourceName, fileFor, formControl);
        return (fileUpRes) ? this.fileArr[FF_APPLI].push(sourceName) : false;
      }else{
        if(fileFor === this.licConsts.FN_APPLI_PHOTO){ this.eventbarForm.patchValue({ applicantDetails:{  appli_photo_file:""} })}
        if(fileFor === this.licConsts.FN_APPLI_AADHAR){ this.eventbarForm.patchValue({ applicantDetails:{  appli_aadhar_file:""} })}
        if(fileFor === this.licConsts.FN_APPLI_PAN){ this.eventbarForm.patchValue({ applicantDetails:{  appli_pan_file:""} })}

        this.alert.showError('Upload Less Then 1MB Size Photo');
      }

  }

  onBankFileChange(event, sourceName, fileFor) {
    console.log('fileFor ::',fileFor);

    let filesize = event.target.files[0].size
    let  maxfilesize = 1024 * 1024  // 1 Mb

    if(filesize < maxfilesize){
      const formControl = this.getBankFormCntr();
      const fileUpRes = this.onFileChange(event, sourceName, fileFor, formControl);
      return (fileUpRes) ? this.fileArr[FF_BANK].push(sourceName) : false;
    }else{
      console.log('event Form ::',this.eventbarForm);
      this.alert.showError('Upload Less Then 1MB Size Photo');
      let controlls = this.eventbarForm.get('bankList') as FormArray;
      if(fileFor === this.licConsts.FN_BK_CAN_CHEQUE){
        controlls.controls.forEach((element: any) => {
          element.get('cancel_cheque_file').patchValue('');
        });
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
      const { content: applicationNumber } = await this.licenseSer.getApplicationNo(APPLI_CODE_EVENT_BAR);
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
    formData.append('screenName', SCREEN_NAME_EVENT_BAR);
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

  onSubmit(saveType) {
    switch (this.screenSubType) {
      case EVENT_BAR_FL11_SUBCATEGORY:
        this.addLicense(saveType);
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

  async addLicense(saveType) {
    this.toggleLoading(saveType);
    this.formSubmitted = false;
    const form = this.eventbarForm;
    console.log('this.eventbarForm.valid::', form.valid);
    console.log('this.eventbarForm.value::', form.value);
    console.log('this.eventbarForm::', form);

    const { addressList: befformValaddressList } = form.value;
    befformValaddressList.forEach(element => this.mapAddress(element, this.getAddrFormCntl(element.addressIdentifier)));

    if (saveType !== STATUS_DRAFT && form.valid === false) {
      this.formSubmitted = true;
      this.toggleLoading(saveType);
      return false;
    }

    const formValue = form.value;

    const {
      financialYear, applicationDate,
      paymentProcessingFee,
      applicantDetails: formValapplicantDet,
      addressList: formValaddressList,
      eventBarLicenses: formValeventBarLicenses,
      bankList: formValbankList
    } = formValue;

    const formValeventBarAddiDet = formValeventBarLicenses;

    console.log('formValue::', formValue);
    console.log('this.fileArr::', this.fileArr);

    const appliDetProp = [
      'appli_photo_file', 'appli_photo_file_source', 'appli_aadhar_file', 'appli_aadhar_file_source',
      'appli_pan_file', 'appli_pan_file_source'
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
      const { licenseObj, addressList, applicantDetails, bankList } = this.getLicenseData();

      const { applicantDocumentList: apiDataapplicantDocumentList } = applicantDetails;
      uploadAppliFiles = this.combineArr(apiDataapplicantDocumentList, uploadAppliFiles);

      const { bankDocumentList: apiDatabankDocumentList } = bankList[0];
      uploadBankFiles = this.combineArr(apiDatabankDocumentList, uploadBankFiles);
    }

    formValapplicantDet.applicantDocumentList = uploadAppliFiles;
    formValbankList[0].bankDocumentList = uploadBankFiles;

    console.log('formValapplicantDet.dob::', formValapplicantDet.dob);
    formValapplicantDet.dob = this.invertDate(formValapplicantDet.dob);
    formValeventBarAddiDet.eventDate = this.invertDate(formValeventBarAddiDet.eventDate);
    formValeventBarAddiDet.applicationNumber = applicationNo;

    console.log('formValue::', formValue);
    // return false;

    const payload: any = {
      financialYear,
      applicationNumber: applicationNo,
      status: saveType,
      licenseCategory: EVENT_BAR_LICENSE_CATEGORY,
      licenseCategoryDesc: EVENT_BAR_LICENSE_CATEGORY_DESC,
      licenseSubCategory: this.screenSubType,
      licenseSubCategoryDesc: this.subCategoryDesc[this.screenSubType],
      applicantDetails: formValapplicantDet,
      addressList: formValaddressList,
      bankList: formValbankList,
      eventBarLicenses: formValeventBarLicenses,
      paymentProcessingFee
    };

    console.log('payload::', payload);

    this.toggleLoading(saveType);
    await this.createLicense(payload, form, saveType);

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

    const licenseCreationRes: any = await this.licenseSer.createLicense(payload);
    const { responseCode: respCode, responseMessage: respMsg, content: respContent } = licenseCreationRes;
    if (respCode === 200) {
      this.alert.showSuccess(respMsg);
      if (this.isCustomer) {
        const { applicationNumber, isProcessingFeePaid, isLicenseFeePaid } = respContent;
        if (saveType === STATUS_DRAFT) {
          this.licenseApplicationData = respContent;
          this.isFormEdit = true;
        }

        if (saveType === STATUS_SAVE || saveType === STATUS_SENDBACK) {
          form.reset();
          // const { isProcessingFeeRequired }: any = this.workFlowConfig;
          // const routeUrl = ((isProcessingFeePaid) ? acknowledgementUrl : ((isProcessingFeeRequired) ? paymentUrl : acknowledgementUrl));
          const { isLicenseFeeRequired }: any = this.workFlowConfig;
          const routeUrl = ((isLicenseFeePaid) ? acknowledgementUrl : ((isLicenseFeeRequired) ? paymentUrl : acknowledgementUrl));
          this.router.navigate([routeUrl + applicationNumber]);
        }
      } else {
        this.router.navigate([viewStatusUrl]);
      }
    } else {
      this.alert.showError(respMsg);
    }

  }

  async getFinalPayload(payload, saveType) {

    const commentForm = this.commentForm;
    const sendbackForm = this.sendbackForm;

    const { comments } = commentForm.value;

    if (saveType === STATUS_SENDBACK && commentForm.valid === false) {
      this.commandformSub = true;
      return false;
    }

    switch (saveType) {
      case STATUS_DRAFT:
      case STATUS_SAVE:
        payload.event = '';
        payload.level = '';
        break;
      case STATUS_SUBMITTED:
        payload.event = EVENT_INITIATE;
        payload.level = STR_LEVEL_ONE;
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

  onReset() {
    this.eventbarForm.reset();
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
      console.log('resp::', resp);
      const { responseCode: respCode, content: respContent } = resp;
      if (respCode === 200) {
        this.licenseApplicationData = respContent;

        this.commonDatas();
        this.eventbarForm.patchValue({ financialYear: this.licenseApplicationData.financialYear });
        switch (this.screenSubType) {
          case EVENT_BAR_FL11_SUBCATEGORY:
            this.patchForm();
            break;
        }

        const { status, commentList } = this.getLicenseData();
        this.isSendBack = (status === STATUS_SENDBACK) ? true : false;
        this.licenseComments = commentList.filter( (res) => this.licenseCommonSer.customerCommentFilter(res) );
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
      applicationDate, licenseObj, addressList, applicantDetails, bankList
    } = this.getLicenseData();

    console.log('licenseObj::', licenseObj);

    const { productList } = licenseObj;

    addressList.forEach(element => {
      console.log('element::', element);
      this.onStateChange(element.stateCode, element.addressIdentifier);
      this.onDistrictChange(element.districtCode, element.addressIdentifier);
    });

    const appliDetProp = [
      'appli_photo_file', 'appli_aadhar_file', 'appli_pan_file'
    ];

    const addressDetProp = [
      'boundries_file'
    ];

    const bankDetProp = [
      'cancel_cheque_file'
    ];

    const form = this.eventbarForm;
    const appliFormCntr = this.getAppliFormCntr();
    const premisesAddrFormCntr = this.getPremisesAddrFormCntr();
    const bankDetControl = this.getBankFormCntr();

    this.unsetValidator(appliFormCntr, appliDetProp);
    this.unsetValidator(premisesAddrFormCntr, addressDetProp);
    this.unsetValidator(bankDetControl, bankDetProp);

    console.log('applicantDetails.dob::', applicantDetails.dob);
    applicantDetails.dob = this.invertDate(applicantDetails.dob);
    console.log('aft-applicantDetails.dob::', applicantDetails.dob);

    licenseObj.eventDate = this.invertDate(licenseObj.eventDate);

    form.patchValue({
      applicationDate: this.invertDate(applicationDate),
      applicantDetails,
      addressList,
      eventBarLicenses: licenseObj,
      bankList
    });

    this.remProductRow(0);
    productList.forEach(element => {
      (this.getProdFrmCntr() as FormArray).push(this.buildProductDetFormGroup(element));
    });

    return true;
  }

  processFormActionReadOnly() {
    if (this.isFormEdit) {
      const { readOnly, showActionFor } = this.licenseCommonSer.isEditFormIsReadOnly(
        this.isCustomer, this.licenseStatus, this.licenseStage, EVENT_BAR_LICENSE_CATEGORY
      );

      this.createsendbackForm();

      this.isActionBtnFor = showActionFor;
      this.isReadOnly = readOnly;
      if (readOnly) {
        this.eventbarForm.disable();
      }
    } else {
      this.isActionBtnFor = CUSTOMER;
      this.isReadOnly = false;
    }
  }

  getLicenseData(): any {
    const { applicationDate, licenseType, addressList, applicantDetails, bankList,
      eventBarLicenses, status, commentList } = this.licenseApplicationData;
    const licenseObj = eventBarLicenses ? eventBarLicenses : [];
    this.licenseCommonSer.mergeWith(licenseObj, { addressList, applicantDetails, bankList });

    return { applicationDate, licenseType, licenseObj, addressList, applicantDetails, bankList, status, commentList };
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
    console.log(this.eventbarForm.value);
    const patchObj = {
      applicantDetails: {
        salutationCode: 'MR',
        salutationDesc: 'Mr.',
        aadharNumber: '9887766554' + this.randNum,
        genderCode: 'MALE',
        genderDesc: 'Male',
        dob: this.invertDate('01-01-1985'),
        emailId: 'test_user' + this.randNum + '@gmail.com',
        firstName: 'test' + this.randStr,
        lastName: 'last' + this.randStr,
        middleName: 'mid' + this.randStr,
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
      bankList: [
        {
          ifscCode: 'CAN002233',
          accountNumber: '8776877687',
          branchName: 'Test branch'
        }
      ],
      eventBarLicenses: {
        organizationName: 'test org',
        eventParticipantCount: '10',
        approxBottleConsumptionCount: '20',
        sellerName: 'test name',
        sellerMobileNumber: '9874563210'
      }
    };
    console.log(this.eventbarForm.value);
    this.eventbarForm.patchValue(patchObj);
  }

}
