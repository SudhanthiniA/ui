import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ViewComponent } from './view/view.component';
import { ApprovalComponent } from './approval/approval.component';
import { Pd25gatepassforexportspritrequestRoutingModule } from './pd25gatepassforexportspritrequest-routing.module';
import { SharedModule } from '@app/theme/shared/shared.module';


@NgModule({
  declarations: [ViewComponent, ApprovalComponent],
  imports: [
    CommonModule,
    SharedModule,
    Pd25gatepassforexportspritrequestRoutingModule
  ]
})
export class Pd25gatepassforexportspritrequestModule { }
