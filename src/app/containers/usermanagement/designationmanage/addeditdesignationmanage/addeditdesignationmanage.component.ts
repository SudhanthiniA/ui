import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {
  AlertService,
  UserManagmentService
} from '@app/services';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CommonPopupComponent } from '@app/_shared/common-popup/common-popup.component';

@Component({
  selector: 'app-addeditdesignationmanage',
  templateUrl: './addeditdesignationmanage.component.html',
  styleUrls: ['./addeditdesignationmanage.component.scss']
})
export class AddeditdesignationmanageComponent implements OnInit {

  public show = false;
  public buttonName: any = 'Show';
  designationObj: any = {
    code: '',
    name: '',
    active: true
  };
  formSubmitted: boolean;
  editId: any;
  codeExistsFlag = false;

  constructor(
    private router: Router,
    private userManageService: UserManagmentService,
    private modalService: NgbModal,
    private route: ActivatedRoute,
    private alert: AlertService) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      if (params.id) {
        this.getDesignationById(params.id);
        this.editId = params.id;
      }
    });
  }

  toggle() {
    this.show = !this.show;

    // CHANGE THE NAME OF THE BUTTON.
    if (this.show) {
      this.buttonName = 'Hide';
    } else {
      this.buttonName = 'Show';
    }
  }

  getDesignationById(id) {
    this.userManageService.getdesignationById(id)
      .subscribe((resp: any) => {
        this.designationObj = resp.content;
      });
  }

  checkCode(value) {
    if (value.length > 0) {
      this.userManageService.validateDesignationCode(value)
        .subscribe((responseData: any) => {
          console.log(responseData);
          if (responseData === true) {
            this.codeExistsFlag = true;
          } else {
            this.codeExistsFlag = false;
          }
        });
    }
  }

  saveDesignation(designationform) {
    this.formSubmitted = false;
    if (designationform.valid === false) {
      this.formSubmitted = true;
    } else {
      const postParam = {
        code: this.designationObj.code,
        name: this.designationObj.name,
        active: this.designationObj.active
      };
      if (this.editId) {
        postParam['id'] = this.editId;
      }
      const modalRef = this.modalService.open(CommonPopupComponent);
      modalRef.result.then(respData => {
        if (respData) {
          ( this.userManageService.saveUpdateDesignation(postParam))
            .subscribe((responseData: any) => {
              if (responseData.responseCode === 200) {
                this.alert.showSuccess(responseData.responseMessage, 'Success');
                this.router.navigate(['usermanagement/designation/list']);
              } else {
                this.alert.showError(responseData.responseMessage, 'error');
              }
            });
        }
      }).catch(err => {
        console.log('\n err...', err);
      });
    }
  }
}
