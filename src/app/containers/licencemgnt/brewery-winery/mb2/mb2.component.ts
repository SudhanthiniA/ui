import { Component, OnInit } from '@angular/core';
import { Validators, FormGroup, FormBuilder } from '@angular/forms';
import { formatDate } from '@angular/common';
import { StatemasterService, DistrictMasterService, AlertService } from '@app/services';
import { Router } from '@angular/router';
import { NewlicenceB2Service } from '@app/services/new-licence/newlicense-b2.service';
import * as moment from 'moment';
interface Post {
  startDate: Date;
}
@Component({
  selector: 'app-mb2',
  templateUrl: './mb2.component.html',
  styleUrls: ['./mb2.component.scss']
})
export class Mb2Component implements OnInit {

  MB2Form:FormGroup;
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
  customRadio: string;
  customRadio1: string;
  isFitWaterQuality: string;
  customRadioInline1: string;

  constructor(
    private state: StatemasterService,
    private district: DistrictMasterService,
    private formBuilder: FormBuilder,
    private router: Router,
    private alert: AlertService,
    private b1service: NewlicenceB2Service,
  ) { }
  post: Post = {
    startDate: new Date(Date.now())
  }

  maxDate = moment(new Date()).format('YYYY-MM-DD');

  ngOnInit() {
    this.getstate();
    this.createFormGrp();
    if (this.registrationObj) {
      this.setData();
    }
  }

  numberOnly(event): boolean {
    const charCode = (event.which) ? event.which : event.keyCode;
    if (charCode > 31 && (charCode < 48 || charCode > 57)) {
      return false;
    }
    return true;

  }
  createFormGrp() {
    this.MB2Form = this.formBuilder.group({
      financialYear:[formatDate(this.post.startDate, 'yyyy-MM-dd', 'en')],
      dateOfApplication: [formatDate(this.post.startDate, 'yyyy-MM-dd', 'en')],
      saluatation : [''],
      firstName :[''],
      middleName  :[''],
      lastName :[''],
      mobileNumber :[''],
      emailId :['',[Validators.required, Validators.email,Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]],
      aadhaarNumber :[''],
      gender : [''],
      dateOfBirth : [''],
      panNumber : [''],
      country :['INDIA'],
      applicantPinCode :[''],
      applicantState : [''],
      applicantDistrict : [''],
      applicantTehsil : [''],
      applicantUrbanOrRural : [''],
      applicantMunicipalArea :[''],
      applicantWard :[''],
      applicantBlock :[''],
      applicantVillage :[''],
      applicantPoliceStation : [''],
      applicantLocality : [''],
      applicantStreet : [''],
     bankAccountNumber : [''],
     bankIFSC : [''],
      bankName : [''],
      applicationFees : [0],
      totalArea: [''],
      totalPlinth: [''],
      areaDiningHall: [''],
      areaParking: [''],
      amountOfProposed: [''],
      amount: [''],
      issued: [''],
      paidUp: [''],
      limitedBorrowings: [''],
    
      land: [''],
      buildingStructure: [''],
      plantMachinery: [''],
      total: [''],
      workingCapital: [''],
      breweryName: [''],
      organisationName: [''],
      descriptionVessels: [''],
     
      importedOrigin: [''],
     
      rawMaterialimportedOrigin: [''],
      indigenousOrigin: [''],
      barleyMalt: [''],
      particularsOfRequirements: [''],
     standardQuantity: [''],
      briefProcess: [''],
      quantityOfProduct: [''],
      foreignCollab: [''],
      timeRequiredLand: [''],
      timeRequiredMachinery: [''],
      items: [''],
      calculationDetails: [''],
      annualQuantity: [''],
      supervisory: [''],
      skilled: [''],
      unskilled: [''],
      specialFacility: [''],
      specialFeature: [''],
      others:[''],
      customRadioInline1 :[''],
      isFitWaterQuality:[''],
      capital:[''],
      microbreweryBlock:[''],
      microbreweryCountry:['INDIA'],
      microbreweryDistrict:[''],
      microbreweryLocality:[''],
      microbreweryMunicipalArea:[''],
      microbreweryPinCode:[''],
      microbreweryPoliceStation:[''],
      microbreweryState:[''],
      microbreweryStreet:[''],
      microbreweryTehsil:[''],
      microbreweryUrbanOrRural:[''],
      microbreweryVillage:[''],
      microbreweryWard:[''],
      othersBorrowings:[''],
      photo:[''],
      rawMaterialindigenousOrigin:[''],
      uploadPan:[''],
      uploadCancelCheque:[''],
      uploadAadhar:[''],
      certificatExciseRevenue:[''],
      productionCapacity:[''],
      capitalDeposit:['']
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
 
  add(MB2Form){
    console.log(MB2Form);
    let params = {
      "financialYear":this.MB2Form.value.financialYear,
      "dateOfApplication":this.MB2Form.value.dateOfApplication,
      "saluatation" : this.MB2Form.value.saluatation,
      "firstName" :this.MB2Form.value.firstName,
      "middleName"  :this.MB2Form.value.middleName,
      "lastName" :this.MB2Form.value.lastName,
      "mobileNumber" :parseInt(this.MB2Form.value.mobileNumber),
      "emailId" : this.MB2Form.value.emailId,
      "aadhaarNumber" : parseInt(this.MB2Form.value.aadhaarNumber),
      "gender" : this.MB2Form.value.gender,
      "dateOfBirth" : this.MB2Form.value.dateOfBirth,
      "panNumber" : this.MB2Form.value.panNumber,
      "country" :this.MB2Form.value.country,
      "applicantPinCode" :this.MB2Form.value.applicantPinCode,
      "applicantState" : parseInt(this.MB2Form.value.applicantDistrict),
      "applicantDistrict" : parseInt(this.MB2Form.value.applicantDistrict),
      "applicantTehsil" : parseInt(this.MB2Form.value.applicantDistrict),
      "applicantUrbanOrRural" : parseInt(this.MB2Form.value.applicantUrbanOrRural),
      "applicantMunicipalArea" :parseInt(this.MB2Form.value.applicantVillage)? this.MB2Form.value.applicantVillage : null,
      "applicantWard" :this.MB2Form.value.applicantVillage ,
      "applicantBlock" :parseInt(this.MB2Form.value.applicantVillage)? this.MB2Form.value.applicantVillage : null,
      "applicantVillage" :parseInt(this.MB2Form.value.applicantVillage)? this.MB2Form.value.applicantVillage : null,
      "applicantPoliceStationt" :parseInt(this.MB2Form.value.applicantPoliceStation),
      "applicantLocality" : this.MB2Form.value.applicantLocality,
      "applicantStreet" : this.MB2Form.value.applicantStreet,
     "bankAccountNumber" :parseInt(this.MB2Form.value.bankAccountNumber) ,
     "bankIFSC" : this.MB2Form.value.bankIFSC,
      "bankName" : this.MB2Form.value.bankName,
      "applicationFees" : this.MB2Form.value.applicationFees,
      "totalArea": this.MB2Form.value.totalArea,
      "totalPlinth": this.MB2Form.value.totalPlinth,
      "areaDiningHall": this.MB2Form.value.areaDiningHall,
      "areaParking": this.MB2Form.value.areaParking,
      "amountOfProposed": this.MB2Form.value.amountOfProposed,
      "amount": this.MB2Form.value.amount,
      "issued": this.MB2Form.value.issued,
      "paidUp": this.MB2Form.value.paidUp,
      "limitedBorrowings": this.MB2Form.value.limitedBorrowings,
      "uploadCancelCheque":this.MB2Form.value.uploadCancelCheque,
      "uploadAadhar":this.MB2Form.value.uploadAadhar,
      "land": this.MB2Form.value.land,
      "buildingStructure": this.MB2Form.value.buildingStructure,
      "plantMachinery": this.MB2Form.value.plantMachinery,
      "total": this.MB2Form.value.total,
      "workingCapital": this.MB2Form.value.workingCapital,
      "breweryName": this.MB2Form.value.breweryName,
      "organisationName": this.MB2Form.value.organisationName,
      "descriptionVessels": this.MB2Form.value.descriptionVessels,
      "certificatExciseRevenue":this.MB2Form.value.certificatExciseRevenue,
      "importedOrigin": this.MB2Form.value.importedOrigin,
      "capitalDeposit":this.MB2Form.value.capitalDeposit,
      "rawMaterialimportedOrigin": this.MB2Form.value.rawMaterialimportedOrigin,
     
      "barleyMalt": this.MB2Form.value.barleyMalt,
      "particularsOfRequirements": this.MB2Form.value.particularsOfRequirements,
     "standardQuantity": this.MB2Form.value.standardQuantity,
      "briefProcess": this.MB2Form.value.briefProcess,
      "quantityOfProduct": this.MB2Form.value.quantityOfProduct,
      "foreignCollab": this.MB2Form.value.foreignCollab,
      "timeRequiredLand": this.MB2Form.value.timeRequiredLand,
      "timeRequiredMachinery": this.MB2Form.value.timeRequiredMachinery,
      "items": this.MB2Form.value.items,
      "calculationDetails": this.MB2Form.value.calculationDetails,
      "annualQuantity": this.MB2Form.value.annualQuantity,
      "supervisory": this.MB2Form.value.supervisory,
      "skilled": this.MB2Form.value.skilled,
      "unskilled": this.MB2Form.value.unskilled,
      "specialFacility": this.MB2Form.value.specialFacility,
      "specialFeature": this.MB2Form.value.specialFeature,
      "others":this.MB2Form.value.others,
      "customRadioInline1":this.MB2Form.value.customRadioInline1,
      "isFitWaterQuality":this.MB2Form.value.isFitWaterQuality,
      "capital":this.MB2Form.value.capital,
      "microbreweryBlock":parseInt(this.MB2Form.value.microbreweryBlock)? this.MB2Form.value.microbreweryBlock : null,
      "microbreweryCountry":this.MB2Form.value.microbreweryCountry,
      "microbreweryDistrict":parseInt(this.MB2Form.value.microbreweryDistrict),
      "microbreweryLocality":this.MB2Form.value.microbreweryLocality,
      "microbreweryMunicipalArea":parseInt(this.MB2Form.value.microbreweryMunicipalArea)? this.MB2Form.value.microbreweryMunicipalArea : null,
      "microbreweryPinCode":this.MB2Form.value.microbreweryPinCode,
      "microbreweryPoliceStation":parseInt(this.MB2Form.value.microbreweryPoliceStation),
      "microbreweryState":parseInt(this.MB2Form.value.applicantDistrict),
      "microbreweryStreet":this.MB2Form.value.microbreweryStreet,
      "microbreweryTehsil":parseInt(this.MB2Form.value.applicantDistrict),
      "microbreweryUrbanOrRural":parseInt(this.MB2Form.value.microbreweryUrbanOrRural),
      "microbreweryVillage":parseInt(this.MB2Form.value.applicantVillage)? this.MB2Form.value.applicantVillage : null,
      "microbreweryWard":this.MB2Form.value.microbreweryWard,
      "othersBorrowings":this.MB2Form.value.othersBorrowings,
      "photo":this.MB2Form.value.photo,
      "rawMaterialindigenousOrigin":this.MB2Form.value.rawMaterialindigenousOrigin,
      "uploadPan":this.MB2Form.value.uploadPan,
      "productionCapacity":this.MB2Form.value.productionCapacity,
      "status":true,
     "entityId":0
 }  
    this.formSubmitted = false;
    if (MB2Form.valid === false) {
      this.formSubmitted = true;
    }
    else {
      this.b1service.addmb2(params).subscribe((response: any) => {
         if (response.status == "s") {
        this.alert.showSuccess(response.userDisplayMesg, 'Success');
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
    this.MB2Form.controls['applicantMunicipalArea'].setValidators([Validators.required]);
    this.MB2Form.controls['applicantMunicipalArea'].updateValueAndValidity();
    this.MB2Form.controls['applicantBlock'].setValidators([]);
    this.MB2Form.controls['applicantBlock'].updateValueAndValidity();
    this.MB2Form.controls['applicantVillage'].setValidators([]);
    this.MB2Form.controls['applicantVillage'].updateValueAndValidity();
    // this.formSubmitted = true;
    }
    else if($event.target.value == 2){
      this.headrural = true;
      this.headurban = false;
      this.MB2Form.controls['applicantBlock'].setValidators([Validators.required]);
      this.MB2Form.controls['applicantBlock'].updateValueAndValidity();
      this.MB2Form.controls['applicantVillage'].setValidators([Validators.required]);
      this.MB2Form.controls['applicantVillage'].updateValueAndValidity();
      this.MB2Form.controls['applicantMunicipalArea'].setValidators([]);
    this.MB2Form.controls['applicantMunicipalArea'].updateValueAndValidity();
      // this.formSubmitted = true;
    }
    else{
      this.headrural = false;
      this.headurban = false;
    }
    }
    urban1($event){
      console.log($event.target.value);
      if($event.target.value == 1){
      this.headurban = true;
      this.headrural = false;
      this.MB2Form.controls['microbreweryMunicipalArea'].setValidators([Validators.required]);
      this.MB2Form.controls['microbreweryMunicipalArea'].updateValueAndValidity();
      this.MB2Form.controls['microbreweryBlock'].setValidators([]);
      this.MB2Form.controls['microbreweryBlock'].updateValueAndValidity();
      this.MB2Form.controls['microbreweryVillage'].setValidators([]);
      this.MB2Form.controls['microbreweryVillage'].updateValueAndValidity();
      // this.formSubmitted = true;
      }
      else if($event.target.value == 2){
        this.headrural = true;
        this.headurban = false;
        this.MB2Form.controls['microbreweryBlock'].setValidators([Validators.required]);
        this.MB2Form.controls['microbreweryBlock'].updateValueAndValidity();
        this.MB2Form.controls['microbreweryVillage'].setValidators([Validators.required]);
        this.MB2Form.controls['microbreweryVillage'].updateValueAndValidity();
        this.MB2Form.controls['microbreweryMunicipalArea'].setValidators([]);
      this.MB2Form.controls['microbreweryMunicipalArea'].updateValueAndValidity();
        // this.formSubmitted = true;
      }
      else{
        this.headrural = false;
        this.headurban = false;
      }
      }
    clickedevent(event, value) {
      // console.log(event.target.value, this.newRegistrationFormGroup, this.newRegistrationFormGroup.get('entityoffirm').value)
      if (value === 'Radio1') {
        this.customRadioInline1  = 'Radio1';
      } else if (value === 'Radio2') {
        this.customRadioInline1  = 'Radio2';
      } 
    }
    clickedevent1(event, value) {
      // console.log(event.target.value, this.newRegistrationFormGroup, this.newRegistrationFormGroup.get('entityoffirm').value)
      if (value === 'customRadio1') {
        this.isFitWaterQuality = 'customRadio1';
      } else if (value === 'customRadio2') {
        this.isFitWaterQuality = 'customRadio2';
      } 
    }
    setData() {
      this.MB2Form.patchValue(this.registrationObj);
       this.getdistrict1(this.MB2Form.value.applicantState);
    
    }
    getdistrict1(event) {
      let id = event;
      this.district.getDistrictsByStateid(id).subscribe((responceData: any) => {
        this.districts = responceData.data;
      });
    }
    navigate(form){
      sessionStorage.setItem('formdata', JSON.stringify(form.value));
      this.router.navigate(['/licencemgnt/brewery-winery/mb2/view'])
    }
}
