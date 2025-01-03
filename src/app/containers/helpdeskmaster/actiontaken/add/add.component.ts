import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertService } from '@app/services';
import { ActualProbelmService } from '@app/services/helpdesk/actionprobelms.service';
import { ActionTakenService } from '@app/services/helpdesk/actiontaken.service';

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
  taluk: any;
  formSubmitted = false;
  problem: any;
  @ViewChild('exampleModalCenter', { static: false }) exampleModalCenter;
  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private alert: AlertService,
    private action: ActionTakenService,
    private Service: ActualProbelmService) { }

  ngOnInit() {
    this.createFormGrp();
    this.getproblem()
  }
  createFormGrp() {
    this.createForm = this.formBuilder.group({
      actualProblemId: ['', Validators.required],
      actionTaken: ['', Validators.required],
      active: ['true'],
    });
  }
  addRegistration(form) {
    console.log(form)
    if (form.valid === false) {
      this.formSubmitted = true;
    } else {
      const paylaod = {
        "actionTaken": this.createForm.value.actionTaken,
        "active": true,
        "actualProblemId": parseInt(this.createForm.value.actualProblemId)

      }
      // const postData = this.createForm.value;
      console.log(paylaod);

      this.action.createaction(paylaod).subscribe(
        (responceData) => {
          if (responceData) {
            this.exampleModalCenter.show();
            sessionStorage.removeItem('formdata');
            this.alert.showSuccess(responceData.userDisplayMesg, '');
            this.router.navigate(['/helpdeskmaster/actiontaken/list']);
          } else {
            this.alert.showError('Unsuccess', 'Error');
          }
        }
      );
    }
  }
  getproblem() {
    this.Service.getAllActualProbelmList().subscribe((responceData: any) => {
      console.log(responceData);

      this.problem = (responceData.status === 's') ? responceData.data : [];
    });
  }
}
