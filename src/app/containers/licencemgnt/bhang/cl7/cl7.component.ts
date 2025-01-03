import { Component, OnInit,ViewChild } from '@angular/core';
import { FormBuilder, FormGroup,FormArray, Validators } from '@angular/forms';
import { Router,ActivatedRoute } from '@angular/router';
import { formatDate } from '@angular/common';
import { AlertService, DistrictMasterService, StatemasterService } from '@app/services';
import { NewlicenceCl7Service } from  '@app/services/new-licence/newlicence-cl7.service';

interface Post {
  startDate: Date;
}

@Component({
  selector: 'app-cl7',
  templateUrl: './cl7.component.html',
  styleUrls: ['./cl7.component.scss']
})
export class Cl7Component implements OnInit {

  ClForm:FormGroup;
  formSubmitted=false;
  purposeofevent:string;
  states:any;
  editId: any;
  addedit: any;
  districts:any;
  districts1:any;
  districts2:any;
  headurban:boolean=false;
  headrural:boolean=false;
  work_urban:boolean=false;
  work_rural:boolean=false;
  director_urban:boolean=false;
  director_rural:boolean=false;
  urban:boolean=false;
  rural:boolean=false;
  @ViewChild('exampleModalCenter', { static: false }) exampleModalCenter;
  post: Post = {
    startDate: new Date(Date.now())
  }

  constructor(
  private state : StatemasterService,
    private district : DistrictMasterService,
    private formBuilder: FormBuilder,
    private router: Router,
    private route: ActivatedRoute,
    private alert: AlertService,
    private newlicenceeCL:NewlicenceCl7Service
  ) { }

  // curDate = new Date();
  // ClForm: FormGroup;
  // editId: any;
  // formSubmitted = false;
  // addedit: any;
  // urban:boolean=false;
  // rural:boolean=false;
  // purposeoevent:string;

  ngOnInit() {
    this.buildPrescriptionFormGrp();
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
  buildPrescriptionFormGrp() {
    this.ClForm = this.formBuilder.group({
      "applicantAadharNo": [''],
      "applicantMailId": ['', Validators.required],
      "applicantMobileNumber": ['', Validators.required],
      "applicationFees":[''],
      // "applicantPhotograph": [''],
       "applicationDate": [''],
       "bankAccountNumber": ['', Validators.required],
       "bankIfsc": ['', Validators.required],
       "bankName": ['', Validators.required],
       "blockId": [''],
       "districtId": [''],
       "dob": ['', Validators.required],
       "financialyear": [''],
       "firstName": ['', Validators.required],
       "genderId": [''],
       "lastName": ['', Validators.required],
       "locality": [''],
       "middleName": [''],
       "country":[''],
       "muncipalAreaId": [''],
       "panNumber":[''],
       "pincode":[''],
       "policeStation": ['', Validators.required],

       "salutationId":['', Validators.required],
       "stateId":['', Validators.required],
       "street":[''],
       "tehsilId":[''],
      // "uploadCancelCheque":[''],
      // "uploadPan": [''],
      // "uploadaadhar": [''],
       "urbanOrRural": [''],
       "villageId": [''],
       "ward": [''],
      
      "retailShopDetailsEntity": this.formBuilder.array([
        this.buildformgroup()
      ])
    })
  }

  public addEmptyCtrl(): void {
    (this.ClForm.get('retailShopDetailsEntity') as FormArray).push(this.buildformgroup());
  }
  buildformgroup(data?: any){

    return this.formBuilder.group({
      'licenceName': '',
      'pargana': '',
      'tehsilId': '',
      'villageId': '',
      
    });
  }
  addrow() {
    (this.ClForm.get('retailShopDetailsEntity') as FormArray).push(this.buildformgroup());
    console.log(this.ClForm.get('retailShopDetailsEntity') );
    
   }
   removeSelectedRow(idx: number) {
    (this.ClForm.get('retailShopDetailsEntity') as FormArray).removeAt(idx);
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
      this.newlicenceeCL.createClForm(form).subscribe((responceData: any) => {
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

  reset(ClForm){
    this.ClForm.reset()
  }
}
