import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@appThemeShared/shared.module';

import { DistilleryloginComponent } from './distillerylogin.component';
import { ViewComponent } from './view/view.component';
import {DistilleryloginRoutingModule} from './distillerylogin-routing.module';



@NgModule({
  declarations: [DistilleryloginComponent, ViewComponent],
  imports: [
    CommonModule,
    SharedModule,
    DistilleryloginRoutingModule
  ]
})
export class DistilleryloginModule { }
