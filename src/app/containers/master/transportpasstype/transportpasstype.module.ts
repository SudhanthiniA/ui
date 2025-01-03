import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TransportpasstypeComponent } from './transportpasstype.component';
import { AddtransportpasstypeComponent } from './addtransportpasstype/addtransportpasstype.component';
import { ViewtransportpasstypeComponent } from './viewtransportpasstype/viewtransportpasstype.component';
import { TransportpasstypeRoutingModule } from './transportpasstype-routing.module';
import { SharedModule } from '@appThemeShared/shared.module';
import { DataTablesModule } from 'angular-datatables';


@NgModule({
  declarations: [TransportpasstypeComponent, AddtransportpasstypeComponent, ViewtransportpasstypeComponent],
  imports: [
    CommonModule,
    SharedModule,
    DataTablesModule,
    TransportpasstypeRoutingModule
  ]
})
export class TransportpasstypeModule { }
