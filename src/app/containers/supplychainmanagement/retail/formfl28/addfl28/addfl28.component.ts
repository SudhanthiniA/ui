import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertService } from '@app/services';
import { FormFl28Service } from '@app/services/retails';

@Component({
  selector: 'app-addfl28',
  templateUrl: './addfl28.component.html',
  styleUrls: ['./addfl28.component.scss']
})
export class Addfl28Component implements OnInit {
  public form28: FormGroup;
  formSubmitted = false;
  editId: any;
  constructor(private fb: FormBuilder,
              private alert: AlertService,
              private router: Router,
              private route: ActivatedRoute,
              private service: FormFl28Service) { }

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
    this.form28 = this.fb.group({
      firstName: ['', Validators.required],
      salutation: ['', Validators.required],
      permitImport: ['', Validators.required],
      middleName: ['', Validators.required],
      lastName: ['', Validators.required],
      distillery: ['', Validators.required],
      paidPermitFee: ['', Validators.required],
      rate: ['', Validators.required],
      licenseNo: ['LI112222'],
      applicationName: [''],
      status: [''],
      country: ['India'],
      state: ['Uttra Pradesh'],
      pincode: ['3424233'],
      district: ['Lucknow'],
      tehsil: ['Tehsil1'],
      policeStation:['Police station1'],
      locality: ['locality1'],
      street: ['SN Marg']
    });
  }
  setData(id) {
    this.service.getFormFl28Id(id).subscribe((resp) => {
      this.form28.patchValue(resp);
    });
  }
  get f() {
    return this.form28.controls;
  }
  save(form, method) {
    this.formSubmitted = false;
    if (form.valid === false) {
        this.formSubmitted = true;
      } else {
        this.form28.patchValue({
          status: method
        });
        if (this.editId) {
          this.service.updateFormfl28(this.editId, form.value).subscribe(() => {
            this.alert.showSuccess('Record sucessfully Updated', 'Success');
            this.router.navigate(['/supplychainmanagement/retail/formfl28/list']);
          });
        } else {
        this.service.addFormFl28(form.value).subscribe((resp) => {
        this.alert.showSuccess('Record sucessfully added', 'Success');
        this.router.navigate(['/supplychainmanagement/retail/formfl28/list']);
      });
    }
      }
  }
}
