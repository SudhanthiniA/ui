import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@app/theme/shared/shared.module';
import { Pamr3RoutingModule } from './pamr3-routing.module';
import { RequestComponent } from './request/request.component';
import { AecviewComponent } from './aecview/aecview.component';
import { ApprovalComponent } from './approval/approval.component';
import { GenerateComponent } from './generate/generate.component';


@NgModule({
  declarations: [   RequestComponent,
    AecviewComponent,
    ApprovalComponent,
    GenerateComponent,],
  imports: [
    CommonModule,
    SharedModule,
    Pamr3RoutingModule
  ]
})
export class Pamr3Module { }
