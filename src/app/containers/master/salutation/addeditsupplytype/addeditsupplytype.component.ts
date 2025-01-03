import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SupplyTypeService, AlertService, PatternService } from '@app/services';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CommonPopupComponent } from '../../../../_shared/common-popup/common-popup.component'

@Component({
  selector: 'app-addeditsupplytype',
  templateUrl: './addeditsupplytype.component.html',
  styleUrls: ['./addeditsupplytype.component.scss']
})
export class AddeditsupplytypeComponent implements OnInit {
  addedit: any;
  curDate = new Date();
  name: any;
  liquorList: any;
  subBrandObj: any = {
    supplyType: '',
    name: '',
    percentage: '',
    isActive: true,
  };
  date: any;
  editId: any;
  formSubmitted = false;
  brandList: any;

  constructor(private route: ActivatedRoute,
    private router: Router,
    private supplyTypeService: SupplyTypeService,
    private modalService: NgbModal,
    public patternService: PatternService,
    private alert: AlertService) {
  }

  ngOnInit() {
    this.subBrandObj.isActive = true;
    this.route.params.subscribe(params => {
      if (params.Id) {
        this.editId = params.Id;
        this.setData(this.editId);
      }
    });
    this.addedit = this.router.url.includes('add') == true ? 'Add' : 'Edit';
  }

  setData(id) {
    this.supplyTypeService.getSupplyTypeById(id).subscribe((responceData: any) => {
      this.subBrandObj = responceData.data;
    });
  }

  addSubbrand(subBrandForm) {
    this.formSubmitted = true;
    const postParam = {
      supplyType: this.subBrandObj.supplyType,
      name: this.subBrandObj.name,
      percentage: this.subBrandObj.percentage,
      id: this.editId,
      isActive: this.subBrandObj.isActive,
    };
    if (this.editId) {
      postParam['modifiedBy'] = sessionStorage.getItem('loggeduser');
      postParam['id'] = this.editId;
    } else {
      postParam['createdBy'] = sessionStorage.getItem('loggeduser');
    }
    if (subBrandForm.valid) {
      const modalRef = this.modalService.open(CommonPopupComponent);
      console.log(modalRef.result)
      modalRef.result.then(respData => {
        if (respData) {
          ((this.editId) ? this.supplyTypeService.putSupplyType(postParam) : this.supplyTypeService.addSupplyType(postParam))
            .subscribe((responceData: any) => {
              if (responceData.status == 's') {
                this.alert.showSuccess(responceData.userDisplayMesg, 'Success');
                this.router.navigate(['/master/supplytype/list']);
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

  navigateliquorList() {
    this.router.navigate(['/master/supplytype/list']);
  }
}
