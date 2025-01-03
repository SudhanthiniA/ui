import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ActionsleviedComponent } from './actionslevied.component';

import { AddComponent } from './add/add.component';

const routes: Routes = [
  {
    path : 'list',
    component : ActionsleviedComponent
  },
  {
    path : 'add',
    component : AddComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ActionsleviedRoutingModule { }
