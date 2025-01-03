import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@appThemeShared/shared.module';
import { BottlingproductionplanComponent } from './bottlingproductionplan.component';
import { AddComponent } from './add/add.component';
import { ViewComponent } from './view/view.component';
import {BottlingproductionplanRoutingModule} from './bottlingproductionplan-routing.module';
import { PaymentComponent } from './payment/payment.component';



@NgModule({
  declarations: [BottlingproductionplanComponent, AddComponent, ViewComponent, PaymentComponent],
  imports: [
    CommonModule,
    SharedModule,
    BottlingproductionplanRoutingModule
  ]
})
export class BottlingproductionplanModule { }
