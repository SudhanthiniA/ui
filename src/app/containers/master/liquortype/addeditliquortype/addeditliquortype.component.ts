import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { LiquorTypeService, AlertService, PatternService } from '@app/services';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CommonPopupComponent } from '../../../../_shared/common-popup/common-popup.component'

@Component({
  selector: 'app-addeditliquortype',
  templateUrl: './addeditliquortype.component.html',
  styleUrls: ['./addeditliquortype.component.scss']
})
export class AddeditliquortypeComponent implements OnInit {

  rawmaterialObj: any = {};
  formSubmitted = false;
  curDate = new Date();
  addedit: any;
  editId: any;
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private liquorTypeService: LiquorTypeService,
    public patternService: PatternService,
    private modalService: NgbModal,
    private alert: AlertService
  ) { }

  ngOnInit() {
    this.rawmaterialObj.isActive = true;
    this.route.params.subscribe(params => {
      if (params.id) {
        this.editId = params.id;
        this.getrawmaterialById(params.id);
      }
    });
    this.addedit = this.router.url.includes('add') == true ? 'Add' : 'Edit';
  }

  removeFirstSpace(e) {
    if (e.which === 32 && e.target.selectionStart === 0) {
      return false;
    }
  }

  addrawmaterial(rawmaterialForm) {
    this.formSubmitted = true;
    const postParam = {
      id: this.editId,
      code: this.rawmaterialObj.code,
      name: this.rawmaterialObj.name,
      isActive: this.rawmaterialObj.isActive,
    };
    if (this.editId) {
      postParam['modifiedBy'] = sessionStorage.getItem('loggeduser');
      postParam['id'] = this.editId;
    } else {
      postParam['createdBy'] = sessionStorage.getItem('loggeduser');
    }
    if (rawmaterialForm.valid) {
      const modalRef = this.modalService.open(CommonPopupComponent);
      console.log(modalRef.result)
      modalRef.result.then(respData => {
        if (respData) {
          ((this.editId) ? this.liquorTypeService.putLiquorType(postParam) : this.liquorTypeService.addLiquorType(postParam)).subscribe((responceData: any) => {
            if (responceData.status === 's') {
              this.alert.showSuccess(responceData.userDisplayMesg, 'success');
              this.router.navigate(['/master/liquortype/list']);
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

  getrawmaterialById(id) {
    this.liquorTypeService.getLiquorTypeById(id).subscribe((responceData: any) => {
      this.rawmaterialObj = responceData.data;
    });
  }
}
