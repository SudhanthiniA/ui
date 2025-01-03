import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RetailtransferreportComponent } from './retailtransferreport.component';
import { ViewretailtransferreportComponent } from './viewretailtransferreport/viewretailtransferreport.component';
import { PaymentComponent } from './payment/payment.component';
import { ViewpaymentComponent } from './viewpayment/viewpayment.component';


const routes: Routes = [
  { path: 'list', component: RetailtransferreportComponent },
  { path: 'view', component: ViewretailtransferreportComponent },
  { path: 'payment', component: PaymentComponent },
  { path: 'viewpayment', component: ViewpaymentComponent }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RetailtransferreportRoutingModule { }
