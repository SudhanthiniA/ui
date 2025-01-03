import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertService } from '@app/services';
import { FormFL25Part1Service } from '@app/services/retails';

@Component({
  selector: 'app-addpart1',
  templateUrl: './addpart1.component.html',
  styleUrls: ['./addpart1.component.scss']
})
export class Addpart1Component implements OnInit {
  form25Part1: FormGroup;
  formSubmitted = false;
  editId: any;
  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private alert: AlertService,
    private router: Router,
    private service: FormFL25Part1Service
  ) { }

  ngOnInit() {
    this.buildFormGroup();
    this.route.params.subscribe((param) => {
      if (param.id) {
        this.editId = param.id;
        this.setData(this.editId);
      }
    });
  }
  setData(id) {
    this.service.getById(id).subscribe((resp) => {
      this.form25Part1.patchValue(resp);
    });
  }
  buildFormGroup() {
    this.form25Part1 = this.fb.group({
      exciseDate : ['', Validators.required],
      exciseRemarks: ['', Validators.required],
      othersDate: ['', Validators.required],
      othersRemark: ['', Validators.required],
      status: ['']
    });
  }
  get f() {
    return this.form25Part1.controls;
  }
  save(form, method) {
    this.formSubmitted = false;
    if (form.valid === false) {
      this.formSubmitted = true;
    } else {
      this.form25Part1.patchValue({
        status: method
      });
      if (this.editId) {
        this.service.updateFormfl25Part1(this.editId, form.value).subscribe(() => {
          this.alert.showSuccess('Record sucessfully Updated', 'Success');
          this.router.navigate(['/supplychainmanagement/retail/formfl25/part1/list']);
        });
      } else {
      this.service.addFormFl25Part1(form.value).subscribe((resp) => {
      this.alert.showSuccess('Record sucessfully added', 'Success');
      this.router.navigate(['/supplychainmanagement/retail/formfl25/part1/list']);
    });
  }
    }
  }
}
