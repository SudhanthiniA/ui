import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertService, DistrictMasterService, StatemasterService } from '@app/services';
import { formatDate } from '@angular/common';
import { Newlicencev2Service } from '@app/services/new-licence/newlicence-v2.service';
import * as moment from 'moment';

interface Post {
  startDate: Date;
}

@Component({
  selector: 'app-v2',
  templateUrl: './v2.component.html',
  styleUrls: ['./v2.component.scss']
})
export class V2Component implements OnInit {

  maxDate = moment(new Date()).format('YYYY-MM-DD');
  premisedistricts: any;

  numberOnly(event): boolean {
    const charCode = (event.which) ? event.which : event.keyCode;
    if (charCode > 31 && (charCode < 48 || charCode > 57)) {
      return false;
    }
    return true;

  }
  V2Form:FormGroup;
  formSubmitted = false;
  states:any;
  districts:any;
  premisestates:any;
  premisesdistricts:any;
  urbancheck:any;
  headrural = false;
  headurban = false;
  premisesurban = false;
  premisesrural = false;
  registrationObj: any = JSON.parse(sessionStorage.getItem('formdata'));

  constructor(
   private district: DistrictMasterService,
    private formBuilder: FormBuilder,
    private router: Router,
    private alert: AlertService,
    private state: StatemasterService,
    private v2service:Newlicencev2Service ,
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
    this.getpremisesstate();
  }
  createFormGrp() {
    this.V2Form = this.formBuilder.group({
      financialYear:['2020-2021'],
      dateOfApplication: [formatDate(this.post.startDate, 'yyyy-MM-dd', 'en')],
      saluatation : ['', Validators.required],
      firstName :['', Validators.required],
      middleName  :[''],
      lastName :['', Validators.required],
      mobileNumber :[''],
      emailId :['',[Validators.required, Validators.email,Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]],
      aadhaarNumber :[''],
      gender :['', Validators.required],
      dateOfBirth :['', Validators.required],
      panNumber :[''],
      // fathersName :['', Validators.required],
      applicantCountry :['INDIA'],
      applicantPinCode :[''],
      applicantState :['', Validators.required],
      applicantDistrict :['', Validators.required],
      applicantTehsil :['', Validators.required],
      applicantUrban :['', Validators.required],
      applicantMunicipalArea :[''],
      applicantWard :[''],
      applicantBlock :[''],
      applicantVillage :[''],
      applicantPoliceStation :['', Validators.required],
      applicantLocality :['', Validators.required],
      applicantStreet :['', Validators.required],
      breweryPremisesCountry :['INDIA'],
      breweryPremisesPinCode :[''],
      breweryPremisesState :['', Validators.required],
      breweryPremisesDistrict :['', Validators.required],
      breweryPremisesTehsil :['', Validators.required],
      breweryPremisesUrban :['', Validators.required],
      breweryPremisesMunicipalArea :[''],
      breweryPremisesWard :[''],
      breweryPremisesBlock :[''],
      breweryPremisesVillage :[''],
      breweryPremisesPoliceStation :['', Validators.required],
      breweryPremisesLocality :['', Validators.required],
      breweryPremisesStreet :['', Validators.required],
      bankAccountNumber :['', Validators.required],
      bankIFSC :['', Validators.required],
      bankName :['', Validators.required],
      applicationFees :[''],
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
  getpremisesstate(){
    this.state.getState().subscribe((responceData: any) => {
      this.premisestates = responceData.data;
    }); 
  }
  
  
  add(V2Form){
    console.log(V2Form);
    let params = {
      financialYear: V2Form.value.financialYear,
      dateOfApplication: V2Form.value.dateOfApplication,
      saluatation : V2Form.value.saluatation,
      firstName :V2Form.value.firstName,
      middleName  :V2Form.value.middleName,
      lastName :V2Form.value.lastName,
      mobileNumber :parseInt(V2Form.value.mobileNumber),
      emailId :V2Form.value.emailId,
      aadhaarNumber :parseInt(V2Form.value.aadhaarNumber),
      gender :V2Form.value.gender,
      dateOfBirth :V2Form.value.dateOfBirth,
      panNumber :V2Form.value.panNumber,
      // fathersName :V2Form.value.fathersName,
      itr :V2Form.value.itr,
      reason :V2Form.value.reason,
      applicantCountry :V2Form.value.applicantCountry,
      applicantPinCode :V2Form.value.applicantPinCode,
      applicantState :parseInt(V2Form.value.applicantState)?parseInt(V2Form.value.applicantState):0,
      applicantDistrict :parseInt(V2Form.value.applicantDistrict)?parseInt(V2Form.value.applicantDistrict):0,
      applicantTehsil :parseInt(V2Form.value.applicantTehsil)?parseInt(V2Form.value.applicantTehsil):0,
      applicantUrban :parseInt(V2Form.value.applicantUrban)?parseInt(V2Form.value.applicantUrban):0,
      applicantMunicipalArea :parseInt(V2Form.value.applicantMunicipalArea)?parseInt(V2Form.value.applicantMunicipalArea):0,
      applicantWard :V2Form.value.applicantWard,
      applicantBlock :V2Form.value.applicantBlock,
      applicantVillage :parseInt(V2Form.value.applicantVillage)?parseInt(V2Form.value.applicantVillage):0,
      applicantPoliceStation :parseInt(V2Form.value.applicantPoliceStation)?parseInt(V2Form.value.applicantPoliceStation):0,
      applicantLocality :V2Form.value.applicantLocality,
      applicantStreet :V2Form.value.applicantStreet,
      breweryPremisesCountry :V2Form.value.breweryPremisesCountry,
      breweryPremisesPinCode :V2Form.value.breweryPremisesPinCode,
      breweryPremisesState :parseInt(V2Form.value.breweryPremisesState)?parseInt(V2Form.value.breweryPremisesState):0,
      breweryPremisesDistrict :parseInt(V2Form.value.breweryPremisesDistrict)?parseInt(V2Form.value.breweryPremisesDistrict):0,
      breweryPremisesTehsil :parseInt(V2Form.value.breweryPremisesTehsil)?parseInt(V2Form.value.breweryPremisesTehsil):0,
      breweryPremisesUrban :parseInt(V2Form.value.breweryPremisesUrban)?parseInt(V2Form.value.breweryPremisesUrban):0,
      breweryPremisesMunicipalArea :parseInt(V2Form.value.breweryPremisesMunicipalArea)?parseInt(V2Form.value.breweryPremisesMunicipalArea):0,
      breweryPremisesWard :V2Form.value.breweryPremisesWard,
      breweryPremisesBlock :V2Form.value.breweryPremisesBlock,
      breweryPremisesVillage :parseInt(V2Form.value.breweryPremisesVillage)?parseInt(V2Form.value.breweryPremisesVillage):0,
      breweryPremisesPoliceStation :parseInt(V2Form.value.breweryPremisesPoliceStation)?parseInt(V2Form.value.breweryPremisesPoliceStation):0,
      breweryPremisesLocality :V2Form.value.breweryPremisesLocality,
      breweryPremisesStreet :V2Form.value.breweryPremisesStreet,
      bankAccountNumber :parseInt(V2Form.value.bankAccountNumber),
      bankIFSC :V2Form.value.bankIFSC,
      bankName : parseInt(V2Form.valuebankName)?parseInt(V2Form.valuebankName):0,
      applicationFees :parseInt(V2Form.value.applicationFees),
    }
    this.formSubmitted = false;
    if (V2Form.valid === false) {
      this.formSubmitted = true;
    }
    else {
      this.v2service.addv2(params).subscribe((response: any) => {
      if(response.status == "s"){
      this.alert.showSuccess(response.userDisplayMesg, 'Success');
      }
else{
  this.alert.showError(response['userDisplayMesg'], 'error')
}
      })
    }
  }
  checkboxchange(event) {
    this.urbancheck = event.target.checked;
    console.log(this.urbancheck)
    if (this.urbancheck == true) { 
      this.V2Form.patchValue({
        breweryPremisesPinCode : this.V2Form.value.applicantPinCode,
        breweryPremisesState : this.V2Form.value.applicantState,
        breweryPremisesDistrict : this.V2Form.value.applicantDistrict,
        breweryPremisesTehsil : this.V2Form.value.applicantTehsil,
        breweryPremisesUrban : this.V2Form.value.applicantUrban,
        breweryPremisesMunicipalArea : this.V2Form.value.applicantMunicipalArea,
        breweryPremisesWard : this.V2Form.value.applicantWard,
        breweryPremisesBlock : this.V2Form.value.applicantBlock,
        breweryPremisesVillage : this.V2Form.value.applicantVillage,
        breweryPremisesPoliceStation : this.V2Form.value.applicantPoliceStation,
        breweryPremisesLocality : this.V2Form.value.applicantLocality,
        breweryPremisesStreet : this.V2Form.value.applicantStreet,
            });
             this.premisedistricts(this.V2Form.value.applicantState)
      console.log(this.V2Form.value.premisesUrban);

      
      if(this.V2Form.value.premisesUrban == 1){
        this.premisesurban = true;
        this.premisesrural = false;
      }
      else if(this.V2Form.value.premisesUrban == 2){
        this.premisesrural = true;
        this.premisesurban = false;
      }
    }
    else if (this.urbancheck == false) {
      this.V2Form.patchValue({
        breweryPremisesPinCode : '',
        breweryPremisesState : '',
        breweryPremisesDistrict : '',
        breweryPremisesTehsil : '',
        breweryPremisesUrban : '',
        breweryPremisesMunicipalArea : '',
        breweryPremisesWard : '',
        breweryPremisesBlock : '',
        breweryPremisesVillage : '',
        breweryPremisesPoliceStation : '',
        breweryPremisesLocality : '',
        breweryPremisesStreet : '',
      });
      if(this.V2Form.value.premisesUrban == 1){
        this.premisesurban = true;
        this.premisesrural = false;
      }
      else if(this.V2Form.value.premisesUrban == 2){
        this.premisesrural = true;
        this.premisesurban = false;
      }
    }
  }
  setData() {
    this.V2Form.patchValue(this.registrationObj);
    this.getdistrict1(this.V2Form.value.applicantState);
    
  }
  getdistrict1(event) {
    let id = event;
    this.district.getDistrictsByStateid(id).subscribe((responceData: any) => {
      this.districts = responceData.data;
    });
  }
  
  urban($event){
    console.log($event.target.value);
    if($event.target.value == 1){
    this.headurban = true;
    this.headrural = false;
    this.V2Form.controls['applicantMunicipalArea'].setValidators([Validators.required]);
    this.V2Form.controls['applicantMunicipalArea'].updateValueAndValidity();
    this.V2Form.controls['applicantBlock'].setValidators([]);
    this.V2Form.controls['applicantBlock'].updateValueAndValidity();
    this.V2Form.controls['applicantVillage'].setValidators([]);
    this.V2Form.controls['applicantVillage'].updateValueAndValidity();
    // this.formSubmitted = true;
    }
    else if($event.target.value == 2){
      this.headrural = true;
      this.headurban = false;
      this.V2Form.controls['applicantBlock'].setValidators([Validators.required]);
      this.V2Form.controls['applicantBlock'].updateValueAndValidity();
      this.V2Form.controls['applicantVillage'].setValidators([Validators.required]);
      this.V2Form.controls['applicantVillage'].updateValueAndValidity();
      this.V2Form.controls['applicantMunicipalArea'].setValidators([]);
    this.V2Form.controls['applicantMunicipalArea'].updateValueAndValidity();
      // this.formSubmitted = true;
    }
    else{
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
         this.V2Form.controls['breweryPremisesMunicipalArea'].setValidators([Validators.required]);
        this.V2Form.controls['breweryPremisesMunicipalArea'].updateValueAndValidity();
        this.V2Form.controls['breweryPremisesBlock'].setValidators([]);
        this.V2Form.controls['breweryPremisesBlock'].updateValueAndValidity();
        this.V2Form.controls['breweryPremisesVillage'].setValidators([]);
        this.V2Form.controls['breweryPremisesVillage'].updateValueAndValidity();
          }
      else if (urbanshow == 2) {
        this.premisesrural = true;
        this.premisesurban = false;
        this.V2Form.controls['breweryPremisesMunicipalArea'].setValidators([]);
        this.V2Form.controls['breweryPremisesMunicipalArea'].updateValueAndValidity();
         this.V2Form.controls['breweryPremisesBlock'].setValidators([Validators.required]);
        this.V2Form.controls['breweryPremisesBlock'].updateValueAndValidity();
        this.V2Form.controls['breweryPremisesVillage'].setValidators([Validators.required]);
        this.V2Form.controls['breweryPremisesVillage'].updateValueAndValidity();
      }
      else {
        this.premisesrural = false;
        this.premisesurban = false;
      }
    // }
  
  
    }
    navigate(form){
      sessionStorage.setItem('formdata', JSON.stringify(form.value));
      this.router.navigate(['/licencemgnt/brewery-winery/v2/view'])
    }
   
}
