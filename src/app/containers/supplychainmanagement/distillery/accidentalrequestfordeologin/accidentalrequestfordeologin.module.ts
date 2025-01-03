import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@appThemeShared/shared.module';


import { AccidentalrequestfordeologinComponent } from './accidentalrequestfordeologin.component';
import { AddComponent } from './add/add.component';
import { ViewComponent } from './view/view.component';
import {AccidentalrequestfordeologinRoutingModule} from './accidentalrequestfordeologin-routing.module';



@NgModule({
  declarations: [AccidentalrequestfordeologinComponent, AddComponent, ViewComponent],
  imports: [
    CommonModule,
    SharedModule,
    AccidentalrequestfordeologinRoutingModule
  ]
})
export class AccidentalrequestfordeologinModule { }
