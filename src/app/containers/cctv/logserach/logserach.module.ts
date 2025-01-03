import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '@appThemeShared/shared.module';
import { LogserachRoutingModule } from './logserach-routing.module';
import { LogserachComponent } from './logserach.component';

@NgModule({
  declarations: [LogserachComponent],
  imports: [
    CommonModule,
    SharedModule,
    LogserachRoutingModule
  ]
})
export class LogserachModule { }
