import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { DatePipe } from '@angular/common';
import { SugarmillapiService } from '@app/services';
import { apiUrls } from '@appEnv/apiurls';
import { AlertService } from '@app/services';

@Component({
  selector: 'app-viewregistrationrequest',
  templateUrl: './viewregistrationrequest.component.html',
  styleUrls: ['./viewregistrationrequest.component.scss']
})
export class ViewregistrationrequestComponent implements OnInit {

  registrationObj: any = {
    treasuryDetails: '',
    sugarMillName: '',
    tonsSeason: '',
    tonsDay: '',
    sugarRecovery: '',
    molassesRecovery: '',
    district: '',
    yearOfEstablishment: '',
    sugarMillCaptiveDistilleries: false,
    createdOn: '',
    createdBy: '',
    updatedOn: '',
    updatedBy: '',
    remarks: ''

  };
  viewId: any;
  date: any;
  formSubmitted = false;
  constructor(private route: ActivatedRoute, private router: Router, private datepipe: DatePipe, private apiService: SugarmillapiService, private alert: AlertService) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      if (params.Id) {
        this.viewId = params.Id;
        this.setData(this.viewId);
      }
    });
  }

  viewpage() {
    this.router.navigate(['/supplychainmanagement/sugarmills/registration/view', this.viewId]);
  }


  setData(id) {
    this.apiService.get(apiUrls.getSugerMillById + id).then((responsecontents: any) => {
      if (responsecontents.errorCode == 200) {

        console.log(responsecontents);
        this.registrationObj = responsecontents.data;
        this.registrationObj.sugarMillName = responsecontents.data.sugarMillName;
        this.registrationObj.treasuryDetails = responsecontents.data.treasuryDetails;


      }

    }).catch((err: any) => {
      console.log('\n err...', err);
    });
  }

  Approverequest(registrationform, type) {
    this.formSubmitted = false;
    if (registrationform.valid === false) {
      // this.alert.showAlert('remarks required','error');
      this.formSubmitted = true;
      this.alert.showError('Please fill required Fields', 'error');
    } else {
      if (type == 1) {
        if (this.viewId) {
          const postParam = {
            approval: true,
            approvedBy: 1,
            remarks: this.registrationObj.remarks,
            sugarMillRegId: parseInt(this.viewId)
          };



          console.log(postParam);

          this.apiService.post(apiUrls.sugarMillApprovalLog, postParam).then((responceData: any) => {
            if (responceData.status == 's') {
              this.alert.showSuccess(responceData.userDisplayMesg, 'Success');
              this.router.navigate(['/supplychainmanagement/sugarmills/registrationrequest/list']);

            } else {
              this.alert.showError(responceData.userDisplayMesg, 'error');

            }
            // this.alert.showAlert('Approved Successfully','success');
            // this.alert.showSuccess('Approved Successfully','Success');

          }).catch((err: any) => {
            console.log('\n err...', err);
          });
        } else {


        }


      } else {

        if (this.viewId) {
          const postParam = {
            approval: false,
            approvedBy: 1,
            remarks: this.registrationObj.remarks,
            sugarMillRegId: parseInt(this.viewId)
          };



          console.log(postParam);

          this.apiService.post(apiUrls.sugarMillApprovalLog, postParam).then((responceData: any) => {
            if (responceData.status == 's') {
              this.alert.showSuccess(responceData.userDisplayMesg, 'Success');
              this.router.navigate(['/supplychainmanagement/sugarmills/registrationrequest/list']);

            } else {
              this.alert.showError(responceData.userDisplayMesg, 'error');

            }
          }).catch((err: any) => {
            console.log('\n err...', err);
          });
        } else {


        }


      }




    }
  }


}
