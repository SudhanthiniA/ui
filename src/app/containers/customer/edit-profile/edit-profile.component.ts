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

import { formatDate } from '@angular/common';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.scss']
})
export class EditProfileComponent implements OnInit {

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
  profileDet: any;

  regType = 'loginWithoutNiveshMitra';

  genderList = [
    { id: 1, desc: 'Male' },
    { id: 2, desc: 'Female' }
  ];

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
    this.loadCustomer();

    this.cusRegForm.controls.applicantAddress.get('stateCode').valueChanges.subscribe(
      value => {
        console.log(value);
        this.onStateChange(value);
      }
    );
  }

  getApplDetFormCntr(element) {
    return this.cusRegForm.controls.applicantDetail.get(element);
  }

  getApplAddrFormCntr(element) {
    return this.cusRegForm.controls.applicantAddress.get(element);
  }

  createCusRegForm() {
    this.cusRegForm = this.formbuilder.group({
      applicantDetail: this.formbuilder.group({
        salutation: ['', [Validators.required]],
        firstName: ['', [Validators.required]],
        middleName: ['', [Validators.required]],
        lastName: ['', [Validators.required]],
        mobileNumber: ['', [Validators.required, Validators.pattern('[0-9]{10,10}')]],
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

  loadCustomer() {

    const userId = this.authService.getUserId();

    this.authService.getUserById(userId).subscribe((resp: any) => {
      console.log('resp::', resp);
      this.profileDet = resp.content;
      const { salutation, firstName, middleName, lastName, mobileNumber, dob,
        email, aadharNumber, genderCode, panNumber, fatherHusbandName
      } = this.profileDet;

      // const { pinCode, stateCode, districtCode, tahsilCode,
      //   localityType, policeStationCode, locality, street
      // } = customerAddress;

      let convDob = dob.split('-');
      convDob = convDob[2] + '-' + convDob[1] + '-' + convDob[0];


      this.cusRegForm.patchValue({
        applicantDetail: {
          salutation,
          firstName,
          middleName,
          lastName,
          mobileNumber,
          email,
          aadharNumber,
          genderCode,
          dob: convDob,
          panNumber,
          fatherHusbandName,
        },
        // applicantAddress: {
        //   pinCode,
        //   stateCode,
        //   districtCode,
        //   tahsilCode,
        //   localityType,
        //   policeStationCode,
        //   locality,
        //   street,
        // }
      });

      // this.onStateChange(stateCode);
      // this.onDistrictChange(districtCode);

    });

  }

  loadInitialcreateCusRegFormFormData() {

    this.getAllStates();
    this.getAllMunicipal();
  }

  getAllStates() {
    this.stateSer.getState().subscribe((responceData: any) => {
      this.stateList = responceData.data;
    });
  }

  onStateChange(stateId) {
    this.getDistrictsByStateid(stateId);
    this.getStateData(stateId);
  }

  getDistrictsByStateid(stateId) {
    this.districtSer.getDistrictsByStateid(stateId).subscribe((responceData: any) => {
      this.districtListByState = responceData.data;
    });
  }

  getStateData(stateId) {
    this.stateSer.getStateById(stateId).subscribe((responceData: any) => {
      this.stateData = responceData.data;
    });
  }

  onDistrictChange(id) {
    this.districtSer.getdistrictById(id).subscribe((responceData: any) => {
      this.districtData = responceData.data;
      this.loadTalukByDist(id);
    });
  }

  loadTalukByDist(id) {
    this.talukService.gettalukByDistId(id).subscribe((responceData: any) => {
      this.talukList = responceData.data;
    });
  }

  getAllMunicipal() {
    this.municipalityService.getMunicipality().subscribe((responceData: any) => {
      this.municipalityList = responceData.data;
    });
  }

  onRegTypeChange(e) {
    console.log(e.target.value);
  }

  changeGender(e) {
    console.log(e.target.value);
  }

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
          targetForm.patchValue({
            applicant_photo_file_source: file
          });
          break;
        case 'aadhar_file_source':
          file.fileFor = 'Applicant Aadhar';
          targetForm.patchValue({
            aadhar_file_source: file
          });
          break;
        case 'pan_file_source':
          file.fileFor = 'Applicant Pan';
          targetForm.patchValue({
            pan_file_source: file
          });
          break;
      }
    }

    console.log('targetForm.valid::', targetForm.valid);
    console.log('targetForm.value::', targetForm.value);
  }

  async onMobileCheck(mobile) {
    console.log('mobile::', mobile);
    const mobileCheckRes: any = await this.authService.checkMobile(mobile);
    console.log('mobileCheckRes::', mobileCheckRes); //isMobileExisted
    this.isMobileExisted = mobileCheckRes;
  }

  async onEmailCheck(email) {
    console.log('email::', email);
    const mailCheckRes: any = await this.authService.checkEmail(email);
    console.log('mailCheckRes::', mailCheckRes); //isMailExisted
    this.isMailExisted = mailCheckRes;

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
    console.log('this.cusRegForm.valid::', this.cusRegForm.valid);
    console.log('this.cusRegForm.value::', this.cusRegForm.value);
    console.log('this.cusRegForm::', this.cusRegForm);
    if (this.cusRegForm.valid === false) {
      this.formSubmitted = true;
    } else {
      console.log('form-submitted');
      const {
        applicantDetail, applicantAddress
      } = this.cusRegForm.value;
      const {
        salutation, firstName, middleName, lastName, mobileNumber,
        email, aadharNumber, genderCode, dob, panNumber, fatherHusbandName,
      } = applicantDetail;
      const {
        country, pinCode, stateCode, districtCode, tahsilCode,
        localityType, municipalAreaCode, ward, block, village,
        policeStationCode, locality, street,
      } = applicantAddress;

      const { desc: genderDesc } = this.genderList.find((res: any) => res.id === parseFloat(genderCode));
      const { stateName: stateDesc } = this.stateList.find((res: any) => res.id === parseFloat(stateCode));
      const { name: districtDesc } = this.districtListByState.find((res: any) => res.id === parseFloat(districtCode));
      const { talukName: tahsilDesc } = this.talukList.find((res: any) => res.id === parseFloat(tahsilCode));

      const uploadApplicantFiles = await this.uploadApplicantFiles();
      console.log('uploadApplicantFiles::', uploadApplicantFiles);

      let convDob = dob.split('-');
      convDob = convDob[2] + '-' + convDob[1] + '-' + convDob[0];

      const payload = {
        customerDocumentList: uploadApplicantFiles,
        salutation, firstName, middleName, lastName, aadharNumber, 
        genderCode, genderDesc, dob: convDob, panNumber, fatherHusbandName,
        customerAddress: {
          country, pinCode, stateCode, stateDesc, districtCode, districtDesc,
          tahsilCode, tahsilDesc, localityType, municipalAreaCode, ward, block, village,
          policeStationCode, locality, street
        }
      };

      console.log('payload::', payload);

      const upCusRes: any = await this.authService.updateCustomer(payload);
      console.log('upCusRes::', upCusRes);
      if (upCusRes.responseCode === 200) {
        this.alert.showSuccess(upCusRes.responseMessage, 'Success');
        this.router.navigate(['/customer/profile']);
      } else {
        this.alert.showError(upCusRes.responseMessage, 'error');
      }
      return true;

    }
  }

}
