import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertService, WarehouseNewbrandService } from '@app/services';
import { rolloverService } from '@app/services/ware-house/warehouse-rollover-previous.service';

@Component({
  selector: 'app-addrolloverstkentryprevyear',
  templateUrl: './addrolloverstkentryprevyear.component.html',
  styleUrls: ['./addrolloverstkentryprevyear.component.scss']
})
export class AddrolloverstkentryprevyearComponent implements OnInit {
  rollover: FormGroup;
  formSubmitted = false;
  editId: any;
  brandname: any;
  package: any;

  constructor(
    private router: Router,
    private roll: rolloverService,
    private alert: AlertService,
    private formbuilder: FormBuilder,
    private brands: WarehouseNewbrandService
  ) { }

  ngOnInit() {
    this.buildPrescriptionFormGrp();
    this.getAllBrand();
    this.getPackageType();

  }
  buildPrescriptionFormGrp() {
    this.rollover = this.formbuilder.group({
      totalBox: ['', Validators.required],
      totalMrp: ['', Validators.required],
      rolloverBoxs: ['', Validators.required],
      totalCowcess: ['', Validators.required],
      rolloverlist: this.formbuilder.array([
        this.buildformgroup()
      ])
      // "status": status,
      // stockInDetail: this.formBuilder.array([
      //   this.addFormGroupTable()
      // ])
    });
  }
  buildformgroup(data?: any) {

    return this.formbuilder.group({
      brandRegistrationId: '',
      packageId: '',
      sizeId: '',
      boxId: '',
      previousYearMrp: '',
      rollOverBoxes: '',
      cowcessFees: ''
    });
  }
  addimportpermit(form, status) {

    const forms = this.rollover.value;
    console.log(forms);

    this.formSubmitted = false;
    if (form.valid === false) {
      this.formSubmitted = true;
    } else {

      // if (this.editId) {       
      //   this.rollover.updateImportById(this.editId,forms).subscribe((response: any) => {
      //     // if (response.status == "s") {
      //       this.alert.showSuccess(response.userDisplayMesg, 'Success');
      //       this.router.navigate(['/supplychainmanagement/warehouse/importpermit/list']);
      //     // }
      //     // else {
      //     //   this.alert.showError(response['userDisplayMesg'], 'error')
      //     // }
      //   })
      // } else {
      this.roll.addrolloverprevious(forms).subscribe((response: any) => {
        //JSON Integration
        if (response.status == 's') {
          this.alert.showSuccess(response.userDisplayMesg, 'Success');
          this.router.navigate(['/supplychainmanagement/warehouse/rolloverstkentryprevyear/list']);
        }
        else {
          this.alert.showError(response['userDisplayMesg'], 'error')
        }
        // if (response.status == "s") {
        //   this.alert.showSuccess(response.userDisplayMesg, 'Success');
        //   this.router.navigate(['/supplychainmanagement/warehouse/transportpass/transportpassgeneration/list']);
        // }

      })
    }
    // }
  }
  addrow() {
    let pre = [];
    let roll = [];
    let cow = [];
    (this.rollover.get('rolloverlist') as FormArray).push(this.buildformgroup());
    // pre = this.rollover.get('rolloverlist').value.reduce((prev, next) => prev + +next.fdnTotalShares, 0);
    // console.log(this.rollover.value.rolloverlist.previousYearMrp);
    this.rollover.value.rolloverlist.forEach((ele: any, index) => {
      console.log(ele);
      roll.push(ele.rollOverBoxes);
      cow.push(ele.cowcessFees);
      pre.push(ele.previousYearMrp);
    });
    let prepatch = pre.reduce((a, b) => a + b, 0);
    let rollpatch = roll.reduce((a, b) => a + b, 0);
    let cowpatch = cow.reduce((a, b) => a + b, 0);
    this.rollover.patchValue({
      totalMrp: prepatch,
      rolloverBoxs: rollpatch,
      totalCowcess: cowpatch
    });
    // console.log(this.rollover.value.totalMrp);

  }
  public getPresFormLength(): number {
    return (this.rollover.get('rolloverlist') as FormArray).length;
  }
  public removeSelectedRow(idx: number) {
    let pre = [];
    let roll = [];
    let cow = [];
    (this.rollover.get('rolloverlist') as FormArray).removeAt(idx);
    this.rollover.value.rolloverlist.forEach((ele: any, index) => {
      console.log(ele);
      roll.push(ele.rollOverBoxes);
      cow.push(ele.cowcessFees);
      pre.push(ele.previousYearMrp);
    });
    let prepatch = pre.reduce((a, b) => a - b, 0) * -1;
    let rollpatch = roll.reduce((a, b) => a - b, 0) * -1;
    let cowpatch = cow.reduce((a, b) => a - b, 0) * -1;
    this.rollover.patchValue({
      totalMrp: prepatch,
      rolloverBoxs: rollpatch,
      totalCowcess: cowpatch
    });
  }
  getAllBrand() {
    this.brands.getallbrand().subscribe((responceData: any) => {
      if (responceData.status == 's') {
        this.brandname = responceData.data;
      }

    })
  }
  getPackageType() {
    this.brands.getAllpackageType().subscribe((responceData: any) => {
      console.log(responceData);

      if (responceData.status == 's') {
        this.package = responceData.data;
      }

    })
  }
}
