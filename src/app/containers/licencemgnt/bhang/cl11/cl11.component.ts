import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { DatePipe } from '@angular/common';
import { AlertService } from '@app/services';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { formatDate } from '@angular/common';
import { DistrictMasterService, StatemasterService, TalukMasterService } from '@app/services';
import * as moment from 'moment';
interface Post {
  applicationDate: Date;
}
@Component({
  selector: 'app-cl11',
  templateUrl: './cl11.component.html',
  styleUrls: ['./cl11.component.scss']
})
export class Cl11Component implements OnInit {
  date: any;
  states:any;
  districts:any;
  districts1:any;
  curDate = new Date();
  cl11Form: FormGroup;
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
    private route: ActivatedRoute,
    private router: Router,
    private datepipe: DatePipe,
    private alert: AlertService,
    private formbuilder: FormBuilder
  ) { }

  ngOnInit() {
    this.buildPrescriptionFormGrp();
    this.getstate();
    if (this.cl11Form) {
      this.setData();
    }
  }
  setData() {
    this.cl11Form.patchValue(this.registrationObj);
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
      this.cl11Form.patchValue({
        genderId : "1",
            });
    }
    if(check== ""){
      this.cl11Form.patchValue({
        genderId : "",
            });
    }
    else if( check== "3" || check== "4"){
      this.cl11Form.patchValue({
        genderId : "2",
            });
    }
      }
  buildPrescriptionFormGrp() {
    this.cl11Form = this.formbuilder.group({
      "financialyear":['2020-2021'],
      "applicationDate":[formatDate(this.post.applicationDate, 'yyyy-MM-dd', 'en'),Validators.required],
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
      "stateId":['',Validators.required],
      "country":['INDIA'],
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
      "shopCountry":['INDIA'],
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
        this.cl11Form.controls['muncipalAreaId'].setValidators([Validators.required]);
        this.cl11Form.controls['muncipalAreaId'].updateValueAndValidity();
        this.cl11Form.controls['blockId'].setValidators([]);
        this.cl11Form.controls['blockId'].updateValueAndValidity();
        this.cl11Form.controls['villageId'].setValidators([]);
        this.cl11Form.controls['villageId'].updateValueAndValidity();
       
        }
        else if($event.target.value == 2){
          this.director_rural = true;
          this.director_urban = false;
          this.cl11Form.controls['blockId'].setValidators([Validators.required]);
          this.cl11Form.controls['blockId'].updateValueAndValidity();
          this.cl11Form.controls['villageId'].setValidators([Validators.required]);
          this.cl11Form.controls['villageId'].updateValueAndValidity();
          this.cl11Form.controls['muncipalAreaId'].setValidators([]);
          this.cl11Form.controls['muncipalAreaId'].updateValueAndValidity();
         
        }
        else{
          this.director_rural = false;
          this.director_urban = false;
          this.cl11Form.controls['muncipalAreaId'].setValidators([Validators.required]);
          this.cl11Form.controls['muncipalAreaId'].updateValueAndValidity();
         
        }
    }
    shoptorurban($event){
      if($event.target.value == 1){
        this.urban = true;
        this.rural = false;
        this.cl11Form.controls['shopMunicipalAreaId'].setValidators([Validators.required]);
        this.cl11Form.controls['shopMunicipalAreaId'].updateValueAndValidity();
        this.cl11Form.controls['shopBlockId'].setValidators([]);
        this.cl11Form.controls['shopBlockId'].updateValueAndValidity();
        this.cl11Form.controls['shopVillageId'].setValidators([]);
        this.cl11Form.controls['shopVillageId'].updateValueAndValidity();
       
        }
        else if($event.target.value == 2){
          this.rural = true;
          this.urban = false;
          this.cl11Form.controls['shopBlockId'].setValidators([Validators.required]);
          this.cl11Form.controls['shopBlockId'].updateValueAndValidity();
          this.cl11Form.controls['shopVillageId'].setValidators([Validators.required]);
          this.cl11Form.controls['shopVillageId'].updateValueAndValidity();
          this.cl11Form.controls['shopMunicipalAreaId'].setValidators([]);
          this.cl11Form.controls['shopMunicipalAreaId'].updateValueAndValidity();
         
        }
        else{
          this.rural = false;
          this.urban = false;
          this.cl11Form.controls['shopMunicipalAreaId'].setValidators([Validators.required]);
          this.cl11Form.controls['shopMunicipalAreaId'].updateValueAndValidity();
         
        }
    }
    addressofpremises(event){
      if(event.target.checked){
      console.log(event.target.checked)
      this.getdistrict1(this.cl11Form.controls['stateId'].value)
      this.cl11Form.patchValue({
        shopCountry:this.cl11Form.controls['country'].value,
        shopPincode:this.cl11Form.controls['pincode'].value,
        shopStateId:this.cl11Form.controls['stateId'].value,
        shopDistrictId:this.cl11Form.controls['districtId'].value,
        shopTehsilId:this.cl11Form.controls['tehsilId'].value,
        shopUrbanRural:this.cl11Form.controls['urbanOrRural'].value,
        shopMunicipalAreaId:this.cl11Form.controls['muncipalAreaId'].value,
        shopWard:this.cl11Form.controls['ward'].value,
        shopBlockId:this.cl11Form.controls['blockId'].value,
        shopVillageId:this.cl11Form.controls['villageId'].value,
      
        shopPoliceStation:this.cl11Form.controls['policeStation'].value,
        shopLocality:this.cl11Form.controls['locality'].value,
        shopStreet:this.cl11Form.controls['street'].value,
      })
      if(this.cl11Form.value.shopUrbanRural == 1){
        this.urban = true;
        this.rural = false;
        }
        else if(this.cl11Form.value.shopUrbanRural == 2){
        this.rural = true;
        this.urban = false;
        }
      }
      else{
      this.cl11Form.patchValue({
        // shopCountry:'',
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
    add(cl11Form){ 
      this.formSubmitted = false;
    let params = {
      financialyear: cl11Form.value.financialyear,
      applicationDate: cl11Form.value.applicationDate,
      salutationId :parseInt(cl11Form.value.salutationId)?parseInt(cl11Form.value.salutationId):0,
      firstName :cl11Form.value.firstName,
      middleName :cl11Form.value.middleName,
      lastName :cl11Form.value.lastName,
      applicantPhotograph :cl11Form.value.applicantPhotograph,
      applicantMobileNumber:cl11Form.value.applicantMobileNumber,
      applicantMailId:cl11Form.value.applicantMailId,
      applicantAadharNo:cl11Form.value.applicantAadharNo,
      uploadaadhar:cl11Form.value.uploadaadhar,
      genderId:parseInt(cl11Form.value.genderId)?parseInt(cl11Form.value.genderId):0,
      panNumber:parseInt(cl11Form.value.panNumber)?parseInt(cl11Form.value.panNumber):0,
      dob :cl11Form.value.dob,
      uploadPan:cl11Form.value.uploadPan,
      pincode:parseInt(cl11Form.value.pincode)?parseInt(cl11Form.value.pincode):0,
      country :cl11Form.value.country,  
      stateId :parseInt(cl11Form.value.stateId)?parseInt(cl11Form.value.stateId):0,
      districtId :parseInt(cl11Form.value.districtId)?parseInt(cl11Form.value.districtId):0,
      tehsilId:parseInt(cl11Form.value.tehsilId)?parseInt(cl11Form.value.tehsilId):0,
     
      urbanOrRural :parseInt(cl11Form.value.urbanOrRural)?parseInt(cl11Form.value.urbanOrRural):0,
      muncipalAreaId:parseInt(cl11Form.value.muncipalAreaId)?parseInt(cl11Form.value.muncipalAreaId):0,
      ward :cl11Form.value.ward,
      blockId :parseInt(cl11Form.value.blockId)?parseInt(cl11Form.value.blockId):0,
      villageId :parseInt(cl11Form.value.villageId)?parseInt(cl11Form.value.villageId):0,
      policeStation :parseInt(cl11Form.value.policeStation)?parseInt(cl11Form.value.policeStation):0,
      locality :cl11Form.value.locality,
      street :cl11Form.value.street,
      shopCountry :cl11Form.value.shopCountry,  
      shopPincode:parseInt(cl11Form.value.shopPincode)?parseInt(cl11Form.value.shopPincode):0,
      shopStateId :parseInt(cl11Form.value.shopStateId)?parseInt(cl11Form.value.shopStateId):0,
      shopDistrictId :parseInt(cl11Form.value.shopDistrictId)?parseInt(cl11Form.value.shopDistrictId):0,
      shopTehsilId:parseInt(cl11Form.value.shopTehsilId)?parseInt(cl11Form.value.shopTehsilId):0,
     
      shopUrbanRural :parseInt(cl11Form.value.shopUrbanRural)?parseInt(cl11Form.value.shopUrbanRural):0,
      shopMunicipalAreaId:parseInt(cl11Form.value.shopMunicipalAreaId)?parseInt(cl11Form.value.shopMunicipalAreaId):0,
      shopWard :cl11Form.value.shopWard,
      shopBlockId :parseInt(cl11Form.value.shopBlockId)?parseInt(cl11Form.value.shopBlockId):0,
      shopVillageId :parseInt(cl11Form.value.shopVillageId)?parseInt(cl11Form.value.shopVillageId):0,
      shopPoliceStation :parseInt(cl11Form.value.shopPoliceStation)?parseInt(cl11Form.value.shopPoliceStation):0,
      shopLocality :cl11Form.value.shopLocality,
      shopStreet :cl11Form.value.shopStreet,
    
      bankAccountNumber :cl11Form.value.bankAccountNumber,
      bankIfsc :cl11Form.value.bankIfsc,
      bankName :cl11Form.value.bankName,
      uploadCancelCheque:cl11Form.value.uploadCancelCheque,
      applicationFees :cl11Form.value.applicationFees,
      status: "DRAFT"
    }
    if (cl11Form.valid === false) {
      this.formSubmitted = true;
    }
      else {
          // this.newlicenseBhangCl11Service.addbhangcl11(params).subscribe((response: any) => {  
          //   if (response.status == "s") {
          //     this.alert.showSuccess(response.userDisplayMesg, 'Success');
          //     // this.exampleModalCenter.show()
          //     this.cl11Form.reset();
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
    this.router.navigate(['/licencemgnt/bhang/cl11/view']);
  }
}
