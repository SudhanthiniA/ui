import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@app/theme/shared/shared.module';

import { RedistillationofspiritRoutingModule } from './redistillationofspirit-routing.module';
import { RedistillationofspiritComponent } from './redistillationofspirit.component';
import { AddredistillationofspiritComponent } from './addredistillationofspirit/addredistillationofspirit.component';
import { ViewredistillationofspiritComponent } from './viewredistillationofspirit/viewredistillationofspirit.component';


@NgModule({
  declarations: [RedistillationofspiritComponent, AddredistillationofspiritComponent, ViewredistillationofspiritComponent],
  imports: [
    CommonModule,
    SharedModule,
    RedistillationofspiritRoutingModule
  ]
})
export class RedistillationofspiritModule { }
