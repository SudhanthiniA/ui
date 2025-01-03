import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@app/theme/shared/shared.module';
import { DataTablesModule } from 'angular-datatables';
import { TankShapeRoutingModule } from './tank-shape-routing.module';
import { TankShapeComponent } from './tank-shape.component';
import { AddTankShapeComponent } from './add-tank-shape/add-tank-shape.component';
import { ViewTankShapeComponent } from './view-tank-shape/view-tank-shape.component';

@NgModule({
  declarations: [
    TankShapeComponent,
    AddTankShapeComponent,
    ViewTankShapeComponent
  ],
  imports: [
    CommonModule,
    TankShapeRoutingModule,
    SharedModule,
    DataTablesModule
  ]
})
export class TankShapeModule { }
