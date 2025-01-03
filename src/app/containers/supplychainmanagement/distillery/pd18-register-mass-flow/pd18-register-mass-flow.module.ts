import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@app/theme/shared/shared.module';

import {Pd18RegisterMassFlowRoutingModule} from './pd18-register-mass-flow-routing.module';
import { Pd18RegisterMassFlowComponent } from './pd18-register-mass-flow.component';
import { AddComponent } from './add/add.component';
import { ViewComponent } from './view/view.component';

@NgModule({
  declarations: [Pd18RegisterMassFlowComponent, AddComponent, ViewComponent],
  imports: [
    CommonModule,
    SharedModule,
    Pd18RegisterMassFlowRoutingModule
  ]
})
export class Pd18RegisterMassFlowModule { }
