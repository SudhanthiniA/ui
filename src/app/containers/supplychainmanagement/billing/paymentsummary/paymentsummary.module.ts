import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@appThemeShared/shared.module';

import { PaymentsummaryComponent } from './paymentsummary.component';
import { ViewComponent } from './view/view.component';
import {PaymentsummaryRoutingModule} from './paymentsummary-routing.module';



@NgModule({
  declarations: [PaymentsummaryComponent, ViewComponent],
  imports: [
    CommonModule,
    SharedModule,
    PaymentsummaryRoutingModule
  ]
})
export class PaymentsummaryModule { }
