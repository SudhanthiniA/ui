import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@appThemeShared/shared.module';

import { MasterwarehouseRoutingModule } from './masterwarehouse-routing.module';
import { MasterwarehouseComponent } from './masterwarehouse.component';
import { ViewmasterwarehouseComponent } from './viewmasterwarehouse/viewmasterwarehouse.component';
// import { ViewLicenserenewalComponent } from './viewlicenserenewal/viewlicenserenewal.component';
// import { PaymentacknowledgementComponent } from './paymentacknowledgement/paymentacknowledgement.component';

@NgModule({
  declarations: [MasterwarehouseComponent, ViewmasterwarehouseComponent],
  imports: [
    CommonModule,
    SharedModule,
    MasterwarehouseRoutingModule
  ]
})
export class MasterwarehouseModule { }
