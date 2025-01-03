import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { DatePipe } from '@angular/common';
import { AlertService, DistileryService } from '@app/services';

@Component({
  selector: 'app-addedit-mf12molassesregister',
  templateUrl: './addedit-mf12molassesregister.component.html',
  styleUrls: ['./addedit-mf12molassesregister.component.scss']
})
export class AddeditMf12molassesregisterComponent implements OnInit {


  molassesregisterObject: any = {};
  formSubmitted = false;
  curDate = new Date();
  editId: any;
  addedit: any;
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private distileryService: DistileryService,
    private datePipe: DatePipe,
    private alert: AlertService
  ) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      if (params.id) {
        this.getMolassesRegister(params.id);
        this.molassesregisterObject.id = params.id;
        this.editId = params.id;
      }
    });
    this.addedit = this.router.url.includes('add') === true ? 'Add' : 'Edit';
  }

  saveData(form, status) {
    this.formSubmitted = false;
    if (form.valid === false && status === 2) {
      this.formSubmitted = true;
    } else {
      if (this.editId) {
        if (status === 1) {
          this.molassesregisterObject[`status`] = false;
        } else {
          this.molassesregisterObject[`status`] = true;
        }

        this.molassesregisterObject['id'] = this.editId;
        this.distileryService.updateMf12register(this.molassesregisterObject).subscribe(responceData => {
          if (responceData['status'] === 's') {
            this.alert.showSuccess(responceData['userDisplayMesg'], 'Success')
            sessionStorage.removeItem("molassesregister")
            this.router.navigate(['/supplychainmanagement/distillery/mf12-molassesregister/list']);
          } else {
            this.alert.showError(responceData['userDisplayMesg'], 'error')
          }
        })
      } else {
        if (status === 2) {
          this.molassesregisterObject[`status`] = true;
        } else {
          this.molassesregisterObject[`status`] = false;
        }
        this.distileryService.addMf12register(this.molassesregisterObject).subscribe(responceData => {
          if (responceData['status'] === 's') {
            this.alert.showSuccess(responceData['userDisplayMesg'], 'Success')
            sessionStorage.removeItem("molassesregister")
            this.router.navigate(['/supplychainmanagement/distillery/mf12-molassesregister/list']);
          } else {
            this.alert.showError(responceData['userDisplayMesg'], 'error')
          }
        })
      }
    }
  }

  getMolassesRegister(id?) {
    this.distileryService.getMf12registerById(id).subscribe(responceData => {
      this.molassesregisterObject = responceData['data']
      this.molassesregisterObject['dateOfUnloading'] = this.datePipe.transform(this.molassesregisterObject.dateOfUnloading, 'yyyy-MM-dd');
    });
  }

  previewMolassess(form) {
    sessionStorage.setItem('molassesregister', JSON.stringify(this.molassesregisterObject));
    this.router.navigate(['/supplychainmanagement/distillery/mf12-molassesregister/preview']);

  }

  backtoHome() {
    sessionStorage.removeItem('molassesregister');
    this.router.navigate(['/supplychainmanagement/distillery/mf12-molassesregister/list']);
  }

}
