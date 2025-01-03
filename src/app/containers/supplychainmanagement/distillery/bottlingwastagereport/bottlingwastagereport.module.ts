import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@appThemeShared/shared.module';

import { BottlingwastagereportRoutingModule } from './bottlingwastagereport-routing.module';
import { BottlingwastagereportComponent } from './bottlingwastagereport.component';
import { AddbottlingwastagereportComponent } from './addbottlingwastagereport/addbottlingwastagereport.component';
import { ViewbottlingwastagereportComponent } from './viewbottlingwastagereport/viewbottlingwastagereport.component';
import { PaymentmappedComponent } from './paymentmapped/paymentmapped.component';



@NgModule({
  declarations: [BottlingwastagereportComponent, AddbottlingwastagereportComponent, ViewbottlingwastagereportComponent, PaymentmappedComponent],
  imports: [
    CommonModule,
    SharedModule,
    BottlingwastagereportRoutingModule
  ]
})
export class BottlingwastagereportModule { }
