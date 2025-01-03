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


@Component({
  selector: 'app-sugarmill-license-form',
  templateUrl: './sugarmill-license-form.component.html',
  styleUrls: ['./sugarmill-license-form.component.scss']
})
export class SugarmillLicenseFormComponent implements OnInit {

  public readonly SCREEN_WITHIN_UP = 'withinupregistration';
  public readonly SCREEN_OUTSIDE_UP = 'sugarmilloutsideup';
  public readonly SCREEN_IND_INSIDE_UP = 'industriesinsideup';
  public readonly SCREEN_IND_OUTSIDE_UP = 'industriesoutsideup';
  public readonly SCREEN_MOLASS_TRADERS = 'molassestraders';
  public readonly SCREEN_BELOW_GRADE = 'belowgrade';
  public readonly CUSTOMER = 'customer';
  public readonly OFFICER = 'officer';
  public readonly STATUS_DRAFT = 'DRAFT';
  public readonly STATUS_SUBMITTED = 'SUBMITTED';
  public readonly STATUS_APPROVED = 'APPROVED';
  public readonly STATUS_REJECTED = 'REJECTED';
  public readonly STATUS_SENDBACK = 'SENDBACK';

  public readonly FN_GST = 'GST Certificate';
  public readonly FN_PAN = 'Pan Card';
  public readonly FN_CERT_INCORP = 'Certificate Incorporation';
  public readonly FN_MOM_OF_ARTICLE = 'Memorandum of Article';
  public readonly FN_IMP_EXP_CODES = 'Import Export Codes';

  public readonly SRC_GST = 'gst_file_source';
  public readonly SRC_PAN = 'pan_file_source';
  public readonly SRC_CERT_INCORP = 'cert_incor_file_source';
  public readonly SRC_MOM_OF_ARTICLE = 'memo_of_arti_file_source';
  public readonly SRC_IMP_EXP_CODES = 'impo_expo_codes_file_source';

  public readonly FN_UTIL_OF_MOLASS = 'Utilization of Molasses';
  public readonly FN_STR_CAPAC_APPR = 'Storage Capacity Approval';
  public readonly FN_PUR_LET_FORM_CONC_STATE = 'Purchase Letter form concerned stateId Excise';

  public readonly SRC_UTIL_OF_MOLASS = 'util_molasses_file_source';
  public readonly SRC_STR_CAPAC_APPR = 'storage_capacity_file_source';
  public readonly SRC_PUR_LET_FORM_CONC_STATE = 'purchase_letter_file_source';

  public readonly LIC_TYPE_WITH_IN_UP = 'WITH_IN_UP'; // withinupregistration
  public readonly LIC_TYPE_OS_UP = 'OUTSIDE_UP'; // sugarmilloutsideup
  public readonly LIC_TYPE_IND_IN_UP = 'IND_IN_UP'; // industriesinsideup
  public readonly LIC_TYPE_IND_OUT_UP = 'IND_OUT_UP'; // industriesoutsideup
  public readonly LIC_TYPE_BG = 'BG'; // belowgrade
  public readonly LIC_TYPE_MT = 'MT'; // molassestraders

  headOfcFiles = [];

  isActionBtnFor = '';
  isCustomer: boolean;
  isReadOnly = false;
  licenseStatus: string;
  licenseStage: string;
  licenseApplicationData: any;

  officerLevel: string;
  isRejected: boolean;
  isSendBack: boolean;
  sendBackList: any;

  screenSubType: string;
  applicationNumber: string;
  isFormEdit = false;
  withInUPForm: FormGroup;
  belowGradeForm: FormGroup;
  outsideUPForm: FormGroup;
  indusInsideUPForm: FormGroup;
  indusOutsideUPForm: FormGroup;
  molassesTradersForm: FormGroup;
  commentForm: FormGroup;
  sendbackForm: FormGroup;

  startDate = new Date(Date.now());

  stateList: any;
  villageList: any;
  blockList: any;
  municipalityList: any;
  headOfcDistrictListByState: any;
  unitOfcDistrictListByState: any;
  addressDetDistrictListByState: any;
  addressDettalukList: any;
  headOfctalukList: any;
  unitOfctalukList: any;
  workOfctalukList: any;
  workOfcDistrictListByState: any;
  headOfcVillageList: any;
  addressDetVillageList: any;
  workOfcVillageList: any;

  state: object;
  taluk: any;

  cityType = '';

  formSubmitted = false;
  commandformSub = false;

  maxDate = moment(new Date()).format('YYYY-MM-DD');
  applicationDate = formatDate(this.startDate, 'yyyy-MM-dd', 'en');

  regOfcLocalityType = '';
  unitOfcLocalityType = '';
  workOfcLocalityType = '';
  directorOfcLocalityType = '';

  districtsList: any;
  countryList: any;

  headOfcVillageData: any;
  headMunicipalData: any;
  addressDetMunicipalData: any;
  headOfcMunicipalData: any;
  workOfcMunicipalData: any;
  headOfcBlockData: any;
  addressDetBlockData: any;
  addressDetVillageData: any;
  addressDetStateData: any;
  headOfcStateData: any;
  workOfcStateData: any;
  addressDetDistrictData: any;
  headOfcDistrictData: any;
  unitOfcDistrictData: any;
  workOfcDistrictData: any;
  headOfcTehsilData: any;
  workOfcTehsilData: any;
  addressDetTehsilData: any;
  workOfcVillageData: any;

  screenTitle: string;
  breadcrumbTitle: string;

  mtHeadGstFile: string;

  screenObj = {
    withinupregistration: 'Sugarmill Within UP Registration',
    sugarmilloutsideup: 'Registration of Sugar Mill outside UP',
    industriesinsideup: 'Registration of Industries inside U.P',
    industriesoutsideup: 'Registration of Industries outside U.P',
    molassestraders: 'Registration of Molasses Traders',
    belowgrade: 'Registration of Below Grade',
  };

  urbanKey = 'Urban';
  ruralKey = 'Rural';
  urbanRuralArr = [
    { key: this.urbanKey, value: this.urbanKey },
    { key: this.ruralKey, value: this.ruralKey }
  ];
  municipalAreas = [
    { id: 1, name: 'Chennai' },
    { id: 2, name: 'Navlur' }
  ];
  randNum: number;
  licenseComments = [];

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private formbuilder: FormBuilder,
    private alert: AlertService,
    private stateSer: StatemasterService,
    private districtSer: DistrictMasterService,
    private municipalityService: MunicipalityMasterService,
    private villageService: VillageMasterService,
    private blockService: BlockMasterService,
    private talukService: TalukMasterService,
    private licenseSer: LicenceManagementService,
    private docUplSer: DocumentUploadService,
    private authService: AuthService,
    private country: CountrymasterService,

  ) { }

  // Setting up our form
  ngOnInit() {
    this.isCustomer = this.authService.isCustomer();
    this.randNum = this.randomIntFromInterval( 1, 100 );
    this.route.params.subscribe(params => {
      console.log('params.screenSubType::', params);
      if (params.screenSubType) {
        this.screenSubType = params.screenSubType;
      }
      if (params.applicationNumber) {
        this.applicationNumber = params.applicationNumber;
        this.isFormEdit = true;
      }
    });
    this.loadFormControl();
    console.log('this.randNum::', this.randNum);
  }

  randomIntFromInterval(min, max) { // min and max included 
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  buildMolassesListFormGroup(data?: any) {
    return this.formbuilder.group({
      tankName: data ? data.tankName : '',
      capacity: data ? data.capacity : '',
      type: data ? data.type : ''
    });
  }

  addMolassesEntityRow(form) {
    (form.get('sugarMillMolassesEntityList') as FormArray).push(this.buildMolassesListFormGroup());
  }

  removeMolassesEntityRow(form, idx: number) {
    (form.get('sugarMillMolassesEntityList') as FormArray).removeAt(idx);
  }

  getMolassesEntityLength(form): number {
    return (form.get('sugarMillMolassesEntityList') as FormArray).length;
  }

  buildOfficerDetail(data?: any) {
    return this.formbuilder.group({
      name: ['', Validators.required],
      address: ['', Validators.required],
      designation: ['', Validators.required],
      emailId: ['', [Validators.required, Validators.email]],
      faxNumber: ['', [Validators.required, Validators.minLength(10), Validators.maxLength(10)]],
      mobileNumber: ['', [Validators.required, Validators.pattern('[0-9]{10,10}')]],
    });
  }

  getOfficerDetail(type) {
    return this.withInUPForm.get('occupierDetail');
  }

  loadFormControl() {
    switch (this.screenSubType) {
      case this.SCREEN_WITHIN_UP:
        this.createWithInUPForm();
        break;
      case this.SCREEN_OUTSIDE_UP:
        this.createOutsideUPForm();
        break;
      case this.SCREEN_IND_INSIDE_UP:
        this.createIndustriesInsideUPForm();
        break;
      case this.SCREEN_IND_OUTSIDE_UP:
        this.createIndustriesOutsideUPForm();
        break;
      case this.SCREEN_MOLASS_TRADERS:
        this.createMolassesTradersForm();
        break;
      case this.SCREEN_BELOW_GRADE:
        this.createBelowGradeForm();
        break;
    }
    (this.isFormEdit) ? this.loadLicenseData() : this.loadInitialFormData();
    this.createcommentForm();
  }

  createcommentForm() {
    this.commentForm = this.formbuilder.group({
      comments: ['', Validators.required],
    });
  }

  createsendbackForm() {
    this.sendbackForm = this.formbuilder.group({
      sendback: ['', Validators.required],
    });
  }

  createWithInUPForm() {
    this.withInUPForm = this.formbuilder.group({
      // Sugarmill Registration Basic Form
      applicationDate: [''],
      mobileNumber: ['', [Validators.required, Validators.pattern('[0-9]{10,10}')]],
      sugarMillName: ['', Validators.required],
      district: ['', Validators.required],
      yearOfEstablish: ['', Validators.required],
      commencementDate: [''],
      group: ['', Validators.required],

      // head office address
      headOfficeMobileNumber: ['', [Validators.required, Validators.pattern('[0-9]{10,10}')]],
      headOfficeFaxNumber: ['', [Validators.required, Validators.minLength(10), Validators.maxLength(10)]],
      headOfficeEmail: ['', [Validators.required, Validators.email]],
      headOfficeCountryId: ['', Validators.required],
      headOfficePincode: ['', [Validators.minLength(6), Validators.maxLength(6)]],
      headOfficeStateId: ['', Validators.required],
      headOfficeDistrictId: ['', Validators.required],
      headOfficeThesilId: ['', Validators.required],
      headOfficeUrbanOrRural: ['', Validators.required],
      headOfficeMunicipalAreaId: [''],
      headOfficeward: ['', Validators.pattern('^[a-z0-9](?!.*?[^\na-z0-9]{2}).*?[a-z0-9]$')],
      headofficeBlock: [''],
      headOfficeVillage: [''],
      headOfficePoliceStation: ['', Validators.required],
      headOfficeLocality: ['', Validators.required],
      headofficeStreet: ['', Validators.required],

      // unit office address
      unitOfficeMobileNumber: ['', [Validators.required, Validators.pattern('[0-9]{10,10}')]],
      unitOfficeFaxNumber: ['', [Validators.required, Validators.minLength(10), Validators.maxLength(10)]],
      unitOfficeEmail: ['', [Validators.required, Validators.email]],
      unitOfficeCountryId: ['', Validators.required],
      unitOfficePincode: ['', [Validators.minLength(6), Validators.maxLength(6)]],
      unitOfficeStateId: ['', Validators.required],
      unitOfficeDistrictId: ['', Validators.required],
      unitOfficeThesilId: ['', Validators.required],
      unitOfficeUrbanorrural: ['', Validators.required],
      unitOfficeMuncipalArea: [''],
      unitOfficeWard: ['', Validators.pattern('^[a-z0-9](?!.*?[^\na-z0-9]{2}).*?[a-z0-9]$')],
      unitOfficeBlock: [''],
      unitOfficeVillage: [''],
      unitOfficePoliceStation: ['', Validators.required],
      unitOfficeLocality: ['', Validators.required],
      unitOfficeStreet: ['', Validators.required],

      // occupierDetail: this.buildOfficerDetail('occupier'),

      // Occupier detail
      occupierName: ['', Validators.required],
      occupierMobileNumber: ['', [Validators.required, Validators.pattern('[0-9]{10,10}')]],
      occupierFaxNumber: ['', [Validators.required, Validators.minLength(10), Validators.maxLength(10)]],
      occupierEmail: ['', [Validators.required, Validators.email]],
      occupierDesignation: ['', Validators.required],
      occupierAddress: ['', Validators.required],

      // General Manager detail
      generalManagerName: ['', Validators.required],
      generalManagerMobileNumber: ['', [Validators.required, Validators.pattern('[0-9]{10,10}')]],
      generalManagerFaxNumber: ['', [Validators.required, Validators.minLength(10), Validators.maxLength(10)]],
      generalManagerEmail: ['', [Validators.required, Validators.email]],
      generalManagerDesignation: ['', Validators.required],
      generalManagerAddress: ['', Validators.required],

      // Sales Manager detail
      salesManagerName: ['', Validators.required],
      salesManagerMobileNumber: ['', [Validators.required, Validators.pattern('[0-9]{10,10}')]],
      salesManagerFaxNumber: ['', [Validators.required, Validators.minLength(10), Validators.maxLength(10)]],
      salesManagerEmail: ['', [Validators.required, Validators.email]],
      salesManagerdesignation: ['', Validators.required],
      salesManagerAddress: ['', Validators.required],

      // Sugar and Molasess Recovery Achived During Last Molasses Year
      molasses: ['', Validators.required],
      sugar: ['', Validators.required],

      // Registered Crushing Capacity
      tonsDay: ['', Validators.required],
      tonsSeason: ['', Validators.required],

      // Quintal/ counter(in case pipeline supply on mf4 Gatepass)
      quintal: ['', Validators.required],
      capacityDistillery: [''],

      // Molasses Store Detail
      sugarMillMolassesEntityList: this.formbuilder.array([
        this.buildMolassesListFormGroup()
      ])
    });

    this.withInUPForm.patchValue({
      applicationDate: this.applicationDate
    });
  }

  createOutsideUPForm() {
    this.outsideUPForm = this.formbuilder.group({
      financialYear: ['2020-2021'],
      applicationDate: [''],
      mobileNumber: ['', Validators.required],
      sugarMillName: ['', Validators.required],
      districtId: ['', Validators.required],
      yearOfEstablish: ['', Validators.required],
      dateOfCommencement: [''],
      group: ['', Validators.required],

      headOfficeMobileNumber: ['', Validators.required],
      headOfficeFaxNumber: ['', Validators.required],
      headOfficeEmail: ['', [Validators.required, Validators.email, Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]],
      headOfficeCountryId: ['', Validators.required],
      headOfficePincode: [''],
      headOfficeStateId: ['', Validators.required],
      headOfficeDistrictId: ['', Validators.required],
      headOfficeThesilId: ['', Validators.required],
      headOfficeUrbanOrRural: ['', Validators.required],
      headOfficeMunicipalAreaId: [''],
      headOfficeward: [''],
      headofficeBlock: [''],
      headOfficeVillage: [''],
      headOfficePoliceStation: ['', Validators.required],
      headOfficeLocality: ['', Validators.required],
      headofficeStreet: ['', Validators.required],

      unitOfficeMobileNumber: ['', Validators.required],
      unitOfficeFaxNumber: ['', Validators.required],
      unitOfficeEmail: ['', [Validators.required, Validators.email, Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]],
      unitOfficeCountryId: [''],
      unitOfficePincode: [''],
      unitOfficeStateId: ['', Validators.required],
      unitOfficeDistrictId: ['', Validators.required],
      unitOfficeThesilId: ['', Validators.required],
      unitOfficeUrbanorrural: ['', Validators.required],
      unitOfficeMuncipalArea: [''],
      unitOfficeWard: [''],
      unitOfficeBlock: [''],
      unitOfficeVillage: [''],
      unitOfficePoliceStation: ['', Validators.required],
      unitOfficeLocality: ['', Validators.required],
      unitOfficeStreet: ['', Validators.required],

      occupierName: ['', Validators.required],
      occupierMobileNumber: ['', Validators.required],
      occupierFaxNumber: ['', Validators.required],
      occupierEmail: ['', [Validators.required, Validators.email, Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]],
      occupierDesignation: ['', Validators.required],
      occupierAddress: ['', Validators.required],

      generalManagerName: ['', Validators.required],
      generalManagerMobileNumber: ['', Validators.required],
      generalManagerFaxNumber: ['', Validators.required],
      generalManagerEmail: ['', [Validators.required, Validators.email, Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]],
      generalManagerDesignation: ['', Validators.required],
      generalManagerAddress: ['', Validators.required],

      salesManagerName: ['', Validators.required],
      salesManagerMobileNumber: ['', Validators.required],
      salesManagerFaxNumber: ['', Validators.required],
      salesManagerEmail: ['', [Validators.required, Validators.email, Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]],
      salesManagerdesignation: ['', Validators.required],
      salesManagerAddress: ['', Validators.required],

      molasses: ['', Validators.required],
      sugar: ['', Validators.required],
      tonsDay: ['', Validators.required],
      tonsSeason: ['', Validators.required],
      quintal: ['', Validators.required],
      capacityDistillery: [''],
      sugarMillMolassesEntityList: this.formbuilder.array([
        this.buildMolassesListFormGroup()
      ])
    });

    this.outsideUPForm.patchValue({
      applicationDate: this.applicationDate
    });
  }

  createIndustriesInsideUPForm() {
    this.indusInsideUPForm = this.formbuilder.group({
      // Sugarmill Main Form
      applicationDate: [''],
      mobileNumber: ['', Validators.required],
      industryCode: ['', Validators.required],
      industryName: ['', Validators.required],
      licenseNumber: ['', Validators.required],
      yearOfEstablishment: ['', Validators.required],
      panNumber: ['', Validators.required],
      gstinnumber: ['', Validators.required],
      vatgstdeposited: ['', Validators.required],
      lastYearProduced: ['', Validators.required],
      annualConsumptionCapacity: ['', Validators.required],
      molassesStorageCapacity: ['', Validators.required],
      dateOfEstablishment: ['', Validators.required],

      // head office address
      headOfficeMobileNumber: ['', Validators.required],
      headOfficeFaxNumber: [''],
      headOfficeEmail: ['', [Validators.required, Validators.email, Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]],
      headOfficeCountryId: [''],
      headOfficePincode: [''],
      headOfficeStateId: ['', Validators.required],
      headOfficeDistrictId: ['', Validators.required],
      headOfficeTehsilId: ['', Validators.required],
      headOfficeUrbanOrRural: ['', Validators.required],
      headOfficeMunicipalAreaId: [''],
      headOfficeWard: [''],
      headOfficeBlockId: [''],
      headOfficeVillageId: [''],
      headOfficePoliceStation: ['', Validators.required],
      headOfficeLocality: ['', Validators.required],
      headOfficeStreet: ['', Validators.required],

      // working address
      workingMobileNumber: ['', Validators.required],
      workingFaxNumber: [''],
      workingEmail: ['', [Validators.required, Validators.email, Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]],
      workingCountryId: [''],
      workingPincode: [''],
      workingStateId: ['', Validators.required],
      workingDistrictId: ['', Validators.required],
      workingTehsilId: ['', Validators.required],
      workingUrbanOrRural: ['', Validators.required],
      workingMunicipalAreaId: [''],
      workingWard: [''],
      workingBlockId: [''],
      workingVillageId: [''],
      workingPoliceStation: ['', Validators.required],
      workingLocality: ['', Validators.required],
      workingStreet: ['', Validators.required],

      // officier details
      directorName: ['', Validators.required],
      directorDesignation: ['', Validators.required],
      directorCountryId: [''],
      directorPincode: [''],
      directorStateId: ['', Validators.required],
      directorDistrictId: ['', Validators.required],
      directorTehsilId: ['', Validators.required],
      directorUrbanOrRural: ['', Validators.required],
      directorMunicipalAreaId: [''],
      directorWard: [''],
      directorBlockId: [''],
      directorVillageId: [''],
      directorPoliceStation: ['', Validators.required],
      directorLocality: ['', Validators.required],
      directorStreet: ['', Validators.required],
      directorMobileNumber: ['', Validators.required],
      directorFaxNumber: [''],
      directorEmail: ['', [Validators.required, Validators.email, Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]],
      remarks: [''],
    });

    this.indusInsideUPForm.patchValue({
      applicationDate: this.applicationDate,
      headOfficeCountryId: 1,
      workingCountryId: 1,
      directorCountryId: 1
    });
  }

  createIndustriesOutsideUPForm() {
    this.indusOutsideUPForm = this.formbuilder.group({
      applicationDate: [''],
      mobileNumber: ['', Validators.required],
      industryCode: ['', Validators.required],
      industryName: ['', Validators.required],
      licenseNumber: ['', Validators.required],
      yearOfEstablishment: ['', Validators.required],
      panNumber: ['', [Validators.required, Validators.minLength(10), Validators.pattern('^[A-Z]{5}[0-9]{4}[A-Z]{1}$')]],
      gstNumber: ['', [Validators.required, Validators.minLength(12)]],
      vatGstDeposited: ['', Validators.required],
      lastYearProduced: ['', Validators.required],
      annualConsumptionCapacity: ['', Validators.required],
      molassesStorageCapacity: ['', Validators.required],
      dateOfEstablishment: ['', Validators.required],

      headOfficeMobileNumber: ['', Validators.required],
      headOfficeFaxNumber: ['', Validators.required],
      headOfficeEmail: ['', [Validators.required, Validators.email, Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]],
      headOfficeCountryId: [''],
      headOfficePincode: [''],
      headOfficeStateId: ['', Validators.required],
      headOfficeDistrictId: ['', Validators.required],
      headOfficeTehsilId: ['', Validators.required],
      headOfficeUrbanOrRural: ['', Validators.required],
      headOfficeMunicipalAreaId: [''],
      headOfficeWard: [''],
      headOfficeBlock: [''],
      headOfficeVillage: [''],
      headOfficePoliceStation: ['', Validators.required],
      headOfficeLocality: ['', Validators.required],
      headOfficeStreet: ['', Validators.required],

      workingMobileNumber: ['', Validators.required],
      workingFaxNumber: ['', Validators.required],
      workingEmail: ['', [Validators.required, Validators.email, Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]],
      workingCountryId: [''],
      workingPincode: [''],
      workingStateId: ['', Validators.required],
      workingDistrictId: ['', Validators.required],
      workingTehsilId: ['', Validators.required],
      workingUrbanOrRural: ['', Validators.required],
      workingMunicipalAreaId: [''],
      workingWard: [''],
      workingBlock: [''],
      workingVillage: [''],
      workingPoliceStation: ['', Validators.required],
      workingLocality: ['', Validators.required],
      workingStreet: ['', Validators.required],

      directorName: ['', Validators.required],
      directorDesignation: ['', Validators.required],
      directorCountryId: [''],
      directorPincode: [''],
      directorStateId: ['', Validators.required],
      directorDistrictId: ['', Validators.required],
      directorTehsilId: ['', Validators.required],
      directorUrbanOrRural: ['', Validators.required],
      directorMunicipalAreaId: [''],
      directorWard: [''],
      directorBlockId: [''],
      directorVillageId: [''],
      directorPoliceStation: ['', Validators.required],
      directorLocality: ['', Validators.required],
      directorStreet: ['', Validators.required],
      directorMobileNumber: ['', Validators.required],
      directorFaxNumber: ['', Validators.required],
      directorEmail: ['', [Validators.required, Validators.email, Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]],
      remarks: ['']
    });

    this.indusOutsideUPForm.patchValue({
      applicationDate: this.applicationDate,
      headOfficeCountryId: 1,
      workingCountryId: 1,
      directorCountryId: 1
    });
  }

  createMolassesTradersForm() {
    this.molassesTradersForm = this.formbuilder.group({
      applicationDate: [''],
      mobileNumber: ['', [Validators.required, Validators.pattern('[0-9]{10,10}')]],
      traderName: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(100)]],
      yearOfEstablish: ['', Validators.required],
      yearlyAllotment: ['', Validators.required],

      headOfficeMobileNumber: ['', [Validators.required, Validators.pattern('[0-9]{10,10}')]],
      headOfficeFaxNumber: ['', Validators.required],
      headOfficeEmail: ['', [Validators.required, Validators.email, Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]],
      headOfficeCountryId: ['', Validators.required],
      headOfficePincode: [''],
      headOfficeStateId: ['', Validators.required],
      headOfficeDistrictId: ['', Validators.required],
      headOfficeThesilId: ['', Validators.required],
      headOfficeUrbanOrRural: ['', Validators.required],
      headOfficeMunicipalAreaId: [''],
      headOfficeward: [''],
      headofficeBlock: [''],
      headOfficeVillage: [''],
      headOfficePoliceStation: ['', Validators.required],
      headOfficeLocality: ['', Validators.required],
      headofficeStreet: ['', Validators.required],

      gst_file: ['', Validators.required],
      gst_file_source: ['', Validators.required],

      pan_file: ['', Validators.required],
      pan_file_source: ['', Validators.required],

      cert_incor_file: ['', Validators.required],
      cert_incor_file_source: ['', Validators.required],

      memo_of_arti_file: ['', Validators.required],
      memo_of_arti_file_source: ['', Validators.required],

      impo_expo_codes_file: ['', Validators.required],
      impo_expo_codes_file_source: ['', Validators.required],
    });

    this.molassesTradersForm.patchValue({
      applicationDate: this.applicationDate
    });
  }

  createBelowGradeForm() {
    this.belowGradeForm = this.formbuilder.group({
      applicationDate: [''],
      unitType: [''],
      unitName: ['', Validators.required],
      countryId: [],
      proprietorName: ['', Validators.required],
      mobileNumber: ['', [Validators.required, Validators.pattern('[0-9]{10,10}')]],
      emailId: ['', [Validators.required, Validators.email, Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]],
      gstNumber: ['', [Validators.required, Validators.minLength(12)]],
      panNumber: ['', [Validators.required, Validators.minLength(10), Validators.pattern('^[A-Z]{5}[0-9]{4}[A-Z]{1}$')]],
      addrCountryId: [],
      pincode: ['', [Validators.required, Validators.maxLength(6)]],
      stateId: ['', Validators.required],
      districtId: ['', Validators.required],
      tehsilId: ['', Validators.required],
      urbanOrRural: ['', Validators.required],
      municipalAreaId: [''],
      ward: [''],
      blockId: [''],
      villageId: [''],
      locality: ['', Validators.required],
      street: ['', Validators.required],
      storageCapacity: ['', Validators.required],

      gst_file: ['', Validators.required],
      gst_file_source: ['', Validators.required],

      pan_file: ['', Validators.required],
      pan_file_source: ['', Validators.required],

      util_molasses_file: ['', Validators.required],
      util_molasses_file_source: ['', Validators.required],

      storage_capacity_file: ['', Validators.required],
      storage_capacity_file_source: ['', Validators.required],

      purchase_letter_file: ['', Validators.required],
      purchase_letter_file_source: ['', Validators.required],
    });

    this.belowGradeForm.patchValue({
      applicationDate: this.applicationDate,
      countryId: 1,
      addrCountryId: 1
    });
  }

  loadInitialFormData() {
    this.getAllStates();
    switch (this.screenSubType) {
      case this.SCREEN_WITHIN_UP:
        this.getAllDistricts();
        this.getAllCountrys();
        break;
      case this.SCREEN_OUTSIDE_UP:
        this.getAllDistricts();
        this.getAllCountrys();
        break;
      case this.SCREEN_IND_INSIDE_UP:
        this.getAllBlock();
        this.getAllMunicipalitys();
        break;
      case this.SCREEN_IND_OUTSIDE_UP:
        this.getAllBlock();
        this.getAllMunicipalitys();
        this.getAllVillage();
        break;
      case this.SCREEN_MOLASS_TRADERS:
        this.getAllCountrys();
        break;
      case this.SCREEN_BELOW_GRADE:
        this.getAllVillage();
        this.getAllBlock();
        this.getAllMunicipal();
        break;
    }
    this.processFormActionReadOnly();
  }

  loadLicenseData() {
    this.licenseSer.findLicenseApplication(this.applicationNumber).subscribe((resp: any) => {
      console.log('resp::', resp);
      const { responseCode: respCode, content: respContent } = resp;
      if (respCode === 200) {
        this.licenseApplicationData = respContent;
        switch (this.screenSubType) {
          case this.SCREEN_WITHIN_UP:
            this.patchWithInUPForm();
            break;
          case this.SCREEN_OUTSIDE_UP:
            this.patchOutsideUPForm();
            break;
          case this.SCREEN_IND_INSIDE_UP:
            this.patchIndInsideUPForm();
            break;
          case this.SCREEN_IND_OUTSIDE_UP:
            this.patchIndOutsideUPForm();
            break;
          case this.SCREEN_MOLASS_TRADERS:
            this.patchMolassesTradersForm();
            break;
          case this.SCREEN_BELOW_GRADE:
            this.patchBelowGradeForm();
            break;
        }

        this.licenseComments = this.licenseApplicationData.sugarMillLicenses.commentList;
        this.licenseStatus = this.licenseApplicationData.status;
        this.licenseStage = this.licenseApplicationData.stage;
        this.processFormActionReadOnly();

        this.alert.showSuccess(resp.responseMessage, 'Success');

      } else {
        this.alert.showError(resp.responseMessage, 'Error');
      }
    });
  }

  patchWithInUPForm() {

    const { sugarMillLicenses: sugarmillObj, applicationDate } = this.licenseApplicationData;
    console.log('respContant::', this.licenseApplicationData);

    const { sugarMillAddressList, sugarMillOfficersList, sugarMillRegistrationDetails } = sugarmillObj;
    const headOfficeDet = sugarMillAddressList[0];
    const unitOfficeDet = sugarMillAddressList[1];

    const occupAddr = sugarMillOfficersList[0];
    const genManagerAddr = sugarMillOfficersList[1];
    const salesManagerAddr = sugarMillOfficersList[2];

    this.getAllDistricts();
    this.getAllCountrys();
    this.getAllStates();

    this.onStateChange(headOfficeDet.stateCode, 'head_office');
    this.onDistrictChange(headOfficeDet.districtCode, 'head_office');
    // this.onRegOfcLocalityChange(localityType, this.withInUPForm);

    this.onStateChange(unitOfficeDet.stateCode, 'unit_office');
    this.onDistrictChange(unitOfficeDet.districtCode, 'unit_office');
    // this.onRegOfcLocalityChange(localityType, this.withInUPForm);

    this.withInUPForm.patchValue({
      mobileNumber: sugarMillRegistrationDetails.mobileNumber,
      sugarMillName: sugarMillRegistrationDetails.sugarMillName,
      yearOfEstablish: sugarMillRegistrationDetails.establishmentYear,
      commencementDate: sugarMillRegistrationDetails.commencementYear,
      group: sugarMillRegistrationDetails.groupName,
      district: sugarMillRegistrationDetails.districtCode,

      headOfficeMobileNumber: headOfficeDet.mobileNumber,
      headOfficeFaxNumber: headOfficeDet.faxNumber,
      headOfficeEmail: headOfficeDet.emailId,
      headOfficePincode: headOfficeDet.pinCode,
      headOfficePoliceStation: headOfficeDet.policeStationCode,
      headOfficeLocality: headOfficeDet.locality,
      headofficeStreet: headOfficeDet.street,
      headOfficeCountryId: headOfficeDet.country,
      headOfficeStateId: headOfficeDet.stateCode,
      headOfficeDistrictId: headOfficeDet.districtCode,
      headOfficeThesilId: headOfficeDet.tahsilCode,
      headOfficeUrbanOrRural: headOfficeDet.localityType,

      unitOfficeMobileNumber: unitOfficeDet.mobileNumber,
      unitOfficeFaxNumber: unitOfficeDet.faxNumber,
      unitOfficeEmail: unitOfficeDet.emailId,
      unitOfficePincode: unitOfficeDet.pinCode,
      unitOfficePoliceStation: unitOfficeDet.policeStationCode,
      unitOfficeLocality: unitOfficeDet.locality,
      unitOfficeStreet: unitOfficeDet.street,
      unitOfficeCountryId: unitOfficeDet.country,
      unitOfficeStateId: unitOfficeDet.stateCode,
      unitOfficeDistrictId: unitOfficeDet.districtCode,
      unitOfficeThesilId: unitOfficeDet.tahsilCode,
      unitOfficeUrbanorrural: unitOfficeDet.localityType,

      occupierName: occupAddr.name,
      occupierMobileNumber: occupAddr.mobileNumber,
      occupierFaxNumber: occupAddr.faxNumber,
      occupierEmail: occupAddr.emailId,
      occupierDesignation: occupAddr.designation,
      occupierAddress: occupAddr.address,

      generalManagerName: genManagerAddr.name,
      generalManagerMobileNumber: genManagerAddr.mobileNumber,
      generalManagerFaxNumber: genManagerAddr.faxNumber,
      generalManagerEmail: genManagerAddr.emailId,
      generalManagerDesignation: genManagerAddr.designation,
      generalManagerAddress: genManagerAddr.address,

      salesManagerName: salesManagerAddr.name,
      salesManagerMobileNumber: salesManagerAddr.mobileNumber,
      salesManagerFaxNumber: salesManagerAddr.faxNumber,
      salesManagerEmail: salesManagerAddr.emailId,
      salesManagerdesignation: salesManagerAddr.designation,
      salesManagerAddress: salesManagerAddr.address,

      molasses: sugarmillObj.molasses,
      sugar: sugarmillObj.sugar,

      // Registered Crushing Capacity
      tonsDay: sugarmillObj.perDayTons,
      tonsSeason: sugarmillObj.perSeasonTons,

      // Quintal/ counter(in case pipeline supply on mf4 Gatepass)
      quintal: sugarmillObj.quintalCounter

    });

    this.removeMolassesEntityRow(this.withInUPForm, 0);
    sugarmillObj.molassesList.forEach(element => {
      (this.withInUPForm.get('sugarMillMolassesEntityList') as FormArray).push(this.buildMolassesListFormGroup(element));
    });

    return true;
  }

  patchOutsideUPForm() {

    const { sugarMillLicenses: sugarmillObj } = this.licenseApplicationData;
    console.log('respContant::', this.licenseApplicationData);

    const { sugarMillAddressList, sugarMillOfficersList, sugarMillRegistrationDetails } = sugarmillObj;
    const headOfficeDet = sugarMillAddressList[0];
    const unitOfficeDet = sugarMillAddressList[1];

    const occupAddr = sugarMillOfficersList[0];
    const genManagerAddr = sugarMillOfficersList[1];
    const salesManagerAddr = sugarMillOfficersList[2];

    this.getAllDistricts();
    this.getAllCountrys();
    this.getAllStates();

    this.onStateChange(headOfficeDet.stateCode, 'head_office');
    this.onDistrictChange(headOfficeDet.districtCode, 'head_office');
    // this.onRegOfcLocalityChange(localityType, this.withInUPForm);

    this.onStateChange(unitOfficeDet.stateCode, 'unit_office');
    this.onDistrictChange(unitOfficeDet.districtCode, 'unit_office');
    // this.onRegOfcLocalityChange(localityType, this.withInUPForm);

    this.outsideUPForm.patchValue({
      mobileNumber: sugarMillRegistrationDetails.mobileNumber,
      sugarMillName: sugarMillRegistrationDetails.sugarMillName,
      yearOfEstablish: sugarMillRegistrationDetails.establishmentYear,
      commencementDate: sugarMillRegistrationDetails.commencementYear,
      group: sugarMillRegistrationDetails.groupName,
      districtId: sugarMillRegistrationDetails.districtCode,

      headOfficeMobileNumber: headOfficeDet.mobileNumber,
      headOfficeFaxNumber: headOfficeDet.faxNumber,
      headOfficeEmail: headOfficeDet.emailId,
      headOfficePincode: headOfficeDet.pinCode,
      headOfficePoliceStation: headOfficeDet.policeStationCode,
      headOfficeLocality: headOfficeDet.locality,
      headofficeStreet: headOfficeDet.street,
      headOfficeCountryId: headOfficeDet.country,
      headOfficeStateId: headOfficeDet.stateCode,
      headOfficeDistrictId: headOfficeDet.districtCode,
      headOfficeThesilId: headOfficeDet.tahsilCode,
      headOfficeUrbanOrRural: headOfficeDet.localityType,

      unitOfficeMobileNumber: unitOfficeDet.mobileNumber,
      unitOfficeFaxNumber: unitOfficeDet.faxNumber,
      unitOfficeEmail: unitOfficeDet.emailId,
      unitOfficePincode: unitOfficeDet.pinCode,
      unitOfficePoliceStation: unitOfficeDet.policeStationCode,
      unitOfficeLocality: unitOfficeDet.locality,
      unitOfficeStreet: unitOfficeDet.street,
      unitOfficeCountryId: unitOfficeDet.country,
      unitOfficeStateId: unitOfficeDet.stateCode,
      unitOfficeDistrictId: unitOfficeDet.districtCode,
      unitOfficeThesilId: unitOfficeDet.tahsilCode,
      unitOfficeUrbanorrural: unitOfficeDet.localityType,

      occupierName: occupAddr.name,
      occupierMobileNumber: occupAddr.mobileNumber,
      occupierFaxNumber: occupAddr.faxNumber,
      occupierEmail: occupAddr.emailId,
      occupierDesignation: occupAddr.designation,
      occupierAddress: occupAddr.address,

      generalManagerName: genManagerAddr.name,
      generalManagerMobileNumber: genManagerAddr.mobileNumber,
      generalManagerFaxNumber: genManagerAddr.faxNumber,
      generalManagerEmail: genManagerAddr.emailId,
      generalManagerDesignation: genManagerAddr.designation,
      generalManagerAddress: genManagerAddr.address,

      salesManagerName: salesManagerAddr.name,
      salesManagerMobileNumber: salesManagerAddr.mobileNumber,
      salesManagerFaxNumber: salesManagerAddr.faxNumber,
      salesManagerEmail: salesManagerAddr.emailId,
      salesManagerdesignation: salesManagerAddr.designation,
      salesManagerAddress: salesManagerAddr.address,

      molasses: sugarmillObj.molasses,
      sugar: sugarmillObj.sugar,

      // Registered Crushing Capacity
      tonsDay: sugarmillObj.perDayTons,
      tonsSeason: sugarmillObj.perSeasonTons,

      // Quintal/ counter(in case pipeline supply on mf4 Gatepass)
      quintal: sugarmillObj.quintalCounter

    });

    this.removeMolassesEntityRow(this.outsideUPForm, 0);
    sugarmillObj.molassesList.forEach(element => {
      (this.outsideUPForm.get('sugarMillMolassesEntityList') as FormArray).push(this.buildMolassesListFormGroup(element));
    });

    return true;
  }

  patchIndInsideUPForm() {

    const { sugarMillLicenses: sugarmillObj } = this.licenseApplicationData;
    console.log('respContant::', this.licenseApplicationData);

    const { sugarMillAddressList, sugarMillOfficersList, sugarMillRegistrationDetails } = sugarmillObj;
    const headOfficeDet = sugarMillAddressList[0];
    const workOfficeDet = sugarMillAddressList[1];

    const directorDet = sugarMillOfficersList[0];
    const directorAddrDet = directorDet.officersAddressList[0];

    this.getAllDistricts();
    this.getAllCountrys();
    this.getAllStates();
    this.getAllMunicipal();

    this.onStateChange(headOfficeDet.stateCode, 'head_office');
    this.onDistrictChange(headOfficeDet.districtCode, 'head_office');
    // this.onRegOfcLocalityChange(localityType, this.withInUPForm);

    this.onStateChange(workOfficeDet.stateCode, 'work_office');
    this.onDistrictChange(workOfficeDet.districtCode, 'work_office');
    // this.onRegOfcLocalityChange(localityType, this.withInUPForm);

    this.onStateChange(directorAddrDet.stateCode, 'address_detail');
    this.onDistrictChange(directorAddrDet.districtCode, 'address_detail');
    // this.onRegOfcLocalityChange(localityType, this.withInUPForm);

    this.indusInsideUPForm.patchValue({

      // Sugarmill Main Form
      // applicationDate: [''],
      mobileNumber: sugarMillRegistrationDetails.mobileNumber,
      industryCode: sugarMillRegistrationDetails.industryCode,
      industryName: sugarMillRegistrationDetails.industryName,
      licenseNumber: sugarMillRegistrationDetails.industryLicenseNumber,
      yearOfEstablishment: sugarMillRegistrationDetails.establishmentYear,
      panNumber: sugarMillRegistrationDetails.panNumber,
      gstinnumber: sugarMillRegistrationDetails.gstNumber,
      vatgstdeposited: sugarmillObj.vatGstDepositedLast3Years,
      lastYearProduced: sugarmillObj.lastYearProduction,
      annualConsumptionCapacity: sugarmillObj.annualConsumptionCapacity,
      molassesStorageCapacity: sugarmillObj.molassesStorageCapacity,
      // dateOfEstablishment: sugarmillObj.mobileNumber,

      // head office address
      headOfficeMobileNumber: headOfficeDet.mobileNumber,
      headOfficeFaxNumber: headOfficeDet.faxNumber,
      headOfficeEmail: headOfficeDet.emailId,
      headOfficePincode: headOfficeDet.pinCode,
      headOfficePoliceStation: headOfficeDet.policeStationCode,
      headOfficeLocality: headOfficeDet.locality,
      headOfficeStreet: headOfficeDet.street,
      headOfficeCountryId: headOfficeDet.country,
      headOfficeStateId: headOfficeDet.stateCode,
      headOfficeDistrictId: headOfficeDet.districtCode,
      headOfficeTehsilId: headOfficeDet.tahsilCode,
      headOfficeUrbanOrRural: headOfficeDet.localityType,

      workingMobileNumber: workOfficeDet.mobileNumber,
      workingFaxNumber: workOfficeDet.faxNumber,
      workingEmail: workOfficeDet.emailId,
      workingPincode: workOfficeDet.pinCode,
      workingPoliceStation: workOfficeDet.policeStationCode,
      workingLocality: workOfficeDet.locality,
      workingStreet: workOfficeDet.street,
      workingCountryId: workOfficeDet.country,
      workingStateId: workOfficeDet.stateCode,
      workingDistrictId: workOfficeDet.districtCode,
      workingTehsilId: workOfficeDet.tahsilCode,
      workingUrbanOrRural: workOfficeDet.localityType,

      // officier details
      directorName: directorDet.name,
      directorDesignation: directorDet.designation,
      directorPincode: directorAddrDet.pinCode,
      directorStateId: directorAddrDet.stateCode,
      directorDistrictId: directorAddrDet.districtCode,
      directorTehsilId: directorAddrDet.tahsilCode,
      directorUrbanOrRural: directorAddrDet.localityType,
      directorPoliceStation: directorAddrDet.policeStationCode,
      directorLocality: directorAddrDet.locality,
      directorStreet: directorAddrDet.street,
      directorMobileNumber: directorDet.mobileNumber,
      directorFaxNumber: directorDet.faxNumber,
      directorEmail: directorDet.emailId,
      remarks: directorDet.stateCode,

    });

    return true;
  }

  patchIndOutsideUPForm() {

    const { sugarMillLicenses: sugarmillObj } = this.licenseApplicationData;
    console.log('respContant::', this.licenseApplicationData);

    const { sugarMillAddressList, sugarMillOfficersList, sugarMillRegistrationDetails } = sugarmillObj;
    const headOfficeDet = sugarMillAddressList[0];
    const workOfficeDet = sugarMillAddressList[1];

    const directorDet = sugarMillOfficersList[0];
    const directorAddrDet = directorDet.officersAddressList[0];

    this.getAllDistricts();
    this.getAllCountrys();
    this.getAllStates();
    this.getAllMunicipal();

    this.onStateChange(headOfficeDet.stateCode, 'head_office');
    this.onDistrictChange(headOfficeDet.districtCode, 'head_office');
    // this.onRegOfcLocalityChange(localityType, this.withInUPForm);

    this.onStateChange(workOfficeDet.stateCode, 'work_office');
    this.onDistrictChange(workOfficeDet.districtCode, 'work_office');
    // this.onRegOfcLocalityChange(localityType, this.withInUPForm);

    this.onStateChange(directorAddrDet.stateCode, 'address_detail');
    this.onDistrictChange(directorAddrDet.districtCode, 'address_detail');
    // this.onRegOfcLocalityChange(localityType, this.withInUPForm);


    this.indusOutsideUPForm.patchValue({

      // Sugarmill Main Form
      // applicationDate: [''],
      mobileNumber: sugarMillRegistrationDetails.mobileNumber,
      industryCode: sugarMillRegistrationDetails.industryCode,
      industryName: sugarMillRegistrationDetails.industryName,
      licenseNumber: sugarMillRegistrationDetails.industryLicenseNumber,
      yearOfEstablishment: sugarMillRegistrationDetails.establishmentYear,
      panNumber: sugarMillRegistrationDetails.panNumber,
      gstNumber: sugarMillRegistrationDetails.gstNumber,
      vatGstDeposited: sugarmillObj.vatGstDepositedLast3Years,
      lastYearProduced: sugarmillObj.lastYearProduction,
      annualConsumptionCapacity: sugarmillObj.annualConsumptionCapacity,
      molassesStorageCapacity: sugarmillObj.molassesStorageCapacity,

      // head office address
      headOfficeMobileNumber: headOfficeDet.mobileNumber,
      headOfficeFaxNumber: headOfficeDet.faxNumber,
      headOfficeEmail: headOfficeDet.emailId,
      headOfficePincode: headOfficeDet.pinCode,
      headOfficePoliceStation: headOfficeDet.policeStationCode,
      headOfficeLocality: headOfficeDet.locality,
      headOfficeStreet: headOfficeDet.street,
      headOfficeCountryId: headOfficeDet.country,
      headOfficeStateId: headOfficeDet.stateCode,
      headOfficeDistrictId: headOfficeDet.districtCode,
      headOfficeTehsilId: headOfficeDet.tahsilCode,
      headOfficeUrbanOrRural: headOfficeDet.localityType,

      workingMobileNumber: workOfficeDet.mobileNumber,
      workingFaxNumber: workOfficeDet.faxNumber,
      workingEmail: workOfficeDet.emailId,
      workingPincode: workOfficeDet.pinCode,
      workingPoliceStation: workOfficeDet.policeStationCode,
      workingLocality: workOfficeDet.locality,
      workingStreet: workOfficeDet.street,
      workingCountryId: workOfficeDet.country,
      workingStateId: workOfficeDet.stateCode,
      workingDistrictId: workOfficeDet.districtCode,
      workingTehsilId: workOfficeDet.tahsilCode,
      workingUrbanOrRural: workOfficeDet.localityType,

      // officier details
      directorName: directorDet.name,
      directorDesignation: directorDet.designation,
      directorPincode: directorAddrDet.pinCode,
      directorCountryId: workOfficeDet.country,
      directorStateId: directorAddrDet.stateCode,
      directorDistrictId: directorAddrDet.districtCode,
      directorTehsilId: directorAddrDet.tahsilCode,
      directorUrbanOrRural: directorAddrDet.localityType,
      directorPoliceStation: directorAddrDet.policeStationCode,
      directorLocality: directorAddrDet.locality,
      directorStreet: directorAddrDet.street,
      directorMobileNumber: directorDet.mobileNumber,
      directorFaxNumber: directorDet.faxNumber,
      directorEmail: directorDet.emailId,
      remarks: directorDet.stateCode,

    });

    return true;
  }

  patchMolassesTradersForm() {

    const { sugarMillLicenses: sugarmillObj, applicationDate } = this.licenseApplicationData;
    console.log('respContant::', this.licenseApplicationData);

    const { sugarMillAddressList } = sugarmillObj;
    const headOfficeDet = sugarMillAddressList[0];

    const {
      mobileNumber, faxNumber, emailId, pinCode, stateCode,
      districtCode, districtDesc, tahsilCode, localityType, locality, country, policeStationCode,
      street, addressDocumentList,
    } = headOfficeDet;

    this.getAllCountrys();
    this.getAllStates();
    this.onStateChange(stateCode, 'head_office');
    this.onDistrictChange(districtCode, 'head_office');
    console.log('locality::', localityType);
    this.onRegOfcLocalityChange(localityType, this.molassesTradersForm);

    const form = this.molassesTradersForm;
    form.controls.gst_file.setValidators([]);
    form.controls.gst_file.updateValueAndValidity();
    form.controls.gst_file_source.setValidators([]);
    form.controls.gst_file_source.updateValueAndValidity();
    form.controls.pan_file.setValidators([]);
    form.controls.pan_file.updateValueAndValidity();
    form.controls.pan_file_source.setValidators([]);
    form.controls.pan_file_source.updateValueAndValidity();
    form.controls.cert_incor_file.setValidators([]);
    form.controls.cert_incor_file.updateValueAndValidity();
    form.controls.cert_incor_file_source.setValidators([]);
    form.controls.cert_incor_file_source.updateValueAndValidity();
    form.controls.memo_of_arti_file.setValidators([]);
    form.controls.memo_of_arti_file.updateValueAndValidity();
    form.controls.memo_of_arti_file_source.setValidators([]);
    form.controls.memo_of_arti_file_source.updateValueAndValidity();
    form.controls.impo_expo_codes_file.setValidators([]);
    form.controls.impo_expo_codes_file.updateValueAndValidity();
    form.controls.impo_expo_codes_file_source.setValidators([]);
    form.controls.impo_expo_codes_file_source.updateValueAndValidity();

    this.molassesTradersForm.patchValue({
      applicationDate: this.invertDate(applicationDate),
      mobileNumber: '9898989898',
      traderName: 'trade-name',
      yearOfEstablish: 2006,
      yearlyAllotment: 2005,

      headOfficeMobileNumber: mobileNumber,
      headOfficeFaxNumber: faxNumber,
      headOfficeEmail: emailId,
      headOfficeCountryId: country,
      headOfficeStateId: stateCode,
      headOfficeDistrictId: districtCode,
      headOfficeThesil: tahsilCode,
      headOfficePincode: pinCode,
      headOfficeUrbanOrRural: localityType,
      headOfficeLocality: locality,
      headOfficePoliceStation: policeStationCode,
      headofficeStreet: street,
    });

  }

  patchBelowGradeForm() {

    const { sugarMillLicenses: sugarmillObj, applicationDate } = this.licenseApplicationData;
    console.log('respContant::', this.licenseApplicationData);

    const { sugarMillAddressList, sugarMillRegistrationDetails } = sugarmillObj;
    const headOfficeDet = sugarMillAddressList[0];

    this.getAllCountrys();
    this.getAllStates();
    this.onStateChange(headOfficeDet.stateCode, 'address_detail');
    this.onDistrictChange(headOfficeDet.districtCode, 'address_detail');
    console.log('locality::', headOfficeDet.localityType);
    // this.onRegOfcLocalityChange(headOfficeDet.localityType, this.belowGradeForm);

    const form = this.belowGradeForm;
    form.controls.gst_file.setValidators([]);
    form.controls.gst_file.updateValueAndValidity();
    form.controls.gst_file_source.setValidators([]);
    form.controls.gst_file_source.updateValueAndValidity();
    form.controls.pan_file.setValidators([]);
    form.controls.pan_file.updateValueAndValidity();
    form.controls.pan_file_source.setValidators([]);
    form.controls.pan_file_source.updateValueAndValidity();
    form.controls.util_molasses_file.setValidators([]);
    form.controls.util_molasses_file.updateValueAndValidity();
    form.controls.util_molasses_file_source.setValidators([]);
    form.controls.util_molasses_file_source.updateValueAndValidity();
    form.controls.storage_capacity_file.setValidators([]);
    form.controls.storage_capacity_file.updateValueAndValidity();
    form.controls.storage_capacity_file_source.setValidators([]);
    form.controls.storage_capacity_file_source.updateValueAndValidity();
    form.controls.purchase_letter_file.setValidators([]);
    form.controls.purchase_letter_file.updateValueAndValidity();
    form.controls.purchase_letter_file_source.setValidators([]);
    form.controls.purchase_letter_file_source.updateValueAndValidity();

    this.belowGradeForm.patchValue({
      applicationDate: this.invertDate(applicationDate),
      unitType: sugarMillRegistrationDetails.unitType,
      unitName: sugarMillRegistrationDetails.unitName,
      mobileNumber: sugarMillRegistrationDetails.mobileNumber,
      proprietorName: sugarMillRegistrationDetails.proprietorName,
      emailId: sugarMillRegistrationDetails.emailId,
      gstNumber: sugarMillRegistrationDetails.gstNumber,
      panNumber: sugarMillRegistrationDetails.panNumber,
      yearOfEstablish: 2006,
      yearlyAllotment: 2005,

      pincode: headOfficeDet.pinCode,
      stateId: headOfficeDet.stateCode,
      districtId: headOfficeDet.districtCode,
      tehsilId: headOfficeDet.tahsilCode,
      urbanOrRural: headOfficeDet.localityType,
      locality: headOfficeDet.locality,
      street: headOfficeDet.street,
      storageCapacity: sugarmillObj.molassesStorageCapacity
    });
  }

  patchComments() {

  }

  isMTHeadFile(fileFor) {

    let res = false;
    if (this.licenseApplicationData) {

      const { headOfcAddressDocumentList } = this.getMolassLicenseData();

      res = headOfcAddressDocumentList.find((resp: any) => resp.name === fileFor);
    }

    return res;
  }

  downloadDocument(fileFor) {

    if (this.licenseApplicationData) {

      const { headOfcAddressDocumentList } = this.getMolassLicenseData();
      const fileObj = headOfcAddressDocumentList.find((resp: any) => resp.name === fileFor);
      const { uuid, documentName } = fileObj;
      console.log('fileObj::', fileObj);

      if (uuid && documentName) {
          this.docUplSer.downloadDocument(uuid, documentName).subscribe((resp: any) => {
            // const blob: any = new Blob([resp], { type: 'image/jpeg; charset=utf-8' });
            fileSaver.saveAs(resp, documentName);
          },
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

  invertDate(date) {
    console.log('invertDate::', date);
    const invrtDate = date.split('-');
    return invrtDate[2] + '-' + invrtDate[1] + '-' + invrtDate[0];
  }

  isEditFormIsReadOnly(isCustomer, status, stage) {
    console.log('status::', status);
    console.log('stage::', stage);
    let readOnly;
    let showActionFor;
    if (isCustomer) {
      console.log('CUSTOMER_ACTION_BUTTONS_WITH_READONLY_YES_OR_NO');
      if ( status !== this.STATUS_APPROVED ) { //APPRROVED
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
      const workFlowName = 'SugarMill Registration';

      this.licenseSer.findWorkFlowDetailsByLoginUserDesignation(moduleNameCode, workFlowName).subscribe((resp: any) => {
        const { responseCode: respCode, responseMessage: respMsg, content: respCont } = resp;
        if ( respCode === 200 ) {
          const { level, isRejected, isSendBack, sendBackList } = respCont;
          this.officerLevel = level;
          this.isRejected = isRejected;
          this.isSendBack = isSendBack;
          this.sendBackList = sendBackList;
          this.alert.showSuccess('Action Initiated', 'Success');
        } else {
          this.alert.showError(respMsg,'Error');
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

  getMunicipalityById(id, key) {
    this.municipalityService.getmunicipalityById(id).subscribe((responceData: any) => {
      switch (key) {
        case 'head_office':
          this.headOfcMunicipalData = responceData.data;
          break;
        case 'work_office':
          this.workOfcMunicipalData = responceData.data;
          break;
        case 'address_detail':
          this.addressDetMunicipalData = responceData.data;
          break;
      }
    });
  }

  onVillageChange(villageId, key) {
    this.getVillageById(villageId, key);
  }

  getVillageById(villageId, key) {
    this.villageService.getvillageById(villageId).subscribe((responceData: any) => {
      switch (key) {
        case 'head_office':
          this.headOfcVillageData = responceData.data;
          break;
        case 'work_office':
          this.workOfcVillageData = responceData.data;
          break;
        case 'address_detail':
          this.addressDetVillageData = responceData.data;
          break;
      }
    });
  }

  onStateChange(stateId, key) {
    this.getDistrictsByStateid(stateId, key);
    this.getStateData(stateId, key);
  }

  getDistrictsByStateid(stateId, key) {
    this.districtSer.getDistrictsByStateid(stateId).subscribe((responceData: any) => {
      switch (key) {
        case 'head_office':
          this.headOfcDistrictListByState = responceData.data;
          break;
        case 'unit_office':
          this.unitOfcDistrictListByState = responceData.data;
          break;
        case 'work_office':
          this.workOfcDistrictListByState = responceData.data;
          break;
        case 'address_detail':
          this.addressDetDistrictListByState = responceData.data;
          break;
      }
    });
  }

  getStateData(stateId, key) {
    this.stateSer.getStateById(stateId).subscribe((responceData: any) => {
      switch (key) {
        case 'head_office':
          this.headOfcStateData = responceData.data;
          break;
        case 'working_office':
          this.workOfcStateData = responceData.data;
          break;
        case 'address_detail':
          this.addressDetStateData = responceData.data;
          break;
      }
    });
  }

  onDistrictChange(id, key) {
    this.districtSer.getdistrictById(id).subscribe((responceData: any) => {
      switch (key) {
        case 'head_office':
          this.headOfcDistrictData = responceData.data;
          break;
        case 'unit_office':
          this.unitOfcDistrictData = responceData.data;
          break;
        case 'work_office':
          this.workOfcDistrictData = responceData.data;
          break;
        case 'address_detail':
          this.addressDetDistrictData = responceData.data;
          break;
      }
      this.loadTalukByDist(id, key);
    });
  }

  loadTalukByDist(id, key) {
    this.talukService.gettalukByDistId(id).subscribe((responceData: any) => {
      switch (key) {
        case 'head_office':
          this.headOfctalukList = responceData.data;
          break;
        case 'unit_office':
          this.unitOfctalukList = responceData.data;
          break;
        case 'work_office':
          this.workOfctalukList = responceData.data;
          break;
        case 'address_detail':
          this.addressDettalukList = responceData.data;
          break;
      }
    });
  }

  getBlockById(id, key) {
    this.blockService.getblockById(id).subscribe((responceData: any) => {
      switch (key) {
        case 'head_office':
          this.headOfcBlockData = responceData.data;
          break;
        case 'address_detail':
          this.addressDetBlockData = responceData.data;
          break;
      }
    });
  }

  getAllDistricts() {
    this.districtSer.getAllDistrict().subscribe((responceData: any) => {
      this.districtsList = responceData.data;
    });
  }

  getAllCountrys() {
    this.country.getCountry().subscribe((responceData: any) => {
      this.countryList = responceData.data;
    });
  }

  getAllMunicipalitys() {
    this.municipalityService.getMunicipality().subscribe((responceData: any) => {
      this.municipalityList = responceData.data;
    });
  }

  onTalukChange(talukId, key) {
    this.getTalukById(talukId, key);
    this.getAllVillageByTalukId(talukId, key);
  }

  getTalukById(talukId, key) {
    this.talukService.gettalukById(talukId).subscribe((responceData: any) => {
      switch (key) {
        case 'head_office':
          this.headOfcTehsilData = responceData.data;
          break;
        case 'work_office':
          this.workOfcTehsilData = responceData.data;
          break;
        case 'address_detail':
          this.addressDetTehsilData = responceData.data;
          break;
      }
    });

  }

  getAllVillageByTalukId(talukId, key) {
    this.villageService.getvillageByTalukId(talukId).subscribe((responceData: any) => {
      switch (key) {
        case 'head_office':
          this.headOfcVillageList = responceData.data;
          break;
        case 'work_office':
          this.workOfcVillageList = responceData.data;
          break;
        case 'address_detail':
          this.addressDetVillageList = responceData.data;
          break;
      }
    });
  }

  numberOnly(event): boolean {
    const charCode = (event.which) ? event.which : event.keyCode;
    if (charCode > 31 && (charCode < 48 || charCode > 57)) {
      return false;
    }
    return true;
  }

  onCityType($event) {
    const urbanRuralVal = $event.target.value;
    console.log('urbanRuralVal::', urbanRuralVal);

    if (urbanRuralVal === 1) {
      this.cityType = 'urban';
    } else if (urbanRuralVal === 2) {
      this.cityType = 'rural';
    } else {
      this.cityType = '';
    }
  }

  barcodeevent(event, value) {
    console.log(value);
    // this.capacityDistillery = (value === 'Yes') ? true : false;
  }

  onFileChange(event, sourceName, fileFor, form) {

    if (event.target.files.length > 0) {
      const file = event.target.files[0];

      file.fileFor = fileFor;
      form.patchValue({
        [sourceName]: file
      });

    }
  }

  onBelowGradAddrFileChange(event, sourceName, fileFor) {

    const form = this.belowGradeForm;
    this.onFileChange(event, sourceName, fileFor, form);

    console.log('targetForm.valid::', form.valid);
    console.log('targetForm.value::', form.value);

    this.headOfcFiles.push(sourceName);
    console.log('targetForm::', form);
  }

  onMolassFileChange(event, sourceName, fileFor) {

    const form = this.molassesTradersForm;
    this.onFileChange(event, sourceName, fileFor, form);

    console.log('targetForm.valid::', form.valid);
    console.log('targetForm.value::', form.value);

    this.headOfcFiles.push(sourceName);
    console.log('targetForm::', form);
  }

  onRegOfcLocalityChange(locality, form) {
    if (locality === 'Urban') {
      this.regOfcLocalityType = 'urban';
      form.controls.headOfficeMunicipalAreaId.setValidators([Validators.required]);
      form.controls.headOfficeMunicipalAreaId.updateValueAndValidity();
      form.controls.headofficeBlock.setValidators([]);
      form.controls.headofficeBlock.updateValueAndValidity();
      form.controls.headOfficeVillage.setValidators([]);
      form.controls.headOfficeVillage.updateValueAndValidity();
    } else if (locality === 'Rural') {
      this.regOfcLocalityType = 'rural';
      form.controls.headofficeBlock.setValidators([Validators.required]);
      form.controls.headofficeBlock.updateValueAndValidity();
      form.controls.headOfficeVillage.setValidators([Validators.required]);
      form.controls.headOfficeVillage.updateValueAndValidity();
      form.controls.headOfficeMunicipalAreaId.setValidators([]);
      form.controls.headOfficeMunicipalAreaId.updateValueAndValidity();
    } else {
      this.regOfcLocalityType = '';
      form.controls.headOfficeMunicipalAreaId.setValidators([Validators.required]);
      form.controls.headOfficeMunicipalAreaId.updateValueAndValidity();
    }
    console.log('onRegOfcLocalityChange::', this.regOfcLocalityType);
  }

  onRegHeadOfcLocalityChange($event, form) {
    console.log('onRegHeadOfcLocalityChange::', $event.target.value);
    if ($event.target.value === 'Urban') {
      this.regOfcLocalityType = 'urban';
      console.log('urban::');
      form.controls.headOfficeMunicipalAreaId.setValidators([Validators.required]);
      form.controls.headOfficeMunicipalAreaId.updateValueAndValidity();
      form.controls.headOfficeBlockId.setValidators([]);
      form.controls.headOfficeBlockId.updateValueAndValidity();
      form.controls.headOfficeVillageId.setValidators([]);
      form.controls.headOfficeVillageId.updateValueAndValidity();
    } else if ($event.target.value === 'Rural') {
      this.regOfcLocalityType = 'rural';
      console.log('rural::');
      form.controls.headOfficeBlockId.setValidators([Validators.required]);
      form.controls.headOfficeBlockId.updateValueAndValidity();
      form.controls.headOfficeVillageId.setValidators([Validators.required]);
      form.controls.headOfficeVillageId.updateValueAndValidity();
      form.controls.headOfficeMunicipalAreaId.setValidators([]);
      form.controls.headOfficeMunicipalAreaId.updateValueAndValidity();
    } else {
      this.regOfcLocalityType = '';
      console.log('no-locality::');
      form.controls.headOfficeMunicipalAreaId.setValidators([Validators.required]);
      form.controls.headOfficeMunicipalAreaId.updateValueAndValidity();
    }
  }

  onUnitOfcLocalityChange($event, form) {
    if ($event.target.value === 'Urban') {
      this.unitOfcLocalityType = 'urban';
      form.controls.unitOfficeMuncipalArea.setValidators([Validators.required]);
      form.controls.unitOfficeMuncipalArea.updateValueAndValidity();
      form.controls.unitOfficeBlock.setValidators([]);
      form.controls.unitOfficeBlock.updateValueAndValidity();
      form.controls.unitOfficeVillage.setValidators([]);
      form.controls.unitOfficeVillage.updateValueAndValidity();
    } else if ($event.target.value === 'Rural') {
      this.unitOfcLocalityType = 'rural';
      form.controls.unitOfficeBlock.setValidators([Validators.required]);
      form.controls.unitOfficeBlock.updateValueAndValidity();
      form.controls.unitOfficeVillage.setValidators([Validators.required]);
      form.controls.unitOfficeVillage.updateValueAndValidity();
      form.controls.unitOfficeMuncipalArea.setValidators([]);
      form.controls.unitOfficeMuncipalArea.updateValueAndValidity();
    } else {
      this.unitOfcLocalityType = '';
      form.controls.unitOfficeMuncipalArea.setValidators([Validators.required]);
      form.controls.unitOfficeMuncipalArea.updateValueAndValidity();
    }
  }

  onWorkOfcLocalityChange($event, form) {
    if ($event.target.value === 'Urban') {
      this.workOfcLocalityType = 'urban';
      form.controls.workingMunicipalAreaId.setValidators([Validators.required]);
      form.controls.workingMunicipalAreaId.updateValueAndValidity();
      form.controls.workingBlockId.setValidators([]);
      form.controls.workingBlockId.updateValueAndValidity();
      form.controls.workingVillageId.setValidators([]);
      form.controls.workingVillageId.updateValueAndValidity();
    } else if ($event.target.value === 'Rural') {
      this.workOfcLocalityType = 'rural';
      form.controls.workingBlockId.setValidators([Validators.required]);
      form.controls.workingBlockId.updateValueAndValidity();
      form.controls.workingVillageId.setValidators([Validators.required]);
      form.controls.workingVillageId.updateValueAndValidity();
      form.controls.workingMunicipalAreaId.setValidators([]);
      form.controls.workingMunicipalAreaId.updateValueAndValidity();
    } else {
      this.workOfcLocalityType = '';
      form.controls.workingMunicipalAreaId.setValidators([Validators.required]);
      form.controls.workingMunicipalAreaId.updateValueAndValidity();
    }
  }

  onDirectorOfcLocalityChange($event, form) {
    if ($event.target.value === 'Urban') {
      this.directorOfcLocalityType = 'urban';
      form.controls.directorMunicipalAreaId.setValidators([Validators.required]);
      form.controls.directorMunicipalAreaId.updateValueAndValidity();
      form.controls.directorBlockId.setValidators([]);
      form.controls.directorBlockId.updateValueAndValidity();
      form.controls.directorVillageId.setValidators([]);
      form.controls.directorVillageId.updateValueAndValidity();
    } else if ($event.target.value === 'Rural') {
      this.directorOfcLocalityType = 'rural';
      form.controls.directorBlockId.setValidators([Validators.required]);
      form.controls.directorBlockId.updateValueAndValidity();
      form.controls.directorVillageId.setValidators([Validators.required]);
      form.controls.directorVillageId.updateValueAndValidity();
      form.controls.directorMunicipalAreaId.setValidators([]);
      form.controls.directorMunicipalAreaId.updateValueAndValidity();
    } else {
      this.directorOfcLocalityType = '';
      form.controls.directorMunicipalAreaId.setValidators([Validators.required]);
      form.controls.directorMunicipalAreaId.updateValueAndValidity();
    }
  }

  async getApplicationNo() {

    if (this.isFormEdit) {
      return this.licenseApplicationData.applicationNumber;
    } else {
      const { content: applicationNumber } = await this.licenseSer.getApplicationNo('SML');
      if (!applicationNumber) {
        this.alert.showError('Error while getting application number', 'Error');
        return;
      }
      return applicationNumber;
    }
  }

  onSubmit(saveType) {
    switch (this.screenSubType) {
      case this.SCREEN_WITHIN_UP:
        this.addWithinUp(saveType);
        break;
      case this.SCREEN_OUTSIDE_UP:
        this.addOutsideUp(saveType);
        break;
      case this.SCREEN_IND_INSIDE_UP:
        this.addIndusInsideUp(saveType);
        break;
      case this.SCREEN_IND_OUTSIDE_UP:
        this.addIndusOutsideUp(saveType);
        break;
      case this.SCREEN_MOLASS_TRADERS:
        this.addMolassesTraders(saveType);
        break;
      case this.SCREEN_BELOW_GRADE:
        this.addBelowGrade(saveType);
        break;
    }
  }

  async addWithinUp(saveType) {
    this.formSubmitted = false;
    const form = this.withInUPForm;
    console.log('saveType::', saveType);
    console.log('this.withInUPForm.valid::', form.valid);
    console.log('this.withInUPForm.value::', form.value);

    if (saveType !== this.STATUS_DRAFT && form.valid === false) {
      this.formSubmitted = true;
      return false;
    }

    const {
      applicationDate, mobileNumber, sugarMillName, district,
      yearOfEstablish, commencementDate, group,

      headOfficeCountryId, headOfficeDistrictId, headOfficeEmail,
      headOfficeFaxNumber, headOfficeLocality, headOfficeMobileNumber, headOfficeMunicipalAreaId,
      headOfficePincode, headOfficePoliceStation, headOfficeStateId, headofficeStreet, headOfficeThesilId,
      headOfficeUrbanOrRural, headOfficeward, headofficeBlock, headOfficeVillage,

      unitOfficeCountryId, unitOfficeDistrictId, unitOfficeEmail,
      unitOfficeFaxNumber, unitOfficeLocality, unitOfficeMobileNumber,
      unitOfficePincode, unitOfficePoliceStation, unitOfficeStateId,
      unitOfficeStreet, unitOfficeThesilId, unitOfficeUrbanorrural, unitOfficeWard,
      unitOfficeBlock, unitOfficeVillage,

      occupierAddress, occupierDesignation, occupierEmail, occupierFaxNumber, occupierMobileNumber, occupierName,

      generalManagerAddress, generalManagerDesignation, generalManagerEmail, generalManagerFaxNumber,
      generalManagerMobileNumber, generalManagerName,

      salesManagerAddress, salesManagerdesignation,
      salesManagerEmail, salesManagerFaxNumber, salesManagerMobileNumber, salesManagerName,

      molasses, sugar, tonsDay, tonsSeason, quintal, capacityDistillery, sugarMillMolassesEntityList,
    } = form.value;

    const applicationNo = await this.getApplicationNo();

    const headeDistrictDesc = (headOfficeDistrictId) ? this.headOfcDistrictListByState.find((res) => res.id === headOfficeDistrictId) : '';
    const headStateDesc = (headOfficeDistrictId) ? this.stateList.find((res) => res.id === headOfficeStateId) : '';
    const headTahsilDesc = (headOfficeThesilId) ? this.headOfctalukList.find((res) => res.id === headOfficeThesilId) : '';
    const unitDistrictDesc = (unitOfficeDistrictId) ? this.unitOfcDistrictListByState.find((res) => res.id === unitOfficeDistrictId) : '';
    const unitStateDesc = (unitOfficeStateId) ? this.stateList.find((res) => res.id === unitOfficeStateId) : '';
    const unitTahsilDesc = (unitOfficeThesilId) ? this.unitOfctalukList.find((res) => res.id === unitOfficeThesilId) : '';

    const payload: any = {
      applicationDate: this.invertDate(applicationDate),
      applicationNumber: applicationNo,
      status: saveType,
      sugarMillLicenses: {
        licenseType: this.LIC_TYPE_WITH_IN_UP,
        sugarMillRegistrationDetails: {
          mobileNumber,
          sugarMillName,
          districtCode: district,
          districtDesc: district,
          establishmentYear: yearOfEstablish,
          commencementYear: 2016,
          groupName: group,
          gstNumber: group,
        },
        sugarMillAddressList: [
          {
            addressIdentifier: 'Registered_Head_Office',
            country: parseInt(headOfficeCountryId) ? parseInt(headOfficeCountryId) : '',
            districtCode: headOfficeDistrictId,
            districtDesc: headeDistrictDesc,
            emailId: headOfficeEmail,
            faxNumber: parseInt(headOfficeFaxNumber) ? parseInt(headOfficeFaxNumber) : '',
            localityType: headOfficeUrbanOrRural,
            locality: headOfficeLocality,
            mobileNumber: parseInt(headOfficeMobileNumber) ? parseInt(headOfficeMobileNumber) : '',
            pinCode: parseInt(headOfficePincode) ? parseInt(headOfficePincode) : '',
            policeStationCode: headOfficePoliceStation,
            street: headofficeStreet,
            stateCode: parseInt(headOfficeStateId) ? parseInt(headOfficeStateId) : '',
            stateDesc: headStateDesc,
            tahsilCode: headOfficeThesilId,
            tahsilDesc: headTahsilDesc
          },
          {
            addressIdentifier: 'Unit_Office',
            country: parseInt(unitOfficeCountryId) ? parseInt(unitOfficeCountryId) : '',
            districtCode: unitOfficeDistrictId,
            districtDesc: unitDistrictDesc,
            emailId: unitOfficeEmail,
            faxNumber: parseInt(unitOfficeFaxNumber) ? parseInt(unitOfficeFaxNumber) : '',
            localityType: unitOfficeUrbanorrural,
            locality: unitOfficeLocality,
            mobileNumber: parseInt(unitOfficeMobileNumber) ? parseInt(unitOfficeMobileNumber) : '',
            pinCode: parseInt(unitOfficePincode) ? parseInt(unitOfficePincode) : '',
            policeStationCode: unitOfficePoliceStation,
            stateCode: parseInt(unitOfficeStateId) ? parseInt(unitOfficeStateId) : '',
            stateDesc: unitStateDesc,
            street: unitOfficeStreet,
            tahsilCode: unitOfficeThesilId,
            tahsilDesc: unitTahsilDesc,
          }
        ],
        sugarMillOfficersList: [
          {
            officerType: 'occupier_officer',
            address: occupierAddress,
            designation: occupierDesignation,
            emailId: occupierEmail,
            faxNumber: parseInt(occupierFaxNumber) ? parseInt(occupierFaxNumber) : 0,
            mobileNumber: parseInt(occupierMobileNumber) ? parseInt(occupierMobileNumber) : 0,
            name: occupierName
          },
          {
            officerType: 'General_manager',
            address: generalManagerAddress,
            designation: generalManagerDesignation,
            emailId: generalManagerEmail,
            faxNumber: parseInt(generalManagerFaxNumber) ? parseInt(generalManagerFaxNumber) : 0,
            mobileNumber: parseInt(generalManagerMobileNumber) ? parseInt(generalManagerMobileNumber) : 0,
            name: generalManagerName,
          },
          {
            officerType: 'Sales_manager',
            address: salesManagerAddress,
            designation: salesManagerdesignation,
            emailId: salesManagerEmail,
            faxNumber: parseInt(salesManagerFaxNumber) ? parseInt(salesManagerFaxNumber) : 0,
            mobileNumber: parseInt(salesManagerMobileNumber) ? parseInt(salesManagerMobileNumber) : 0,
            name: salesManagerName,
          }
        ],
        perDayTons: parseInt(tonsDay) ? parseInt(tonsDay) : 0,
        perSeasonTons: parseInt(tonsSeason) ? parseInt(tonsSeason) : 0,
        molasses: parseInt(molasses) ? parseInt(molasses) : 0,
        sugar: parseInt(sugar) ? parseInt(sugar) : 0,
        quintalCounter: parseInt(quintal) ? parseInt(quintal) : 0,
        isSugarMillCaptiveDistilleries: capacityDistillery,
        molassesList: sugarMillMolassesEntityList
      }
    };

    await this.createLicense(payload, form, saveType);

    return true;
  }

  async addOutsideUp(saveType) {
    this.formSubmitted = false;
    const form = this.outsideUPForm;
    console.log('saveType::', saveType);
    console.log('this.outsideUPForm.valid::', form.valid);
    console.log('this.outsideUPForm.value::', form.value);

    if (saveType !== this.STATUS_DRAFT && form.valid === false) {
      this.formSubmitted = true;
      return false;
    }

    const {
      applicationDate, mobileNumber, sugarMillName, districtId, yearOfEstablish, commencementDate, group,

      headOfficeCountryId, headOfficeDistrictId, headOfficeEmail, headOfficeFaxNumber,
      headOfficeLocality, headOfficeMobileNumber, headOfficeMunicipalAreaId, headOfficePincode,
      headOfficePoliceStation, headOfficeStateId, headofficeStreet, headOfficeThesilId,
      headOfficeUrbanOrRural, headOfficeward, headofficeBlock, headOfficeVillage,

      unitOfficeCountryId, unitOfficeDistrictId, unitOfficeEmail, unitOfficeFaxNumber,
      unitOfficeLocality, unitOfficeMobileNumber, unitOfficePincode, unitOfficePoliceStation,
      unitOfficeStateId, unitOfficeStreet, unitOfficeThesilId, unitOfficeUrbanorrural, unitOfficeWard,
      unitOfficeBlock, unitOfficeVillage,

      occupierAddress, occupierDesignation, occupierEmail, occupierFaxNumber, occupierMobileNumber, occupierName,

      generalManagerAddress, generalManagerDesignation, generalManagerEmail, generalManagerFaxNumber,
      generalManagerMobileNumber, generalManagerName,

      salesManagerAddress, salesManagerdesignation, salesManagerEmail, salesManagerFaxNumber,
      salesManagerMobileNumber, salesManagerName,

      molasses, sugar, tonsDay, tonsSeason, quintal, capacityDistillery, sugarMillMolassesEntityList,
    } = form.value;

    const applicationNo = await this.getApplicationNo();

    const mainDistrictDesc = ( districtId ) ? this.districtsList.find((res) => res.id === districtId) : '';
    const headDistrictDesc = ( headOfficeDistrictId ) ? this.headOfcDistrictListByState.find((res) => res.id === headOfficeDistrictId) : '';
    const headStateDesc = ( headOfficeStateId ) ? this.stateList.find((res) => res.id === headOfficeStateId) : '';
    const headTahsilDesc = ( headOfficeThesilId ) ? this.headOfctalukList.find((res) => res.id === headOfficeThesilId) : '';

    const unitDistrictDesc = ( unitOfficeDistrictId ) ? this.unitOfcDistrictListByState.find((res) => res.id === unitOfficeDistrictId) : '';
    const unitStateDesc = ( unitOfficeStateId ) ? this.stateList.find((res) => res.id === unitOfficeStateId) : '';
    const unitTahsilDesc = ( unitOfficeThesilId ) ? this.unitOfctalukList.find((res) => res.id === unitOfficeThesilId) : '';

    const payload: any = {
      applicationDate: this.invertDate(applicationDate),
      applicationNumber: applicationNo,
      status: saveType,
      sugarMillLicenses: {
        licenseType: this.LIC_TYPE_OS_UP,
        sugarMillRegistrationDetails: {
          mobileNumber,
          sugarMillName,
          districtCode: districtId,
          districtDesc: mainDistrictDesc,
          establishmentYear: yearOfEstablish,
          commencementYear: 2016,
          groupName: group,
          gstNumber: group,
        },
        sugarMillAddressList: [
          {
            addressIdentifier: 'Registered_Head_Office',
            country: parseInt(headOfficeCountryId) ? parseInt(headOfficeCountryId) : '',
            districtCode: parseInt(headOfficeDistrictId) ? parseInt(headOfficeDistrictId) : '',
            districtDesc: headDistrictDesc,
            emailId: headOfficeEmail,
            faxNumber: parseInt(headOfficeFaxNumber) ? parseInt(headOfficeFaxNumber) : '',
            locality: headOfficeLocality,
            localityType: headOfficeUrbanOrRural,
            mobileNumber: parseInt(headOfficeMobileNumber) ? parseInt(headOfficeMobileNumber) : '',
            pinCode: parseInt(headOfficePincode) ? parseInt(headOfficePincode) : '',
            policeStationCode: headOfficePoliceStation,
            stateCode: parseInt(headOfficeStateId) ? parseInt(headOfficeStateId) : '',
            stateDesc: headStateDesc,
            street: headofficeStreet,
            tahsilCode: parseInt(headOfficeThesilId) ? parseInt(headOfficeThesilId) : '',
            tahsilDesc: headTahsilDesc,
          },
          {
            addressIdentifier: 'Unit_Office',
            country: parseInt(unitOfficeCountryId) ? parseInt(unitOfficeCountryId) : '',
            districtCode: parseInt(unitOfficeDistrictId) ? parseInt(unitOfficeDistrictId) : '',
            districtDesc: unitDistrictDesc,
            emailId: unitOfficeEmail,
            faxNumber: parseInt(unitOfficeFaxNumber) ? parseInt(unitOfficeFaxNumber) : '',
            locality: unitOfficeLocality,
            localityType: unitOfficeUrbanorrural,
            mobileNumber: parseInt(unitOfficeMobileNumber) ? parseInt(unitOfficeMobileNumber) : '',
            pinCode: parseInt(unitOfficePincode) ? parseInt(unitOfficePincode) : '',
            policeStationCode: unitOfficePoliceStation,
            stateCode: parseInt(unitOfficeStateId) ? parseInt(unitOfficeStateId) : '',
            stateDesc: unitStateDesc,
            street: unitOfficeStreet,
            tahsilCode: parseInt(unitOfficeThesilId) ? parseInt(unitOfficeThesilId) : '',
            tahsilDesc: unitTahsilDesc,
          }
        ],
        sugarMillOfficersList: [
          {
            officerType: 'occupier_officer',
            address: occupierAddress,
            designation: occupierDesignation,
            emailId: occupierEmail,
            faxNumber: parseInt(occupierFaxNumber) ? parseInt(occupierFaxNumber) : 0,
            mobileNumber: parseInt(occupierMobileNumber) ? parseInt(occupierMobileNumber) : 0,
            name: occupierName
          },
          {
            officerType: 'General_manager',
            address: generalManagerAddress,
            designation: generalManagerDesignation,
            emailId: generalManagerEmail,
            faxNumber: parseInt(generalManagerFaxNumber) ? parseInt(generalManagerFaxNumber) : 0,
            mobileNumber: parseInt(generalManagerMobileNumber) ? parseInt(generalManagerMobileNumber) : 0,
            name: generalManagerName,
          },
          {
            officerType: 'Sales_manager',
            address: salesManagerAddress,
            designation: salesManagerdesignation,
            emailId: salesManagerEmail,
            faxNumber: parseInt(salesManagerFaxNumber) ? parseInt(salesManagerFaxNumber) : 0,
            mobileNumber: parseInt(salesManagerMobileNumber) ? parseInt(salesManagerMobileNumber) : 0,
            name: salesManagerName,
          }
        ],
        perDayTons: parseInt(tonsDay) ? parseInt(tonsDay) : 0,
        perSeasonTons: parseInt(tonsSeason) ? parseInt(tonsSeason) : 0,
        molasses: parseInt(molasses) ? parseInt(molasses) : 0,
        sugar: parseInt(sugar) ? parseInt(sugar) : 0,
        quintalCounter: parseInt(quintal) ? parseInt(quintal) : 0,
        isSugarMillCaptiveDistilleries: capacityDistillery,
        molassesList: sugarMillMolassesEntityList
      }
    };

    await this.createLicense(payload, form, saveType);

    return true;
  }

  async addIndusInsideUp(saveType) {
    this.formSubmitted = false;
    const form = this.indusInsideUPForm;
    console.log('saveType::', saveType);
    console.log('this.indusInsideUPForm.valid::', form.valid);
    console.log('this.indusInsideUPForm.value::', form.value);

    if (saveType !== this.STATUS_DRAFT && form.valid === false) {
      this.formSubmitted = true;
      return false;
    }

    const {
      applicationDate, mobileNumber, industryCode, industryName, licenseNumber,
      yearOfEstablishment, panNumber, gstinnumber, vatgstdeposited, lastYearProduced,
      annualConsumptionCapacity, molassesStorageCapacity, dateOfEstablishment,

      headOfficeCountryId, headOfficeDistrictId, headOfficeEmail, headOfficeFaxNumber, headOfficeLocality,
      headOfficeMobileNumber, headOfficeMuncipalarea, headOfficePincode, headOfficePoliceStation,
      headOfficeStateId, headOfficeStreet, headOfficeTehsilId, headOfficeUrbanOrRural, headOfficeward,
      headofficeBlock, headOfficeVillage,

      workingMobileNumber, workingFaxNumber, workingEmail, workingCountryId, workingPincode,
      workingStateId, workingDistrictId, workingTehsilId, workingUrbanOrRural, workingMunicipalAreaId,
      workingWard, workingBlockId, workingVillageId, workingPoliceStation, workingLocality, workingStreet,

      directorName, directorDesignation, directorCountryId, directorStateId, directorDistrictId,
      directorTehsilId, directorUrbanOrRural, directorMunicipalAreaId, directorWard, directorVillageId,
      directorPoliceStation, directorLocality, directorStreet, directorMobileNumber, directorFaxNumber,
      directorEmail, remarks
    } = form.value;

    const applicationNo = await this.getApplicationNo();

    const headDistrictDesc = this.headOfcDistrictListByState.find((res) => res.id === headOfficeDistrictId);
    const headStateDesc = this.stateList.find((res) => res.id === headOfficeStateId);
    const headTahsilDesc = this.headOfctalukList.find((res) => res.id === headOfficeTehsilId);

    const workDistrictDesc = this.workOfcDistrictListByState.find((res) => res.id === workingDistrictId);
    const workStateDesc = this.stateList.find((res) => res.id === workingStateId);
    const workTahsilDesc = this.workOfctalukList.find((res) => res.id === workingTehsilId);

    const directorStateDesc = this.stateList.find((res) => res.id === directorStateId);
    const directorDistrictDesc = this.addressDetDistrictListByState.find((res) => res.id === directorDistrictId);
    const directorTahsilDesc = this.addressDettalukList.find((res) => res.id === directorTehsilId);

    const payload: any = {
      applicationDate: this.invertDate(applicationDate),
      applicationNumber: applicationNo,
      status: saveType,
      sugarMillLicenses: {
        licenseType: this.LIC_TYPE_IND_IN_UP,
        sugarMillRegistrationDetails: {
          mobileNumber,
          establishmentYear: yearOfEstablishment,
          commencementYear: 2016,
          panNumber,
          gstNumber: gstinnumber,
          industryLicenseNumber: licenseNumber,
          industryCode,
          industryName,
        },
        lastYearProduction: lastYearProduced,
        annualConsumptionCapacity,
        molassesStorageCapacity,
        vatGstDepositedLast3Years: vatgstdeposited,
        sugarMillAddressList: [
          {
            addressIdentifier: 'Registered_Head_Office',
            country: parseInt(headOfficeCountryId) ? parseInt(headOfficeCountryId) : '',
            districtCode: parseInt(headOfficeDistrictId) ? parseInt(headOfficeDistrictId) : '',
            districtDesc: headDistrictDesc,
            emailId: headOfficeEmail,
            faxNumber: parseInt(headOfficeFaxNumber) ? parseInt(headOfficeFaxNumber) : '',
            locality: headOfficeLocality,
            localityType: headOfficeUrbanOrRural,
            mobileNumber: parseInt(headOfficeMobileNumber) ? parseInt(headOfficeMobileNumber) : '',
            pinCode: parseInt(headOfficePincode) ? parseInt(headOfficePincode) : '',
            policeStationCode: headOfficePoliceStation,
            stateCode: parseInt(headOfficeStateId) ? parseInt(headOfficeStateId) : '',
            stateDesc: headStateDesc,
            street: headOfficeStreet,
            tahsilCode: parseInt(headOfficeTehsilId) ? parseInt(headOfficeTehsilId) : '',
            tahsilDesc: headTahsilDesc,
          },
          {
            addressIdentifier: 'Work_Office',
            mobileNumber: parseInt(workingMobileNumber) ? parseInt(workingMobileNumber) : '',
            faxNumber: parseInt(workingFaxNumber) ? parseInt(workingFaxNumber) : '',
            emailId: workingEmail,
            country: parseInt(workingCountryId) ? parseInt(workingCountryId) : '',
            districtCode: parseInt(workingDistrictId) ? parseInt(workingDistrictId) : '',
            districtDesc: workDistrictDesc,
            pinCode: parseInt(workingPincode) ? parseInt(workingPincode) : '',
            stateCode: parseInt(workingStateId) ? parseInt(workingStateId) : '',
            stateDesc: workStateDesc,
            policeStationCode: workingPoliceStation,
            locality: workingLocality,
            localityType: workingUrbanOrRural,
            street: workingStreet,
            tahsilCode: parseInt(workingTehsilId) ? parseInt(workingTehsilId) : '',
            tahsilDesc: workTahsilDesc,
          }
        ],
        sugarMillOfficersList: [
          {
            officerType: 'director_officer',
            designation: directorDesignation,
            emailId: directorEmail,
            faxNumber: parseInt(directorFaxNumber) ? parseInt(directorFaxNumber) : 0,
            mobileNumber: parseInt(directorMobileNumber) ? parseInt(directorMobileNumber) : 0,
            name: directorName,
            officersAddressList: [
              {
                addressIdentifier: 'Director_Office',
                country: parseInt(directorCountryId) ? parseInt(directorCountryId) : 0,
                stateCode: parseInt(directorStateId) ? parseInt(directorStateId) : 0,
                stateDesc: directorStateDesc,
                districtCode: parseInt(directorDistrictId) ? parseInt(directorDistrictId) : 0,
                districtDesc: directorDistrictDesc,
                emailId: directorEmail,
                faxNumber: parseInt(directorFaxNumber) ? parseInt(directorFaxNumber) : 0,
                locality: directorLocality,
                localityType: directorUrbanOrRural,
                mobileNumber: parseInt(directorMobileNumber) ? parseInt(directorMobileNumber) : 0,
                pinCode: parseInt(directorMobileNumber) ? parseInt(directorMobileNumber) : 0,
                policeStationCode: directorPoliceStation,
                street: directorStreet,
                tahsilCode: parseInt(directorTehsilId) ? parseInt(directorTehsilId) : 0,
                tahsilDesc: directorTahsilDesc,
              }
            ]
          }
        ],
      }
    };

    await this.createLicense(payload, form, saveType);

    return true;
  }

  async addIndusOutsideUp(saveType) {
    this.formSubmitted = false;
    const form = this.indusOutsideUPForm;
    console.log('saveType::', saveType);
    console.log('this.indusOutsideUPForm.valid::', form.valid);
    console.log('this.indusOutsideUPForm.value::', form.value);

    if (saveType !== this.STATUS_DRAFT && form.valid === false) {
      this.formSubmitted = true;
      return false;
    }

    const {
      applicationDate, mobileNumber, industryCode, industryName, licenseNumber,
      yearOfEstablishment, panNumber, gstNumber, vatGstDeposited, lastYearProduced,
      annualConsumptionCapacity, molassesStorageCapacity, dateOfEstablishment,

      headOfficeCountryId, headOfficeDistrictId, headOfficeEmail, headOfficeFaxNumber,
      headOfficeLocality, headOfficeMobileNumber, headOfficePincode, headOfficeUrbanOrRural,
      headOfficePoliceStation, headOfficeStateId, headOfficeStreet, headOfficeTehsilId,

      workingMobileNumber, workingFaxNumber, workingEmail, workingCountryId, workingPincode,
      workingStateId, workingDistrictId, workingTehsilId, workingUrbanOrRural, workingMunicipalArea,
      workingWard, workingBlock, workingVillage, workingPoliceStation, workingLocality, workingStreet,

      directorName, directorDesignation, directorCountryId, directorPincode,
      directorStateId, directorDistrictId, directorTehsilId, directorUrbanOrRural, directorMunicipalArea,
      directorWard, directorBlock, directorVillage, directorPoliceStation, directorLocality,
      directorStreet, directorMobileNumber, directorFaxNumber, directorEmail, remarks
    } = form.value;

    const applicationNo = await this.getApplicationNo();

    const headDistrictDesc = ( headOfficeDistrictId ) ? this.headOfcDistrictListByState.find((res) => res.id === headOfficeDistrictId) : '';
    const headStateDesc = ( headOfficeStateId ) ? this.stateList.find((res) => res.id === headOfficeStateId) : '';
    const headTahsilDesc = ( headOfficeTehsilId ) ? this.headOfctalukList.find((res) => res.id === headOfficeTehsilId) : '';

    const workDistrictDesc = ( workingDistrictId ) ? this.workOfcDistrictListByState.find((res) => res.id === workingDistrictId) : '';
    const workStateDesc = ( workingStateId ) ? this.stateList.find((res) => res.id === workingStateId) : '';
    const workTahsilDesc = ( workingTehsilId ) ? this.workOfctalukList.find((res) => res.id === workingTehsilId) : '';

    const directorDistrictDesc = ( directorDistrictId ) ? this.addressDetDistrictListByState.find((res) => res.id === directorDistrictId) : '';
    const directorStateDesc = ( directorStateId ) ? this.stateList.find((res) => res.id === directorStateId) : '';
    const directorTahsilDesc = ( directorTehsilId ) ? this.addressDettalukList.find((res) => res.id === directorTehsilId) : '';

    const payload: any = {
      applicationDate: this.invertDate(applicationDate),
      applicationNumber: applicationNo,
      status: saveType,
      sugarMillLicenses: {
        licenseType: this.LIC_TYPE_IND_OUT_UP,
        lastYearProduction: lastYearProduced,
        annualConsumptionCapacity,
        molassesStorageCapacity,
        vatGstDepositedLast3Years: vatGstDeposited,
        sugarMillRegistrationDetails: {
          mobileNumber,
          establishmentYear: yearOfEstablishment,
          commencementYear: 2016,
          panNumber,
          gstNumber,
          industryLicenseNumber: licenseNumber,
          industryCode,
          industryName,
        },
        sugarMillAddressList: [
          {
            addressIdentifier: 'Registered_Head_Office',
            country: parseInt(headOfficeCountryId) ? parseInt(headOfficeCountryId) : '',
            districtCode: parseInt(headOfficeDistrictId) ? parseInt(headOfficeDistrictId) : '',
            districtDesc: headDistrictDesc,
            emailId: headOfficeEmail,
            faxNumber: parseInt(headOfficeFaxNumber) ? parseInt(headOfficeFaxNumber) : '',
            locality: headOfficeLocality,
            localityType: headOfficeUrbanOrRural,
            mobileNumber: parseInt(headOfficeMobileNumber) ? parseInt(headOfficeMobileNumber) : '',
            pinCode: parseInt(headOfficePincode) ? parseInt(headOfficePincode) : '',
            policeStationCode: headOfficePoliceStation,
            stateCode: parseInt(headOfficeStateId) ? parseInt(headOfficeStateId) : '',
            stateDesc: headStateDesc,
            street: headOfficeStreet,
            tahsilCode: parseInt(headOfficeTehsilId) ? parseInt(headOfficeTehsilId) : '',
            tahsilDesc: headTahsilDesc,
          },
          {
            addressIdentifier: 'Work_Office',
            country: parseInt(workingCountryId) ? parseInt(workingCountryId) : '',
            districtCode: parseInt(workingDistrictId) ? parseInt(workingDistrictId) : '',
            districtDesc: workDistrictDesc,
            emailId: workingEmail,
            faxNumber: parseInt(workingFaxNumber) ? parseInt(workingFaxNumber) : '',
            locality: workingLocality,
            localityType: workingUrbanOrRural,
            mobileNumber: parseInt(workingMobileNumber) ? parseInt(workingMobileNumber) : '',
            pinCode: parseInt(workingPincode) ? parseInt(workingPincode) : '',
            policeStationCode: workingPoliceStation,
            stateCode: parseInt(workingStateId) ? parseInt(workingStateId) : '',
            stateDesc: workStateDesc,
            street: workingStreet,
            tahsilCode: parseInt(workingTehsilId) ? parseInt(workingTehsilId) : '',
            tahsilDesc: workTahsilDesc,
          }
        ],
        sugarMillOfficersList: [
          {
            officerType: 'director_officer',
            designation: directorDesignation,
            emailId: directorEmail,
            faxNumber: parseInt(directorFaxNumber) ? parseInt(directorFaxNumber) : '',
            mobileNumber: parseInt(directorMobileNumber) ? parseInt(directorMobileNumber) : '',
            name: directorName,
            officersAddressList: [
              {
                addressIdentifier: 'Director_Office',
                country: parseInt(directorCountryId) ? parseInt(directorCountryId) : '',
                districtCode: parseInt(directorDistrictId) ? parseInt(directorDistrictId) : '',
                districtDesc: directorDistrictDesc,
                emailId: directorEmail,
                faxNumber: parseInt(directorFaxNumber) ? parseInt(directorFaxNumber) : '',
                locality: directorLocality,
                localityType: directorUrbanOrRural,
                mobileNumber: parseInt(directorMobileNumber) ? parseInt(directorMobileNumber) : '',
                pinCode: parseInt(directorPincode) ? parseInt(directorPincode) : '',
                policeStationCode: directorPoliceStation,
                stateCode: parseInt(directorStateId) ? parseInt(directorStateId) : '',
                stateDesc: directorStateDesc,
                street: directorStreet,
                tahsilCode: parseInt(directorTehsilId) ? parseInt(directorTehsilId) : '',
                tahsilDesc: directorTahsilDesc,
              }
            ]
          }
        ],
      }
    };
    
    await this.createLicense(payload, form, saveType);

    return true;
  }

  async uploadMolassesTradersFiles(applicationNo) {

    const files = this.headOfcFiles;
    const form = this.molassesTradersForm;

    if (files.length === 0) {
      return [];
    }
    console.log('files::', files);

    const formData = new FormData();
    // tslint:disable-next-line: prefer-for-of
    for (let i = 0; i < files.length; i++) {
      const fileStr = files[i];
      const fileSrc = form.get(fileStr).value;
      console.log('fileSrc::', fileSrc);

      formData.append('files[' + i + '].name', fileSrc.fileFor);
      formData.append('files[' + i + '].file', fileSrc);
    }

    formData.append('moduleName', 'licence-mangement');
    formData.append('screenName', 'sugarmill-molasses-traders');
    formData.append('applicationNumber', applicationNo);

    console.log('formData::', formData);

    this.authService.fileUploadFlag = true;
    const res: any = await this.docUplSer.uploadDocuments(formData);
    this.authService.fileUploadFlag = false;
    return res;
  }

  combineArr(oldArr, newArr) {
    console.log('oldArr::', oldArr);
    console.log('newArr::', newArr);

    newArr.forEach(element => {
      const ind = oldArr.findIndex((item) => item.name === element.name);
      if (ind !== -1) {
        oldArr[ind] = element;
      } else {
        oldArr.push(element);
      }
    });
    return oldArr;
  }

  getMolassLicenseData() {
    const { sugarMillLicenses } = this.licenseApplicationData;
    const { sugarMillAddressList } = sugarMillLicenses;
    const { addressDocumentList: headOfcAddressDocumentList } = sugarMillAddressList[0];

    return { sugarMillLicenses, sugarMillAddressList, headOfcAddressDocumentList };
  }

  async addMolassesTraders(saveType) {
    this.formSubmitted = false;
    const form = this.molassesTradersForm;
    console.log('saveType::', saveType);
    console.log('this.molassesTradersForm.valid::', form.valid);
    console.log('this.molassesTradersForm.value::', form.value);
    console.log('this.molassesTradersForm::', form);

    if (saveType !== this.STATUS_DRAFT && form.valid === false ) {
      this.formSubmitted = true;
      return false;
    }

    let uploadMolassesTradersFiles;
    const {
      applicationDate, headOfficeCountryId, headOfficeStateId, headOfficeDistrictId,
      headOfficeEmail, headOfficeFaxNumber, headOfficeLocality, headOfficeMobileNumber,
      headOfficePincode, headOfficePoliceStation, headofficeStreet, headOfficeUrbanOrRural,
      headOfficeThesilId,
    } = form.value;

    const applicationNo = await this.getApplicationNo();

    console.log('this.isFormEdit::', this.isFormEdit);
    uploadMolassesTradersFiles = await this.uploadMolassesTradersFiles(applicationNo);

    if (this.isFormEdit && uploadMolassesTradersFiles) {
      console.log('this.licenseApplicationData::', this.licenseApplicationData);

      const { headOfcAddressDocumentList } = this.getMolassLicenseData();
      uploadMolassesTradersFiles = this.combineArr(headOfcAddressDocumentList, uploadMolassesTradersFiles);
    }

    const headStateDesc = (headOfficeStateId) ? this.stateList.find((res) => res.id === headOfficeStateId) : '';
    const headDistrictDesc = (headOfficeDistrictId) ? this.headOfcDistrictListByState.find((res) => res.id === headOfficeDistrictId) : '';
    const headTahsilDesc = (headOfficeThesilId) ? this.headOfctalukList.find((res) => res.id === headOfficeThesilId) : '';

    const payload: any = {
      applicationDate: this.invertDate(applicationDate),
      applicationNumber: applicationNo,
      status: saveType,
      sugarMillLicenses: {
        licenseType: this.LIC_TYPE_MT,
        sugarMillAddressList: [
          {
            addressDocumentList: uploadMolassesTradersFiles,
            addressIdentifier: 'Registered_Head_Office',
            country: parseInt(headOfficeCountryId) ? parseInt(headOfficeCountryId) : '',
            stateCode: parseInt(headOfficeStateId) ? parseInt(headOfficeStateId) : '',
            stateDesc: headStateDesc,
            districtCode: parseInt(headOfficeDistrictId) ? parseInt(headOfficeDistrictId) : '',
            districtDesc: headDistrictDesc,
            tahsilCode: parseInt(headOfficeThesilId) ? parseInt(headOfficeThesilId) : '',
            tahsilDesc: headTahsilDesc,
            emailId: headOfficeEmail,
            faxNumber: parseInt(headOfficeFaxNumber) ? parseInt(headOfficeFaxNumber) : '',
            localityType: headOfficeUrbanOrRural,
            locality: headOfficeLocality,
            mobileNumber: parseInt(headOfficeMobileNumber) ? parseInt(headOfficeMobileNumber) : '',
            pinCode: parseInt(headOfficePincode) ? parseInt(headOfficePincode) : '',
            policeStationCode: headOfficePoliceStation,
            street: headofficeStreet,
          }
        ],
      }
    };

    await this.createLicense(payload, form, saveType);

    return true;
  }

  async uploadBelowGradeFiles(applicationNo) {

    const files = this.headOfcFiles;
    const form = this.belowGradeForm;

    if (files.length === 0) {
      return [];
    }

    const formData = new FormData();
    // tslint:disable-next-line: prefer-for-of
    for (let i = 0; i < files.length; i++) {
      const fileStr = files[i];
      const fileSrc = form.get(fileStr).value;
      formData.append('files[' + i + '].name', fileSrc.fileFor);
      formData.append('files[' + i + '].file', fileSrc);
    }

    formData.append('moduleName', 'licence-mangement');
    formData.append('screenName', 'wholesale-add');
    formData.append('applicationNumber', applicationNo);

    console.log('formData::', formData);

    this.authService.fileUploadFlag = true;
    const res: any = await this.docUplSer.uploadDocuments(formData);
    this.authService.fileUploadFlag = false;
    return res;
  }

  async addBelowGrade(saveType) {
    this.formSubmitted = false;
    const form = this.belowGradeForm;
    console.log('saveType::', saveType);
    console.log('this.belowGradeForm.valid::', form.valid);
    console.log('this.belowGradeForm.value::', form.value);
    console.log('this.belowGradeForm::', form);

    if (saveType !== this.STATUS_DRAFT && form.valid === false) {
      this.formSubmitted = true;
      return false;
    }

    let uploadBelowGradeFiles;
    const {
      countryId, applicationDate, emailId, gstNumber, mobileNumber, proprietorName, panNumber,
      unitName, unitType, locality, pincode,
      storageCapacity, street, urbanOrRural, ward, addrCountryId,
      stateId, districtId, tehsilId
    } = form.value;

    const applicationNo = await this.getApplicationNo();

    uploadBelowGradeFiles = await this.uploadBelowGradeFiles(applicationNo);
    console.log('uploadBelowGradeFiles::', uploadBelowGradeFiles);

    if (this.isFormEdit && uploadBelowGradeFiles) {
      console.log('this.licenseApplicationData::', this.licenseApplicationData);

      const { headOfcAddressDocumentList } = this.getMolassLicenseData();
      console.log('headOfcAddressDocumentList::', headOfcAddressDocumentList);
      uploadBelowGradeFiles = this.combineArr(headOfcAddressDocumentList, uploadBelowGradeFiles);
    }

    const workDistrictDesc = (districtId) ? this.addressDetDistrictListByState.find((res) => res.id === districtId) : '';
    const workStateDesc = (stateId) ? this.stateList.find((res) => res.id === stateId) : '';
    const workTahsilDesc = (tehsilId) ? this.addressDettalukList.find((res) => res.id === tehsilId) : '';

    const payload: any = {
      applicationDate: this.invertDate(applicationDate),
      applicationNumber: applicationNo,
      status: saveType,
      sugarMillLicenses: {
        licenseType: this.LIC_TYPE_BG,
        molassesStorageCapacity: storageCapacity,
        sugarMillRegistrationDetails: {
          country: countryId,
          emailId,
          gstNumber,
          mobileNumber,
          proprietorName,
          panNumber,
          unitName,
          unitType,
        },
        sugarMillAddressList: [
          {
            addressIdentifier: 'Work_Office',
            addressDocumentList: uploadBelowGradeFiles,
            country: addrCountryId,
            districtCode: parseInt(districtId) ? parseInt(districtId) : '',
            districtDesc: workDistrictDesc,
            locality,
            localityType: urbanOrRural,
            pinCode: pincode,
            stateCode: parseInt(stateId) ? parseInt(stateId) : '',
            stateDesc: workStateDesc,
            street,
            tahsilCode: parseInt(tehsilId) ? parseInt(tehsilId) : '',
            tahsilDesc: workTahsilDesc,
          }
        ]
      }
    };

    await this.createLicense(payload, form, saveType);

    return true;
  }

  async createLicense( payload, form, saveType ) {

    console.log('before-payload::', payload);

    payload = await this.getFinalPayload(payload, saveType);
    if (!payload) {
      console.log('payload problem');
      return false;
    }

    console.log('final-payload::', payload);

    const licenseCreationRes: any = await this.licenseSer.createSugarmillLicense(payload);
    const { responseCode: respCode, responseMessage: respMsg, content: respContent } = licenseCreationRes;
    console.log('respContent::', respContent);
    if (respCode === 200) {
      this.alert.showSuccess(respMsg, 'Success');
      if ( this.isCustomer ) {
        if (saveType === this.STATUS_DRAFT) {
          this.licenseApplicationData = respContent;
          this.isFormEdit = true;
        }

        if (saveType === this.STATUS_SUBMITTED) {
          form.reset();
          this.router.navigate(['/licencemgnt/sugarmill-license/acknowledgement/' + respContent.applicationNumber ]);
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

  loadDummyData() {
    switch (this.screenSubType) {
      case this.SCREEN_WITHIN_UP:
        this.withInUPForm.patchValue({
          mobileNumber: '9878987698',
          sugarMillName: 'testSugar' + this.randNum,
          yearOfEstablish: '2016',
          group: 'groupName' + this.randNum,

          headOfficeMobileNumber: '9878987697',
          headOfficeFaxNumber: '6578987698',
          headOfficeEmail: 'head' + this.randNum + '@gm.co',
          headOfficePincode: '625001',
          headOfficePoliceStation: 'police-station-1',
          headOfficeLocality: 'local-area-1',
          headofficeStreet: 'street-1',

          unitOfficeMobileNumber: '9878987696',
          unitOfficeFaxNumber: '6578987697',
          unitOfficeEmail: 'unit' + this.randNum + '@gm.co',
          unitOfficePincode: '625002',
          unitOfficePoliceStation: 'police-station-2',
          unitOfficeLocality: 'local-area-2',
          unitOfficeStreet: 'street-2',

          occupierName: 'occupier-name',
          occupierMobileNumber: '9878987695',
          occupierFaxNumber: '6578987695',
          occupierEmail: 'occupier-email' + this.randNum + '@gm.co',
          occupierDesignation: 'occupier-designation',
          occupierAddress: 'occupier-address',

          generalManagerName: 'general-manager-name',
          generalManagerMobileNumber: '9878987695',
          generalManagerFaxNumber: '6578987695',
          generalManagerEmail: 'general-manager-email' + this.randNum + '@gm.co',
          generalManagerDesignation: 'general-manager-designation',
          generalManagerAddress: 'general-manager-address',

          salesManagerName: 'sales-manager-name',
          salesManagerMobileNumber: '9878987695',
          salesManagerFaxNumber: '6578987695',
          salesManagerEmail: 'sales-manager-email' + this.randNum + '@gm.co',
          salesManagerdesignation: 'sales-manager-designation',
          salesManagerAddress: 'sales-manager-address',

          molasses: 12,
          sugar: 'sugar-name' + this.randNum,

          // Registered Crushing Capacity
          tonsDay: 234,
          tonsSeason: 233,

          // Quintal/ counter(in case pipeline supply on mf4 Gatepass)
          quintal: 23

        });
        break;
      case this.SCREEN_OUTSIDE_UP:
        this.outsideUPForm.patchValue({
          mobileNumber: '9878987698',
          sugarMillName: 'testSugar' + this.randNum,
          yearOfEstablish: '2016',

          headOfficeMobileNumber: '9878987697',
          headOfficeFaxNumber: '6578987698',
          headOfficeEmail: 'head' + this.randNum + '@gm.co',
          headOfficePincode: '625001',
          headOfficeLocality: 'local-area-1',
          headofficeStreet: 'street-1',

          unitOfficeMobileNumber: '9878987696',
          unitOfficeFaxNumber: '6578987697',
          unitOfficeEmail: 'unit' + this.randNum + '@gm.co',
          unitOfficePincode: '625002',
          unitOfficeLocality: 'local-area-2',
          unitOfficeStreet: 'street-2',

          occupierName: 'occupier-name',
          occupierMobileNumber: '9878987695',
          occupierFaxNumber: '6578987695',
          occupierEmail: 'occupier-email' + this.randNum + '@gm.co',
          occupierDesignation: 'occupier-designation',
          occupierAddress: 'occupier-address',

          generalManagerName: 'general-manager-name',
          generalManagerMobileNumber: '9878987695',
          generalManagerFaxNumber: '6578987695',
          generalManagerEmail: 'general-manager-email' + this.randNum + '@gm.co',
          generalManagerDesignation: 'general-manager-designation',
          generalManagerAddress: 'general-manager-address',

          salesManagerName: 'sales-manager-name',
          salesManagerMobileNumber: '9878987695',
          salesManagerFaxNumber: '6578987695',
          salesManagerEmail: 'sales-manager-email' + this.randNum + '@gm.co',
          salesManagerdesignation: 'sales-manager-designation',
          salesManagerAddress: 'sales-manager-address',

          molasses: this.randNum,
          sugar: 'sugar-name' + this.randNum,

          // Registered Crushing Capacity
          tonsDay: 234,
          tonsSeason: 233,

          // Quintal/ counter(in case pipeline supply on mf4 Gatepass)
          quintal: 23

        });
        break;
      case this.SCREEN_IND_INSIDE_UP:
        this.indusInsideUPForm.patchValue({
          mobileNumber: '9878987698',
          industryCode: 1,
          industryName: 'industry-name' + this.randNum,
          licenseNumber: 4534343434,
          yearOfEstablishment: 2006,
          panNumber: 'DTVPP6655G',
          gstinnumber: 3434988776,
          vatgstdeposited: '23',
          lastYearProduced: '100',
          annualConsumptionCapacity: '345',
          molassesStorageCapacity: '234',

          headOfficeMobileNumber: '9878987697',
          headOfficeFaxNumber: '6578987698',
          headOfficeEmail: 'head' + this.randNum + '@gm.co',
          headOfficePincode: '655465',
          headOfficeLocality: 'local-area-1',
          headOfficeStreet: 'street-1',

          workingMobileNumber: '9878987695',
          workingFaxNumber: '6578987697',
          workingEmail: 'working' + this.randNum + '@gm.co',
          workingPincode: '655465',
          workingLocality: 'local-area-2' + this.randNum,
          workingStreet: 'street-2' + this.randNum,

          directorName: 'director-name' + this.randNum,
          directorDesignation: 'director-designation' + this.randNum,
          directorPincode: '657678',
          directorLocality: 'director-locality' + this.randNum,
          directorStreet: 'director-street' + this.randNum,
          directorMobileNumber: '9878987696',
          directorFaxNumber: '6578987695',
          directorEmail: 'director' + this.randNum + '@gm.co',
          remarks: 'nothing'
        });
        break;
      case this.SCREEN_IND_OUTSIDE_UP:
        this.indusOutsideUPForm.patchValue({
          mobileNumber: '9878987698',
          industryName: 'industry-name' + this.randNum,
          licenseNumber: 4534343434,
          yearOfEstablishment: 2006,
          panNumber: 'DTVPP6655G',
          gstNumber: 343498877612,
          vatGstDeposited: 23,
          lastYearProduced: 100,
          annualConsumptionCapacity: 345,
          molassesStorageCapacity: 234,

          headOfficeMobileNumber: '9878987697',
          headOfficeFaxNumber: '6578987698',
          headOfficeEmail: 'head' + this.randNum + '@gm.co',
          headOfficePincode: '655465',
          headOfficeLocality: 'local-area-1' + this.randNum,
          headOfficeStreet: 'street-1' + this.randNum,

          workingMobileNumber: '9878987695',
          workingFaxNumber: '6578987697',
          workingEmail: 'working' + this.randNum + '@gm.co',
          workingPincode: '655465',
          workingLocality: 'local-area-2' + this.randNum,
          workingStreet: 'street-2' + this.randNum,

          directorName: 'director-name' + this.randNum,
          directorDesignation: 'director-designation' + this.randNum,
          directorPincode: '657678',
          directorLocality: 'director-locality' + this.randNum,
          directorStreet: 'director-street' + this.randNum,
          directorMobileNumber: '9878987696',
          directorFaxNumber: '6578987695',
          directorEmail: 'director' + this.randNum + '@gm.co',
          remarks: 'nothing' + this.randNum
        });
        break;
      case this.SCREEN_MOLASS_TRADERS:
        this.molassesTradersForm.patchValue({

          mobileNumber: '9878987698',
          traderName: 'trade-name' + this.randNum,
          yearOfEstablish: 2006,
          yearlyAllotment: 2005,

          headOfficeMobileNumber: '9878987697',
          headOfficeFaxNumber: '6578987698',
          headOfficeEmail: 'head' + this.randNum + '@gm.co',
          headOfficePincode: '655465',
          headOfficeLocality: 'local-area-1' + this.randNum,
          headOfficePoliceStation: 'police-station-1' + this.randNum,
          headOfficeStreet: 'street-1' + this.randNum,
        });
        break;
      case this.SCREEN_BELOW_GRADE:
        this.belowGradeForm.patchValue({
          unitType: 'unit-type' + this.randNum,
          unitName: 'unit-name' + this.randNum,
          proprietorName: 'proprietor-name' + this.randNum,
          mobileNumber: '9878987698',
          emailId: 'below-grade' + this.randNum + '@gm.co',
          gstNumber: '879887766576',
          panNumber: 'DTVPP2233T',
          pincode: '657665',
          locality: 'madurai' + this.randNum,
          street: 'street-address' + this.randNum,
          storageCapacity: 2343,
        });
        break;
    }
  }

  // dummy future it will remove -> start here

}
