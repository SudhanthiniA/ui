import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@appThemeShared/shared.module';

import { BondregistrationRoutingModule } from './bondregistration-routing.module';
import { BondregistrationComponent } from './bondregistration.component';
import { AddbondregistrationComponent } from './addbondregistration/addbondregistration.component';
import { ViewbondregistrationComponent } from './viewbondregistration/viewbondregistration.component';

@NgModule({
  declarations: [BondregistrationComponent, AddbondregistrationComponent,ViewbondregistrationComponent],
  imports: [
    CommonModule,
    BondregistrationRoutingModule,
    SharedModule
  ]
})
export class BondregistrationModule { }
