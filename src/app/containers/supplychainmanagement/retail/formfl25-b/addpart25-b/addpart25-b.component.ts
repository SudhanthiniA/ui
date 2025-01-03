import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertService } from '@app/services';
import { FormFl25bService } from '@app/services/retails/formfl25b.service';

@Component({
  selector: 'app-addpart25-b',
  templateUrl: './addpart25-b.component.html',
  styleUrls: ['./addpart25-b.component.scss']
})
export class Addpart25BComponent implements OnInit {
  fl25bForm: FormGroup;
  formSubmitted = false;
  editId: any;

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private alert: AlertService,
    private router: Router,
    private fl25bService: FormFl25bService,
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
  buildFormGroup() {
    this.fl25bForm = this.fb.group({
      date: ['26-02-2021'],
      rationCardHolder: ['', Validators.required],
      rank: ['', Validators.required],
      rationCardNo: ['', Validators.required],
      quotaFixedInQuarts: [200],
      quantitySold: [],
      status: [''],
      remarks: ['']
    });
  }
  get f() {
    return this.fl25bForm.controls;
  }
  setData(id) {
    this.fl25bService.getFormFl25BId(id).subscribe((resp) => {
      this.fl25bForm.patchValue(resp);
    });
  }
  save(form, method) {
    this.formSubmitted = false;
    if (form.valid === false) {
      this.formSubmitted = true;
    } else {
      this.fl25bForm.patchValue({
        status: method
      });
      if (this.editId) {
        this.fl25bService.updateFormfl25B(this.editId, form.value).subscribe(() => {
          this.alert.showSuccess('Record sucessfully Updated', 'Success');
          this.router.navigate(['/supplychainmanagement/retail/formfl25-b/list']);
        });
      } else {
      this.fl25bService.addFormFl25B(form.value).subscribe((resp) => {
      this.alert.showSuccess('Record sucessfully added', 'Success');
      this.router.navigate(['/supplychainmanagement/retail/formfl25-b/list']);
    });
  }
    }
  }
}
