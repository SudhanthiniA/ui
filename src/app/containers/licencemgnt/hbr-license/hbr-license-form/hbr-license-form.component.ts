import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import {
  LicenseConstants,
  WorkFlowNameListConstants,
  SubCategoryDescConstants
} from '@app/containers/licencemgnt/license.constants';
import {
  AuthService, AlertService, StatemasterService,
  DistrictMasterService, MunicipalityMasterService, VillageMasterService,
  BlockMasterService, TalukMasterService, LicenceManagementService, DropdownConfigService,
  DocumentUploadService, ValidationService
} from '@app/services';
import { LicenseCommonService } from '@appLicMgntShared/license-common.service';

const {
  docuPropObj, FF_APPLI, FF_ATTACHMENTS, FF_BANK, FF_SITE_DOCUMENT, FF_FIRM_COMPANY, FF_PREMISES,
  SEC_ADDR_APPLICANT, SEC_ADDR_PREMISES, APPLI_CODE_HBR,
  PROP_APPLI_DET, PROP_ADDRESS_DET, PROP_BANK_DET, PROP_LICENSE_HBR, PROP_FIRM_COMPANY_DET_HBR, PROP_SITE_DOCUMENT,
  PROP_ATTACHMENT_HBR, PROP_PREMISES_HBR,
  CODE_SALUTATION, CODE_GENDER, CODE_LOCALITYTYPE, CODE_BANK, CODE_ENTITYOFFIRM, CODE_ITR, CODE_OWNERSHIP_TYPE,
  CODE_NUMBER_OF_ROOMS, CODE_DISTRICT_CATEGORY,
  HBR_LICENSE_CATEGORY, HBR_LICENSE_CATEGORY_DESC,
  STATUS_DRAFT, STATUS_SAVE, STATUS_SUBMITTED, STATUS_SENDBACK, STATUS_APPROVED, STATUS_PENDING_SITE_INFO,
  STATUS_SENDBACK_SITE_INFO, COMMENT_SENDBACK, COMMENT_ACTION_REJECTED, COMMENT_SENDBACK_SITE_INFO, MODULE_NAME_CODE,
  COMMENT_ACTION_CLARIFICATION, CUSTOMER,
  LOCALITY_URBAN, LOCALITY_RURAL, LICENSE_URL,
  SCREEN_NAME_MODULE, SCREEN_NAME_HBR, MSG_NO_APPLICATION_NUMBER
} = LicenseConstants;
const { VIEW_LICENSE_STATUS: viewStatusUrl, ACKNOWLEDGEMENT: acknowledgementUrl, PAYMENT: paymentUrl } = LICENSE_URL;

@Component({
  selector: 'app-license-form',
  templateUrl: './hbr-license-form.component.html',
  styleUrls: ['./hbr-license-form.component.scss']
})
export class HbrLicenseFormComponent implements OnInit {

  licenseConsts = LicenseConstants;
  docuPropObj = docuPropObj;
  workFlowNameList = WorkFlowNameListConstants.HBR;
  subCategoryDesc = SubCategoryDescConstants.HBR;

  isCustomer: boolean;
  screenSubType: string;
  applicationNumber: string;
  isFormEdit = false;
  licenseType: string;
  randNum: number;

  financialYear: string;
  processingFee = 200;

  isActionBtnFor = '';
  isReadOnly = false;
  licenseStatus: string;
  licenseStage: string;
  licenseApplicationData: any;
  licenseComments = [];

  HBRForm: FormGroup;
  HBRSiteDetForm: FormGroup;
  commentForm: FormGroup;
  sendbackForm: FormGroup;

  formSubmitted = false;
  siteDetformSub = false;
  commandformSub = false;
  sendformSub = false;
  isDraftLoading = false;
  isSubmitLoading = false;

  stateList: any;
  villageList: any;
  blockList: any;
  municipalityList: any;
  districtsList: any;
  countryList: any;
  districtListByState = {
    [SEC_ADDR_APPLICANT]: [],
    [SEC_ADDR_PREMISES]: []
  };
  talukList = {
    [SEC_ADDR_APPLICANT]: [],
    [SEC_ADDR_PREMISES]: []
  };

  appliAddrLocality = '';
  premisesAddrLocality = '';

  fileArr = {
    [FF_APPLI]: [],
    [FF_ATTACHMENTS]: [],
    [FF_FIRM_COMPANY]: [],
    [FF_BANK]: [],
    [FF_PREMISES]: [],
    [FF_SITE_DOCUMENT]: []
  };

  salutationList: any;
  genderList: any;
  localityTypeList: any;
  bankList: any;
  ITRList: any;
  ownershipList: any;
  entityFirmList: any;
  numberOfRoomList: any;
  districtCategoryList: any;

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
    private municipalityService: MunicipalityMasterService,
    private villageService: VillageMasterService,
    private blockService: BlockMasterService,
    private talukService: TalukMasterService,
    private licenseSer: LicenceManagementService,
    private docUplSer: DocumentUploadService,
    private dropdownConfigSer: DropdownConfigService,
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

  getForm() { return this.HBRForm; }
  getFormCntr(element) { return this.getForm().get(element); }

  getAppliFormCntrInst() { return this.getFormCntr(PROP_APPLI_DET); }
  getAppliFormCntr(element = '') { return (element) ? this.getAppliFormCntrInst().get(element) : this.getAppliFormCntrInst(); }
  getBankFrmCntrInst() { return this.getFormCntr(PROP_BANK_DET); }
  getBankFormCntr(element = '') { return (element) ? this.getBankFrmCntrInst().get('0').get(element) : this.getBankFrmCntrInst().get('0'); }

  getAddressFormCntr() { return this.getFormCntr(PROP_ADDRESS_DET); }
  getAddrCtByIdx(idx) { return this.getAddressFormCntr().get(idx); }
  getAppliAddrFormCntr(element = '') { return (element) ? this.getAddrCtByIdx('0').get(element) : this.getAddrCtByIdx('0'); }
  getPremisesAddrFormCntr(element = '') { return (element) ? this.getAddrCtByIdx('1').get(element) : this.getAddrCtByIdx('1'); }

  getHBRFormCntrInst() { return this.getFormCntr(PROP_LICENSE_HBR); }
  getHBRFormCntr(element = '') { return (element) ? this.getHBRFormCntrInst().get(element) : this.getHBRFormCntrInst(); }

  getFirmCompanyDetFormCntr() { return this.getHBRFormCntr(PROP_FIRM_COMPANY_DET_HBR); }

  // modification by :: SS
  getProdFrmCntrIdxIns(idx) { return (this.getFirmCompanyDetFormCntr() as FormArray).at(idx); }
  getProdFrmCntrIdx(idx, element = '') { return (element) ? this.getProdFrmCntrIdxIns(idx).get(element) : this.getProdFrmCntrIdxIns(idx); }

  getFirmCompanyDetByIdxFormCntr(idx, element = null) {
    const inst = this.getFirmCompanyDetFormCntr().get(idx);
    return (element) ? inst.get(element) : inst;
  }

  addFirmCompanyDetRow() { (this.getFirmCompanyDetFormCntr() as FormArray).push(this.buildCompanyMembersFormGroup()); }
  remFirmCompanyDetRow(idx: number) { (this.getFirmCompanyDetFormCntr() as FormArray).removeAt(idx); }
  getFirmCompanyDetLen(): number { return (this.getFirmCompanyDetFormCntr() as FormArray).length; }

  getAdditionalFormCntr(element = '') {
    const inst = this.getHBRFormCntr(PROP_ATTACHMENT_HBR);
    return (element) ? inst.get(element) : inst;
  }

  getHBRPremisesFormCntr(element = '') {
    const inst = this.getHBRFormCntr(PROP_PREMISES_HBR);
    return (element) ? inst.get(element) : inst;
  }

  getFormCntrl(formCntrl, element) { return formCntrl.get(element); }

  getSiteDetForm() { return this.HBRSiteDetForm; }

  get HBRSiteDetFormControls() { return this.HBRSiteDetForm.controls; }
  get HBRSiteDocumentFormControls() { return (this.HBRSiteDetFormControls[PROP_SITE_DOCUMENT] as FormArray).controls; }

  getSiteDetFormCntr(element) { return this.getSiteDetForm().get(element); }
  getSiteDocumentFormCntr() { return this.getSiteDetFormCntr(PROP_SITE_DOCUMENT); }

   // modified by::ss

  getSitedocCntrIdxIns(idx) { return (this.getSiteDocumentFormCntr() as FormArray).at(idx); }
  getSitedocCntrIdx(idx, element = '') { return (element) ? this.getSitedocCntrIdxIns(idx).get(element) : this.getProdFrmCntrIdxIns(idx); }

  getSiteDocumentByIdxFormCntr(idx, element = null) {
    const inst = this.getSiteDocumentFormCntr().get(idx);
    return (element) ? inst.get(element) : inst;
  }

  addSiteDocumentRow() { (this.getSiteDocumentFormCntr() as FormArray).push(this.buildSiteDocumentFormGroup()); }
  remSiteDocumentRow(idx: number) { (this.getSiteDocumentFormCntr() as FormArray).removeAt(idx); }
  getSiteDocumentLen(): number { return (this.getSiteDocumentFormCntr() as FormArray).length; }

  loadFormControl() {
    this.createForm();
    this.createHBRSiteDetailForm();
    (this.isFormEdit) ? this.loadLicenseData() : this.loadInitialFormData();
    this.createcommentForm();
    this.getWorkFlowConfig();
  }

  createcommentForm(data?: any) { this.commentForm = this.validateSer.buildCommentFormGroup(data); }
  createsendbackForm(data?: any) { this.sendbackForm = this.validateSer.buildSendbackFormGroup(data); }

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
      aadharNumber: ['', this.validateSer.valiForAadhar],
      panNumber: ['', this.validateSer.valiForPan],
      itrAssesmentYearCode: ['', this.validateSer.valiReqOnly],
      previousItrNotFiled: [''],

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

  buildAddressFormGroup(identifier, data?: any) { return this.validateSer.buildAddressFormGroup(identifier, data); }
  buildBankDetFormGroup(data?: any) { return this.validateSer.buildBankDetFormGroup(data); }

  buildCompanyMembersFormGroup(data?: any) {
    const basciEle = {
      aadharNumber: [data ? data.aadharNumber : '', this.validateSer.valiForAadhar],
      address: [data ? data.address : '', this.validateSer.valiReqOnly],
      designation: [data ? data.designation : '', this.validateSer.valiReqOnly],
      fullName: [data ? data.fullName : '', this.validateSer.valiReqOnly],
      mobile: [data ? data.mobile : '', this.validateSer.valiForMob],
      panNumber: [data ? data.panNumber : '', this.validateSer.valiForPan],

      firmcompany_pan_file: data ? [''] : ['', this.validateSer.valiReqOnly],
      firmcompany_pan_file_source: data ? [''] : ['', this.validateSer.valiReqOnly],

      firmcompany_aadhar_file: data ? [''] : ['', this.validateSer.valiReqOnly],
      firmcompany_aadhar_file_source: data ? [''] : ['', this.validateSer.valiReqOnly],

      firmcompany_affadavait_file: data ? [''] : ['', this.validateSer.valiReqOnly],
      firmcompany_affadavait_file_source: data ? [''] : ['', this.validateSer.valiReqOnly],

      firmcompany_character_file: data ? [''] : ['', this.validateSer.valiReqOnly],
      firmcompany_character_file_source: data ? [''] : ['', this.validateSer.valiReqOnly],
    };
    return this.formBuilder.group(basciEle);
  }

  buildAdditionalDetFormGroup(data?: any) {
    const basciEle = {
      companyTan: ['', this.validateSer.valiReqOnly],

      affadavait_file: ['', this.validateSer.valiReqOnly],
      affadavait_file_source: ['', this.validateSer.valiReqOnly],

      boundries_file: ['', this.validateSer.valiReqOnly],
      boundries_file_source: ['', this.validateSer.valiReqOnly],

      layoutPlan_file: ['', this.validateSer.valiReqOnly],
      layoutPlan_file_source: ['', this.validateSer.valiReqOnly],

      certificationOfIncorporation_file: ['', this.validateSer.valiReqOnly],
      certificationOfIncorporation_file_source: ['', this.validateSer.valiReqOnly],

      memorandumOfAssociation_file: ['', this.validateSer.valiReqOnly],
      memorandumOfAssociation_file_source: ['', this.validateSer.valiReqOnly],

      articleOfAssociation_file: ['', this.validateSer.valiReqOnly],
      articleOfAssociation_file_source: ['', this.validateSer.valiReqOnly],

      resolutionOfAuthorization_file: ['', this.validateSer.valiReqOnly],
      resolutionOfAuthorization_file_source: ['', this.validateSer.valiReqOnly],

      TAN_file: ['', this.validateSer.valiReqOnly],
      TAN_file_source: ['', this.validateSer.valiReqOnly],

      certificateOfFirm_file: ['', this.validateSer.valiReqOnly],
      certificateOfFirm_file_source: ['', this.validateSer.valiReqOnly],

      partnershipDeed_file: ['', this.validateSer.valiReqOnly],
      partnershipDeed_file_source: ['', this.validateSer.valiReqOnly],

      listOfDirectors_file: ['', this.validateSer.valiReqOnly],
      listOfDirectors_file_source: ['', this.validateSer.valiReqOnly],

      tradeLicence_file: ['', this.validateSer.valiReqOnly],
      tradeLicence_file_source: ['', this.validateSer.valiReqOnly],

      fireSafteyNoc_file: ['', this.validateSer.valiReqOnly],
      fireSafteyNoc_file_source: ['', this.validateSer.valiReqOnly],

      fssaiCertificate_file: ['', this.validateSer.valiReqOnly],
      fssaiCertificate_file_source: ['', this.validateSer.valiReqOnly],

      certificationOfPremisesUtility_file: ['', this.validateSer.valiReqOnly],
      certificationOfPremisesUtility_file_source: ['', this.validateSer.valiReqOnly],

      lawAndOrder_file: ['', this.validateSer.valiReqOnly],
      lawAndOrder_file_source: ['', this.validateSer.valiReqOnly],

      proofOfParkingPlace_file: ['', this.validateSer.valiReqOnly],
      proofOfParkingPlace_file_source: ['', this.validateSer.valiReqOnly],
    };
    return this.formBuilder.group(basciEle);
  }

  buildPremisesDetFormGroup(data?: any) {
    const basciEle = {
      firmName: ['', this.validateSer.valiReqOnly],
      ownershipTypeCode: [''],
      ownershipTypeDesc: [''],
      numberOfRoomsCode: ['', this.validateSer.valiReqOnly],
      numberOfRoomsDesc: ['', this.validateSer.valiReqOnly],
      districtCategoryCode: ['', this.validateSer.valiReqOnly],
      districtCategoryDesc: ['', this.validateSer.valiReqOnly],

      ownershipDoc_file: [''],
      ownershipDoc_file_source: [''],
    };
    return this.formBuilder.group(basciEle);
  }

  createForm() {
    const basicEle = {
      financialYear: [''],
      applicationDate: [this.applicationDate],
      licenseType: [this.subCategoryDesc[this.screenSubType], Validators.required],

      applicantDetails: this.buildAppliDetFormGroup(),

      bankList: this.formBuilder.array([
        this.buildBankDetFormGroup()
      ]),

      addressList: this.formBuilder.array([
        this.buildAddressFormGroup(SEC_ADDR_APPLICANT),
        this.buildAddressFormGroup(SEC_ADDR_PREMISES)
      ]),

      hbrLicenses: this.formBuilder.group({
        entityFirmCode: ['', this.validateSer.valiReqOnly],
        entityFirmDesc: ['', this.validateSer.valiReqOnly],
        hbrAdditionalDetails: this.buildAdditionalDetFormGroup(),
        hbrPremisesDetails: this.buildPremisesDetFormGroup(),
        hbrFirmCompanyDetailList: this.formBuilder.array([
          this.buildCompanyMembersFormGroup()
        ])
      }),

      paymentProcessingFee: [this.processingFee],
    };

    this.HBRForm = this.formBuilder.group(basicEle);
  }

  buildSiteDocumentFormGroup(data?: any) {
    const basicEle = {
      description: [data ? data.description : '', this.validateSer.valiReqOnly],

      site_photo_file: data ? [''] : ['', this.validateSer.valiReqOnly],
      site_photo_file_source: data ? [''] : ['', this.validateSer.valiReqOnly],
    };
    return this.formBuilder.group(basicEle);
  }

  createHBRSiteDetailForm() {
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

    this.HBRSiteDetForm = this.formBuilder.group(basicEle);
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
    this.getAllBlock();
    this.getAllVillage();
    this.findDropMas(CODE_SALUTATION).subscribe((res) => this.salutationList = res.data ? res.data.downDropDownMasterValueList : []);
    this.findDropMas(CODE_GENDER).subscribe((res) => this.genderList = res.data ? res.data.downDropDownMasterValueList : []);
    this.findDropMas(CODE_LOCALITYTYPE).subscribe((res) => this.localityTypeList = res.data ? res.data.downDropDownMasterValueList : []);
    this.findDropMas(CODE_BANK).subscribe((res) => this.bankList = res.data ? res.data.downDropDownMasterValueList : []);
    this.findDropMas(CODE_ENTITYOFFIRM).subscribe((res) => this.entityFirmList = res.data ? res.data.downDropDownMasterValueList : []);
    this.findDropMas(CODE_ITR).subscribe((res) => this.ITRList = res.data ? res.data.downDropDownMasterValueList : []);
    this.findDropMas(CODE_OWNERSHIP_TYPE).subscribe((res) => this.ownershipList = res.data ? res.data.downDropDownMasterValueList : []);
    this.findDropMas(CODE_NUMBER_OF_ROOMS).subscribe((res) => this.numberOfRoomList = res.data ? res.data.downDropDownMasterValueList : []);
    this.findDropMas(CODE_DISTRICT_CATEGORY).subscribe((res) => this.districtCategoryList = res.data ? res.data.downDropDownMasterValueList : []);
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

  getLicenseData(): any {
    const { financialYear, applicationDate, licenseType, addressList, applicantDetails, bankList, siteDetails,
      hbrLicenses, status, commentList } = this.licenseApplicationData;
    const licenseObj = hbrLicenses ? hbrLicenses : [];
    this.licenseCommonSer.mergeWith(licenseObj, { addressList, applicantDetails, bankList });

    return {
      financialYear, applicationDate, licenseType, licenseObj,
      addressList, applicantDetails, bankList, siteDetails, status, commentList
    };
  }

  patchForm() {

    const {
      financialYear, applicationDate, licenseObj, addressList, applicantDetails, bankList, siteDetails
    } = this.getLicenseData();

    const { entityFirmCode, hbrFirmCompanyDetailList } = licenseObj;

    addressList.forEach(element => {
      this.onStateChange(element.stateCode, element.addressIdentifier);
      this.onDistrictChange(element.districtCode, element.addressIdentifier);
    });

    const appliDetProp = [
      'appli_photo_file', 'appli_aadhar_file',
      'appli_pan_file', 'appli_itr_file'
    ];

    const hbrPremisesDetProp = [
      'ownershipDoc_file'
    ];

    const hbrAdditionalDetailsProp = [
      'affadavait_file', 'boundries_file', 'layoutPlan_file', 'certificationOfIncorporation_file',
      'memorandumOfAssociation_file', 'articleOfAssociation_file', 'resolutionOfAuthorization_file',
      'TAN_file', 'certificateOfFirm_file', 'partnershipDeed_file', 'fireSafteyNoc_file', 'listOfDirectors_file',
      'tradeLicence_file', 'fssaiCertificate_file', 'certificationOfPremisesUtility_file', 'lawAndOrder_file',
      'proofOfParkingPlace_file',
    ];

    const bankDetProp = [
      'cancel_cheque_file'
    ];

    const form = this.HBRForm;
    const appliFormCntr = this.getAppliFormCntr();
    const bankDetControl = this.getBankFormCntr();
    const HBRPremisesControl = this.getHBRPremisesFormCntr();
    const HBRFirmCompanyDetControl = this.getFirmCompanyDetFormCntr();
    const HBRAdditionalControl = this.getAdditionalFormCntr();

    this.unsetValidator(appliFormCntr, appliDetProp);
    this.unsetValidator(bankDetControl, bankDetProp);
    this.unsetValidator(HBRPremisesControl, hbrPremisesDetProp);
    // tslint:disable-next-line: no-string-literal
    // HBRFirmCompanyDetControl['controls'].forEach(( ele, idx ) => {
    //   const formControl = HBRFirmCompanyDetControl['controls'][idx];
    //   console.log('HBRformControl::', formControl);
    //   this.unsetValidator(formControl, hbrFirmCompanyDetailListProp);
    // });
    this.unsetValidator(HBRAdditionalControl, hbrAdditionalDetailsProp);

    console.log('applicantDetails.dob::', applicantDetails.dob);
    applicantDetails.dob = this.invertDate(applicantDetails.dob);
    console.log('aft-applicantDetails.dob::', applicantDetails.dob);

    form.patchValue({
      entityFirmCode,
      financialYear,
      applicationDate: this.invertDate(applicationDate),
      applicantDetails,
      addressList,
      hbrLicenses: licenseObj,
      bankList
    });

    this.remFirmCompanyDetRow(0);
    hbrFirmCompanyDetailList.forEach(element => {
      (this.getFirmCompanyDetFormCntr() as FormArray).push(this.buildCompanyMembersFormGroup(element));
    });

    this.HBRSiteDetForm.patchValue(siteDetails[0]);

    this.remSiteDocumentRow(0);
    siteDetails[0].documentList.forEach(element => {
      (this.getSiteDocumentFormCntr() as FormArray).push(this.buildSiteDocumentFormGroup(element));
    });

    this.setSameAsAboveAddrCheck();

    return true;

  }

  getFileArr(propertyName, idx = null) {
    const { licenseObj } = this.getLicenseData();
    const docProp = this.docuPropObj[propertyName];
    const propObj = licenseObj[propertyName];
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
    console.log('propobj ==>>', propObj);
    return (propObj[propertyName][idx].documentName !== null) ? propObj[propertyName][idx] : false;
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
    console.log('photo event ::size', event.target.files[0].size);
    // console.log('photo event ::sizess',filesize);
    const filesize = event.target.files[0].size;
    const   maxfilesize = 1024 * 1024;  // 1 Mb

    if (filesize < maxfilesize) {
      const formControl = this.getAppliFormCntr();
      const fileUpRes = this.onFileChange(event, sourceName, fileFor, formControl);
      return (fileUpRes) ? this.fileArr[FF_APPLI].push(sourceName) : false;
    } else {
      if (fileFor === this.licenseConsts.FN_APPLI_PHOTO) { this.HBRForm.patchValue({ applicantDetails: {  appli_photo_file: ''} }); }
      if (fileFor === this.licenseConsts.FN_APPLI_AADHAR) { this.HBRForm.patchValue({ applicantDetails: {  appli_aadhar_file: ''} }); }
      if (fileFor === this.licenseConsts.FN_APPLI_PAN) { this.HBRForm.patchValue({ applicantDetails: {  appli_pan_file: ''} }); }
      if (fileFor === this.licenseConsts.FN_APPLI_ITR) { this.HBRForm.patchValue({ applicantDetails: {  appli_itr_file: ''} }); }
      this.alert.showError('Upload Less Then 1MB Size Photo');
    }

  }

  onAttachFileChange(event, sourceName, fileFor) {

    console.log('attachFile event ::size', event.target.files[0].size);
    const filesize = event.target.files[0].size;
    const   maxfilesize = 1024 * 1024;  // 1 Mb

    if (filesize < maxfilesize) {
      const formControl = this.getAdditionalFormCntr();
      const fileUpRes = this.onFileChange(event, sourceName, fileFor, formControl);
      return (fileUpRes) ? this.fileArr[FF_ATTACHMENTS].push(sourceName) : false;
    } else {
      console.log('hbrLicene Form ::', this.HBRForm);
      this.alert.showError('Upload Less Then 1MB Size Photo');
      if (fileFor === this.licenseConsts.FN_ATTACH_AFFADAVAIT) {
      this.HBRForm.get('hbrLicenses').patchValue({ hbrAdditionalDetails: { affadavait_file: '' }}); }
      if (fileFor === this.licenseConsts.FN_ATTACH_BOUNDRY) {
         this.HBRForm.get('hbrLicenses').patchValue({ hbrAdditionalDetails: { boundries_file: '' }}); }
      if (fileFor === this.licenseConsts.FN_ATTACH_LAY_PLAN) {
         this.HBRForm.get('hbrLicenses').patchValue({ hbrAdditionalDetails: { layoutPlan_file: '' }}); }
      if (fileFor === this.licenseConsts.FN_ATTACH_CERT_OF_INCORP) {
        this.HBRForm.get('hbrLicenses').patchValue({ hbrAdditionalDetails: { certificationOfIncorporation_file: '' }}); }
      if (fileFor === this.licenseConsts.FN_ATTACH_MOM_OF_ASSO) {
        this.HBRForm.get('hbrLicenses').patchValue({ hbrAdditionalDetails: { memorandumOfAssociation_file: '' }}); }
      if (fileFor === this.licenseConsts.FN_ATTACH_ART_OF_ASSOC) {
        this.HBRForm.get('hbrLicenses').patchValue({ hbrAdditionalDetails: { articleOfAssociation_file: '' }}); }
      if (fileFor === this.licenseConsts.FN_ATTACH_TAN) {
        this.HBRForm.get('hbrLicenses').patchValue({ hbrAdditionalDetails: { TAN_file: '' }}); }
      if (fileFor === this.licenseConsts.FN_ATTACH_CERT_OF_FIRM) {
        this.HBRForm.get('hbrLicenses').patchValue({ hbrAdditionalDetails: { certificateOfFirm_file: '' }}); }
      if (fileFor === this.licenseConsts.FN_ATTACH_PARTNERSHIPDEED) {
         this.HBRForm.get('hbrLicenses').patchValue({ hbrAdditionalDetails: { partnershipDeed_file: '' }}); }
      if (fileFor === this.licenseConsts.FN_ATTACH_FIRESAFTEYNOC) {
        this.HBRForm.get('hbrLicenses').patchValue({ hbrAdditionalDetails: { fireSafteyNoc_file: '' }}); }
      if (fileFor === this.licenseConsts.FN_ATTACH_LISTOFDIRECTORS) {
        this.HBRForm.get('hbrLicenses').patchValue({ hbrAdditionalDetails: { listOfDirectors_file: '' }}); }
      if (fileFor === this.licenseConsts.FN_ATTACH_TRADELICENCE) {
        this.HBRForm.get('hbrLicenses').patchValue({ hbrAdditionalDetails: { tradeLicence_file: '' }}); }
      if (fileFor === this.licenseConsts.FN_ATTACH_FSSAI_CERT) {
        this.HBRForm.get('hbrLicenses').patchValue({ hbrAdditionalDetails: { fssaiCertificate_file: '' }}); }
      if (fileFor === this.licenseConsts.FN_ATTACH_CERT_OF_PREMISESUTILITY) {
         this.HBRForm.get('hbrLicenses').patchValue({ hbrAdditionalDetails: { certificationOfPremisesUtility_file: '' }}); }
      if (fileFor === this.licenseConsts.FN_ATTACH_LAWANDORDER) {
        this.HBRForm.get('hbrLicenses').patchValue({ hbrAdditionalDetails: { lawAndOrder_file: '' }}); }
      if (fileFor === this.licenseConsts.FN_ATTACH_PROOFOFPARKINGPLACE) {
        this.HBRForm.get('hbrLicenses').patchValue({ hbrAdditionalDetails: { proofOfParkingPlace_file: '' }}); }
    }

  }

  onBankFileChange(event, sourceName, fileFor) {

    console.log('attachFile event ::size', event.target.files[0].size);
    const filesize = event.target.files[0].size;
    const  maxfilesize = 1024 * 1024;  // 1 Mb

    if (filesize < maxfilesize) {
      const formControl = this.getBankFormCntr();
      const fileUpRes = this.onFileChange(event, sourceName, fileFor, formControl);
      return (fileUpRes) ? this.fileArr[FF_BANK].push(sourceName) : false;
    } else {
      console.log('hbrLicene Form ::', this.HBRForm);
      this.alert.showError('Upload Less Then 1MB Size Photo');
      const controlls = this.HBRForm.get('bankList') as FormArray;
      if (fileFor === this.licenseConsts.FN_BK_CAN_CHEQUE) {
        controlls.controls.forEach((element: any) => { element.get('cancel_cheque_file').patchValue(''); }); }
    }
  }

  onFirmCompanyFileChange(event, idx, firmcompanyCntrl, sourceName, fileFor) {
    const secName = FF_FIRM_COMPANY;
    const  filesize = event.target.files[0].size;
    const   maxfilesize = 1024 * 1024;  // 1 Mb
    if (filesize < maxfilesize) {
      const fileUpRes = this.onFileChange(event, sourceName, fileFor, firmcompanyCntrl);
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
      console.log('hbrLicene Form ::', this.HBRForm);
      this.alert.showError('Upload Less Then 1MB Size Photo');
      const listOfBoadmembers = this.HBRForm.get('hbrLicenses') as FormGroup;
      const controlls = listOfBoadmembers.get('hbrFirmCompanyDetailList') as FormArray;
      if (fileFor === this.licenseConsts.FN_SM_AADHAR) {
       controlls.controls.forEach((element: any) => { element.get('firmcompany_aadhar_file').patchValue(''); }); }
      if (fileFor === this.licenseConsts.FN_SM_PAN) {
        controlls.controls.forEach((element: any) => { element.get('firmcompany_pan_file').patchValue(''); }); }
      if (fileFor === this.licenseConsts.FN_SM_AFFADAVAIT) {
        controlls.controls.forEach((element: any) => { element.get('firmcompany_affadavait_file').patchValue(''); }); }
      if (fileFor === this.licenseConsts.FN_SM_CHARAC_CERT) {
         controlls.controls.forEach((element: any) => { element.get('firmcompany_character_file').patchValue(''); }); }
    }

  }

  onPremisesFileChange(event, sourceName, fileFor) {

    console.log('photo event ::size', event.target.files[0].size);
    const filesize = event.target.files[0].size ;
    const  maxfilesize = 1024 * 1024 ; // 1 Mb

    if (filesize < maxfilesize) {
      const formControl = this.getHBRPremisesFormCntr();
      const fileUpRes = this.onFileChange(event, sourceName, fileFor, formControl);
      return (fileUpRes) ? this.fileArr[FF_PREMISES].push(sourceName) : false;
    } else {
      console.log('hbrLicene Form ::', this.HBRForm);
      this.alert.showError('Upload Less Then 1MB Size Photo');
      if (fileFor === this.licenseConsts.FN_HBR_PREM_OWNERSHIIP_DOC) {
        this.HBRForm.get('hbrLicenses').patchValue({
          hbrPremisesDetails: {
            ownershipDoc_file: ''
          }
        });
      }
    }

  }

  onSiteDocumentFileChange(event, idx, siteDocumentCntrl, sourceName, fileFor) {
    const secName = FF_SITE_DOCUMENT;
    const filesize = event.target.files[0].size;
    const  maxfilesize = 1024 * 1024;  // 1 Mb
    if (filesize < maxfilesize) {
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
      console.log('hbrLicene Form ::', this.HBRForm);
      this.alert.showError('Upload Less Then 1MB Size Photo');
      const controlls = this.HBRSiteDetForm.get('documentList') as FormArray;
      if (fileFor === this.licenseConsts.FN_SITE_PHOTO) {
        controlls.controls.forEach((element: any) => { element.get('site_photo_file').patchValue(''); }); }
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

  getFinancialYr() {
    this.licenseSer.findFinancialYear().subscribe((res) => {
      this.financialYear = res ? res.financialYear : '';
      this.getForm().patchValue({ financialYear: this.financialYear });
    });
  }

  getAllStates() { this.stateSer.getState().subscribe((respData: any) => this.stateList = respData.data ); }
  getAllVillage() { this.villageService.getAllVillages().subscribe((respData: any) => this.villageList = respData.data ); }
  getAllBlock() { this.blockService.getAllBlocks().subscribe((respData: any) => this.blockList = respData.data ); }
  getAllMunicipal() { this.municipalityService.getMunicipality().subscribe((respData: any) => this.municipalityList = respData.data ); }

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
    console.log('formContrl', formContrl);
    return formContrl;
  }

  onStateChange(stateId, key) {
    this.getAddrFormCntl(key).patchValue({ districtCode: '', tahsilCode: '' });
    this.getDistrictsByStateid(stateId, key);
  }
  getDistrictsByStateid(stateId, key) { this.districtSer.getDistrictsByStateid(stateId).subscribe(
    (resp: any) => this.districtListByState[key] = resp.data ); }
  onDistrictChange(id, key) {
    this.getAddrFormCntl(key).patchValue({ tahsilCode: '' });
    this.loadTalukByDist(id, key);
  }
  loadTalukByDist(id, key) { this.talukService.gettalukByDistId(id).subscribe((respData: any) => this.talukList[key] = respData.data ); }
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
  onFirmTypeChange(code) { this.patchMasVal(this.entityFirmList, code, this.getHBRFormCntr(), 'entityFirmDesc'); }
  onOwnershipTypeChange(code) { this.patchMasVal(this.ownershipList, code, this.getHBRPremisesFormCntr(), 'ownershipTypeDesc'); }
  onBankChange(code) { this.patchMasVal(this.bankList, code, this.getBankFormCntr(), 'bankName'); }
  onNumberOfRoomChange(code) { this.patchMasVal(this.numberOfRoomList, code, this.getHBRPremisesFormCntr(), 'numberOfRoomsDesc'); }
  onDistrictCategoryChange(code) { this.patchMasVal(this.districtCategoryList, code, this.getHBRPremisesFormCntr(), 'districtCategoryDesc'); }

  processFormActionReadOnly() {
    if (this.isFormEdit) {
      const { readOnly, showActionFor } = this.licenseCommonSer.isEditFormIsReadOnly(
        this.isCustomer, this.licenseStatus, this.licenseStage, HBR_LICENSE_CATEGORY
      );

      this.createsendbackForm();

      this.isActionBtnFor = showActionFor;
      this.isReadOnly = readOnly;
      if (this.isReadOnly) {
        this.HBRForm.disable();
        this.HBRSiteDetForm.disable();
      }
    } else {
      this.isActionBtnFor = CUSTOMER;
      this.isReadOnly = false;
    }
  }

  async getApplicationNo() {

    if (this.isFormEdit) {
      return this.licenseApplicationData.applicationNumber;
    } else {
      const { content: applicationNumber } = await this.licenseSer.getApplicationNo(APPLI_CODE_HBR);
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
    formData.append('screenName', SCREEN_NAME_HBR);
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

  async uploadAttachFiles(applicationNo) {
    const files = this.fileArr[FF_ATTACHMENTS];
    const formCntrl = this.getAdditionalFormCntr();
    if (files.length === 0) {
      return [];
    }

    return await this.createFormData(applicationNo, files, formCntrl);
  }

  async uploadPremisesFiles(applicationNo) {
    const files = this.fileArr[FF_PREMISES];
    const formCntrl = this.getHBRPremisesFormCntr();
    if (files.length === 0) {
      return [];
    }

    return await this.createFormData(applicationNo, files, formCntrl);
  }

  async uploadFirmCompanyFiles(applicationNo) {
    const files = this.fileArr[FF_FIRM_COMPANY];
    const allUpRes = [];

    if (files.length === 0) {
      return [];
    }

    for (let idx = 0; idx < files.length; idx++) {
      // tslint:disable-next-line: no-string-literal
      const formCntrl = this.getFirmCompanyDetFormCntr()['controls'][idx];
      const fileArr = files[idx];
      console.log('formCntrl::', formCntrl);
      console.log('fileArr::', fileArr);
      const upRes = await this.createFormData(applicationNo, fileArr, formCntrl);
      allUpRes.push(upRes);
    }
    return allUpRes;
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
    this.toggleLoading(saveType);
    this.formSubmitted = false;
    const form = this.HBRForm;
    console.log('this.HBRForm.valid::', form.valid);
    console.log('this.HBRForm.value::', form.value);
    console.log('this.HBRForm::', form);

    const { addressList: befformValaddressList } = form.value;
    befformValaddressList.forEach(element => this.mapAddress(element, this.getAddrFormCntl(element.addressIdentifier)));

    if (saveType !== STATUS_DRAFT && form.valid === false) {
      this.formSubmitted = true;
      // Modified by :: SS
      this.siteDetformSub = true;
      this.toggleLoading(saveType);
      return false;
    }

    const formValue = form.value;
    const {
      financialYear,
      paymentProcessingFee,
      applicantDetails: formValapplicantDet,
      addressList: formValaddressList,
      bankList: formValbankList,
      hbrLicenses: formValhbrLicenses,
    } = form.value;

    const {
      hbrPremisesDetails: formValhbrPremisesDet,
      hbrAdditionalDetails: formValhbrAdditionalDet,
      hbrFirmCompanyDetailList: formValhbrFirmCompanyDetailList,
    } = formValhbrLicenses;

    const appliDetProp = [
      'appli_photo_file', 'appli_photo_file_source', 'appli_aadhar_file', 'appli_aadhar_file_source',
      'appli_pan_file', 'appli_pan_file_source', 'appli_itr_file', 'appli_itr_file_source'
    ];

    const bankDetProp = [
      'cancel_cheque_file', 'cancel_cheque_file_source'
    ];

    const hbrPremisesDetProp = [
      'ownershipDoc_file', 'ownershipDoc_file_source'
    ];

    const hbrFirmCompanyDetailListProp = [
      'firmcompany_pan_file', 'firmcompany_pan_file_source', 'firmcompany_aadhar_file', 'firmcompany_aadhar_file_source',
      'firmcompany_affadavait_file', 'firmcompany_affadavait_file_source', 'firmcompany_character_file',
      'firmcompany_character_file_source',
    ];

    const hbrAdditionalDetailsProp = [
      'affadavait_file', 'affadavait_file_source', 'boundries_file', 'boundries_file_source', 'layoutPlan_file',
      'layoutPlan_file_source', 'certificationOfIncorporation_file', 'certificationOfIncorporation_file_source',
      'memorandumOfAssociation_file', 'memorandumOfAssociation_file_source', 'articleOfAssociation_file',
      'articleOfAssociation_file_source', 'resolutionOfAuthorization_file', 'resolutionOfAuthorization_file_source',
      'TAN_file', 'TAN_file_source', 'certificateOfFirm_file', 'certificateOfFirm_file_source', 'partnershipDeed_file',
      'partnershipDeed_file_source', 'fireSafteyNoc_file', 'fireSafteyNoc_file_source', 'listOfDirectors_file',
      'listOfDirectors_file_source', 'tradeLicence_file', 'tradeLicence_file_source', 'fssaiCertificate_file',
      'fssaiCertificate_file_source', 'certificationOfPremisesUtility_file', 'certificationOfPremisesUtility_file_source',
      'lawAndOrder_file', 'lawAndOrder_file_source', 'proofOfParkingPlace_file', 'proofOfParkingPlace_file_source'
    ];

    appliDetProp.forEach((ele) => delete formValapplicantDet[ele]);
    bankDetProp.forEach((ele) => delete formValbankList[0][ele]);
    hbrPremisesDetProp.forEach((ele) => delete formValhbrPremisesDet[ele]);
    hbrFirmCompanyDetailListProp.forEach((ele) => formValhbrFirmCompanyDetailList.forEach((firmcompanyEle) => delete firmcompanyEle[ele]));
    hbrAdditionalDetailsProp.forEach((ele) => delete formValhbrAdditionalDet[ele]);

    let uploadAppliFiles;
    let uploadBankFiles;
    let uploadAttachmentFiles;
    let uploadPremisesFiles;
    let uploadFirmCompanyFiles;

    const applicationNo = await this.getApplicationNo();
    uploadAppliFiles = await this.uploadAppliFiles(applicationNo);
    console.log('uploadAppliFiles::', uploadAppliFiles);
    uploadBankFiles = await this.uploadBankFiles(applicationNo);
    console.log('uploadBankFiles::', uploadBankFiles);
    uploadAttachmentFiles = await this.uploadAttachFiles(applicationNo);
    console.log('uploadAttachmentFiles::', uploadAttachmentFiles);
    uploadPremisesFiles = await this.uploadPremisesFiles(applicationNo);
    console.log('uploadPremisesFiles::', uploadPremisesFiles);
    uploadFirmCompanyFiles = await this.uploadFirmCompanyFiles(applicationNo);

    if (this.isFormEdit) {
      const {
        licenseObj, applicantDetails, bankList
      } = this.getLicenseData();

      const { applicantDocumentList: apiDataapplicantDocumentList } = applicantDetails;
      uploadAppliFiles = this.combineArr(apiDataapplicantDocumentList, uploadAppliFiles);

      const { bankDocumentList: apiDatabankDocumentList } = bankList[0];
      uploadBankFiles = this.combineArr(apiDatabankDocumentList, uploadBankFiles);

      const {
        hbrFirmCompanyDetailList: apiDatahbrFirmCompanyDetailList,
        hbrPremisesDetails: apiDatahbrPremisesDetails,
        hbrAdditionalDetails: apiDatahbrAdditionalDetails
      } = licenseObj;

      const { additionalDocumentList: apiDataHBRadditionalDocumentList } = apiDatahbrAdditionalDetails;
      uploadAttachmentFiles = this.combineArr(apiDataHBRadditionalDocumentList, uploadAttachmentFiles);

      const { premisesDocumentList: apiDataHBRpremisesDocumentList } = apiDatahbrPremisesDetails;
      uploadPremisesFiles = this.combineArr(apiDataHBRpremisesDocumentList, uploadPremisesFiles);

      if (apiDatahbrFirmCompanyDetailList.length > 0) {
        let fileInst;
        let prevFiles;
        console.log('apiDatahbrFirmCompanyDetailList::');
        apiDatahbrFirmCompanyDetailList.forEach((ele, ind) => {
          prevFiles = ele.firmCompanyDocumentList;
          console.log('prevFiles::', prevFiles);
          fileInst = uploadFirmCompanyFiles[ind];
          console.log('fileInst::', fileInst);
          uploadFirmCompanyFiles[ind] = this.combineArr(prevFiles, (fileInst) ? fileInst : []);
        });
      }
    }

    formValapplicantDet.applicantDocumentList = uploadAppliFiles;
    formValbankList[0].bankDocumentList = uploadBankFiles;
    formValhbrAdditionalDet.additionalDocumentList = uploadAttachmentFiles;
    formValhbrPremisesDet.premisesDocumentList = uploadPremisesFiles;
    formValhbrFirmCompanyDetailList.forEach((ele, ind) => {
      const updateFileArr = uploadFirmCompanyFiles[ind];
      console.log('updateFileArr::', updateFileArr);
      ele.firmCompanyDocumentList = uploadFirmCompanyFiles[ind];
    });

    formValapplicantDet.dob = this.invertDate(formValapplicantDet.dob);

    console.log('formValue::', formValue);

    const payload: any = {
      workFlowName: this.workFlowNameList[this.screenSubType],
      financialYear,
      applicationNumber: applicationNo,
      status: saveType,
      licenseCategory: HBR_LICENSE_CATEGORY,
      licenseCategoryDesc: HBR_LICENSE_CATEGORY_DESC,
      licenseSubCategory: this.screenSubType,
      licenseSubCategoryDesc: this.subCategoryDesc[this.screenSubType],
      applicantDetails: formValapplicantDet,
      addressList: formValaddressList,
      bankList: formValbankList,
      hbrLicenses: formValhbrLicenses,
      paymentProcessingFee
    };
    // console.log('payload::', payload);
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

    // if (saveType !== STATUS_DRAFT && commentForm.valid === false) {
    //   this.commandformSub = true;
    //   return false;
    // }

    switch (saveType) {
      case STATUS_DRAFT:
      case STATUS_SAVE:
      case STATUS_SENDBACK:
        payload.event = '';
        payload.level = '';
        break;
      default:
        payload.event = saveType;
        payload.level = this.officerLevel;
        break;
    }


    const { comments } = commentForm.value;
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

  async processNavigation(saveType, form, respContent, siteRespContent) {
    const { applicationNumber, isProcessingFeePaid } = respContent;
    if (this.isCustomer) {
      if (saveType === STATUS_DRAFT) {
        this.licenseApplicationData = respContent;
        this.licenseApplicationData['siteDetails'].push(siteRespContent);
        this.isFormEdit = true;
      }

      if (saveType === STATUS_SAVE || saveType === STATUS_SENDBACK) {
        form.reset();
        const { isProcessingFeeRequired }: any = this.workFlowConfig;
        const routeUrl = ((isProcessingFeePaid) ? acknowledgementUrl :
          ((isProcessingFeeRequired) ? paymentUrl : acknowledgementUrl));
        this.router.navigate([routeUrl + applicationNumber]);
      }
    } else {
      this.router.navigate([viewStatusUrl]);
    }
    return;
  }

  async addLicenseSiteDet(saveType, applicationNo) {
    this.siteDetformSub = false;
    const form = this.HBRSiteDetForm;
    console.log('this.HBRSiteDetForm.valid::', form.valid);
    console.log('this.HBRSiteDetForm.value::', form.value);
    console.log('this.HBRSiteDetForm::', form);

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
      licenseCategory: HBR_LICENSE_CATEGORY,
      licenseSubCategory: this.screenSubType,
      isCustomer: this.isCustomer,
      ...formValue
    };
    console.log('addLicenseSiteDet-payload::', payload);

    let status = false;
    let data = {};
    const saveUpdateSiteDetailsRes: any = await this.licenseSer.saveUpdateSiteDetails(payload);
    const { responseCode: respCode, responseMessage: respMsg, content: respContent } = saveUpdateSiteDetailsRes;
    if (respCode === 200) {
      this.alert.showSuccess(respMsg);
      status = true;
      data = respContent;
    } else {
      this.alert.showError(respMsg);
    }

    return { status, data };
  }

  // dummy future it will remove -> start here
  loadDummyFormData() {
    this.HBRForm.patchValue({
      entityFirmCode: 1,
      licenseNumber: 'HBR001',
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
      bankList: [
        {
          ifscCode: 'CAN002233',
          accountNumber: '8776877687'
        }
      ],
      hbrLicenses: {
        hbrAdditionalDetails: {
          companyTAN: '9887988798' + this.randNum,
        },
        hbrPremisesDetails: {
          firmName: 'sadf' + this.randNum,
        },
        hbrFirmCompanyDetailList: [
          {
            aadharNumber: '9887766554' + this.randNum,
            address: 'test_address' + this.randNum,
            designation: 'designation_name' + this.randNum,
            fullName: 'full_name' + this.randNum,
            mobile: '98879887' + this.randNum,
            panNumber: 'DTVPP22' + this.randNum + 'Z',
          }
        ]
      }
    });
  }


  alphanumericOnly(event) {

    const inp = String.fromCharCode(event.keyCode);
    if (/[a-zA-Z0-9]/.test(inp)) {
      return true;
    } else {
      event.preventDefault();
      return false;
    }
  }

}
