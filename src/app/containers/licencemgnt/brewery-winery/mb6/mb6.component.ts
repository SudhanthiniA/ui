import { Component, OnInit } from '@angular/core';
import { formatDate } from '@angular/common';
import { StatemasterService, DistrictMasterService, AlertService } from '@app/services';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { NewlicenceB6Service } from '@app/services/new-licence/newlicence-b6.service';
import * as moment from 'moment';
interface Post {
  startDate: Date;
}
@Component({
  selector: 'app-mb6',
  templateUrl: './mb6.component.html',
  styleUrls: ['./mb6.component.scss']
})
export class Mb6Component implements OnInit {
  MB6Form: FormGroup;
  formSubmitted = false;
  states: any;
  districts: any;
  premisestates: any;
  premisesdistricts: any;
  urbancheck: any;
  headrural = false;
  headurban = false;
  premisesurban = false;
  premisesrural = false;
  registrationObj: any = JSON.parse(sessionStorage.getItem('formdata'));

  constructor(
    private state: StatemasterService,
    private district: DistrictMasterService,
    private formBuilder: FormBuilder,
    private router: Router,
    private alert: AlertService,
    private b6service: NewlicenceB6Service,
  ) { }
  post: Post = {
    startDate: new Date(Date.now())
  }
  maxDate = moment(new Date()).format('YYYY-MM-DD');
  ngOnInit() {
    this.createFormGrp();
    if (this.registrationObj) {
      this.setData();
    }
    this.getstate();
  
  }
  createFormGrp() {
    this.MB6Form = this.formBuilder.group({
      financialYear:['2020-2021'],
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
      uploadAadhar:[''],
      amount:['']
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
  
  setData() {
    this.MB6Form.patchValue(this.registrationObj);
    this.getdistrict1(this.MB6Form.value.applicantState);
  }

  getdistrict1(event) {
    let id = event;
    this.district.getDistrictsByStateid(id).subscribe((responceData: any) => {
      this.districts = responceData.data;
    });
  }
  add(MB6Form){
    console.log(MB6Form);
    let params = {
      "financialYear":this.MB6Form.value.financialYear,
      "dateOfApplication": this.MB6Form.value.dateOfApplication,
      "firstName" :this.MB6Form.value.firstName,
      "middleName"  :this.MB6Form.value.middleName,
      "lastName" :this.MB6Form.value.lastName,
      "mobileNumber" :parseInt(this.MB6Form.value.mobileNumber),
      "emailId" :this.MB6Form.value.emailId,
      "aadhaarNumber" :parseInt(this.MB6Form.value.aadhaarNumber),
      "gender" :this.MB6Form.value.gender,
      "dateOfBirth" :this.MB6Form.value.dateOfBirth,
      "panNumber" :this.MB6Form.value.panNumber,
      "country" :this.MB6Form.value.country,
      "applicantPinCode" :this.MB6Form.value.applicantPinCode,
      "applicantVillage" :parseInt(this.MB6Form.value.applicantVillage)? this.MB6Form.value.applicantVillage : null,
      "applicantUrbanOrRural" :parseInt(this.MB6Form.value.applicantUrbanOrRural),
      "applicantState" :parseInt(this.MB6Form.value.applicantState),
      "applicantLocality":this.MB6Form.value.applicantLocality,
      "uploadPan":this.MB6Form.value.uploadPan,
      "uploadAadhar":this.MB6Form.value.uploadAadhar,
      "uploadCancelCheque":this.MB6Form.value.uploadCancelCheque,
      "photo":this.MB6Form.value.photo,
      "applicationFees":parseInt(this.MB6Form.value.applicationFees),
      "applicantStreet":this.MB6Form.value.applicantStreet,
      "applicantDistrict":parseInt(this.MB6Form.value.applicantDistrict),
      "bankName":this.MB6Form.value.bankName,
      "bankIFSC":this.MB6Form.value.bankIFSC,
      "applicantTehsil":parseInt(this.MB6Form.value.applicantTehsil),
      "bankAccountNumber":parseInt(this.MB6Form.value.bankAccountNumber),
      "applicantBlock":parseInt(this.MB6Form.value.applicantBlock)? this.MB6Form.value.applicantBlock : null,
      "applicantWard":parseInt(this.MB6Form.value.applicantWard)? this.MB6Form.value.applicantWard : null,
      "applicantMunicipalArea":parseInt(this.MB6Form.value.applicantMunicipalArea)? this.MB6Form.value.applicantMunicipalArea : null,
      "applicantPoliceStation":parseInt(this.MB6Form.value.applicantPoliceStation),
      "salutation":this.MB6Form.value.salutation,
      "amount":this.MB6Form.value.bankName,
      "status":true,
     "entityId":0
 }  
    this.formSubmitted = false;
    if (MB6Form.valid === false) {
      this.formSubmitted = true;
    }
    else {
      this.b6service.addmb6(params).subscribe((response: any) => {
       
        if (response.status == "s") {
          this.alert.showSuccess(response.userDisplayMesg, 'Success');
          this.MB6Form.reset();
           }
          
            else {
              this.alert.showError(response['userDisplayMesg'], 'error')
            }
      })
    }
  }
  numberOnly(event): boolean {
    const charCode = (event.which) ? event.which : event.keyCode;
    if (charCode > 31 && (charCode < 48 || charCode > 57)) {
      return false;
    }
    return true;

  }
urban($event){
    console.log($event.target.value);
    if($event.target.value == 1){
    this.headurban = true;
    this.headrural = false;
    this.MB6Form.controls['applicantMunicipalArea'].setValidators([Validators.required]);
    this.MB6Form.controls['applicantMunicipalArea'].updateValueAndValidity();
    this.MB6Form.controls['applicantBlock'].setValidators([]);
    this.MB6Form.controls['applicantBlock'].updateValueAndValidity();
    this.MB6Form.controls['applicantVillage'].setValidators([]);
    this.MB6Form.controls['applicantVillage'].updateValueAndValidity();
    // this.formSubmitted = true;
    }
    else if($event.target.value == 2){
      this.headrural = true;
      this.headurban = false;
      this.MB6Form.controls['applicantBlock'].setValidators([Validators.required]);
      this.MB6Form.controls['applicantBlock'].updateValueAndValidity();
      this.MB6Form.controls['applicantVillage'].setValidators([Validators.required]);
      this.MB6Form.controls['applicantVillage'].updateValueAndValidity();
      this.MB6Form.controls['applicantMunicipalArea'].setValidators([]);
    this.MB6Form.controls['applicantMunicipalArea'].updateValueAndValidity();
      // this.formSubmitted = true;
    }
    else{
      this.headrural = false;
      this.headurban = false;
    }
    }
   
    navigate(form){
      sessionStorage.setItem('formdata', JSON.stringify(form.value));
      this.router.navigate(['/licencemgnt/brewery-winery/mb6/view'])
    }
}
