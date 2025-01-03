import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@appThemeShared/shared.module';

import { ReturnworklistRoutingModule } from './returnworklist-routing.module';
import { ReturnworklistComponent } from './returnworklist.component';
import { AddreturnworklistComponent } from './addreturnworklist/addreturnworklist.component';
import { ViewreturnworklistComponent } from './viewreturnworklist/viewreturnworklist.component';


@NgModule({
  declarations: [ReturnworklistComponent, AddreturnworklistComponent, ViewreturnworklistComponent],
  imports: [
    CommonModule,
    SharedModule,
    ReturnworklistRoutingModule
  ]
})
export class ReturnworklistModule { }
