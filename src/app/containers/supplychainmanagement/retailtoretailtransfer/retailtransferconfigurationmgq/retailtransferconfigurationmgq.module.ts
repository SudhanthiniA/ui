import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@appThemeShared/shared.module';

import { RetailtransferconfigurationmgqRoutingModule } from './retailtransferconfigurationmgq-routing.module';
import { RetailtransferconfigurationmgqComponent } from './retailtransferconfigurationmgq.component';
import { AddComponent } from './add/add.component';
import { ViewComponent } from './view/view.component';


@NgModule({
  declarations: [RetailtransferconfigurationmgqComponent, AddComponent, ViewComponent],
  imports: [
    CommonModule,
    SharedModule,
    RetailtransferconfigurationmgqRoutingModule
  ]
})
export class RetailtransferconfigurationmgqModule { }
