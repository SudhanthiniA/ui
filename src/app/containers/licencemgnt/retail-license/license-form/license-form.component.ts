import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { formatDate } from '@angular/common';
import {
  AuthService,
  AlertService,
  StatemasterService,
  DistrictMasterService,
  MunicipalityMasterService,
  VillageMasterService,
  BlockMasterService,
  TalukMasterService,
  LicenceManagementService,
  DocumentUploadService,
  CountrymasterService
} from '@app/services';
import * as moment from 'moment';
import * as fileSaver from 'file-saver';
import * as _ from 'lodash';

@Component({
  selector: 'app-license-form',
  templateUrl: './license-form.component.html',
  styleUrls: ['./license-form.component.scss']
})
export class LicenseFormComponent implements OnInit {

  public readonly SCREEN_FOR_FL4A = 'fl4a';
  public readonly SCREEN_FOR_FL4C = 'fl4c';
  public readonly SCREEN_FOR_FL5B = 'fl5b';
  public readonly SCREEN_FOR_CL5C = 'cl5c';
  public readonly SCREEN_FOR_FL5D = 'fl5d';
  public readonly SCREEN_FOR_FL9 = 'fl9';
  public readonly SCREEN_FOR_FL9A = 'fl9a';
  public readonly SCREEN_FOR_HM1 = 'hm1';

  public readonly CUSTOMER = 'customer';
  public readonly OFFICER = 'officer';
  public readonly STATUS_DRAFT = 'DRAFT';
  public readonly STATUS_SUBMITTED = 'SUBMITTED';
  public readonly STATUS_APPROVED = 'APPROVED';
  public readonly STATUS_REJECTED = 'REJECTED';
  public readonly STATUS_SENDBACK = 'SENDBACK';

  public readonly LIC_TYPE_FL4A = 'FL4A';
  public readonly LIC_TYPE_FL4C = 'FL4C';
  public readonly LIC_TYPE_FL5B = 'FL5B';
  public readonly LIC_TYPE_CL5C = 'CL5C';
  public readonly LIC_TYPE_FL5D = 'FL5D';
  public readonly LIC_TYPE_FL9 = 'FL9';
  public readonly LIC_TYPE_FL9A = 'FL9A';
  public readonly LIC_TYPE_HM1 = 'HM1';

  public readonly SEC_ADDR_APPLICANT = 'applicant_address';
  public readonly SEC_ADDR_SHOP = 'shop_address';
  public readonly SEC_ADDR_PREM = 'premises_address';

  public readonly LOCA_FOR_UNIT = 'unit_office';
  public readonly LOCA_FOR_ADDR = 'address';

  // FF : FileFor
  // FN : File Name
  // SRC : Source File Name

  public readonly FF_APPLI = 'ApplicantFiles'; // FileFor Applicant
  public readonly FF_ATTACHMENTS = 'Attachments'; // FileFor Attachments
  public readonly FF_SALESMAN = 'SalesmanFiles'; // FileFor Salesman section
  public readonly FF_BANK = 'BankFiles'; // FileFor Salesman section

  public readonly FN_APPLI_PHOTO = 'Photo of Applicant';
  public readonly FN_APPLI_AADHAR = 'Applicant Aadhar';
  public readonly FN_APPLI_PAN = 'Applicant Pan';
  public readonly FN_APPLI_ITR = 'Applicant ITR';
  public readonly FN_APPLI_CHARACTER_CERT = 'Applicant Character Certificate';

  public readonly SRC_APPLI_PHOTO = 'appli_photo_file_source';
  public readonly SRC_APPLI_AADHAR = 'appli_aadhar_file_source';
  public readonly SRC_APPLI_PAN = 'appli_pan_file_source';
  public readonly SRC_APPLI_ITR = 'appli_itr_file_source';
  public readonly SRC_APPLI_CHARACTER_CERT = 'appli_charct_cert_file_source';

  public readonly FN_ATTACH_LAYOUT = 'Layout File';
  public readonly FN_ATTACH_SOLVENCYCERT = 'Solvency Certificate';
  public readonly FN_ATTACH_FIRESAFTY = 'Fire Safty';
  public readonly FN_ATTACH_AFFADAVAIT = 'Affadavait';
  public readonly FN_ATTACH_GSTIN = 'GSTIN File';
  public readonly FN_ATTACH_FSSAI = 'FSSAI File';
  public readonly FN_ATTACH_NO_OF_PREM = 'No of premises';
  public readonly FN_ATTACH_CERT_OF_POLLU = 'Certificate of Pollution Control';

  public readonly SRC_ATTACH_LAYOUT = 'layoutPlan_file_source';
  public readonly SRC_ATTACH_SOLVENCYCERT = 'solvencyCertByAuth_file_source';
  public readonly SRC_ATTACH_FIRESAFTY = 'fireSafety_file_source';
  public readonly SRC_ATTACH_AFFADAVAIT = 'affadavait_file_source';
  public readonly SRC_ATTACH_GSTIN = 'uploadGstin_file_source';
  public readonly SRC_ATTACH_FSSAI = 'fssaiCert_file_source';
  public readonly SRC_ATTACH_NO_OF_PREM = 'noOfPrem_file_source';
  public readonly SRC_ATTACH_CERT_OF_POLLU = 'certOfPollutionControl_file_source';

  public readonly FN_SM_PHOTO = 'Salesman Photo';
  public readonly FN_SM_AADHAR = 'Salesman Aadhar';
  public readonly FN_SM_AFFADAVAIT = 'Salesman Affadavait';
  public readonly FN_SM_CHARAC_CERT = 'Salesman Character Certificate';

  public readonly SRC_SM_PHOTO = 'salesman_photo_file_source';
  public readonly SRC_SM_AADHAR = 'salesman_aadhar_file_source';
  public readonly SRC_SM_AFFADAVAIT = 'salesman_affadavait_file_source';
  public readonly SRC_SM_CHARAC_CERT = 'salesman_character_file_source';

  public readonly FN_BK_CAN_CHEQUE = 'Cancel Cheque';
  public readonly SRC_BK_CAN_CHEQUE = 'cancel_cheque_file_source';

  public readonly FN_PREM_LAYOUT = 'Premises Layout';
  public readonly FN_NOC_BY_DEFENSE = 'NOC By Defense';
  public readonly SRC_PREM_LAYOUT = 'premisesLayoutPlan_file_source';
  public readonly SRC_NOC_BY_DEFENSE = 'nocByDefense_file_source';

  tempName = 'Applicant - Application for License ';
  screenObj = {
    [this.SCREEN_FOR_FL4A]: this.tempName + ' F.L 4A',
    [this.SCREEN_FOR_FL4C]: this.tempName + ' F.L 4C',
    [this.SCREEN_FOR_FL5B]: this.tempName + ' F.L 5B',
    [this.SCREEN_FOR_CL5C]: this.tempName + ' C.L 5C',
    [this.SCREEN_FOR_FL5D]: this.tempName + ' F.L 5D',
    [this.SCREEN_FOR_FL9]: 'Application for License F.L - 9',
    [this.SCREEN_FOR_FL9A]: 'Application for License F.L - 9A',
    [this.SCREEN_FOR_HM1]: this.tempName + ' H.M - 1',
  };

  isCustomer: boolean;
  screenSubType: string;
  applicationNumber: string;
  isFormEdit = false;
  licenseType: string;
  randNum: number;

  isActionBtnFor = '';
  isReadOnly = false;
  licenseStatus: string;
  licenseStage: string;
  licenseApplicationData: any;
  licenseComments = [];

  retailForm: FormGroup;
  retailFL9And9AForm: FormGroup;
  retailHM1Form: FormGroup;
  commentForm: FormGroup;
  sendbackForm: FormGroup;
  startDate = new Date();
  startDateFormated: any;

  formSubmitted = false;
  commandformSub = false;

  stateList: any;
  villageList: any;
  blockList: any;
  municipalityList: any;
  districtsList: any;
  countryList: any;
  districtListByState = {
    [this.SEC_ADDR_APPLICANT]: [],
    [this.SEC_ADDR_SHOP]: [],
    [this.SEC_ADDR_PREM]: [],
  };
  talukList = {
    [this.SEC_ADDR_APPLICANT]: [],
    [this.SEC_ADDR_SHOP]: [],
    [this.SEC_ADDR_PREM]: [],
  };

  fileArr = {
    [this.FF_APPLI]: [],
    [this.FF_ATTACHMENTS]: [],
    [this.FF_SALESMAN]: [],
    [this.FF_BANK]: [],
  };

  unitOfcLocalityType = '';
  addrLocalityType = '';

  unitOfcDistrictListByState: any;
  addressDetDistrictListByState: any;

  addressDetStateData: any;
  unitOfcStateData: any;

  unitOfcDistrictData: any;
  addressDetDistrictData: any;

  unitOfctalukList: any;
  addressDettalukList: any;

  officerLevel: string;
  isRejected: boolean;
  isSendBack: boolean;
  sendBackList: any;

  urbanKey = 'Urban';
  ruralKey = 'Rural';
  urbanRuralArr = [
    { key: this.urbanKey, value: this.urbanKey },
    { key: this.ruralKey, value: this.ruralKey }
  ];

  screenSubTypes = {
    [this.SCREEN_FOR_FL4A]: this.LIC_TYPE_FL4A,
    [this.SCREEN_FOR_FL4C]: this.LIC_TYPE_FL4C,
    [this.SCREEN_FOR_FL5B]: this.LIC_TYPE_FL5B,
    [this.SCREEN_FOR_CL5C]: this.LIC_TYPE_CL5C,
    [this.SCREEN_FOR_FL5D]: this.LIC_TYPE_FL5D,
    [this.SCREEN_FOR_FL9]: this.LIC_TYPE_FL9,
    [this.SCREEN_FOR_FL9A]: this.LIC_TYPE_FL9A,
    [this.SCREEN_FOR_HM1]: this.LIC_TYPE_HM1,
  };

  shopTypeList = [
    { id: 1, name: 'CL2' },
    { id: 2, name: 'FL2' }
  ];

  salutationList = [
    { id: 1, name: 'Dr' },
    { id: 2, name: 'Mr' },
    { id: 3, name: 'Mrs' },
    { id: 4, name: 'Miss' }
  ];

  genderList = [
    { id: 1, name: 'Male' },
    { id: 2, name: 'Female' }
  ];

  policeStationList = [
    { id: 1, name: 'Gomtinagar' }
  ];

  bankList = [
    { id: 1, name: 'Canara Bank' },
    { id: 2, name: 'State Bank' }
  ];

  formCtrlReqVali = ['', [Validators.required]];

  public readonly PROP_RET_APPLI_DET = 'retailApplicantDetails';
  public readonly PROP_RET_ADDITONAL_DET = 'retailAdditionalDetails';
  public readonly PROP_RET_SALESMAN_DET = 'salesManDetailList';
  public readonly PROP_RET_BANK_DET = 'bankList';
  docuPropObj = {
    retailApplicantDetails: 'applicantDocumentList',
    retailAdditionalDetails: 'additionalDocumentList',
    salesManDetailList: 'salesManDocumentList',
    bankList: 'bankDocumentList',
  };

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private formBuilder: FormBuilder,
    private alert: AlertService,
    private stateSer: StatemasterService,
    private districtSer: DistrictMasterService,
    private municipalityService: MunicipalityMasterService,
    private villageService: VillageMasterService,
    private blockService: BlockMasterService,
    private talukService: TalukMasterService,
    private licenseSer: LicenceManagementService,
    private docUplSer: DocumentUploadService,
    private authService: AuthService
  ) { }

  ngOnInit() {
    this.isCustomer = this.authService.isCustomer();
    this.randNum = this.randomIntFromInterval(1, 100);
    this.startDateFormated = moment(this.startDate).format('YYYY-MM-DD');
    this.route.params.subscribe(params => {
      if (params.screenSubType) {
        this.screenSubType = params.screenSubType;

        this.licenseType = this.screenSubTypes[this.screenSubType];
      }
      if (params.applicationNumber) {
        this.applicationNumber = params.applicationNumber;
        this.isFormEdit = true;
      }
    });
    this.loadFormControl();
  }

  get_FL_4a_4c_5b_CL_5C_Val() {
    return (this.screenSubType === this.SCREEN_FOR_FL4A ||
      this.screenSubType === this.SCREEN_FOR_FL4C ||
      this.screenSubType === this.SCREEN_FOR_FL5B ||
      this.screenSubType === this.SCREEN_FOR_CL5C ||
      this.screenSubType === this.SCREEN_FOR_FL5D ) ? this.screenSubType : '';
  }

  get_FL_9_9A_Val() {
    return (this.screenSubType === this.SCREEN_FOR_FL9 ||
      this.screenSubType === this.SCREEN_FOR_FL9A ) ? this.screenSubType : '';
  }

  getForm() {
    let form;
    switch (this.screenSubType) {
      case this.SCREEN_FOR_FL4A:
      case this.SCREEN_FOR_FL4C:
      case this.SCREEN_FOR_FL5B:
      case this.SCREEN_FOR_CL5C:
      case this.SCREEN_FOR_FL5D:
        form = this.retailForm;
        break;
      case this.SCREEN_FOR_FL9:
      case this.SCREEN_FOR_FL9A:
        form = this.retailFL9And9AForm;
        break;
      case this.SCREEN_FOR_HM1:
        form = this.retailHM1Form;
        break;
    }
    return form;
  }

  getFormCntr(element) {
    return this.getForm().get(element);
  }

  getAppliFormCntr(element) {
    return this.getFormCntr('retailApplicantDetails').get(element);
  }

  getAppliAddrFormCntr(element) {
    return this.getFormCntr('addressList').get('0').get(element);
  }

  getShopAddrFormCntr(element) {
    return this.getFormCntr('addressList').get('1').get(element);
  }

  getPremAddrFormCntr(element) {
    return this.getFormCntr('addressList').get('0').get(element);
  }

  getAdditionalFormCntr(element) {
    return this.getFormCntr('retailAdditionalDetails').get(element);
  }

  getSalemanFormCntr() {
    return this.getFormCntr('salesManDetailList');
  }

  getFormCntrl( formCntrl, element ) {
    return formCntrl.get(element);
  }

  getBankDetFormCntr(element) {
    return this.getFormCntr('bankList').get('0').get(element);
  }

  randomIntFromInterval(min, max) { // min and max included 
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  loadFormControl() {
    switch (this.screenSubType) {
      case this.SCREEN_FOR_FL4A:
      case this.SCREEN_FOR_FL4C:
      case this.SCREEN_FOR_FL5B:
      case this.SCREEN_FOR_CL5C:
      case this.SCREEN_FOR_FL5D:
        this.createRetailForm();
        break;
      case this.SCREEN_FOR_FL9:
      case this.SCREEN_FOR_FL9A:
        this.createRetailFL9_9AForm();
        break;
      case this.SCREEN_FOR_HM1:
        this.createRetailHM1Form();
        break;
    }
    (this.isFormEdit) ? this.loadLicenseData() : this.loadInitialFormData();
    this.createcommentForm();
  }

  createcommentForm() {
    this.commentForm = this.formBuilder.group({
      comments: ['', Validators.required],
    });
  }

  createsendbackForm() {
    this.sendbackForm = this.formBuilder.group({
      sendback: ['', Validators.required],
    });
  }

  buildAddressFormGroup(identifier, data?: any) {
    return this.formBuilder.group({
      addressIdentifier: [identifier],
      districtCode: this.formCtrlReqVali,
      block: this.formCtrlReqVali,
      country: [data ? data.country : 'INDIA', Validators.required],
      locality: this.formCtrlReqVali,
      localityType: this.formCtrlReqVali,
      municipalAreaCode: [data ? data.municipalAreaCode : ''],
      pinCode: this.formCtrlReqVali,
      policeStationCode: this.formCtrlReqVali,
      stateCode: this.formCtrlReqVali,
      street: this.formCtrlReqVali,
      tahsilCode: this.formCtrlReqVali,
      village: [data ? data.village : ''],
      ward: [data ? data.ward : '']
    });
  }

  buildBankDetFormGroup(data?: any) {
    return this.formBuilder.group({
      ifscCode: this.formCtrlReqVali,
      bankNameCode: this.formCtrlReqVali,
      bankBranch: this.formCtrlReqVali,
      accountNumber: this.formCtrlReqVali,

      cancel_cheque_file: this.formCtrlReqVali,
      cancel_cheque_file_source: this.formCtrlReqVali,
    });
  }

  addSalemanRow() {
    (this.getSalemanFormCntr() as FormArray).push(this.buildSaleManFormGroup());
  }

  remSalemanRow(idx: number) {
    (this.getSalemanFormCntr() as FormArray).removeAt(idx);
  }

  getSalemanLen(): number {
    return (this.getSalemanFormCntr() as FormArray).length;
  }

  buildSaleManFormGroup(data?: any) {
    return this.formBuilder.group({
      aadharNumber: [data ? data.aadharNumber : '', [Validators.required] ],
      address: [data ? data.address : '', [Validators.required] ],
      dob: [data ? data.dob : '', [Validators.required]],
      fatherName: [data ? data.fatherName : '', [Validators.required]],
      fullName: [data ? data.fullName : '', [Validators.required]],
      genderCode: [data ? data.genderCode : '', [Validators.required]],
      identificationMark: [data ? data.identificationMark : '', [Validators.required]],
      mobileNumber: [data ? data.mobileNumber : '', [Validators.required]],
      previouslyWorkedShop: [data ? data.previouslyWorkedShop : '', [Validators.required]],

      salesman_photo_file: data ? [''] : this.formCtrlReqVali,
      salesman_photo_file_source: data ? [''] : this.formCtrlReqVali,

      salesman_aadhar_file: data ? [''] : this.formCtrlReqVali,
      salesman_aadhar_file_source: data ? [''] : this.formCtrlReqVali,

      salesman_affadavait_file: data ? [''] : this.formCtrlReqVali,
      salesman_affadavait_file_source: data ? [''] : this.formCtrlReqVali,

      salesman_character_file: data ? [''] : this.formCtrlReqVali,
      salesman_character_file_source: data ? [''] : this.formCtrlReqVali,
    });
  }

  buildRetailApplicantDetailsFormGroup(data?: any) {
    return this.formBuilder.group({
      aadharNumber: this.formCtrlReqVali,
      dob: ['', [Validators.required]],
      emailId: this.formCtrlReqVali,
      fatherHusbandName: this.formCtrlReqVali,
      firstName: this.formCtrlReqVali,
      genderCode: this.formCtrlReqVali,
      lastName: this.formCtrlReqVali,
      middleName: this.formCtrlReqVali,
      mobileNumber: this.formCtrlReqVali,
      panNumber: this.formCtrlReqVali,
      previousItrNotFiled: this.formCtrlReqVali,
      salutation: this.formCtrlReqVali,
      itrAssesmentYearCode: this.formCtrlReqVali,

      appli_photo_file: this.formCtrlReqVali,
      appli_photo_file_source: this.formCtrlReqVali,

      appli_aadhar_file: this.formCtrlReqVali,
      appli_aadhar_file_source: this.formCtrlReqVali,

      appli_pan_file: this.formCtrlReqVali,
      appli_pan_file_source: this.formCtrlReqVali,

      appli_itr_file: this.formCtrlReqVali,
      appli_itr_file_source: this.formCtrlReqVali,

      appli_charct_cert_file: this.formCtrlReqVali,
      appli_charct_cert_file_source: this.formCtrlReqVali,
    });
  }

  createRetailForm() {
    this.retailForm = this.formBuilder.group({
      financialYear: ['2020-2021'],
      applicationDate: [this.startDateFormated],
      shopAppliedCode: this.formCtrlReqVali,
      retailApplicantDetails: this.buildRetailApplicantDetailsFormGroup(),
      addressList: this.formBuilder.array([
        this.buildAddressFormGroup(this.SEC_ADDR_APPLICANT),
        this.buildAddressFormGroup(this.SEC_ADDR_SHOP)
      ]),
      retailAdditionalDetails: this.formBuilder.group({
        gstNumber: this.formCtrlReqVali,
        solvencyCerticateValidity: this.formCtrlReqVali,

        layoutPlan_file: this.formCtrlReqVali,
        layoutPlan_file_source: this.formCtrlReqVali,

        solvencyCertByAuth_file: this.formCtrlReqVali,
        solvencyCertByAuth_file_source: this.formCtrlReqVali,

        fireSafety_file: this.formCtrlReqVali,
        fireSafety_file_source: this.formCtrlReqVali,

        affadavait_file: this.formCtrlReqVali,
        affadavait_file_source: this.formCtrlReqVali,

        uploadGstin_file: this.formCtrlReqVali,
        uploadGstin_file_source: this.formCtrlReqVali,

        noOfPrem_file: this.formCtrlReqVali,
        noOfPrem_file_source: this.formCtrlReqVali,

        fssaiCert_file: this.formCtrlReqVali,
        fssaiCert_file_source: this.formCtrlReqVali,

        certOfPollutionControl_file: this.formCtrlReqVali,
        certOfPollutionControl_file_source: this.formCtrlReqVali,
      }),
      salesManDetailList: this.formBuilder.array([
        this.buildSaleManFormGroup()
      ]),
      bankList: this.formBuilder.array([
        this.buildBankDetFormGroup()
      ]),
      applicantFees: [0]
    });
  }

  createRetailFL9_9AForm() {
    this.retailFL9And9AForm = this.formBuilder.group({
      financialYear: ['2020-2021'],
      applicationDate: [formatDate(this.startDate, 'yyyy-MM-dd', 'en')],
      retailApplicantDetails: this.formBuilder.group({
        aadharNumber: this.formCtrlReqVali,
        dob: this.formCtrlReqVali,
        emailId: this.formCtrlReqVali,
        firstName: this.formCtrlReqVali,
        genderCode: this.formCtrlReqVali,
        lastName: this.formCtrlReqVali,
        middleName: this.formCtrlReqVali,
        mobileNumber: this.formCtrlReqVali,
        panNumber: this.formCtrlReqVali,
        salutation: this.formCtrlReqVali,

        appli_photo_file: this.formCtrlReqVali,
        appli_photo_file_source: this.formCtrlReqVali,

        appli_aadhar_file: this.formCtrlReqVali,
        appli_aadhar_file_source: this.formCtrlReqVali,

        appli_pan_file: this.formCtrlReqVali,
        appli_pan_file_source: this.formCtrlReqVali,
      }),
      addressList: this.formBuilder.array([
        this.buildAddressFormGroup(this.SEC_ADDR_PREM)
      ]),
      retailAdditionalDetails: this.formBuilder.group({

        premisesLayoutPlan_file: this.formCtrlReqVali,
        premisesLayoutPlan_file_source: this.formCtrlReqVali,

        nocByDefense_file: this.formCtrlReqVali,
        nocByDefense_file_source: this.formCtrlReqVali,
      }),
      bankList: this.formBuilder.array([
        this.buildBankDetFormGroup()
      ]),
      applicantFees: [0]
    });
  }

  createRetailHM1Form() {
    this.retailHM1Form = this.formBuilder.group({
      financialYear: ['2020-2021'],
      applicationDate: [formatDate(this.startDate, 'yyyy-MM-dd', 'en')],
      retailApplicantDetails: this.buildRetailApplicantDetailsFormGroup(),
      addressList: this.formBuilder.array([
        this.buildAddressFormGroup(this.SEC_ADDR_APPLICANT),
        this.buildAddressFormGroup(this.SEC_ADDR_SHOP)
      ]),
      retailAdditionalDetails: this.formBuilder.group({
        gstNumber: this.formCtrlReqVali,
        solvencyCerticateValidity: this.formCtrlReqVali,

        annualMinGurantQuantity: [''],
        monthlyMinGurantQuantity: [''],
        monthlyInstalOfAnnualConsiderInFig: [''],
        monthlyInstalOfAnnualConsiderInWrd: [''],

        layoutPlan_file: this.formCtrlReqVali,
        layoutPlan_file_source: this.formCtrlReqVali,

        solvencyCertByAuth_file: this.formCtrlReqVali,
        solvencyCertByAuth_file_source: this.formCtrlReqVali,

        fireSafety_file: this.formCtrlReqVali,
        fireSafety_file_source: this.formCtrlReqVali,

        affadavait_file: this.formCtrlReqVali,
        affadavait_file_source: this.formCtrlReqVali,

        uploadGstin_file: this.formCtrlReqVali,
        uploadGstin_file_source: this.formCtrlReqVali,

        fssaiCert_file: this.formCtrlReqVali,
        fssaiCert_file_source: this.formCtrlReqVali,

        certOfPollutionControl_file: this.formCtrlReqVali,
        certOfPollutionControl_file_source: this.formCtrlReqVali,
      }),
      salesManDetailList: this.formBuilder.array([
        this.buildSaleManFormGroup()
      ]),
      bankList: this.formBuilder.array([
        this.buildBankDetFormGroup()
      ]),
      applicantFees: [0]
    });
  }

  loadInitialFormData() {

    // this.getAllCountrys();
    this.getAllStates();
    this.getAllMunicipal();
    this.getAllBlock();
    this.getAllVillage();

    this.processFormActionReadOnly();
  }

  loadLicenseData() {
    this.licenseSer.findLicenseApplication(this.applicationNumber).subscribe((resp: any) => {
      const { responseCode: respCode, content: respContent } = resp;
      if (respCode === 200) {
        this.licenseApplicationData = respContent;

        switch (this.screenSubType) {
          case this.SCREEN_FOR_FL4A:
          case this.SCREEN_FOR_FL4C:
          case this.SCREEN_FOR_FL5B:
          case this.SCREEN_FOR_CL5C:
          case this.SCREEN_FOR_FL5D:
            this.patchRetailForm();
            break;
          case this.SCREEN_FOR_FL9:
          case this.SCREEN_FOR_FL9A:
            this.patchRetailFL9AForm();
            break;
          case this.SCREEN_FOR_HM1:
            this.patchRetailHM1Form();
            break;
        }

        const { licenseObj } = this.getLicenseData();
        this.licenseComments = licenseObj.commentList;
        this.licenseStatus = this.licenseApplicationData.status;
        this.licenseStage = this.licenseApplicationData.stage;
        this.processFormActionReadOnly();

        this.alert.showSuccess(resp.responseMessage, 'Success');

      } else {
        this.alert.showError(resp.responseMessage, 'Error');
      }
    });
  }

  getLicenseData(): any {
    const { retailLicenses: licenseObj, applicationDate } = this.licenseApplicationData;
    const {
      bankList, retailAdditionalDetails, addressList, retailApplicantDetails, salesManDetailList
    } = licenseObj;

    return { applicationDate, licenseObj, retailAdditionalDetails, addressList, retailApplicantDetails, salesManDetailList, bankList };
  }

  patchRetailForm() {

    const { 
      applicationDate, licenseObj, retailAdditionalDetails, 
      addressList, retailApplicantDetails, salesManDetailList, bankList
    } = this.getLicenseData();

    const { shopAppliedCode, licenseType } = licenseObj;

    this.getAllStates();
    this.getAllMunicipal();
    this.getAllBlock();
    this.getAllVillage();

    addressList.forEach(element => {
      this.onStateChange(element.stateCode, element.addressIdentifier);
      this.onDistrictChange(element.districtCode, element.addressIdentifier);
    });

    const retailApplicantDetailsProp = [
      'appli_photo_file', 'appli_aadhar_file', 'appli_pan_file', 
      'appli_itr_file', 'appli_charct_cert_file'
    ];

    const retailAdditionalDetailsProp = [
      'layoutPlan_file', 'solvencyCertByAuth_file', 'fireSafety_file', 'affadavait_file',
      'uploadGstin_file', 'noOfPrem_file', 'fssaiCert_file', 'certOfPollutionControl_file'
    ];

    const bankDetProp = [
      'cancel_cheque_file'
    ];

    const form = this.retailForm;
    const retailApplicantDetailsCntrl = form.get('retailApplicantDetails');
    const retailAdditionalDetailsCntrl = form.get('retailAdditionalDetails');
    const bankDetControl = form.get('bankList').get('0');

    this.unsetValidator(retailApplicantDetailsCntrl, retailApplicantDetailsProp);
    this.unsetValidator(retailAdditionalDetailsCntrl, retailAdditionalDetailsProp);
    this.unsetValidator(bankDetControl, bankDetProp);

    retailApplicantDetails.dob = this.invertDate(retailApplicantDetails.dob);
    retailAdditionalDetails.solvencyCerticateValidity = this.invertDate(retailAdditionalDetails.solvencyCerticateValidity);
    salesManDetailList.forEach(element => element.dob = this.invertDate(element.dob));

    form.patchValue({
      applicationDate: this.invertDate(applicationDate),
      shopAppliedCode,
      retailAdditionalDetails,
      addressList,
      retailApplicantDetails,
      bankList
    });

    this.remSalemanRow(0);
    salesManDetailList.forEach(element => {
      (this.getSalemanFormCntr() as FormArray).push(this.buildSaleManFormGroup(element));
    });

    return true;

  }

  patchRetailFL9AForm() {

    const {
      applicationDate, licenseObj, retailAdditionalDetails,
      addressList, retailApplicantDetails, bankList
    } = this.getLicenseData();

    const { shopAppliedCode, licenseType } = licenseObj;

    this.getAllStates();
    this.getAllMunicipal();
    this.getAllBlock();
    this.getAllVillage();

    addressList.forEach(element => {
      this.onStateChange(element.stateCode, element.addressIdentifier);
      this.onDistrictChange(element.districtCode, element.addressIdentifier);
    });

    const retailApplicantDetailsProp = [
      'appli_photo_file', 'appli_aadhar_file', 'appli_pan_file'
    ];

    const retailAdditionalDetailsProp = [
      'premisesLayoutPlan_file', 'nocByDefense_file'
    ];

    const bankDetProp = [
      'cancel_cheque_file'
    ];

    const form = this.retailFL9And9AForm;
    const retailApplicantDetailsCntrl = form.get('retailApplicantDetails');
    const retailAdditionalDetailsCntrl = form.get('retailAdditionalDetails');
    const bankDetControl = form.get('bankList').get('0');

    this.unsetValidator(retailApplicantDetailsCntrl, retailApplicantDetailsProp);
    this.unsetValidator(retailAdditionalDetailsCntrl, retailAdditionalDetailsProp);
    this.unsetValidator(bankDetControl, bankDetProp);

    retailApplicantDetails.dob = this.invertDate(retailApplicantDetails.dob);
    retailAdditionalDetails.solvencyCerticateValidity = this.invertDate(retailAdditionalDetails.solvencyCerticateValidity);

    form.patchValue({
      applicationDate: this.invertDate(applicationDate),
      shopAppliedCode,
      retailAdditionalDetails,
      addressList,
      retailApplicantDetails,
      bankList
    });

    return true;

  }

  patchRetailHM1Form() {
    const {
      applicationDate, licenseObj, retailAdditionalDetails,
      addressList, retailApplicantDetails, salesManDetailList, bankList
    } = this.getLicenseData();

    const { shopAppliedCode, licenseType } = licenseObj;

    this.getAllStates();
    this.getAllMunicipal();
    this.getAllBlock();
    this.getAllVillage();

    addressList.forEach(element => {
      this.onStateChange(element.stateCode, element.addressIdentifier);
      this.onDistrictChange(element.districtCode, element.addressIdentifier);
    });

    const retailApplicantDetailsProp = [
      'appli_photo_file', 'appli_aadhar_file', 'appli_pan_file',
      'appli_itr_file', 'appli_charct_cert_file'
    ];

    const retailAdditionalDetailsProp = [
      'layoutPlan_file', 'solvencyCertByAuth_file', 'fireSafety_file', 'affadavait_file',
      'uploadGstin_file', 'fssaiCert_file', 'certOfPollutionControl_file'
    ];

    const bankDetProp = [
      'cancel_cheque_file'
    ];

    const form = this.retailHM1Form;
    const retailApplicantDetailsCntrl = form.get('retailApplicantDetails');
    const retailAdditionalDetailsCntrl = form.get('retailAdditionalDetails');
    const bankDetControl = form.get('bankList').get('0');

    this.unsetValidator(retailApplicantDetailsCntrl, retailApplicantDetailsProp);
    this.unsetValidator(retailAdditionalDetailsCntrl, retailAdditionalDetailsProp);
    this.unsetValidator(bankDetControl, bankDetProp);

    retailApplicantDetails.dob = this.invertDate(retailApplicantDetails.dob);
    retailAdditionalDetails.solvencyCerticateValidity = this.invertDate(retailAdditionalDetails.solvencyCerticateValidity);
    salesManDetailList.forEach(element => element.dob = this.invertDate(element.dob));

    form.patchValue({
      applicationDate: this.invertDate(applicationDate),
      shopAppliedCode,
      retailAdditionalDetails,
      addressList,
      retailApplicantDetails,
      bankList
    });

    this.remSalemanRow(0);
    salesManDetailList.forEach(element => {
      (this.getSalemanFormCntr() as FormArray).push(this.buildSaleManFormGroup(element));
    });

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

  downloadDocument( propertyName, fileFor ) {

    if (this.licenseApplicationData) {

      const fileArr = this.getFileArr(propertyName);
      const fileObj = fileArr.find((resp: any) => resp.name === fileFor);

      const { uuid, documentName } = fileObj;

      if (uuid && documentName) {
        this.docUplSer.downloadDocument(uuid, documentName).subscribe(
          (resp: any) => fileSaver.saveAs(resp, documentName),
          (error: any) => this.alert.showError('Error downloading the file', 'Error'),
          () => console.info('File downloaded successfully')
        );
      } else {
        this.alert.showError('File not available', 'Error');
      }
    } else {
      this.alert.showError('File details not found', 'Error');
    }
  }

  onAppliFileChange(event, secName, sourceName, fileFor) {

    const formControl = this.getFormCntr('retailApplicantDetails');
    const fileUpRes = this.onFileChange(event, sourceName, fileFor, formControl);
    return (fileUpRes) ? this.fileArr[secName].push(sourceName) : false;

  }

  onAttachFileChange(event, secName, sourceName, fileFor) {

    const formControl = this.getFormCntr('retailAdditionalDetails');
    const fileUpRes = this.onFileChange(event, sourceName, fileFor, formControl);
    return (fileUpRes) ? this.fileArr[secName].push(sourceName) : false;

  }

  onBankFileChange(event, secName, sourceName, fileFor) {

    const formControl = this.getFormCntr('bankList').get('0');
    const fileUpRes = this.onFileChange(event, sourceName, fileFor, formControl);
    return (fileUpRes) ? this.fileArr[secName].push(sourceName) : false;

  }

  onSalesmanFileChange(event, secName, idx, salemanCntrl, sourceName, fileFor) {
    const fileUpRes = this.onFileChange(event, sourceName, fileFor, salemanCntrl);
    if (!fileUpRes) {
      return false;
    }

    if (this.fileArr[secName][idx]) {
      this.fileArr[secName][idx].push(sourceName);
    } else {
      this.fileArr[secName][idx] = [];
      this.fileArr[secName][idx].push(sourceName);
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

  unsetValidator(formControl, fileArr) {
    fileArr.forEach((ele) => {
      const eleSource = ele + '_source';
      formControl.get(ele).setValidators([]);
      formControl.get(ele).updateValueAndValidity();
      formControl.get(eleSource).setValidators([]);
      formControl.get(eleSource).updateValueAndValidity();
    });
    return true;
  }

  getAllStates() {
    this.stateSer.getState().subscribe((responceData: any) => {
      this.stateList = responceData.data;
    });
  }

  getAllVillage() {
    this.villageService.getAllVillages().subscribe((responceData: any) => {
      this.villageList = responceData.data;
    });
  }

  getAllBlock() {
    this.blockService.getAllBlocks().subscribe((responceData: any) => {
      this.blockList = responceData.data;
    });
  }

  getAllMunicipal() {
    this.municipalityService.getMunicipality().subscribe((responceData: any) => {
      this.municipalityList = responceData.data;
    });
  }

  onStateChange(stateId, key) {
    this.getDistrictsByStateid(stateId, key);
  }

  getDistrictsByStateid(stateId, key) {
    this.districtSer.getDistrictsByStateid(stateId).subscribe((responceData: any) => {
      this.districtListByState[key] = responceData.data;
    });
  }

  onDistrictChange(id, key) {
    this.loadTalukByDist(id, key);
  }

  loadTalukByDist(id, key) {
    this.talukService.gettalukByDistId(id).subscribe((responceData: any) => {
      this.talukList[key] = responceData.data;
    });
  }

  onLocalityChange($event, type) {
    const { value: localityType } = $event.target;
    let formContrl;
    switch (type) {
      case this.LOCA_FOR_UNIT:
        formContrl = this.retailForm.controls.addrUnit;
        if (localityType === this.urbanKey) {
          this.unitOfcLocalityType = this.urbanKey;
        } else if (localityType === this.ruralKey) {
          this.unitOfcLocalityType = this.ruralKey;
        } else {
          this.unitOfcLocalityType = '';
        }
        break;
      case this.LOCA_FOR_ADDR:
        formContrl = this.retailForm.controls.addr;
        if (localityType === this.urbanKey) {
          this.addrLocalityType = this.urbanKey;
        } else if (localityType === this.ruralKey) {
          this.addrLocalityType = this.ruralKey;
        } else {
          this.addrLocalityType = '';
        }
        break;
    }
    if ($event.target.value === this.urbanKey) {
      formContrl.get('municipalAreaCode').setValidators([Validators.required]);
      formContrl.get('municipalAreaCode').updateValueAndValidity();
      formContrl.get('block').setValidators([]);
      formContrl.get('block').updateValueAndValidity();
      formContrl.get('villageCode').setValidators([]);
      formContrl.get('villageCode').updateValueAndValidity();
    } else if ($event.target.value === this.ruralKey) {
      formContrl.get('block').setValidators([Validators.required]);
      formContrl.get('block').updateValueAndValidity();
      formContrl.get('villageCode').setValidators([Validators.required]);
      formContrl.get('villageCode').updateValueAndValidity();
      formContrl.get('municipalAreaCode').setValidators([]);
      formContrl.get('municipalAreaCode').updateValueAndValidity();
    } else {
      formContrl.get('municipalAreaCode').setValidators([Validators.required]);
      formContrl.get('municipalAreaCode').updateValueAndValidity();
    }
  }

  combineArr(oldArr, newArr) {
    // console.log('oldArr::', oldArr);
    // console.log('newArr::', newArr);

    if (newArr.length > 0) {

      newArr.forEach(element => {
        const ind = oldArr.findIndex((item) => item.name === element.name);
        if (ind !== -1) {
          oldArr[ind] = element;
        } else {
          oldArr.push(element);
        }
      });

    }
    return oldArr;
  }

  invertDate(date) {
    if (!date) {
      return date;
    }
    date = date.split('-');
    date = date[2] + '-' + date[1] + '-' + date[0];
    return date;
  }

  isEditFormIsReadOnly(isCustomer, status, stage) {
    let readOnly;
    let showActionFor;
    if (isCustomer) {
      console.log('CUSTOMER_ACTION_BUTTONS_WITH_READONLY_YES_OR_NO');
      if (status !== this.STATUS_APPROVED) { //APPRROVED
        if (stage == null || stage == 'null' || stage === 'customer') {
          console.log('NEED_CUSTOMER_ACTION_BUTTONS_BECAUSE_ITS_IN_CUSTOMER_HAND');
          readOnly = false;
          showActionFor = this.CUSTOMER;
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
      readOnly = true;
      showActionFor = this.OFFICER;

      const moduleNameCode = 'LICENSE_MANAGEMENT';
      const workFlowName = 'Retail Registration';

      this.licenseSer.findWorkFlowDetailsByLoginUserDesignation(moduleNameCode, workFlowName).subscribe((resp: any) => {
        const { responseCode: respCode, responseMessage: respMsg, content: respCont } = resp;
        if (respCode === 200) {
          const { level, isRejected, isSendBack, sendBackList } = respCont;
          this.officerLevel = level;
          this.isRejected = isRejected;
          this.isSendBack = isSendBack;
          this.sendBackList = sendBackList;
          this.alert.showSuccess('Action Initiated', 'Success');
        } else {
          this.alert.showError(respMsg, 'Error');
        }
      });
    }
    return { readOnly, showActionFor };
  }

  processFormActionReadOnly() {
    if (this.isFormEdit) {
      console.log('processFormActionReadOnly::', this.applicationNumber);
      const { readOnly, showActionFor } = this.isEditFormIsReadOnly(this.isCustomer, this.licenseStatus, this.licenseStage);
      console.log('isCustomer::', this.isCustomer);
      console.log('readOnly::', readOnly);

      this.createsendbackForm();

      this.isActionBtnFor = showActionFor;
      this.isReadOnly = readOnly;
    } else {
      this.isActionBtnFor = this.CUSTOMER;
      this.isReadOnly = false;
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
    const files = this.fileArr[this.FF_APPLI];
    const formCntrl = this.getFormCntr('retailApplicantDetails');
    if (files.length === 0) {
      return [];
    }

    return await this.createFormData(applicationNo, files, formCntrl);
  }

  async uploadAttachFileChange(applicationNo) {
    const files = this.fileArr[this.FF_ATTACHMENTS];
    const formCntrl = this.getFormCntr('retailAdditionalDetails');

    return await this.createFormData(applicationNo, files, formCntrl);
  }

  async uploadBankFileChange(applicationNo) {
    const files = this.fileArr[this.FF_BANK];
    const formCntrl = this.getFormCntr('bankList').get('0');
    if (files.length === 0) {
      return [];
    }

    return await this.createFormData(applicationNo, files, formCntrl);
  }

  async uploadSalesmanFileChange(applicationNo) {
    const files = this.fileArr[this.FF_SALESMAN];
    const allUpRes = [];

    if (files.length === 0) {
      return [];
    }

    for (let idx = 0; idx < files.length; idx++) {
      // tslint:disable-next-line: no-string-literal
      const formCntrl = this.getSalemanFormCntr()['controls'][idx];
      const fileArr = files[idx];
      console.log('formCntrl::', formCntrl);
      console.log('fileArr::', fileArr);
      const upRes = await this.createFormData(applicationNo, fileArr, formCntrl);
      allUpRes.push(upRes);
    }
    return allUpRes;
  }

  async getApplicationNo() {

    if (this.isFormEdit) {
      return this.licenseApplicationData.applicationNumber;
    } else {
      const { content: applicationNumber } = await this.licenseSer.getApplicationNo('RL');
      if (!applicationNumber) {
        this.alert.showError('Error while getting application number', 'Error');
        return;
      }
      return applicationNumber;
    }
  }

  onSubmit(saveType) {
    switch (this.screenSubType) {
      case this.SCREEN_FOR_FL4A:
      case this.SCREEN_FOR_FL4C:
      case this.SCREEN_FOR_FL5B:
      case this.SCREEN_FOR_CL5C:
      case this.SCREEN_FOR_FL5D:
        this.addLicense(saveType);
        break;
      case this.SCREEN_FOR_FL9:
      case this.SCREEN_FOR_FL9A:
        this.addFL9ALicense(saveType);
        break;
      case this.SCREEN_FOR_HM1:
        this.addHM1License(saveType);
        break;
    }
  }

  async addLicense(saveType) {
    this.formSubmitted = false;
    const form = this.retailForm;
    console.log('this.retailForm.valid::', form.valid);
    console.log('this.retailForm.value::', form.value);
    console.log('this.retailForm::', form);

    if (saveType !== this.STATUS_DRAFT && form.valid === false) {
      this.formSubmitted = true;
      return false;
    }

    const formValue = form.value;
    const {
      applicationDate, shopAppliedCode,
      retailApplicantDetails: formValretailApplicantDetails,
      retailAdditionalDetails: formValretailAdditionalDetails,
      addressList,
      salesManDetailList: formValsalesManDetailList,
      bankList: formValbankList,
    } = form.value;

    const retailApplicantDetailsProp = [
      'appli_photo_file', 'appli_photo_file_source', 'appli_aadhar_file', 'appli_aadhar_file_source',
      'appli_pan_file', 'appli_pan_file_source', 'appli_itr_file', 'appli_itr_file_source',
      'appli_charct_cert_file', 'appli_charct_cert_file_source'
    ];

    const retailAdditionalDetailsProp = [
      'layoutPlan_file', 'layoutPlan_file_source', 'solvencyCertByAuth_file', 'solvencyCertByAuth_file_source',
      'fireSafety_file', 'fireSafety_file_source', 'affadavait_file', 'affadavait_file_source', 'uploadGstin_file',
      'uploadGstin_file_source', 'noOfPrem_file', 'noOfPrem_file_source', 'fssaiCert_file', 'fssaiCert_file_source',
      'certOfPollutionControl_file', 'certOfPollutionControl_file_source'
    ];

    const bankDetProp = [
      'cancel_cheque_file', 'cancel_cheque_file_source'
    ];

    const salesManDetailListProp = [
      'salesman_photo_file', 'salesman_photo_file_source', 'salesman_aadhar_file', 'salesman_aadhar_file_source',
      'salesman_affadavait_file', 'salesman_affadavait_file_source', 'salesman_character_file', 'salesman_character_file_source',
    ];

    retailApplicantDetailsProp.forEach((ele) => delete formValretailApplicantDetails[ele]);
    retailAdditionalDetailsProp.forEach((ele) => delete formValretailAdditionalDetails[ele]);
    salesManDetailListProp.forEach((ele) => formValsalesManDetailList.forEach((salemanEle) => delete salemanEle[ele]));
    bankDetProp.forEach((ele) => delete formValbankList[0][ele]);

    let uploadAppliFiles;
    let uploadAttachFileChange;
    let uploadBankFileChange;
    let uploadSalesmanFileChange;

    const applicationNo = await this.getApplicationNo();
    uploadAppliFiles = await this.uploadAppliFiles(applicationNo);
    uploadAttachFileChange = await this.uploadAttachFileChange(applicationNo);
    uploadSalesmanFileChange = await this.uploadSalesmanFileChange(applicationNo);
    uploadBankFileChange = await this.uploadBankFileChange(applicationNo);

    if (this.isFormEdit) {
      const {
        retailAdditionalDetails: apiDataRetAddiDet, retailApplicantDetails: apiDataRetAppliDet,
        salesManDetailList: apiDatasalesManDetailList, bankList: apiDatabankList
      } = this.getLicenseData();

      const { applicantDocumentList: apiDataapplicantDocumentList } = apiDataRetAppliDet;
      uploadAppliFiles = this.combineArr(apiDataapplicantDocumentList, uploadAppliFiles);

      const { additionalDocumentList: apiDataadditionalDocumentList } = apiDataRetAddiDet;
      uploadAttachFileChange = this.combineArr(apiDataadditionalDocumentList, uploadAttachFileChange);

      const apiDatabankDocumentList = apiDatabankList[0].bankDocumentList;
      uploadBankFileChange = this.combineArr(apiDatabankDocumentList, uploadBankFileChange);

      if (apiDatasalesManDetailList.length > 0) {
        let fileInst;
        apiDatasalesManDetailList.forEach((ele, ind) => {
          fileInst = uploadSalesmanFileChange[ind];
          fileInst = this.combineArr(ele.salesManDocumentList, (fileInst) ? fileInst : []);
        });
      }
    }

    formValretailApplicantDetails.applicantDocumentList = uploadAppliFiles;
    formValretailAdditionalDetails.additionalDocumentList = uploadAttachFileChange;
    formValbankList[0].bankDocumentList = uploadBankFileChange;
    formValsalesManDetailList.forEach((ele, ind) => {
      ele.dob = this.invertDate(ele.dob);
      ele.salesManDocumentList = uploadSalesmanFileChange[ind];
    });

    formValretailApplicantDetails.dob = this.invertDate(formValretailApplicantDetails.dob);
    formValretailAdditionalDetails.solvencyCerticateValidity = this.invertDate(formValretailAdditionalDetails.solvencyCerticateValidity);

    console.log('formValue::', formValue);

    const payload: any = {
      applicationDate: this.invertDate(applicationDate),
      applicationNumber: applicationNo,
      status: saveType,
      retailLicenses: {
        licenseType: this.licenseType,
        shopAppliedCode,
        retailApplicantDetails : formValretailApplicantDetails,
        retailAdditionalDetails : formValretailAdditionalDetails,
        addressList,
        salesManDetailList : formValsalesManDetailList,
        bankList : formValbankList,
      }
    };
    console.log('payload::', payload);

    await this.createLicense(payload, form, saveType);

    return true;
  }

  async addFL9ALicense(saveType) {
    this.formSubmitted = false;
    const form = this.retailFL9And9AForm;
    console.log('this.retailFL9And9AForm.valid::', form.valid);
    console.log('this.retailFL9And9AForm.value::', form.value);
    console.log('this.retailFL9And9AForm::', form);

    if (saveType !== this.STATUS_DRAFT && form.valid === false) {
      this.formSubmitted = true;
      return false;
    }

    const formValue = form.value;

    const {
      applicationDate,
      retailApplicantDetails: formValretailApplicantDetails,
      addressList,
      retailAdditionalDetails: formValretailAdditionalDetails,
      bankList: formValbankList,
    } = form.value;

    const retailApplicantDetailsProp = [
      'appli_photo_file', 'appli_photo_file_source', 'appli_aadhar_file', 'appli_aadhar_file_source',
      'appli_pan_file', 'appli_pan_file_source'
    ];

    const retailAdditionalDetailsProp = [
      'premisesLayoutPlan_file', 'premisesLayoutPlan_file_source', 'nocByDefense_file', 'nocByDefense_file_source'
    ];

    const bankDetProp = [
      'cancel_cheque_file', 'cancel_cheque_file_source'
    ];

    retailApplicantDetailsProp.forEach((ele) => delete formValue.retailApplicantDetails[ele]);
    retailAdditionalDetailsProp.forEach((ele) => delete formValue.retailAdditionalDetails[ele]);
    bankDetProp.forEach((ele) => delete formValue.bankList[0][ele]);

    let uploadAppliFiles;
    let uploadAttachFileChange;
    let uploadBankFileChange;

    const applicationNo = await this.getApplicationNo();
    uploadAppliFiles = await this.uploadAppliFiles(applicationNo);
    uploadAttachFileChange = await this.uploadAttachFileChange(applicationNo);
    uploadBankFileChange = await this.uploadBankFileChange(applicationNo);

    if (this.isFormEdit) {
      const {
        retailAdditionalDetails: apiDataRetAddiDet, retailApplicantDetails: apiDataRetAppliDet,
        bankList: apiDatabankList
      } = this.getLicenseData();

      const { applicantDocumentList: apiDataapplicantDocumentList } = apiDataRetAppliDet;
      uploadAppliFiles = this.combineArr(apiDataapplicantDocumentList, uploadAppliFiles);

      const { additionalDocumentList: apiDataadditionalDocumentList } = apiDataRetAddiDet;
      uploadAttachFileChange = this.combineArr(apiDataadditionalDocumentList, uploadAttachFileChange);

      const apiDatabankDocumentList = apiDatabankList[0].bankDocumentList;
      uploadBankFileChange = this.combineArr(apiDatabankDocumentList, uploadBankFileChange);
    }

    formValretailApplicantDetails.applicantDocumentList = uploadAppliFiles;
    formValretailAdditionalDetails.additionalDocumentList = uploadAttachFileChange;
    formValbankList[0].bankDocumentList = uploadBankFileChange;

    formValretailApplicantDetails.dob = this.invertDate(formValretailApplicantDetails.dob);

    console.log('formValue::', formValue);

    const payload: any = {
      applicationDate: this.invertDate(applicationDate),
      applicationNumber: applicationNo,
      status: saveType,
      retailLicenses: {
        licenseType: this.licenseType,
        retailApplicantDetails : formValretailApplicantDetails,
        addressList,
        retailAdditionalDetails : formValretailAdditionalDetails,
        bankList : formValbankList,
      }
    };
    console.log('payload::', payload);

    await this.createLicense(payload, form, saveType);

    return true;
  }

  async addHM1License(saveType) {
    this.formSubmitted = false;
    const form = this.retailHM1Form;
    console.log('this.retailHM1Form.valid::', form.valid);
    console.log('this.retailHM1Form.value::', form.value);
    console.log('this.retailHM1Form::', form);

    if (saveType !== this.STATUS_DRAFT && form.valid === false) {
      this.formSubmitted = true;
      return false;
    }

    const formValue = form.value;
    const {
      applicationDate, shopAppliedCode,
      retailApplicantDetails: formValretailApplicantDetails,
      retailAdditionalDetails: formValretailAdditionalDetails,
      addressList,
      salesManDetailList: formValsalesManDetailList,
      bankList: formValbankList,
    } = form.value;

    const {
      retailApplicantDetails, retailAdditionalDetails,
      salesManDetailList, bankList
    } = formValue;

    const retailApplicantDetailsProp = [
      'appli_photo_file', 'appli_photo_file_source', 'appli_aadhar_file', 'appli_aadhar_file_source',
      'appli_pan_file', 'appli_pan_file_source', 'appli_itr_file', 'appli_itr_file_source',
      'appli_charct_cert_file', 'appli_charct_cert_file_source'
    ];

    const retailAdditionalDetailsProp = [
      'layoutPlan_file', 'layoutPlan_file_source', 'solvencyCertByAuth_file', 'solvencyCertByAuth_file_source',
      'fireSafety_file', 'fireSafety_file_source', 'affadavait_file', 'affadavait_file_source', 'uploadGstin_file',
      'uploadGstin_file_source', 'fssaiCert_file', 'fssaiCert_file_source',
      'certOfPollutionControl_file', 'certOfPollutionControl_file_source'
    ];

    const bankDetProp = [
      'cancel_cheque_file', 'cancel_cheque_file_source'
    ];

    const salesManDetailListProp = [
      'salesman_photo_file', 'salesman_photo_file_source', 'salesman_aadhar_file', 'salesman_aadhar_file_source',
      'salesman_affadavait_file', 'salesman_affadavait_file_source', 'salesman_character_file', 'salesman_character_file_source',
    ];

    retailApplicantDetailsProp.forEach((ele) => delete formValretailApplicantDetails[ele]);
    retailAdditionalDetailsProp.forEach((ele) => delete formValretailAdditionalDetails[ele]);
    salesManDetailListProp.forEach((ele) => formValsalesManDetailList.forEach((salemanEle) => delete salemanEle[ele]));
    bankDetProp.forEach((ele) => delete formValbankList[0][ele]);

    let uploadAppliFiles;
    let uploadAttachFileChange;
    let uploadBankFileChange;
    let uploadSalesmanFileChange;

    const applicationNo = await this.getApplicationNo();
    uploadAppliFiles = await this.uploadAppliFiles(applicationNo);
    uploadAttachFileChange = await this.uploadAttachFileChange(applicationNo);
    uploadSalesmanFileChange = await this.uploadSalesmanFileChange(applicationNo);
    uploadBankFileChange = await this.uploadBankFileChange(applicationNo);

    if (this.isFormEdit) {
      const {
        retailAdditionalDetails: apiDataRetAddiDet, retailApplicantDetails: apiDataRetAppliDet,
        salesManDetailList: apiDatasalesManDetailList, bankList: apiDatabankList
      } = this.getLicenseData();

      const { applicantDocumentList: apiDataapplicantDocumentList } = apiDataRetAppliDet;
      uploadAppliFiles = this.combineArr(apiDataapplicantDocumentList, uploadAppliFiles);

      const { additionalDocumentList: apiDataadditionalDocumentList } = apiDataRetAddiDet;
      uploadAttachFileChange = this.combineArr(apiDataadditionalDocumentList, uploadAttachFileChange);

      const apiDatabankDocumentList = apiDatabankList[0].bankDocumentList;
      uploadBankFileChange = this.combineArr(apiDatabankDocumentList, uploadBankFileChange);

      if (apiDatasalesManDetailList.length > 0) {
        let fileInst;
        apiDatasalesManDetailList.forEach((ele, ind) => {
          fileInst = uploadSalesmanFileChange[ind];
          fileInst = this.combineArr(ele.salesManDocumentList, (fileInst) ? fileInst : []);
        });
      }
    }

    formValretailApplicantDetails.applicantDocumentList = uploadAppliFiles;
    formValretailAdditionalDetails.additionalDocumentList = uploadAttachFileChange;
    formValbankList[0].bankDocumentList = uploadBankFileChange;
    formValsalesManDetailList.forEach((ele, ind) => {
      ele.dob = this.invertDate(ele.dob);
      ele.salesManDocumentList = uploadSalesmanFileChange[ind];
    });

    retailApplicantDetails.dob = this.invertDate(retailApplicantDetails.dob);
    retailAdditionalDetails.solvencyCerticateValidity = this.invertDate(retailAdditionalDetails.solvencyCerticateValidity);

    const payload: any = {
      applicationDate: this.invertDate(applicationDate),
      applicationNumber: applicationNo,
      status: saveType,
      retailLicenses: {
        licenseType: this.licenseType,
        retailApplicantDetails: formValretailApplicantDetails,
        retailAdditionalDetails: formValretailAdditionalDetails,
        addressList,
        salesManDetailList: formValsalesManDetailList,
        bankList: formValbankList,
      }
    };
    console.log('payload::', payload);

    await this.createLicense(payload, form, saveType);

    return true;
  }

  async createLicense(payload, form, saveType) {

    console.log('before-payload::', payload);

    payload = await this.getFinalPayload(payload, saveType);
    if (!payload) {
      return false;
    }

    console.log('final-payload::', payload);

    const licenseCreationRes: any = await this.licenseSer.createRetailLicense(payload);
    const { responseCode: respCode, responseMessage: respMsg, content: respContent } = licenseCreationRes;
    console.log('respContent::', respContent);
    if (respCode === 200) {
      this.alert.showSuccess(respMsg, 'Success');
      if (this.isCustomer) {
        if (saveType === this.STATUS_DRAFT) {
          this.licenseApplicationData = respContent;
          this.isFormEdit = true;
        }

        if (saveType === this.STATUS_SUBMITTED) {
          form.reset();
          this.router.navigate(['/licencemgnt/sugarmill-license/acknowledgement/' + respContent.applicationNumber]);
        }

      } else {
        this.router.navigate(['/licencemgnt/viewLicenseStatus']);
      }
    } else {
      this.alert.showError(respMsg, 'error');
    }
  }

  async getFinalPayload(payload, saveType) {

    const commentForm = this.commentForm;
    const sendbackForm = this.sendbackForm;

    const { comments } = commentForm.value;

    if (saveType !== this.STATUS_DRAFT && commentForm.valid === false) {
      this.commandformSub = true;
      return false;
    }

    payload.event = (saveType === this.STATUS_DRAFT) ? '' : ((saveType === this.STATUS_SUBMITTED) ? 'INITIATE' : saveType);
    payload.level = (saveType === this.STATUS_DRAFT) ? '' : ((saveType === this.STATUS_SUBMITTED) ? 'Level 1' : this.officerLevel);

    if (comments) {
      payload.comments = comments;
    }

    if (this.isFormEdit) {
      payload.id = this.licenseApplicationData.id;
    }

    if (saveType === this.STATUS_SENDBACK) {
      const { sendback } = sendbackForm.value;
      payload.sentBackLevels = sendback;
    }
    return payload;
  }

  // dummy future it will remove -> start here
  loadDummyFormData() {
    this.retailForm.patchValue({
      shopAppliedCode: 1,
      retailApplicantDetails: {
        aadharNumber: '9887766554' + this.randNum,
        emailId: 'test_user' + this.randNum + '@gmail.com',
        fatherHusbandName: 'test_user_father' + this.randNum,
        firstName: 'test' + this.randNum,
        genderCode: 1,
        lastName: 'last' + this.randNum,
        middleName: 'mid' + this.randNum,
        mobileNumber: '98765443' + this.randNum,
        panNumber: 'DTVPP22' + this.randNum + 'Z',
        previousItrNotFiled: 'nothing',
        salutation: 2,
        itrAssesmentYearCode: 1
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
        }
      ],
      retailAdditionalDetails: {
        gstNumber: '9887988798' + this.randNum,
      },
      salesManDetailList: [
        {
          aadharNumber: '9887988798',
          address: 'test_address' + this.randNum,
          fatherName: 'father_name' + this.randNum,
          fullName: 'full_name' + this.randNum,
          genderCode: 1,
          identificationMark: 'identification_mark_' + this.randNum,
          mobileNumber: '98879887' + this.randNum,
          previouslyWorkedShop: 'previous_worked_shop_name' + this.randNum
        }
      ],
      bankList: [
        {
          ifscCode: 'CAN002233',
          bankNameCode: 1,
          bankBranch: 'madurai',
          accountNumber: '8776877687'
        }
      ]
    });
  }

  loadDummyFL9AFormData() {
    this.retailFL9And9AForm.patchValue({
      retailApplicantDetails: {
        aadharNumber: '9887766554' + this.randNum,
        emailId: 'test_user' + this.randNum + '@gmail.com',
        fatherHusbandName: 'test_user_father' + this.randNum,
        firstName: 'test' + this.randNum,
        genderCode: 1,
        lastName: 'last' + this.randNum,
        middleName: 'mid' + this.randNum,
        mobileNumber: '98765443' + this.randNum,
        panNumber: 'DTVPP22' + this.randNum + 'Z',
        previousItrNotFiled: 'nothing',
        salutation: 2,
        itrAssesmentYearCode: 1
      },
      addressList: [
        {
          block: 'appli_block_name' + this.randNum,
          locality: 'appli_locality' + this.randNum,
          pinCode: 655443,
          policeStationCode: 1,
          street: 'appli_street' + this.randNum,
          village: 'appli_village ' + this.randNum,
          ward: 'appli_ward_' + this.randNum,
        }
      ],
      bankList: [
        {
          ifscCode: 'CAN002233',
          bankNameCode: 1,
          bankBranch: 'madurai',
          accountNumber: '8776877687'
        }
      ]
    });
  }

  loadDummyHM1FormData() {
    this.retailHM1Form.patchValue({
      retailApplicantDetails: {
        aadharNumber: '9887766554' + this.randNum,
        emailId: 'test_user' + this.randNum + '@gmail.com',
        fatherHusbandName: 'test_user_father' + this.randNum,
        firstName: 'test' + this.randNum,
        genderCode: 1,
        lastName: 'last' + this.randNum,
        middleName: 'mid' + this.randNum,
        mobileNumber: '98765443' + this.randNum,
        panNumber: 'DTVPP22' + this.randNum + 'Z',
        previousItrNotFiled: 'nothing',
        salutation: 2,
        itrAssesmentYearCode: 1
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
        }
      ],
      salesManDetailList: [
        {
          aadharNumber: '9887988798',
          address: 'test_address' + this.randNum,
          fatherName: 'father_name' + this.randNum,
          fullName: 'full_name' + this.randNum,
          genderCode: 1,
          identificationMark: 'identification_mark_' + this.randNum,
          mobileNumber: '98879887' + this.randNum,
          previouslyWorkedShop: 'previous_worked_shop_name' + this.randNum
        }
      ],
      bankList: [
        {
          ifscCode: 'CAN002233',
          bankNameCode: 1,
          bankBranch: 'madurai',
          accountNumber: '8776877687'
        }
      ]
    });
  }
  // dummy future it will remove -> end here

}
