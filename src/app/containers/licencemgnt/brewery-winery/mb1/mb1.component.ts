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
  selector: 'app-mb1',
  templateUrl: './mb1.component.html',
  styleUrls: ['./mb1.component.scss']
})
export class Mb1Component implements OnInit {
  MB1Form: FormGroup;
  formSubmitted = false;
  states: any;
  districts: any;
  premisetates: any;
  premisedistricts: any;
  urbancheck: any;
  headrural = false;
  headurban = false;
  premiseUrbanOrRural = true;
  premiserural = false;
  registrationObj: any = JSON.parse(sessionStorage.getItem('formdata'));
  maxDate = moment(new Date()).format('YYYY-MM-DD');

  constructor(
    private state: StatemasterService,
    private district: DistrictMasterService,
    private formBuilder: FormBuilder,
    private router: Router,
    private alert: AlertService,
    private b1service: NewlicenceB1Service,
  ) { }
  post: Post = {
    startDate: new Date(Date.now())
  }
  ngOnInit() {
    this.createFormGrp();
    if (this.registrationObj) {
      this.setData();
    }
    this.getstate();
    this.getpremisestate();
  }
  setData() {
    this.MB1Form.patchValue(this.registrationObj);
    this.getdistrict1(this.MB1Form.value.applicantState);
    this.getpremisedistrict1(this.MB1Form.value.applicantState)
  }
  getdistrict1(event) {
    let id = event;
    this.district.getDistrictsByStateid(id).subscribe((responceData: any) => {
      this.districts = responceData.data;
    });
  }
  gender1(event) {
    let check = event.target.value;
    if (check == "Mr.") {
      this.MB1Form.patchValue({
        gender: "Male",
      });
    } else if (check == "Miss." || check == "Mrs.") {
      this.MB1Form.patchValue({
        gender: "Female",
      });
    }
  }
  createFormGrp() {
    this.MB1Form = this.formBuilder.group({
      financialYear: ['2020-2021'],
      dateOfApplication: [formatDate(this.post.startDate, 'yyyy-MM-dd', 'en')],
      saluatation: ['', Validators.required],
      firstName: ['', Validators.required],
      middleName: [''],
      lastName: ['', Validators.required],
      mobileNumber: ['', [Validators.required, Validators.pattern('[0-9]{10,10}')]],
      emailId: ['', [Validators.required, Validators.email, Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]],
      aadhaarNumber: ['', [Validators.required, Validators.pattern('[0-9]{12,12}')]],
      gender: ['', Validators.required],
      dateOfBirth: ['', Validators.required],
      panNumber: ['', Validators.required],
      country: ['INDIA'],
      applicantPinCode: ['', [Validators.pattern('[0-9]{6,6}')]],
      applicantState: ['', Validators.required],
      applicantDistrict: ['', Validators.required],
      applicantTehsil: ['', Validators.required],
      applicantUrbanOrRural: ['', Validators.required],
      applicantMunicipalArea: [''],
      applicantWard: [''],
      applicantBlock: [''],
      applicantVillage: [''],
      applicantPoliceStation: ['', Validators.required],
      applicantLocality: ['', Validators.required],
      applicantStreet: ['', Validators.required],
      premiseCountry: ['INDIA'],
      premisePinCode: ['', [Validators.pattern('[0-9]{6,6}')]],
      premiseState: ['', Validators.required],
      premiseDistrict: ['', Validators.required],
      premiseTehsil: ['', Validators.required],
      premiseUrbanOrRural: ['', Validators.required],
      premiseMunicipalArea: [''],
      premiseWard: [''],
      premiseBlock: [''],
      premiseVillage: [''],
      premisePoliceStation: ['', Validators.required],
      premiseLocality: ['', Validators.required],
      premiseStreet: ['', Validators.required],
      bankAccountNumber: ['', Validators.required],
      bankIFSC: ['', Validators.required],
      bankName: ['', Validators.required],
      applicationFees: ['', [Validators.required, Validators.pattern('[0-9]{6,6}')]],
      capacityMicroBrewery: ['', Validators.required],
      quantity: ['', Validators.required],
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
  add(MB1Form) {
    console.log(MB1Form);
    let params = {
      financialYear: MB1Form.value.financialYear,
      dateOfApplication: MB1Form.value.dateOfApplication,
      saluatation: MB1Form.value.saluatation,
      firstName: MB1Form.value.firstName,
      middleName: MB1Form.value.middleName,
      lastName: MB1Form.value.lastName,
      mobileNumber: MB1Form.value.mobileNumber,
      emailId: MB1Form.value.emailId,
      aadhaarNumber: MB1Form.value.aadhaarNumber,
      gender: MB1Form.value.gender,
      dateOfBirth: MB1Form.value.dateOfBirth,
      panNumber: MB1Form.value.panNumber,
      country: MB1Form.value.country,
      applicantPinCode: MB1Form.value.applicantPinCode,
      applicantState: parseInt(MB1Form.value.applicantState) ? parseInt(MB1Form.value.applicantState) : 0,
      applicantDistrict: parseInt(MB1Form.value.applicantDistrict) ? parseInt(MB1Form.value.applicantDistrict) : 0,
      applicantTehsil: parseInt(MB1Form.value.applicantTehsil) ? parseInt(MB1Form.value.applicantTehsil) : 0,
      applicantUrbanOrRural: parseInt(MB1Form.value.applicantUrbanOrRural) ? parseInt(MB1Form.value.applicantUrbanOrRural) : 0,
      applicantMunicipalArea: parseInt(MB1Form.value.applicantMunicipalArea) ? parseInt(MB1Form.value.applicantMunicipalArea) : 0,
      applicantWard: MB1Form.value.applicantWard,
      applicantBlock: MB1Form.value.applicantBlock ? MB1Form.value.applicantBlock : null,
      applicantVillage: parseInt(MB1Form.value.applicantVillage) ? parseInt(MB1Form.value.applicantVillage) : 0,
      applicantPoliceStation: parseInt(MB1Form.value.applicantPoliceStation) ? parseInt(MB1Form.value.applicantPoliceStation) : 0,
      applicantLocality: MB1Form.value.applicantLocality,
      applicantStreet: MB1Form.value.applicantStreet,
      premiseCountry: MB1Form.value.premiseCountry,
      premisePinCode: MB1Form.value.premisePinCode,
      premiseState: parseInt(MB1Form.value.premiseState) ? parseInt(MB1Form.value.premiseState) : 0,
      premiseDistrict: parseInt(MB1Form.value.premiseDistrict) ? parseInt(MB1Form.value.premiseDistrict) : 0,
      premiseTehsil: parseInt(MB1Form.value.premiseTehsil) ? parseInt(MB1Form.value.premiseTehsil) : 0,
      premiseUrbanOrRural: parseInt(MB1Form.value.premiseUrbanOrRural) ? parseInt(MB1Form.value.premiseUrbanOrRural) : 0,
      premiseMunicipalArea: parseInt(MB1Form.value.premiseMunicipalArea) ? parseInt(MB1Form.value.premiseMunicipalArea) : 0,
      premiseWard: MB1Form.value.premiseWard,
      premiseBlock: MB1Form.value.premiseBlock ? MB1Form.value.premiseBlock : null,
      premiseVillage: parseInt(MB1Form.value.premiseVillage) ? parseInt(MB1Form.value.premiseVillage) : 0,
      premisePoliceStation: parseInt(MB1Form.value.premisePoliceStation) ? parseInt(MB1Form.value.premisePoliceStation) : 0,
      premiseLocality: MB1Form.value.premiseLocality,
      premiseStreet: MB1Form.value.premiseStreet,
      bankAccountNumber: MB1Form.value.bankAccountNumber,
      bankIFSC: MB1Form.value.bankIFSC,
      bankName: parseInt(MB1Form.value.bankName) ? parseInt(MB1Form.value.bankName) : 0,
      applicationFees: parseInt(MB1Form.value.applicationFees) ? parseInt(MB1Form.value.applicationFees) : 0,
      capacityMicroBrewery: MB1Form.value.capacityMicroBrewery,
      quantity: MB1Form.value.quantity,
      paymentStatus: "Active",
      photo: "photo.jpg",
      uploadAadhar: "aadhar.jpg",
      uploadBoundries: "boundary.jpg",
      uploadCancelCheque: "cancel.jpg",
      uploadPan: "pan.jpg"
    }
    this.formSubmitted = false;
    if (MB1Form.valid === false) {
      this.formSubmitted = true;
    }
    else {
      this.b1service.addmb1(params).subscribe((response: any) => {
        if (response.status == "s") {
          this.alert.showSuccess(response.userDisplayMesg, 'Success');
          this.MB1Form.reset();
          sessionStorage.removeItem('formdata');
          // this.router.navigate(['/supplychainmanagement/warehouse/transportpass/transportpassgeneration/list']);
        }
        else {
          this.alert.showError(response['userDisplayMesg'], 'error')
        }
      })
    }
  }
  checkboxchange(event) {
    console.log(event.target.checked)
    this.urbancheck = event.target.checked;
    if (this.urbancheck == true) {
      this.MB1Form.patchValue({
        premisePinCode: this.MB1Form.value.applicantPinCode,
        premiseState: this.MB1Form.value.applicantState,
        premiseDistrict: this.MB1Form.value.applicantDistrict,
        premiseTehsil: this.MB1Form.value.applicantTehsil,
        premiseUrbanOrRural: this.MB1Form.value.applicantUrbanOrRural,
        premiseMunicipalArea: this.MB1Form.value.applicantMunicipalArea,
        premiseWard: this.MB1Form.value.applicantWard,
        premiseBlock: this.MB1Form.value.applicantBlock,
        premiseVillage: this.MB1Form.value.applicantVillage,
        premisePoliceStation: this.MB1Form.value.applicantPoliceStation,
        premiseLocality: this.MB1Form.value.applicantLocality,
        premiseStreet: this.MB1Form.value.applicantStreet,
      });
      this.getpremisedistrict1(this.MB1Form.value.applicantState)
      console.log(this.MB1Form.value.premiseUrbanOrRural);

      if (this.MB1Form.value.premiseUrbanOrRural == 1) {
        this.premiseUrbanOrRural = true;
        this.premiserural = false;
      }
      else if (this.MB1Form.value.premiseUrbanOrRural == 2) {
        this.premiserural = true;
        this.premiseUrbanOrRural = false;
      }
    }
    else if (this.urbancheck == false) {
      this.MB1Form.patchValue({
        premisePinCode: '',
        premiseState: '',
        premiseDistrict: '',
        premiseTehsil: '',
        premiseUrbanOrRural: '',
        premiseMunicipalArea: '',
        premiseWard: '',
        premiseBlock: '',
        premiseVillage: '',
        premisePoliceStation: '',
        premiseLocality: '',
        premiseStreet: '',
      });
      if (this.MB1Form.value.premiseUrbanOrRural == 1) {
        this.premiseUrbanOrRural = true;
        this.premiserural = false;
      }
      else if (this.MB1Form.value.premiseUrbanOrRural == 2) {
        this.premiserural = true;
        this.premiseUrbanOrRural = false;
      }
    }
  }
  urban($event) {
    console.log($event.target.value);
    if ($event.target.value == 1) {
      this.headurban = true;
      this.headrural = false;
      this.MB1Form.controls['applicantMunicipalArea'].setValidators([Validators.required]);
      this.MB1Form.controls['applicantMunicipalArea'].updateValueAndValidity();
      this.MB1Form.controls['applicantBlock'].setValidators([]);
      this.MB1Form.controls['applicantBlock'].updateValueAndValidity();
      this.MB1Form.controls['applicantVillage'].setValidators([]);
      this.MB1Form.controls['applicantVillage'].updateValueAndValidity();
      // this.formSubmitted = true;
    }
    else if ($event.target.value == 2) {
      this.headrural = true;
      this.headurban = false;
      this.MB1Form.controls['applicantBlock'].setValidators([Validators.required]);
      this.MB1Form.controls['applicantBlock'].updateValueAndValidity();
      this.MB1Form.controls['applicantVillage'].setValidators([Validators.required]);
      this.MB1Form.controls['applicantVillage'].updateValueAndValidity();
      this.MB1Form.controls['applicantMunicipalArea'].setValidators([]);
      this.MB1Form.controls['applicantMunicipalArea'].updateValueAndValidity();
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
      this.premiseUrbanOrRural = true;
      this.premiserural = false;
      this.MB1Form.controls['applicantMunicipalArea'].setValidators([Validators.required]);
      this.MB1Form.controls['applicantMunicipalArea'].updateValueAndValidity();
      this.MB1Form.controls['premiseMunicipalArea'].setValidators([Validators.required]);
      this.MB1Form.controls['premiseMunicipalArea'].updateValueAndValidity();
      this.MB1Form.controls['premiseBlock'].setValidators([]);
      this.MB1Form.controls['premiseBlock'].updateValueAndValidity();
      this.MB1Form.controls['premiseVillage'].setValidators([]);
      this.MB1Form.controls['premiseVillage'].updateValueAndValidity();
      this.MB1Form.controls['applicantBlock'].setValidators([]);
      this.MB1Form.controls['applicantBlock'].updateValueAndValidity();
      this.MB1Form.controls['applicantVillage'].setValidators([]);
      this.MB1Form.controls['applicantVillage'].updateValueAndValidity();
    }
    else if (urbanshow == 2) {
      this.premiserural = true;
      this.premiseUrbanOrRural = false;
      this.MB1Form.controls['applicantMunicipalArea'].setValidators([]);
      this.MB1Form.controls['applicantMunicipalArea'].updateValueAndValidity();
      this.MB1Form.controls['premiseMunicipalArea'].setValidators([]);
      this.MB1Form.controls['premiseMunicipalArea'].updateValueAndValidity();
      this.MB1Form.controls['applicantBlock'].setValidators([Validators.required]);
      this.MB1Form.controls['applicantBlock'].updateValueAndValidity();
      this.MB1Form.controls['applicantVillage'].setValidators([Validators.required]);
      this.MB1Form.controls['applicantVillage'].updateValueAndValidity();
      this.MB1Form.controls['premiseBlock'].setValidators([Validators.required]);
      this.MB1Form.controls['premiseBlock'].updateValueAndValidity();
      this.MB1Form.controls['premiseVillage'].setValidators([Validators.required]);
      this.MB1Form.controls['premiseVillage'].updateValueAndValidity();
    }
    else {
      this.premiserural = false;
      this.premiseUrbanOrRural = false;
    }
    // }


  }
  navigate(form) {
    sessionStorage.setItem('formdata', JSON.stringify(form.value));
    this.router.navigate(['/licencemgnt/brewery-winery/mb1/view'])
  }

  numberOnly(event): boolean {
    const charCode = event.which ? event.which : event.keyCode;
    if (charCode > 31 && (charCode < 48 || charCode > 57)) {
      return false;
    }
    return true;
  }
}
