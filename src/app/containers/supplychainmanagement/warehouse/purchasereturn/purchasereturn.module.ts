import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@appThemeShared/shared.module';

import { PurchasereturnRoutingModule } from './purchasereturn-routing.module';
import { PurchasereturnComponent } from './purchasereturn.component';
import { ViewpurchasereturnComponent } from './viewpurchasereturn/viewpurchasereturn.component';
import { AddpurchasereturnComponent } from './addpurchasereturn/addpurchasereturn.component';


@NgModule({
  declarations: [PurchasereturnComponent, ViewpurchasereturnComponent, AddpurchasereturnComponent],
  imports: [
    CommonModule,
    SharedModule,
    PurchasereturnRoutingModule
  ]
})
export class PurchasereturnModule { }
