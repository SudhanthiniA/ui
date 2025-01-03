import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@appThemeShared/shared.module';

import {ReverselogicRoutingModule} from './reverselogic-routing.module';
import { ReverselogicComponent } from './reverselogic.component';
import { AddComponent } from './add/add.component';
import { ViewComponent } from './view/view.component';
import { ApprovalComponent } from './approval/approval.component';



@NgModule({
  declarations: [ReverselogicComponent, AddComponent, ViewComponent, ApprovalComponent],
  imports: [
    CommonModule,
    SharedModule,
    ReverselogicRoutingModule
  ]
})
export class ReverselogicModule { }
