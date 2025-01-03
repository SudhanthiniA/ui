import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@appThemeShared/shared.module';

import { PurchasereturnRoutingModule } from './purchasereturn-routing.module';
import { PurchasereturnComponent } from './purchasereturn.component';
import { ViewpurchasereturnComponent } from './viewpurchasereturn/viewpurchasereturn.component';


@NgModule({
  declarations: [PurchasereturnComponent, ViewpurchasereturnComponent],
  imports: [
    CommonModule,
    SharedModule,
    PurchasereturnRoutingModule
  ]
})
export class PurchasereturnModule { }
