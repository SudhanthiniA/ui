import { formatDate } from '@angular/common';
import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertService, BlockMasterService, DistrictMasterService, MunicipalityMasterService, StatemasterService, TalukMasterService } from '@app/services';
import { NewlicenceB1Service } from '@app/services/new-licence';
import { DataTableDirective } from 'angular-datatables';
import { Subject } from 'rxjs-compat';
import * as moment from 'moment';
interface Post {
  startDate: Date;
}
@Component({
  selector: 'app-b1',
  templateUrl: './b1.component.html',
  styleUrls: ['./b1.component.scss']
})
export class B1Component implements OnInit {
  B1Form: FormGroup;
  formSubmitted = false;
  states: any;
  districts: any;
  premisestates: any;
  breweryUnitDistricts: any;
  urbancheck: any;
  headrural = false;
  headurban = false;
  breweryUnitUrban = false;
  premisesrural = false;
  list: any;
  datalist: any;
  registrationObj: any = JSON.parse(sessionStorage.getItem('formdata'));
  @ViewChild(DataTableDirective, { static: false })
  dtElement: DataTableDirective;
  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject();
  constructor(
    private state: StatemasterService,
    private district: DistrictMasterService,
    private formBuilder: FormBuilder,
    private router: Router,
    private alert: AlertService,
    private municipalitySer: MunicipalityMasterService,
    private talukService: TalukMasterService,
    private b1service: NewlicenceB1Service,
    private blockservice: BlockMasterService

  ) { }
  post: Post = {
    startDate: new Date(Date.now())
  }
  maxDate = moment(new Date()).format('YYYY-MM-DD');
  ngOnInit() {
    this.getall();
    this.createFormGrp();
    if (this.B1Form) {
      this.setData();
    }
    this.getstate();
    this.getbreweryUnitState();
  }
  setData() {
    this.B1Form.patchValue(this.registrationObj);
    // this.getpremisesdistrict(this.FL9.value.stateId)
  }
  createFormGrp() {
    this.B1Form = this.formBuilder.group({
      financialYear:['2020-2021'],
      dateOfApplication: [formatDate(this.post.startDate, 'yyyy-MM-dd', 'en')],
      saluatation : ['', Validators.required],
      firstName :['', Validators.required],
      middleName  :[''],
      lastName :['', Validators.required],
      mobileNumber :['', Validators.required],
      emailId :['', [Validators.required, Validators.email,Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]],
      aadhaarNumber :['', Validators.required],
      gender :['', Validators.required],
      dateOfBirth :['', Validators.required],
      panNumber :['', Validators.required],
      fathersName :['', Validators.required],
      itr :['', Validators.required],
      reason :['', Validators.required],
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
      premisesOwnership :['', Validators.required],
      breweryUnitCountry :['INDIA'],
      breweryUnitPinCode :[''],
      breweryUnitState :['', Validators.required],
      breweryUnitDistrict :['', Validators.required],
      breweryUnitTehsil :['', Validators.required],
      breweryUnitUrban :['', Validators.required],
      breweryUnitMunicipalArea :[''],
      breweryUnitWard :[''],
      breweryUnitBlock :[''],
      breweryUnitVillage :[''],
      breweryUnitPoliceStation :['', Validators.required],
      breweryUnitLocality :['', Validators.required],
      breweryUnitStreet :['', Validators.required],
      bankAccountNumber :['', Validators.required],
      bankIFSC :['', Validators.required],
      bankName :['', Validators.required],
      applicationFees :['', Validators.required],
    });
  }
  test(event){
    console.log(event.target.value);
    
  }
  getall() {
    this.blockservice.getAllBlocks().subscribe((resp: any) => {
      this.list = resp.data;
      this.datalist = this.list.map(element => {
        // console.log(element.ticketNumber)
        return {
          name: element.name,
          // id: element.id
        }
      });
      if (this.dtElement.dtInstance) {
        this.dtElement.dtInstance.then((dtInstance: DataTables.Api) => {
          dtInstance.destroy();
          this.dtTrigger.next();
        });
      } else {
        this.dtTrigger.next();
      }
    });
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 5,
      searching: false,
      lengthMenu: [5, 10, 20, 50, 100],
      scrollX: true
    };
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
  getbreweryUnitState(){
    this.state.getState().subscribe((responceData: any) => {
      this.premisestates = responceData.data;
    }); 
  }
  getbreweryUnitDistrict($event){
    let id = $event.target.value;
    this.district.getDistrictsByStateid(id).subscribe((responceData: any) => {
      this.breweryUnitDistricts = responceData.data;
    });
  }
  getbreweryUnitDistrict1(event){
    let id = event;
    this.district.getDistrictsByStateid(id).subscribe((responceData: any) => {
      this.breweryUnitDistricts = responceData.data;
    });
  }
  add(B1Form){
    this.formSubmitted = false;
    let params = {
      financialYear: B1Form.value.financialYear,
      dateOfApplication: B1Form.value.dateOfApplication,
      saluatation : B1Form.value.saluatation,
      firstName :B1Form.value.firstName,
      middleName  :B1Form.value.middleName,
      lastName :B1Form.value.lastName,
      mobileNumber :B1Form.value.mobileNumber,
      emailId :B1Form.value.emailId,
      aadhaarNumber :B1Form.value.aadhaarNumber,
      gender :B1Form.value.gender,
      dateOfBirth :B1Form.value.dateOfBirth,
      panNumber :B1Form.value.panNumber,
      fathersName :B1Form.value.fathersName,
      itr :B1Form.value.itr,
      reason :B1Form.value.reason,
      applicantCountry :B1Form.value.applicantCountry,
      applicantPinCode :B1Form.value.applicantPinCode,
      applicantState :parseInt(B1Form.value.applicantState)?parseInt(B1Form.value.applicantState):0,
      applicantDistrict :parseInt(B1Form.value.applicantDistrict)?parseInt(B1Form.value.applicantDistrict):0,
      applicantTehsil :parseInt(B1Form.value.applicantTehsil)?parseInt(B1Form.value.applicantTehsil):0,
      applicantUrban :parseInt(B1Form.value.applicantUrban)?parseInt(B1Form.value.applicantUrban):0,
      applicantMunicipalArea :parseInt(B1Form.value.applicantMunicipalArea)?parseInt(B1Form.value.applicantMunicipalArea):0,
      applicantWard :B1Form.value.applicantWard,
      applicantBlock :B1Form.value.applicantBlock,
      applicantVillage :parseInt(B1Form.value.applicantVillage)?parseInt(B1Form.value.applicantVillage):0,
      applicantPoliceStation :parseInt(B1Form.value.applicantPoliceStation)?parseInt(B1Form.value.applicantPoliceStation):0,
      applicantLocality :B1Form.value.applicantLocality,
      applicantStreet :B1Form.value.applicantStreet,
      premisesOwnership :B1Form.value.premisesOwnership,
      breweryUnitCountry :B1Form.value.breweryUnitCountry,
      breweryUnitPinCode :B1Form.value.breweryUnitPinCode,
      breweryUnitState :parseInt(B1Form.value.breweryUnitState)?parseInt(B1Form.value.breweryUnitState):0,
      breweryUnitDistrict :parseInt(B1Form.value.breweryUnitDistrict)?parseInt(B1Form.value.breweryUnitDistrict):0,
      breweryUnitTehsil :parseInt(B1Form.value.breweryUnitTehsil)?parseInt(B1Form.value.breweryUnitTehsil):0,
      breweryUnitUrban :parseInt(B1Form.value.breweryUnitUrban)?parseInt(B1Form.value.breweryUnitUrban):0,
      breweryUnitMunicipalArea :parseInt(B1Form.value.breweryUnitMunicipalArea)?parseInt(B1Form.value.breweryUnitMunicipalArea):0,
      breweryUnitWard :B1Form.value.breweryUnitWard,
      breweryUnitBlock :B1Form.value.breweryUnitBlock,
      breweryUnitVillage :parseInt(B1Form.value.breweryUnitVillage)?parseInt(B1Form.value.breweryUnitVillage):0,
      breweryUnitPoliceStation :parseInt(B1Form.value.breweryUnitPoliceStation)?parseInt(B1Form.value.breweryUnitPoliceStation):0,
      breweryUnitLocality :B1Form.value.breweryUnitLocality,
      breweryUnitStreet :B1Form.value.breweryUnitStreet,
      bankAccountNumber :B1Form.value.bankAccountNumber,
      bankIFSC :B1Form.value.bankIFSC,
      bankName : parseInt(B1Form.valuebankName)?parseInt(B1Form.valuebankName):0,
      applicationFees :B1Form.value.applicationFees,
      status: "DRAFT"
    }
    if (B1Form.valid === false) {
      this.formSubmitted = true;
    }
    else {
      this.b1service.addb1(params).subscribe((response: any) => {
        if (response.status == "s") {
        this.alert.showSuccess(response.userDisplayMesg, 'Success');
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
      this.B1Form.patchValue({
        breweryUnitPinCode : this.B1Form.value.applicantPinCode,
        breweryUnitState : this.B1Form.value.applicantState,
        breweryUnitDistrict : this.B1Form.value.applicantDistrict,
        breweryUnitTehsil : this.B1Form.value.applicantTehsil,
        breweryUnitUrban : this.B1Form.value.applicantUrban,
        breweryUnitMunicipalArea : this.B1Form.value.applicantMunicipalArea,
        breweryUnitWard : this.B1Form.value.applicantWard,
        breweryUnitBlock : this.B1Form.value.applicantBlock,
        breweryUnitVillage : this.B1Form.value.applicantVillage,
        breweryUnitPoliceStation : this.B1Form.value.applicantPoliceStation,
        breweryUnitLocality : this.B1Form.value.applicantLocality,
        breweryUnitStreet : this.B1Form.value.applicantStreet,
            });
      this.getbreweryUnitDistrict1(this.B1Form.value.applicantState)
      if(this.B1Form.value.breweryUnitUrban == 1){
        this.breweryUnitUrban = true;
        this.premisesrural = false;
      }
      else if(this.B1Form.value.breweryUnitUrban == 2){
        this.premisesrural = true;
        this.breweryUnitUrban = false;
      }
    }
    else if (this.urbancheck == false) {
      this.B1Form.patchValue({
        breweryUnitPinCode : '',
        breweryUnitState :'',
        breweryUnitDistrict :'',
        breweryUnitTehsil : '',
        breweryUnitUrban : '',
        breweryUnitMunicipalArea : '',
        breweryUnitWard : '',
        breweryUnitBlock : '',
        breweryUnitVillage : '',
        breweryUnitPoliceStation :'',
        breweryUnitLocality : '',
        breweryUnitStreet : '',
      });
      // if(this.B1Form.value.breweryUnitUrban == 1){
      //   this.breweryUnitUrban = true;
      //   this.premisesrural = false;
      // }
      // else if(this.B1Form.value.breweryUnitUrban == 2){
      //   this.premisesrural = true;
      //   this.breweryUnitUrban = false;
      // }
    }
  }
urban($event){
    console.log($event.target.value);
    if($event.target.value == 1){
    this.headurban = true;
    this.headrural = false;
    this.B1Form.controls['applicantMunicipalArea'].setValidators([Validators.required]);
    this.B1Form.controls['applicantMunicipalArea'].updateValueAndValidity();
    this.B1Form.controls['applicantBlock'].setValidators([]);
    this.B1Form.controls['applicantBlock'].updateValueAndValidity();
    this.B1Form.controls['applicantVillage'].setValidators([]);
    this.B1Form.controls['applicantVillage'].updateValueAndValidity();
    // this.formSubmitted = true;
    }
    else if($event.target.value == 2){
      this.headrural = true;
      this.headurban = false;
      this.B1Form.controls['applicantBlock'].setValidators([Validators.required]);
      this.B1Form.controls['applicantBlock'].updateValueAndValidity();
      this.B1Form.controls['applicantVillage'].setValidators([Validators.required]);
      this.B1Form.controls['applicantVillage'].updateValueAndValidity();
      this.B1Form.controls['applicantMunicipalArea'].setValidators([]);
    this.B1Form.controls['applicantMunicipalArea'].updateValueAndValidity();
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
        this.breweryUnitUrban = true;
        this.premisesrural = false;
        this.B1Form.controls['municipalArea'].setValidators([Validators.required]);
        this.B1Form.controls['municipalArea'].updateValueAndValidity();
        this.B1Form.controls['breweryUnitMunicipalArea'].setValidators([Validators.required]);
        this.B1Form.controls['breweryUnitMunicipalArea'].updateValueAndValidity();
        this.B1Form.controls['breweryUnitBlock'].setValidators([]);
        this.B1Form.controls['breweryUnitBlock'].updateValueAndValidity();
        this.B1Form.controls['breweryUnitVillage'].setValidators([]);
        this.B1Form.controls['breweryUnitVillage'].updateValueAndValidity();
        this.B1Form.controls['applicantBlock'].setValidators([]);
        this.B1Form.controls['applicantBlock'].updateValueAndValidity();
        this.B1Form.controls['applicantVillage'].setValidators([]);
        this.B1Form.controls['applicantVillage'].updateValueAndValidity();
      }
      else if (urbanshow == 2) {
        this.premisesrural = true;
        this.breweryUnitUrban = false;
        this.B1Form.controls['applicantMunicipalArea'].setValidators([]);
        this.B1Form.controls['applicantMunicipalArea'].updateValueAndValidity();
        this.B1Form.controls['breweryUnitMunicipalArea'].setValidators([]);
        this.B1Form.controls['breweryUnitMunicipalArea'].updateValueAndValidity();
        this.B1Form.controls['applicantBlock'].setValidators([Validators.required]);
        this.B1Form.controls['applicantBlock'].updateValueAndValidity();
        this.B1Form.controls['applicantVillage'].setValidators([Validators.required]);
        this.B1Form.controls['applicantVillage'].updateValueAndValidity();
        this.B1Form.controls['breweryUnitBlock'].setValidators([Validators.required]);
        this.B1Form.controls['breweryUnitBlock'].updateValueAndValidity();
        this.B1Form.controls['breweryUnitVillage'].setValidators([Validators.required]);
        this.B1Form.controls['breweryUnitVillage'].updateValueAndValidity();
      }
      else {
        this.premisesrural = false;
        this.breweryUnitUrban = false;
      }
    // }
  
  
    }
    gender1(event){
      let check = event.target.value;
      if(check=="Mr."){
        this.B1Form.patchValue({
          gender : "Male",
              });
      }else if( check=="Miss." || check=="Mrs."){
        this.B1Form.patchValue({
          gender : "Female",
              });
      }
        }
        numberOnly(event): boolean {
          const charCode = (event.which) ? event.which : event.keyCode;
          if (charCode > 31 && (charCode < 48 || charCode > 57)) {
            return false;
          }
          return true;
      
        }
    view(B1Form){
      this.router.navigate(['/licencemgnt/brewery-winery/b1/view']);
      sessionStorage.setItem('formdata', JSON.stringify(B1Form.value));    }
}
