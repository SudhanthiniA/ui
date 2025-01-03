import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@appThemeShared/shared.module';

import { TransportpassRoutingModule } from './transportpass-routing.module';
import { TransportpassComponent } from './transportpass.component';
import { ParentunitComponent } from './parentunit/parentunit.component';
import { BwhtrasnportpassComponent } from './bwhtrasnportpass/bwhtrasnportpass.component';
import { ViewrequisitionoftransportpassComponent } from './bwhtrasnportpass/viewrequisitionoftransportpass/viewrequisitionoftransportpass.component';
import { BwhtransportpassackComponent } from './bwhtransportpassack/bwhtransportpassack.component';

@NgModule({
  declarations: [TransportpassComponent, ParentunitComponent, BwhtrasnportpassComponent,ViewrequisitionoftransportpassComponent, BwhtransportpassackComponent],
  imports: [
    CommonModule,
    TransportpassRoutingModule,
    SharedModule
  ]
})
export class TransportpasstModule { }
