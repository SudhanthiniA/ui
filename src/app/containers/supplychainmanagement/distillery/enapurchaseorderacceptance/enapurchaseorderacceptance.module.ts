import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EnapurchaseorderacceptanceComponent } from './enapurchaseorderacceptance.component';
import { ViewComponent } from './view/view.component';
import { SharedModule } from '@app/theme/shared/shared.module';
import { EnapurchaseorderacceptanceRoutingModule } from './enapurchaseorderacceptance-routing.module';



@NgModule({
  declarations: [EnapurchaseorderacceptanceComponent, ViewComponent],
  imports: [
    CommonModule,
SharedModule,
EnapurchaseorderacceptanceRoutingModule
  ]
})
export class EnapurchaseorderacceptanceModule { }
