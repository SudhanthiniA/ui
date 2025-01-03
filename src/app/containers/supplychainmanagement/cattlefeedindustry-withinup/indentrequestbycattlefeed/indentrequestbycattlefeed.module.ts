import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@appThemeShared/shared.module';

import { IndentrequestbycattlefeedRoutingModule } from './indentrequestbycattlefeed-routing.module';
import { IndentrequestbycattlefeedComponent } from './indentrequestbycattlefeed.component';
import { AddComponent } from './add/add.component';
import { ViewComponent } from './view/view.component';
import { ApprovalComponent } from './approval/approval.component';


@NgModule({
  declarations: [IndentrequestbycattlefeedComponent, AddComponent, ViewComponent, ApprovalComponent],
  imports: [
    CommonModule,
    SharedModule,
    IndentrequestbycattlefeedRoutingModule
  ]
})
export class IndentrequestbycattlefeedModule { }
