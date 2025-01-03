import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@app/theme/shared/shared.module';
import { Pd25TransportpassIdRoutingModule } from './pd25-transportpass-id-routing.module';

import { AddComponent } from './add/add.component';
import { ViewComponent } from './view/view.component';
import { Pd25TransportpassIdComponent } from './pd25-transportpass-id.component';



@NgModule({
  declarations: [AddComponent, ViewComponent, Pd25TransportpassIdComponent],
  imports: [
    CommonModule,
    SharedModule,
    Pd25TransportpassIdRoutingModule
  ]
})
export class Pd25TransportpassIdModule { }
