import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup,FormArray, Validators } from '@angular/forms';
import { Router,ActivatedRoute } from '@angular/router';
import { formatDate } from '@angular/common';
import { AlertService } from '@app/services';
import { NewlicenceST1Service } from  '@app/services/new-licence/newlicence-st1.service';
interface Post {
  startDate: Date;
}

@Component({
  selector: 'app-st1',
  templateUrl: './st1.component.html',
  styleUrls: ['./st1.component.scss']
})
export class St1Component implements OnInit {

  STForm:FormGroup;
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
    private newlicencecst1service:NewlicenceST1Service

  ) { }

  ngOnInit() {
    this.bhagSTFormGrp();
    // this.WithinUpObj.date = this.datepipe.transform(new Date(), 'yyyy-MM-dd');
    this.route.params.subscribe(params => {
      if (params.id) {
        // this.getWithinUpById(params.id);
        // this.WithinUpObj.id = params.id;
        this.editId = params.id;
        // this.addedit = 'Edit';

      }
    });
    this.addedit = this.router.url.includes('add') === true ? 'Add' : 'Edit';

  }
  post: Post = {
    startDate: new Date(Date.now())
  }
  bhagSTFormGrp() {
    this.STForm = this.formBuilder.group({
      "applicantAadharNo":['', Validators.required],
      "applicantMailId": ['', Validators.required],
      "applicantMobileNumber": ['', Validators.required],
      "applicantPhotograph": [''],
      "applicationDate": [formatDate(this.post.startDate, 'yyyy-MM-dd', 'en')],
      "applicationFees": [''],
      "bankAccountNumber": ['', Validators.required],
      "bankIfsc": ['', Validators.required],
      "bankName": ['', Validators.required],
      "blockId": [''],
      "country": ['INDIA'],
      "districtId": [''],
      "dob": ['', Validators.required],
      "financialyear": ['2020-2021'],
      "firstName": ['', Validators.required],
      "genderId":['', Validators.required],
      "lastName":['', Validators.required],
      "locality": [''],
      "middleName": [''],
      "muncipalAreaId":[''],
      "panNumber": ['', Validators.required],
      "pincode":[ ''],
      "policeStation":[ '', Validators.required],
      "salutationId":[ ''],
      "shopBlockId": [''],
      "shopCountry":['INDIA'],
      "shopDistrictId":['', Validators.required],
      "shopLocality": [''],
      "shopMunicipalAreaId": [''],
      "shopPincode": [''],
      "shopPoliceStation": ['', Validators.required],
      "shopStateId": ['', Validators.required],
      "shopStreet": [''],
      "shopTehsilId": ['', Validators.required],
      "shopUrbanRural": ['', Validators.required],
      "shopVillageId":[''],
      "shopWard": [''],
      "stateId": ['', Validators.required],
      "street": [''],
      "tehsilId":[''],
      // "uploadCancelCheque": "string",
      // "uploadPan": "string",
      // "uploadaadhar": "string",
      "urbanOrRural": ['', Validators.required],
      "villageId": ['', Validators.required],
      "ward":['', Validators.required],
      "scheduleDetailsEntityList": this.formBuilder.array([
        this.buildformgroup()
      ])
    })
  }

  public addEmptyCtrl(): void {
    (this.STForm.get('scheduleDetailsEntityList') as FormArray).push(this.buildformgroup());
  }

  public getPresFormLength(): number {
    return (this.STForm.get('scheduleDetailsEntityList') as FormArray).length;
  }
  addrow() {
    (this.STForm.get('scheduleDetailsEntityList') as FormArray).push(this.buildformgroup());
    console.log(this.STForm.get('scheduleDetailsEntityList') );
    
  }
  removeSelectedRow(idx: number) {
    (this.STForm.get('scheduleDetailsEntityList') as FormArray).removeAt(idx);
  }
  
  buildformgroup(data?: any){

    return this.formBuilder.group({
      numberOfTree: '',
      remarks: '',
      villageId:'',
      pargana:'',
      ownerName: '',
      kindOfTree: '',
      numberOfKhasra: ''
    });
  }

 

  //   eventbar(event,value){
  //     console.log(value);
      
  //    if (value == 'Yes') {
  //      this.purposeofevent = 'commercial';
  //    } else {
  //      this.purposeofevent = 'noncommercial';
  //    }
  //  }
  
  remarkValue(event,value){
    console.log(value);
   if (value == 'Yes') {
     this.remark = 'Approved';
   } else {
     this.remark = 'Failure';
   }
  }

  addCLDetails(STForm) {
    console.log(STForm);
    let form = this.STForm.value
    this.formSubmitted = false;
    if (STForm.invalid) { 
      this.formSubmitted = true;
    } 
     else {
      this.newlicencecst1service.createSTForm(form).subscribe((responceData: any) => {
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
      this.STForm.controls['muncipalAreaId'].setValidators([Validators.required]);
      this.STForm.controls['muncipalAreaId'].updateValueAndValidity();
      this.STForm.controls['shopMunicipalAreaId'].setValidators([Validators.required]);
      this.STForm.controls['shopMunicipalAreaId'].updateValueAndValidity();
      this.STForm.controls['shopBlockId'].setValidators([]);
      this.STForm.controls['shopBlockId'].updateValueAndValidity();
      this.STForm.controls['shopVillageId'].setValidators([]);
      this.STForm.controls['shopVillageId'].updateValueAndValidity();
      this.STForm.controls['blockId'].setValidators([]);
      this.STForm.controls['blockId'].updateValueAndValidity();
      this.STForm.controls['villageId'].setValidators([]);
      this.STForm.controls['villageId'].updateValueAndValidity();
    }
    else if (urbanshow == 2) {
      this.rural = true;
      this.urban = false;
      this.STForm.controls['muncipalAreaId'].setValidators([]);
      this.STForm.controls['muncipalAreaId'].updateValueAndValidity();
      this.STForm.controls['shopMunicipalAreaId'].setValidators([]);
      this.STForm.controls['shopMunicipalAreaId'].updateValueAndValidity();
      this.STForm.controls['blockId'].setValidators([Validators.required]);
      this.STForm.controls['blockId'].updateValueAndValidity();
      this.STForm.controls['villageId'].setValidators([Validators.required]);
      this.STForm.controls['villageId'].updateValueAndValidity();
      this.STForm.controls['shopBlockId'].setValidators([Validators.required]);
      this.STForm.controls['shopBlockId'].updateValueAndValidity();
      this.STForm.controls['shopVillageId'].setValidators([Validators.required]);
      this.STForm.controls['shopVillageId'].updateValueAndValidity();
    }
    else {
      this.rural = false;
      this.urban = false;
    }

  //   let urbanshow = $event.target.value;
  //   console.log($event.target.value);
  //   if(urbanshow == 1){
  //       this.urban = true;
  //       this.rural = false;
  //   }
  //   else if(urbanshow == 2){
  //     this.rural = true;
  //     this.urban = false;
  //   }
    
  }

  show1($event){
    console.log(this.urbancheck)
    let urbanshow = $event.target.value;
    
    console.log($event.target.value);
    if (urbanshow == 1) {
      this.shopurban = true;
      this.shoprural = false;
      this.STForm.controls['muncipalAreaId'].setValidators([Validators.required]);
      this.STForm.controls['muncipalAreaId'].updateValueAndValidity();
      this.STForm.controls['shopMunicipalAreaId'].setValidators([Validators.required]);
      this.STForm.controls['shopMunicipalAreaId'].updateValueAndValidity();
      this.STForm.controls['shopBlockId'].setValidators([]);
      this.STForm.controls['shopBlockId'].updateValueAndValidity();
      this.STForm.controls['shopVillageId'].setValidators([Validators.required]);
      this.STForm.controls['shopVillageId'].updateValueAndValidity();
      this.STForm.controls['blockId'].setValidators([]);
      this.STForm.controls['blockId'].updateValueAndValidity();
      this.STForm.controls['villageId'].setValidators([]);
      this.STForm.controls['villageId'].updateValueAndValidity();
    }
    else if (urbanshow == 2) {
      this.shoprural = true;
      this.shopurban = false;
      this.STForm.controls['muncipalAreaId'].setValidators([]);
      this.STForm.controls['muncipalAreaId'].updateValueAndValidity();
      this.STForm.controls['shopMunicipalAreaId'].setValidators([]);
      this.STForm.controls['shopMunicipalAreaId'].updateValueAndValidity();
      this.STForm.controls['blockId'].setValidators([Validators.required]);
      this.STForm.controls['blockId'].updateValueAndValidity();
      this.STForm.controls['villageId'].setValidators([Validators.required]);
      this.STForm.controls['villageId'].updateValueAndValidity();
      this.STForm.controls['shopBlockId'].setValidators([Validators.required]);
      this.STForm.controls['shopBlockId'].updateValueAndValidity();
      this.STForm.controls['shopVillageId'].setValidators([Validators.required]);
      this.STForm.controls['shopVillageId'].updateValueAndValidity();
    }
    else {
      this.shoprural = false;
      this.shopurban = false;
    }

    // let shopurbanshow = $event.target.value;
    // console.log($event.target.value);
    // if(shopurbanshow == 1){
    //     this.shopurban = true;
    //     this.shoprural = false;
    // }
    // else if(shopurbanshow == 2){
    //   this.shoprural = true;
    //   this.shopurban = false;
    // }
  }


  reset(STForm){
    this.STForm.reset()
  }

  // check box

  checkboxchange(event) {
    console.log(event.target.checked)
    this.urbancheck = event.target.checked;
    if (this.urbancheck == true) {
      this.STForm.patchValue({
        shopCountry:this.STForm.value.shopCountry,
        shopMunicipalAreaId: this.STForm.value.muncipalAreaId,
        shopBlockId: this.STForm.value.blockId,
        shopVillageId: this.STForm.value.villageId,
        shopLocality: this.STForm.value.locality,
        shopStreet: this.STForm.value.street,
        shopPincode: this.STForm.value.pincode,
        shopStateId: this.STForm.value.stateId,
        shopDistrictId: this.STForm.value.districtId,
        shopTehsilId: this.STForm.value.tehsilId,
        shopUrbanRural: this.STForm.value.urbanOrRural,
        shopWard: this.STForm.value.ward,
        shopPoliceStation: this.STForm.value.policeStation,
      });
      console.log(this.STForm.value.shopurban);
      
      if(this.STForm.value.shopurban == 1){
        this.shopurban = true;
        this.shoprural = false;
      }
      else if(this.STForm.value.shopurban == 2){
        this.shoprural = true;
        this.shopurban = false;
      }
    }
    else if (this.urbancheck == false) {
      this.STForm.patchValue({
        shopMunicipalAreaId: '',
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
      if(this.STForm.value.shopurban == 1){
        this.shopurban = true;
        this.shoprural = false;
      }
      else if(this.STForm.value.shopurban == 2){
        this.shoprural = true;
        this.shopurban = false;
      }
    }
  }
preview(form){
sessionStorage.setItem('formdata',JSON.stringify(form.value))
this.router.navigate(['/licencemgnt/bhang/st1/view']);
}
}
