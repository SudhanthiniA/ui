import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddComponent } from './add/add.component';
import { ViewComponent } from './view/view.component';

import { SharedModule } from '@appThemeShared/shared.module';

import { GatepasscancellationRoutingModule } from './gatepasscancellation-routing.module';
import { GatepasscancellationComponent } from './gatepasscancellation.component';

@NgModule({
  declarations: [AddComponent, ViewComponent, GatepasscancellationComponent],
  imports: [
    CommonModule,
    GatepasscancellationRoutingModule,
    SharedModule
  ]
})
export class GatepasscancellationModule { }
