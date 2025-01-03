import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@app/theme/shared/shared.module';

import { SalesreturnRoutingModule } from './salesreturn-routing.module';
import { SalesreturnComponent } from './salesreturn.component';

@NgModule({
  declarations: [SalesreturnComponent],
  imports: [
    CommonModule,
    SharedModule,
    SalesreturnRoutingModule
  ]
})
export class SalesreturnModule { }
