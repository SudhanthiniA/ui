import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TankMaterialRoutingModule } from './tank-material-routing.module';
import { TankMaterialComponent } from './tank-material.component';
import { AddTankMaterialComponent } from './add-tank-material/add-tank-material.component';
import { ViewTankMaterialComponent } from './view-tank-material/view-tank-material.component';
import { DataTablesModule } from 'angular-datatables';
import { SharedModule } from '@app/theme/shared/shared.module';

@NgModule({
  declarations: [
    TankMaterialComponent, 
    AddTankMaterialComponent, 
    ViewTankMaterialComponent
  ],
  imports: [
    CommonModule,
    TankMaterialRoutingModule,
    SharedModule,
    DataTablesModule
  ]
})
export class TankMaterialModule { }
