import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertService } from '@app/services';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { formatDate } from '@angular/common';
import { DistrictMasterService, StatemasterService } from '@app/services';
interface Post {
  applicationDate: Date;
}

@Component({
  selector: 'app-st3',
  templateUrl: './st3.component.html',
  styleUrls: ['./st3.component.scss']
})
export class St3Component implements OnInit {
  date: any;
  states:any;
  districts:any;
  districts1:any;
  curDate = new Date();
  st3Form: FormGroup;
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
  constructor(
    private state: StatemasterService,
    private district: DistrictMasterService,
    private router: Router,
    private alert: AlertService,
    private formbuilder: FormBuilder
  ) { }

  ngOnInit() {
    this.buildPrescriptionFormGrp();
    this.getstate();
  }
  buildPrescriptionFormGrp() {
    this.st3Form = this.formbuilder.group({
      "financialyear":['2020-2021'],
      "applicationDate":[formatDate(this.post.applicationDate, 'yyyy-MM-dd', 'en'),Validators.required],
      "salutationId":['',Validators.required],
      "firstName":['',Validators.required],
      "middleName":[''],
      "lastName":['',Validators.required],
      "applicantPhotograph":[''],
      "applicantMobileNumber":['',Validators.required],
      "applicantMailId":['',Validators.required],
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
      this.st3Form.controls['muncipalAreaId'].setValidators([Validators.required]);
      this.st3Form.controls['muncipalAreaId'].updateValueAndValidity();
      this.st3Form.controls['blockId'].setValidators([]);
      this.st3Form.controls['blockId'].updateValueAndValidity();
      this.st3Form.controls['villageId'].setValidators([]);
      this.st3Form.controls['villageId'].updateValueAndValidity();
     
      }
      else if($event.target.value == 2){
        this.director_rural = true;
        this.director_urban = false;
        this.st3Form.controls['blockId'].setValidators([Validators.required]);
        this.st3Form.controls['blockId'].updateValueAndValidity();
        this.st3Form.controls['villageId'].setValidators([Validators.required]);
        this.st3Form.controls['villageId'].updateValueAndValidity();
        this.st3Form.controls['muncipalAreaId'].setValidators([]);
        this.st3Form.controls['muncipalAreaId'].updateValueAndValidity();
       
      }
      else{
        this.director_rural = false;
        this.director_urban = false;
        this.st3Form.controls['muncipalAreaId'].setValidators([Validators.required]);
        this.st3Form.controls['muncipalAreaId'].updateValueAndValidity();
       
      }
  }
  shoptorurban($event){
    if($event.target.value == 1){
      this.urban = true;
      this.rural = false;
      this.st3Form.controls['shopMunicipalAreaId'].setValidators([Validators.required]);
      this.st3Form.controls['shopMunicipalAreaId'].updateValueAndValidity();
      this.st3Form.controls['shopBlockId'].setValidators([]);
      this.st3Form.controls['shopBlockId'].updateValueAndValidity();
      this.st3Form.controls['shopVillageId'].setValidators([]);
      this.st3Form.controls['shopVillageId'].updateValueAndValidity();
     
      }
      else if($event.target.value == 2){
        this.rural = true;
        this.urban = false;
        this.st3Form.controls['shopBlockId'].setValidators([Validators.required]);
        this.st3Form.controls['shopBlockId'].updateValueAndValidity();
        this.st3Form.controls['shopVillageId'].setValidators([Validators.required]);
        this.st3Form.controls['shopVillageId'].updateValueAndValidity();
        this.st3Form.controls['shopMunicipalAreaId'].setValidators([]);
        this.st3Form.controls['shopMunicipalAreaId'].updateValueAndValidity();
       
      }
      else{
        this.rural = false;
        this.urban = false;
        this.st3Form.controls['shopMunicipalAreaId'].setValidators([Validators.required]);
        this.st3Form.controls['shopMunicipalAreaId'].updateValueAndValidity();
       
      }
  }
  addressofpremises(event){
if(event.target.checked){
console.log(event.target.checked)
this.getdistrict1(this.st3Form.controls['stateId'].value)
this.st3Form.patchValue({
  shopCountry:this.st3Form.controls['country'].value,
  shopPincode:this.st3Form.controls['pincode'].value,
  shopStateId:this.st3Form.controls['stateId'].value,
  shopDistrictId:this.st3Form.controls['districtId'].value,
  shopTehsilId:this.st3Form.controls['tehsilId'].value,
  shopUrbanRural:this.st3Form.controls['urbanOrRural'].value,
  shopMunicipalAreaId:this.st3Form.controls['muncipalAreaId'].value,
  shopWard:this.st3Form.controls['ward'].value,
  shopBlockId:this.st3Form.controls['blockId'].value,
  shopVillageId:this.st3Form.controls['villageId'].value,

  shopPoliceStation:this.st3Form.controls['policeStation'].value,
  shopLocality:this.st3Form.controls['locality'].value,
  shopStreet:this.st3Form.controls['street'].value,
})
if(this.st3Form.value.shopUrbanRural == 1){
  this.urban = true;
  this.rural = false;
  }
  else if(this.st3Form.value.shopUrbanRural == 2){
  this.rural = true;
  this.urban = false;
  }
}
else{
this.st3Form.patchValue({
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
  add(st3Form){ 
    console.log(st3Form);
    
    let form = this.st3Form.value
    this.formSubmitted = false;
    if (st3Form.invalid) { 
      this.formSubmitted = true;
    } 
    else {
        // this.newlicenseBhangSt3Service.addbhangst3(form).subscribe((response: any) => {  
        //   if (response.status == "s") {
        //     this.alert.showSuccess(response.userDisplayMesg, 'Success');
        //     // this.exampleModalCenter.show()
        //     this.st3Form.reset();
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
  this.router.navigate(['/licencemgnt/bhang/st3/view']);
}
}
