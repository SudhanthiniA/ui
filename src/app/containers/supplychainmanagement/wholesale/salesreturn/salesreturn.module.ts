import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@appThemeShared/shared.module';

import { SalesreturnRoutingModule } from './salesreturn-routing.module';
import { SalesreturnComponent } from './salesreturn.component';

@NgModule({
  declarations: [SalesreturnComponent],
  imports: [
    CommonModule,
    SalesreturnRoutingModule,
    SharedModule
  ]
})
export class SalesreturnModule { }
