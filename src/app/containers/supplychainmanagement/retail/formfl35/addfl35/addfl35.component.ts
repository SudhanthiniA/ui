import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertService } from '@app/services';
import { FormFl35Service } from '@app/services/retails';

@Component({
  selector: 'app-addfl35',
  templateUrl: './addfl35.component.html',
  styleUrls: ['./addfl35.component.scss']
})
export class Addfl35Component implements OnInit {
  fl35Form: FormGroup;
  formSubmitted = false;
  editId: any;
  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private alert: AlertService,
    private router: Router,
    private service: FormFl35Service
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
    this.service.getFormFl35Id(id).subscribe((resp) => {
      this.fl35Form.patchValue(resp);
    });
  }
get f() {
  return this.fl35Form.controls;
}
  buildFormGroup() {
    this.fl35Form = this.fb.group({
      importerName: ['', Validators.required],
      country: ['', Validators.required],
      state: ['', Validators.required],
      pincode: ['', Validators.required],
      district: ['', Validators.required],
      tehsil: [''],
      policeStation: [''],
      locality: [''],
      street: [''],
      route: [''],
      liquorDescription: [],
      liquorImportedLocation: [],
      amountOfPass: [],
      dateUpToPass: [],
      Consignment: [],
      remarks: [],
      status: [''],
      urbanOrRural: [''],
      municipality: [''],
      ward: []
    });
  }
  save(form, method) {
    this.formSubmitted = false;
    if (form.valid === false) {
      this.formSubmitted = true;
    } else {
      this.fl35Form.patchValue({
        status: method
      });
      if (this.editId) {
        this.service.updateFormfl35(this.editId, form.value).subscribe(() => {
          this.alert.showSuccess('Record sucessfully Updated', 'Success');
          this.router.navigate(['/supplychainmanagement/retail/formfl35/list']);
        });
      } else {
      this.service.addFormFl35(form.value).subscribe((resp) => {
      this.alert.showSuccess('Record sucessfully added', 'Success');
      this.router.navigate(['/supplychainmanagement/retail/formfl35/list']);
    });
  }
    }
  }
}
