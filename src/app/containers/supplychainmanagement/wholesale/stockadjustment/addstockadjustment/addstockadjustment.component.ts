import { Component, OnInit, ViewChild } from '@angular/core';
import { formatDate } from '@angular/common';
import { Router, ActivatedRoute } from '@angular/router';
import { DatePipe } from '@angular/common';
import { AlertService, StockadjustmentService } from '@app/services';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Subject } from 'rxjs-compat';
import * as moment from 'moment';

@Component({
  selector: 'app-addstockadjustment',
  templateUrl: './addstockadjustment.component.html',
  styleUrls: ['./addstockadjustment.component.scss']
})
export class AddstockadjustmentComponent implements OnInit {
params1:any;
formSubmitted = false;
  stockForm: FormGroup;
  createObj: any = JSON.parse(sessionStorage.getItem('formdata'));

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private datepipe: DatePipe,
    private alert: AlertService,
    private formbuilder: FormBuilder,
    private stockadjustmentService:StockadjustmentService
  ) { }

  ngOnInit() {
    this.buildPrescriptionFormGrp();
    if (this.createObj) {
      this.setData();
    }
    this.route.params.subscribe(params => {
      if (params['id']) {
        // console.log(params['Id'])
        this.params1 = params['id'];
        console.log(this.params1);
        
        this.getbyId(this.params1)
        // this.show=false
      }
    });
  }
  setData() {
    this.stockForm.patchValue(this.createObj);
  }
  buildPrescriptionFormGrp() {
    this.stockForm = this.formbuilder.group({
      date: ['', Validators.required],
      adjustmentNumber:['',Validators.required],
      status:['',Validators.required],
      fromUnit:['',Validators.required],
      productList: this.formbuilder.array([
        this.productsformgroup()
      ])
    })
  }

  productsformgroup(data?: any) {
    return this.formbuilder.group({
      productName: data && data.productName || '',
      liquorType: data && data.liquorType || '',
      size: data && data.size || '',
      packageType:data && data.packageType || '',
      totalNoOfCases:data && data.totalNoOfCases || '',
      totalNoOfBottles:data && data.totalNoOfBottles || '',
      batchNo:data && data.batchNo || '',
      expiryDate:data && data.expiryDate || ''
    });
  }

  public getPresFormLength(): number {
    return (this.stockForm.get('productList') as FormArray).length;
  }

  addrow() {
    (this.stockForm.get('productList') as FormArray).push(this.productsformgroup());
    console.log(this.stockForm.get('productList'));

  }
  removeSelectedRow(idx: number) {
    (this.stockForm.get('productList') as FormArray).removeAt(idx);
  }

  stockAdjustment(form) {
    console.log(form.value);
    if (form.valid === false) {
      this.formSubmitted = true;
    } 
    else {
      if(!this.params1){
    this.stockadjustmentService.post("StockAdjustment",form.value).then((response: any) => {
      if (response) {
        this.alert.showSuccess("Created Successfully", "Success");
        this.stockForm.reset();
        this.router.navigate(['/supplychainmanagement/wholesale/stockadjustment/list']);
        sessionStorage.removeItem('formdata');
      }
    })
  }
  else if(this.params1){
    this.stockadjustmentService.updatestock(form.value,this.params1).subscribe((response) => {
      if (response) {
        this.alert.showSuccess("Updated Successfully", "Success");
        this.stockForm.reset();
        this.router.navigate(['/supplychainmanagement/wholesale/stockadjustment/list']);
        sessionStorage.removeItem('formdata');
      }
    })
  }
  }
  }
  getbyId(id) {  

    this.stockadjustmentService.getById1(id).toPromise().then((response: any) => {
        response.productList.forEach((element: any, idx: number) => {
          if (element) {
            (this.stockForm.get('productList') as FormArray).removeAt(idx);
            (this.stockForm.get('productList') as FormArray).push(this.productsformgroup(element));
          }
        });
        this.stockForm.patchValue({
          date: response.date,
          adjustmentNumber:response.adjustmentNumber,
          status:response.status,
          fromUnit:response.fromUnit,
        });

    }).catch((err: any) => {
    });
  } 
  view(stockForm){
    this.router.navigate(['/supplychainmanagement/wholesale/stockadjustment/view']);
    sessionStorage.setItem('formdata', JSON.stringify(stockForm.value));
  }

}
