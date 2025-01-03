import { formatDate } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import {
  AlertService,
  DistrictMasterService,
  StatemasterService,
} from '@app/services';
import { NewlicenceB1Service } from '@app/services/new-licence';
import * as moment from 'moment';

interface Post {
  startDate: Date;
}
@Component({
  selector: 'app-mb3',
  templateUrl: './mb3.component.html',
  styleUrls: ['./mb3.component.scss']
})
export class Mb3Component implements OnInit {
  MB3Form: FormGroup;
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

  post: Post = {
    startDate: new Date(Date.now())
  };
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
    if (this.registrationObj) {
      this.setData();
    }
    this.getstate();
    this.getpremisestate();
  }
  setData() {
    this.MB3Form.patchValue(this.registrationObj);
    this.getdistrict1(this.MB3Form.value.applicantState);
    this.getpremisedistrict1(this.MB3Form.value.applicantState)
  }
  createFormGrp() {
    this.MB3Form = this.formBuilder.group({
      financialYear: ['2020-2021'],
      dateOfApplication: [formatDate(this.post.startDate, 'yyyy-MM-dd', 'en')],
      salutation: ['', Validators.required],
      firstName: ['', Validators.required],
      middleName: [''],
      lastName: ['', Validators.required],
      mobileNumber: ['', [Validators.required]],
      emailId: ['', [Validators.required, Validators.email, Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]],
      aadhaarNumber: ['', [Validators.required]],
      gender: ['', Validators.required],
      dateOfBirth: ['', Validators.required],
      panNumber: ['', Validators.required],
      applicantCountry: ['INDIA'],
      applicantPinCode: [''],
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
      premisePinCode: [''],
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
      applicationAreCorrect: ['', Validators.required],
      provincesExciseAct1910: ['', Validators.required],
      brewaryRules: ['', Validators.required],
      ruleandRegulationMadeThereunder: ['', Validators.required],
      bankAccountNumber: ['', Validators.required],
      bankIFSC: ['', Validators.required],
      bankName: ['', Validators.required],
      applicationFees: ['', Validators.required]
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
  getdistrict1(event) {
    let id = event;
    this.district.getDistrictsByStateid(id).subscribe((responceData: any) => {
      this.districts = responceData.data;
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
  getpremisedistrict1(event) {
    let id = event;
    this.district.getDistrictsByStateid(id).subscribe((responceData: any) => {
      this.premisedistricts = responceData.data;
    });
  }
  add(MB3Form) {
    console.log(MB3Form);
    let params = {
      financialYear: MB3Form.value.financialYear,
      dateOfApplication: MB3Form.value.dateOfApplication,
      saluatation: MB3Form.value.saluatation,
      firstName: MB3Form.value.firstName,
      middleName: MB3Form.value.middleName,
      lastName: MB3Form.value.lastName,
      mobileNumber: parseInt(MB3Form.value.mobileNumber) ? parseInt(MB3Form.value.mobileNumber) : 0,
      emailId: MB3Form.value.emailId,
      aadhaarNumber: parseInt(MB3Form.value.aadhaarNumber) ? parseInt(MB3Form.value.aadhaarNumber) : 0,
      gender: MB3Form.value.gender,
      dateOfBirth: MB3Form.value.dateOfBirth,
      panNumber: MB3Form.value.panNumber,
      applicantCountry: MB3Form.value.applicantCountry,
      applicantPinCode: parseInt(MB3Form.value.applicantPinCode),
      applicantState: parseInt(MB3Form.value.applicantState) ? parseInt(MB3Form.value.applicantState) : 0,
      applicantDistrict: parseInt(MB3Form.value.applicantDistrict) ? parseInt(MB3Form.value.applicantDistrict) : 0,
      applicantTehsil: parseInt(MB3Form.value.applicantTehsil) ? parseInt(MB3Form.value.applicantTehsil) : 0,
      applicantUrbanOrRural: parseInt(MB3Form.value.applicantUrbanOrRural) ? parseInt(MB3Form.value.applicantUrbanOrRural) : 0,
      applicantMunicipalArea: parseInt(MB3Form.value.applicantMunicipalArea) ? parseInt(MB3Form.value.applicantMunicipalArea) : 0,
      applicantWard: MB3Form.value.applicantWard,
      applicantBlock: MB3Form.value.applicantBlock,
      applicantVillage: parseInt(MB3Form.value.applicantVillage) ? parseInt(MB3Form.value.applicantVillage) : 0,
      applicantPoliceStation: parseInt(MB3Form.value.applicantPoliceStation) ? parseInt(MB3Form.value.applicantPoliceStation) : 0,
      applicantLocality: MB3Form.value.applicantLocality,
      applicantStreet: MB3Form.value.applicantStreet,
      premiseCountry: MB3Form.value.premiseCountry,
      premisePinCode: parseInt(MB3Form.value.premisePinCode),
      premiseState: parseInt(MB3Form.value.premiseState) ? parseInt(MB3Form.value.premiseState) : 0,
      premiseDistrict: parseInt(MB3Form.value.premiseDistrict) ? parseInt(MB3Form.value.premiseDistrict) : 0,
      premiseTehsil: parseInt(MB3Form.value.premiseTehsil) ? parseInt(MB3Form.value.premiseTehsil) : 0,
      premiseUrbanOrRural: parseInt(MB3Form.value.premiseUrbanOrRural) ? parseInt(MB3Form.value.premiseUrbanOrRural) : 0,
      premiseMunicipalArea: parseInt(MB3Form.value.premiseMunicipalArea) ? parseInt(MB3Form.value.premiseMunicipalArea) : 0,
      premiseWard: MB3Form.value.premiseWard,
      premiseBlock: MB3Form.value.premiseBlock,
      premiseVillage: parseInt(MB3Form.value.premiseVillage) ? parseInt(MB3Form.value.premiseVillage) : 0,
      premisePoliceStation: parseInt(MB3Form.value.premisePoliceStation) ? parseInt(MB3Form.value.premisePoliceStation) : 0,
      premiseLocality: MB3Form.value.premiseLocality,
      premiseStreet: MB3Form.value.premiseStreet,
      bankAccountNumber: parseInt(MB3Form.value.bankAccountNumber) ? parseInt(MB3Form.value.bankAccountNumber) : 0,
      bankIFSC: MB3Form.value.bankIFSC,
      bankName: parseInt(MB3Form.valuebankName) ? parseInt(MB3Form.valuebankName) : 0,
      applicationFees: parseInt(MB3Form.value.applicationFees),
      applicationAreCorrect: MB3Form.value.applicationAreCorrect,
      provincesExciseAct1910: MB3Form.value.provincesExciseAct1910,
      brewaryRules: MB3Form.value.brewaryRules,
      ruleandRegulationMadeThereunder: MB3Form.value.ruleandRegulationMadeThereunder,
      uploadAadhar: "aadhar.jpg",
      uploadCancelCheque: "cheque.jpg",
      uploadPan: "pan.jpg",
      photo: "photo.jpg",
    }
    this.formSubmitted = false;
    if (MB3Form.valid === false) {
      this.formSubmitted = true;
    } else {
      this.b1service.addmb3(params).subscribe((response: any) => {
        if (response.status == "s") {
          this.alert.showSuccess(response.userDisplayMesg, 'Success');
          this.MB3Form.reset();
          sessionStorage.removeItem('formdata');
          // this.router.navigate(['/supplychainmanagement/warehouse/transportpass/transportpassgeneration/list']);
        } else {
          this.alert.showError(response['userDisplayMesg'], 'error')
        }
      });
    }
  }
  gender1(event) {
    let check = event.target.value;
    if (check == "Mr.") {
      this.MB3Form.patchValue({
        gender: "Male",
      });
    } else if (check == "Miss." || check == "Mrs.") {
      this.MB3Form.patchValue({
        gender: "Female",
      });
    }
  }
  numberOnly(event): boolean {
    const charCode = (event.which) ? event.which : event.keyCode;
    if (charCode > 31 && (charCode < 48 || charCode > 57)) {
      return false;
    }
    return true;

  }
  blockSpecialChar(e) {
    var k = e.keyCode;
    return ((k > 64 && k < 91) || (k > 96 && k < 123) || k == 8 || (k >= 48 && k <= 57));

  }
  checkboxchange(event) {
    console.log(this.MB3Form.value);

    console.log(event.target.checked)
    this.urbancheck = event.target.checked;
    if (this.urbancheck == true) {
      this.MB3Form.patchValue({
        premisePinCode: this.MB3Form.value.applicantPinCode,
        premiseState: this.MB3Form.value.applicantState,
        premiseDistrict: this.MB3Form.value.applicantDistrict,
        premiseTehsil: this.MB3Form.value.applicantTehsil,
        premiseUrbanOrRural: this.MB3Form.value.applicantUrbanOrRural,
        premiseMunicipalArea: this.MB3Form.value.applicantMunicipalArea,
        premiseWard: this.MB3Form.value.applicantWard,
        premiseBlock: this.MB3Form.value.applicantBlock,
        premiseVillage: this.MB3Form.value.applicantVillage,
        premisePoliceStation: this.MB3Form.value.applicantPoliceStation,
        premiseLocality: this.MB3Form.value.applicantLocality,
        premiseStreet: this.MB3Form.value.applicantStreet,
      });
      this.getpremisedistrict1(this.MB3Form.value.applicantState)
      console.log(this.MB3Form.value.applicantPinCode);

      if (this.MB3Form.value.premiseUrbanOrRural == 1) {
        this.premiseUrbanOrRural = true;
        this.premiserural = false;
      }
      else if (this.MB3Form.value.premiseUrbanOrRural == 2) {
        this.premiserural = true;
        this.premiseUrbanOrRural = false;
      }
    }
    else if (this.urbancheck == false) {
      this.MB3Form.patchValue({
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
      if (this.MB3Form.value.premiseUrbanOrRural == 1) {
        this.premiseUrbanOrRural = true;
        this.premiserural = false;
      }
      else if (this.MB3Form.value.premiseUrbanOrRural == 2) {
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
      this.MB3Form.controls['applicantMunicipalArea'].setValidators([Validators.required]);
      this.MB3Form.controls['applicantMunicipalArea'].updateValueAndValidity();
      this.MB3Form.controls['applicantBlock'].setValidators([]);
      this.MB3Form.controls['applicantBlock'].updateValueAndValidity();
      this.MB3Form.controls['applicantVillage'].setValidators([]);
      this.MB3Form.controls['applicantVillage'].updateValueAndValidity();
      // this.formSubmitted = true;
    }
    else if ($event.target.value == 2) {
      this.headrural = true;
      this.headurban = false;
      this.MB3Form.controls['applicantBlock'].setValidators([Validators.required]);
      this.MB3Form.controls['applicantBlock'].updateValueAndValidity();
      this.MB3Form.controls['applicantVillage'].setValidators([Validators.required]);
      this.MB3Form.controls['applicantVillage'].updateValueAndValidity();
      this.MB3Form.controls['applicantMunicipalArea'].setValidators([]);
      this.MB3Form.controls['applicantMunicipalArea'].updateValueAndValidity();
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
      this.MB3Form.controls['municipalArea'].setValidators([Validators.required]);
      this.MB3Form.controls['municipalArea'].updateValueAndValidity();
      this.MB3Form.controls['premiseMunicipalArea'].setValidators([Validators.required]);
      this.MB3Form.controls['premiseMunicipalArea'].updateValueAndValidity();
      this.MB3Form.controls['premiseBlock'].setValidators([]);
      this.MB3Form.controls['premiseBlock'].updateValueAndValidity();
      this.MB3Form.controls['premiseVillage'].setValidators([]);
      this.MB3Form.controls['premiseVillage'].updateValueAndValidity();
      this.MB3Form.controls['applicantBlock'].setValidators([]);
      this.MB3Form.controls['applicantBlock'].updateValueAndValidity();
      this.MB3Form.controls['applicantVillage'].setValidators([]);
      this.MB3Form.controls['applicantVillage'].updateValueAndValidity();
    } else if (urbanshow == 2) {
      this.premiserural = true;
      this.premiseUrbanOrRural = false;
      this.MB3Form.controls['applicantMunicipalArea'].setValidators([]);
      this.MB3Form.controls['applicantMunicipalArea'].updateValueAndValidity();
      this.MB3Form.controls['premiseMunicipalArea'].setValidators([]);
      this.MB3Form.controls['premiseMunicipalArea'].updateValueAndValidity();
      this.MB3Form.controls['applicantBlock'].setValidators([Validators.required]);
      this.MB3Form.controls['applicantBlock'].updateValueAndValidity();
      this.MB3Form.controls['applicantVillage'].setValidators([Validators.required]);
      this.MB3Form.controls['applicantVillage'].updateValueAndValidity();
      this.MB3Form.controls['premiseBlock'].setValidators([Validators.required]);
      this.MB3Form.controls['premiseBlock'].updateValueAndValidity();
      this.MB3Form.controls['premiseVillage'].setValidators([Validators.required]);
      this.MB3Form.controls['premiseVillage'].updateValueAndValidity();
    } else {
      this.premiserural = false;
      this.premiseUrbanOrRural = false;
    }
    // }


  }
  navigate(form) {
    sessionStorage.setItem('formdata', JSON.stringify(form.value));
    this.router.navigate(['/licencemgnt/brewery-winery/mb3/view'])
  }
}
