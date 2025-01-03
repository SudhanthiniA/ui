import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertService } from '@app/services';
import { ActualProbelmService } from '@app/services/helpdesk/actionprobelms.service';
import { PriorityService } from '@app/services/helpdesk/priority.service';
import { ProbelmReportedService } from '@app/services/helpdesk/probelmreported.service';
import { SubcategoryService } from '@app/services/helpdesk/subcategory.service';

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
  sub:any;
  problem:any;
  priority1:any;
  @ViewChild('exampleModalCenter', { static: false }) exampleModalCenter;

  constructor(    
    private formBuilder: FormBuilder,
    private router: Router,
    private alert: AlertService,
    private subcategory:SubcategoryService,
    private Service:ActualProbelmService,
    private priority:PriorityService,
    private problemreported:ProbelmReportedService
    ) { }

    ngOnInit() {
      this.createFormGrp();
      if (this.createObj) {
        this.setData();
      }
      this.getsub();
      this.getcat();
      this.getpriority()
    }
  
    createFormGrp() {
      this.createForm = this.formBuilder.group({
        problem: ['', Validators.required],
        ticketsubcategoryid: ['', Validators.required],
        priorityid: ['', Validators.required],
        active: ['', Validators.required]
      });
    }
  
    setData() {
      this.createForm.patchValue(this.createObj);
    }
    addRegistration(form) {
      console.log(form)
      if (form.valid === false) {
        this.formSubmitted = true;
      } else {
        const postData = this.createForm.value;
        console.log(postData);
  
        this.problemreported.addproblemreported(postData).subscribe(
          (responceData) => {
            if (responceData.status=="s" ) {
              this.exampleModalCenter.show();
              sessionStorage.removeItem('formdata');
              this.alert.showSuccess(responceData.userDisplayMesg, '');
              this.router.navigate(['/helpdeskmaster/reported/list']);
            } else {
              this.alert.showError('Unsuccess', 'Error');
            }
          }
        );
      }
    }
    getsub() {
      this.subcategory.getAllSubcategoryList().subscribe((responceData: any) => {
        this.sub = (responceData.status === 's') ? responceData.data : [];
      });
    }
    getcat() {
      this.Service.getAllActualProbelmList().subscribe((responceData: any) => {
        this.problem = (responceData.status === 's') ? responceData.data : [];
      });
    }
    getpriority() {
      this.priority.getAllpriority().subscribe((responceData: any) => {
        this.priority1 = (responceData.status === 's') ? responceData.data : [];
      });
    }

    clearform() {
      this.createForm.reset();
    }
  }
  