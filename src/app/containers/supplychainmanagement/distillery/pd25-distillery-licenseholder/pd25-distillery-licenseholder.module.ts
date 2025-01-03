import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ViewComponent } from './view/view.component';
import { ApprovalComponent } from './approval/approval.component';
import { Pd25DdistilleryLicenseholderRoutingModule } from './pd25-ddistillery-licenseholder-routing.module';
import { SharedModule } from '@app/theme/shared/shared.module';


@NgModule({
  declarations: [ViewComponent, ApprovalComponent],
  imports: [
    CommonModule,
    SharedModule,
    Pd25DdistilleryLicenseholderRoutingModule
  ]
})

export class Pd25DistilleryLicenseholderModule { }
