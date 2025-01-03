import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@appThemeShared/shared.module';

import { BwhtransportpassRoutingModule } from './bwhtransportpass-routing.module';
import { BwhtrasnportpassComponent } from './bwhtrasnportpass.component';
import { ViewrequisitionoftransportpassComponent } from './viewrequisitionoftransportpass/viewrequisitionoftransportpass.component';

@NgModule({
  declarations: [BwhtrasnportpassComponent, ViewrequisitionoftransportpassComponent],
  imports: [
    CommonModule,
    BwhtransportpassRoutingModule,
    SharedModule
  ]
})
export class BwhtransportpasstModule { }
