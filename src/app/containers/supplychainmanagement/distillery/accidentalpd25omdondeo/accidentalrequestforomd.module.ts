import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@appThemeShared/shared.module';

import { AccidentalrequestforomdComponent } from './accidentalrequestforomd.component';
import { AddComponent } from './add/add.component';
import { ViewComponent } from './view/view.component';
import {AccidentalrequestforomdRoutingModule} from './accidentalrequestforomd-routing.module';



@NgModule({
  declarations: [AccidentalrequestforomdComponent, AddComponent, ViewComponent],
  imports: [
    CommonModule,
    SharedModule,
    AccidentalrequestforomdRoutingModule
  ]
})
export class AccidentalrequestforomdModule { }
