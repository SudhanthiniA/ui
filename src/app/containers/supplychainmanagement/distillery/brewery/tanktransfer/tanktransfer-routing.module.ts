import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddtanktransferComponent } from './addtanktransfer/addtanktransfer.component';
import { ViewtanktransferComponent } from './viewtanktransfer/viewtanktransfer.component';

import { TanktransferComponent } from './tanktransfer.component';

const routes: Routes = [
  {
    path : 'list',
    component : TanktransferComponent
  },
  {
    path : 'add',
    component : AddtanktransferComponent
  },
  {
    path : 'view',
    component : ViewtanktransferComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TanktransferRoutingModule { }
