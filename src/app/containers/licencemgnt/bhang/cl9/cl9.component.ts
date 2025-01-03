import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertService } from '@app/services';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { formatDate } from '@angular/common';
import { DistrictMasterService, StatemasterService } from '@app/services';
import * as moment from 'moment';
interface Post {
  applicationDate: Date;
}
@Component({
  selector: 'app-cl9',
  templateUrl: './cl9.component.html',
  styleUrls: ['./cl9.component.scss']
})
export class Cl9Component implements OnInit {
  date: any;
  states:any;
  districts:any;
  districts1:any;
  curDate = new Date();
  cl9Form: FormGroup;
  editId: any;
  formSubmitted = false;
  addedit: any;
  urban:boolean=false;
  rural:boolean=false;
  director_urban:boolean=false;
  director_rural:boolean=false;
  post: Post={
    applicationDate: new Date(Date.now())
  }
  maxDate = moment(new Date()).format('YYYY-MM-DD');
  registrationObj: any = JSON.parse(sessionStorage.getItem('formdata'));
  constructor(
    private state : StatemasterService,
    private district : DistrictMasterService,
    private router: Router,
    private alert: AlertService,
    private formbuilder: FormBuilder
  ) { }

  ngOnInit() {
    this.buildPrescriptionFormGrp();
    this.getstate();
    if (this.cl9Form) {
      this.setData();
    }
  }
  setData() {
    this.cl9Form.patchValue(this.registrationObj);
    // this.getpremisesdistrict(this.FL9.value.stateId)
  }
  numberOnly(event): boolean {
    const charCode = (event.which) ? event.which : event.keyCode;
    if (charCode > 31 && (charCode < 48 || charCode > 57)) {
      return false;
    }
    return true;

  }
  gender1(event){
    let check = event.target.value;
    if(check== "1" || check== "2"){
      this.cl9Form.patchValue({
        genderId : "1",
            });
    }
    if(check== ""){
      this.cl9Form.patchValue({
        genderId : "",
            });
    }
    else if( check== "3" || check== "4"){
      this.cl9Form.patchValue({
        genderId : "2",
            });
    }
      }
  buildPrescriptionFormGrp() {
    this.cl9Form = this.formbuilder.group({
      "financialyear":['2020-2021'],
      "applicationDate":[formatDate(this.post.applicationDate, 'yyyy-MM-dd', 'en')],
      "salutationId":['',Validators.required],
      "firstName":['',Validators.required],
      "middleName":[''],
      "lastName":['',Validators.required],
      "applicantPhotograph":[''],
      "applicantMobileNumber":['',Validators.required],
      "applicantMailId":['',[Validators.required, Validators.email,Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]],
      "applicantAadharNo":['',Validators.required],
      "uploadaadhar":[''],
      "genderId":['',Validators.required],
      "panNumber":['',Validators.required],
      "dob":['',Validators.required],
      "uploadPan":[''],
      "pincode":['',Validators.required],
      "stateId":[0,Validators.required],
      "countryId":['INDIA'],
      "districtId":['',Validators.required],
      "tehsilId":['',Validators.required],
      "urbanOrRural":['',Validators.required],
      "muncipalAreaId":[''],
      "ward":[''],
      "blockId":[''],
      "villageId":[''],
      "policeStation":['',Validators.required],
      "locality":['',Validators.required],
      "street":['',Validators.required],
      "shopCountryId":['INDIA'],
      "shopPincode":['',Validators.required],
      "shopStateId":['',Validators.required],
      "shopDistrictId":['',Validators.required],
      "shopTehsilId":['',Validators.required],
      "shopUrbanRural":['',Validators.required],
      "shopMunicipalAreaId":[''],
      "shopWard":[''],
      "shopBlockId":[''],
      "shopVillageId":[''],
      "shopPoliceStation":['',Validators.required],
      "shopLocality":['',Validators.required],
      "shopStreet":['',Validators.required],
      "bankAccountNumber":['',Validators.required],
      "bankIfsc":['',Validators.required],
      "bankName":['',Validators.required],
      "uploadCancelCheque":[''],
      "applicationFees":['',Validators.required]
    })
  }
  getstate(){
    this.state.getState().subscribe((responceData: any) => { 
      this.states = responceData.data;
    });
  }
  getdistrict(stateId){
    // let id = $event.target.value;
        this.district.getDistrictsByStateid(stateId).subscribe((responceData: any) => {
      this.districts = responceData.data;
    });
  }
  getdistrict1(stateid){
    // let id = $event.target.value;
        this.district.getDistrictsByStateid(stateid).subscribe((responceData: any) => {
      this.districts1 = responceData.data;
    });
  }
  directorurban($event){
    if($event.target.value == 1){
      this.director_urban = true;
      this.director_rural = false;
      this.cl9Form.controls['muncipalAreaId'].setValidators([Validators.required]);
      this.cl9Form.controls['muncipalAreaId'].updateValueAndValidity();
      this.cl9Form.controls['blockId'].setValidators([]);
      this.cl9Form.controls['blockId'].updateValueAndValidity();
      this.cl9Form.controls['villageId'].setValidators([]);
      this.cl9Form.controls['villageId'].updateValueAndValidity();
     
      }
      else if($event.target.value == 2){
        this.director_rural = true;
        this.director_urban = false;
        this.cl9Form.controls['blockId'].setValidators([Validators.required]);
        this.cl9Form.controls['blockId'].updateValueAndValidity();
        this.cl9Form.controls['villageId'].setValidators([Validators.required]);
        this.cl9Form.controls['villageId'].updateValueAndValidity();
        this.cl9Form.controls['muncipalAreaId'].setValidators([]);
        this.cl9Form.controls['muncipalAreaId'].updateValueAndValidity();
       
      }
      else{
        this.director_rural = false;
        this.director_urban = false;
        this.cl9Form.controls['muncipalAreaId'].setValidators([Validators.required]);
        this.cl9Form.controls['muncipalAreaId'].updateValueAndValidity();
       
      }
  }
  shoptorurban($event){
    if($event.target.value == 1){
      this.urban = true;
      this.rural = false;
      this.cl9Form.controls['shopMunicipalAreaId'].setValidators([Validators.required]);
      this.cl9Form.controls['shopMunicipalAreaId'].updateValueAndValidity();
      this.cl9Form.controls['shopBlockId'].setValidators([]);
      this.cl9Form.controls['shopBlockId'].updateValueAndValidity();
      this.cl9Form.controls['shopVillageId'].setValidators([]);
      this.cl9Form.controls['shopVillageId'].updateValueAndValidity();
     
      }
      else if($event.target.value == 2){
        this.rural = true;
        this.urban = false;
        this.cl9Form.controls['shopBlockId'].setValidators([Validators.required]);
        this.cl9Form.controls['shopBlockId'].updateValueAndValidity();
        this.cl9Form.controls['shopVillageId'].setValidators([Validators.required]);
        this.cl9Form.controls['shopVillageId'].updateValueAndValidity();
        this.cl9Form.controls['shopMunicipalAreaId'].setValidators([]);
        this.cl9Form.controls['shopMunicipalAreaId'].updateValueAndValidity();
       
      }
      else{
        this.rural = false;
        this.urban = false;
        this.cl9Form.controls['shopMunicipalAreaId'].setValidators([Validators.required]);
        this.cl9Form.controls['shopMunicipalAreaId'].updateValueAndValidity();
       
      }
  }
  addressofpremises(event){
    if(event.target.checked){
    console.log(event.target.checked)
    this.getdistrict1(this.cl9Form.controls['stateId'].value)
    this.cl9Form.patchValue({
      shopCountryId:this.cl9Form.controls['countryId'].value,
      shopPincode:this.cl9Form.controls['pincode'].value,
      shopStateId:this.cl9Form.controls['stateId'].value,
      shopDistrictId:this.cl9Form.controls['districtId'].value,
      shopTehsilId:this.cl9Form.controls['tehsilId'].value,
      shopUrbanRural:this.cl9Form.controls['urbanOrRural'].value,
      shopMunicipalAreaId:this.cl9Form.controls['muncipalAreaId'].value,
      shopWard:this.cl9Form.controls['ward'].value,
      shopBlockId:this.cl9Form.controls['blockId'].value,
      shopVillageId:this.cl9Form.controls['villageId'].value,
    
      shopPoliceStation:this.cl9Form.controls['policeStation'].value,
      shopLocality:this.cl9Form.controls['locality'].value,
      shopStreet:this.cl9Form.controls['street'].value,
    })
    if(this.cl9Form.value.shopUrbanRural == 1){
      this.urban = true;
      this.rural = false;
      }
      else if(this.cl9Form.value.shopUrbanRural == 2){
      this.rural = true;
      this.urban = false;
      }
    }
    else{
    this.cl9Form.patchValue({
      // shopCountryId:'',
    shopPincode:'',
    shopStateId:'',
    shopDistrictId:'',
    shopTehsilId:'',
    shopUrbanRural:'',
    shopMunicipalAreaId:'',
    shopWard:'',
    shopBlockId:'',
    shopVillageId:'',
    shopPoliceStation:'',
    shopLocality:'',
    shopStreet:'',
    })
    }
      }
  add(cl9Form){ 
    this.formSubmitted = false;
    let params = {
      financialyear: cl9Form.value.financialyear,
      applicationDate: cl9Form.value.applicationDate,
      salutationId :parseInt(cl9Form.value.salutationId)?parseInt(cl9Form.value.salutationId):0,
      firstName :cl9Form.value.firstName,
      middleName :cl9Form.value.middleName,
      lastName :cl9Form.value.lastName,
      applicantPhotograph :cl9Form.value.applicantPhotograph,
      applicantMobileNumber:cl9Form.value.applicantMobileNumber,
      applicantMailId:cl9Form.value.applicantMailId,
      applicantAadharNo:cl9Form.value.applicantAadharNo,
      uploadaadhar:cl9Form.value.uploadaadhar,
      genderId:parseInt(cl9Form.value.genderId)?parseInt(cl9Form.value.genderId):0,
      panNumber:parseInt(cl9Form.value.panNumber)?parseInt(cl9Form.value.panNumber):0,
      dob :cl9Form.value.dob,
      uploadPan:cl9Form.value.uploadPan,
      pincode:parseInt(cl9Form.value.pincode)?parseInt(cl9Form.value.pincode):0,
      gender :cl9Form.value.gender,
      countryId :cl9Form.value.countryId,  
      stateId :parseInt(cl9Form.value.stateId)?parseInt(cl9Form.value.stateId):0,
      districtId :parseInt(cl9Form.value.districtId)?parseInt(cl9Form.value.districtId):0,
      tehsilId:parseInt(cl9Form.value.tehsilId)?parseInt(cl9Form.value.tehsilId):0,
     
      urbanOrRural :parseInt(cl9Form.value.urbanOrRural)?parseInt(cl9Form.value.urbanOrRural):0,
      muncipalAreaId:parseInt(cl9Form.value.muncipalAreaId)?parseInt(cl9Form.value.muncipalAreaId):0,
      ward :cl9Form.value.ward,
      blockId :parseInt(cl9Form.value.blockId)?parseInt(cl9Form.value.blockId):0,
      villageId :parseInt(cl9Form.value.villageId)?parseInt(cl9Form.value.villageId):0,
      policeStation :parseInt(cl9Form.value.policeStation)?parseInt(cl9Form.value.policeStation):0,
      locality :cl9Form.value.locality,
      street :cl9Form.value.street,
      shopCountryId :cl9Form.value.shopCountryId,  
      shopPincode:parseInt(cl9Form.value.shopPincode)?parseInt(cl9Form.value.shopPincode):0,
      shopStateId :parseInt(cl9Form.value.shopStateId)?parseInt(cl9Form.value.shopStateId):0,
      shopDistrictId :parseInt(cl9Form.value.shopDistrictId)?parseInt(cl9Form.value.shopDistrictId):0,
      shopTehsilId:parseInt(cl9Form.value.shopTehsilId)?parseInt(cl9Form.value.shopTehsilId):0,
     
      shopUrbanRural :parseInt(cl9Form.value.shopUrbanRural)?parseInt(cl9Form.value.shopUrbanRural):0,
      shopMunicipalAreaId:parseInt(cl9Form.value.shopMunicipalAreaId)?parseInt(cl9Form.value.shopMunicipalAreaId):0,
      shopWard :cl9Form.value.shopWard,
      shopBlockId :parseInt(cl9Form.value.shopBlockId)?parseInt(cl9Form.value.shopBlockId):0,
      shopVillageId :parseInt(cl9Form.value.shopVillageId)?parseInt(cl9Form.value.shopVillageId):0,
      shopPoliceStation :parseInt(cl9Form.value.shopPoliceStation)?parseInt(cl9Form.value.shopPoliceStation):0,
      shopLocality :cl9Form.value.shopLocality,
      shopStreet :cl9Form.value.shopStreet,
    
      bankAccountNumber :cl9Form.value.bankAccountNumber,
      bankIfsc :cl9Form.value.bankIfsc,
      bankName :cl9Form.value.bankName,
      uploadCancelCheque:cl9Form.value.uploadCancelCheque,
      applicationFees :cl9Form.value.applicationFees,
      status: "DRAFT"
    }
    if (cl9Form.valid === false) {
      this.formSubmitted = true;
    }
    else {
        // this.newlicenseBhangCl9Service.addbhangcl9(params).subscribe((response: any) => {  
        //   if (response.status == "s") {
        //     this.alert.showSuccess(response.userDisplayMesg, 'Success');
        //     // this.exampleModalCenter.show()
        //     this.cl9Form.reset();
        //     this.router.navigate(['licencemgnt/bhang']);
        //   }
        //   else {
        //     this.alert.showError(response['userDisplayMesg'], 'error')
        //   }
        // })
    }
}
preview(form) {
  sessionStorage.setItem('formdata', JSON.stringify(form.value));
  this.router.navigate(['/licencemgnt/bhang/cl9/view']);
}
}
