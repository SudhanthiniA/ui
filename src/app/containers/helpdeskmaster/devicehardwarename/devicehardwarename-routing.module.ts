import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AssetbrandsComponent } from './devicehardwarename.component';
import { AdddevicehardwarenameComponent } from './adddevicehardwarename/devicehardwarename.component';
import { ViewdevicehardwarenameComponent } from './viewdevicehardwarename/devicehardwarename.component';

const routes: Routes = [
  {
    path: 'list',
    component: AssetbrandsComponent
  },
  {
    path: 'add',
    component: AdddevicehardwarenameComponent
  },
  {
    path: 'view',
    component: ViewdevicehardwarenameComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DevicehardwarenameRoutingModule { }
