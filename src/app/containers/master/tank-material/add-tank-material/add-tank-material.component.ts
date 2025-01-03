import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { TankMaterialService, AlertService, PatternService } from '@app/services';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CommonPopupComponent } from '../../../../_shared/common-popup/common-popup.component'

@Component({
  selector: 'app-add-tank-material',
  templateUrl: './add-tank-material.component.html',
  styleUrls: ['./add-tank-material.component.scss']
})
export class AddTankMaterialComponent implements OnInit {
  tankMaterial: any = {};
  formSubmitted = false;
  curDate = new Date();
  addedit = 'Add';
  constructor(
    private router: Router,
    private modalService: NgbModal,
    private route: ActivatedRoute,
    private tankMaterialService: TankMaterialService,
    public patternService: PatternService,
    private alert: AlertService
  ) { }

  ngOnInit() {
    this.tankMaterial.isActive = true;
    this.route.params.subscribe(params => {
      if (params.id) {
        this.getTankShapeById(params.id);
        this.tankMaterial.id = params.id;
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

  addtankmaterial(tankMaterialForm) {
    this.formSubmitted = true;
    const postParam = {
      id: this.tankMaterial.id,
      code: this.tankMaterial.code,
      name: this.tankMaterial.name,
      modifiedBy: sessionStorage.getItem('loggeduser'),
      isActive: this.tankMaterial.isActive
    };
    if (this.tankMaterial.id) {
      postParam['modifiedBy'] = sessionStorage.getItem('loggeduser');
      postParam['id'] = this.tankMaterial.id;
    } else {
      postParam['createdBy'] = sessionStorage.getItem('loggeduser');
    }
    if (tankMaterialForm.valid) {
      const modalRef = this.modalService.open(CommonPopupComponent);
      console.log(modalRef.result)
      modalRef.result.then(respData => {
        if (respData) {
          ((this.tankMaterial.id) ? this.tankMaterialService.putTankMaterial(postParam) : this.tankMaterialService.addTankMaterial(postParam))
            .subscribe((responceData: any) => {
              if (responceData.status == 's') {
                this.alert.showSuccess(responceData.userDisplayMesg, 'Success');
                this.router.navigate(['/master/tankmaterial/list']);
              } else {
                this.alert.showError(responceData.userDisplayMesg, 'error');
              }
              this.router.navigate(['/master/tankmaterial/list']);

            });
        }
      }).catch(err => {
        console.log('\n err...', err);
      });
    }
  }

  getTankShapeById(id) {
    this.tankMaterialService.getTankMaterialById(id).subscribe((responceData: any) => {
      this.tankMaterial = responceData.data;
    });
  }
}
