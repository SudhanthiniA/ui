import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AlertService, DepartmentService, PatternService } from '@app/services';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CommonPopupComponent } from '../../../../_shared/common-popup/common-popup.component'

@Component({
  selector: 'app-add-department',
  templateUrl: './add-department.component.html',
  styleUrls: ['./add-department.component.scss']
})
export class AddDepartmentComponent implements OnInit {
  departmentObject: any = {};
  formSubmitted = false;
  curDate = new Date();
  addedit = 'Add';
  editId: any;
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private modalService: NgbModal,
    private alert: AlertService,
    private departmentService: DepartmentService,
    public patternService: PatternService
  ) { }

  ngOnInit() {
    this.departmentObject.isActive = true;
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
      id: this.departmentObject.id,
      code: this.departmentObject.code,
      name: this.departmentObject.name,
      modifiedBy: sessionStorage.getItem('loggeduser'),
      isActive: this.departmentObject.isActive
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
          ((this.editId) ? this.departmentService.putDepartment(postParam) : this.departmentService.addDepartment(postParam))
            .subscribe((resp: any) => {
              if (resp.status == 's') {
                this.alert.showSuccess(resp.userDisplayMesg, 'Success');
                this.router.navigate(['/master/department/list']);
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
    this.departmentService.getDepartmentById(id).subscribe((resp: any) => {
      this.departmentObject = resp.data;
    });
  }
}