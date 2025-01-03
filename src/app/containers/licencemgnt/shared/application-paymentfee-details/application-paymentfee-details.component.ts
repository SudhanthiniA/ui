import { Component, Input } from '@angular/core';

interface AppliPaymentDetail {
  paymentProcessingFee: string;
  status: string;
}

@Component({
  selector: 'app-application-paymentfee-details',
  templateUrl: './application-paymentfee-details.component.html',
  styleUrls: ['./application-paymentfee-details.component.scss']
})
export class ApplicationPaymentfeeDetailsComponent {

  @Input()
  public appliPaymentDetail: AppliPaymentDetail;

}
