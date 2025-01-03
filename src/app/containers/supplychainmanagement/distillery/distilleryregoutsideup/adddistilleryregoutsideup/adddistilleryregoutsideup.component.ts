import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-adddistilleryregoutsideup',
  templateUrl: './adddistilleryregoutsideup.component.html',
  styleUrls: ['./adddistilleryregoutsideup.component.scss']
})
export class AdddistilleryregoutsideupComponent implements OnInit {

  newRegistrationFormGroup: FormGroup;

  constructor() { }

  ngOnInit() {
  }

}
