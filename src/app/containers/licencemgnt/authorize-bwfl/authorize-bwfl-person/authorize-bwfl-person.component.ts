import { Component, OnInit, ViewChild } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormBuilder } from '@angular/forms';
import {
  AuthService, AlertService, StatemasterService, DistrictMasterService,
  TalukMasterService, LicenceManagementService, DropdownConfigService,
  DocumentUploadService, ValidationService
} from '@app/services';
import {
  LicenseConstants
} from '@app/containers/licencemgnt/license.constants';
import { LicenseCommonService } from '@appLicMgntShared/license-common.service';

const {
  docuPropObj, FF_APPLI, SEC_ADDR_APPLICANT,
  PROP_AUTH_PERSON_ADDRESS_DET,
  CODE_SALUTATION, CODE_GENDER, CODE_LOCALITYTYPE, CODE_ENTITYOFFIRM, CODE_ITR,
  LOCALITY_URBAN, LOCALITY_RURAL, MSG_NO_APPLICATION_NUMBER,
  STATUS_DRAFT, STATUS_SAVE, STATUS_SUBMITTED, CUSTOMER, LICENSE_URL
} = LicenseConstants;

@Component({
  selector: 'app-authorize-bwfl-person',
  templateUrl: './authorize-bwfl-person.component.html',
  styleUrls: ['./authorize-bwfl-person.component.scss']
})
export class AuthorizeBwflPersonComponent implements OnInit {

  licConst = LicenseConstants;

  bwflAuthPersonForm: FormGroup;
  formSubmitted = false;

  isSubmitLoading = false;
  applicationNumber: string;
  isFormEdit = false;

  isCustomer: boolean;
  randNum: number;

  stateList: any;
  municipalityList: any;
  districtsList: any;
  countryList: any;
  districtListByState = {
    [SEC_ADDR_APPLICANT]: []
  };
  talukList = {
    [SEC_ADDR_APPLICANT]: []
  };
  premisesAddrLocality = '';

  fileArr = {
    [FF_APPLI]: [],
  };

  salutationList: any;
  genderList: any;
  localityTypeList: any;
  ITRList: any;
  ownershipList: any;
  entityFirmList: any;

  authPersonData: any;

  policeStationList = [
    { id: 1, name: 'Police Station 1', code: 'P1' },
    { id: 2, name: 'Police Station 2', code: 'B2' }
  ];

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

  ngOnInit() {
    this.randNum = this.licenseCommonSer.randomNum(10, 99);
    this.route.params.subscribe(params => {
      console.log('params::', params);
    });

    this.loadFormControl();
  }

  back(): void { this.licenseCommonSer.back(); }
  numberOnly(event): boolean { return this.licenseCommonSer.numberOnly(event); }
  stringToDate(strDate) { return this.licenseCommonSer.stringToDate(strDate); }
  unsetValidator(formControl, fileArr) { return this.licenseCommonSer.unsetValidator(formControl, fileArr); }
  combineArr(oldArr, newArr) { return this.licenseCommonSer.combineArr(oldArr, newArr); }
  invertDate(date) { return this.licenseCommonSer.invertDate(date); }

  getForm() { return this.bwflAuthPersonForm; }
  getFormCntr(element = '') { return (element) ? this.getForm().get(element) : this.getForm(); }
  getFormCntrl(formCntrl, element) { return formCntrl.get(element); }
  getAddressFormCntr() { return this.getFormCntr(PROP_AUTH_PERSON_ADDRESS_DET); }
  getAddrCtByIdx(idx) { return this.getAddressFormCntr().get(idx); }
  getAppliAddrFormCntr(element = '') { return (element) ? this.getAddrCtByIdx('0').get(element) : this.getAddrCtByIdx('0'); }

  loadFormControl() {
    this.createBWFLAuthPersonForm();
    (this.isFormEdit) ? this.loadPersonData() : this.loadInitialFormData();
  }

  buildAddressFormGroup(identifier, data?: any) { return this.validateSer.buildAddressFormGroup(identifier, data); }

  createBWFLAuthPersonForm() {
    const basicEle = {
      salutationCode: ['', this.validateSer.valiReqOnly],
      salutationDesc: ['', this.validateSer.valiReqOnly],
      firstName: ['', this.validateSer.valiReqOnly],
      middleName: ['', this.validateSer.valiReqOnly],
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

      authorizePersonAddressList: this.fb.array([
        this.buildAddressFormGroup(SEC_ADDR_APPLICANT),
      ]),
    };
    this.bwflAuthPersonForm = this.fb.group(basicEle);
  }

  loadInitialFormData() {
    this.commonDatas();
  }

  findDropMas(code) { return this.dropdownConfigSer.findDropDownMaster(code); }

  commonDatas() {

    this.getAllStates();

    this.findDropMas(CODE_SALUTATION).subscribe((res) => this.salutationList = res.data ? res.data.downDropDownMasterValueList : []);
    this.findDropMas(CODE_GENDER).subscribe((res) => this.genderList = res.data ? res.data.downDropDownMasterValueList : []);
    this.findDropMas(CODE_LOCALITYTYPE).subscribe((res) => this.localityTypeList = res.data ? res.data.downDropDownMasterValueList : []);
    this.findDropMas(CODE_ENTITYOFFIRM).subscribe((res) => this.entityFirmList = res.data ? res.data.downDropDownMasterValueList : []);
    this.findDropMas(CODE_ITR).subscribe((res) => this.ITRList = res.data ? res.data.downDropDownMasterValueList : []);
  }

  getAllStates() { this.stateSer.getState().subscribe((responceData: any) => { this.stateList = responceData.data; }); }

  loadPersonData() { }

  patchMasVal(list, code, formCntl, key) {
    const obj = list.find((resp: any) => resp.paramKey === code);
    formCntl.patchValue({ [key]: obj.paramValue });
  }

  onSalutationChange(code) { this.patchMasVal(this.salutationList, code, this.getFormCntr(), 'salutationDesc'); }
  onGenderChange(code) { this.patchMasVal(this.genderList, code, this.getFormCntr(), 'genderDesc'); }
  onAppliITRChange(code) { this.patchMasVal(this.ITRList, code, this.getFormCntr(), 'itrAssesmentYearDesc'); }

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

  onLocalityChange($event, type) {
    const { value: localityType } = $event.target;
    let formContrl;
    switch (type) {
      case SEC_ADDR_APPLICANT:
        formContrl = this.getAppliAddrFormCntr();
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
    if (filesize < maxfilesize){
      const formControl = this.getFormCntr();
      const fileUpRes = this.onFileChange(event, sourceName, fileFor, formControl);
      return (fileUpRes) ? this.fileArr[FF_APPLI].push(sourceName) : false;
    }else{
      this.alert.showError('Upload Less Then 1Mb Size Photo');
      if (fileFor === this.licConst.FN_APPLI_PHOTO) { this.bwflAuthPersonForm.patchValue({appli_photo_file:"" }); }
      if (fileFor === this.licConst.FN_APPLI_AADHAR) { this.bwflAuthPersonForm.patchValue({appli_aadhar_file:"" }); }
      if (fileFor === this.licConst.FN_APPLI_PAN) { this.bwflAuthPersonForm.patchValue({appli_pan_file:"" }); }
      if (fileFor === this.licConst.FN_APPLI_ITR) { this.bwflAuthPersonForm.patchValue({appli_itr_file:"" }); }
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

  async createFormData(files, formCntrl) {

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
    formData.append('screenName', 'bwfl-auth-person');

    this.authService.fileUploadFlag = true;
    const res: any = await this.docUplSer.uploadDocuments(formData);
    this.authService.fileUploadFlag = false;
    return res;
  }

  async uploadAppliFiles() {
    const files = this.fileArr[FF_APPLI];
    const formCntrl = this.getFormCntr();
    if (files.length === 0) {
      return [];
    }

    return await this.createFormData(files, formCntrl);
  }

  async onSubmit() {
    this.toggleLoading();
    this.addBWFLAuthPerson();
  }

  toggleLoading() {
    this.isSubmitLoading = !this.isSubmitLoading;
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

  getAddrFormCntl(key) {
    let formContrl;
    switch (key) {
      case SEC_ADDR_APPLICANT:
        formContrl = this.getAppliAddrFormCntr();
        break;
    }
    return formContrl;
  }

  async addBWFLAuthPerson() {
    this.formSubmitted = false;
    const form = this.bwflAuthPersonForm;
    console.log('this.bwflAuthPersonForm.valid::', form.valid);
    console.log('this.bwflAuthPersonForm.value::', form.value);
    console.log('this.bwflAuthPersonForm::', form);

    const {
      authorizePersonAddressList: befformValaddressList
    } = form.value;

    befformValaddressList.forEach(element => this.mapAddress(element, this.getAddrFormCntl(element.addressIdentifier)));

    if (form.valid === false) {
      this.formSubmitted = true;
      this.toggleLoading();
      return false;
    }

    const formValue = form.value;
    console.log('formValue::', formValue);
    console.log('this.fileArr::', this.fileArr);

    const appliDetProp = [
      'appli_photo_file', 'appli_photo_file_source', 'appli_aadhar_file', 'appli_aadhar_file_source',
      'appli_pan_file', 'appli_pan_file_source', 'appli_itr_file', 'appli_itr_file_source'
    ];

    appliDetProp.forEach((ele) => delete formValue[ele]);
    let uploadAppliFiles;

    uploadAppliFiles = await this.uploadAppliFiles();
    console.log('uploadAppliFiles::', uploadAppliFiles);

    if (this.isFormEdit) {

      // const { applicantDocumentList: apiDataapplicantDocumentList } = formValapplicantDet;
      // uploadAppliFiles = this.combineArr(apiDataapplicantDocumentList, uploadAppliFiles);
    }

    formValue.authorizedPersonDocumentList = uploadAppliFiles;

    console.log('formValue.dob::', formValue.dob);
    formValue.dob = this.invertDate(formValue.dob);

    console.log('formValue::', formValue);

    const authPersonRes: any = await this.licenseSer.saveUpdateBWFLAuthorizePerson(formValue);
    const { responseCode: respCode, responseMessage: respMsg, content: respContent } = authPersonRes;
    console.log('respContent::', respContent);
    if (respCode === 200) {
      this.toggleLoading();
      this.alert.showSuccess(respMsg);
      this.router.navigate(['/licencemgnt/authorizebwfl']);
    } else {
      this.toggleLoading();
      this.alert.showError(respMsg);
    }

    return true;
  }

  getFileArr(propertyName, idx = null) {
    const fileArr = [{uuid: 1, documentName: 'test.jpeg'}];
    return fileArr;
  }

  isFileExists(propertyName, fileFor, idx = null) {

    let res = false;
    if (this.authPersonData) {

      const fileArr = this.getFileArr(propertyName, idx);
      res = fileArr.find((resp: any) => resp.name === fileFor) ? true : false;
    }

    return res;
  }

  downloadDocument(propertyName, fileFor) {

    if (this.authPersonData) {

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
      aadharNumber: '9887766554' + this.randNum,
      // emailId: 'test_user' + this.randNum + '@gmail.com',
      firstName: 'test' + this.randNum,
      lastName: 'last' + this.randNum,
      middleName: 'mid' + this.randNum,
      // mobileNumber: '98765443' + this.randNum,
      panNumber: 'DTVPP22' + this.randNum + 'Z',
      fatherHusbandName: 'test_father_' + this.randNum,
      previousItrNotFiled: 'nothing',
      authorizePersonAddressList: [
        {
          block: 'appli_block_name' + this.randNum,
          locality: 'appli_locality' + this.randNum,
          policeStationCode: 1,
          pinCode: 655443,
          street: 'appli_street' + this.randNum,
          village: 'appli_village ' + this.randNum,
          ward: 'appli_ward_' + this.randNum,
        }
      ]
    };

    this.bwflAuthPersonForm.patchValue(patchObj);
  }

}
