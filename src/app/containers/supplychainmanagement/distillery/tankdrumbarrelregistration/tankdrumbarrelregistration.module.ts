import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@appThemeShared/shared.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { TankdrumbarrelregistrationComponent } from './tankdrumbarrelregistration.component';
import { AddComponent } from './add/add.component';
import { ViewComponent } from './view/view.component';

import {TankdrumbarrelregistrationRoutingModule} from './tankdrumbarrelregistration-routing.module';
import { ApprovalComponent } from './approval/approval.component';

@NgModule({
  declarations: [TankdrumbarrelregistrationComponent, AddComponent, ViewComponent, ApprovalComponent],
  imports: [
    CommonModule,
    TankdrumbarrelregistrationRoutingModule,
    SharedModule,
    NgbModule
  ]
})
export class TankdrumbarrelregistrationModule { }
