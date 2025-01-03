import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@appThemeShared/shared.module';

import { ZerostockRoutingModule } from './zerostock-routing.module';
import { ZerostockComponent } from './zerostock.component';


@NgModule({
  declarations: [ZerostockComponent],
  imports: [
    CommonModule,
    SharedModule,
    ZerostockRoutingModule
  ]
})
export class ZerostockModule { }
