import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@appThemeShared/shared.module';

import { HelpdeskusermgmtRoutingModule } from './helpdeskusermgmt-routing.module';
import { HelpdeskusermgmtComponent } from './helpdeskusermgmt.component';
import { AddComponent } from './add/add.component';
import { ViewComponent } from './view/view.component';

@NgModule({
  declarations: [HelpdeskusermgmtComponent, AddComponent, ViewComponent],
  imports: [
    CommonModule,
    SharedModule,
    HelpdeskusermgmtRoutingModule
  ]
})
export class HelpdeskusermgmtModule { }
