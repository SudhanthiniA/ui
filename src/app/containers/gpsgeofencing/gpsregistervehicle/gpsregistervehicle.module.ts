import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@appThemeShared/shared.module';
import { GpsregistervehicleComponent } from './gpsregistervehicle.component';
import { AddComponent } from './add/add.component';
import { ViewComponent } from './view/view.component';
import { GpsregistervehicleRoutingModule } from './gpsregistervehicle-routing.module';


@NgModule({
  declarations: [GpsregistervehicleComponent, AddComponent, ViewComponent],
  imports: [
    CommonModule,
    SharedModule,
    GpsregistervehicleRoutingModule
  ]
})
export class GpsregistervehicleModule { }
