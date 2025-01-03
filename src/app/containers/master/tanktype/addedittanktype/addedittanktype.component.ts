import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { TankTypeService, AlertService, PatternService } from '@app/services'
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CommonPopupComponent } from '../../../../_shared/common-popup/common-popup.component'

@Component({
  selector: 'app-addedittanktype',
  templateUrl: './addedittanktype.component.html',
  styleUrls: ['./addedittanktype.component.scss']
})
export class AddedittanktypeComponent implements OnInit {
  tanktypeObj: any = {};
  formSubmitted = false;
  curDate = new Date();
  addedit = 'Add';

  constructor(
    private router: Router,
    private modalService: NgbModal,
    private route: ActivatedRoute,
    private tanktypeService: TankTypeService,
    private alert: AlertService,
    public patternService: PatternService
  ) { }

  ngOnInit() {
    this.tanktypeObj.isActive = true;
    this.route.params.subscribe(params => {
      if (params.id) {
        this.getTanktypeById(params.id);
        this.tanktypeObj.id = params.id;
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

  addtanktype(tanktypeForm) {
    this.formSubmitted = true;
      const postParam = {
        code: this.tanktypeObj.code,
        name: this.tanktypeObj.name,
        material: this.tanktypeObj.material,
        modifiedBy: 'Admin',
        isActive: this.tanktypeObj.isActive,
        id: this.tanktypeObj.id
      };
      if (this.tanktypeObj.id) {
        postParam['modifiedBy'] = sessionStorage.getItem('loggeduser');
        postParam['id'] = this.tanktypeObj.id;
      } else {
        postParam['createdBy'] = sessionStorage.getItem('loggeduser');
      }
      if (tanktypeForm.valid) {
        const modalRef = this.modalService.open(CommonPopupComponent);
        console.log(modalRef.result)
        modalRef.result.then(respData => {
          if (respData) {
            ((this.tanktypeObj.id) ? this.tanktypeService.putTankType(postParam) : this.tanktypeService.addTankType(postParam))
              .subscribe((responceData: any) => {
                if (responceData.status == 's') {
                  this.alert.showSuccess(responceData.userDisplayMesg, 'Success');
                  this.router.navigate(['/master/tanktype/list']);
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

    getTanktypeById(id) {
      this.tanktypeService.getTankTypeById(id).subscribe((responceData: any) => {
        this.tanktypeObj = responceData.data;
      });
    }
  }
