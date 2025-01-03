import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@appThemeShared/shared.module';

import { CodetypeRoutingModule } from './codetype-routing.module';
import { CodetypeComponent } from './codetype.component';
import { AddcodetypeComponent } from './addcodetype/addcodetype.component';
import { ViewcodetypeComponent } from './viewcodetype/viewcodetype.component';

@NgModule({
  declarations: [CodetypeComponent, AddcodetypeComponent, ViewcodetypeComponent],
  imports: [
    CommonModule,
    SharedModule,
    CodetypeRoutingModule
  ]
})
export class CodetypeModule { }
