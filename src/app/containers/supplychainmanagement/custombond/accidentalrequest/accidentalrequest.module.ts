import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@appThemeShared/shared.module';

import { AccidentalrequestRoutingModule } from './accidentalrequest-routing.module';
import { AccidentalrequestComponent } from './accidentalrequest.component';
import { AddaccidentalrequestComponent } from './addaccidentalrequest/addaccidentalrequest.component';
import { ViewaccidentalrequestComponent } from './viewaccidentalrequest/viewaccidentalrequest.component';


@NgModule({
  declarations: [AccidentalrequestComponent, AddaccidentalrequestComponent, ViewaccidentalrequestComponent],
  imports: [
    CommonModule,
    SharedModule,
    AccidentalrequestRoutingModule
  ]
})
export class AccidentalrequestModule { }
