import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@appThemeShared/shared.module';

import { AccidentalrequestforspiritComponent } from './accidentalrequestforspirit.component';
import { AddComponent } from './add/add.component';
import { ViewComponent } from './view/view.component';
import {AccidentalrequestforspiritRoutingModule} from './accidentalrequestforspirit-routing.module';



@NgModule({
  declarations: [AccidentalrequestforspiritComponent, AddComponent, ViewComponent],
  imports: [
    CommonModule,
    SharedModule,
    AccidentalrequestforspiritRoutingModule
  ]
})
export class AccidentalrequestforspiritModule { }
