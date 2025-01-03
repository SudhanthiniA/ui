import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { DatePipe } from '@angular/common';
import { AlertService } from '@app/services';
import {NewlicenseBhangCl8Service} from '@app/services/new-licence';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { formatDate } from '@angular/common';
import { DistrictMasterService, StatemasterService, TalukMasterService } from '@app/services';
interface Post {
  applicationDate: Date;
}
@Component({
  selector: 'app-cl8',
  templateUrl: './cl8.component.html',
  styleUrls: ['./cl8.component.scss']
})
export class Cl8Component implements OnInit {
  date: any;
  states:any;
  districts:any;
  curDate = new Date();
  cl8Form: FormGroup;
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
    private datepipe: DatePipe,
    private newlicenseBhangCl8Service: NewlicenseBhangCl8Service,
    private alert: AlertService,
    private formbuilder: FormBuilder
  ) { }

  ngOnInit() {
    this.buildPrescriptionFormGrp();
    this.getstate();
  }
  buildPrescriptionFormGrp() {
    this.cl8Form = this.formbuilder.group({
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
      "bankAccountNumber":['',Validators.required],
      "bankIfsc":['',Validators.required],
      "bankName":['',Validators.required],
      "uploadCancelCheque":[''],
      "applicationFees":['',Validators.required],
      "salesManDetailsEntityList": this.formbuilder.array([
        this.buildformgroup()
      ])
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
  directorurban($event){
    if($event.target.value == 'Urban'){
      this.director_urban = true;
      this.director_rural = false;
      this.cl8Form.controls['muncipalAreaId'].setValidators([Validators.required]);
      this.cl8Form.controls['muncipalAreaId'].updateValueAndValidity();
      this.cl8Form.controls['blockId'].setValidators([]);
      this.cl8Form.controls['blockId'].updateValueAndValidity();
      this.cl8Form.controls['villageId'].setValidators([]);
      this.cl8Form.controls['villageId'].updateValueAndValidity();
     
      }
      else if($event.target.value == 'Rural'){
        this.director_rural = true;
        this.director_urban = false;
        this.cl8Form.controls['blockId'].setValidators([Validators.required]);
        this.cl8Form.controls['blockId'].updateValueAndValidity();
        this.cl8Form.controls['villageId'].setValidators([Validators.required]);
        this.cl8Form.controls['villageId'].updateValueAndValidity();
        this.cl8Form.controls['muncipalAreaId'].setValidators([]);
        this.cl8Form.controls['muncipalAreaId'].updateValueAndValidity();
       
      }
      else{
        this.director_rural = false;
        this.director_urban = false;
        this.cl8Form.controls['muncipalAreaId'].setValidators([Validators.required]);
        this.cl8Form.controls['muncipalAreaId'].updateValueAndValidity();
       
      }
  }
  public getPresFormLength(): number {
    return (this.cl8Form.get('salesManDetailsEntityList') as FormArray).length;
  }
  addrow() {
    (this.cl8Form.get('salesManDetailsEntityList') as FormArray).push(this.buildformgroup());
    console.log(this.cl8Form.get('salesManDetailsEntityList') );
    
   }
   removeSelectedRow(idx: number) {
    (this.cl8Form.get('salesManDetailsEntityList') as FormArray).removeAt(idx);
    }
    buildformgroup(data?: any){

      return this.formbuilder.group({
        address:'',
        fullName:''
      });
    }
  add(cl8Form){ 
    console.log(cl8Form);
    
    let form = this.cl8Form.value
    this.formSubmitted = false;
    if (cl8Form.invalid) { 
      this.formSubmitted = true;
    } 
    else {
        this.newlicenseBhangCl8Service.addbhangcl8(form).subscribe((response: any) => {  
          if (response.status == "s") {
            this.alert.showSuccess(response.userDisplayMesg, 'Success');
            // this.exampleModalCenter.show()
            this.cl8Form.reset();
            this.router.navigate(['licencemgnt/bhang']);
          }
          else {
            this.alert.showError(response['userDisplayMesg'], 'error')
          }
        })
    }
}
preview(form) {
  sessionStorage.setItem('formdata', JSON.stringify(form.value));
  this.router.navigate(['/licencemgnt/bhang/cl8/view']);
}
}
