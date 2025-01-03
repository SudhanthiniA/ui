import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormArray } from '@angular/forms';
import { DatePipe, formatDate } from '@angular/common';
import { AuthService, GenderService, DistrictMasterService, StatemasterService, AlertService, DocumentUploadService } from '@app/services';
import { Router } from '@angular/router';
import { MasterwarehouseLicenseService } from '@app/services/licencemanagement/masterwarehouse.service';
import * as moment from 'moment';
interface Post { startDate: Date; }
@Component({
  selector: 'app-masterwarehouse',
  templateUrl: './masterwarehouse.component.html',
  styleUrls: ['./masterwarehouse.component.scss']
})
export class MasterwarehouseComponent implements OnInit {
  @ViewChild('exampleModalCenter', { static: false }) exampleModalCenter;
  LMForm: FormGroup;
  entityList: any;
  pipe = new DatePipe('en-US');
  maxDate = moment(new Date()).format('YYYY-MM-DD');
  salutationObj: any;
  genders: any;
  stateList: any;
  districtList: any;
  tehsilList: any;
  localityTypeList: any;
  muncipalList: any;
  blockList: any;
  policeStationList: any;
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
  formSubmitted = false;
  curDate = new Date();
  registrationObj: any = JSON.parse(sessionStorage.getItem('formdata'));
  post: Post = { startDate: new Date(Date.now()) };
  constructor(
    private gender: GenderService,
    private router: Router,
    private formBuilder: FormBuilder,
    private alert: AlertService,
    private district: DistrictMasterService,
    private state: StatemasterService,
    private Service: MasterwarehouseLicenseService,
    private authService: AuthService,
    private documentUploadService: DocumentUploadService
  ) { }

  ngOnInit() {
    this.buildFormGrp();
    this.getEntity();
    this.getSalutation();
    this.getLocalityType();
    this.getGender();
    this.getState();
    this.getBank();
    this.getITR();

    if (this.registrationObj) {
      this.setData();
    }
  }

  buildFormGrp() {
    this.LMForm = this.formBuilder.group({
      financialYear: ['2020-2021'],
      dateOfApplication: [formatDate(this.post.startDate, 'yyyy-MM-dd', 'en')],
      photoOfApplicant: ['', Validators.required],
      photoOfApplicantFileSource: [''],
      photoOfShop: ['', Validators.required],
      photoOfShopFileSource: [''],
      
      salutation: [''],
      firstName: [''],
      middleName: [''],
      lastName: [''],
      dateOfBirth: [''],
      gender: [''],
      country: ['INDIA'],
      pincode: ['', Validators.required],
      state: ['', Validators.required],
      stateCode: [''],
      stateDesc: [''],
      district: ['', Validators.required],
      districtCode: [''],
      districtDesc: [''],
      tehsil: ['', Validators.required],
      tahsilCode: [''],
      tahsilDesc: [''],
      localityType: ['', Validators.required],
      muncipal: [''],
      muncipalCode: [''],
      muncipalDesc: [''],
      ward: [''],
      block: [''],
      blockCode: [''],
      blockDesc: [''],
      village: [''],
      policeStation: ['', Validators.required],
      policeStationCode: [''],
      policeStationDesc: [''],
      locality: ['', Validators.required],
      street: ['', Validators.required],
      aadharNumber: ['', Validators.required],
      aadhar: ['', Validators.required],
      aadharFileSource: [''],
      emailId: ['', [Validators.required, Validators.email, Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]],
      mobileNo: ['', Validators.required],
      panNo: ['', Validators.required],
      PAN: ['', Validators.required],
      PANFileSource: [''],
      fatherHusbandName: ['', Validators.required],
      ITR: ['', Validators.required],
      ITRLastYear: ['', Validators.required],
      ITRLastYearFileSource: [''],
      assessmentITR: ['', Validators.required],
      characterCertificate: ['', Validators.required],
      characterCertificateFileSource: [''],
      affaidavitForEligilibility: ['', Validators.required],
      affaidavitForEligilibilityFileSource: [''],
      
      addressType: [''],
      ownershipDocument: ['', Validators.required],
      ownershipDocumentFileSource: [''],
      premisesPincode: ['', Validators.required],
      premisesCountry: ['INDIA'],
      premisesState: ['', Validators.required],
      premisesStateCode: [''],
      premisesStateDesc: [''],
      premisesDistrict: ['', Validators.required],
      premisesDistrictCode: [''],
      premisesDistrictDesc: [''],
      premisesTehsil: ['', Validators.required],
      premisesTehsilCode: [''],
      premisesTehsilDesc: [''],
      premisesUrban: ['', Validators.required],
      premisesMuncipal: [''],
      premisesMuncipalCode: [''],
      premisesMuncipalDesc: [''],
      premisesWard: [''],
      premisesBlock: [''],
      premisesBlockCode: [''],
      premisesBlockDesc: [''],
      premisesPoliceStation: ['', Validators.required],
      premisesPoliceStationCode: [''],
      premisesPoliceStationDesc: [''],
      premisesVillage: [''],
      premisesLocality: [''],
      premisesStreet: ['', Validators.required],

      layoutPlan: ['', Validators.required],
      layoutPlanFileSource: [''],
      solvencyCertificateAutorized: ['', Validators.required],
      solvencyCertificateAutorizedFileSource: [''],
      fireSafetyNoC: ['', Validators.required],
      fireSafetyNoCFileSource: [''],
      affadavait: ['', Validators.required],
      affadavaitFileSource: [''],
      gSTIN: ['', Validators.required],
      gSTINFileSource: [''],
      fssaiCertificate: ['', Validators.required],
      fssaiCertificateFileSource: [''],
      noCOfpremises: ['', Validators.required],
      noCOfpremisesFileSource: [''],
      certificateOfPollutionControl: ['', Validators.required],
      certificateOfPollutionControlFileSource: [''],
      PANDocument: ['', Validators.required],
      PANDocumentFileSource: [''],
      solvencyCertificateIssuedAutorized: ['', Validators.required],
      solvencyCertificateIssuedAutorizedFileSource: [''],
      affaidavit: ['', Validators.required],
      affaidavitFileSource: [''],
      validityOfSolvencyCertificate: ['', Validators.required],
      GSTINUnit: ['', Validators.required],
      PANNumber: ['', Validators.required],

      
      bankAccountNo: ['', Validators.required],
      bankIfsc: ['', Validators.required],
      bankName: ['', Validators.required],
      cancelCheque: ['', Validators.required],
      cancelChequeFileSource: [''],

      entityArrayList: this.formBuilder.array([
        this.formgroup()
      ]),

    });
  }

  formgroup(data?: any) {
    return this.formBuilder.group({
      entity: '',
      authorizePerson: '',
      unitName: '',
      District: ''
    });
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

  getLocalityType() {
    this.localityTypeList = [
      { id: 1, name: 'Urban' },
      { id: 2, name: 'Rural' }
    ];
  }

  getGender() {
    const searchObj = { filters: { code: null, name: null, isActive: true }, pageNo: 0, paginationSize: 5 };
    this.gender.searchGender(searchObj).subscribe((responceData: any) => {
      this.genders = responceData.data.contents;
    });
  }

  getState() {
    this.state.getState().subscribe((responceData: any) => {
      this.stateList = responceData.data;
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

  onGenderChange(gender) {
    if (gender === '1') {
      this.LMForm.patchValue({ gender: 2 });
    } else if (gender === '2' || gender === '3') {
      this.LMForm.patchValue({ gender: 1 });
    }
  }

  onChangeState(stateId) {
    if (stateId) {
      this.LMForm.patchValue({
        stateCode: this.stateList.find(item => item.id == stateId).stateCode,
        stateDesc: this.stateList.find(item => item.id == stateId).stateName
      });
      this.district.getDistrictsByStateid(stateId).subscribe((responceData: any) => {
        this.districtList = responceData.data;
      });
    }
  }

  onDistrictChange(districtId) {
    if (districtId) {
      this.LMForm.patchValue({
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
      this.policeStationList = [
        { id: 1, name: 'Police Station 1', code: 'P1' },
        { id: 2, name: 'Police Station 2', code: 'B2' }
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
      this.LMForm.patchValue({
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
      this.LMForm.controls.muncipal.setValidators([Validators.required]);
      this.LMForm.controls.muncipal.updateValueAndValidity();
      this.LMForm.controls.premisesMuncipal.setValidators([Validators.required]);
      this.LMForm.controls.premisesMuncipal.updateValueAndValidity();
      this.LMForm.controls.premisesBlock.setValidators([]);
      this.LMForm.controls.premisesBlock.updateValueAndValidity();
      this.LMForm.controls.premisesVillage.setValidators([]);
      this.LMForm.controls.premisesVillage.updateValueAndValidity();
      this.LMForm.controls.block.setValidators([]);
      this.LMForm.controls.block.updateValueAndValidity();
      this.LMForm.controls.village.setValidators([]);
      this.LMForm.controls.village.updateValueAndValidity();
    } else if (localityTypeId === "2") {
      this.ruralFlag = true;
      this.urbanFlag = false;
      this.LMForm.controls.muncipal.setValidators([]);
      this.LMForm.controls.muncipal.updateValueAndValidity();
      this.LMForm.controls.premisesMuncipal.setValidators([]);
      this.LMForm.controls.premisesMuncipal.updateValueAndValidity();
      this.LMForm.controls.block.setValidators([Validators.required]);
      this.LMForm.controls.block.updateValueAndValidity();
      this.LMForm.controls.village.setValidators([Validators.required]);
      this.LMForm.controls.village.updateValueAndValidity();
      this.LMForm.controls.premisesBlock.setValidators([Validators.required]);
      this.LMForm.controls.premisesBlock.updateValueAndValidity();
      this.LMForm.controls.premisesVillage.setValidators([Validators.required]);
      this.LMForm.controls.premisesVillage.updateValueAndValidity();
    } else {
      this.ruralFlag = false;
      this.urbanFlag = false;
    }
  }

  onChangeMuncipal(muncipalId) {
    if (muncipalId) {
      this.LMForm.patchValue({
        muncipalCode: this.muncipalList.find(item => item.id == muncipalId).code,
        muncipalDesc: this.muncipalList.find(item => item.id == muncipalId).name
      });
    }
  }

  onChangeBlock(blockId) {
    if (blockId) {
      this.LMForm.patchValue({
        blockCode: this.blockList.find(item => item.id == blockId).code,
        blockDesc: this.blockList.find(item => item.id == blockId).name
      });
    }
  }

  onChangepoliceStation(policeStationId) {
    if (policeStationId) {
      this.LMForm.patchValue({
        policeStationCode: this.policeStationList.find(item => item.id == policeStationId).code,
        policeStationDesc: this.policeStationList.find(item => item.id == policeStationId).name
      });
    }
  }

  // onCheckboxChange(checkValue) {
  //   console.log(checkValue);
  //   this.urbancheck = checkValue;
  //   const { localityType } = this.LMForm.value;
  //   if (this.urbancheck === true) {
  //     const { locality, street, pincode, state,
  //       stateCode, stateDesc, district, districtCode, districtDesc, tehsil, tahsilCode, tahsilDesc, muncipal, muncipalCode, muncipalDesc, ward, block, blockCode, blockDesc, village, policeStation,
  //       policeStationCode, policeStationDesc
  //     } = this.LMForm.value;
  //     this.LMForm.patchValue({
  //       premisesPincode: pincode,
  //       premisesState: state,
  //       premisesStateCode: stateCode,
  //       premisesStateDesc: stateDesc,
  //       premisesDistrict: district,
  //       premisesDistrictCode: districtCode,
  //       premisesDistrictDesc: districtDesc,
  //       premisesTehsil: tehsil,
  //       premisesTehsilCode: tahsilCode,
  //       premisesTehsilDesc: tahsilDesc,
  //       premisesUrban: localityType,
  //       premisesMuncipal: muncipal,
  //       premisesMuncipalCode: muncipalCode,
  //       premisesMuncipalDesc: muncipalDesc,
  //       premisesWard: ward,
  //       premisesBlock: block,
  //       premisesBlockCode: blockCode,
  //       premisesBlockDesc: blockDesc,
  //       premisesVillage: village,
  //       premisesPoliceStation: policeStation,
  //       premisesPoliceStationCode: policeStationCode,
  //       premisesPoliceStationDesc: policeStationDesc,
  //       premisesLocality: locality,
  //       premisesStreet: street,
  //     });
  //     this.onChangePremisesState(state);
  //     this.onChangePremisesDistrict(district, false);
  //     this.onChangeLocalityTypePremises(localityType);
  //     this.onChangeMuncipalPremises(muncipal);
  //     this.onChangeBlockPremises(block);
  //     this.onChangepoliceStationPremises(policeStation);

  //   } else if (this.urbancheck === false) {
  //     this.LMForm.patchValue({
  //       premisesPincode: '',
  //       premisesState: '',
  //       premisesStateCode: '',
  //       premisesStateDesc: '',
  //       premisesDistrict: '',
  //       premisesDistrictCode: '',
  //       premisesDistrictDesc: '',
  //       premisesTehsil: '',
  //       premisesTehsilCode: '',
  //       premisesTehsilDesc: '',
  //       premisesUrban: '',
  //       premisesMuncipal: '',
  //       premisesMuncipalCode: '',
  //       premisesMuncipalDesc: '',
  //       premisesWard: '',
  //       premisesBlock: '',
  //       premisesBlockCode: '',
  //       premisesBlockDesc: '',
  //       premisesVillage: '',
  //       premisesPoliceStation: '',
  //       premisesLocality: '',
  //       premisesStreet: '',
  //     });
  //     this.onChangeLocalityTypePremises(localityType);
  //   }
  // }

  onChangePremisesState(premisesStateId) {
    if (premisesStateId) {
      this.LMForm.patchValue({
        premisesStateCode: this.stateList.find(item => item.id == premisesStateId).stateCode,
        premisesStateDesc: this.stateList.find(item => item.id == premisesStateId).stateName
      });
      this.district.getDistrictsByStateid(premisesStateId).subscribe((responceData: any) => {
        this.premisesDistrictsList = responceData.data;
      });
    }
  }

  onChangePremisesDistrict(premisesDistrictId, changeFlag) {
    if (premisesDistrictId) {
      console.log(this.premisesDistrictsList);
      if (changeFlag) {
        this.LMForm.patchValue({
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
      this.LMForm.controls.muncipal.setValidators([Validators.required]);
      this.LMForm.controls.muncipal.updateValueAndValidity();
      this.LMForm.controls.premisesMuncipal.setValidators([Validators.required]);
      this.LMForm.controls.premisesMuncipal.updateValueAndValidity();
      this.LMForm.controls.premisesBlock.setValidators([]);
      this.LMForm.controls.premisesBlock.updateValueAndValidity();
      this.LMForm.controls.premisesVillage.setValidators([]);
      this.LMForm.controls.premisesVillage.updateValueAndValidity();
      this.LMForm.controls.block.setValidators([]);
      this.LMForm.controls.block.updateValueAndValidity();
      this.LMForm.controls.village.setValidators([]);
      this.LMForm.controls.village.updateValueAndValidity();
    } else if (urbanshow == "2") {
      this.premisesRuralFlag = true;
      this.premisesUrbanFlag = false;
      this.LMForm.controls.muncipal.setValidators([]);
      this.LMForm.controls.muncipal.updateValueAndValidity();
      this.LMForm.controls.premisesMuncipal.setValidators([]);
      this.LMForm.controls.premisesMuncipal.updateValueAndValidity();
      this.LMForm.controls.block.setValidators([Validators.required]);
      this.LMForm.controls.block.updateValueAndValidity();
      this.LMForm.controls.village.setValidators([Validators.required]);
      this.LMForm.controls.village.updateValueAndValidity();
      this.LMForm.controls.premisesBlock.setValidators([Validators.required]);
      this.LMForm.controls.premisesBlock.updateValueAndValidity();
      this.LMForm.controls.premisesVillage.setValidators([Validators.required]);
      this.LMForm.controls.premisesVillage.updateValueAndValidity();
    } else {
      this.premisesRuralFlag = false;
      this.premisesUrbanFlag = false;
    }
  }

  onChangeMuncipalPremises(muncipalId) {
    if (muncipalId) {
      this.LMForm.patchValue({
        premisesMuncipalCode: this.premisesMuncipalList.find(item => item.id == muncipalId).code,
        premisesMuncipalDesc: this.premisesMuncipalList.find(item => item.id == muncipalId).name
      });
    }
  }

  onChangeBlockPremises(blockId) {
    if (blockId) {
      this.LMForm.patchValue({
        premisesBlockCode: this.premisesBlockList.find(item => item.id == blockId).code,
        premisesBlockDesc: this.premisesBlockList.find(item => item.id == blockId).name
      });
    }
  }

  onChangepoliceStationPremises(policeStationId) {
    if (policeStationId) {
      this.LMForm.patchValue({
        premisesPoliceStation: this.premisesPoliceStationList.find(item => item.id == policeStationId).code,
        premisesPoliceStationCode: this.premisesPoliceStationList.find(item => item.id == policeStationId).name
      });
    }
  }

  setData() {
    this.LMForm.patchValue(this.registrationObj);
    this.onChangePremisesState(this.LMForm.value.premisesState);
  }

  onFileChange(event, sourceName, form) {
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      form.patchValue({
        [sourceName]: file
      });
    }
  }

  addrow() {
    (this.LMForm.get('entityArrayList') as FormArray).push(this.formgroup());
  }

  removeSelectedRow(idx: number) {
    (this.LMForm.get('entityArrayList') as FormArray).removeAt(idx);
  }

  public getFormLength(): number {
    return (this.LMForm.get('entityArrayList') as FormArray).length;
  }

  async getApplicationNo() {
    const res: any = await this.Service.getApplicationNo('WL');
    return res.content;
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
    formData.append('screenName', 'HBR-License-Add');
    formData.append('applicationNumber', applicationNo);
    console.log('formData::', formData);
    if (uploadFlag) {
      this.authService.fileUploadFlag = true;
      const res: any = await this.documentUploadService.uploadDocuments(formData);
      this.authService.fileUploadFlag = false;
      console.log(res);
      return res;
    } else {
      return null;
    }
  }

  async onSubmit(form) {
    let applicationNo = await this.getApplicationNo();
    console.log('applicationNoRes1::', applicationNo);
    applicationNo ? applicationNo : null
    if (applicationNo.length > 0) {
      const applicantDocuments = [
        { name: 'Photo of Applicant', fileSource: 'photoOfApplicantFileSource' },
        { name: 'Photo of Shop', fileSource: 'photoOfShopFileSource' }
      ];
      const applicantDocumentsUploadedDetails = await this.uploadDocuments(form, applicationNo, applicantDocuments);
      const addressDocuments = [
        { name: 'Aadhar', fileSource: 'aadharFileSource' },
        { name: 'PAN', fileSource: 'PANFileSource' },
        { name: 'Upload ITR - Last year', fileSource: 'ITRLastYearFileSource' },
        { name: 'Character Certificate', fileSource: 'characterCertificateFileSource' },
        { name: 'Affaidavit for Eligilibility', fileSource: 'affaidavitForEligilibilityFileSource' }
      ];
      const addressDocumentsUploadedDetails = await this.uploadDocuments(form, applicationNo, addressDocuments);
      const premisesAddressDocuments = [{ name: 'Ownership Document', fileSource: 'ownershipDocumentFileSource' }];
      const premisesAddressDocumentsUploadedDetails = await this.uploadDocuments(form, applicationNo, premisesAddressDocuments);
      const attachmentsDocuments = [
        { name: 'Layout Plan', fileSource: 'layoutPlanFileSource' },
        { name: 'Solvency Certificate / Property certificate by Authorize Income tax valuer', fileSource: 'solvencyCertificateAutorizedFileSource' },
        { name: 'Fire Safety NoC', fileSource: 'fireSafetyNoCFileSource' },
        { name: 'Affadavait', fileSource: 'affadavaitFileSource' },
        { name: 'GSTIN', fileSource: 'gSTINFileSource' },
        { name: 'Fssai certificate', fileSource: 'fssaiCertificateFileSource' },
        { name: 'NoC of premises', fileSource: 'noCOfpremisesFileSource' },
        { name: 'Certificate of Pollution Control', fileSource: 'certificateOfPollutionControlFileSource' },
        { name: 'PAN', fileSource: 'PANDocumentFileSource' },
        {
          name: 'Solvency Certificate/ Certificate of property issued by Autorized Income tax Valuer', fileSource: 'solvencyCertificateIssuedAutorizedFileSource' },
        { name: 'Affaidavit for Eligilibility', fileSource: 'affaidavitFileSource' },
      ];
      const attachmentsDocumentsUploadedDetails = await this.uploadDocuments(form, applicationNo, attachmentsDocuments);
      const bankDocuments = [{ name: 'Cancel Cheque', fileSource: 'cancelChequeFileSource' }];
      const bankDocumentsUploadedDetails = await this.uploadDocuments(form, applicationNo, bankDocuments);

      let entityArrayList = [];
      const hbrArr = form.get('entityArrayList')['controls'];
      for (let index = 0; index < hbrArr.length; index++) {
        entityArrayList.push({
          authorizePerson: hbrArr[index].value.designation,
          entityCode: hbrArr[index].value.entity ? this.entityList.find(item => item.id == hbrArr[index].value.entity).code : '',
          entityDesc: hbrArr[index].value.entity ? this.entityList.find(item => item.id == hbrArr[index].value.entity).name : '',
          districtCode: hbrArr[index].value.District ? this.districtList.find(item => item.id == hbrArr[index].value.District).code : '',
          districtDesc: hbrArr[index].value.District ? this.districtList.find(item => item.id == hbrArr[index].value.District).name : '',
          unitName: hbrArr[index].value.unitName
        });
      }

      const { 
        financialYear, dateOfApplication, photoOfApplicant, photoOfShop, salutation, firstName, middleName, lastName, dateOfBirth, gender, country, pincode, state, stateCode, stateDesc, district, districtCode, districtDesc, tehsil, tahsilCode, tahsilDesc, localityType, muncipal, muncipalCode, muncipalDesc, ward, block, blockCode, blockDesc, village, policeStation, policeStationCode, policeStationDesc, locality, street, aadharNumber, aadhar, emailId, mobileNo, panNo, PAN, fatherHusbandName, ITR, ITRLastYear, assessmentITR, characterCertificate, affaidavitForEligilibility, addressType, ownershipDocument, premisesPincode, premisesCountry, premisesState, premisesStateCode, premisesStateDesc, premisesDistrict, premisesDistrictCode, premisesDistrictDesc, premisesTehsil, premisesTehsilCode, premisesTehsilDesc, premisesUrban, premisesMuncipal, premisesMuncipalCode, premisesMuncipalDesc, premisesWard, premisesBlock, premisesBlockCode, premisesBlockDesc, premisesPoliceStation, premisesPoliceStationCode, premisesPoliceStationDesc, premisesVillage, premisesLocality, premisesStreet, layoutPlan, solvencyCertificateAutorized, fireSafetyNoC, affadavait, gSTIN, fssaiCertificate, noCOfpremises, certificateOfPollutionControl, PANDocument, solvencyCertificateIssuedAutorized, affaidavit, validityOfSolvencyCertificate, GSTINUnit, PANNumber, bankAccountNo, bankIfsc, bankName, cancelCheque
      } = form.value;      

      const params = {
        applicationDate: dateOfApplication ? formatDate(dateOfApplication, 'dd-MM-yyyy', 'en') : null,
        financialYear: financialYear ? financialYear : 0,
        applicationNumber: applicationNo,
        masterWareHouseLicenses: {
          licenseType: "string",
          licenseNumber: "string",
          applicationNumber: applicationNo,
          masterWareHouseApplicantDetails: {
            salutation: salutation,
            firstName: firstName,
            middleName: middleName,
            lastName: lastName,
            dob: dateOfBirth ? formatDate(dateOfBirth, 'dd-MM-yyyy', 'en') : null,
            genderCode: gender ? this.genders.find(item => item.id == gender).code : '',
            genderDesc: gender ? this.genders.find(item => item.id == gender).name : '', // gender
            emailId: emailId,
            mobileNumber: mobileNo,
            aadharNumber: aadharNumber,
            fatherHusbandName: fatherHusbandName,
            itrAssesmentYearCode: ITR ? this.ITRList.find(item => item.id == gender).code : '',
            itrAssesmentYearDesc: ITR ? this.ITRList.find(item => item.id == gender).name : '',
            panNumber: panNo,
            previousItrNotFiled: assessmentITR,
            applicantDocumentList: addressDocumentsUploadedDetails
          },
          addressList: [
            {
              country: country,
              pinCode: pincode,
              stateCode: stateCode,
              stateDesc: stateDesc,
              districtCode: districtCode,
              districtDesc: districtDesc,
              tahsilCode: tahsilCode,
              tahsilDesc: tahsilDesc,
              policeStationCode: policeStationCode,
              policeStationDesc: policeStationDesc,
              locality: locality,
              street: street,
              addressIdentifier: "Applicant",
              addressType: null,
              localityType: localityType ? this.localityTypeList.find(item => item.id == localityType).name : '',
              addressDocumentList: null
            },
            {
              country: premisesCountry,
              pinCode: premisesPincode,
              stateCode: premisesStateCode,
              stateDesc: premisesStateDesc,
              districtCode: premisesDistrictCode,
              districtDesc: premisesDistrictDesc,
              tahsilCode: premisesTehsilCode,
              tahsilDesc: premisesTehsilDesc,
              policeStationCode: premisesPoliceStationCode,
              policeStationDesc: premisesPoliceStationDesc,
              locality: premisesLocality,
              localityType: premisesUrban,
              street: premisesStreet,
              solvencyCertificateExpiryDate: null,
              addressIdentifier: "Premises",
              addressType: addressType,
              addressDocumentList: premisesAddressDocumentsUploadedDetails
            }
          ],
          entityList: entityArrayList,  // need to implement
          masterWareHouseAdditionalInfo: {
            gstNumber: GSTINUnit,
            panNumber: PANNumber,
            solvencyCertificateValidity: validityOfSolvencyCertificate,
            additionalDocumentList: attachmentsDocumentsUploadedDetails
          },
          bankList: [
            {
              accountNumber: bankAccountNo,
              bankCode: bankName ? this.bankList.find(item => item.id == bankName).code : '',
              bankName: bankName ? this.bankList.find(item => item.id == bankName).name : '',
              ifscCode: bankIfsc,
              bankDocumentList: bankDocumentsUploadedDetails
            }
          ]
        }
      };
      this.formSubmitted = false;
      console.log(params);
      // if (form.valid === false) {
      //   this.formSubmitted = true;
      // } else {
      this.Service.createLicense(params).subscribe((response: any) => {
        console.log('', response);
        this.exampleModalCenter.show()
        this.LMForm.reset();
        sessionStorage.removeItem('formdata');
        this.alert.showSuccess(response.responseMessage, 'Success');
        this.router.navigate(['/licencemgnt/hbr']);
      });
      // }
    }
  }

  preview(form) {
    sessionStorage.setItem('formdata', JSON.stringify(form.value));
    this.router.navigate(['/licencemgnt/hbr/hbrlicenseapplication/view']);
  }

  numberOnly(event): boolean {
    const charCode = (event.which) ? event.which : event.keyCode;
    if (charCode > 31 && (charCode < 48 || charCode > 57)) {
      return false;
    }
    return true;
  }

}
