import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { StatemasterService, DistrictMasterService, AlertService } from '@app/services';
import { Router } from '@angular/router';
import { formatDate } from '@angular/common';
import { NewlicenceB4Service } from '@app/services/new-licence/newlicence-b4.service';
import * as moment from 'moment';

interface Post {
  startDate: Date;
}
@Component({
  selector: 'app-mb4',
  templateUrl: './mb4.component.html',
  styleUrls: ['./mb4.component.scss']
})
export class Mb4Component implements OnInit {
  MB4Form:FormGroup;
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
  maxDate = moment(new Date()).format('YYYY-MM-DD');

  constructor(
    private state: StatemasterService,
    private district: DistrictMasterService,
    private formBuilder: FormBuilder,
    private router: Router,
    private alert: AlertService,
    private b4service: NewlicenceB4Service,
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
  
  }
  setData() {
    this.MB4Form.patchValue(this.registrationObj);
     this.getdistrict1(this.MB4Form.value.applicantState);
  }

  getdistrict1(event) {
    let id = event;
    this.district.getDistrictsByStateid(id).subscribe((responceData: any) => {
      this.districts = responceData.data;
    });
  }
  numberOnly(event): boolean {
    const charCode = (event.which) ? event.which : event.keyCode;
    if (charCode > 31 && (charCode < 48 || charCode > 57)) {
      return false;
    }
    return true;

  }
  createFormGrp() {
    this.MB4Form = this.formBuilder.group({
      financialYear:[formatDate(this.post.startDate, 'yyyy-MM-dd', 'en')],
      dateOfApplication: [formatDate(this.post.startDate, 'yyyy-MM-dd', 'en')],
      salutation : [''],
      firstName :[''],
      middleName  :[''],
      lastName :[''],
      mobileNumber :[''],
      emailId :['',[Validators.required, Validators.email,Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]],
      aadhaarNumber :[''],
      gender :[''],
      dateOfBirth :[''],
      panNumber :[''],
      country :['INDIA'],
      applicantPinCode :[''],
      applicantState :[''],
      applicantDistrict :[''],
      applicantTehsil :[''],
      applicantUrbanOrRural :[''],
      applicantMunicipalArea :[''],
      applicantWard :[''],
      applicantBlock :[''],
      applicantVillage :[''],
      applicantPoliceStation :[''],
      applicantLocality :[''],
      applicantStreet :[''],
      bankAccountNumber :[''],
      bankIFSC :[''],
      bankName :[''],
      applicationFees :[''],
      photo:[''],
      uploadCancelCheque:[''],
      uploadPan:[''],
      uploadAadhar:['']
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
  
  add(MB4Form){
    console.log(MB4Form);
    let params = {
      "financialYear":this.MB4Form.value.financialYear,
      "dateOfApplication": this.MB4Form.value.dateOfApplication,
      "firstName" :this.MB4Form.value.firstName,
      "middleName"  :this.MB4Form.value.middleName,
      "lastName" :this.MB4Form.value.lastName,
      "mobileNumber" :this.MB4Form.value.mobileNumber,
      "emailId" :this.MB4Form.value.emailId,
      "aadhaarNumber" :parseInt(this.MB4Form.value.aadhaarNumber),
      "gender" :this.MB4Form.value.gender,
      "dateOfBirth" :this.MB4Form.value.dateOfBirth,
      "panNumber" :parseInt(this.MB4Form.value.panNumber),
      "country" :this.MB4Form.value.country,
      "applicantPinCode" :this.MB4Form.value.applicantPinCode,
      "applicantVillage" :parseInt(this.MB4Form.value.applicantVillage)? this.MB4Form.value.applicantVillage : null,
      "applicantUrbanOrRural" :parseInt(this.MB4Form.value.applicantUrbanOrRural),
      "applicantState" :parseInt(this.MB4Form.value.applicantState),
      "applicantLocality":this.MB4Form.value.applicantLocality,
      "uploadPan":this.MB4Form.value.uploadPan,
      "uploadAadhar":this.MB4Form.value.uploadAadhar,
      "uploadCancelCheque":this.MB4Form.value.uploadCancelCheque,
      "photo":this.MB4Form.value.photo,
      "applicationFees":parseInt(this.MB4Form.value.applicationFees),
      "applicantStreet":this.MB4Form.value.applicantStreet,
      "applicantDistrict":parseInt(this.MB4Form.value.applicantDistrict),
      "bankName":this.MB4Form.value.bankName,
      "bankIFSC":this.MB4Form.value.bankIFSC,
      "applicantTehsil":parseInt(this.MB4Form.value.applicantTehsil),
      "bankAccountNumber":parseInt(this.MB4Form.value.bankAccountNumber),
      "applicantBlock":parseInt(this.MB4Form.value.applicantBlock)? this.MB4Form.value.applicantBlock : null,
      "applicantWard":parseInt(this.MB4Form.value.applicantWard)? this.MB4Form.value.applicantWard : null,
      "applicantMunicipalArea":parseInt(this.MB4Form.value.applicantMunicipalArea)? this.MB4Form.value.applicantMunicipalArea : null,
      "applicantPoliceStation":parseInt(this.MB4Form.value.applicantPoliceStation),
      "salutation":this.MB4Form.value.salutation,
      "status":true,
     "entityId":0
 }  
    this.formSubmitted = false;
    if (MB4Form.valid === false) {
      this.formSubmitted = true;
    }
    else {
      this.b4service.addmb4(params).subscribe((response: any) => {
       
        if (response.status == "s") {
          this.alert.showSuccess(response.userDisplayMesg, 'Success');
          this.MB4Form.reset();
           }
          
            else {
              this.alert.showError(response['userDisplayMesg'], 'error')
            }
      })
    }
  }
 
urban($event){
    console.log($event.target.value);
    if($event.target.value == 1){
    this.headurban = true;
    this.headrural = false;
    this.MB4Form.controls['applicantMunicipalArea'].setValidators([Validators.required]);
    this.MB4Form.controls['applicantMunicipalArea'].updateValueAndValidity();
    this.MB4Form.controls['applicantBlock'].setValidators([]);
    this.MB4Form.controls['applicantBlock'].updateValueAndValidity();
    this.MB4Form.controls['applicantVillage'].setValidators([]);
    this.MB4Form.controls['applicantVillage'].updateValueAndValidity();
    // this.formSubmitted = true;
    }
    else if($event.target.value == 2){
      this.headrural = true;
      this.headurban = false;
      this.MB4Form.controls['applicantBlock'].setValidators([Validators.required]);
      this.MB4Form.controls['applicantBlock'].updateValueAndValidity();
      this.MB4Form.controls['applicantVillage'].setValidators([Validators.required]);
      this.MB4Form.controls['applicantVillage'].updateValueAndValidity();
      this.MB4Form.controls['applicantMunicipalArea'].setValidators([]);
    this.MB4Form.controls['applicantMunicipalArea'].updateValueAndValidity();
      // this.formSubmitted = true;
    }
    else{
      this.headrural = false;
      this.headurban = false;
    }
    }
   
    navigate(form){
      sessionStorage.setItem('formdata', JSON.stringify(form.value));
      this.router.navigate(['/licencemgnt/brewery-winery/mb4/view'])
    }
}

