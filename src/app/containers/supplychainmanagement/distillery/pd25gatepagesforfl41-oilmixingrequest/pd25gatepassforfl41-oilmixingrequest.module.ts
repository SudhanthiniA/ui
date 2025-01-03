import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Pd25gatepassforfl41OilmixingrequestRoutingModule } from './pd25gatepassforfl41-oilmixingrequest-routing.module';
import { ViewComponent } from './view/view.component';
import { SharedModule } from '@app/theme/shared/shared.module';
import { ApprovalComponent } from './approval/approval.component';
import { Pd25gatepagesforfl41OilmixingrequestComponent } from './pd25gatepagesforfl41-oilmixingrequest.component';

@NgModule({
  declarations: [Pd25gatepagesforfl41OilmixingrequestComponent, ViewComponent, ApprovalComponent],
  imports: [
    CommonModule,
    SharedModule,
    Pd25gatepassforfl41OilmixingrequestRoutingModule
  ]
})
export class Pd25gatepassforfl41OilmixingrequestModule { }
