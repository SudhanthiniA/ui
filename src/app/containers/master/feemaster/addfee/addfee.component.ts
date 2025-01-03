import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertService, FeeMasterService, PatternService } from '@app/services';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CommonPopupComponent } from '../../../../_shared/common-popup/common-popup.component'

@Component({
  selector: 'app-addfee',
  templateUrl: './addfee.component.html',
  styleUrls: ['./addfee.component.scss']
})
export class AddfeeComponent implements OnInit {
  addedit: any;
  quantityarray = [{ name: 'Yearly' }, { name: 'Half Yearly' }, { name: 'Monthly' }, { name: 'Quaterly' }, { name: 'Daily' }];
  categoryObj: any = {
    name: '',
    code: '',
    frequency: '',
    amount: '',
    status: true,
    isActive: true
  };
  formSubmitted = false;
  curDate: any = new Date();
  editId: any;

  constructor(private route: ActivatedRoute,
    private modalService: NgbModal,
    private router: Router,
    private feeService: FeeMasterService,
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

  setData(id) {
    this.feeService.getFeeById(id).subscribe((responceData: any) => {
      this.categoryObj = responceData.data;
      console.log(responceData);
    });
  }

  addfee(categoryForm) {
    this.formSubmitted = true;
    const postParam = {
      code: this.categoryObj.code,
      name: this.categoryObj.name,
      frequency: this.categoryObj.frequency,
      amount: this.categoryObj.amount,
      isActive: this.categoryObj.isActive,
      id: this.editId,
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
          ((this.editId) ? this.feeService.putFee(postParam) : this.feeService.addFee(postParam))
            .subscribe((responceData: any) => {
              if (responceData.status === 's') {
                this.alert.showSuccess(responceData.userDisplayMesg, 'success');
                this.router.navigate(['/master/feemaster/list']);
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