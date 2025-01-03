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
  selector: 'app-mb5',
  templateUrl: './mb5.component.html',
  styleUrls: ['./mb5.component.scss']
})
export class Mb5Component implements OnInit {
  MB5Form:FormGroup;
  formSubmitted = false;
  states:any;
  districts:any;
  premisetates:any;
  premisedistricts:any;
  urbancheck:any;
  headrural = false;
  headurban = false;
  premiseurban = false;
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
    this.MB5Form.patchValue(this.registrationObj);
    this.getdistrict1(this.MB5Form.value.applicantState);
    this.getpremisedistrict1(this.MB5Form.value.applicantState)
  }
  createFormGrp() {
    this.MB5Form = this.formBuilder.group({
      financialYear:['2020-2021'],
      dateOfApplication: [formatDate(this.post.startDate, 'yyyy-MM-dd', 'en')],
      saluatation : ['', Validators.required],
      firstName :['', Validators.required],
      middleName  :[''],
      lastName :['', Validators.required],
      mobileNumber :['', Validators.required],
      emailId :['',[Validators.required,Validators.email,Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]],
      aadhaarNumber :['', Validators.required],
      gender :['', Validators.required],
      dateOfBirth :['', Validators.required],
      panNumber :['', Validators.required],
      country :['INDIA'],
      applicantPinCode :[''],
      applicantState :['', Validators.required],
      applicantDistrict :['', Validators.required],
      applicantTehsil :['', Validators.required],
      applicantUrbanOrRural :['', Validators.required],
      applicantMunicipalArea :[''],
      applicantWard :[''],
      applicantBlock :[''],
      applicantVillage :[''],
      applicantPoliceStation :['', Validators.required],
      applicantLocality :['', Validators.required],
      applicantStreet :['', Validators.required],
      premiseCountry :['INDIA'],
      premisePinCode :[''],
      premiseState :['', Validators.required],
      premiseDistrict :['', Validators.required],
      premiseTehsil :['', Validators.required],
      premiseUrban :['', Validators.required],
      premiseMunicipalArea :[''],
      premiseWard :[''],
      premiseBlock :[''],
      premiseVillage :[''],
      premisePoliceStation :['', Validators.required],
      premiseLocality :['', Validators.required],
      premiseStreet :['', Validators.required],
      bankAccountNumber :['', Validators.required],
      bankIFSC :['', Validators.required],
      bankName :['', Validators.required],
      applicationFees :['', Validators.required]
    });
  }
  numberOnly(event): boolean {
    const charCode = (event.which) ? event.which : event.keyCode;
    if (charCode > 31 && (charCode < 48 || charCode > 57)) {
      return false;
    }
    return true;

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
  getpremisestate(){
    this.state.getState().subscribe((responceData: any) => {
      this.premisetates = responceData.data;
    }); 
  }
  getpremisedistrict($event){
    let id = $event.target.value;
    this.district.getDistrictsByStateid(id).subscribe((responceData: any) => {
      this.premisedistricts = responceData.data;
    });
  }
  getpremisedistrict1(event){
    let id = event;
    this.district.getDistrictsByStateid(id).subscribe((responceData: any) => {
      this.premisedistricts = responceData.data;
    });
  }
  gender1(event){
    let check = event.target.value;
    if(check=="Mr."){
      this.MB5Form.patchValue({
        gender : "Male",
            });
    }else if( check=="Miss." || check=="Mrs."){
      this.MB5Form.patchValue({
        gender : "Female",
            });
    }
      }
  add(MB5Form){
    console.log(MB5Form);
    let params = {
      financialYear: MB5Form.value.financialYear,
      dateOfApplication: MB5Form.value.dateOfApplication,
      saluatation : MB5Form.value.saluatation,
      firstName :MB5Form.value.firstName,
      middleName  :MB5Form.value.middleName,
      lastName :MB5Form.value.lastName,
      mobileNumber :parseInt(MB5Form.value.mobileNumber),
      emailId :MB5Form.value.emailId,
      aadhaarNumber :parseInt(MB5Form.value.aadhaarNumber),
      gender :MB5Form.value.gender,
      dateOfBirth :MB5Form.value.dateOfBirth,
      panNumber :MB5Form.value.panNumber,
      country :MB5Form.value.country,
      applicantPinCode :parseInt(MB5Form.value.applicantPinCode),
      applicantState :parseInt(MB5Form.value.applicantState)?parseInt(MB5Form.value.applicantState):0,
      applicantDistrict :parseInt(MB5Form.value.applicantDistrict)?parseInt(MB5Form.value.applicantDistrict):0,
      applicantTehsil :parseInt(MB5Form.value.applicantTehsil)?parseInt(MB5Form.value.applicantTehsil):0,
      applicantUrbanOrRural :parseInt(MB5Form.value.applicantUrbanOrRural)?parseInt(MB5Form.value.applicantUrbanOrRural):0,
      applicantMunicipalArea :parseInt(MB5Form.value.applicantMunicipalArea)?parseInt(MB5Form.value.applicantMunicipalArea):0,
      applicantWard :MB5Form.value.applicantWard,
      applicantBlock :MB5Form.value.applicantBlock,
      applicantVillage :parseInt(MB5Form.value.applicantVillage)?parseInt(MB5Form.value.applicantVillage):0,
      applicantPoliceStation :parseInt(MB5Form.value.applicantPoliceStation)?parseInt(MB5Form.value.applicantPoliceStation):0,
      applicantLocality :MB5Form.value.applicantLocality,
      applicantStreet :MB5Form.value.applicantStreet,
      premiseCountry :MB5Form.value.premiseCountry,
      premisePinCode :parseInt(MB5Form.value.premisePinCode),
      premiseState :parseInt(MB5Form.value.premiseState)?parseInt(MB5Form.value.premiseState):0,
      premiseDistrict :parseInt(MB5Form.value.premiseDistrict)?parseInt(MB5Form.value.premiseDistrict):0,
      premiseTehsil :parseInt(MB5Form.value.premiseTehsil)?parseInt(MB5Form.value.premiseTehsil):0,
      premiseUrbanOrRural :parseInt(MB5Form.value.premiseUrbanOrRural)?parseInt(MB5Form.value.premiseUrbanOrRural):0,
      premiseMunicipalArea :parseInt(MB5Form.value.premiseMunicipalArea)?parseInt(MB5Form.value.premiseMunicipalArea):0,
      premiseWard :MB5Form.value.premiseWard,
      premiseBlock :MB5Form.value.premiseBlock,
      premiseVillage :parseInt(MB5Form.value.premiseVillage)?parseInt(MB5Form.value.premiseVillage):0,
      premisePoliceStation :parseInt(MB5Form.value.premisePoliceStation)?parseInt(MB5Form.value.premisePoliceStation):0,
      premiseLocality :MB5Form.value.premiseLocality,
      premiseStreet :MB5Form.value.premiseStreet,
      bankAccountNumber :parseInt(MB5Form.value.bankAccountNumber),
      bankIFSC :MB5Form.value.bankIFSC,
      bankName : parseInt(MB5Form.valuebankName)?parseInt(MB5Form.valuebankName):0,
      applicationFees :parseInt(MB5Form.value.applicationFees),
      uploadAadhar: "aadhar.jpg",
      uploadCancelCheque: "cheque.jpg",
      uploadPan: "pan.jpg",
      photo: "photo.jpg",
    }
    this.formSubmitted = false;
    if (MB5Form.valid === false) {
      this.formSubmitted = true;
    }
    else {
      this.b1service.addmb5(params).subscribe((response: any) => {
        if (response.status == "s") {
        this.alert.showSuccess(response.userDisplayMesg, 'Success');
        this.MB5Form.reset();
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
      this.MB5Form.patchValue({
        premisePinCode : this.MB5Form.value.applicantPinCode,
        premiseState : this.MB5Form.value.applicantState,
        premiseDistrict : this.MB5Form.value.applicantDistrict,
        premiseTehsil : this.MB5Form.value.applicantTehsil,
        premiseUrban : this.MB5Form.value.applicantUrbanOrRural,
        premiseMunicipalArea : this.MB5Form.value.applicantMunicipalArea,
        premiseWard : this.MB5Form.value.applicantWard,
        premiseBlock : this.MB5Form.value.applicantBlock,
        premiseVillage : this.MB5Form.value.applicantVillage,
        premisePoliceStation : this.MB5Form.value.applicantPoliceStation,
        premiseLocality : this.MB5Form.value.applicantLocality,
        premiseStreet : this.MB5Form.value.applicantStreet,
            });
            this.getpremisedistrict1(this.MB5Form.value.applicantState)
      console.log(this.MB5Form.value.premiseUrban);
      
      if(this.MB5Form.value.premiseUrban == 1){
        this.premiseurban = true;
        this.premiserural = false;
      }
      else if(this.MB5Form.value.premiseUrban == 2){
        this.premiserural = true;
        this.premiseurban = false;
      }
    }
    else if (this.urbancheck == false) {
      this.MB5Form.patchValue({
        premisePinCode : '',
        premiseState :'',
        premiseDistrict :'',
        premiseTehsil : '',
        premiseUrban : '',
        premiseMunicipalArea : '',
        premiseWard : '',
        premiseBlock : '',
        premiseVillage : '',
        premisePoliceStation :'',
        premiseLocality : '',
        premiseStreet : '',
      });
      if(this.MB5Form.value.premiseUrban == 1){
        this.premiseurban = true;
        this.premiserural = false;
      }
      else if(this.MB5Form.value.premiseUrban == 2){
        this.premiserural = true;
        this.premiseurban = false;
      }
    }
  }
  urban($event){
    console.log($event.target.value);
    if($event.target.value == 1){
    this.headurban = true;
    this.headrural = false;
    this.MB5Form.controls['applicantMunicipalArea'].setValidators([Validators.required]);
    this.MB5Form.controls['applicantMunicipalArea'].updateValueAndValidity();
    this.MB5Form.controls['applicantBlock'].setValidators([]);
    this.MB5Form.controls['applicantBlock'].updateValueAndValidity();
    this.MB5Form.controls['applicantVillage'].setValidators([]);
    this.MB5Form.controls['applicantVillage'].updateValueAndValidity();
    // this.formSubmitted = true;
    }
    else if($event.target.value == 2){
      this.headrural = true;
      this.headurban = false;
      this.MB5Form.controls['applicantBlock'].setValidators([Validators.required]);
      this.MB5Form.controls['applicantBlock'].updateValueAndValidity();
      this.MB5Form.controls['applicantVillage'].setValidators([Validators.required]);
      this.MB5Form.controls['applicantVillage'].updateValueAndValidity();
      this.MB5Form.controls['applicantMunicipalArea'].setValidators([]);
    this.MB5Form.controls['applicantMunicipalArea'].updateValueAndValidity();
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
        this.premiseurban = true;
        this.premiserural = false;
        this.MB5Form.controls['municipalArea'].setValidators([Validators.required]);
        this.MB5Form.controls['municipalArea'].updateValueAndValidity();
        this.MB5Form.controls['premiseMunicipalArea'].setValidators([Validators.required]);
        this.MB5Form.controls['premiseMunicipalArea'].updateValueAndValidity();
        this.MB5Form.controls['premiseBlock'].setValidators([]);
        this.MB5Form.controls['premiseBlock'].updateValueAndValidity();
        this.MB5Form.controls['premiseVillage'].setValidators([]);
        this.MB5Form.controls['premiseVillage'].updateValueAndValidity();
        this.MB5Form.controls['applicantBlock'].setValidators([]);
        this.MB5Form.controls['applicantBlock'].updateValueAndValidity();
        this.MB5Form.controls['applicantVillage'].setValidators([]);
        this.MB5Form.controls['applicantVillage'].updateValueAndValidity();
      }
      else if (urbanshow == 2) {
        this.premiserural = true;
        this.premiseurban = false;
        this.MB5Form.controls['applicantMunicipalArea'].setValidators([]);
        this.MB5Form.controls['applicantMunicipalArea'].updateValueAndValidity();
        this.MB5Form.controls['premiseMunicipalArea'].setValidators([]);
        this.MB5Form.controls['premiseMunicipalArea'].updateValueAndValidity();
        this.MB5Form.controls['applicantBlock'].setValidators([Validators.required]);
        this.MB5Form.controls['applicantBlock'].updateValueAndValidity();
        this.MB5Form.controls['applicantVillage'].setValidators([Validators.required]);
        this.MB5Form.controls['applicantVillage'].updateValueAndValidity();
        this.MB5Form.controls['premiseBlock'].setValidators([Validators.required]);
        this.MB5Form.controls['premiseBlock'].updateValueAndValidity();
        this.MB5Form.controls['premiseVillage'].setValidators([Validators.required]);
        this.MB5Form.controls['premiseVillage'].updateValueAndValidity();
      }
      else {
        this.premiserural = false;
        this.premiseurban = false;
      }
    // }
  
  
    }
    navigate(form){
      sessionStorage.setItem('formdata', JSON.stringify(form.value));
      this.router.navigate(['/licencemgnt/brewery-winery/mb5/view'])
    }
}
