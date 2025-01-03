import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '@appThemeShared/shared.module';
import { TransportpassSecondinputComponent } from './transportpass-secondinput.component';
import { AddComponent } from './add/add.component';
import { ViewComponent } from './view/view.component';
import {TransportpassSecondinputRoutingModule} from './transportpass-secondinput-routing.module';



@NgModule({
  declarations: [TransportpassSecondinputComponent, AddComponent, ViewComponent],
  imports: [
    CommonModule,
    SharedModule,
    TransportpassSecondinputRoutingModule
  ]
})
export class TransportpassSecondinputModule { }
