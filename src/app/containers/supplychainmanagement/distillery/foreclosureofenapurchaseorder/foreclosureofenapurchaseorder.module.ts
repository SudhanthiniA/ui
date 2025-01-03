import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@appThemeShared/shared.module';

import { ForeclosureofenapurchaseorderComponent } from './foreclosureofenapurchaseorder.component';
import { ViewComponent } from './view/view.component';
import { ForeclosureofenapurchaseorderRoutingModule } from './foreclosureofenapurchaseorder-routing.module';



@NgModule({
  declarations: [ForeclosureofenapurchaseorderComponent, ViewComponent],
  imports: [
    CommonModule,
    SharedModule,
    ForeclosureofenapurchaseorderRoutingModule
  ]
})
export class ForeclosureofenapurchaseorderModule { }
