import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@appThemeShared/shared.module';

import { RetailtransferconfigurationmgrRoutingModule } from './retailtransferconfigurationmgr-routing.module';
import { RetailtransferconfigurationmgrComponent } from './retailtransferconfigurationmgr.component';
import { AddComponent } from './add/add.component';
import { ViewComponent } from './view/view.component';


@NgModule({
  declarations: [RetailtransferconfigurationmgrComponent, AddComponent, ViewComponent],
  imports: [
    CommonModule,
    SharedModule,
    RetailtransferconfigurationmgrRoutingModule
  ]
})
export class RetailtransferconfigurationmgrModule { }
