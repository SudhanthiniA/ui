import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-addblendingproductionplan',
  templateUrl: './addblendingproductionplan.component.html',
  styleUrls: ['./addblendingproductionplan.component.scss']
})
export class AddblendingproductionplanComponent implements OnInit {
  
  blendingproduction: FormGroup;



  constructor(
    private formBuilder: FormBuilder,
  ) { }

  ngOnInit() {
    this.buildPrescriptionFormGrp();
  }


  buildPrescriptionFormGrp() {
    this.blendingproduction = this.formBuilder.group({
      DistilleryName: ['', Validators.required],
      LicenseType: [''],
      DateFrom: ['', Validators.required],
      BrandName: ['', Validators.required],
      BrandType: [''],
      BrandSize: ['', Validators.required],
      EstimatedQuantity: [''],
      BlendingVatNo: ['', Validators.required],

    });
  }

}
