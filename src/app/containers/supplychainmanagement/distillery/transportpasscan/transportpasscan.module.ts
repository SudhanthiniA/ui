

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@app/theme/shared/shared.module';

import { TransportpasscanRoutingModule } from './transportpasscan-routing.module';
import { TransportpasscanComponent } from './transportpasscan.component';
import { ViewtransportpassapprovalComponent } from './viewtransportpassapproval/viewtransportpassapproval.component';


import { AddtransportpasscanComponent } from './addtransportpasscan/addtransportpasscan.component';
import { ViewtransportpasscanComponent } from './viewtransportpasscan/viewtransportpasscan.component';


@NgModule({
  declarations: [TransportpasscanComponent,ViewtransportpassapprovalComponent, AddtransportpasscanComponent, ViewtransportpasscanComponent],
  imports: [
    CommonModule,
    SharedModule,
    TransportpasscanRoutingModule
  ]
})
export class TransportpasscanModule { }
