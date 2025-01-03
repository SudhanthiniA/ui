import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@appThemeShared/shared.module';

import {AecapprovalviewonlyRoutingModule} from './aecapprovalviewonly-routing.module';
import { AecapprovalviewonlyComponent } from './aecapprovalviewonly.component';
import { ViewComponent } from './view/view.component';



@NgModule({
  declarations: [AecapprovalviewonlyComponent, ViewComponent],
  imports: [
    CommonModule,
    SharedModule,
    AecapprovalviewonlyRoutingModule
  ]
})
export class AecapprovalviewonlyModule { }
