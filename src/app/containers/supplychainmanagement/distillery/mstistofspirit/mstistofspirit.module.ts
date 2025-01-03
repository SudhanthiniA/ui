import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@appThemeShared/shared.module';

import { MstistofspiritRoutingModule } from './mstistofspirit-routing.module';
import { MstistofspiritComponent } from './mstistofspirit.component';
import { AddmstistofspiritComponent } from './addmstistofspirit/addmstistofspirit.component';
import { ViewmstistofspiritComponent } from './viewmstistofspirit/viewmstistofspirit.component';
import { VerificationmstistofspiritComponent } from './verificationmstistofspirit/verificationmstistofspirit.component';
import { PaymentscreenComponent } from './paymentscreen/paymentscreen.component';
import { MstistofspiritviewComponent } from './mstistofspiritview/mstistofspiritview.component';
import { ApproveComponent } from './approve/approve.component';
// import { IstComponent } from './ist/ist.component';

@NgModule({
  declarations: [
    MstistofspiritComponent,
    AddmstistofspiritComponent,
    ViewmstistofspiritComponent,
    VerificationmstistofspiritComponent,
    PaymentscreenComponent,
    MstistofspiritviewComponent,
    // IstComponent,
    ApproveComponent],

  imports: [
    CommonModule,
    SharedModule,
    MstistofspiritRoutingModule
  ]
})
export class MstistofspiritModule { }
