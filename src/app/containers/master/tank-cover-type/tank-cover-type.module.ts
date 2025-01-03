import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TankCoverTypeRoutingModule } from './tank-cover-type-routing.module';
import { TankCoverTypeComponent } from './tank-cover-type.component';
import { AddTankCoverTypeComponent } from './add-tank-cover-type/add-tank-cover-type.component';
import { ViewTankCoverTypeComponent } from './view-tank-cover-type/view-tank-cover-type.component';
import { DataTablesModule } from 'angular-datatables';
import { SharedModule } from '@app/theme/shared/shared.module';

@NgModule({
  declarations: [
    TankCoverTypeComponent, 
    AddTankCoverTypeComponent, 
    ViewTankCoverTypeComponent
  ],
  imports: [
    CommonModule,
    TankCoverTypeRoutingModule,
    SharedModule,
    DataTablesModule
  ]
})
export class TankCoverTypeModule { }
