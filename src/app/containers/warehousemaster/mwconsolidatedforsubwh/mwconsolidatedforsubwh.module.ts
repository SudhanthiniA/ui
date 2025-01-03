import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@appThemeShared/shared.module';
import { MwconsolidatedforsubwhRoutingModule } from './mwconsolidatedforsubwh-routing.module';
import { MwconsolidatedforsubwhComponent } from './mwconsolidatedforsubwh.component';
import { ViewmwconsolidatedforsubwhComponent } from './viewmwconsolidatedforsubwh/viewmwconsolidatedforsubwh.component';

@NgModule({
  declarations: [MwconsolidatedforsubwhComponent,ViewmwconsolidatedforsubwhComponent],
  imports: [
    CommonModule,
    SharedModule,
    MwconsolidatedforsubwhRoutingModule
  ]
})
export class MwconsolidatedforsubwhModule { }
