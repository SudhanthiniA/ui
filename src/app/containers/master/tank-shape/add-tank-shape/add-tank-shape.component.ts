import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { TankShapeService, AlertService, PatternService } from '@app/services';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CommonPopupComponent } from '../../../../_shared/common-popup/common-popup.component'

@Component({
  selector: 'app-add-tank-shape',
  templateUrl: './add-tank-shape.component.html',
  styleUrls: ['./add-tank-shape.component.scss']
})
export class AddTankShapeComponent implements OnInit {
  departmentObject: any = {};
  formSubmitted = false;
  curDate = new Date();
  addedit = 'Add';
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private tankShapeService: TankShapeService,
    private modalService: NgbModal,
    public patternService: PatternService,
    private alert: AlertService
  ) { }

  ngOnInit() {
    this.departmentObject.isActive = true;
    this.route.params.subscribe(params => {
      if (params.id) {
        this.getTankShapeById(params.id);
        this.departmentObject.id = params.id;
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
    if (this.departmentObject.id) {
      postParam['modifiedBy'] = sessionStorage.getItem('loggeduser');
      postParam['id'] = this.departmentObject.id;
    } else {
      postParam['createdBy'] = sessionStorage.getItem('loggeduser');
    }
    if (departmentForm.valid) {
      const modalRef = this.modalService.open(CommonPopupComponent);
      console.log(modalRef.result)
      modalRef.result.then(respData => {
        if (respData) {
          ((this.departmentObject.id) ? this.tankShapeService.putTankShape(postParam) : this.tankShapeService.addTankShape(postParam)).subscribe((responceData: any) => {
            if (responceData.status == 's') {
              this.alert.showSuccess(responceData.userDisplayMesg, 'Success');
              this.router.navigate(['/master/tankshape/list']);
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

  getTankShapeById(id) {
    this.tankShapeService.getTankShapeById(id).subscribe((responceData: any) => {
      this.departmentObject = responceData.data;
    });
  }
}
