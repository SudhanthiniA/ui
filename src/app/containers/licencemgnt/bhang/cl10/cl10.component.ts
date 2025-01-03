import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup,FormArray, Validators } from '@angular/forms';
import { Router,ActivatedRoute } from '@angular/router';
import { formatDate } from '@angular/common';
import { AlertService, DistrictMasterService, StatemasterService } from '@app/services';
import { NewlicenceCl10Service } from  '@app/services/new-licence/newlicence-cl10service';

@Component({
  selector: 'app-cl10',
  templateUrl: './cl10.component.html',
  styleUrls: ['./cl10.component.scss']
})
export class Cl10Component implements OnInit {

  ClForm:FormGroup;
  formSubmitted=false;
  purposeofevent:string;
  urban:boolean=false;
  rural:boolean=false;
  editId: any;
  addedit: any;
  urbancheck:any;
  shopurban: boolean = false;
  shoprural: boolean = false;

  constructor(
    private state : StatemasterService,
    private district : DistrictMasterService,
    private formBuilder: FormBuilder,
    private router: Router,
    private route: ActivatedRoute,
    private alert: AlertService,
    private newlicencecl10service:NewlicenceCl10Service
  ) { }

  ngOnInit() {
    this.bhagCLFormGrp();
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
  bhagCLFormGrp() {
    this.ClForm = this.formBuilder.group({
      
         "applicantAadharNo": ['', Validators.required],
         "applicantMailId": ['', Validators.required],
         "applicantMobileNumber": ['', Validators.required],
        // "applicantPhotograph": [''],
         "applicationDate": [''],
         "financialyear": [''],
         "applicationFees": [''],
         "bankAccountNumber":['', Validators.required],
         "bankIfsc": ['', Validators.required],
         "bankName": ['', Validators.required],
         "blockId": [''],
         "districtId": ['', Validators.required],
         "dob": ['', Validators.required],
         "firstName":['', Validators.required],
         "genderId": [''],
         "lastName":['', Validators.required],
         "locality": [''],
         "middleName":[''],
        // "modifiedBy": [''],
        // "modifiedDate": [''],
         "muncipalAreaId": [''],
         "panNumber": ['', Validators.required],
          "pincode": [''],
         "policeStation": ['',Validators.required],
        
         "salutationId":['', Validators.required],
         "shopBlockId":['' ],
         "shopCountryId":['',Validators.required],
         "shopDistrictId":['', Validators.required],
         "shopLocality": [''],
         "shopMunicipalAreaId": [''],
         "shopPincode": [''],
         "shopPoliceStation": ['', Validators.required],
         "shopStateId": ['', Validators.required],
         "shopStreet": [''],
         "shopTehsilId": ['', Validators.required],
         "shopUrbanRural": [''],
         "shopVillageId": [''],
         "shopWard": [''],
         "stateId": ['', Validators.required],
         "street": [''],
         "tehsilId": ['', Validators.required],
         "address": [''],
         "fullName": [''],
        // "uploadCancelCheque": [''],
        // "uploadPan": [''],
        // "uploadaadhar":[''],
         "urbanOrRural": [''],
         "villageId": [''],
         "ward": [''],
        "salesManDetailsEntityList": this.formBuilder.array([
          this.buildformgroup()
        ])
       
    })
  }

  public addEmptyCtrl(): void {
    (this.ClForm.get('salesManDetailsEntityList') as FormArray).push(this.buildformgroup());
  }
  buildformgroup(data?: any){

    return this.formBuilder.group({
      'address': '',
      'fullName': '',
    });
  }
  addrow() {
    (this.ClForm.get('salesManDetailsEntityList') as FormArray).push(this.buildformgroup());
    console.log(this.ClForm.get('salesManDetailsEntityList') );
    
   }
   removeSelectedRow(idx: number) {
    (this.ClForm.get('salesManDetailsEntityList') as FormArray).removeAt(idx);
    }
    eventbar(event,value){
      console.log(value);
      
     if (value == 'Yes') {
       this.purposeofevent = 'commercial';
     } else {
       this.purposeofevent = 'noncommercial';
     }
   }
  
  addCLDetails(ClForm) {
    console.log(ClForm);
    let form = this.ClForm.value
    this.formSubmitted = false;
    if (ClForm.invalid) { 
      this.formSubmitted = true;
    } 
     else {
      this.newlicencecl10service.createClForm(form).subscribe((responceData: any) => {
          this.alert.showSuccess('Record created successfully', 'Success');
          this.router.navigate(['/licencemgnt/bhang']);
      })
      
    }
  }
  show($event){
    let urbanshow = $event.target.value;
    console.log($event.target.value);
    if(urbanshow == 1){
        this.urban = true;
        this.rural = false;
    }
    else if(urbanshow == 2){
      this.rural = true;
      this.urban = false;
    }
    
  }

  show1($event){
    let shopurbanshow = $event.target.value;
    console.log($event.target.value);
    if(shopurbanshow == 1){
        this.shopurban = true;
        this.shoprural = false;
    }
    else if(shopurbanshow == 2){
      this.shoprural = true;
      this.shopurban = false;
    }
  }
  reset(ClForm){
    this.ClForm.reset()
  }

  // check box

  checkboxchange(event) {
    console.log(event.target.checked)
    this.urbancheck = event.target.checked;
    if (this.urbancheck == true) {
      this.ClForm.patchValue({
        shopCountryId:this.ClForm.value.shopCountryId,
        shopMunicipalAreaId: this.ClForm.value.muncipalAreaId,
        shopBlockId: this.ClForm.value.blockId,
        shopVillageId: this.ClForm.value.villageId,
        shopLocality: this.ClForm.value.locality,
        shopStreet: this.ClForm.value.street,
        shopPincode: this.ClForm.value.pincode,
        shopStateId: this.ClForm.value.stateId,
        shopDistrictId: this.ClForm.value.districtId,
        shopTehsilId: this.ClForm.value.tehsilId,
        shopUrbanRural: this.ClForm.value.urbanOrRural,
        shopWard: this.ClForm.value.ward,
        shopPoliceStation: this.ClForm.value.policeStation,
      });
      console.log(this.ClForm.value.shopurban);
      
      if(this.ClForm.value.shopurban == 1){
        this.shopurban = true;
        this.shoprural = false;
      }
      else if(this.ClForm.value.shopurban == 2){
        this.shoprural = true;
        this.shopurban = false;
      }
    }
    else if (this.urbancheck == false) {
      this.ClForm.patchValue({
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
      if(this.ClForm.value.shopurban == 1){
        this.shopurban = true;
        this.shoprural = false;
      }
      else if(this.ClForm.value.shopurban == 2){
        this.shoprural = true;
        this.shopurban = false;
      }
    }
  }
}
