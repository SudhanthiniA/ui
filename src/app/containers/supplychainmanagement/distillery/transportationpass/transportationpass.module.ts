import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@app/theme/shared/shared.module';

import { TransportationpassRoutingModule } from './transportationpass-routing.module';
import { TransportationpassComponent } from './transportationpass.component';
import { AddtransportationpassComponent } from './addtransportationpass/addtransportationpass.component';
import { ViewtransportationpassComponent } from './viewtransportationpass/viewtransportationpass.component';
import { CantransportationpassComponent } from './cantransportationpass/cantransportationpass.component';

@NgModule({
  declarations: [TransportationpassComponent, AddtransportationpassComponent, ViewtransportationpassComponent, CantransportationpassComponent],
  imports: [
    CommonModule,
    SharedModule,
    TransportationpassRoutingModule
  ]
})
export class TransportationpassModule { }
