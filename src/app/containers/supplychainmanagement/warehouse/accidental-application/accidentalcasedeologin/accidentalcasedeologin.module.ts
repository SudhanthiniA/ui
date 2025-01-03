import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@appThemeShared/shared.module';


import { AccidentalcasedeologinRoutingModule } from './accidentalcasedeologin-routing.module';
import { AccidentalcasedeologinComponent } from './accidentalcasedeologin.component';
import { AddaccidentalcasedeologinComponent } from './addaccidentalcasedeologin/addaccidentalcasedeologin.component';
import { ViewaccidentalcasedeologinComponent } from './viewaccidentalcasedeologin/viewaccidentalcasedeologin.component';
import { PreviewaccidentalcasedeologinComponent } from './previewaccidentalcasedeologin/previewaccidentalcasedeologin.component';


@NgModule({
  declarations: [ AccidentalcasedeologinComponent, AddaccidentalcasedeologinComponent, ViewaccidentalcasedeologinComponent, PreviewaccidentalcasedeologinComponent],
  imports: [
    CommonModule,
    SharedModule,
    AccidentalcasedeologinRoutingModule
  ]
})
export class AccidentalcasedeologinModule { }
