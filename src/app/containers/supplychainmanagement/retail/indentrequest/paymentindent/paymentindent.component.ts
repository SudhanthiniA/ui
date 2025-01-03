import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertService } from '@app/services';
import { IndentRequestService, PaymentIndentService } from '@app/services/retails';
import { CommonPopupComponent } from '@app/_shared/common-popup/common-popup.component';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-paymentindent',
  templateUrl: './paymentindent.component.html',
  styleUrls: ['./paymentindent.component.scss']
})
export class PaymentindentComponent implements OnInit {
  totalamount;
  formSubmitted = false;
  paymentModeList: any;
  label = 'Transaction ID';
  paymentObj = {
    paidAmount: '',
    balAmount: 0,
    paymentMode: '',
    paymentId: '',
    accept: false


  };
  productDetails: any;
  constructor(
    private service: PaymentIndentService,
    private alert: AlertService,
    private router: Router,
    private modalService: NgbModal,
    private indentSer: IndentRequestService) { }

  ngOnInit() {
    this.totalamount = sessionStorage.getItem('totalAmount');
    this.productDetails = JSON.parse(sessionStorage.getItem('productDetails'));
    console.log(this.productDetails);
    this.getPaymentModes();
  }
  getPaymentModes() {
    this.service.getAllPayments().subscribe((resp) => {
      this.paymentModeList = resp.data;
    });
  }
  typeOfPayment(event) {
    console.log(event);
    this.paymentModeList.filter((ele, ind) => {
      if (ele.id == event) {
        console.log(ele);
        this.label = ele.label;
      }
    });

  }
  keyPress(event: any) {
    this.paymentObj.balAmount =  this.totalamount - event.target.value;
  }
  save(form) {
    this.formSubmitted = false;
    if (form.valid === false) {
      this.formSubmitted = true;
    } else {
      const obj = {
        amountPaid: this.paymentObj.paidAmount,
        indentDate: '2021-02-23',
        paymentModeId: 1,
        paymentStatus: 'pending',
        productDetailList: this.productDetails,
        status: sessionStorage.getItem('methodType'),
        totalCost: 0,
        transactionId: 33344456,
        wholesaleId: 1,
        wholesaleName: 'Open Door Liquor Store',
        wholesaleType: 'FL2'
      };
      const modalRef = this.modalService.open(CommonPopupComponent);
      modalRef.result.then(respData => {
        if (respData) {
        this.indentSer.addIndent(obj).subscribe((resp) => {
          if (resp.status == 's') {
            this.alert.showSuccess(resp.userDisplayMesg, 'Success');
            this.router.navigate(['/supplychainmanagement/retail/indentrequest/confirmation']);
            sessionStorage.removeItem('productDetails');
            sessionStorage.removeItem('totalAmount');
            sessionStorage.setItem('indentNo', resp.data.indentNumber);
            sessionStorage.setItem('indentDate', resp.data.indentDate);
            sessionStorage.setItem('billamount', this.totalamount);
            sessionStorage.setItem('id', resp.data.id);
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
}
