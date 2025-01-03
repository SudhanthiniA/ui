import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AlertService } from '@app/services';
import { EntityService } from '@app/services';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CommonPopupComponent } from '@app/_shared/common-popup/common-popup.component';

@Component({
  selector: 'app-add-entity',
  templateUrl: './add-entity.component.html',
  styleUrls: ['./add-entity.component.scss']
})
export class AddEntityComponent implements OnInit {
  entityObject: any = {};
  formSubmitted = false;
  curDate = new Date();
  addedit: any;
  id: any;
  codeExistsFlag = false;
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private entityService: EntityService,
    private modalService: NgbModal,
    private alert: AlertService
  ) { }

  ngOnInit() {
    this.entityObject.active = true;
    this.route.params.subscribe(params => {
      if (params.id) {
        this.getEntityById(params.id);
        this.id = params.id;
        this.addedit = 'Edit';
      }
    });
    this.addedit = this.router.url.includes('add') == true ? 'Add' : 'Edit';
  }

  removeFirstSpace(e) {
    const x = (e.which) ? e.which : e.keyCode;
    if (e.which === 32 && e.target.selectionStart === 0) {
      return false;
    }
  }

  checkCode(value) {
    if (value.length > 0) {
      this.entityService.validateEntityCode(value)
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

  addentity(entityForm) {
    this.formSubmitted = false;
    if (entityForm.valid === false) {
      this.formSubmitted = true;
    } else {
      const postParam = {
        id: this.id,
        code: this.entityObject.code,
        name: this.entityObject.name,
        active: this.entityObject.active
      };
      if (this.entityObject.id) {
        postParam['id'] = this.entityObject.id;
      }
      const modalRef = this.modalService.open(CommonPopupComponent);
      modalRef.result.then(respData => {
        if (respData) {
          // (this.entityObject.id) ? this.entityService.updateEntity(postParam) : 
          (this.entityService.saveUpdateEntityType(postParam))
            .subscribe((responseData: any) => {
              if (responseData.responseCode === 200) {
                this.alert.showSuccess(responseData.responseMessage, 'Success');
                this.router.navigate(['/master/entity/list']);
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

  getEntityById(id) {
    this.entityService.getEntityById(id).subscribe((responceData: any) => {
      this.entityObject = responceData.content;
    });
  }

}
