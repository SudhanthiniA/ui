import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GstmasterRoutingModule } from './gstmaster-routing.module';
import { GstmasterComponent } from './gstmaster.component';
import { AddgstmasterComponent } from './addgstmaster/addgstmaster.component';
import { ViewgstmasterComponent } from './viewgstmaster/viewgstmaster.component';
import { SharedModule } from '@appThemeShared/shared.module';

@NgModule({
  declarations: [
    GstmasterComponent,
    AddgstmasterComponent,
    ViewgstmasterComponent
  ],
  imports: [
    CommonModule,
    GstmasterRoutingModule,
    SharedModule,
  ]
})
export class GstmasterModule { }
