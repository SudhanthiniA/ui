import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@appThemeShared/shared.module';
import { AddtankmaintenanceComponent } from './addtankmaintenance/addtankmaintenance.component';
import { ViewtankmaintenanceComponent } from './viewtankmaintenance/viewtankmaintenance.component';

import { TankmaintenanceRoutingModule} from './tankmaintenance-routing.module';

import { TankmaintenanceComponent } from './tankmaintenance.component';
@NgModule({
  declarations: [AddtankmaintenanceComponent, ViewtankmaintenanceComponent, TankmaintenanceComponent],
  imports: [
    CommonModule,
    TankmaintenanceRoutingModule,
    SharedModule
  ]
})
export class TankmaintenanceModule { }
