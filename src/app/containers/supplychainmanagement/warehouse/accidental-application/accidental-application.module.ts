import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@appThemeShared/shared.module';

import { AccidentalApplicationRoutingModule } from './accidental-application-routing.module';
import { AccidentalApplicationComponent } from './accidental-application.component';
import { AddaccidentalApplicationComponent } from './addaccidental-application/addaccidental-application.component';
import { ViewaccidentalApplicationComponent } from './viewaccidental-application/viewaccidental-application.component';
import { AcknowledgementComponent } from './acknowledgement/acknowledgement.component';

@NgModule({
  declarations: [
    AccidentalApplicationComponent,
    AddaccidentalApplicationComponent,
    ViewaccidentalApplicationComponent,
    AcknowledgementComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    AccidentalApplicationRoutingModule
  ]
})
export class AccidentalApplicationModule { }
