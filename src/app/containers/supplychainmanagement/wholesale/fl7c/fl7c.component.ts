import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertService } from '@app/services';
import { Fl7cService } from '@app/services/wholesale/fl7c.service';

@Component({
  selector: 'app-fl7c',
  templateUrl: './fl7c.component.html',
  styleUrls: ['./fl7c.component.css']
})
export class Fl7cComponent implements OnInit {
  createForm: FormGroup;
  createObj: any = JSON.parse(sessionStorage.getItem('formdata'));
  formSubmitted = false;
  @ViewChild('exampleModalCenter', { static: false }) exampleModalCenter;
  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private alert: AlertService,
    private fl7c: Fl7cService
  ) { }

  ngOnInit() {
    this.createFormGrp();
    if (this.createObj) {
      this.setData();
    }
  }
  createFormGrp() {
    this.createForm = this.formBuilder.group({
      indent: ['', Validators.required],
      registerNo: ['', Validators.required],
      locality: [''],
      clubName: [''],
      clubRegisterNo: [''],
      east: ['', Validators.required],
      west: ['', Validators.required],
      north: ['', Validators.required],
      south: ['', Validators.required],
      permitNo: ['', Validators.required],
      DistrictName: ['', Validators.required],
      FromDate: ['', Validators.required],
      toDate: ['', Validators.required],
      advancePayment: ['', Validators.required],
      dated: ['', Validators.required],
      chellanNo: ['', Validators.required],
      chellanDate: ['', Validators.required],
      detailDFee: ['', Validators.required],
      annualLicense: [''],
      annualChellanNo: [''],
      annualChellanDate: [''],
      AssessedFee: [''],
      place: ['', Validators.required],
      annualDate: ['', Validators.required],
      collector: ['', Validators.required],
    });
  }
  setData() {
    this.createForm.patchValue(this.createObj);
  }
  addRegistration(form) {
    console.log(form)
    if (form.valid === false) {
      this.formSubmitted = true;
    } 
    else {
      const postData = this.createForm.value;
      console.log(postData);

      this.fl7c.createfl7c(postData).subscribe(
        (responceData) => {
          // if (responceData.status == "s") {
            // this.exampleModalCenter.show();
            this.alert.showSuccess('Record Created Successfully','Success');
            this.createForm.reset();
          // } else {
          //   this.alert.showError('Unsuccess', 'Error');
          // }
        }
      );
    }
  }
  cancel(){
    this.createForm.reset();
  }
}
