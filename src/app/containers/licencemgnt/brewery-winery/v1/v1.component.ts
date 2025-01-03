import { formatDate } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertService, DistrictMasterService, StatemasterService } from '@app/services';
import { NewlicenceB1Service } from '@app/services/new-licence';
import * as moment from 'moment';
interface Post {
  startDate: Date;
}
@Component({
  selector: 'app-v1',
  templateUrl: './v1.component.html',
  styleUrls: ['./v1.component.scss']
})
export class V1Component implements OnInit {
  V1Form: FormGroup;
  formSubmitted = false;
  states: any;
  districts: any;
  premisetates: any;
  premisedistricts: any;
  urbancheck: any;
  headrural = false;
  headurban = false;
  premisesurban = true;
  premisesrural = false;
  registrationObj: any = JSON.parse(sessionStorage.getItem('formdata'));

  post: Post = {
    startDate: new Date(Date.now())
  }
  maxDate = moment(new Date()).format('YYYY-MM-DD');

  constructor(
    private state: StatemasterService,
    private district: DistrictMasterService,
    private formBuilder: FormBuilder,
    private router: Router,
    private alert: AlertService,

    private b1service: NewlicenceB1Service,
  ) { }
  ngOnInit() {

    this.createFormGrp();
    if (this.V1Form) {
      this.setData();
    }
    this.getstate();
    this.getpremisestate();
    this.getpremisestate();
  }
  numberOnly(event): boolean {
    const charCode = (event.which) ? event.which : event.keyCode;
    if (charCode > 31 && (charCode < 48 || charCode > 57)) {
      return false;
    }
    return true;

  }
  setData() {
    this.V1Form.patchValue(this.registrationObj);
    // this.getpremisesdistrict(this.FL9.value.stateId)
  }
  createFormGrp() {
    this.V1Form = this.formBuilder.group({
      financialYear: ['2020-2021'],
      dateOfApplication: [formatDate(this.post.startDate, 'yyyy-MM-dd', 'en')],
      saluatation: ['', Validators.required],
      firstName: ['', Validators.required],
      middleName: [''],
      lastName: ['', Validators.required],
      mobileNumber: ['', Validators.required],
      emailId: ['', [Validators.required, Validators.email, Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]],
      aadhaarNumber: ['', Validators.required],
      gender: ['', Validators.required],
      dateOfBirth: ['', Validators.required],
      panNumber: ['', Validators.required],
      // fathersName :['', Validators.required],
      applicantCountry: ['INDIA'],
      applicantPinCode: [''],
      applicantState: ['', Validators.required],
      applicantDistrict: ['', Validators.required],
      applicantTehsil: ['', Validators.required],
      applicantUrban: ['', Validators.required],
      applicantMunicipalArea: [''],
      applicantWard: [''],
      applicantBlock: [''],
      applicantVillage: [''],
      applicantPoliceStation: ['', Validators.required],
      applicantLocality: ['', Validators.required],
      applicantStreet: ['', Validators.required],
      breweryPremisesCountry: ['INDIA'],
      breweryPremisesPinCode: [''],
      breweryPremisesState: ['', Validators.required],
      breweryPremisesDistrict: ['', Validators.required],
      breweryPremisesTehsil: ['', Validators.required],
      breweryPremisesUrban: ['', Validators.required],
      breweryPremisesMunicipalArea: [''],
      breweryPremisesWard: [''],
      breweryPremisesBlock: [''],
      breweryPremisesVillage: [''],
      breweryPremisesPoliceStation: ['', Validators.required],
      breweryPremisesLocality: ['', Validators.required],
      breweryPremisesStreet: ['', Validators.required],
      bankAccountNumber: ['', Validators.required],
      bankIFSC: ['', Validators.required],
      bankName: ['', Validators.required],
      applicationFees: ['', Validators.required],
    });
  }
  getstate() {
    this.state.getState().subscribe((responceData: any) => {
      this.states = responceData.data;
    });
  }
  getdistrict($event) {
    let id = $event.target.value;
    this.district.getDistrictsByStateid(id).subscribe((responceData: any) => {
      this.districts = responceData.data;
    });
  }
  getpremisedistrict1(event) {
    let id = event;
    this.district.getDistrictsByStateid(id).subscribe((responceData: any) => {
      this.premisedistricts = responceData.data;
    });
  }
  getpremisestate() {
    this.state.getState().subscribe((responceData: any) => {
      this.premisetates = responceData.data;
    });
  }
  getpremisedistrict($event) {
    let id = $event.target.value;
    this.district.getDistrictsByStateid(id).subscribe((responceData: any) => {
      this.premisedistricts = responceData.data;
    });
  }
  add(V1Form) {
    console.log(V1Form);
    let params = {
      financialYear: V1Form.value.financialYear,
      dateOfApplication: V1Form.value.dateOfApplication,
      saluatation: V1Form.value.saluatation,
      firstName: V1Form.value.firstName,
      middleName: V1Form.value.middleName,
      lastName: V1Form.value.lastName,
      mobileNumber: V1Form.value.mobileNumber,
      emailId: V1Form.value.emailId,
      aadhaarNumber: V1Form.value.aadhaarNumber,
      gender: V1Form.value.gender,
      dateOfBirth: V1Form.value.dateOfBirth,
      panNumber: V1Form.value.panNumber,
      // fathersName :V1Form.value.fathersName,
      itr: V1Form.value.itr,
      reason: V1Form.value.reason,
      applicantCountry: V1Form.value.applicantCountry,
      applicantPinCode: V1Form.value.applicantPinCode,
      applicantState: parseInt(V1Form.value.applicantState) ? parseInt(V1Form.value.applicantState) : 0,
      applicantDistrict: parseInt(V1Form.value.applicantDistrict) ? parseInt(V1Form.value.applicantDistrict) : 0,
      applicantTehsil: parseInt(V1Form.value.applicantTehsil) ? parseInt(V1Form.value.applicantTehsil) : 0,
      applicantUrban: parseInt(V1Form.value.applicantUrban) ? parseInt(V1Form.value.applicantUrban) : 0,
      applicantMunicipalArea: parseInt(V1Form.value.applicantMunicipalArea) ? parseInt(V1Form.value.applicantMunicipalArea) : 0,
      applicantWard: V1Form.value.applicantWard,
      applicantBlock: V1Form.value.applicantBlock,
      applicantVillage: parseInt(V1Form.value.applicantVillage) ? parseInt(V1Form.value.applicantVillage) : 0,
      applicantPoliceStation: parseInt(V1Form.value.applicantPoliceStation) ? parseInt(V1Form.value.applicantPoliceStation) : 0,
      applicantLocality: V1Form.value.applicantLocality,
      applicantStreet: V1Form.value.applicantStreet,
      breweryPremisesCountry: V1Form.value.breweryPremisesCountry,
      breweryPremisesPinCode: V1Form.value.breweryPremisesPinCode,
      breweryPremisesState: parseInt(V1Form.value.breweryPremisesState) ? parseInt(V1Form.value.breweryPremisesState) : 0,
      breweryPremisesDistrict: parseInt(V1Form.value.breweryPremisesDistrict) ? parseInt(V1Form.value.breweryPremisesDistrict) : 0,
      breweryPremisesTehsil: parseInt(V1Form.value.breweryPremisesTehsil) ? parseInt(V1Form.value.breweryPremisesTehsil) : 0,
      breweryPremisesUrban: parseInt(V1Form.value.breweryPremisesUrban) ? parseInt(V1Form.value.breweryPremisesUrban) : 0,
      breweryPremisesMunicipalArea: parseInt(V1Form.value.breweryPremisesMunicipalArea) ? parseInt(V1Form.value.breweryPremisesMunicipalArea) : 0,
      breweryPremisesWard: V1Form.value.breweryPremisesWard,
      breweryPremisesBlock: V1Form.value.breweryPremisesBlock,
      breweryPremisesVillage: parseInt(V1Form.value.breweryPremisesVillage) ? parseInt(V1Form.value.breweryPremisesVillage) : 0,
      breweryPremisesPoliceStation: parseInt(V1Form.value.breweryPremisesPoliceStation) ? parseInt(V1Form.value.breweryPremisesPoliceStation) : 0,
      breweryPremisesLocality: V1Form.value.breweryPremisesLocality,
      breweryPremisesStreet: V1Form.value.breweryPremisesStreet,
      bankAccountNumber: V1Form.value.bankAccountNumber,
      bankIFSC: V1Form.value.bankIFSC,
      bankName: parseInt(V1Form.valuebankName) ? parseInt(V1Form.valuebankName) : 0,
      applicationFees: V1Form.value.applicationFees,
    }
    this.formSubmitted = false;
    if (V1Form.valid === false) {
      this.formSubmitted = true;
    }
    else {
      this.b1service.addv1(params).subscribe((response: any) => {
        // if (response.status == "s") {
        this.alert.showSuccess(response.userDisplayMesg, 'Success');
        // this.router.navigate(['/supplychainmanagement/warehouse/transportpass/transportpassgeneration/list']);
        // }
        // else {
        //   this.alert.showError(response['userDisplayMesg'], 'error')
        // }
      })
    }
  }
  checkboxchange(event) {
    this.urbancheck = event.target.checked;
    console.log(this.urbancheck)
    if (this.urbancheck == true) {
      this.V1Form.patchValue({
        breweryPremisesPinCode: this.V1Form.value.applicantPinCode,
        breweryPremisesState: this.V1Form.value.applicantState,
        breweryPremisesDistrict: this.V1Form.value.applicantDistrict,
        breweryPremisesTehsil: this.V1Form.value.applicantTehsil,
        breweryPremisesUrban: this.V1Form.value.applicantUrban,
        breweryPremisesMunicipalArea: this.V1Form.value.applicantMunicipalArea,
        breweryPremisesWard: this.V1Form.value.applicantWard,
        breweryPremisesBlock: this.V1Form.value.applicantBlock,
        breweryPremisesVillage: this.V1Form.value.applicantVillage,
        breweryPremisesPoliceStation: this.V1Form.value.applicantPoliceStation,
        breweryPremisesLocality: this.V1Form.value.applicantLocality,
        breweryPremisesStreet: this.V1Form.value.applicantStreet,
      });
      this.getpremisedistrict1(this.V1Form.value.applicantState)
      console.log(this.V1Form.value.premisesUrban);

      if (this.V1Form.value.premisesUrban == 1) {
        this.premisesurban = true;
        this.premisesrural = false;
      }
      else if (this.V1Form.value.premisesUrban == 2) {
        this.premisesrural = true;
        this.premisesurban = false;
      }
    }
    else if (this.urbancheck == false) {
      this.V1Form.patchValue({
        breweryPremisesPinCode: '',
        breweryPremisesState: '',
        breweryPremisesDistrict: '',
        breweryPremisesTehsil: '',
        breweryPremisesUrban: '',
        breweryPremisesMunicipalArea: '',
        breweryPremisesWard: '',
        breweryPremisesBlock: '',
        breweryPremisesVillage: '',
        breweryPremisesPoliceStation: '',
        breweryPremisesLocality: '',
        breweryPremisesStreet: '',
      });
      if (this.V1Form.value.premisesUrban == 1) {
        this.premisesurban = true;
        this.premisesrural = false;
      }
      else if (this.V1Form.value.premisesUrban == 2) {
        this.premisesrural = true;
        this.premisesurban = false;
      }
    }
  }
  urban($event) {
    console.log($event.target.value);
    if ($event.target.value == 1) {
      this.headurban = true;
      this.headrural = false;
      this.V1Form.controls['applicantMunicipalArea'].setValidators([Validators.required]);
      this.V1Form.controls['applicantMunicipalArea'].updateValueAndValidity();
      this.V1Form.controls['applicantBlock'].setValidators([]);
      this.V1Form.controls['applicantBlock'].updateValueAndValidity();
      this.V1Form.controls['applicantVillage'].setValidators([]);
      this.V1Form.controls['applicantVillage'].updateValueAndValidity();
      // this.formSubmitted = true;
    }
    else if ($event.target.value == 2) {
      this.headrural = true;
      this.headurban = false;
      this.V1Form.controls['applicantBlock'].setValidators([Validators.required]);
      this.V1Form.controls['applicantBlock'].updateValueAndValidity();
      this.V1Form.controls['applicantVillage'].setValidators([Validators.required]);
      this.V1Form.controls['applicantVillage'].updateValueAndValidity();
      this.V1Form.controls['applicantMunicipalArea'].setValidators([]);
      this.V1Form.controls['applicantMunicipalArea'].updateValueAndValidity();
      // this.formSubmitted = true;
    }
    else {
      this.headrural = false;
      this.headurban = false;
    }
  }
  show1($event) {
    console.log(this.urbancheck)
    let urbanshow = $event.target.value;
    // if(this.urbancheck == false){
    console.log($event.target.value);
    if (urbanshow == 1) {
      this.premisesurban = true;
      this.premisesrural = false;
      this.V1Form.controls['applicantMunicipalArea'].setValidators([Validators.required]);
      this.V1Form.controls['applicantMunicipalArea'].updateValueAndValidity();
      this.V1Form.controls['premiseMunicipalArea'].setValidators([Validators.required]);
      this.V1Form.controls['premiseMunicipalArea'].updateValueAndValidity();
      this.V1Form.controls['premiseBlock'].setValidators([]);
      this.V1Form.controls['premiseBlock'].updateValueAndValidity();
      this.V1Form.controls['premiseVillage'].setValidators([]);
      this.V1Form.controls['premiseVillage'].updateValueAndValidity();
      this.V1Form.controls['applicantBlock'].setValidators([]);
      this.V1Form.controls['applicantBlock'].updateValueAndValidity();
      this.V1Form.controls['applicantVillage'].setValidators([]);
      this.V1Form.controls['applicantVillage'].updateValueAndValidity();
    }
    else if (urbanshow == 2) {
      this.premisesrural = true;
      this.premisesurban = false;
      this.V1Form.controls['applicantMunicipalArea'].setValidators([]);
      this.V1Form.controls['applicantMunicipalArea'].updateValueAndValidity();
      this.V1Form.controls['premiseMunicipalArea'].setValidators([]);
      this.V1Form.controls['premiseMunicipalArea'].updateValueAndValidity();
      this.V1Form.controls['applicantBlock'].setValidators([Validators.required]);
      this.V1Form.controls['applicantBlock'].updateValueAndValidity();
      this.V1Form.controls['applicantVillage'].setValidators([Validators.required]);
      this.V1Form.controls['applicantVillage'].updateValueAndValidity();
      this.V1Form.controls['premiseBlock'].setValidators([Validators.required]);
      this.V1Form.controls['premiseBlock'].updateValueAndValidity();
      this.V1Form.controls['premiseVillage'].setValidators([Validators.required]);
      this.V1Form.controls['premiseVillage'].updateValueAndValidity();
    }
    else {
      this.premisesrural = false;
      this.premisesurban = false;
    }
    // }


  }
  gender1(event) {
    let check = event.target.value;
    if (check == "Mr.") {
      this.V1Form.patchValue({
        gender: "Male",
      });
    } else if (check == "Miss." || check == "Mrs.") {
      this.V1Form.patchValue({
        gender: "Female",
      });
    }
  }
  navigate(form) {
    sessionStorage.setItem('formdata', JSON.stringify(form.value));
    this.router.navigate(['/licencemgnt/brewery-winery/v1/view'])
  }
}
