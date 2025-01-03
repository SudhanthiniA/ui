import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@appThemeShared/shared.module';
import { DispatchedComponent } from './dispatched.component';
import { AdddispatchedComponent } from './adddispatched/adddispatched.component';
import { ViewdispatchedComponent } from './viewdispatched/viewdispatched.component';
import { DispatchedRoutingModule } from './dispatched-routing.module';
import { PaymentmappedComponent } from './paymentmapped/paymentmapped.component';

@NgModule({
  declarations: [PaymentmappedComponent,DispatchedComponent, AdddispatchedComponent, ViewdispatchedComponent],
  imports: [
    CommonModule,
    SharedModule,
    DispatchedRoutingModule
  ]
})
export class DispatchedModule { }
