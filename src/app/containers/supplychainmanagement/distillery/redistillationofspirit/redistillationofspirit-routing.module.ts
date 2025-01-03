import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RedistillationofspiritComponent } from './redistillationofspirit.component';
import { AddredistillationofspiritComponent } from './addredistillationofspirit/addredistillationofspirit.component';
import { ViewredistillationofspiritComponent } from './viewredistillationofspirit/viewredistillationofspirit.component';


const routes: Routes = [
  {
    path : 'list',
    component : RedistillationofspiritComponent
  },
  {
    path: 'add',
    component : AddredistillationofspiritComponent
  },
  {
    path : 'view',
    component : ViewredistillationofspiritComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RedistillationofspiritRoutingModule { }
