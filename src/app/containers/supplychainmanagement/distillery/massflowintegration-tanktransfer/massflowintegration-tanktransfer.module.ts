import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListComponent } from './list/list.component';
import { AddComponent } from './add/add.component';
import { ViewComponent } from './view/view.component';
import { SharedModule } from '@appThemeShared/shared.module';

import { MassflowintegrationTanktransferRoutingModule } from './massflowintegration-tanktransfer-routing.module';


@NgModule({
  declarations: [AddComponent, ViewComponent, ListComponent],
  imports: [
    CommonModule,
    SharedModule,
    MassflowintegrationTanktransferRoutingModule
  ]
})


export class MassflowintegrationTanktransferModule { }
