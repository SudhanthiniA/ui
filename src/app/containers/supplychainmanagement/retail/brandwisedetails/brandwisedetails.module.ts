import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@app/theme/shared/shared.module';

import { BrandwisedetailsRoutingModule } from './brandwisedetails-routing.module';
import { BrandwisedetailsComponent } from './brandwisedetails.component';
import { ViewComponent } from './view/view.component';
import { PaymentComponent } from './payment/payment.component';
import { RetailbrandwiseofficerviewComponent } from './retailbrandwiseofficerview/retailbrandwiseofficerview.component';
import { RetailbrandwiselistComponent } from './retailbrandwiselist/retailbrandwiselist.component';
import { PaymentviewComponent } from './paymentview/paymentview.component';


@NgModule({
  declarations: [BrandwisedetailsComponent, ViewComponent, PaymentComponent, RetailbrandwiseofficerviewComponent, RetailbrandwiselistComponent, PaymentviewComponent],
  imports: [
    CommonModule,
    SharedModule,
    BrandwisedetailsRoutingModule
  ]
})
export class BrandwisedetailsModule { }
