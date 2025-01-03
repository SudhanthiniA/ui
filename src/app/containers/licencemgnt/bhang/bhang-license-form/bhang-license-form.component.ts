import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormArray } from '@angular/forms';
import { formatDate } from '@angular/common';
import {
  AuthService,
  AlertService,
  GenderService,
  StatemasterService,
  DistrictMasterService,
  VillageMasterService,
  BlockMasterService,
  MunicipalityMasterService,
  TalukMasterService,
  DocumentUploadService,
  LicenceManagementService
} from '@app/services';
import { Router, ActivatedRoute } from '@angular/router';
import * as moment from 'moment';
import * as fileSaver from 'file-saver';
import * as _ from 'lodash';

interface Post { startDate: Date; }

@Component({
  selector: 'app-bhang-license-form',
  templateUrl: './bhang-license-form.component.html',
  styleUrls: ['./bhang-license-form.component.scss']
})
export class BhangLicenseFormComponent implements OnInit {

  public readonly SCREEN_FOR_ID14A = 'id14a';
  public readonly SCREEN_FOR_ID14B = 'id14b';
  public readonly SCREEN_FOR_ID15 = 'id15';
  public readonly SCREEN_FOR_ID16 = 'id16';

  public readonly CUSTOMER = 'customer';
  public readonly OFFICER = 'officer';
  public readonly STATUS_DRAFT = 'DRAFT';
  public readonly STATUS_SUBMITTED = 'SUBMITTED';
  public readonly STATUS_APPROVED = 'APPROVED';
  public readonly STATUS_REJECTED = 'REJECTED';
  public readonly STATUS_SENDBACK = 'SENDBACK';

  public readonly LIC_TYPE_ID14A = 'ID14A';
  public readonly LIC_TYPE_ID14B = 'ID14B';
  public readonly LIC_TYPE_ID15 = 'ID15';
  public readonly LIC_TYPE_ID16 = 'ID16';

  public readonly SEC_ADDR_APPLICANT = 'applicant_address';
  public readonly SEC_ADDR_SHOP_OR_VENDOR = 'shop_or_vendor_address';

  public readonly FF_APPLI = 'ApplicantFiles'; // FileFor Applicant
  public readonly FF_SALESMAN = 'SalesmanFiles'; // FileFor Salesman section
  public readonly FF_SHOP = 'ShopFiles'; // FileFor Attachments
  public readonly FF_ADDRESS = 'AddressFiles'; // FileFor Address section
  public readonly FF_ATTACHMENTS = 'Attachments'; // FileFor Attachments
  public readonly FF_BANK = 'BankFiles'; // FileFor Salesman section

  public readonly FN_APPLI_PHOTO = 'Photo of Applicant';
  public readonly FN_APPLI_AADHAR = 'Applicant Aadhar';
  public readonly FN_APPLI_PAN = 'Applicant Pan';
  public readonly FN_APPLI_ITR = 'Applicant ITR';
  public readonly FN_APPLI_CHARACTER_CERT = 'Applicant Character Certificate';  
  public readonly FN_APPLI_AFFADAVAIT = 'Affadavait';

  public readonly SRC_APPLI_PHOTO = 'appli_photo_file_source';
  public readonly SRC_APPLI_AADHAR = 'appli_aadhar_file_source';
  public readonly SRC_APPLI_PAN = 'appli_pan_file_source';
  public readonly SRC_APPLI_ITR = 'appli_itr_file_source';
  public readonly SRC_APPLI_CHARACTER_CERT = 'appli_charct_cert_file_source';  
  public readonly SRC_APPLI_AFFADAVAIT = 'affadavait_file_source';

  public readonly FN_SM_PHOTO = 'Salesman Photo';
  public readonly FN_SM_AADHAR = 'Salesman Aadhar';
  public readonly FN_SM_AFFADAVAIT = 'Salesman Affadavait';
  public readonly FN_SM_CHARAC_CERT = 'Salesman Character Certificate';

  public readonly SRC_SM_PHOTO = 'salesman_photo_file_source';
  public readonly SRC_SM_AADHAR = 'salesman_aadhar_file_source';
  public readonly SRC_SM_AFFADAVAIT = 'salesman_affadavait_file_source';
  public readonly SRC_SM_CHARAC_CERT = 'salesman_character_file_source';

  public readonly FN_SHOP_PHOTO = 'Shop Photo';
  public readonly FN_SHOP_LIC = 'Shop License';
  public readonly FN_SHOP_BOUNDRY = 'Shop Boundry';

  public readonly SRC_SHOP_PHOTO = 'shop_photo_file_source';
  public readonly SRC_SHOP_LIC = 'shop_license_file_source';
  public readonly SRC_SHOP_BOUNDRY = 'boundries_file_source';

  public readonly FN_ATTACH_LAYOUT = 'Layout File';
  public readonly FN_ATTACH_SOLVENCYCERT = 'Solvency Certificate';
  public readonly FN_ATTACH_FIRESAFTY = 'Fire Safty';
  public readonly FN_ATTACH_AFFADAVAIT = 'Affadavait';
  public readonly FN_ATTACH_GSTIN = 'GSTIN File';
  public readonly FN_ATTACH_FSSAI = 'FSSAI File';
  public readonly FN_ATTACH_NOC_OF_PREM = 'No of premises';
  public readonly FN_ATTACH_CERT_OF_POLLU = 'Certificate of Pollution Control';

  public readonly SRC_ATTACH_LAYOUT = 'layoutPlan_file_source';
  public readonly SRC_ATTACH_SOLVENCYCERT = 'solvencyCertByAuth_file_source';
  public readonly SRC_ATTACH_FIRESAFTY = 'fireSafety_file_source';
  public readonly SRC_ATTACH_AFFADAVAIT = 'affadavait_file_source';
  public readonly SRC_ATTACH_GSTIN = 'uploadGstin_file_source';
  public readonly SRC_ATTACH_FSSAI = 'fssaiCert_file_source';
  public readonly SRC_ATTACH_NOC_OF_PREM = 'nocOfPrem_file_source';
  public readonly SRC_ATTACH_CERT_OF_POLLU = 'certOfPollutionControl_file_source';

  public readonly FN_ADDR_OWNER_DOC = 'Ownership document';
  public readonly SRC_ADDR_OWNER_DOC = 'ownershipDoc_file_source';

  public readonly FN_BK_CAN_CHEQUE = 'Cancel Cheque';
  public readonly FN_BK_EARNEST = 'Earnest Money DD';
  public readonly SRC_BK_CAN_CHEQUE = 'cancel_cheque_file_source';
  public readonly SRC_BK_EARNEST = 'earnest_file_source';


  isCustomer: boolean;
  screenSubType: string;
  applicationNumber: string;
  isFormEdit = false;
  licenseType: string;
  randNum: number;

  isActionBtnFor = '';
  isReadOnly = false;
  isSelectReadOnly = null;
  licenseStatus: string;
  licenseStage: string;
  licenseApplicationData: any;
  licenseComments = [];

  commentForm: FormGroup;
  sendbackForm: FormGroup;
  startDate = new Date();
  startDateFormated: any;

  formSubmitted = false;
  commandformSub = false;

  officerLevel: string;
  isRejected: boolean;
  isSendBack: boolean;
  sendBackList: any;

  stateList: any;
  villageList: any;
  blockList: any;
  municipalityList: any;
  districtsList: any;
  countryList: any;
  districtListByState = {
    [this.SEC_ADDR_APPLICANT]: [],
    [this.SEC_ADDR_SHOP_OR_VENDOR]: []
  };
  talukList = {
    [this.SEC_ADDR_APPLICANT]: [],
    [this.SEC_ADDR_SHOP_OR_VENDOR]: []
  };
  
  fileArr = {
    [this.FF_APPLI]: [],
    [this.FF_SALESMAN]: [],
    [this.FF_SHOP]: [],
    [this.FF_ADDRESS]: [],
    [this.FF_ATTACHMENTS]: [],
    [this.FF_BANK]: []
  };

  public readonly PROP_BHANG_APPLI_DET = 'bhangApplicantDetails';
  public readonly PROP_BHANG_SALESMAN_DET = 'salesManList';
  public readonly PROP_BHANG_ADDRESS_DET = 'addressList';
  public readonly PROP_BHANG_SHOP_DET = 'retailShopDetails';
  public readonly PROP_BHANG_ATTACHMENT = 'bhangAdditionalInfo';
  public readonly PROP_BHANG_RECEIPT_ACC = 'bhangReceiptAccounts';
  public readonly PROP_BHANG_BANK_DET = 'bankList';
  docuPropObj = {
    bhangApplicantDetails: 'applicantDocumentList',
    salesManDetailList: 'salesManDocumentList',
    addressList: 'addressDocumentList',
    retailShopDetails: 'retailShopDocumentList',
    bhangAdditionalInfo: 'additionalInfoDocumentList',
    bankList: 'bankDocumentList',
  };

  screenSubTypes = {
    [this.SCREEN_FOR_ID14A]: this.LIC_TYPE_ID14A,
    [this.SCREEN_FOR_ID14B]: this.LIC_TYPE_ID14B,
    [this.SCREEN_FOR_ID15]: this.LIC_TYPE_ID15,
    [this.SCREEN_FOR_ID16]: this.LIC_TYPE_ID16,
  };
  

  valiReqOnly = [Validators.required];
  valiForMob = [Validators.required, Validators.minLength(10),Validators.maxLength(10)];
  valiForEmail = [Validators.required, Validators.email];
  valiForPan = [Validators.required, Validators.minLength(10),Validators.maxLength(10),Validators.pattern("^[A-Z]{5}[0-9]{4}[A-Z]{1}")];
  valiForPinCode = [Validators.required, Validators.minLength(6),Validators.maxLength(6)];


  bhangForm: FormGroup;
  bhangLicenseType: any;
  entityList: any;
  maxDate = moment(new Date()).format('YYYY-MM-DD');
  salutationObj: any;
  genders: any;
  districtList: any;
  tehsilList: any;
  localityTypeList: any;
  muncipalList: any;
  urbanFlag = false;
  ruralFlag = false;
  urbancheck: any;
  premisesDistrictsList: any;
  premisesTehsilList: any;
  premisesMuncipalList: any;
  premisesBlockList: any;
  premisesPoliceStationList: any;
  premisesUrbanFlag = false;
  premisesRuralFlag = false;
  bankList: any;
  ITRList: any;
  premisesOwnershipList: any;
  registrationObj: any = JSON.parse(sessionStorage.getItem('formdata'));
  post: Post = { startDate: new Date(Date.now()) };
  licenseTitle: any;
  headerOne: any;
  headerTwo: any;
  headerThree: any;


  urbanKey = 'Urban';
  ruralKey = 'Rural';
  urbanRuralArr = [
    { key: this.urbanKey, value: this.urbanKey },
    { key: this.ruralKey, value: this.ruralKey }
  ];

  policeStationList = [
    { id: 1, name: 'Police Station 1', code: 'P1' },
    { id: 2, name: 'Police Station 2', code: 'B2' }
  ];

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private formBuilder: FormBuilder,
    private alert: AlertService,
    private authService: AuthService,
    private genderSer: GenderService,
    private stateSer: StatemasterService,
    private districtSer: DistrictMasterService,
    private municipalitySer: MunicipalityMasterService,
    private villageSer: VillageMasterService,
    private blockSer: BlockMasterService,
    private talukSer: TalukMasterService,
    private docUplSer: DocumentUploadService,
    private licenseSer: LicenceManagementService,
  ) { }

  ngOnInit() {
    this.isCustomer = this.authService.isCustomer();
    this.randNum = this.randomIntFromInterval(1, 100);
    this.startDateFormated = moment(this.startDate).format('YYYY-MM-DD');
    this.route.params.subscribe(params => {
      if (params.screenSubType) {
        this.screenSubType = params.screenSubType;
        this.bhangLicenseType = params.screenSubType;
        this.licenseType = this.screenSubTypes[this.screenSubType];
        this.loadBhangLicense(params.screenSubType);
      }
    });
    this.loadFormControl();
  }

  getForm() {
    return this.bhangForm;
  }

  getFormCntr(element) {
    return this.getForm().get(element);
  }

  getAppliFormCntr(element) {
    return this.getFormCntr(this.PROP_BHANG_APPLI_DET).get(element);
  }

  getAppliAddrFormCntr(element) {
    return this.getFormCntr(this.PROP_BHANG_ADDRESS_DET).get('0').get(element);
  }

  getShopOrVendorAddrFormCntr(element) {
    return this.getFormCntr(this.PROP_BHANG_ADDRESS_DET).get('1').get(element);
  }

  getShopFormCntr(element) {
    return this.getFormCntr(this.PROP_BHANG_SHOP_DET).get(element);
  }

  getAttachFormCntr(element) {
    return this.getFormCntr(this.PROP_BHANG_ATTACHMENT).get(element);
  }

  getReceiptAccFormCntr(element) {
    return this.getFormCntr(this.PROP_BHANG_RECEIPT_ACC).get(element);
  }

  getAddressFormCntr() {
    return this.getFormCntr(this.PROP_BHANG_ADDRESS_DET);
  }

  getSalemanFormCntr() {
    return this.getFormCntr(this.PROP_BHANG_SALESMAN_DET);
  }

  getBankDetFormCntr(element) {
    return this.getFormCntr(this.PROP_BHANG_BANK_DET).get('0').get(element);
  }

  getCommentFormCntr(element) {
    return this.commentForm.get(element);
  }

  addSaleMan() {
    (this.getFormCntr(this.PROP_BHANG_SALESMAN_DET) as FormArray).push(this.salesManListFormgroup());
  }

  remSaleMan(idx: number) {
    (this.getFormCntr(this.PROP_BHANG_SALESMAN_DET) as FormArray).removeAt(idx);
  }

  getSalesManLength(): number {
    return (this.getFormCntr(this.PROP_BHANG_SALESMAN_DET) as FormArray).length;
  }

  id15Passaddrow() {
    (this.getFormCntr('passList') as FormArray).push(this.passDetFormgroup());
  }

  id15PassremoveRow(idx: number) {
    (this.getFormCntr('passList') as FormArray).removeAt(idx);
  }

  id15PassgetFormLength(): number {
    return (this.getFormCntr('passList') as FormArray).length;
  }

  randomIntFromInterval(min, max) { // min and max included 
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  loadFormControl() {
    this.createBhangForm();
    (this.isFormEdit) ? this.loadLicenseData() : this.loadInitialFormData();
    this.createcommentForm();
  }

  loadInitialFormData() {

    // this.getAllCountrys();
    this.getEntity();
    this.getSalutation();
    this.getGender();
    this.getAllStates();
    this.getBank();
    this.getITR();
    this.getOwnership();

    this.processFormActionReadOnly();
  }

  loadLicenseData() {
    this.licenseSer.findLicenseApplication(this.applicationNumber).subscribe((resp: any) => {
      const { responseCode: respCode, content: respContent } = resp;
      if (respCode === 200) {
        console.log('respContent::',respContent);
        this.licenseApplicationData = respContent;

        this.patchForm();

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
    const { bhangLicenses: licenseObj, applicationDate, licenseType } = this.licenseApplicationData;
    const {
      bhangApplicantDetails, passList,
      addressList, salesManList, bankList,
    } = licenseObj;

    return {
      applicationDate, licenseType, licenseObj, bhangApplicantDetails, passList, addressList, salesManList, bankList
    };
  }

  patchForm() {

    const {
      applicationDate, addressList,
      distilleryApplicantDetails, bankList
    } = this.getLicenseData();

    return true;

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

  buildBhangAppliDetFormGroup(data?: any) {
    const basicEle = {
      aadharNumber: ['', this.valiReqOnly ],
      dob: [ '', this.valiReqOnly ],
      emailId: [ '', this.valiForEmail ],
      firstName: ['', this.valiReqOnly],
      genderCode: ['', this.valiReqOnly],
      lastName: ['', this.valiReqOnly],
      middleName: ['', this.valiReqOnly],
      mobileNumber: ['', this.valiForMob],
      panNumber: ['', this.valiForPan],
      salutation: ['', this.valiReqOnly],
      fatherHusbandName: ['', this.valiReqOnly],

      appli_photo_file: ['', this.valiReqOnly],
      appli_photo_file_source: ['', this.valiReqOnly],

      appli_aadhar_file: ['', this.valiReqOnly],
      appli_aadhar_file_source: ['', this.valiReqOnly],

      appli_pan_file: ['', this.valiReqOnly],
      appli_pan_file_source: ['', this.valiReqOnly],
    };
    switch (this.bhangLicenseType) {
      case this.SCREEN_FOR_ID14B:
        console.log('AppliDet-SCREEN_FOR_ID14B::');
        _.mergeWith(basicEle, {
          itrAssesmentYearCode: ['', this.valiReqOnly],
          previousItrNotFiled: ['', this.valiReqOnly],

          appli_itr_file: ['', this.valiReqOnly],
          appli_itr_file_source: ['', this.valiReqOnly],

          appli_charct_cert_file: ['', this.valiReqOnly],
          appli_charct_cert_file_source: ['', this.valiReqOnly],

          affadavait_file: ['', this.valiReqOnly],
          affadavait_file_source: ['', this.valiReqOnly],
        });
        break;
    }
    return this.formBuilder.group(basicEle);
  }

  buildAddressFormGroup(identifier, data?: any) {
    const basicEle = {
      addressIdentifier: [identifier],
      districtCode: [ '', this.valiReqOnly ],
      block: [ '', this.valiReqOnly ],
      country: ['INDIA', this.valiReqOnly],
      locality: [ '', this.valiReqOnly ],
      localityType: [ '', this.valiReqOnly ],
      municipalAreaCode: [''],
      pinCode: [ '', this.valiForPinCode ],
      policeStationCode: [ '', this.valiReqOnly ],
      stateCode: [ '', this.valiReqOnly ],
      street: [ '', this.valiReqOnly ],
      tahsilCode: [ '', this.valiReqOnly ],
      village: [''],
      ward: ['']
    };
    if (identifier === this.SEC_ADDR_SHOP_OR_VENDOR) {

      switch (this.bhangLicenseType) {
        case this.SCREEN_FOR_ID14B:
          console.log('Address-SCREEN_FOR_ID14B::');
          _.mergeWith(basicEle, {
            firmType: ['', this.valiReqOnly],

            ownershipDoc_file: ['', this.valiReqOnly],
            ownershipDoc_file_source: ['', this.valiReqOnly],
          });
          break;
        case this.SCREEN_FOR_ID14A:
          console.log('Address-SCREEN_FOR_ID14A::');
          _.mergeWith(basicEle, {
            annualQuantity: ['', this.valiReqOnly],
            monthlyQuantity: ['', this.valiReqOnly],
            annualConsiderationFee: ['', this.valiReqOnly],
            descriptionOfPermises: ['', this.valiReqOnly],
          });
          break;
      }
    }
    console.log('identifier::', identifier);
    console.log('basicEle::', basicEle);
    return this.formBuilder.group(basicEle);
  }

  salesManListFormgroup(data?: any) {
    const basicEle = {
      fullName: [ '', this.valiReqOnly ],
      address: [ '', this.valiReqOnly ]
    };
    switch (this.bhangLicenseType) {
      case this.SCREEN_FOR_ID14B:
        console.log('salesMan-SCREEN_FOR_ID14B::');
        _.mergeWith(basicEle, {
          genderCode: [ '', this.valiReqOnly ],
          dob: [ '', this.valiReqOnly ],
          fatherName: [ '', this.valiReqOnly ],
          mobileNumber: [ '', this.valiForMob ],
          identificationMark: ['', this.valiReqOnly ],
          previouslyWorkedShop: ['', this.valiReqOnly ],
          aadharNumber: ['', this.valiReqOnly ],

          salesman_photo_file: [ '', this.valiReqOnly ],
          salesman_photo_file_source: [ '', this.valiReqOnly ],

          salesman_aadhar_file: [ '', this.valiReqOnly ],
          salesman_aadhar_file_source: [ '', this.valiReqOnly ],

          salesman_affadavait_file: [ '', this.valiReqOnly ],
          salesman_affadavait_file_source: [ '', this.valiReqOnly ],

          salesman_character_file: [ '', this.valiReqOnly ],
          salesman_character_file_source: [ '', this.valiReqOnly ],
        });
        break;
    }
    return this.formBuilder.group(basicEle);
  }

  retailShopDetFormgroup(data?: any) {
    const basciEle = {
      shopName: [ '', this.valiReqOnly ],
      licenseNumber: [ '', this.valiReqOnly ],
      licenseYear: [ '', this.valiReqOnly ],
      licenseValidityDate: [ '', this.valiReqOnly ],

      shop_photo_file: [ '', this.valiReqOnly ],
      shop_photo_file_source: [ '', this.valiReqOnly ],

      shop_license_file: [ '', this.valiReqOnly ],
      shop_license_file_source: [ '', this.valiReqOnly ],

      boundries_file: [ '', this.valiReqOnly ],
      boundries_file_source: [ '', this.valiReqOnly ],
    };
    return this.formBuilder.group(basciEle);
  }

  bhangAdditionalDetFormgroup(data?: any) {
    const basciEle = {
      gstNumber: [ '', this.valiReqOnly ],
      solvencyCertificateValidity: [ '', this.valiReqOnly ],

      layoutPlan_file: [ '', this.valiReqOnly ],
      layoutPlan_file_source: [ '', this.valiReqOnly ],

      fireSafety_file: [ '', this.valiReqOnly ],
      fireSafety_file_source: [ '', this.valiReqOnly ],

      affadavait_file: [ '', this.valiReqOnly ],
      affadavait_file_source: [ '', this.valiReqOnly ],

      uploadGstin_file: [ '', this.valiReqOnly ],
      uploadGstin_file_source: [ '', this.valiReqOnly ],

      fssaiCert_file: [ '', this.valiReqOnly ],
      fssaiCert_file_source: [ '', this.valiReqOnly ],

      nocOfPrem_file: [ '', this.valiReqOnly ],
      nocOfPrem_file_source: [ '', this.valiReqOnly ],

      certOfPollutionControl_file: [ '', this.valiReqOnly ],
      certOfPollutionControl_file_source: [ '', this.valiReqOnly ],

      solvencyCertByAuth_file: [ '', this.valiReqOnly ],
      solvencyCertByAuth_file_source: [ '', this.valiReqOnly ],
    };
    return this.formBuilder.group(basciEle);
  }

  bhangReceiptAccountsFormgroup(data?: any) {
    const basciEle = {
      accountDate: [ '', this.valiReqOnly ],
      quantityStore: [ '', this.valiReqOnly ],
      quantityReceived: [ '', this.valiReqOnly ],
      totalAccounted: [ '', this.valiReqOnly ],
      balanceStore: [ '', this.valiReqOnly ],
      placeBhang: [ '', this.valiReqOnly ],
    };
    return this.formBuilder.group(basciEle);
  }

  passDetFormgroup(data?: any) {
    return this.formBuilder.group({
      passNumber: '',
      passDate: '',
      remarks: ''
    });
  }

  buildBankDetFormGroup(data?: any) {
    const basicEle = {
      ifscCode: ['', this.valiReqOnly],
      bankNameCode: ['', this.valiReqOnly],
      bankBranch: ['', this.valiReqOnly],
      accountNumber: ['', this.valiReqOnly],

      earnest_file: ['', this.valiReqOnly],
      earnest_file_source: ['', this.valiReqOnly],
    };
    switch (this.bhangLicenseType) {
      case this.SCREEN_FOR_ID14B:
        console.log('bankdet-SCREEN_FOR_ID14B::');
        _.mergeWith(basicEle, {
          cancel_cheque_file: ['', this.valiReqOnly],
          cancel_cheque_file_source: ['', this.valiReqOnly]
        });
        break;
    }
    return this.formBuilder.group(basicEle);
  }

  loadBhangLicense(category) {
    switch (category) {
      case 'id14a':
        this.licenseTitle = 'Application for Retail License I.D 14A';
        this.headerOne = 'Applicant Personal Details';
        this.headerTwo = 'Address of Applicant';
        this.headerThree = 'Shop Address';
        break;
      case 'id14b':
        this.licenseTitle = 'Application for License I.D 14B';
        this.headerOne = 'Licensee Name';
        this.headerTwo = 'Licencee Address';
        this.headerThree = 'Area Which the Licensee Hold Contract to Supply';
        break;
      case 'id15':
        this.licenseTitle = 'Application for License I.D - 15';
        this.headerOne = 'Applicant Personal Details';
        this.headerTwo = 'Address of Applicant';
        this.headerThree = 'Area which the licencee hold contract to supply';
        break;
      case 'id16':
        this.licenseTitle = 'Application for License I.D - 16';
        this.headerOne = 'Applicant Personal Details';
        this.headerTwo = 'Address of Applicant';
        this.headerThree = 'Vendor Address';
        break;
    }
  }

  createBhangForm() {
    const basicEle = {
      financialYear: ['2020-2021'],
      applicationDate: [this.startDateFormated],
      bhangLicenseType: [''],
      bhangApplicantDetails: this.buildBhangAppliDetFormGroup(),
      addressList: this.formBuilder.array([
        this.buildAddressFormGroup(this.SEC_ADDR_APPLICANT),
        this.buildAddressFormGroup(this.SEC_ADDR_SHOP_OR_VENDOR),
      ]),
      // Salesman Details
      salesManList: this.formBuilder.array([
        this.salesManListFormgroup()
      ]),

      bankList: this.formBuilder.array([
        this.buildBankDetFormGroup()
      ]),

      // Payment Processing Fees
      applicationFees: ['', Validators.required],
    };

    switch (this.bhangLicenseType) {
      case this.SCREEN_FOR_ID14A:
        console.log('SCREEN_FOR_ID14A::');
        _.mergeWith(basicEle, {
          retailShopDetails: this.retailShopDetFormgroup(),
        });
        break;
      case this.SCREEN_FOR_ID14B:
        console.log('SCREEN_FOR_ID14B::');
        _.mergeWith(basicEle, {
          bhangAdditionalInfo: this.bhangAdditionalDetFormgroup(),
        });
        break;
      case this.SCREEN_FOR_ID15:
        console.log('SCREEN_FOR_ID15::');
        _.mergeWith(basicEle, {

          // Account of all Receipt & Issue
          bhangReceiptAccounts: this.bhangReceiptAccountsFormgroup(),

          // Pass under which issued was made
          passList: this.formBuilder.array([
            this.passDetFormgroup()
          ]),
        });
        break;
      case this.SCREEN_FOR_ID16:
        console.log('SCREEN_FOR_ID16::');
        _.mergeWith(basicEle, {
          // Licence for the wholesale vendor of Bhang for export
          vendorName: [''],
        });
        break;
    }
    console.log('this.bhangForm-ele::', basicEle);

    this.bhangForm = this.formBuilder.group(basicEle);
    console.log('this.bhangForm::', this.bhangForm);
  }

  getEntity() {
    this.entityList = [
      { id: 1, name: 'FL3', code: 'FL3' },
      { id: 2, name: 'FL3A', code: 'FL3A' },
      { id: 3, name: 'FL1', code: 'FL1' },
      { id: 4, name: 'FL1A', code: 'FL1A' },
      { id: 5, name: 'FL2', code: 'FL2' },
      { id: 6, name: 'CL2', code: 'CL2' },
      { id: 7, name: 'FL2B', code: 'FL2B' },
      { id: 8, name: 'BWFL2A', code: 'BWFL2A' },
      { id: 9, name: 'BWFL2B', code: 'BWFL2B' },
      { id: 10, name: 'BWFL2C', code: 'BWFL2C' },
      { id: 11, name: 'BWFL2D', code: 'BWFL2D' },
    ];
  }

  getSalutation() {
    this.salutationObj = [
      { id: 1, name: 'Mr.' },
      { id: 2, name: 'Mrs.' },
      { id: 3, name: 'Miss.' }
    ];
  }

  getGender() {
    const searchObj = { filters: { code: null, name: null, isActive: true }, pageNo: 0, paginationSize: 5 };
    this.genderSer.searchGender(searchObj).subscribe((responceData: any) => {
      this.genders = responceData.data.contents;
    });
  }


  getAllStates() {
    this.stateSer.getState().subscribe((responceData: any) => {
      this.stateList = responceData.data;
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
    this.talukSer.gettalukByDistId(id).subscribe((responceData: any) => {
      this.talukList[key] = responceData.data;
    });
  }

  getBank() {
    this.bankList = [
      { id: 1, name: 'SBI', code: 'SBI' },
      { id: 2, name: 'ICIC', code: 'ICIC' },
      { id: 3, name: 'HDFC', code: 'HDFC' }
    ];
  }

  getITR() {
    this.ITRList = [
      { id: 1, name: '1. Current Assesment Year 2020-2021 - ITR', code: 'ITR1' },
      { id: 2, name: '2. Previous Assesment Year 2019-2020 - ITR', code: 'ITR2' }
    ];
  }

  getOwnership() {
    this.premisesOwnershipList = [
      { id: 1, name: 'One', code: 'one' },
      { id: 2, name: 'Two', code: 'two' }
    ];
  }

  onChangeState(stateId) {
    if (stateId) {
      this.bhangForm.patchValue({
        stateCode: this.stateList.find(item => item.id == stateId).stateCode,
        stateDesc: this.stateList.find(item => item.id == stateId).stateName
      });
      this.districtSer.getDistrictsByStateid(stateId).subscribe((responceData: any) => {
        this.districtList = responceData.data;
      });
    }
  }

  onDistrictChange1(districtId) {
    if (districtId) {
      this.bhangForm.patchValue({
        districtCode: this.districtList.find(item => item.id == districtId).code,
        districtDesc: this.districtList.find(item => item.id == districtId).name
      });
      this.tehsilList = [
        { id: 1, name: 'Chennai North', code: 'CHEN' },
        { id: 2, name: 'Chennai South', code: 'CHES' }
      ];
      this.blockList = [
        { id: 1, name: 'Black 1', code: 'B1' },
        { id: 2, name: 'Black 2', code: 'B2' }
      ];
      this.muncipalList = [
        { id: 1, name: 'MunicipalCorporation' },
        { id: 2, name: 'Nagar Palika' },
        { id: 3, name: 'Other Municipal Area' },
        { id: 4, name: 'Cantt. Board' }
      ];
    }
  }

  onChangeTehsil(tehsilId) {
    if (tehsilId) {
      this.bhangForm.patchValue({
        tahsilCode: this.tehsilList.find(item => item.id == tehsilId).code,
        tahsilDesc: this.tehsilList.find(item => item.id == tehsilId).name
      });
    }
  }

  onChangeLocalityType(localityTypeId) {
    console.log(localityTypeId);
    if (localityTypeId === "1") {
      this.urbanFlag = true;
      this.ruralFlag = false;
      this.bhangForm.controls.muncipal.setValidators([Validators.required]);
      this.bhangForm.controls.muncipal.updateValueAndValidity();
      this.bhangForm.controls.premisesMuncipal.setValidators([Validators.required]);
      this.bhangForm.controls.premisesMuncipal.updateValueAndValidity();
      this.bhangForm.controls.premisesBlock.setValidators([]);
      this.bhangForm.controls.premisesBlock.updateValueAndValidity();
      this.bhangForm.controls.premisesVillage.setValidators([]);
      this.bhangForm.controls.premisesVillage.updateValueAndValidity();
      this.bhangForm.controls.block.setValidators([]);
      this.bhangForm.controls.block.updateValueAndValidity();
      this.bhangForm.controls.village.setValidators([]);
      this.bhangForm.controls.village.updateValueAndValidity();
    } else if (localityTypeId === "2") {
      this.ruralFlag = true;
      this.urbanFlag = false;
      this.bhangForm.controls.muncipal.setValidators([]);
      this.bhangForm.controls.muncipal.updateValueAndValidity();
      this.bhangForm.controls.premisesMuncipal.setValidators([]);
      this.bhangForm.controls.premisesMuncipal.updateValueAndValidity();
      this.bhangForm.controls.block.setValidators([Validators.required]);
      this.bhangForm.controls.block.updateValueAndValidity();
      this.bhangForm.controls.village.setValidators([Validators.required]);
      this.bhangForm.controls.village.updateValueAndValidity();
      this.bhangForm.controls.premisesBlock.setValidators([Validators.required]);
      this.bhangForm.controls.premisesBlock.updateValueAndValidity();
      this.bhangForm.controls.premisesVillage.setValidators([Validators.required]);
      this.bhangForm.controls.premisesVillage.updateValueAndValidity();
    } else {
      this.ruralFlag = false;
      this.urbanFlag = false;
    }
  }

  onChangeMuncipal(muncipalId) {
    if (muncipalId) {
      this.bhangForm.patchValue({
        muncipalCode: this.muncipalList.find(item => item.id == muncipalId).code,
        muncipalDesc: this.muncipalList.find(item => item.id == muncipalId).name
      });
    }
  }

  onChangeBlock(blockId) {
    if (blockId) {
      this.bhangForm.patchValue({
        blockCode: this.blockList.find(item => item.id == blockId).code,
        blockDesc: this.blockList.find(item => item.id == blockId).name
      });
    }
  }

  onChangepoliceStation(policeStationId) {
    if (policeStationId) {
      this.bhangForm.patchValue({
        policeStationCode: this.policeStationList.find(item => item.id == policeStationId).code,
        policeStationDesc: this.policeStationList.find(item => item.id == policeStationId).name
      });
    }
  }

  onCheckboxChange(checkValue) {
    console.log(checkValue);
    this.urbancheck = checkValue;
    const { localityType } = this.bhangForm.value;
    if (this.urbancheck === true) {
      const { locality, street, pincode, state,
        stateCode, stateDesc, district, districtCode, districtDesc, tehsil, tahsilCode, tahsilDesc, muncipal, muncipalCode, muncipalDesc, ward, block, blockCode, blockDesc, village, policeStation,
        policeStationCode, policeStationDesc
      } = this.bhangForm.value;
      this.bhangForm.patchValue({
        premisesPincode: pincode,
        premisesState: state,
        premisesStateCode: stateCode,
        premisesStateDesc: stateDesc,
        premisesDistrict: district,
        premisesDistrictCode: districtCode,
        premisesDistrictDesc: districtDesc,
        premisesTehsil: tehsil,
        premisesTehsilCode: tahsilCode,
        premisesTehsilDesc: tahsilDesc,
        premisesUrban: localityType,
        premisesMuncipal: muncipal,
        premisesMuncipalCode: muncipalCode,
        premisesMuncipalDesc: muncipalDesc,
        premisesWard: ward,
        premisesBlock: block,
        premisesBlockCode: blockCode,
        premisesBlockDesc: blockDesc,
        premisesVillage: village,
        premisesPoliceStation: policeStation,
        premisesPoliceStationCode: policeStationCode,
        premisesPoliceStationDesc: policeStationDesc,
        premisesLocality: locality,
        premisesStreet: street,
      });
      this.onChangePremisesState(state);
      this.onChangePremisesDistrict(district, false);
      this.onChangeLocalityTypePremises(localityType);
      this.onChangeMuncipalPremises(muncipal);
      this.onChangeBlockPremises(block);
      this.onChangepoliceStationPremises(policeStation);

    } else if (this.urbancheck === false) {
      this.bhangForm.patchValue({
        premisesPincode: '',
        premisesState: '',
        premisesStateCode: '',
        premisesStateDesc: '',
        premisesDistrict: '',
        premisesDistrictCode: '',
        premisesDistrictDesc: '',
        premisesTehsil: '',
        premisesTehsilCode: '',
        premisesTehsilDesc: '',
        premisesUrban: '',
        premisesMuncipal: '',
        premisesMuncipalCode: '',
        premisesMuncipalDesc: '',
        premisesWard: '',
        premisesBlock: '',
        premisesBlockCode: '',
        premisesBlockDesc: '',
        premisesVillage: '',
        premisesPoliceStation: '',
        premisesLocality: '',
        premisesStreet: '',
      });
      this.onChangeLocalityTypePremises(localityType);
    }
  }

  onChangePremisesState(premisesStateId) {
    if (premisesStateId) {
      this.bhangForm.patchValue({
        premisesStateCode: this.stateList.find(item => item.id == premisesStateId).stateCode,
        premisesStateDesc: this.stateList.find(item => item.id == premisesStateId).stateName
      });
      this.districtSer.getDistrictsByStateid(premisesStateId).subscribe((responceData: any) => {
        this.premisesDistrictsList = responceData.data;
      });
    }
  }

  onChangePremisesDistrict(premisesDistrictId, changeFlag) {
    if (premisesDistrictId) {
      console.log(this.premisesDistrictsList);
      if (changeFlag) {
        this.bhangForm.patchValue({
          premisesDistrictCode: this.premisesDistrictsList.find(item => item.id == premisesDistrictId).code,
          premisesDistrictDesc: this.premisesDistrictsList.find(item => item.id == premisesDistrictId).name
        });
      }
      this.premisesTehsilList = [
        { id: 1, name: 'Chennai North', code: 'CHEN' },
        { id: 2, name: 'Chennai South', code: 'CHES' }
      ];
      this.premisesMuncipalList = [
        { id: 1, name: 'MunicipalCorporation' },
        { id: 2, name: 'Nagar Palika' },
        { id: 3, name: 'Other Municipal Area' },
        { id: 4, name: 'Cantt. Board' }
      ];
      this.premisesBlockList = [
        { id: 1, name: 'Black 1', code: 'B1' },
        { id: 2, name: 'Black 2', code: 'B2' }
      ];
      this.premisesPoliceStationList = [
        { id: 1, name: 'Police Station 1', code: 'P1' },
        { id: 2, name: 'Police Station 2', code: 'B2' }
      ];
    }
  }

  onChangeLocalityTypePremises(checkValue) {
    console.log('checkValue ' + checkValue);
    const urbanshow = checkValue;
    if (urbanshow == "1") {
      this.premisesUrbanFlag = true;
      this.premisesRuralFlag = false;
      this.bhangForm.controls.muncipal.setValidators([Validators.required]);
      this.bhangForm.controls.muncipal.updateValueAndValidity();
      this.bhangForm.controls.premisesMuncipal.setValidators([Validators.required]);
      this.bhangForm.controls.premisesMuncipal.updateValueAndValidity();
      this.bhangForm.controls.premisesBlock.setValidators([]);
      this.bhangForm.controls.premisesBlock.updateValueAndValidity();
      this.bhangForm.controls.premisesVillage.setValidators([]);
      this.bhangForm.controls.premisesVillage.updateValueAndValidity();
      this.bhangForm.controls.block.setValidators([]);
      this.bhangForm.controls.block.updateValueAndValidity();
      this.bhangForm.controls.village.setValidators([]);
      this.bhangForm.controls.village.updateValueAndValidity();
    } else if (urbanshow == "2") {
      this.premisesRuralFlag = true;
      this.premisesUrbanFlag = false;
      this.bhangForm.controls.muncipal.setValidators([]);
      this.bhangForm.controls.muncipal.updateValueAndValidity();
      this.bhangForm.controls.premisesMuncipal.setValidators([]);
      this.bhangForm.controls.premisesMuncipal.updateValueAndValidity();
      this.bhangForm.controls.block.setValidators([Validators.required]);
      this.bhangForm.controls.block.updateValueAndValidity();
      this.bhangForm.controls.village.setValidators([Validators.required]);
      this.bhangForm.controls.village.updateValueAndValidity();
      this.bhangForm.controls.premisesBlock.setValidators([Validators.required]);
      this.bhangForm.controls.premisesBlock.updateValueAndValidity();
      this.bhangForm.controls.premisesVillage.setValidators([Validators.required]);
      this.bhangForm.controls.premisesVillage.updateValueAndValidity();
    } else {
      this.premisesRuralFlag = false;
      this.premisesUrbanFlag = false;
    }
  }

  onChangeMuncipalPremises(muncipalId) {
    if (muncipalId) {
      this.bhangForm.patchValue({
        premisesMuncipalCode: this.premisesMuncipalList.find(item => item.id == muncipalId).code,
        premisesMuncipalDesc: this.premisesMuncipalList.find(item => item.id == muncipalId).name
      });
    }
  }

  onChangeBlockPremises(blockId) {
    if (blockId) {
      this.bhangForm.patchValue({
        premisesBlockCode: this.premisesBlockList.find(item => item.id == blockId).code,
        premisesBlockDesc: this.premisesBlockList.find(item => item.id == blockId).name
      });
    }
  }

  onChangepoliceStationPremises(policeStationId) {
    if (policeStationId) {
      this.bhangForm.patchValue({
        premisesPoliceStation: this.premisesPoliceStationList.find(item => item.id == policeStationId).code,
        premisesPoliceStationCode: this.premisesPoliceStationList.find(item => item.id == policeStationId).name
      });
    }
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

    const formControl = this.getFormCntr(this.PROP_BHANG_APPLI_DET);
    const fileUpRes = this.onFileChange(event, sourceName, fileFor, formControl);
    return (fileUpRes) ? this.fileArr[secName].push(sourceName) : false;

  }

  onShopFileChange(event, secName, sourceName, fileFor) {

    const formControl = this.getFormCntr(this.PROP_BHANG_SHOP_DET);
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

  onAttachFileChange(event, secName, sourceName, fileFor) {

    const formControl = this.getFormCntr(this.PROP_BHANG_ATTACHMENT);
    const fileUpRes = this.onFileChange(event, sourceName, fileFor, formControl);
    return (fileUpRes) ? this.fileArr[secName].push(sourceName) : false;

  }

  onAddressFileChange(event, secName, idx, addressCntrl, sourceName, fileFor) {
    const fileUpRes = this.onFileChange(event, sourceName, fileFor, addressCntrl);
    if (!fileUpRes) {
      return false;
    }

    if (this.fileArr[secName][idx]) {
      this.fileArr[secName][idx].push(sourceName);
    } else {
      this.fileArr[secName][idx] = [];
      this.fileArr[secName][idx].push(sourceName);
    }
    console.log('this.fileArr[secName]::', this.fileArr[secName]);

  }

  onBankFileChange(event, secName, sourceName, fileFor) {

    const formControl = this.getFormCntr(this.PROP_BHANG_BANK_DET).get('0');
    const fileUpRes = this.onFileChange(event, sourceName, fileFor, formControl);
    return (fileUpRes) ? this.fileArr[secName].push(sourceName) : false;

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

  onFileChange1(event, sourceName, form) {
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      form.patchValue({
        [sourceName]: file
      });
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
    const formCntrl = this.getFormCntr(this.PROP_BHANG_APPLI_DET);
    if (files.length === 0) {
      return [];
    }

    return await this.createFormData(applicationNo, files, formCntrl);
  }

  async uploadAttachFileChange(applicationNo) {
    const files = this.fileArr[this.FF_ATTACHMENTS];
    const formCntrl = this.getFormCntr(this.PROP_BHANG_ATTACHMENT);
    if (files.length === 0) {
      return [];
    }

    return await this.createFormData(applicationNo, files, formCntrl);
  }

  async uploadShopFiles(applicationNo) {
    const files = this.fileArr[this.FF_SHOP];
    const formCntrl = this.getFormCntr(this.PROP_BHANG_SHOP_DET);
    if (files.length === 0) {
      return [];
    }

    return await this.createFormData(applicationNo, files, formCntrl);
  }
  
  async uploadBankFileChange(applicationNo) {
    const files = this.fileArr[this.FF_BANK];
    const formCntrl = this.getFormCntr(this.PROP_BHANG_BANK_DET).get('0');
    if (files.length === 0) {
      return [];
    }

    return await this.createFormData(applicationNo, files, formCntrl);
  }

  async uploadAddressFileChange(applicationNo) {
    const files = this.fileArr[this.FF_ADDRESS];
    const allUpRes = [];

    if (files.length === 0) {
      return [];
    }
    console.log('files::', files);

    for (let idx = 0; idx < files.length; idx++) {
      // tslint:disable-next-line: no-string-literal
      const formCntrl = this.getAddressFormCntr()['controls'][idx];
      const fileArr = files[idx];
      if (fileArr) {
        console.log('formCntrl::', formCntrl);
        console.log('fileArr::', fileArr);
        const upRes = await this.createFormData(applicationNo, fileArr, formCntrl);
        allUpRes[idx] = upRes;
      }
    }
    return allUpRes;
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
      const { content: applicationNumber } = await this.licenseSer.getApplicationNo('BL');
      if (!applicationNumber) {
        this.alert.showError('Error while getting application number', 'Error');
        return;
      }
      return applicationNumber;
    }
  }

  async uploadDocuments(form, applicationNo, fileArrList) {
    console.log(fileArrList);
    const formData = new FormData();
    let uploadFlag = false;
    for (let i = 0; i < fileArrList.length; i++) {
      if (form.get(fileArrList[i].fileSource).value) {
        uploadFlag = true;
        formData.append('files[' + i + '].name', fileArrList[i].name);
        formData.append('files[' + i + '].file', form.get(fileArrList[i].fileSource).value);
      }
    }
    formData.append('moduleName', 'licence-mangement');
    formData.append('screenName', 'Bhang-License');
    formData.append('applicationNumber', applicationNo);
    console.log('formData::', formData);
    if (uploadFlag) {
      this.authService.fileUploadFlag = true;
      const res: any = await this.docUplSer.uploadDocuments(formData);
      this.authService.fileUploadFlag = false;
      console.log(res);
      return res;
    } else {
      return null;
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
      const workFlowName = 'Distillery Registration';

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
    this.isSelectReadOnly = this.isReadOnly ? 'disabled' : null;
  }

  onSubmit(saveType) {
    switch (this.bhangLicenseType) {
      case this.SCREEN_FOR_ID14A:
        this.addLicenseForID14A(saveType);
        break;
      case this.SCREEN_FOR_ID14B:
        this.addLicenseForID14B(saveType);
        break;
      case this.SCREEN_FOR_ID15:
        this.addLicenseForID15(saveType);
        break;
      case this.SCREEN_FOR_ID16:
        this.addLicenseForID16(saveType);
        break;
    }
  }

  async addLicenseForID14A(saveType) {
    this.formSubmitted = false;
    const form = this.bhangForm;
    console.log('this.bhangForm.valid::', form.valid);
    console.log('this.bhangForm.value::', form.value);
    console.log('this.bhangForm::', form);

    if (saveType !== this.STATUS_DRAFT && form.valid === false) {
      this.formSubmitted = true;
      return false;
    }

    const formValue = form.value;

    const {
      applicationDate,
      bhangApplicantDetails: formBhangAppliDet,
      addressList: formValaddressList,
      salesManList: formSalesManList,
      retailShopDetails: formBhangRetShopDet,
      bankList: formValbankList
    } = formValue;

    console.log('formValue::', formValue);
    console.log('this.fileArr::', this.fileArr);

    const bhangAppliDetProp = [
      'appli_photo_file', 'appli_photo_file_source', 'appli_aadhar_file', 'appli_aadhar_file_source',
      'appli_pan_file', 'appli_pan_file_source'
    ];

    const bhangRetShopDetProp = [
      'boundries_file', 'boundries_file_source', 'shop_license_file', 'shop_license_file_source',
      'shop_photo_file', 'shop_photo_file_source'
    ];

    const addressDetProp = [
      'ownershipDoc_file', 'ownershipDoc_file_source'
    ];

    const bankDetProp = [
      'cancel_cheque_file', 'cancel_cheque_file_source', 'earnest_file', 'earnest_file_source'
    ];

    bhangAppliDetProp.forEach((ele) => delete formBhangAppliDet[ele]);
    bhangRetShopDetProp.forEach((ele) => delete formBhangRetShopDet[ele]);
    bankDetProp.forEach((ele) => delete formValbankList[0][ele]);
    addressDetProp.forEach((ele) => delete formValaddressList[1][ele]);

    let uploadAppliFiles;
    let uploadShopFiles;
    let uploadBankFiles;

    const applicationNo = await this.getApplicationNo();
    uploadAppliFiles = await this.uploadAppliFiles(applicationNo);
    console.log('uploadAppliFiles::', uploadAppliFiles);
    uploadBankFiles = await this.uploadBankFileChange(applicationNo);
    console.log('uploadBankFiles::', uploadBankFiles);
    uploadShopFiles = await this.uploadShopFiles(applicationNo);
    console.log('uploadShopFiles::', uploadShopFiles);

    if (this.isFormEdit) {
      const {
        bhangApplicantDetails: apiDataBhangAppliDet, retailShopDetails: apiDataRetailShopDetails, 
        bankList: apiDatabankList
      } = this.getLicenseData();

      const { applicantDocumentList: apiDataapplicantDocumentList } = apiDataBhangAppliDet;
      uploadAppliFiles = this.combineArr(apiDataapplicantDocumentList, uploadAppliFiles);

      const { retailShopDocumentList: apiDataRetailShopDocumentList } = apiDataRetailShopDetails;
      uploadShopFiles = this.combineArr(apiDataRetailShopDocumentList, uploadShopFiles);

      const apiDatabankDocumentList = apiDatabankList[0].bankDocumentList;
      uploadBankFiles = this.combineArr(apiDatabankDocumentList, uploadBankFiles);
    }

    formBhangAppliDet.applicantDocumentList = uploadAppliFiles;
    formValbankList[0].bankDocumentList = uploadBankFiles;
    formBhangRetShopDet.retailShopDocumentList = uploadShopFiles;

    formBhangAppliDet.dob = this.invertDate(formBhangAppliDet.dob);
    delete formBhangAppliDet.dob;
    delete formBhangRetShopDet.licenseValidityDate;
    formBhangRetShopDet.licenseValidityDate = this.invertDate(formBhangRetShopDet.licenseValidityDate);

    console.log('formValue::', formValue);

    const payload: any = {
      applicationDate: this.invertDate(applicationDate),
      applicationNumber: applicationNo,
      status: saveType,
      bhangLicenses: {
        licenseType: this.licenseType,
        bhangApplicantDetails: formBhangAppliDet,
        salesManList: formSalesManList,
        addressList: formValaddressList,
        bankList: formValbankList,
        retailShopDetails: formBhangRetShopDet
      }
    };

    console.log('payload::', payload);

    await this.createLicense(payload, form, saveType);

    return true;
  }

  async addLicenseForID14B(saveType) {
    this.formSubmitted = false;
    const form = this.bhangForm;
    console.log('this.bhangForm.valid::', form.valid);
    console.log('this.bhangForm.value::', form.value);
    console.log('this.bhangForm::', form);

    if (saveType !== this.STATUS_DRAFT && form.valid === false) {
      this.formSubmitted = true;
      return false;
    }

    const formValue = form.value;

    const {
      applicationDate,
      bhangApplicantDetails: formBhangAppliDet,
      addressList: formValaddressList,
      salesManList: formSalesManList,
      bhangAdditionalInfo: formBhangAdditionalInfo,
      bankList: formValbankList,
    } = formValue;

    console.log('formValue::', formValue);
    console.log('this.fileArr::', this.fileArr);

    const bhangAppliDetProp = [
      'appli_photo_file', 'appli_photo_file_source', 'appli_aadhar_file', 'appli_aadhar_file_source',
      'appli_pan_file', 'appli_pan_file_source', 'affadavait_file', 'affadavait_file_source',
      'appli_charct_cert_file', 'appli_charct_cert_file_source', 'appli_itr_file', 'appli_itr_file_source'
    ];

    const bhangAddiInfoProp = [
      'affadavait_file', 'affadavait_file_source', 'certOfPollutionControl_file', 'certOfPollutionControl_file_source',
      'fireSafety_file', 'fireSafety_file_source', 'layoutPlan_file', 'layoutPlan_file_source',
      'nocOfPrem_file', 'nocOfPrem_file_source', 'solvencyCertByAuth_file', 'solvencyCertByAuth_file_source',
      'uploadGstin_file', 'uploadGstin_file_source', 'fssaiCert_file', 'fssaiCert_file_source'
    ];

    const salesManProp = [
      'salesman_photo_file', 'salesman_photo_file_source', 'salesman_aadhar_file', 'salesman_aadhar_file_source',
      'salesman_affadavait_file', 'salesman_affadavait_file_source', 'salesman_character_file', 'salesman_character_file_source'
    ];

    const addressDetProp = [
      'ownershipDoc_file', 'ownershipDoc_file_source'
    ];

    const bankDetProp = [
      'cancel_cheque_file', 'cancel_cheque_file_source', 'earnest_file', 'earnest_file_source'
    ];

    bhangAppliDetProp.forEach((ele) => delete formBhangAppliDet[ele]);
    bhangAddiInfoProp.forEach((ele) => delete formBhangAdditionalInfo[ele]);
    bankDetProp.forEach((ele) => delete formValbankList[0][ele]);
    addressDetProp.forEach((ele) => delete formValaddressList[1][ele]);
    salesManProp.forEach((ele) => formSalesManList.forEach((salemanEle) => delete salemanEle[ele]));

    let uploadAppliFiles;
    let uploadBankFiles;
    let uploadAddressFiles;
    let uploadAttachFiles;
    let uploadSalesmanFiles;

    const applicationNo = await this.getApplicationNo();
    uploadAppliFiles = await this.uploadAppliFiles(applicationNo);
    console.log('uploadAppliFiles::', uploadAppliFiles);
    uploadBankFiles = await this.uploadBankFileChange(applicationNo);
    console.log('uploadBankFiles::', uploadBankFiles);
    uploadAddressFiles = await this.uploadAddressFileChange(applicationNo);
    console.log('uploadAddressFiles::', uploadAddressFiles);
    uploadAttachFiles = await this.uploadAttachFileChange(applicationNo);
    console.log('uploadAttachFiles::', uploadAttachFiles);
    uploadSalesmanFiles = await this.uploadSalesmanFileChange(applicationNo);
    console.log('uploadSalesmanFiles::', uploadSalesmanFiles);

    if (this.isFormEdit) {
      const {
        bhangApplicantDetails: apiDataBhangAppliDet, retailShopDetails: apiDataRetailShopDetails,
        addressList: apiDataaddressList, salesManList: apiDataSalesManList, bankList: apiDatabankList,
        bhangAdditionalInfo: apiDataBhangAddiInfo
      } = this.getLicenseData();

      const { applicantDocumentList: apiDataapplicantDocumentList } = apiDataBhangAppliDet;
      uploadAppliFiles = this.combineArr(apiDataapplicantDocumentList, uploadAppliFiles);

      const apiDatabankDocumentList = apiDatabankList[0].bankDocumentList;
      uploadBankFiles = this.combineArr(apiDatabankDocumentList, uploadBankFiles);

      if (apiDataaddressList.length > 0) {
        let fileInst;
        apiDataaddressList.forEach((ele, ind) => {
          fileInst = uploadAddressFiles[ind];
          fileInst = this.combineArr(ele.addressDocumentList, (fileInst) ? fileInst : []);
        });
      }

      const { additionalInfoDocumentList: apiDataAddiInfoDocList } = apiDataBhangAddiInfo;
      uploadAttachFiles = this.combineArr(apiDataAddiInfoDocList, uploadAttachFiles);

      if (apiDataSalesManList.length > 0) {
        let fileInst;
        apiDataSalesManList.forEach((ele, ind) => {
          fileInst = uploadSalesmanFiles[ind];
          fileInst = this.combineArr(ele.salesManDocumentList, (fileInst) ? fileInst : []);
        });
      }
    }

    formBhangAppliDet.applicantDocumentList = uploadAppliFiles;
    formValbankList[0].bankDocumentList = uploadBankFiles;
    formValaddressList.forEach((ele, ind) => {
      console.log('uploadAddressFileChange-ind::', ind);
      console.log('uploadAddressFileChange-ind111::', uploadAddressFiles[ind]);
      ele.addressDocumentList = uploadAddressFiles[ind];
    });
    formSalesManList.forEach((ele, ind) => {
      console.log('uploadSalesmanFiles-ind::', ind);
      console.log('uploadSalesmanFiles-ind111::', uploadSalesmanFiles[ind]);
      ele.salesManDocumentList = uploadSalesmanFiles[ind];
    });
    formBhangAdditionalInfo.additionalInfoDocumentList = uploadAttachFiles;

    formBhangAppliDet.dob = this.invertDate(formBhangAppliDet.dob);
    formSalesManList.forEach((ele) => ele.dob = this.invertDate(ele.dob));

    console.log('formValue::', formValue);

    const payload: any = {
      applicationDate: this.invertDate(applicationDate),
      applicationNumber: applicationNo,
      status: saveType,
      bhangLicenses: {
        licenseType: this.licenseType,
        bhangApplicantDetails: formBhangAppliDet,
        salesManList: formSalesManList,
        addressList: formValaddressList,
        bankList: formValbankList,
        bhangAdditionalInfo: formBhangAdditionalInfo
      }
    };

    console.log('payload::', payload);

    await this.createLicense(payload, form, saveType);

    return true;
  }

  async addLicenseForID15(saveType) {
    this.formSubmitted = false;
    const form = this.bhangForm;
    console.log('this.bhangForm.valid::', form.valid);
    console.log('this.bhangForm.value::', form.value);
    console.log('this.bhangForm::', form);

    if (saveType !== this.STATUS_DRAFT && form.valid === false) {
      this.formSubmitted = true;
      return false;
    }

    const formValue = form.value;

    const {
      applicationDate,
      bhangApplicantDetails: formBhangAppliDet,
      addressList: formValaddressList,
      salesManList: formSalesManList,
      bhangReceiptAccounts: formBhangReceiptAccounts,
      passList: formPassList,
      bankList: formValbankList,
    } = formValue;

    console.log('formValue::', formValue);
    console.log('this.fileArr::', this.fileArr);

    const bhangAppliDetProp = [
      'appli_photo_file', 'appli_photo_file_source', 'appli_aadhar_file', 'appli_aadhar_file_source',
      'appli_pan_file', 'appli_pan_file_source'
    ];

    const salesManProp = [
      'salesman_photo_file', 'salesman_photo_file_source', 'salesman_aadhar_file', 'salesman_aadhar_file_source',
      'salesman_affadavait_file', 'salesman_affadavait_file_source', 'salesman_character_file', 'salesman_character_file_source'
    ];

    const addressDetProp = [
      'ownershipDoc_file', 'ownershipDoc_file_source'
    ];

    const bankDetProp = [
      'cancel_cheque_file', 'cancel_cheque_file_source', 'earnest_file', 'earnest_file_source'
    ];

    bhangAppliDetProp.forEach((ele) => delete formBhangAppliDet[ele]);
    bankDetProp.forEach((ele) => delete formValbankList[0][ele]);
    addressDetProp.forEach((ele) => delete formValaddressList[1][ele]);
    salesManProp.forEach((ele) => formSalesManList.forEach((salemanEle) => delete salemanEle[ele]));

    let uploadAppliFiles;
    let uploadBankFiles;

    const applicationNo = await this.getApplicationNo();
    uploadAppliFiles = await this.uploadAppliFiles(applicationNo);
    console.log('uploadAppliFiles::', uploadAppliFiles);
    uploadBankFiles = await this.uploadBankFileChange(applicationNo);
    console.log('uploadBankFiles::', uploadBankFiles);

    if (this.isFormEdit) {
      const {
        bhangApplicantDetails: apiDataBhangAppliDet, bankList: apiDatabankList
      } = this.getLicenseData();

      const { applicantDocumentList: apiDataapplicantDocumentList } = apiDataBhangAppliDet;
      uploadAppliFiles = this.combineArr(apiDataapplicantDocumentList, uploadAppliFiles);

      const apiDatabankDocumentList = apiDatabankList[0].bankDocumentList;
      uploadBankFiles = this.combineArr(apiDatabankDocumentList, uploadBankFiles);

    }

    formBhangAppliDet.applicantDocumentList = uploadAppliFiles;
    formValbankList[0].bankDocumentList = uploadBankFiles;

    formBhangAppliDet.dob = this.invertDate(formBhangAppliDet.dob);

    console.log('formValue::', formValue);

    const payload: any = {
      applicationDate: this.invertDate(applicationDate),
      applicationNumber: applicationNo,
      status: saveType,
      bhangLicenses: {
        licenseType: this.licenseType,
        bhangApplicantDetails: formBhangAppliDet,
        salesManList: formSalesManList,
        addressList: formValaddressList,
        bankList: formValbankList,
        passList: formPassList,
        bhangReceiptAccounts: formBhangReceiptAccounts,
      }
    };

    console.log('payload::', payload);

    await this.createLicense(payload, form, saveType);

    return true;
  }

  async addLicenseForID16(saveType) {
    this.formSubmitted = false;
    const form = this.bhangForm;
    console.log('this.bhangForm.valid::', form.valid);
    console.log('this.bhangForm.value::', form.value);
    console.log('this.bhangForm::', form);

    if (saveType !== this.STATUS_DRAFT && form.valid === false) {
      this.formSubmitted = true;
      return false;
    }

    const formValue = form.value;

    const {
      applicationDate,
      bhangApplicantDetails: formBhangAppliDet,
      addressList: formValaddressList,
      salesManList: formSalesManList,
      vendorName,
      bankList: formValbankList,
    } = formValue;

    console.log('formValue::', formValue);
    console.log('this.fileArr::', this.fileArr);

    const bhangAppliDetProp = [
      'appli_photo_file', 'appli_photo_file_source', 'appli_aadhar_file', 'appli_aadhar_file_source',
      'appli_pan_file', 'appli_pan_file_source', 'affadavait_file', 'affadavait_file_source',
      'appli_charct_cert_file', 'appli_charct_cert_file_source', 'appli_itr_file', 'appli_itr_file_source'
    ];

    const bankDetProp = [
      'cancel_cheque_file', 'cancel_cheque_file_source', 'earnest_file', 'earnest_file_source'
    ];

    bhangAppliDetProp.forEach((ele) => delete formBhangAppliDet[ele]);
    bankDetProp.forEach((ele) => delete formValbankList[0][ele]);

    let uploadAppliFiles;
    let uploadBankFiles;

    const applicationNo = await this.getApplicationNo();
    uploadAppliFiles = await this.uploadAppliFiles(applicationNo);
    console.log('uploadAppliFiles::', uploadAppliFiles);
    uploadBankFiles = await this.uploadBankFileChange(applicationNo);
    console.log('uploadBankFiles::', uploadBankFiles);

    if (this.isFormEdit) {
      const {
        bhangApplicantDetails: apiDataBhangAppliDet, bankList: apiDatabankList
      } = this.getLicenseData();

      const { applicantDocumentList: apiDataapplicantDocumentList } = apiDataBhangAppliDet;
      uploadAppliFiles = this.combineArr(apiDataapplicantDocumentList, uploadAppliFiles);

      const apiDatabankDocumentList = apiDatabankList[0].bankDocumentList;
      uploadBankFiles = this.combineArr(apiDatabankDocumentList, uploadBankFiles);

    }

    formBhangAppliDet.applicantDocumentList = uploadAppliFiles;
    formValbankList[0].bankDocumentList = uploadBankFiles;

    formBhangAppliDet.dob = this.invertDate(formBhangAppliDet.dob);

    console.log('formValue::', formValue);

    const payload: any = {
      applicationDate: this.invertDate(applicationDate),
      applicationNumber: applicationNo,
      status: saveType,
      bhangLicenses: {
        licenseType: this.licenseType,
        bhangApplicantDetails: formBhangAppliDet,
        salesManList: formSalesManList,
        addressList: formValaddressList,
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

    const licenseCreationRes: any = await this.licenseSer.createDistilleryLicense(payload);
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

  loadDummyFormData() {
    // applicationDate
    // bhangLicenseType
    // bhangApplicantDetails
    // retailShopDetails
    // salesManList
    // bhangAdditionalDetails
    // bhangReceiptAccounts
    // passList
    // vendorName

    const patchObj = {
      bhangLicenseType: 'ID14A',
      bhangApplicantDetails: {
        aadharNumber: '9887766554' + this.randNum,
        emailId: 'test_user' + this.randNum + '@gmail.com',
        firstName: 'test' + this.randNum,
        genderCode: 1,
        lastName: 'last' + this.randNum,
        middleName: 'mid' + this.randNum,
        mobileNumber: '98765443' + this.randNum,
        panNumber: 'DTVPP22' + this.randNum + 'Z',
        salutation: 2,
        fatherHusbandName: 'test_father' + this.randNum
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
      retailShopDetails: {
        shopName: 'shop_name',
        licenseNumber: 'SDTSD098',
        licenseYear: '2022',
        licenseValidityDate: '25-02-2022',
      },
      salesManList: [
        {
          fullName: 'test_full_name',
          address: 'test_full_address'
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
    };

    this.bhangForm.patchValue(patchObj);
  }

  numberOnly(event): boolean {
    const charCode = (event.which) ? event.which : event.keyCode;
    if (charCode > 31 && (charCode < 48 || charCode > 57)) {
      return false;
    }
    return true;
  }

}
