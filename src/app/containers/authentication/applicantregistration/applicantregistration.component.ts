import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import {
  AuthService,
  AlertService,
  StatemasterService,
  DistrictMasterService,
  MunicipalityMasterService,
  TalukMasterService,
  DocumentUploadService,
} from '@app/services';
import * as moment from 'moment';

@Component({
  selector: 'app-applicantregistration',
  templateUrl: './applicantregistration.component.html',
  styleUrls: ['./applicantregistration.component.scss']
})
export class ApplicantregistrationComponent implements OnInit {

  cusRegForm: FormGroup;

  stateList: any;
  districtListByState: any;
  stateData: any;
  districtData: any;
  talukList: any;
  municipalityList: any;
  localityType = '';

  formSubmitted = false;
  isMailExisted = false;
  isMobileExisted = false;
  isAadharExisted = false;
  isPanExisted = false;
  isUserExisted = false;

  regType = 'loginWithoutNiveshMitra';

  curDate = new Date();
  // curDateBef18 = this.curDate.getFullYear() - 18;

  maxDate = moment(this.curDate).format('YYYY-MM-DD');

  genderObj = [
    { id: 1, name: 'Male' },
    { id: 2, name: 'Female' }
  ];

  maxDOBDate = moment(new Date()).subtract(18, 'years').format('YYYY-MM-DD');
  minDOBDate = moment(this.maxDOBDate).subtract(5, 'years').format('YYYY-MM-DD');

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private formbuilder: FormBuilder,
    private alert: AlertService,
    private stateSer: StatemasterService,
    private districtSer: DistrictMasterService,
    private municipalityService: MunicipalityMasterService,
    private talukService: TalukMasterService,
    private docUplSer: DocumentUploadService,
    private authService: AuthService,
  ) { }

  ngOnInit() {
    this.loadFormControl();
  }

  loadFormControl() {
    this.createCusRegForm();
    this.loadInitialcreateCusRegFormFormData();
  }

  getApplDetFormCntr(element) { return this.cusRegForm.controls.applicantDetail.get(element); }
  getApplAddrFormCntr(element) { return this.cusRegForm.controls.applicantAddress.get(element); }

  createCusRegForm() {
    this.cusRegForm = this.formbuilder.group({
      applicantDetail: this.formbuilder.group({
        salutation: ['', [Validators.required]],
        firstName: ['', [Validators.required]],
        middleName: [''],
        lastName: ['', [Validators.required]],
        userName: ['', [Validators.required]],
        mobileNumber: ['', [Validators.required, Validators.pattern('[0-9]{10,10}')] ],
        email: ['', [Validators.required, Validators.email]],
        aadharNumber: ['', [Validators.required, Validators.minLength(12), Validators.maxLength(12)]],
        genderCode: ['', [Validators.required]],
        dob: ['', [Validators.required]],
        panNumber: ['', [Validators.required, Validators.minLength(10), Validators.maxLength(10)]],
        fatherHusbandName: ['', [Validators.required]],

        applicant_photo_file: ['', Validators.required],
        applicant_photo_file_source: ['', Validators.required],

        aadhar_file: ['', Validators.required],
        aadhar_file_source: ['', Validators.required],

        pan_file: ['', Validators.required],
        pan_file_source: ['', Validators.required],
      }),
      applicantAddress: this.formbuilder.group({
        country: ['INDIA', [Validators.required]],
        pinCode: ['', [Validators.required, Validators.minLength(6), Validators.maxLength(6)]],
        stateCode: ['', [Validators.required]],
        districtCode: ['', [Validators.required]],
        tahsilCode: ['', [Validators.required]],
        localityType: ['', [Validators.required]],
        municipalAreaCode: [''],
        ward: [''],
        block: [''],
        village: [''],
        policeStationCode: ['', [Validators.required]],
        locality: ['', [Validators.required]],
        street: ['', [Validators.required]],
      })
    });
  }

  // dummy future it will remove -> start here
  loadCusRegFormData() {
    this.cusRegForm.patchValue({
      applicantDetail: {
        firstName: 'first-name',
        middleName: 'middle-name',
        lastName: 'last-name',
        mobileNumber: 9789988798,
        email: 'test_user@gmail.com',
        aadharNumber: 988798879898,
        panNumber: 'DTVEE9887G',
        fatherHusbandName: 'father-name'
      },
      applicantAddress: {
        pinCode: 879887,
        locality: 'locality',
        street: 'street'
      }
    });
  }
  // dummy future it will remove -> end here

  loadInitialcreateCusRegFormFormData() {
    this.getAllStates();
    this.getAllMunicipal();
  }

  getAllStates() {
    this.stateSer.getState().subscribe((resp: any) => { this.stateList = resp.data; });
  }

  onStateChange(stateId) {
    this.getDistrictsByStateid(stateId);
    this.getStateData(stateId);
  }

  getDistrictsByStateid(stateId) {
    this.districtSer.getDistrictsByStateid(stateId).subscribe((resp: any) => { this.districtListByState = resp.data; });
  }

  getStateData(stateId) {
    this.stateSer.getStateById(stateId).subscribe((rep: any) => { this.stateData = rep.data; });
  }

  onDistrictChange(id) {
    this.districtSer.getdistrictById(id).subscribe((responceData: any) => {
      this.districtData = responceData.data;
      this.loadTalukByDist(id);
    });
  }

  loadTalukByDist(id,) {
    this.talukService.gettalukByDistId(id).subscribe((resp: any) => { this.talukList = resp.data; });
  }

  getAllMunicipal() {
    this.municipalityService.getMunicipality().subscribe((resp: any) => { this.municipalityList = resp.data; });
  }

  onRegTypeChange(e) { console.log(e.target.value); }

  changeGender(e) { console.log(e.target.value); }

  onLocalityChange($event, form) {
    const formContrl = form.controls.applicantAddress.controls;
    if ($event.target.value === 'Urban') {
      this.localityType = 'urban';
      formContrl.municipalAreaCode.setValidators([Validators.required]);
      formContrl.municipalAreaCode.updateValueAndValidity();
      formContrl.block.setValidators([]);
      formContrl.block.updateValueAndValidity();
      formContrl.village.setValidators([]);
      formContrl.village.updateValueAndValidity();
    } else if ($event.target.value === 'Rural') {
      this.localityType = 'rural';
      formContrl.block.setValidators([Validators.required]);
      formContrl.block.updateValueAndValidity();
      formContrl.village.setValidators([Validators.required]);
      formContrl.village.updateValueAndValidity();
      formContrl.municipalAreaCode.setValidators([]);
      formContrl.municipalAreaCode.updateValueAndValidity();
    } else {
      this.localityType = '';
      formContrl.municipalAreaCode.setValidators([Validators.required]);
      formContrl.municipalAreaCode.updateValueAndValidity();
    }
  }

  onFileChange(event, sourceName) {
    const targetForm = this.cusRegForm.controls.applicantDetail;

    if (event.target.files.length > 0) {
      const file = event.target.files[0];

      switch (sourceName) {
        case 'applicant_photo_file_source':
          file.fileFor = 'Applicant Photo';
          targetForm.patchValue({ applicant_photo_file_source: file });
          break;
        case 'aadhar_file_source':
          file.fileFor = 'Applicant Aadhar';
          targetForm.patchValue({ aadhar_file_source: file });
          break;
        case 'pan_file_source':
          file.fileFor = 'Applicant Pan';
          targetForm.patchValue({ pan_file_source: file });
          break;
      }
    }

    console.log('targetForm.valid::', targetForm.valid);
    console.log('targetForm.value::', targetForm.value);
  }

  async onMobileCheck(mobile) {
    const mobileCheckRes: any = await this.authService.checkMobile(mobile);
    this.isMobileExisted = mobileCheckRes;
  }

  async onEmailCheck(email){
    const mailCheckRes: any = await this.authService.checkEmail(email);
    this.isMailExisted = mailCheckRes;
  }

  async onAadharCheck(aadhar) {
    const aadharCheckRes: any = await this.authService.checkAadhar(aadhar);
    this.isAadharExisted = aadharCheckRes;
  }

  async onPanCheck(pan) {
    const panCheckRes: any = await this.authService.checkPanNumber(pan);
    this.isPanExisted = panCheckRes;
  }

  async onUsernameCheck(username) {
    const usernameCheckRes: any = await this.authService.checkUsername(username);
    this.isUserExisted = usernameCheckRes;
  }

  async uploadApplicantFiles() {
    const targetForm = this.cusRegForm.controls.applicantDetail;
    const applicantPhotoFile = targetForm.get('applicant_photo_file').value;
    const applicantPhotoFileSource = targetForm.get('applicant_photo_file_source').value;
    const aadharFile = targetForm.get('aadhar_file').value;
    const aadharFileSource = targetForm.get('aadhar_file_source').value;
    const panFile = targetForm.get('pan_file').value;
    const panFileSource = targetForm.get('pan_file_source').value;

    const files = [
      applicantPhotoFileSource, aadharFileSource, panFileSource
    ];
    const formData = new FormData();
    // tslint:disable-next-line: prefer-for-of
    for (let i = 0; i < files.length; i++) {
      formData.append('files[' + i + '].name', files[i].fileFor);
      formData.append('files[' + i + '].file', files[i]);
    }

    formData.append('moduleName', 'user-mangement');
    formData.append('screenName', 'customer');
    // formData.append('applicationNumber', applicationNo);

    console.log('formData::', formData);

    this.authService.fileUploadFlag = true;
    const res: any = await this.docUplSer.uploadDocumentsNoToken(formData);
    this.authService.fileUploadFlag = false;
    return res;
  }

  async onCusRegister() {
    this.formSubmitted = false;
    const cusRegForm = this.cusRegForm;
    console.log('this.cusRegForm.valid::', cusRegForm.valid);
    console.log('this.cusRegForm.value::', cusRegForm.value);
    console.log('this.cusRegForm::', cusRegForm);
    if (cusRegForm.valid === false) {
      this.formSubmitted = true;
      return false;
    }

    if (
      this.isUserExisted === true || this.isMobileExisted === true ||
      this.isMailExisted === true || this.isAadharExisted === true ||
      this.isPanExisted === true
    ) {
      console.log('please check value is already existed or not');
      return false;
    }

    console.log('form-submitted');
    const { applicantDetail, applicantAddress } = this.cusRegForm.value;
    const {
      salutation, firstName, middleName, lastName, userName: username, mobileNumber,
      email, aadharNumber, genderCode, dob, panNumber, fatherHusbandName,
    } = applicantDetail;
    const {
      country, pinCode, stateCode, districtCode, tahsilCode,
      localityType, municipalAreaCode, ward, block, village,
      policeStationCode, locality, street,
    } = applicantAddress;

    const uploadApplicantFiles = await this.uploadApplicantFiles();
    console.log('uploadApplicantFiles::', uploadApplicantFiles);

    const stateDesc = (stateCode) ? this.stateList.find((res) => res.id === stateCode).stateName : '';
    const districtDesc = (districtCode) ? this.districtListByState.find((res) => res.id === districtCode).name : '';
    const tahsilDesc = (tahsilCode) ? this.talukList.find((res) => res.id === tahsilCode).talukName : '';
    const genderDesc = (genderCode) ? this.genderObj.find((res) => res.id === genderCode).name : '';

    const payload = {
      userDocumentList: uploadApplicantFiles,
      salutation,
      firstName,
      middleName,
      lastName,
      username,
      mobileNumber,
      email,
      aadharNumber,
      genderCode,
      genderDesc,
      dob: '02-02-1994',
      panNumber,
      fatherHusbandName,
      userAddress: {
        country, pinCode, stateCode, stateDesc, districtCode, districtDesc,
        tahsilCode, tahsilDesc,
        localityType, municipalAreaCode, ward, block, village,
        policeStationCode, locality, street
      }
    };

    console.log('payload::', payload);
    const registerCustomer: any = await this.authService.createCustomer(payload);
    console.log('registerCustomer::', registerCustomer);
    if (registerCustomer.responseCode === 200) {
      this.alert.showSuccess(registerCustomer.responseMessage);
      this.cusRegForm.reset();
      this.router.navigate(['/']);
    } else {
      this.alert.showError(registerCustomer.responseMessage);
    }
    return true;
  }

}
