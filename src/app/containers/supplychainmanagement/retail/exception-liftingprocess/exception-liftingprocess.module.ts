import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@app/theme/shared/shared.module';
import { ExceptionLiftingprocessRoutingModule } from './exception-liftingprocess-routing.module';
import { ExceptionliftingprocessComponent } from './exceptionliftingprocess/exceptionliftingprocess.component';
import { ViewComponent } from './view/view.component';
import { PaymentComponent } from './payment/payment.component';
import { RetailbrandwiselistComponent } from './retailbrandwiselist/retailbrandwiselist.component';
import { PaymentviewComponent } from './paymentview/paymentview.component';
import { RetailbrandwiseofficerviewComponent } from './retailbrandwiseofficerview/retailbrandwiseofficerview.component';


@NgModule({
  declarations: [ExceptionliftingprocessComponent, ViewComponent, PaymentComponent, RetailbrandwiseofficerviewComponent,
     RetailbrandwiselistComponent, PaymentviewComponent],
  imports: [
    CommonModule,
    SharedModule,
    ExceptionLiftingprocessRoutingModule
  ]
})
export class ExceptionLiftingprocessModule { }
