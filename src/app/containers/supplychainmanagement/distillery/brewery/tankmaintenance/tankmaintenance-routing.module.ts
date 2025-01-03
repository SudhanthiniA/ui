import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddtankmaintenanceComponent } from './addtankmaintenance/addtankmaintenance.component';
import { ViewtankmaintenanceComponent } from './viewtankmaintenance/viewtankmaintenance.component';

import { TankmaintenanceComponent } from './tankmaintenance.component';

const routes: Routes = [
  {
    path : 'list',
    component : TankmaintenanceComponent
  },
  {
    path : 'add',
    component : AddtankmaintenanceComponent
  },
  {
    path : 'view',
    component : ViewtankmaintenanceComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TankmaintenanceRoutingModule { }
