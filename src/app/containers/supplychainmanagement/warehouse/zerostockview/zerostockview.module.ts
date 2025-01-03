import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@appThemeShared/shared.module';

import { ZerostockviewRoutingModule } from './zerostockview-routing.module';
import { ZerostockviewComponent } from './zerostockview.component';


@NgModule({
  declarations: [ZerostockviewComponent],
  imports: [
    CommonModule,
    SharedModule,
    ZerostockviewRoutingModule
  ]
})
export class ZerostockviewModule { }
