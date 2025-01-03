import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@appThemeShared/shared.module';

import {DaybookRoutingModule} from './daybook-routing.module';
import { DaybookComponent } from './daybook.component';



@NgModule({
  declarations: [DaybookComponent],
  imports: [
    CommonModule,
    DaybookRoutingModule,
    SharedModule
  ]
})
export class DaybookModule { }
