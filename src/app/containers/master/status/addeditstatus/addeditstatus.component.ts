import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { StatusMasterService, PatternService, AlertService } from '@app/services';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CommonPopupComponent } from '../../../../_shared/common-popup/common-popup.component'

@Component({
  selector: 'app-addeditstatus',
  templateUrl: './addeditstatus.component.html',
  styleUrls: ['./addeditstatus.component.scss']
})
export class AddeditstatusComponent implements OnInit {

  statusObj: any = {};
  formSubmitted = false;
  curDate = new Date();
  addedit = 'Add';
  id: any;
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private statusService: StatusMasterService,
    private modalService: NgbModal,
    public patternService: PatternService,
    private alert: AlertService
  ) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      if (params.id) {
        this.getStatusById(params.id);
        this.id = params.id;
        this.addedit = 'Edit';
      } else {
        this.statusObj.isActive = true;
      }
    });
  }

  removeFirstSpace(e) {
    const x = (e.which) ? e.which : e.keyCode;
    if (e.which === 32 && e.target.selectionStart === 0) {
      return false;
    }
  }

  addstatus(statusForm) {
    this.formSubmitted = true;
    const postParam = {
      id: this.id,
      code: this.statusObj.code,
      name: this.statusObj.name,
      modifiedBy: 'Admin',
      isActive: this.statusObj.isActive
    };
    if (this.statusObj.id) {
      postParam['modifiedBy'] = sessionStorage.getItem('loggeduser');
      postParam['id'] = this.statusObj.id;
    } else {
      postParam['createdBy'] = sessionStorage.getItem('loggeduser');
    }
    if (statusForm.valid) {
      const modalRef = this.modalService.open(CommonPopupComponent);
      console.log(modalRef.result)
      modalRef.result.then(respData => {
        if (respData) {
          ((this.statusObj.id) ? this.statusService.putStatus(postParam) : this.statusService.addStatus(postParam))
            .subscribe((responceData: any) => {
              if (responceData.status == 's') {
                this.alert.showSuccess(responceData.userDisplayMesg, 'Success');
                this.router.navigate(['/master/status/list']);
              } else {
                this.alert.showError(responceData.userDisplayMesg, 'error');
              }
            });
        }
      }).catch(err => {
        console.log('\n err...', err);
      });
    }
  }

  getStatusById(id) {
    this.statusService.getStatusById(id).subscribe((responceData: any) => {
      this.statusObj = responceData.data;
    });
  }
}
