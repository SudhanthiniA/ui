import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertService } from '@app/services';
import { FormFL25Part3Service } from '@app/services/retails';

@Component({
  selector: 'app-addpart3',
  templateUrl: './addpart3.component.html',
  styleUrls: ['./addpart3.component.scss']
})
export class Addpart3Component implements OnInit {
  fl25Part3Form: FormGroup;
  formSubmitted = false;
  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private alert: AlertService,
    private router: Router,
    private service: FormFL25Part3Service
  ) { }

  ngOnInit() {
    this.fl25Part3Form = this.fb.group({
      date: ['', Validators.required],
      name: ['', Validators.required],
      country: ['', Validators.required],
      state: ['', Validators.required],
      pincode: ['', Validators.required],
      district: ['', Validators.required],
      tehsil: ['', Validators.required],
      urbanOrRural: ['', Validators.required],
      muncipalArea: ['', Validators.required],
      ward: ['', Validators.required],
      policeStation: ['', Validators.required],
      locality: ['', Validators.required],
      street: ['', Validators.required],
    });
  }
  get f() {
    return this.fl25Part3Form.controls;
  }
  save(form, method) {
    this.formSubmitted = false;
    if (form.valid === false) {
      this.formSubmitted = true;
    } else {
      this.fl25Part3Form.patchValue({
        status: method
      });
    }
  }
}
