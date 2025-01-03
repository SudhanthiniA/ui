import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SharedModule } from '@appThemeShared/shared.module';

import { TransportpasscancelRoutingModule } from './transportpasscancel-routing.module';
import { TransportpasscancelComponent } from './transportpasscancel.component';
import { AddtransportComponent } from './addtransport/addtransport.component';
import { ViewtransportComponent } from './viewtransport/viewtransport.component';


@NgModule({
  declarations: [TransportpasscancelComponent, AddtransportComponent, ViewtransportComponent],
  imports: [
    CommonModule,
    NgbModule,
    SharedModule,
    TransportpasscancelRoutingModule
  ]
})
export class TransportpasscancelModule { }
