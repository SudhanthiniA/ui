import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertService } from '@app/services';
import { ActualProbelmService } from '@app/services/helpdesk/actionprobelms.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})
export class AddComponent implements OnInit {
  createForm: FormGroup;
  createObj: any = JSON.parse(sessionStorage.getItem('formdata'));
  state: any;
  districts: any;
  taluk:any;
  formSubmitted = false;
  village:any;
  @ViewChild('exampleModalCenter', { static: false }) exampleModalCenter;
  constructor(    
    private formBuilder: FormBuilder,
    private router: Router,
    private alert: AlertService,
    private problem: ActualProbelmService,) { }

  ngOnInit() {
    this.createFormGrp();
  }
  createFormGrp() {
    this.createForm = this.formBuilder.group({
      actualproblem: ['', Validators.required],
    });
  }
  addRegistration(form) {
    console.log(form)
    if (form.valid === false) {
      this.formSubmitted = true;
    } else {
      const postData = this.createForm.value;
      console.log(postData);

      this.problem.createproblem(postData).subscribe(
        (responceData) => {
          if (responceData ) {
            this.exampleModalCenter.show();
            sessionStorage.removeItem('formdata');
            this.alert.showSuccess(responceData.userDisplayMesg, '');
            this.router.navigate(['/helpdeskmaster/actualprobelms/list']);
          } else {
            this.alert.showError('Unsuccess', 'Error');
          }
        }
      );
    }
  }
}
