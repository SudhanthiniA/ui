import { SharedModule } from '@appThemeShared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddeditvehiclemodelComponent } from './addeditvehiclemodel/addeditvehiclemodel.component';
import { VehiclemodelRoutingModule } from './vehiclemodel-routing.module';
import { ViewvehiclemodelComponent } from './viewvehiclemodel/viewvehiclemodel.component';
import { VehiclemodelComponent } from './vehiclemodel.component';
import { DataTablesModule } from 'angular-datatables';

@NgModule({
  declarations: [
    VehiclemodelComponent,
    AddeditvehiclemodelComponent,
    ViewvehiclemodelComponent
  ],
  imports: [
    CommonModule,
    VehiclemodelRoutingModule,
    SharedModule,
    DataTablesModule
  ]
})
export class VehiclemodelModule { }
