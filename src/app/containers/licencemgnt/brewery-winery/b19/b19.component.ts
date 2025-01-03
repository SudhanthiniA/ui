import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { StatemasterService, DistrictMasterService, AlertService } from '@app/services';
import { Router } from '@angular/router';
import { formatDate } from '@angular/common';
import { NewlicenceB19Service } from '@app/services/new-licence/newlicence-b19.service';
import * as moment from 'moment';
interface Post {
  startDate: Date;
}
@Component({
  selector: 'app-b19',
  templateUrl: './b19.component.html',
  styleUrls: ['./b19.component.scss']
})
export class B19Component implements OnInit {
  B19Form: FormGroup;
  formSubmitted = false;
  states: any;
  districts: any;
  urbancheck: any;
  headrural = false;
  headurban = false;
  registrationObj: any = JSON.parse(sessionStorage.getItem('formdata'));
  premisesurban = true;
  premisesrural = false;
  constructor(
    private state: StatemasterService,
    private district: DistrictMasterService,
    private formBuilder: FormBuilder,
    private router: Router,
    private alert: AlertService,
    private b19service: NewlicenceB19Service,
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
    this.B19Form = this.formBuilder.group({
      financialYear: [formatDate(this.post.startDate, 'yyyy-MM-dd', 'en')],
      dateOfApplication: [formatDate(this.post.startDate, 'yyyy-MM-dd', 'en')],
      salutation : [''],
      firstName :[''],
      middleName  :[''],
      lastName :[''],
      mobileNumber :[''],
      emailId :[''],
      aadhaarNumber :[''],
      gender :[''],
      dateOfBirth :[''],
      panNumber :[''],
      fathersName :[''],
      applicantItr :[''],
      applicantReason :[''],
      applicantCountry :['INDIA'],
      applicantPinCode :[''],
      applicantState :[''],
      applicantDistrict :[''],
      applicantTehsil :[''],
      applicantUrban :[''],
      municipalArea :[''],
      applicantMunicipalArea :[''],
      applicantBlock :[''],
      applicantVillage :[''],
      applicantPoliceStation :[''],
      applicantLocality :[''],
      applicantStreet :[''],
      addressUndertakingCountry :['INDIA'],
      addressUndertakingPinCode :[''],
      addressUndertakingState :[''],
      addressUndertakingDistrict :[''],
      addressUndertakingTehsil :[''],
      addressUndertakingUrban :[''],
      addressUndertakingMunicipalArea :[''],
      addressUndertakingWard :[''],
      addressUndertakingBlock :[''],
      addressUndertakingVillage :[''],
      addressUndertakingPoliceStation :[''],
      addressUndertakingLocality :[''],
      addressUndertakingStreet :[''],
      authorised :[''],
      issued :[''],
      paidUp :[''],
      bankName :[''],
      limitedBorrowings :[''],
      capitalDeposit:[''],
      total:[0],
      capital:[''],
      othersBorrowings:[''],
      fixedAssets:[''],
      land:[''],
      buildingStructure:[''],
      plantMachinery:[''],
      others:[''],
      contingencies:[''],
      preOperatives:[''],
      margin:[''],
      importedOrigin:[''],
      indigenousOrigin:[''],
      rawMaterialimportedOrigin:[''],
      rawMaterialindigenousOrigin:[''],
      qtyValueBarley:[''],
      particularsOfRequirements:[''],
      securedPermission:[''],
      fitWaterQuality:[''],
      briefProcess:[''],
      standardQuantity:[''],
      foreignCollab:[''],
      panNo:[''],
      processItr:[''],
      processReason:[''],
      precludeBarley:[''],
      bankAccountNumber:[''],
      bankIFSC:[''],
      saluatation:[''],
      applicationFees:[0],
      applicantWard:[''],
      mfa:['']
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
  add(B19Form){
    let params = {
      "financialYear": this.B19Form.value.financialYear,
      "dateOfApplication": this.B19Form.value.dateOfApplication,
      "firstName": this.B19Form.value.firstName,
      "middleName": this.B19Form.value.middleName,
      "lastName": this.B19Form.value.lastName,
      "mobileNumber": parseInt(this.B19Form.value.mobileNumber),
      "emailId": this.B19Form.value.emailId,
      "aadhaarNumber":parseInt(this.B19Form.value.aadhaarNumber) ,
      "gender": this.B19Form.value.gender,
      "dateOfBirth": this.B19Form.value.dateOfBirth,
      "panNumber": this.B19Form.value.panNumber,
      "fathersName": this.B19Form.value.fathersName,
      "applicantItr": this.B19Form.value.applicantItr,
      "applicantReason": this.B19Form.value.applicantReason,
      "applicantCountry": this.B19Form.value.applicantCountry,
      "applicantPinCode": this.B19Form.value.applicantPinCode,
      "applicantState": parseInt(this.B19Form.value.applicantState),
      "applicantDistrict": parseInt(this.B19Form.value.applicantDistrict),
      "applicantTehsil": parseInt(this.B19Form.value.applicantTehsil),
      "applicantUrban": parseInt(this.B19Form.value.applicantUrban),
      "applicantMunicipalArea": parseInt(this.B19Form.value.applicantMunicipalArea) ? this.B19Form.value.applicantMunicipalArea : null,
      "applicantBlock": parseInt(this.B19Form.value.applicantBlock) ? this.B19Form.value.applicantBlock : null,
      "applicantVillage": parseInt(this.B19Form.value.applicantVillage) ? this.B19Form.value.applicantVillage : null,
      "applicantPoliceStation": parseInt(this.B19Form.value.applicantPoliceStation),
      "applicantLocality": this.B19Form.value.applicantLocality,
      "applicantStreet": this.B19Form.value.applicantStreet,
      "addressUndertakingCountry": this.B19Form.value.addressUndertakingCountry,
      "addressUndertakingPinCode": this.B19Form.value.addressUndertakingPinCode,
      "addressUndertakingState": parseInt(this.B19Form.value.addressUndertakingState),
      "addressUndertakingDistrict": parseInt(this.B19Form.value.addressUndertakingDistrict),
      "addressUndertakingTehsil": parseInt(this.B19Form.value.addressUndertakingTehsil),
      "addressUndertakingUrban": parseInt(this.B19Form.value.addressUndertakingUrban),
      "addressUndertakingMunicipalArea": parseInt(this.B19Form.value.addressUndertakingMunicipalArea) ? this.B19Form.value.addressUndertakingMunicipalArea : null,
      "addressUndertakingWard": this.B19Form.value.addressUndertakingWard ? this.B19Form.value.addressUndertakingWard : null,
      "addressUndertakingBlock": parseInt(this.B19Form.value.addressUndertakingBlock) ? this.B19Form.value.addressUndertakingBlock : null,
      "addressUndertakingVillage": parseInt(this.B19Form.value.addressUndertakingVillage) ? this.B19Form.value.addressUndertakingVillage : null,
      "addressUndertakingPoliceStation": parseInt(this.B19Form.value.addressUndertakingPoliceStation),
      "addressUndertakingLocality": this.B19Form.value.addressUndertakingLocality,
      "addressUndertakingStreet": this.B19Form.value.addressUndertakingStreet,
      "authorised": this.B19Form.value.authorised,
      "issued": this.B19Form.value.issued,
      "paidUp": this.B19Form.value.paidUp,
      "bankName": this.B19Form.value.bankName,
      "limitedBorrowings": this.B19Form.value.limitedBorrowings,
      "capitalDeposit": this.B19Form.value.capitalDeposit,
      "total": this.B19Form.value.total,
      "capital": this.B19Form.value.capital,
      "othersBorrowings": this.B19Form.value.othersBorrowings,
      "fixedAssets": this.B19Form.value.fixedAssets,
      "land": this.B19Form.value.land,
      "buildingStructure": this.B19Form.value.buildingStructure,
      "plantMachinery": this.B19Form.value.plantMachinery,
      "others": this.B19Form.value.others,
      "contingencies": this.B19Form.value.contingencies,
      "preOperatives": this.B19Form.value.preOperatives,
      "margin": this.B19Form.value.margin,
      "importedOrigin": this.B19Form.value.importedOrigin,
      "indigenousOrigin": this.B19Form.value.indigenousOrigin,
      "rawMaterialimportedOrigin": this.B19Form.value.rawMaterialimportedOrigin,
      "rawMaterialindigenousOrigin": this.B19Form.value.rawMaterialindigenousOrigin,
      "qtyValueBarley": this.B19Form.value.qtyValueBarley,
      "particularsOfRequirements": this.B19Form.value.particularsOfRequirements,
      "securedPermission": this.B19Form.value.securedPermission,
      "fitWaterQuality": this.B19Form.value.fitWaterQuality,
      "briefProcess": this.B19Form.value.briefProcess,
      "standardQuantity": this.B19Form.value.standardQuantity,
      "foreignCollab": this.B19Form.value.foreignCollab,
      "panNo": this.B19Form.value.panNo,
      "itr": this.B19Form.value.itr,
      "reason": this.B19Form.value.reason,
      "precludeBarley": this.B19Form.value.precludeBarley,
      "bankAccountNumber":parseInt(this.B19Form.value.bankAccountNumber),
      "bankIFSC": this.B19Form.value.bankIFSC,
      "saluatation": parseInt(this.B19Form.value.saluatation),
      "applicationFees": this.B19Form.value.applicationFees,
      "applicantWard": this.B19Form.value.applicantWard ? this.B19Form.value.applicantWard : null,
      "mfa": this.B19Form.value.mfa,
      "status": true,
      "entityId": 0
    }
    this.formSubmitted = false;
    if (B19Form.valid === false) {
      this.formSubmitted = true;
    }
    else {
      this.b19service.addb19(params).subscribe((response: any) => {
        if (response.status == "s") {
          this.alert.showSuccess(response.userDisplayMesg, 'Success');
          this.B19Form.reset();
        }

        else {
          this.alert.showError(response['userDisplayMesg'], 'error')
        }

      })
    }
  }
  setData() {
    this.B19Form.patchValue(this.registrationObj);
    this.getdistrict1(this.B19Form.value.applicantState);

  }
urban($event){
    console.log($event.target.value);
    if ($event.target.value == 1) {
      this.headurban = true;
      this.headrural = false;
      this.B19Form.controls['applicantMunicipalArea'].setValidators([Validators.required]);
      this.B19Form.controls['applicantMunicipalArea'].updateValueAndValidity();
      this.B19Form.controls['applicantBlock'].setValidators([]);
      this.B19Form.controls['applicantBlock'].updateValueAndValidity();
      this.B19Form.controls['applicantVillage'].setValidators([]);
      this.B19Form.controls['applicantVillage'].updateValueAndValidity();
      // this.formSubmitted = true;
    }
    else if ($event.target.value == 2) {
      this.headrural = true;
      this.headurban = false;
      this.B19Form.controls['applicantBlock'].setValidators([Validators.required]);
      this.B19Form.controls['applicantBlock'].updateValueAndValidity();
      this.B19Form.controls['applicantVillage'].setValidators([Validators.required]);
      this.B19Form.controls['applicantVillage'].updateValueAndValidity();
      this.B19Form.controls['applicantMunicipalArea'].setValidators([]);
      this.B19Form.controls['applicantMunicipalArea'].updateValueAndValidity();
      // this.formSubmitted = true;
    }
    else {
      this.headrural = false;
      this.headurban = false;
    }
  }
  urban1($event) {
    console.log($event.target.value);
    if ($event.target.value == 1) {
      this.headurban = true;
      this.headrural = false;
      this.B19Form.controls['addressUndertakingMunicipalArea'].setValidators([Validators.required]);
      this.B19Form.controls['addressUndertakingMunicipalArea'].updateValueAndValidity();
      this.B19Form.controls['addressUndertakingBlock'].setValidators([]);
      this.B19Form.controls['addressUndertakingBlock'].updateValueAndValidity();
      this.B19Form.controls['addressUndertakingVillage'].setValidators([]);
      this.B19Form.controls['addressUndertakingVillage'].updateValueAndValidity();
      // this.formSubmitted = true;
    }
    else if ($event.target.value == 2) {
      this.headrural = true;
      this.headurban = false;
      this.B19Form.controls['addressUndertakingBlock'].setValidators([Validators.required]);
      this.B19Form.controls['addressUndertakingBlock'].updateValueAndValidity();
      this.B19Form.controls['addressUndertakingVillage'].setValidators([Validators.required]);
      this.B19Form.controls['addressUndertakingVillage'].updateValueAndValidity();
      this.B19Form.controls['addressUndertakingMunicipalArea'].setValidators([]);
      this.B19Form.controls['addressUndertakingMunicipalArea'].updateValueAndValidity();
      // this.formSubmitted = true;
    }
    else {
      this.headrural = false;
      this.headurban = false;
    }
  }

  navigate(form) {
    sessionStorage.setItem('formdata', JSON.stringify(form.value));
    this.router.navigate(['/licencemgnt/brewery-winery/b19/view'])
  }
}