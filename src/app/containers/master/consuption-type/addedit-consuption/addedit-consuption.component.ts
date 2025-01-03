import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AlertService, ConsumptionTypeService, PatternService } from '@app/services';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CommonPopupComponent } from '../../../../_shared/common-popup/common-popup.component'

@Component({
  selector: 'app-addedit-consuption',
  templateUrl: './addedit-consuption.component.html',
  styleUrls: ['./addedit-consuption.component.scss']
})
export class AddeditConsuptionComponent implements OnInit {
  consuptionObject: any = {};
  formSubmitted = false;
  curDate = new Date();
  addedit = 'Add';
  Id: any;
  editId: any;
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private modalService: NgbModal,
    private consumptionTypeService: ConsumptionTypeService,
    public patternService: PatternService,
    private alert: AlertService
  ) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      if (params.Id) {
        this.getVerificationById(params.Id);
        this.editId = params.Id;
        this.addedit = 'Edit';
      }
      this.consuptionObject.isActive = true;
    });
  }

  removeFirstSpace(e) {
    const x = (e.which) ? e.which : e.keyCode;
    if (e.which === 32 && e.target.selectionStart === 0) {
      return false;
    }
  }

  addconsuption(consuptionForm) {
    this.formSubmitted = true;
        const postParam = {
          id: this.Id,
          code: this.consuptionObject.code,
          name: this.consuptionObject.name,
          isActive: this.consuptionObject.isActive,
        };
        if (this.editId) {
          postParam['modifiedBy'] = sessionStorage.getItem('loggeduser');
          postParam['id'] = this.editId;
        } else {
          postParam['createdBy'] = sessionStorage.getItem('loggeduser');
        }
    
        if (consuptionForm.valid) {
          const modalRef = this.modalService.open(CommonPopupComponent);
          console.log(modalRef.result)
          modalRef.result.then(respData => {
            if (respData) {
        ((this.editId) ? this.consumptionTypeService.putConsumptionType(postParam) : this.consumptionTypeService.addConsumptionType(postParam))
        .subscribe((resp: any) => {
          if (resp.status == 's') {
            this.alert.showSuccess(resp.userDisplayMesg, 'Success');
            this.router.navigate(['/master/consuption-type/list']);
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

  getVerificationById(id) {
    this.consumptionTypeService.getConsumptionTypeById(id).subscribe((resp: any) => {
      this.consuptionObject = resp.data;
    });
  }
}
