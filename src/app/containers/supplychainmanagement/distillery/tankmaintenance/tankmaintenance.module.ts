import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@app/theme/shared/shared.module';

import { TankmaintenanceRoutingModule } from './tankmaintenance-routing.module';
import { TankmaintenanceComponent } from './tankmaintenance.component';
import { AddtankmaintenanceComponent } from './addtankmaintenance/addtankmaintenance.component';
import { ViewtankmaintenanceComponent } from './viewtankmaintenance/viewtankmaintenance.component';



@NgModule({
  declarations: [TankmaintenanceComponent, AddtankmaintenanceComponent, ViewtankmaintenanceComponent],
  imports: [
    CommonModule,
    SharedModule,
    TankmaintenanceRoutingModule
  ]
})
export class TankmaintenanceModule { }
