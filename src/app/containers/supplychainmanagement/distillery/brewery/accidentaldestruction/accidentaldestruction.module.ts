import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@appThemeShared/shared.module';

import {AccidentaldestructionRoutingModule} from './accidentaldestruction-routing.module';
import { AddComponent } from './add/add.component';
import { ViewComponent } from './view/view.component';



@NgModule({
  declarations: [AddComponent, ViewComponent],
  imports: [
    CommonModule,
    SharedModule,
    AccidentaldestructionRoutingModule
  ]
})
export class AccidentaldestructionModule { }
