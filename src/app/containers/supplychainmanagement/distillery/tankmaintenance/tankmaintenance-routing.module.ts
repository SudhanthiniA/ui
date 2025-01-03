import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TankmaintenanceComponent } from './tankmaintenance.component';
import { AddtankmaintenanceComponent } from './addtankmaintenance/addtankmaintenance.component';
import { ViewtankmaintenanceComponent } from './viewtankmaintenance/viewtankmaintenance.component';

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
  path : 'view/:Id',
  component : ViewtankmaintenanceComponent
},
{
  path : 'preview',
  component : ViewtankmaintenanceComponent
},
{
  path: 'edit/:Id',
  component: AddtankmaintenanceComponent
},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TankmaintenanceRoutingModule { }
