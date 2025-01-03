import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@appThemeShared/shared.module';

import { SpiritpurchaseindentRoutingModule } from './spiritpurchaseindent-routing.module';

import { SpiritpurchaseindentComponent } from './spiritpurchaseindent.component';
import { AddspiritpurchaseindentComponent } from './addspiritpurchaseindent/addspiritpurchaseindent.component';
import { ViewspiritpurchaseindentComponent } from './viewspiritpurchaseindent/viewspiritpurchaseindent.component';
import { PaymentscreenComponent } from './paymentscreen/paymentscreen.component';

@NgModule({
  declarations: [
    SpiritpurchaseindentComponent,
    AddspiritpurchaseindentComponent,
    ViewspiritpurchaseindentComponent,
    PaymentscreenComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    SpiritpurchaseindentRoutingModule
  ]
})
export class SpiritpurchaseindentModule { }
