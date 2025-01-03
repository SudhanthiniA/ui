import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AlertService } from '@app/services';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { formatDate } from '@angular/common';
import { DistrictMasterService, StatemasterService } from '@app/services';
interface Post {
  applicationDate: Date;
}
@Component({
  selector: 'app-cl12',
  templateUrl: './cl12.component.html',
  styleUrls: ['./cl12.component.scss']
})
export class Cl12Component implements OnInit {
  date: any;
  states:any;
  districts:any;
  districts1:any;
  curDate = new Date();
  cl12Form: FormGroup;
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
    private state : StatemasterService,
    private district : DistrictMasterService,
    private route: ActivatedRoute,
    private router: Router,
    private alert: AlertService,
    private formbuilder: FormBuilder
  ) { }

  ngOnInit() {
    this.buildPrescriptionFormGrp();
    this.getstate();
  }
  buildPrescriptionFormGrp() {
    this.cl12Form = this.formbuilder.group({
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
        this.cl12Form.controls['muncipalAreaId'].setValidators([Validators.required]);
        this.cl12Form.controls['muncipalAreaId'].updateValueAndValidity();
        this.cl12Form.controls['blockId'].setValidators([]);
        this.cl12Form.controls['blockId'].updateValueAndValidity();
        this.cl12Form.controls['villageId'].setValidators([]);
        this.cl12Form.controls['villageId'].updateValueAndValidity();
       
        }
        else if($event.target.value == 2){
          this.director_rural = true;
          this.director_urban = false;
          this.cl12Form.controls['blockId'].setValidators([Validators.required]);
          this.cl12Form.controls['blockId'].updateValueAndValidity();
          this.cl12Form.controls['villageId'].setValidators([Validators.required]);
          this.cl12Form.controls['villageId'].updateValueAndValidity();
          this.cl12Form.controls['muncipalAreaId'].setValidators([]);
          this.cl12Form.controls['muncipalAreaId'].updateValueAndValidity();
         
        }
        else{
          this.director_rural = false;
          this.director_urban = false;
          this.cl12Form.controls['muncipalAreaId'].setValidators([Validators.required]);
          this.cl12Form.controls['muncipalAreaId'].updateValueAndValidity();
         
        }
    }
    shoptorurban($event){
      if($event.target.value == 1){
        this.urban = true;
        this.rural = false;
        this.cl12Form.controls['shopMunicipalAreaId'].setValidators([Validators.required]);
        this.cl12Form.controls['shopMunicipalAreaId'].updateValueAndValidity();
        this.cl12Form.controls['shopBlockId'].setValidators([]);
        this.cl12Form.controls['shopBlockId'].updateValueAndValidity();
        this.cl12Form.controls['shopVillageId'].setValidators([]);
        this.cl12Form.controls['shopVillageId'].updateValueAndValidity();
       
        }
        else if($event.target.value == 2){
          this.rural = true;
          this.urban = false;
          this.cl12Form.controls['shopBlockId'].setValidators([Validators.required]);
          this.cl12Form.controls['shopBlockId'].updateValueAndValidity();
          this.cl12Form.controls['shopVillageId'].setValidators([Validators.required]);
          this.cl12Form.controls['shopVillageId'].updateValueAndValidity();
          this.cl12Form.controls['shopMunicipalAreaId'].setValidators([]);
          this.cl12Form.controls['shopMunicipalAreaId'].updateValueAndValidity();
         
        }
        else{
          this.rural = false;
          this.urban = false;
          this.cl12Form.controls['shopMunicipalAreaId'].setValidators([Validators.required]);
          this.cl12Form.controls['shopMunicipalAreaId'].updateValueAndValidity();
         
        }
    }
    addressofpremises(event){
if(event.target.checked){
  console.log(event.target.checked)
  this.getdistrict1(this.cl12Form.controls['stateId'].value)
  this.cl12Form.patchValue({
    shopCountry:this.cl12Form.controls['country'].value,
    shopPincode:this.cl12Form.controls['pincode'].value,
    shopStateId:this.cl12Form.controls['stateId'].value,
    shopDistrictId:this.cl12Form.controls['districtId'].value,
    shopTehsilId:this.cl12Form.controls['tehsilId'].value,
    shopUrbanRural:this.cl12Form.controls['urbanOrRural'].value,
    shopMunicipalAreaId:this.cl12Form.controls['muncipalAreaId'].value,
    shopWard:this.cl12Form.controls['ward'].value,
    shopBlockId:this.cl12Form.controls['blockId'].value,
    shopVillageId:this.cl12Form.controls['villageId'].value,
 
    shopPoliceStation:this.cl12Form.controls['policeStation'].value,
    shopLocality:this.cl12Form.controls['locality'].value,
    shopStreet:this.cl12Form.controls['street'].value,
  })
  if(this.cl12Form.value.shopUrbanRural == 1){
    this.urban = true;
    this.rural = false;
    }
    else if(this.cl12Form.value.shopUrbanRural == 2){
    this.rural = true;
    this.urban = false;
    }
}
else{
  this.cl12Form.patchValue({
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
    add(cl12Form){ 
      console.log(cl12Form);
      
      let form = this.cl12Form.value
      this.formSubmitted = false;
      if (cl12Form.invalid) { 
        this.formSubmitted = true;
      } 
      else {
          // this.newlicenseBhangCl12Service.addbhangcl12(form).subscribe((response: any) => {  
          //   if (response.status == "s") {
          //     this.alert.showSuccess(response.userDisplayMesg, 'Success');
          //     // this.exampleModalCenter.show()
          //     this.cl12Form.reset();
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
    this.router.navigate(['/licencemgnt/bhang/cl12/view']);
  }
}
