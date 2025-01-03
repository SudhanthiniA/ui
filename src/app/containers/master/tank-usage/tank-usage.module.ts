import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@app/theme/shared/shared.module';
import { DataTablesModule } from 'angular-datatables';
import { TankUsageRoutingModule } from './tank-usage-routing.module';
import { TankUsageComponent } from './tank-usage.component';
import { ViewTankUsageComponent } from './view-tank-usage/view-tank-usage.component';
import { AddtankUsageComponent } from './addtank-usage/addtank-usage.component';

@NgModule({
  declarations: [
    TankUsageComponent,
    // AddTankusageComponent,
    ViewTankUsageComponent,
    AddtankUsageComponent
  ],
  imports: [
    CommonModule,
    TankUsageRoutingModule,
    SharedModule,
    DataTablesModule
  ]
})
export class TankUsageModule { }
