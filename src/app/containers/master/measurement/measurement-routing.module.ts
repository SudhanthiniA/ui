import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MeasurementComponent } from './measurement.component';
import { AddeditmeasurementComponent } from './addeditmeasurement/addeditmeasurement.component';
import { ViewmeasurementComponent } from './viewmeasurement/viewmeasurement.component';

const routes: Routes = [
  { path: 'list', component: MeasurementComponent },
  { path: 'add', component: AddeditmeasurementComponent },
  { path: 'edit/:id', component: AddeditmeasurementComponent },
  { path: 'view', component: ViewmeasurementComponent }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MeasurementRoutingModule { }
