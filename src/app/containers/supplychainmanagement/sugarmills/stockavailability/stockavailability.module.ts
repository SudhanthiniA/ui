import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@appThemeShared/shared.module';
import { StockavailabilityRoutingModule } from './stockavailability-routing.module';
import { StockavailabilityComponent } from './stockavailability.component';
import { AddeditstockavailabilityComponent } from './addeditstockavailability/addeditstockavailability.component';
import { ViewstockavailabilityComponent } from './viewstockavailability/viewstockavailability.component';
import { TankmaintainanceComponent } from './tankmaintainance/tankmaintainance.component';
import { TankconversionComponent } from './tankconversion/tankconversion.component';
import { TanktransferComponent } from './tanktransfer/tanktransfer.component';
import { TankmaintainComponent } from './tankmaintainance/tankmaintain/tankmaintain.component';
import { TankactiveinactiveComponent } from './tankmaintainance/tankactiveinactive/tankactiveinactive.component';
import { RemovalComponent } from './tankmaintainance/removal/removal.component';

@NgModule({
  declarations: [
    StockavailabilityComponent,
    AddeditstockavailabilityComponent,
    ViewstockavailabilityComponent,
    TankmaintainanceComponent,
    TankconversionComponent,
    TanktransferComponent,
    TankmaintainComponent,
    TankactiveinactiveComponent,
    RemovalComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    StockavailabilityRoutingModule
  ]
})
export class StockavailabilityModule { }
