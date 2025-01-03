import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MeasurementRoutingModule } from './measurement-routing.module';
import { MeasurementComponent } from './measurement.component';
import { AddeditmeasurementComponent } from './addeditmeasurement/addeditmeasurement.component';
import { ViewmeasurementComponent } from './viewmeasurement/viewmeasurement.component';
import { SharedModule } from '@appThemeShared/shared.module';

@NgModule({
  declarations: [MeasurementComponent, AddeditmeasurementComponent, ViewmeasurementComponent],
  imports: [
    CommonModule,
    SharedModule,
    MeasurementRoutingModule
  ]
})
export class MeasurementModule { }
