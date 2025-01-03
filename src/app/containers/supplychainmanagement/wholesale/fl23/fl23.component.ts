import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertService } from '@app/services';
import { Fl23Service } from '@app/services/wholesale/fl23.service';

@Component({
  selector: 'app-fl23',
  templateUrl: './fl23.component.html',
  styleUrls: ['./fl23.component.css']
})
export class Fl23Component implements OnInit {
  createForm: FormGroup;
  formSubmitted = false;
  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private alert: AlertService,
    private fl23Service: Fl23Service
  ) { }

  ngOnInit() {
    this.createFormGrp();
  }
  createFormGrp() {
    this.createForm = this.formBuilder.group({
      indentNo: ['', Validators.required],
      permitNo: ['', Validators.required],
      passNo: [''],
      dated: [''],
      taluk: [''],
      taluk1: ['', Validators.required],
      pincode: ['', Validators.required],
      productList: this.formBuilder.array([
        this.productsformgroup()
      ])
    });
  }
  productsformgroup(data?: any) {
    return this.formBuilder.group({
      bottleCapacity:  data && data.bottleCapacity || '',
      BottlePerCase:  data && data.BottlePerCase || '',
      exportFee: data && data.exportFee || '',
      totalFee:data && data.totalFee || '',
      grandImportFee:data && data.grandImportFee || '',
      dispatchedRoute: data && data.dispatchedRoute || '',
      amountOfExportDuty: data && data.amountOfExportDuty || '',
      dutyPaidDate: data && data.dutyPaidDate || '',
      totalAmountDuty: data && data.totalAmountDuty || '',
      differenceDuty:data && data.differenceDuty || '',
      dutyDifference: data && data.dutyDifference || '',
      treasuryReceipt: data && data.treasuryReceipt || '',
      rateCharged: data && data.rateCharged || '',
      amountPrepaid: data && data.amountPrepaid || '',
      dateDispatch: data && data.dateDispatch || '',
      counterSigned: data && data.counterSigned || '',
    });
  }
  public getPresFormLength(): number {
    return (this.createForm.get('productList') as FormArray).length;
  }

  addrow() {
    (this.createForm.get('productList') as FormArray).push(this.productsformgroup());
    console.log(this.createForm.get('productList'));

  }
  removeSelectedRow(idx: number) {
    (this.createForm.get('productList') as FormArray).removeAt(idx);
  }
  addRegistration(form) {
    console.log(form)
    if (form.valid === false) {
      this.formSubmitted = true;
    } 
    else {
      const postData = this.createForm.value;
      this.fl23Service.createfl23(postData).subscribe(
        (responceData) => {
            this.alert.showSuccess('Record Created Successfully','Success');
            this.createForm.reset();
            this.router.navigate(['/supplychainmanagement/wholesale/fl23/list']);
            sessionStorage.removeItem('formdata');
        }
      );
    }
  }
  reset(createForm){
    this.createForm.reset();
  }
}
