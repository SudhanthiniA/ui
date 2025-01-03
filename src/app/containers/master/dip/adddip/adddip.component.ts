import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AlertService, DipMasterService, PatternService } from '@app/services';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CommonPopupComponent } from '../../../../_shared/common-popup/common-popup.component';

@Component({
  selector: 'app-adddip',
  templateUrl: './adddip.component.html',
  styleUrls: ['./adddip.component.scss']
})
export class AdddipComponent implements OnInit {
  dipObject: any = {};
  formSubmitted = false;
  curDate = new Date();
  addedit = 'Add';
  editId: any;
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private modalService: NgbModal,
    private dipService: DipMasterService,
    private alert: AlertService,
    public patternService: PatternService
  ) { }

  ngOnInit() {
    this.dipObject.isActive = true;
    this.route.params.subscribe(params => {
      if (params.id) {
        this.editId = params.id;
        this.getDepartmentById(params.id);
        this.addedit = 'Edit';
      }
    });
  }
  removeFirstSpace(e) {
    const x = (e.which) ? e.which : e.keyCode;
    if (e.which === 32 && e.target.selectionStart === 0) {
      return false;
    }
  }

  adddepartment(departmentForm) {
    this.formSubmitted = true;
    const postParam = {
      id: this.dipObject.id,
      code: this.dipObject.code,
      name: this.dipObject.name,
      isActive: this.dipObject.isActive
    };
    if (this.editId) {
      postParam['modifiedBy'] = sessionStorage.getItem('loggeduser');
      postParam['id'] = this.editId;
    } else {
      postParam['createdBy'] = sessionStorage.getItem('loggeduser');
    }
    if (departmentForm.valid) {
      const modalRef = this.modalService.open(CommonPopupComponent);
      console.log(modalRef.result)
      modalRef.result.then(respData => {
        if (respData) {
          ((this.editId) ? this.dipService.putDip(postParam) : this.dipService.addDip(postParam))
            .subscribe((resp: any) => {
              if (resp.status == 's') {
                this.alert.showSuccess(resp.userDisplayMesg, 'Success');
                this.router.navigate(['/master/dip/list']);
              } else {
                this.alert.showError(resp.userDisplayMesg, 'error');
              }
            });
        }
      }).catch(err => {
        console.log('\n err...', err);
      });
    }
  }

  getDepartmentById(id) {
    this.dipService.getDipById(id).subscribe((resp: any) => {
      this.dipObject = resp.data;
    });
  }
}
