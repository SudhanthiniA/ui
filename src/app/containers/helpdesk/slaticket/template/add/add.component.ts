import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators, FormArray } from '@angular/forms';
import { SLAService } from '@app/services/helpdesk/sla.service';
import { AlertService } from '@app/services';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss'],  
})
export class AddComponent implements OnInit {
  editId; formSubmitted: boolean = false; emailSubmitted: boolean = false; smsSubmitted: boolean = false;
  
  newFormGroup: FormGroup; emailFormGroup: FormGroup; smsFormGroup: FormGroup;
  constructor(private router: Router, private route: ActivatedRoute, private formBuilder: FormBuilder, private service: SLAService, private alert: AlertService) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      if (params.Id) {
        this.editId = params.Id;
        // this.setData(this.editId);
      }
    });
    this.buildPrescriptionFormGrp();
    
  }
  numberOnly(event): boolean {
    const charCode = (event.which) ? event.which : event.keyCode;
    if (charCode > 31 && (charCode < 48 || charCode > 57)) {
      return false;
    }
    return true;

  }
  buildPrescriptionFormGrp() {
    this.newFormGroup = this.formBuilder.group({
      templatetype: ['BOTH', Validators.required],
      templatename: ['', Validators.required]
    });
    this.emailFormGroup = this.formBuilder.group({
      esubject: ['', Validators.required],
      etoaddress: ['', Validators.required],
      efromaddress: ['', Validators.required],
      edesc: ['', Validators.required]
    });
    this.smsFormGroup = this.formBuilder.group({
      mobileno: ['', [Validators.required, Validators.maxLength(10), Validators.pattern("^[0-9]*$")]],
      message: ['', Validators.required]
    });
  }
  get f() {
    return this.smsFormGroup.controls;
  }
  
  saveall(temp, sms, email) {
    this.formSubmitted = false;
    console.log();
    if (temp === 'temp' && this.newFormGroup.valid == false) {
      this.formSubmitted = true;
    } else if (email === 'email' && this.emailFormGroup.valid == false) {
      this.emailSubmitted = true;
    } else if (sms === 'sms' && this.smsFormGroup.valid == false) {
      this.smsSubmitted = true;
    } else if (sms === 'email' && this.emailFormGroup.valid == false) {
      this.emailSubmitted = true;
    }
    else {
      const payload = {
        "active": true,
        "ccAddress": this.emailFormGroup.value.etoaddress,
        "createdBy": localStorage.getItem('USER_ID'),
        "description": this.emailFormGroup.value.edesc,
        "fromAddress": this.emailFormGroup.value.efromaddress,
        "id": this.editId ? this.editId : 0,
        "message": this.smsFormGroup.value.message,
        "mobileNumber": this.smsFormGroup.value.mobileno,
        "modifiedBy": localStorage.getItem('USER_ID'),
        "subject": this.emailFormGroup.value.esubject,
        "templateName": this.newFormGroup.value.templatename,
        "templateType": this.newFormGroup.value.templatetype
      }
      console.log(payload);
      this.service.addSlatemplate(payload).subscribe((responceData: any) => {
        if (responceData.status === 's') {
          this.alert.showSuccess(responceData.userDisplayMesg, '');
          this.router.navigate(['/helpdesk/sla/template/list']);
        }
      });
    }

  }

}
