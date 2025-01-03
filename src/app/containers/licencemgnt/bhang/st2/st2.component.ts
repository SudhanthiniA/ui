import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup,FormArray, Validators } from '@angular/forms';
import { Router,ActivatedRoute } from '@angular/router';
import { formatDate } from '@angular/common';
import { AlertService } from '@app/services';
import { NewlicenceST2Service } from  '@app/services/new-licence/newlicence-st2.service';

interface Post {
  startDate: Date;
}

@Component({
  selector: 'app-st2',
  templateUrl: './st2.component.html',
  styleUrls: ['./st2.component.scss']
})
export class St2Component implements OnInit {

  ST2Form:FormGroup;
  formSubmitted=false;
  purposeofevent:string;
  remark:string;
  genders: any;
  states: any;
  districts: any;
  urban:boolean=false;
  rural:boolean=false;
  editId: any;
  addedit: any;
  urbancheck:any;
  shopurban: boolean = false;
  shoprural: boolean = false;
  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private route: ActivatedRoute,
    private alert: AlertService,
    private newlicencecst2service:NewlicenceST2Service

  ) { }

  ngOnInit() {
    this.bhagST2FormGrp();
    this.route.params.subscribe(params => {
      if (params.id) {
        this.editId = params.id;

      }
    });
    this.addedit = this.router.url.includes('add') === true ? 'Add' : 'Edit';
  }

  post: Post = {
    startDate: new Date(Date.now())
  }

  bhagST2FormGrp() {
    this.ST2Form = this.formBuilder.group({
        "advancePaymentAmount": ['', Validators.required],
        "applicantAadharNo":['', Validators.required],
        "applicantMailId": [''],
        "applicantMobileNumber":['', Validators.required],
        // "applicantPhotograph": [''],
        "applicationDate":[''],
        "applicationFees": [''],
        "bankAccountNumber": ['', Validators.required],
        "bankIfsc":['', Validators.required],
        "bankName": ['', Validators.required],
        "blockId": [''],
        "country": ['INDIA'],
        "districtId": ['', Validators.required],
        "dob":[''],
        "financialyear": ['2020-2021'],
        "firstName": ['', Validators.required],
        "genderId": ['', Validators.required],
        "lastName": ['', Validators.required],
        "locality": [''],
        "middleName": [''],
        "muncipalAreaId":[''],
        "panNumber": [''],
        "pincode":[''],
        "policeStation":['', Validators.required],
        "salutationId": ['', Validators.required],
        "shopBlockId": [''],
        "shopCountry":['INDIA'],
        "shopDistrictId": ['', Validators.required],
        "shopLocality": [''],
        "shopMunicipalAreaIdv":[''],
        "shopPincode": [''],
        "shopPoliceStation": ['',Validators.required],
        "shopStateId": [''],
        "shopStreet": [''],
        "shopTehsilId":['', Validators.required],
        "shopUrbanRural":[''],
        "shopvillageId":['', Validators.required],
        "shopWard": [''],
        "stateId": ['', Validators.required],
        "street": [''],
        "tehsilId": [''],
        // "uploadCancelCheque": [''],
        // "uploadPan": [''],
        // "uploadaadhar": [''],
        "urbanOrRural": [''],
        "villageId":[''],
        "ward":[''],
        "scheduleDetailsEntityList":  this.formBuilder.array([
          this.buildformgroup()
        ])
    })
  }

  public addEmptyCtrl(): void {
    (this.ST2Form.get('scheduleDetailsEntityList') as FormArray).push(this.buildformgroup());
  }

  public getPresFormLength(): number {
    return (this.ST2Form.get('scheduleDetailsEntityList') as FormArray).length;
  }
  addrow() {
    (this.ST2Form.get('scheduleDetailsEntityList') as FormArray).push(this.buildformgroup());
    console.log(this.ST2Form.get('scheduleDetailsEntityList') );
    
  }
  removeSelectedRow(idx: number) {
    (this.ST2Form.get('scheduleDetailsEntityList') as FormArray).removeAt(idx);
  }

  buildformgroup(data?: any){

    return this.formBuilder.group({
      numberOfTree: '',
      remarks: '',
      placePlanted:'',
      ownerName: '',
      kindOfTree: '',
      situationOfTree:'',
      numberOfKhasra: ''
    });
  }

  addSTDetails(ST2Form) {
    console.log(ST2Form);
    let form = this.ST2Form.value
    this.formSubmitted = false;
    if (ST2Form.invalid) { 
      this.formSubmitted = true;
    } 
     else {
      this.newlicencecst2service.createSTForm(form).subscribe((responceData: any) => {
          this.alert.showSuccess('Record created successfully', 'Success');
          this.router.navigate(['/licencemgnt/bhang']);
      })
      
    }
  }

  show($event){
    let urbanshow = $event.target.value;
    if (urbanshow == 1) {
      this.urban = true;
      this.rural = false;
      this.ST2Form.controls['muncipalAreaId'].setValidators([Validators.required]);
      this.ST2Form.controls['muncipalAreaId'].updateValueAndValidity();
      this.ST2Form.controls['shopMunicipalAreaIdv'].setValidators([Validators.required]);
      this.ST2Form.controls['shopMunicipalAreaIdv'].updateValueAndValidity();
      this.ST2Form.controls['shopBlockId'].setValidators([]);
      this.ST2Form.controls['shopBlockId'].updateValueAndValidity();
      this.ST2Form.controls['shopvillageId'].setValidators([]);
      this.ST2Form.controls['shopvillageId'].updateValueAndValidity();
      this.ST2Form.controls['blockId'].setValidators([]);
      this.ST2Form.controls['blockId'].updateValueAndValidity();
      this.ST2Form.controls['villageId'].setValidators([]);
      this.ST2Form.controls['villageId'].updateValueAndValidity();
    }
    else if (urbanshow == 2) {
      this.rural = true;
      this.urban = false;
      this.ST2Form.controls['muncipalAreaId'].setValidators([]);
      this.ST2Form.controls['muncipalAreaId'].updateValueAndValidity();
      this.ST2Form.controls['shopMunicipalAreaIdv'].setValidators([]);
      this.ST2Form.controls['shopMunicipalAreaIdv'].updateValueAndValidity();
      this.ST2Form.controls['blockId'].setValidators([Validators.required]);
      this.ST2Form.controls['blockId'].updateValueAndValidity();
      this.ST2Form.controls['villageId'].setValidators([Validators.required]);
      this.ST2Form.controls['villageId'].updateValueAndValidity();
      this.ST2Form.controls['shopBlockId'].setValidators([Validators.required]);
      this.ST2Form.controls['shopBlockId'].updateValueAndValidity();
      this.ST2Form.controls['shopvillageId'].setValidators([Validators.required]);
      this.ST2Form.controls['shopvillageId'].updateValueAndValidity();
    }
    else {
      this.rural = false;
      this.urban = false;
    }
  }

  show1($event){
    console.log(this.urbancheck)
    let urbanshow = $event.target.value;
    
    console.log($event.target.value);
    if (urbanshow == 1) {
      this.shopurban = true;
      this.shoprural = false;
      this.ST2Form.controls['muncipalAreaId'].setValidators([Validators.required]);
      this.ST2Form.controls['muncipalAreaId'].updateValueAndValidity();
      this.ST2Form.controls['shopMunicipalAreaIdv'].setValidators([Validators.required]);
      this.ST2Form.controls['shopMunicipalAreaIdv'].updateValueAndValidity();
      this.ST2Form.controls['shopBlockId'].setValidators([]);
      this.ST2Form.controls['shopBlockId'].updateValueAndValidity();
      this.ST2Form.controls['shopvillageId'].setValidators([Validators.required]);
      this.ST2Form.controls['shopvillageId'].updateValueAndValidity();
      this.ST2Form.controls['blockId'].setValidators([]);
      this.ST2Form.controls['blockId'].updateValueAndValidity();
      this.ST2Form.controls['villageId'].setValidators([]);
      this.ST2Form.controls['villageId'].updateValueAndValidity();
    }
    else if (urbanshow == 2) {
      this.shoprural = true;
      this.shopurban = false;
      this.ST2Form.controls['muncipalAreaId'].setValidators([]);
      this.ST2Form.controls['muncipalAreaId'].updateValueAndValidity();
      this.ST2Form.controls['shopMunicipalAreaIdv'].setValidators([]);
      this.ST2Form.controls['shopMunicipalAreaIdv'].updateValueAndValidity();
      this.ST2Form.controls['blockId'].setValidators([Validators.required]);
      this.ST2Form.controls['blockId'].updateValueAndValidity();
      this.ST2Form.controls['villageId'].setValidators([Validators.required]);
      this.ST2Form.controls['villageId'].updateValueAndValidity();
      this.ST2Form.controls['shopBlockId'].setValidators([Validators.required]);
      this.ST2Form.controls['shopBlockId'].updateValueAndValidity();
      this.ST2Form.controls['shopvillageId'].setValidators([Validators.required]);
      this.ST2Form.controls['shopvillageId'].updateValueAndValidity();
    }
    else {
      this.shoprural = false;
      this.shopurban = false;
    }
  }


  reset(ST2Form){
    this.ST2Form.reset()
  }

  // check box

  checkboxchange(event) {
    console.log(event.target.checked)
    this.urbancheck = event.target.checked;
    if (this.urbancheck == true) {
      this.ST2Form.patchValue({
        shopCountry:this.ST2Form.value.country,
        shopMunicipalAreaIdv: this.ST2Form.value.muncipalAreaId,
        shopBlockId: this.ST2Form.value.blockId,
        shopvillageId: this.ST2Form.value.villageId,
        shopLocality: this.ST2Form.value.locality,
        shopStreet: this.ST2Form.value.street,
        shopPincode: this.ST2Form.value.pincode,
        shopStateId: this.ST2Form.value.stateId,
        shopDistrictId: this.ST2Form.value.districtId,
        shopTehsilId: this.ST2Form.value.tehsilId,
        shopUrbanRural: this.ST2Form.value.urbanOrRural,
        shopWard: this.ST2Form.value.ward,
        shopPoliceStation: this.ST2Form.value.policeStation,
      });
      console.log(this.ST2Form.value.shopurban);
      
      if(this.ST2Form.value.shopurban == 1){
        this.shopurban = true;
        this.shoprural = false;
      }
      else if(this.ST2Form.value.shopurban == 2){
        this.shoprural = true;
        this.shopurban = false;
      }
    }
    else if (this.urbancheck == false) {
      this.ST2Form.patchValue({
        shopMunicipalAreaIdv: '',
        shopBlockId: '',
        shopvillageId: '',
        shopLocality: '',
        shopStreet: '',
        shopPincode:'',
        shopStateId: '',
        shopDistrictId:'',
        shopTehsilId: '',
        shopUrbanRural:'',
        shopWard: '',
        shopPoliceStation: '',
      });
      if(this.ST2Form.value.shopurban == 1){
        this.shopurban = true;
        this.shoprural = false;
      }
      else if(this.ST2Form.value.shopurban == 2){
        this.shoprural = true;
        this.shopurban = false;
      }
    }
  }
  preview(form) {
    sessionStorage.setItem('formdata', JSON.stringify(form.value));
    this.router.navigate(['/licencemgnt/bhang/st2/view']);
  }

}
