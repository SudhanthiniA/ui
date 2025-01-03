import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@appThemeShared/shared.module';


import { DispatchexportpermitRoutingModule } from './dispatchexportpermit-routing.module';
import { DispatchexportpermitComponent } from './dispatchexportpermit.component';
import { EditComponent } from './edit/edit.component';
import { ViewComponent } from './view/view.component';
import { PaymentComponent } from './payment/payment.component';

@NgModule({
  declarations: [DispatchexportpermitComponent, EditComponent, ViewComponent, PaymentComponent],
  imports: [
    CommonModule,
    SharedModule,
    DispatchexportpermitRoutingModule
  ]
})
export class DispatchexportpermitModule { }
