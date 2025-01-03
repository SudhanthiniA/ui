
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddeditvehicleComponent } from './addeditvehicle/addeditvehicle.component';
import { ViewvehicleComponent } from './viewvehicle/viewvehicle.component';
import { VehiclemakeComponent } from './vehiclemake.component';

const routes: Routes = [
  {
    path : 'list',
    component : VehiclemakeComponent
  },
  {
    path : 'add',
    component : AddeditvehicleComponent
  },
  {
    path : 'edit/:Id',
    component : AddeditvehicleComponent
  },
  {
    path : 'view/:Id',
    component : ViewvehicleComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VehiclemakeRoutingModule { }
