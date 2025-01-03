import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertService } from '@app/services';
import { Fl36Service } from '@app/services/wholesale/fl36.service';

@Component({
  selector: 'app-fl36',
  templateUrl: './fl36.component.html',
  styleUrls: ['./fl36.component.css']
})
export class Fl36Component implements OnInit {
  createForm: FormGroup;
  formSubmitted = false;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private alert: AlertService,
    private formbuilder: FormBuilder,
    private fl36: Fl36Service
  ) { }

  ngOnInit() {
    this.createFormGrp();
  }
  createFormGrp() {
    this.createForm = this.formBuilder.group({
      sNo: ['', Validators.required],
      issueDate: [''],
      validTill: [''],
      licenseNo: ['', Validators.required],
      licenseeName:  ['', Validators.required],
      routeDetails:  ['', Validators.required],
      vehicleNo: ['', Validators.required],
      vehicleDriver: ['', Validators.required],
      vehicleAgencyName:  ['', Validators.required],
      vehicleAgencyAddress: ['', Validators.required],
      taluk: ['', Validators.required],
      district: [''],
      state: [''],
      grossWeight: ['', Validators.required],
      tierWeight: ['', Validators.required],
      netWeight: [''],
      indentNo: [''],
      productList: this.formbuilder.array([
        this.productsformgroup()
      ])
    });
  }
  productsformgroup(data?: any) {
    return this.formbuilder.group({
      quantityOfLiquor: '-',
      kindOfLiquor: '-',
      description: data && data.description || '',
      quarts:data && data.quarts || '',
      pints:data && data.pints || '',
      batchNo:'BN487889898',
      qualityContainedEach:'500',
      totalLitreBL:'138.24',
      totalLitreAL:'59.17',
      alcoholStrength:data && data.alcoholStrength || '',
      grandTotalBottle:'5640',
      grandTotalBL:'1773',
      grandTotalAL:'758',
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
      this.fl36.createfl36(postData).subscribe(
        (responceData) => {
            this.alert.showSuccess('Record Created Successfully','Success');
            this.createForm.reset();
            this.router.navigate(['/supplychainmanagement/wholesale/fl36/list']);
            sessionStorage.removeItem('formdata');
        }
      );
    }
  }
  reset(createForm){
    this.createForm.reset();
  }
}
