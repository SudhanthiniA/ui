import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertService } from '@app/services';
import { FormFL25Part2Service } from '@app/services/retails';
import { FormFL25APart2Service } from '@app/services/retails/formfl25Apart2.service';

@Component({
  selector: 'app-addpart2',
  templateUrl: './addpart2.component.html',
  styleUrls: ['./addpart2.component.scss']
})
export class Addpart2Component implements OnInit {
  fl25Part2Form: FormGroup;
  formSubmitted = false;
  editId: any;
  constructor(
    public fb: FormBuilder,
    private route: ActivatedRoute,
    private alert: AlertService,
    private router: Router,
    private service: FormFL25Part2Service
  ) { }

  ngOnInit() {
    this.buildFormGroup();
    this.route.params.subscribe((param) => {
      if (param.id) {
        this.editId = param.id;
        this.setData(param.id);
      }
    });
  }
  setData(id) {
    this.service.getById(id).subscribe((resp) => {
      this.fl25Part2Form.patchValue(resp);
    });
  }
  buildFormGroup() {
    this.fl25Part2Form = this.fb.group({
      licenseeName: ['', Validators.required],
      licenseHeld: ['', Validators.required],
      date: ['', Validators.required],
      receiptNumber: ['', Validators.required],
      permitNumber: ['', Validators.required],
      passNoGrantedForImport: [''],
      status: [''],
      name: ['', Validators.required],
      country: [''],
      pincode: [''],
      state: [''],
      district: [''],
      tehsil: [''],
      urbanOrRural: [''],
      muncipalArea: [''],
      ward: [''],
      policeStation: [''],
      locality: [''],
      street: [''],
      exportNumber: ['', Validators.required],
      dateOfPass: [''],
      exportingState: ['', Validators.required],
      foreignLiquorType: ['', Validators.required],
      gallons: ['', Validators.required],
      quarts: ['', Validators.required],
      pints: [''],
      remarks: ['']
    });
  }
  get f() {
    return this.fl25Part2Form.controls;
  }
  save(form, method) {
    this.formSubmitted = false;
    if (form.valid === false) {
      this.formSubmitted = true;
    } else {
      this.fl25Part2Form.patchValue({
        status: method
      });
      if (this.editId) {
        this.service.update25Part2(this.editId, form.value).subscribe((resp) => {
          this.alert.showSuccess('Record sucessfully added', 'Success');
          this.router.navigate(['/supplychainmanagement/retail/formfl25/part2/list']);
        });
      } else {
      this.service.addFl25Part2(form.value).subscribe((resp) => {
        this.alert.showSuccess('Record sucessfully added', 'Success');
        this.router.navigate(['/supplychainmanagement/retail/formfl25/part2/list']);
      });
    }
    }
  }
}
