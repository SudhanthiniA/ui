import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@appThemeShared/shared.module';

import { ImportpermitcancellationRoutingModule } from './importpermitcancellation-routing.module';
import { ImportpermitcancellationComponent } from './importpermitcancellation.component';
import { ViewComponent } from './view/view.component';
import { PaymentComponent } from './payment/payment.component';


@NgModule({
  declarations: [ImportpermitcancellationComponent, ViewComponent, PaymentComponent],
  imports: [
    CommonModule,
    ImportpermitcancellationRoutingModule,
    SharedModule
  ]
})
export class ImportpermitcancellationModule { }
