
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VehiclemakeRoutingModule } from './vehiclemake-routing.module';
import { VehiclemakeComponent } from './vehiclemake.component';
import { ViewvehicleComponent } from './viewvehicle/viewvehicle.component';
import { AddeditvehicleComponent } from './addeditvehicle/addeditvehicle.component';
import { SharedModule } from '@appThemeShared/shared.module';
import { DataTablesModule } from 'angular-datatables';

@NgModule({
  declarations: [VehiclemakeComponent, AddeditvehicleComponent, ViewvehicleComponent],
  imports: [
    CommonModule,
    VehiclemakeRoutingModule,
    SharedModule,
    DataTablesModule
  ]
})
export class VehiclemakeModule { }
