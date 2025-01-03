import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@appThemeShared/shared.module';

import { ExpiredproductRoutingModule } from './expiredproduct-routing.module';
import { ExpiredproductComponent } from './expiredproduct.component';
import { ViewexpireComponent } from './viewexpire/viewexpire.component';


@NgModule({
  declarations: [ExpiredproductComponent, ViewexpireComponent],
  imports: [
    CommonModule,
    SharedModule,
    ExpiredproductRoutingModule
  ]
})
export class ExpiredproductModule { }
