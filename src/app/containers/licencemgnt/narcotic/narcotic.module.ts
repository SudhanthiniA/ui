import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@appThemeShared/shared.module';

import { NarcoticRoutingModule } from './narcotic-routing.module';
import { NarcoticComponent } from './narcotic.component';

@NgModule({
  declarations: [NarcoticComponent],
  imports: [
    CommonModule,
    SharedModule,
    NarcoticRoutingModule
  ]
})
export class NarcoticModule { }
