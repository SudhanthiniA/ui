import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators, FormArray } from '@angular/forms';
import { KnowledgeService } from '@app/services/helpdesk/knowledgeservice';
import { AlertService } from '@app/services';
@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss'],
  // changeDetection: ChangeDetectionStrategy.OnPush
})
export class AddComponent implements OnInit {
  newRegistrationFormGroup: FormGroup;
  formSubmitted = false; issuedetlist: any;
  registrationObj: any; knowledgeid; getknowledgeidbaseddetails: any;

  constructor(
    private route: ActivatedRoute, private router: Router,
    private formBuilder: FormBuilder, private alert: AlertService,
    private Service: KnowledgeService
  ) {
    this.getissuedet();
    this.buildPrescriptionFormGrp();
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      if (params.id) {
        this.knowledgeid = params.id;

        this.Service.getknowledgebyId(this.knowledgeid).subscribe((resp: any) => {
          this.getknowledgeidbaseddetails = resp.data;
          this.setData(this.getknowledgeidbaseddetails);
        });

      }
    });
  }
  getissuedet() {
    this.Service.getallissues().subscribe((responceData: any) => {
      this.issuedetlist = (responceData.status === 's') ? responceData.data : [];
      console.log(this.issuedetlist);
    });
  }
  buildPrescriptionFormGrp() {
    this.newRegistrationFormGroup = this.formBuilder.group({
      issueid: ['', Validators.required],
      active: ['', Validators.required],
      wareHouseDetails: this.formBuilder.array([
        this.addFormGroupTable()
      ])
    });
  }
  resetForm() {
    this.newRegistrationFormGroup.reset();
  }
  public getPresFormLength(): number {
    return (this.newRegistrationFormGroup.get('wareHouseDetails') as FormArray).length;
  }
  addNewRow(rowId) {
    this.addEmptyCtrl();
  }
  public addEmptyCtrl(): void {
    (this.newRegistrationFormGroup.get('wareHouseDetails') as FormArray).push(this.addFormGroupTable());
  }
  addFormGroupTable(data?: any): FormGroup {
    return this.formBuilder.group({
      answer: data && data.answer || '',
      answerActive: data && data.answerActive || ''
    });
  }
  getValidity(i, dat) {
    if (dat == 'answer') {
      return (<FormArray>this.newRegistrationFormGroup.get('wareHouseDetails')).controls[i].invalid;
    } else {
      return (<FormArray>this.newRegistrationFormGroup.get('wareHouseDetails')).controls[i].invalid;
    }
  }
  public removeSelectedRow(idx: number) {
    (this.newRegistrationFormGroup.get('wareHouseDetails') as FormArray).removeAt(idx);
  }
  setData(data) {
    this.newRegistrationFormGroup.patchValue({
      'issueid': data[0].issueid,
      'active': data[0].active
    });
    // this.newRegistrationFormGroup.patchValue(data[0]);
    data.forEach((element: any, idx: number) => {
      if (element) {
        (this.newRegistrationFormGroup.get('wareHouseDetails') as FormArray).removeAt(idx);
        (this.newRegistrationFormGroup.get('wareHouseDetails') as FormArray).push(this.addFormGroupTable(element));

      }
    });
    console.log(this.newRegistrationFormGroup.value);
  }

  addRegistration(form, status) {
    if (form.valid === false) {
      this.formSubmitted = true;
    } else {
      let workLocationIds = [];
      this.newRegistrationFormGroup.value.wareHouseDetails.forEach((ele, i) => {
        if (ele.answerActive == true || ele.answerActive == false) {
          workLocationIds.push(ele);
        } else {
          ele['answerActive'] = JSON.parse(ele.answerActive)
          workLocationIds.push(ele);
        }
      });
      console.log(workLocationIds);
      const payload = {
        // "id": this.knowledgeid ?  parseInt(this.knowledgeid) : 0,
        "active": JSON.parse(this.newRegistrationFormGroup.value.active),
        "issueid": parseInt(this.newRegistrationFormGroup.value.issueid),
        "knowledgeList": workLocationIds
      }
      console.log(payload);
      if (this.knowledgeid == undefined) {

        this.Service.addknowledge(payload).subscribe((responceData: any) => {
          if (responceData.status === 's') {
            this.alert.showSuccess(responceData.userDisplayMesg, '');
            this.router.navigate(['/helpdesk/knowledgebase/list']);
          }
        });
      } else {
        this.Service.updateknowledge(payload).subscribe((responceData: any) => {
          if (responceData.status === 's') {
            this.alert.showSuccess(responceData.userDisplayMesg, '');
            this.router.navigate(['/helpdesk/knowledgebase/list']);
          }
        });
      }

    }
  }

}
