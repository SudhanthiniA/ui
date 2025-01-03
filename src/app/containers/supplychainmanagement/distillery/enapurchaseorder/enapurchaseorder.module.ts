import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@appThemeShared/shared.module';

import { EnapurchaseorderRoutingModule } from './enapurchaseorder-routing.module';
import { EnapurchaseorderComponent } from './enapurchaseorder.component';
import { AddComponent } from './add/add.component';
import { ViewComponent } from './view/view.component';



@NgModule({
  declarations: [EnapurchaseorderComponent, AddComponent, ViewComponent],
  imports: [
    CommonModule,
    EnapurchaseorderRoutingModule,
    SharedModule
  ]
})
export class EnapurchaseorderModule { }
