import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertService, ApiService, SLAService, SubcategoryService } from '@app/services';
import { PriorityService } from '@app/services/helpdesk/priority.service';
import { ticketService } from '@app/services/helpdesk/tickets.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})
export class AddComponent implements OnInit {
  ruleObj = {
    rulename: '',
    Category: '',
    subCategory: '',
    ticketstatus: '',
    Priority: '',
    Thershold: '',
    tsec: '',
    email: '',
    SMS: '',
    Status: true
  }
  status: any;
  cat: any;
  sub: any;
  priority1: any;
  emailtemp: any;
  smstemp: any;
  formSubmitted = false;
  constructor(
    private alert: AlertService,
    private router: Router,
    private apiservice: ApiService,
    private sla: SLAService,
    private subcategory: SubcategoryService,
    private Service1: ticketService,
    private priority: PriorityService,
  ) { }

  ngOnInit() {
    this.getcat();
    this.getticketstatus();
    this.getpriority();
    this.getemail();
    this.getsms()

  }
  saveData(form) {
    console.log(form);
    console.log(form.valid);

    this.formSubmitted = false;
    if (form.valid === false) {
      this.formSubmitted = true;
    } else {
      if (this.ruleObj.SMS == '' && this.ruleObj.email == '') {
        this.formSubmitted = true;
      } else {
        this.formSubmitted = false;
        let postdata = {
          "active": this.ruleObj.Status,
          // "createdBy": this.ruleObj.,
          "emailTemplateId": this.ruleObj.email ? this.ruleObj.email : 0,
          // "id": ,
          // "modifiedBy": 0,
          "priority": this.ruleObj.Priority,
          "templateType": this.ruleObj.SMS && this.ruleObj.email ? 'BOTH' : this.ruleObj.SMS ? 'SMS' : this.ruleObj.email ? 'EMAIL' : '',
          "ruleName": this.ruleObj.rulename,
          "smsTemplateId": this.ruleObj.SMS ? this.ruleObj.SMS : 0,
          "status": this.ruleObj.ticketstatus,
          "thresholdTime": this.ruleObj.Thershold,
          "ticketCategoryId": this.ruleObj.Category,
          "ticketSubCategoryId": this.ruleObj.subCategory,
        }
        console.log(postdata);
        this.sla.addslarule(postdata).subscribe(responceData => {
          console.log(this.ruleObj);
          if (responceData.errorCode === 200) {
            // if (responceData.userDisplayMesg == 'No record Found') {
            this.alert.showSuccess(responceData.userDisplayMesg, 'success')
            this.router.navigate(['/helpdesk/sla/rule/list']);
            // }
          } else {
            this.alert.showError(responceData.userDisplayMesg, '');
          }

        });
      }


    }
  }
  getsub($event) {
    this.subcategory.getByIdcategory($event.target.value).subscribe((responceData: any) => {
      this.sub = (responceData.status === 's') ? responceData.data : [];
    });
  }
  getcat() {
    this.subcategory.getallcategory().subscribe((responceData: any) => {
      console.log(responceData);

      this.cat = (responceData.status === 's') ? responceData.data : [];
    });
  }
  getticketstatus() {
    this.Service1.getTicketstatus().subscribe((responceData: any) => {
      console.log(responceData);
      this.status = (responceData.status === 's') ? responceData.data : [];
    });
  }
  getpriority() {
    this.priority.getAllpriority().subscribe((responceData: any) => {
      this.priority1 = (responceData.status === 's') ? responceData.data : [];
    });
  }
  getsms() {
    this.sla.getallsms().subscribe((responceData: any) => {
      this.smstemp = (responceData.status === 's') ? responceData.data : [];
    });
  }
  getemail() {
    this.sla.getallemail().subscribe((responceData: any) => {
      this.emailtemp = (responceData.status === 's') ? responceData.data : [];
    });
  }
  getprior($event) {
    const rest = this.priority1.filter(x => x.id == $event.target.value);
    this.ruleObj['Thershold'] = rest[0].slaDays;
  }
}
