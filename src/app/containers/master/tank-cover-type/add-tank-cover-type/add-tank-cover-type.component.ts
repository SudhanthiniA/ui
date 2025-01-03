import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AlertService, TankCoverTypeService } from '@app/services';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CommonPopupComponent } from '@app/_shared/common-popup/common-popup.component';
@Component({
  selector: 'app-add-tank-cover-type',
  templateUrl: './add-tank-cover-type.component.html',
  styleUrls: ['./add-tank-cover-type.component.scss']
})
export class AddTankCoverTypeComponent implements OnInit {
  tankCoverObject: any = {};
  formSubmitted = false;
  curDate = new Date();
  addedit = 'Add';
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private tankCoverService: TankCoverTypeService,
    private alert: AlertService,
    private modalService: NgbModal,
  ) { }

  ngOnInit() {
    this.tankCoverObject.active = true;
    this.route.params.subscribe(params => {
      if (params.id) {
        this.getTankShapeById(params.id);
        this.tankCoverObject.id = params.id;
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
  addTankCover(tankcoverForm) {
    this.formSubmitted = false;
    console.log(tankcoverForm.valid);
    if (tankcoverForm.valid === false) {
      this.formSubmitted = true;
    } else {
      console.log(this.tankCoverObject);
      const postParam = {
        code: this.tankCoverObject.code,
        name: this.tankCoverObject.name,
        active: this.tankCoverObject.active
      };
      if (this.tankCoverObject.id) {
        postParam['id'] = this.tankCoverObject.id;
      }
      const modalRef = this.modalService.open(CommonPopupComponent);
      modalRef.result.then(respData => {
         if (respData) {
           ((this.tankCoverObject.id) ? this.tankCoverService.updateTankCover(postParam) : this.tankCoverService.addTankCover(postParam))
        .subscribe((responceData: any) => {
          if (responceData.status === 's') {
            this.alert.showSuccess(responceData.userDisplayMesg, 'success');
            this.router.navigate(['/master/tankcovertype/list']);
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
    this.tankCoverService.getTankCoverById(id).subscribe((responceData: any) => {
      this.tankCoverObject = responceData.data;
      this.tankCoverObject.active = responceData.data.isActive;
    });
  }

}
