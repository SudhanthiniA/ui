import { ViewvehiclemodelComponent } from './viewvehiclemodel/viewvehiclemodel.component';
import { VehiclemodelComponent } from './vehiclemodel.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddeditvehiclemodelComponent } from './addeditvehiclemodel/addeditvehiclemodel.component';


const routes: Routes = [
  {
    path : 'list',
    component : VehiclemodelComponent
  },
  {
    path : 'add',
    component : AddeditvehiclemodelComponent
  },
  {
    path : 'edit/:Id',
    component : AddeditvehiclemodelComponent
  },
  {
    path : 'view/:Id',
    component : ViewvehiclemodelComponent
  }
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VehiclemodelRoutingModule { }
