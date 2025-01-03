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
  selector: 'app-mb7',
  templateUrl: './mb7.component.html',
  styleUrls: ['./mb7.component.scss']
})
export class Mb7Component implements OnInit {
  MB7Form: FormGroup;
  formSubmitted = false;
  states: any;
  districts: any;
  bartates: any;
  bardistricts: any;
  urbancheck: any;
  headrural = false;
  headurban = false;
  barUrbanOrRural = false;
  barrural = false;
  smallBreweryUrbanOrRural = false;
  smallBreweryrural = false;
  distilleryUrbanOrRural = false;
  distilleryrural = false;
  distillerydistricts: any;
  brewerydistricts: any;
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
    if (this.MB7Form) {
      this.setData();
    }
    this.getstate();
    this.getbarstate();
  }
  numberOnly(event): boolean {
    const charCode = (event.which) ? event.which : event.keyCode;
    if (charCode > 31 && (charCode < 48 || charCode > 57)) {
      return false;
    }
    return true;
  }
  setData() {
    this.MB7Form.patchValue(this.registrationObj);
    // this.getpremisesdistrict(this.FL9.value.stateId)
  }
  createFormGrp() {
    this.MB7Form = this.formBuilder.group({
      financialYear: ['2020-2021'],
      dateOfApplication: [formatDate(this.post.startDate, 'yyyy-MM-dd', 'en')],
      saluatation: ['', Validators.required],
      firstName: ['', Validators.required],
      middleName: [''],
      lastName: ['', Validators.required],
      mobileNumber: ['', [Validators.required, , Validators.pattern('[0-9]{10,10}')]],
      emailId: ['', [Validators.required, Validators.email, Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]],
      aadhaarNumber: ['', Validators.required],
      gender: ['', Validators.required],
      dateOfBirth: ['', Validators.required],
      panNumber: ['', Validators.required],
      country: ['INDIA'],
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
      distilleryCountry: ['INDIA'],
      distilleryPinCode: [''],
      distilleryState: ['', Validators.required],
      distilleryDistrict: ['', Validators.required],
      distilleryTehsil: ['', Validators.required],
      distilleryUrbanOrRural: ['', Validators.required],
      distilleryMunicipalArea: [''],
      distilleryWard: [''],
      distilleryBlock: [''],
      distilleryVillage: [''],
      distilleryPoliceStation: ['', Validators.required],
      distilleryLocality: ['', Validators.required],
      distilleryStreet: ['', Validators.required],
      barUnitName: ['', Validators.required],
      premiseCountry: ['INDIA'],
      barPinCode: [''],
      barState: ['', Validators.required],
      barDistrict: ['', Validators.required],
      barTehsil: ['', Validators.required],
      barUrbanOrRural: ['', Validators.required],
      barMunicipalArea: [''],
      barWard: [''],
      barBlock: [''],
      barVillage: [''],
      barPoliceStation: ['', Validators.required],
      barLocality: ['', Validators.required],
      barStreet: ['', Validators.required],
      totalArea: ['', Validators.required],
      smallBreweryName: ['', Validators.required],
      smallBreweryCountry: ['INDIA'],
      smallBreweryPinCode: [''],
      smallBreweryState: ['', Validators.required],
      smallBreweryDistrict: ['', Validators.required],
      smallBreweryTehsil: ['', Validators.required],
      smallBreweryUrbanOrRural: ['', Validators.required],
      smallBreweryMunicipalArea: [''],
      smallBreweryWard: [''],
      smallBreweryBlock: [''],
      smallBreweryVillage: [''],
      smallBreweryPoliceStation: ['', Validators.required],
      smallBreweryLocality: ['', Validators.required],
      smallBreweryStreet: ['', Validators.required],
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
  getdistillerydistrict($event) {
    let id = $event.target.value;
    this.district.getDistrictsByStateid(id).subscribe((responceData: any) => {
      this.districts = responceData.data;
    });
  }
  getdistillerydistrict1(event) {
    let id = event;
    this.district.getDistrictsByStateid(id).subscribe((responceData: any) => {
      this.distillerydistricts = responceData.data;
    });
  }
  getbarstate() {
    this.state.getState().subscribe((responceData: any) => {
      this.bartates = responceData.data;
    });
  }
  getbardistrict($event) {
    let id = $event.target.value;
    this.district.getDistrictsByStateid(id).subscribe((responceData: any) => {
      this.bardistricts = responceData.data;
    });
  }
  getbardistrict1(event) {
    let id = event;
    this.district.getDistrictsByStateid(id).subscribe((responceData: any) => {
      this.bardistricts = responceData.data;
    });
  }
  getbrewerydistrict(event) {
    let id = event.target.value;
    this.district.getDistrictsByStateid(id).subscribe((responceData: any) => {
      this.brewerydistricts = responceData.data;
    });
  }
  getbrewerydistrict1(event) {
    let id = event;
    this.district.getDistrictsByStateid(id).subscribe((responceData: any) => {
      this.brewerydistricts = responceData.data;
    });
  }
  add(MB7Form) {
    console.log(MB7Form);
    let check = {
      "aadhaarNumber": parseInt(MB7Form.value.aadhaarNumber) ? parseInt(MB7Form.value.aadhaarNumber) : 0,
      "applicantBlock": MB7Form.value.applicantBlock,
      "applicantDistrict": parseInt(MB7Form.value.applicantDistrict) ? parseInt(MB7Form.value.applicantDistrict) : 0,
      "applicantLocality": MB7Form.value.applicantLocality,
      "applicantMunicipalArea": parseInt(MB7Form.value.applicantMunicipalArea) ? parseInt(MB7Form.value.applicantMunicipalArea) : 0,
      "applicantPinCode": parseInt(MB7Form.value.applicantPinCode) ? parseInt(MB7Form.value.applicantPinCode) : 0,
      "applicantPoliceStation": parseInt(MB7Form.value.applicantPoliceStation) ? parseInt(MB7Form.value.applicantPoliceStation) : 0,
      "applicantState": parseInt(MB7Form.value.applicantState) ? parseInt(MB7Form.value.applicantState) : 0,
      "applicantStreet": MB7Form.value.applicantStreet,
      "applicantTehsil": parseInt(MB7Form.value.applicantTehsil) ? parseInt(MB7Form.value.applicantTehsil) : 0,
      "applicantUrbanOrRural": parseInt(MB7Form.value.applicantUrbanOrRural) ? parseInt(MB7Form.value.applicantUrbanOrRural) : 0,
      "applicantVillage": parseInt(MB7Form.value.applicantVillage) ? parseInt(MB7Form.value.applicantVillage) : 0,
      "applicantWard": MB7Form.value.applicantWard,
      "applicationFees": parseInt(MB7Form.value.applicationFees) ? parseInt(MB7Form.value.applicationFees) : 0,
      "bankAccountNumber": parseInt(MB7Form.value.bankAccountNumber) ? parseInt(MB7Form.value.bankAccountNumber) : 0,
      "bankIFSC": MB7Form.value.bankIFSC,
      "bankName": parseInt(MB7Form.value.bankName) ? parseInt(MB7Form.value.bankName) : 0,
      "barBlock": MB7Form.value.barBlock,
      "premiseCountry": MB7Form.value.premiseCountry,
      "barDistrict": parseInt(MB7Form.value.barDistrict) ? parseInt(MB7Form.value.barDistrict) : 0,
      "barLocality": MB7Form.value.barLocality,
      "barMunicipalArea": parseInt(MB7Form.value.barMunicipalArea) ? parseInt(MB7Form.value.barMunicipalArea) : 0,
      "barPinCode": parseInt(MB7Form.value.barPinCode) ? parseInt(MB7Form.value.barPinCode) : 0,
      "barPoliceStation": parseInt(MB7Form.value.barPoliceStation) ? parseInt(MB7Form.value.barPoliceStation) : 0,
      "barState": parseInt(MB7Form.value.barState) ? parseInt(MB7Form.value.barState) : 0,
      "barStreet": MB7Form.value.barStreet,
      "barTehsil": parseInt(MB7Form.value.barTehsil) ? parseInt(MB7Form.value.barTehsil) : 0,
      "barUnitName": MB7Form.value.barUnitName,
      "barUrbanOrRural": parseInt(MB7Form.value.barUrbanOrRural) ? parseInt(MB7Form.value.barUrbanOrRural) : 0,
      "barVillage": parseInt(MB7Form.value.barVillage) ? parseInt(MB7Form.value.barVillage) : 0,
      "barWard": MB7Form.value.barWard,
      "country": MB7Form.value.country,
      "dateOfApplication": MB7Form.value.dateOfApplication,
      "dateOfBirth": MB7Form.value.dateOfBirth,
      "distilleryBlock": MB7Form.value.distilleryBlock,
      "distilleryDistrict": parseInt(MB7Form.value.distilleryDistrict) ? parseInt(MB7Form.value.distilleryDistrict) : 0,
      "distilleryLocality": MB7Form.value.distilleryLocality,
      "distilleryMunicipalArea": parseInt(MB7Form.value.distilleryMunicipalArea) ? parseInt(MB7Form.value.distilleryMunicipalArea) : 0,
      "distilleryPinCode": parseInt(MB7Form.value.distilleryPinCode) ? parseInt(MB7Form.value.distilleryPinCode) : 0,
      "distilleryPoliceStation": parseInt(MB7Form.value.distilleryPoliceStation) ? parseInt(MB7Form.value.distilleryPoliceStation) : 0,
      "distilleryState": parseInt(MB7Form.value.distilleryState) ? parseInt(MB7Form.value.distilleryState) : 0,
      "distilleryStreet": MB7Form.value.distilleryStreet,
      "distilleryTehsil": parseInt(MB7Form.value.distilleryTehsil) ? parseInt(MB7Form.value.distilleryTehsil) : 0,
      "distilleryUrbanOrRural": parseInt(MB7Form.value.distilleryUrbanOrRural) ? parseInt(MB7Form.value.distilleryUrbanOrRural) : 0,
      "distilleryVillage": parseInt(MB7Form.value.distilleryVillage) ? parseInt(MB7Form.value.distilleryVillage) : 0,
      "distilleryWard": MB7Form.value.distilleryWard,
      "emailId": MB7Form.value.emailId,
      "financialYear": MB7Form.value.financialYear,
      "firstName": MB7Form.value.firstName,
      "gender": MB7Form.value.gender,
      "lastName": MB7Form.value.lastName,
      "middleName": MB7Form.value.middleName,
      "mobileNumber": parseInt(MB7Form.value.mobileNumber) ? parseInt(MB7Form.value.mobileNumber) : 0,
      "panNumber": MB7Form.value.panNumber,
      "photo": "photo.jpg",
      "saluatation": MB7Form.value.saluatation,
      "smallBreweryBarUnitName": MB7Form.value.smallBreweryBarUnitName,
      "smallBreweryBlock": MB7Form.value.smallBreweryBlock,
      "smallBreweryCountry": MB7Form.value.smallBreweryCountry,
      "smallBreweryDistrict": parseInt(MB7Form.value.smallBreweryDistrict) ? parseInt(MB7Form.value.smallBreweryDistrict) : 0,
      "smallBreweryLocality": MB7Form.value.smallBreweryLocality,
      "smallBreweryMunicipalArea": parseInt(MB7Form.value.smallBreweryMunicipalArea) ? parseInt(MB7Form.value.smallBreweryMunicipalArea) : 0,
      "smallBreweryName": MB7Form.value.smallBreweryName,
      "smallBreweryPinCode": parseInt(MB7Form.value.smallBreweryPinCode) ? parseInt(MB7Form.value.smallBreweryPinCode) : 0,
      "smallBreweryPoliceStation": parseInt(MB7Form.value.smallBreweryPoliceStation) ? parseInt(MB7Form.value.smallBreweryPoliceStation) : 0,
      "smallBreweryState": parseInt(MB7Form.value.smallBreweryState) ? parseInt(MB7Form.value.smallBreweryState) : 0,
      "smallBreweryStreet": MB7Form.value.smallBreweryStreet,
      "smallBreweryTehsil": parseInt(MB7Form.value.smallBreweryTehsil) ? parseInt(MB7Form.value.smallBreweryTehsil) : 0,
      "smallBrewerytotalArea": parseInt(MB7Form.value.smallBrewerytotalArea) ? parseInt(MB7Form.value.smallBrewerytotalArea) : 0,
      "smallBreweryUrbanOrRuralOrRural": parseInt(MB7Form.value.smallBreweryUrbanOrRuralOrRural) ? parseInt(MB7Form.value.smallBreweryUrbanOrRuralOrRural) : 0,
      "smallBreweryVillage": parseInt(MB7Form.value.smallBreweryVillage) ? parseInt(MB7Form.value.smallBreweryVillage) : 0,
      "smallBreweryWard": MB7Form.value.smallBreweryWard,
      "totalArea": parseInt(MB7Form.value.totalArea) ? parseInt(MB7Form.value.totalArea) : 0,
      "uploadAadhar": "aadhar.jpg",
      "uploadCancelCheque": "cheque.jpg",
      "uploadPan": "pan.jpg"
    }
    this.formSubmitted = false;
    if (MB7Form.valid === false) {
      this.formSubmitted = true;
    }
    else {
      this.b1service.addmb7(check).subscribe((response: any) => {
        if (response.status == "s") {
          this.alert.showSuccess(response.userDisplayMesg, 'Success');
          this.router.navigate(['/licencemgnt/brewery-winery']);
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
      this.MB7Form.patchValue({
        distilleryPinCode: this.MB7Form.value.applicantPinCode,
        distilleryState: this.MB7Form.value.applicantState,
        distilleryDistrict: this.MB7Form.value.applicantDistrict,
        distilleryTehsil: this.MB7Form.value.applicantTehsil,
        distilleryUrbanOrRural: this.MB7Form.value.applicantUrbanOrRural,
        distilleryMunicipalArea: this.MB7Form.value.applicantMunicipalArea,
        distilleryWard: this.MB7Form.value.applicantWard,
        distilleryBlock: this.MB7Form.value.applicantBlock,
        distilleryVillage: this.MB7Form.value.applicantVillage,
        distilleryPoliceStation: this.MB7Form.value.applicantPoliceStation,
        distilleryLocality: this.MB7Form.value.applicantLocality,
        distilleryStreet: this.MB7Form.value.applicantStreet,
      });
      console.log(this.MB7Form.value.barUrbanOrRural);
      this.getdistillerydistrict1(this.MB7Form.value.applicantState);
      if (this.MB7Form.value.distilleryUrbanOrRural == 1) {
        this.distilleryUrbanOrRural = true;
        this.distilleryrural = false;
      }
      else if (this.MB7Form.value.distilleryUrbanOrRural == 2) {
        this.distilleryrural = true;
        this.distilleryUrbanOrRural = false;
      }
    }
    else if (this.urbancheck == false) {
      this.MB7Form.patchValue({
        distilleryPinCode: '',
        distilleryState: '',
        distilleryDistrict: '',
        distilleryTehsil: '',
        distilleryUrbanOrRural: '',
        distilleryMunicipalArea: '',
        distilleryWard: '',
        distilleryBlock: '',
        distilleryVillage: '',
        distilleryPoliceStation: '',
        distilleryLocality: '',
        distilleryStreet: '',
      });
      if (this.MB7Form.value.distilleryUrbanOrRural == 1) {
        this.distilleryUrbanOrRural = true;
        this.distilleryrural = false;
      }
      else if (this.MB7Form.value.distilleryUrbanOrRural == 2) {
        this.distilleryrural = true;
        this.distilleryUrbanOrRural = false;
      }
    }
  }
  checkboxchange1(event) {
    console.log(event.target.checked)
    this.urbancheck = event.target.checked;
    if (this.urbancheck == true) {
      this.MB7Form.patchValue({
        barPinCode: this.MB7Form.value.applicantPinCode,
        barState: this.MB7Form.value.applicantState,
        barDistrict: this.MB7Form.value.applicantDistrict,
        barTehsil: this.MB7Form.value.applicantTehsil,
        barUrbanOrRural: this.MB7Form.value.applicantUrbanOrRural,
        barMunicipalArea: this.MB7Form.value.applicantMunicipalArea,
        barWard: this.MB7Form.value.applicantWard,
        barBlock: this.MB7Form.value.applicantBlock,
        barVillage: this.MB7Form.value.applicantVillage,
        barPoliceStation: this.MB7Form.value.applicantPoliceStation,
        barLocality: this.MB7Form.value.applicantLocality,
        barStreet: this.MB7Form.value.applicantStreet,
      });
      this.getbardistrict1(this.MB7Form.value.applicantState)
      console.log(this.MB7Form.value.barUrbanOrRural);

      if (this.MB7Form.value.barUrbanOrRural == 1) {
        this.barUrbanOrRural = true;
        this.barrural = false;
      }
      else if (this.MB7Form.value.barUrbanOrRural == 2) {
        this.barrural = true;
        this.barUrbanOrRural = false;
      }
    }
    else if (this.urbancheck == false) {
      this.MB7Form.patchValue({
        barPinCode: '',
        barState: '',
        barDistrict: '',
        barTehsil: '',
        barUrbanOrRural: '',
        barMunicipalArea: '',
        barWard: '',
        barBlock: '',
        barVillage: '',
        barPoliceStation: '',
        barLocality: '',
        barStreet: '',
      });
      if (this.MB7Form.value.barUrbanOrRural == 1) {
        this.barUrbanOrRural = true;
        this.barrural = false;
      }
      else if (this.MB7Form.value.barUrbanOrRural == 2) {
        this.barrural = true;
        this.barUrbanOrRural = false;
      }
    }
  }
  checkboxchange2(event) {
    console.log(event.target.checked)
    this.urbancheck = event.target.checked;
    if (this.urbancheck == true) {
      this.MB7Form.patchValue({
        smallBreweryPinCode: this.MB7Form.value.applicantPinCode,
        smallBreweryState: this.MB7Form.value.applicantState,
        smallBreweryDistrict: this.MB7Form.value.applicantDistrict,
        smallBreweryTehsil: this.MB7Form.value.applicantTehsil,
        smallBreweryUrbanOrRural: this.MB7Form.value.applicantUrbanOrRural,
        smallBreweryMunicipalArea: this.MB7Form.value.applicantMunicipalArea,
        smallBreweryWard: this.MB7Form.value.applicantWard,
        smallBreweryBlock: this.MB7Form.value.applicantBlock,
        smallBreweryVillage: this.MB7Form.value.applicantVillage,
        smallBreweryPoliceStation: this.MB7Form.value.applicantPoliceStation,
        smallBreweryLocality: this.MB7Form.value.applicantLocality,
        smallBreweryStreet: this.MB7Form.value.applicantStreet,
      });
      this.getbrewerydistrict1(this.MB7Form.value.applicantState)
      console.log(this.MB7Form.value.barUrbanOrRural);

      if (this.MB7Form.value.smallBreweryUrbanOrRural == 1) {
        this.smallBreweryUrbanOrRural = true;
        this.smallBreweryrural = false;
      }
      else if (this.MB7Form.value.smallBreweryUrbanOrRural == 2) {
        this.smallBreweryrural = true;
        this.smallBreweryUrbanOrRural = false;
      }
    }
    else if (this.urbancheck == false) {
      this.MB7Form.patchValue({
        smallBreweryPinCode: '',
        smallBreweryState: '',
        smallBreweryDistrict: '',
        smallBreweryTehsil: '',
        smallBreweryUrbanOrRural: '',
        smallBreweryMunicipalArea: '',
        smallBreweryWard: '',
        smallBreweryBlock: '',
        smallBreweryVillage: '',
        smallBreweryPoliceStation: '',
        smallBreweryLocality: '',
        smallBreweryStreet: '',
      });
      if (this.MB7Form.value.smallBreweryUrbanOrRural == 1) {
        this.smallBreweryUrbanOrRural = true;
        this.smallBreweryrural = false;
      }
      else if (this.MB7Form.value.smallBreweryUrbanOrRural == 2) {
        this.smallBreweryrural = true;
        this.smallBreweryUrbanOrRural = false;
      }
    }
  }
  urban($event) {
    console.log($event.target.value);
    if ($event.target.value == 1) {
      this.headurban = true;
      this.headrural = false;
      this.MB7Form.controls['applicantMunicipalArea'].setValidators([Validators.required]);
      this.MB7Form.controls['applicantMunicipalArea'].updateValueAndValidity();
      this.MB7Form.controls['applicantBlock'].setValidators([]);
      this.MB7Form.controls['applicantBlock'].updateValueAndValidity();
      this.MB7Form.controls['applicantVillage'].setValidators([]);
      this.MB7Form.controls['applicantVillage'].updateValueAndValidity();
      // this.formSubmitted = true;
    }
    else if ($event.target.value == 2) {
      this.headrural = true;
      this.headurban = false;
      this.MB7Form.controls['applicantBlock'].setValidators([Validators.required]);
      this.MB7Form.controls['applicantBlock'].updateValueAndValidity();
      this.MB7Form.controls['applicantVillage'].setValidators([Validators.required]);
      this.MB7Form.controls['applicantVillage'].updateValueAndValidity();
      this.MB7Form.controls['applicantMunicipalArea'].setValidators([]);
      this.MB7Form.controls['applicantMunicipalArea'].updateValueAndValidity();
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
      this.distilleryUrbanOrRural = true;
      this.distilleryrural = false;
      this.MB7Form.controls['distilleryMunicipalArea'].setValidators([Validators.required]);
      this.MB7Form.controls['distilleryMunicipalArea'].updateValueAndValidity();
      this.MB7Form.controls['distilleryBlock'].setValidators([]);
      this.MB7Form.controls['distilleryBlock'].updateValueAndValidity();
      this.MB7Form.controls['distilleryVillage'].setValidators([]);
      this.MB7Form.controls['distilleryVillage'].updateValueAndValidity();
    }
    else if (urbanshow == 2) {
      this.distilleryrural = true;
      this.distilleryUrbanOrRural = false;
      this.MB7Form.controls['distilleryMunicipalArea'].setValidators([]);
      this.MB7Form.controls['distilleryMunicipalArea'].updateValueAndValidity();
      this.MB7Form.controls['distilleryBlock'].setValidators([Validators.required]);
      this.MB7Form.controls['distilleryBlock'].updateValueAndValidity();
      this.MB7Form.controls['distilleryVillage'].setValidators([Validators.required]);
      this.MB7Form.controls['distilleryVillage'].updateValueAndValidity();
    }
    else {
      this.distilleryrural = false;
      this.distilleryUrbanOrRural = false;
    }
    // }


  }
  show2($event) {
    console.log(this.urbancheck)
    let urbanshow = $event.target.value;
    // if(this.urbancheck == false){
    console.log($event.target.value);
    if (urbanshow == 1) {
      this.barUrbanOrRural = true;
      this.barrural = false;
      this.MB7Form.controls['barMunicipalArea'].setValidators([Validators.required]);
      this.MB7Form.controls['barMunicipalArea'].updateValueAndValidity();
      this.MB7Form.controls['barBlock'].setValidators([]);
      this.MB7Form.controls['barBlock'].updateValueAndValidity();
      this.MB7Form.controls['barVillage'].setValidators([]);
      this.MB7Form.controls['barVillage'].updateValueAndValidity();
    }
    else if (urbanshow == 2) {
      this.barrural = true;
      this.barUrbanOrRural = false;
      this.MB7Form.controls['barMunicipalArea'].setValidators([]);
      this.MB7Form.controls['barMunicipalArea'].updateValueAndValidity();
      this.MB7Form.controls['barBlock'].setValidators([Validators.required]);
      this.MB7Form.controls['barBlock'].updateValueAndValidity();
      this.MB7Form.controls['barVillage'].setValidators([Validators.required]);
      this.MB7Form.controls['barVillage'].updateValueAndValidity();
    }
    else {
      this.barrural = false;
      this.barUrbanOrRural = false;
    }
    // }


  }
  show3($event) {
    console.log(this.urbancheck)
    let urbanshow = $event.target.value;
    // if(this.urbancheck == false){
    console.log($event.target.value);
    if (urbanshow == 1) {
      this.smallBreweryUrbanOrRural = true;
      this.smallBreweryrural = false;
      this.MB7Form.controls['smallBreweryMunicipalArea'].setValidators([Validators.required]);
      this.MB7Form.controls['smallBreweryMunicipalArea'].updateValueAndValidity();
      this.MB7Form.controls['smallBreweryBlock'].setValidators([]);
      this.MB7Form.controls['smallBreweryBlock'].updateValueAndValidity();
      this.MB7Form.controls['smallBreweryVillage'].setValidators([]);
      this.MB7Form.controls['smallBreweryVillage'].updateValueAndValidity();
    }
    else if (urbanshow == 2) {
      this.smallBreweryrural = true;
      this.smallBreweryUrbanOrRural = false;
      this.MB7Form.controls['smallBreweryMunicipalArea'].setValidators([]);
      this.MB7Form.controls['smallBreweryMunicipalArea'].updateValueAndValidity();
      this.MB7Form.controls['smallBreweryBlock'].setValidators([Validators.required]);
      this.MB7Form.controls['blosmallBreweryBlockck'].updateValueAndValidity();
      this.MB7Form.controls['villsmallBreweryVillageage'].setValidators([Validators.required]);
      this.MB7Form.controls['villsmallBreweryVillageage'].updateValueAndValidity();
    }
    else {
      this.smallBreweryrural = false;
      this.smallBreweryUrbanOrRural = false;
    }
    // }


  }
  gender1(event) {
    let check = event.target.value;
    if (check == "Mr.") {
      this.MB7Form.patchValue({
        gender: "Male",
      });
    } else if (check == "Miss." || check == "Mrs.") {
      this.MB7Form.patchValue({
        gender: "Female",
      });
    }
  }
  navigate(form) {
    sessionStorage.setItem('formdata', JSON.stringify(form.value));
    this.router.navigate(['/licencemgnt/brewery-winery/mb7/view'])
    // /licencemgnt/brewery-winery/mb4/view
  }
}
