import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup,FormArray, Validators } from '@angular/forms';
import { Router,ActivatedRoute } from '@angular/router';
import { formatDate } from '@angular/common';
import { AlertService } from '@app/services';
import { NewlicenceBangID3Service } from  '@app/services/new-licence/newlicence-bhang-id3.service';

interface Post {
  startDate: Date;
}

@Component({
  selector: 'app-id3',
  templateUrl: './id3.component.html',
  styleUrls: ['./id3.component.scss']
})
export class Id3Component implements OnInit {

  ID3Form:FormGroup;
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

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private route: ActivatedRoute,
    private alert: AlertService,
    private newlicencecid3service:NewlicenceBangID3Service,
  ) { }

  ngOnInit() {
    this.bhagID3FormGrp();
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

  bhagID3FormGrp() {
    this.ID3Form = this.formBuilder.group({
      "applicantAadharNo": ['', Validators.required],
      "applicantMailId": ['', Validators.required],
      "applicantMobileNumber":['', Validators.required],
      //"applicantPhotograph": [''],
      "applicationDate": [''],
      "applicationFees": [''],
      "bankAccountNumber":['', Validators.required],
      "bankIfsc": ['', Validators.required],
      "bankName": ['', Validators.required],
      "blockId": [''],
      "country": ['INDIA', Validators.required],
      "districtId": ['', Validators.required],
      "dob": [''],
      "financialyear":['2020-2021'],
      "firstName": ['', Validators.required],
      "genderId":['', Validators.required],
      "lastName": ['', Validators.required],
      "locality":[''],
      "middleName": [''],
      "muncipalAreaId":['', Validators.required],
      "panNumber": [''],
      "pincode":[''],
      "policeStation":['', Validators.required],
      "salutationId": ['', Validators.required],
      "stateId":['', Validators.required],
      "street":[''],
      "tehsilId":['', Validators.required],
      // "uploadCancelCheque": [''],
      // "uploadPan": [''],
      // "uploadaadhar":[''],
      "urbanOrRural": ['', Validators.required],
      "villageId":['', Validators.required],
      "ward": [''],
      "scheduleDetailsEntityList":  this.formBuilder.array([
        this.buildformgroup()
      ])
      })
  }

  public addEmptyCtrl(): void {
    (this.ID3Form.get('scheduleDetailsEntityList') as FormArray).push(this.buildformgroup());
  }

  public getPresFormLength(): number {
    return (this.ID3Form.get('scheduleDetailsEntityList') as FormArray).length;
  }
  addrow() {
    (this.ID3Form.get('scheduleDetailsEntityList') as FormArray).push(this.buildformgroup());
    console.log(this.ID3Form.get('scheduleDetailsEntityList') );
    
  }
  removeSelectedRow(idx: number) {
    (this.ID3Form.get('scheduleDetailsEntityList') as FormArray).removeAt(idx);
  }

  buildformgroup(data?: any){
  
    return this.formBuilder.group({
      districtId: '',
      godownId: '',
      priceGrownBhangPlant: ''
    });
  }

  addSTDetails(ID3Form) {
    console.log(ID3Form);
    let form = this.ID3Form.value
    this.formSubmitted = false;
    if (ID3Form.invalid) { 
      this.formSubmitted = true;
    } 
    else {
    this.newlicencecid3service.createSTForm(form).subscribe((responceData: any) => {
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
      this.ID3Form.controls['muncipalAreaId'].setValidators([Validators.required]);
      this.ID3Form.controls['muncipalAreaId'].updateValueAndValidity();
      this.ID3Form.controls['blockId'].setValidators([]);
      this.ID3Form.controls['blockId'].updateValueAndValidity();
      this.ID3Form.controls['villageId'].setValidators([]);
      this.ID3Form.controls['villageId'].updateValueAndValidity();
    }
    else if (urbanshow == 'Rural') {
      this.rural = true;
      this.urban = false;
      this.ID3Form.controls['muncipalAreaId'].setValidators([]);
      this.ID3Form.controls['muncipalAreaId'].updateValueAndValidity();
      this.ID3Form.controls['blockId'].setValidators([Validators.required]);
      this.ID3Form.controls['blockId'].updateValueAndValidity();
      this.ID3Form.controls['villageId'].setValidators([Validators.required]);
      this.ID3Form.controls['villageId'].updateValueAndValidity(); 
    }
    else {
      this.rural = false;
      this.urban = false;
    }
  }

  reset(ID3Form){
    this.ID3Form.reset()
  }

  preview(form) {
    sessionStorage.setItem('formdata', JSON.stringify(form.value));
    this.router.navigate(['/licencemgnt/bhang/id3/view']);
  }

}
