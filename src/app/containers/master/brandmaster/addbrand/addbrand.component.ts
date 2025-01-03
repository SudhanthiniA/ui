import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AlertService, BrandMasterService, PatternService } from '@app/services';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CommonPopupComponent } from '../../../../_shared/common-popup/common-popup.component'

@Component({
  selector: 'app-addbrand',
  templateUrl: './addbrand.component.html',
  styleUrls: ['./addbrand.component.scss']
})
export class AddbrandComponent implements OnInit {
  addedit: string;
  editId: any;
  curDate = new Date();
  formSubmitted = false;
  categoryObj: any = {
    brandCode: '',
    brandName: '',
    description: '',
    isActive: ''
  };

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private modalService: NgbModal,
    private brandService: BrandMasterService,
    public patternService: PatternService,
    private alert: AlertService) { }

  ngOnInit() {
    this.categoryObj.isActive = true;
    this.route.params.subscribe(params => {
      if (params.Id) {
        this.editId = params.Id;
        this.setData(this.editId);
      }
    });
    this.addedit = this.router.url.includes('add') == true ? 'Add' : 'Edit';
  }

  addbrand(categoryForm) {
      this.formSubmitted = true;
        const postParam = {
          id: this.editId,
          brandCode: this.categoryObj.brandCode,
          brandName: this.categoryObj.brandName,
          description: this.categoryObj.description,
          isActive: this.categoryObj.isActive
        };
        if (this.editId) {
          postParam['modifiedBy'] = sessionStorage.getItem('loggeduser');
          postParam['id'] = this.editId;
        } else {
          postParam['createdBy'] = sessionStorage.getItem('loggeduser');
        }
    
        if (categoryForm.valid) {
          const modalRef = this.modalService.open(CommonPopupComponent);
          console.log(modalRef.result)
          modalRef.result.then(respData => {
            if (respData) {
        ((this.editId) ? this.brandService.putBrandMaster(postParam) : this.brandService.addBrandMaster(postParam))
          .subscribe((resp: any) => {
            if (resp.status == 's') {
              this.alert.showSuccess(resp.userDisplayMesg, 'Success');
              this.router.navigate(['/master/brandmaster/list']);
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

  setData(id) {
    this.brandService.getBrandMasterById(id)
      .subscribe((resp: any) => {
        this.categoryObj = resp.data;
      });
  }
}
