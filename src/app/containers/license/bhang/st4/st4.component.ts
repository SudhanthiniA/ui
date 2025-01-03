import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup,FormArray, Validators } from '@angular/forms';
import { Router,ActivatedRoute } from '@angular/router';
import { formatDate } from '@angular/common';
import { AlertService } from '@app/services';
import { NewlicenceBangST4Service } from  '@app/services/new-licence/newlicence-bhang-st4.service';

interface Post {
  startDate: Date;
}

@Component({
  selector: 'app-st4',
  templateUrl: './st4.component.html',
  styleUrls: ['./st4.component.scss']
})
export class St4Component implements OnInit {

  
  ST4Form:FormGroup;
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
    private newlicencecst4service:NewlicenceBangST4Service,
  ) { }

  ngOnInit() {
    this.bhagST4FormGrp();
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

  bhagST4FormGrp() {
    this.ST4Form = this.formBuilder.group({

      "applicantAadharNo": ['', Validators.required],
      "applicantMailId": ['', Validators.required],
      "applicantMobileNumber": ['', Validators.required],
      //"applicantPhotograph":[''],
      "applicationDate": [''],
      "applicationFees":[''],
      "bankAccountNumber": ['', Validators.required],
      "bankIfsc":['', Validators.required],
      "bankName": ['', Validators.required],
      "blockId": [''],
      "country": ['INDIA', Validators.required],
      "districtId":['', Validators.required],
      "dob":[''],
      "financialyear": ['2020-2021'],
      "firstName": ['', Validators.required],
      "genderId":['', Validators.required],
      "lastName": ['', Validators.required],
      "locality": [''],
      "middleName": [''],
      "muncipalAreaId": ['', Validators.required],
      "panNumber":['', Validators.required],
      "pincode": [''],
      "policeStation": ['', Validators.required],
      "salutationId":['', Validators.required],
      "shopBlockId": [''],
      "shopCountry": ['INDIA', Validators.required],
      "shopDistrictId":['', Validators.required],
      "shopLocality": [''],
      "shopMunicipalAreaId":['', Validators.required],
      "shopPincode": [''],
      "shopPoliceStation": ['', Validators.required],
      "shopStateId":['', Validators.required],
      "shopStreet": [''],
      "shopTehsilId": ['', Validators.required],
      "shopUrbanRural": ['', Validators.required],
      "shopVillageId": [''],
      "shopWard":[''],
      "stateId": ['', Validators.required],
      "street": ['', Validators.required],
      "tehsilId":['', Validators.required],
      // "uploadCancelCheque": "string",
      // "uploadPan": "string",
      // "uploadaadhar": "string",
      "urbanOrRural": ['', Validators.required],
      "villageId":[''],
      "ward": [''],
      "scheduleDetailsEntityList":  this.formBuilder.array([
        this.buildformgroup()
      ])
      })
    }

    public addEmptyCtrl(): void {
      (this.ST4Form.get('scheduleDetailsEntityList') as FormArray).push(this.buildformgroup());
    }
  
    public getPresFormLength(): number {
      return (this.ST4Form.get('scheduleDetailsEntityList') as FormArray).length;
    }
    addrow() {
      (this.ST4Form.get('scheduleDetailsEntityList') as FormArray).push(this.buildformgroup());
      console.log(this.ST4Form.get('scheduleDetailsEntityList') );
      
    }
    removeSelectedRow(idx: number) {
      (this.ST4Form.get('scheduleDetailsEntityList') as FormArray).removeAt(idx);
    }
  
    // removeSelectedRow(idx: number) {
  //   (this.ST2Form.get('scheduleDetailsEntityList') as FormArray).removeAt(idx);
  // }

    buildformgroup(data?: any){
  
      return this.formBuilder.group({
        kindOfTree:'',
        numberOfKhasra:'',
        numberOfTree: '',
        ownerName: '',
        placePlanted: '',
        remarks: '',
        situationOfTree: ''
      });
    }
  
    addSTDetails(ST4Form) {
      console.log(ST4Form);
      let form = this.ST4Form.value
      this.formSubmitted = false;
      if (ST4Form.invalid) { 
        this.formSubmitted = true;
      } 
       else {
        this.newlicencecst4service.createSTForm(form).subscribe((responceData: any) => {
            this.alert.showSuccess('Record created successfully', 'Success');
            this.router.navigate(['/licencemgnt/bhang']);
        })
        
      }
    }

    show($event){
      let urbanshow = $event.target.value;
      if (urbanshow == 'Urban') {
        this.urban = true;
        this.rural = false;
        this.ST4Form.controls['muncipalAreaId'].setValidators([Validators.required]);
        this.ST4Form.controls['muncipalAreaId'].updateValueAndValidity();
        this.ST4Form.controls['shopMunicipalAreaId'].setValidators([Validators.required]);
        this.ST4Form.controls['shopMunicipalAreaId'].updateValueAndValidity();
        this.ST4Form.controls['shopBlockId'].setValidators([]);
        this.ST4Form.controls['shopBlockId'].updateValueAndValidity();
        this.ST4Form.controls['shopVillageId'].setValidators([]);
        this.ST4Form.controls['shopVillageId'].updateValueAndValidity();
        this.ST4Form.controls['blockId'].setValidators([]);
        this.ST4Form.controls['blockId'].updateValueAndValidity();
        this.ST4Form.controls['villageId'].setValidators([]);
        this.ST4Form.controls['villageId'].updateValueAndValidity();
      }
      else if (urbanshow == 'Rural') {
        this.rural = true;
        this.urban = false;
        this.ST4Form.controls['muncipalAreaId'].setValidators([]);
        this.ST4Form.controls['muncipalAreaId'].updateValueAndValidity();
        this.ST4Form.controls['shopMunicipalAreaId'].setValidators([]);
        this.ST4Form.controls['shopMunicipalAreaId'].updateValueAndValidity();
        this.ST4Form.controls['blockId'].setValidators([Validators.required]);
        this.ST4Form.controls['blockId'].updateValueAndValidity();
        this.ST4Form.controls['villageId'].setValidators([Validators.required]);
        this.ST4Form.controls['villageId'].updateValueAndValidity();
        this.ST4Form.controls['shopBlockId'].setValidators([Validators.required]);
        this.ST4Form.controls['shopBlockId'].updateValueAndValidity();
        this.ST4Form.controls['shopVillageId'].setValidators([Validators.required]);
        this.ST4Form.controls['shopVillageId'].updateValueAndValidity();
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
      if (urbanshow == 'Urban') {
        this.shopurban = true;
        this.shoprural = false;
        this.ST4Form.controls['muncipalAreaId'].setValidators([Validators.required]);
        this.ST4Form.controls['muncipalAreaId'].updateValueAndValidity();
        this.ST4Form.controls['shopMunicipalAreaId'].setValidators([Validators.required]);
        this.ST4Form.controls['shopMunicipalAreaId'].updateValueAndValidity();
        this.ST4Form.controls['shopBlockId'].setValidators([]);
        this.ST4Form.controls['shopBlockId'].updateValueAndValidity();
        this.ST4Form.controls['shopVillageId'].setValidators([Validators.required]);
        this.ST4Form.controls['shopVillageId'].updateValueAndValidity();
        this.ST4Form.controls['blockId'].setValidators([]);
        this.ST4Form.controls['blockId'].updateValueAndValidity();
        this.ST4Form.controls['villageId'].setValidators([]);
        this.ST4Form.controls['villageId'].updateValueAndValidity();
      }
      else if (urbanshow == 'Rural') {
        this.shoprural = true;
        this.shopurban = false;
        this.ST4Form.controls['muncipalAreaId'].setValidators([]);
        this.ST4Form.controls['muncipalAreaId'].updateValueAndValidity();
        this.ST4Form.controls['shopMunicipalAreaId'].setValidators([]);
        this.ST4Form.controls['shopMunicipalAreaId'].updateValueAndValidity();
        this.ST4Form.controls['blockId'].setValidators([Validators.required]);
        this.ST4Form.controls['blockId'].updateValueAndValidity();
        this.ST4Form.controls['villageId'].setValidators([Validators.required]);
        this.ST4Form.controls['villageId'].updateValueAndValidity();
        this.ST4Form.controls['shopBlockId'].setValidators([Validators.required]);
        this.ST4Form.controls['shopBlockId'].updateValueAndValidity();
        this.ST4Form.controls['shopVillageId'].setValidators([Validators.required]);
        this.ST4Form.controls['shopVillageId'].updateValueAndValidity();
      }
      else {
        this.shoprural = false;
        this.shopurban = false;
      }
    }
  
  
    reset(ST4Form){
      this.ST4Form.reset()
    }
  
    // check box
  
    checkboxchange(event) {
      console.log(event.target.checked)
      this.urbancheck = event.target.checked;
      if (this.urbancheck == true) {
        this.ST4Form.patchValue({
          shopCountry:this.ST4Form.value.country,
          shopMunicipalAreaId: this.ST4Form.value.muncipalAreaId,
          shopBlockId: this.ST4Form.value.blockId,
          shopVillageId: this.ST4Form.value.villageId,
          shopLocality: this.ST4Form.value.locality,
          shopStreet: this.ST4Form.value.street,
          shopPincode: this.ST4Form.value.pincode,
          shopStateId: this.ST4Form.value.stateId,
          shopDistrictId: this.ST4Form.value.districtId,
          shopTehsilId: this.ST4Form.value.tehsilId,
          shopUrbanRural: this.ST4Form.value.urbanOrRural,
          shopWard: this.ST4Form.value.ward,
          shopPoliceStation: this.ST4Form.value.policeStation,
        });
        console.log(this.ST4Form.value.shopurban);
        
        if(this.ST4Form.value.shopurban == 1){
          this.shopurban = true;
          this.shoprural = false;
        }
        else if(this.ST4Form.value.shopurban == 2){
          this.shoprural = true;
          this.shopurban = false;
        }
      }
      else if (this.urbancheck == false) {
        this.ST4Form.patchValue({
          shopMunicipalAreaIdv: '',
          shopBlockId: '',
          shopVillageId: '',
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
        if(this.ST4Form.value.shopurban == 1){
          this.shopurban = true;
          this.shoprural = false;
        }
        else if(this.ST4Form.value.shopurban == 2){
          this.shoprural = true;
          this.shopurban = false;
        }
      }
    }
    preview(form) {
      sessionStorage.setItem('formdata', JSON.stringify(form.value));
      this.router.navigate(['/licencemgnt/bhang/st4/view']);
    }
  
}
