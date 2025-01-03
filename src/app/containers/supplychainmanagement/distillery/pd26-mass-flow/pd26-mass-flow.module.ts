import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@app/theme/shared/shared.module';

import {Pd26MassFlowRoutingModule} from './pd26-mass-flow-routing.module';
import { Pd26MassFlowComponent } from './pd26-mass-flow.component';
import { AddComponent } from './add/add.component';
import { ViewComponent } from './view/view.component';
import { AcknowledgementComponent } from './acknowledgement/acknowledgement.component';



@NgModule({
  declarations: [Pd26MassFlowComponent, AddComponent, ViewComponent, AcknowledgementComponent],
  imports: [
    CommonModule,
    SharedModule,
    Pd26MassFlowRoutingModule
  ]
})
export class Pd26MassFlowModule { }
