import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AlertService, FeetypeService, PatternService } from '@app/services';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CommonPopupComponent } from '@app/_shared/common-popup/common-popup.component';

@Component({
  selector: 'app-add-feetype',
  templateUrl: './add-feetype.component.html',
  styleUrls: ['./add-feetype.component.scss']
})
export class AddFeetypeComponent implements OnInit {
  addedit: any;
  curDate = new Date();
  name: any;
  feetypeObj: any = {
    feetypeCode: '',
    feetypeName: '',
    active: true
  };
  formSubmitted = false;
  editId: any;
  date: any;

  constructor(private router: Router,
    private route: ActivatedRoute,
    private modalService: NgbModal,
    private feetypeService: FeetypeService,
    public patternService: PatternService,
    private alert: AlertService) {

  }

  ngOnInit() {
    this.feetypeObj.active = true;
    this.route.params.subscribe(params => {
      if (params.id) {
        this.editId = params.id;
        this.setData(this.editId);
      }
    });
    this.addedit = this.router.url.includes('add') == true ? 'Add' : 'Edit';
  }

  setData(id) {
    this.feetypeService.getFeetypeById(id).subscribe((responceData: any) => {
      this.feetypeObj = responceData.data;
    });
  }

  removeFirstSpace(e) {
    const x = (e.which) ? e.which : e.keyCode;
    if (e.which === 32 && e.target.selectionStart === 0) {
      return false;
    }
  }

  addfeetype(feetypeForm) {
    this.formSubmitted = false;
    if (feetypeForm.valid === false) {
      this.formSubmitted = true;
    } else {
      const postParam = {
        feeTypeCode: this.feetypeObj.feeTypeCode,
        feeTypeName: this.feetypeObj.feeTypeName,
        isActive: this.feetypeObj.isActive
      };
      // modifiedBy: sessionStorage.getItem('loggeduser'),
      if (this.editId) {
        postParam['id'] = this.editId;
      }
      const modalRef = this.modalService.open(CommonPopupComponent);
      modalRef.result.then(respData => {
        if (respData) {
          ((this.editId) ? this.feetypeService.updateFeetype(postParam) : this.feetypeService.addFeetype(postParam))
            .subscribe((responceData: any) => {
              if (responceData.status == 's') {
                this.alert.showSuccess(responceData.userDisplayMesg, 'Success');
                this.router.navigate(['/master/feetype/list']);
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
}
