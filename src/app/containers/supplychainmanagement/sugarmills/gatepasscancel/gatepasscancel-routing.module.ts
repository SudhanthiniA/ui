import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GatepasscancelComponent } from './gatepasscancel.component';
import { AddgatepasscancelComponent } from './addgatepasscancel/addgatepasscancel.component';
import { ViewgatepasscancelComponent } from './viewgatepasscancel/viewgatepasscancel.component';


const routes: Routes = [
  {
    path : 'list',
    component : GatepasscancelComponent
  },
  {
    path : 'add',
    component : AddgatepasscancelComponent
  },
  {
    path : 'view',
    component : ViewgatepasscancelComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GatepasscancelRoutingModule { }
