import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { DatePipe } from '@angular/common';
import { AlertService } from '@app/services';
import { ModeOfPaymentService } from '@app/services';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CommonPopupComponent } from '@app/_shared/common-popup/common-popup.component';

@Component({
  selector: 'app-addeditmodeofpay',
  templateUrl: './addeditmodeofpay.component.html',
  styleUrls: ['./addeditmodeofpay.component.scss']
})
export class AddeditmodeofpayComponent implements OnInit {
  addedit: any;
  curDate = new Date();
  name: any;
  paymentObj: any = {
    stages: '',
    code: '',
    isActive: true,
  };
  date: any;
  editId: any;
  formSubmitted = false;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private Paymentservice: ModeOfPaymentService,
    private datePipe: DatePipe,
    private alert: AlertService,
    private modalService: NgbModal
  ) { }

  ngOnInit() {
    this.paymentObj.isActive = true;
    this.route.params.subscribe(params => {
      if (params.id) {
        this.editId = params.id;
        this.setData(this.editId);
      }
    });
    this.addedit = this.router.url.includes('add') == true ? 'Add' : 'Edit';
  }

  setData(id) {
    this.Paymentservice.getPaymentById(id).subscribe((responceData: any) => {
      this.paymentObj = responceData.data;
    });
  }

  removeFirstSpace(e) {
    const x = (e.which) ? e.which : e.keyCode;
    if (e.which === 32 && e.target.selectionStart === 0) {
      return false;
    }
  }

  addmodeofpay(modeofpayForm) {
    this.formSubmitted = false;
    if (modeofpayForm.valid === false) {
      this.formSubmitted = true;
    } else {
      const postParam = {
        code: this.paymentObj.code,
        stages: this.paymentObj.stages,
        isActive: this.paymentObj.isActive
      };
      if (this.editId) {
        postParam['id'] = this.editId;
      }
      const modalRef = this.modalService.open(CommonPopupComponent);
      modalRef.result.then(respData => {
        if (respData) {
          ((this.editId) ? this.Paymentservice.updatePaymentMode(postParam) : this.Paymentservice.addPaymentMode(postParam))
            .subscribe((responceData: any) => {
              if (responceData.status == 's') {
                this.alert.showSuccess(responceData.userDisplayMesg, 'Success');
                this.router.navigate(['/master/modeofpay/list']);
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
