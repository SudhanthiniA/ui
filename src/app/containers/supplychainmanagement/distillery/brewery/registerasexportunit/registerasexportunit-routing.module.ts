
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RegisterasexportunitComponent } from './registerasexportunit.component';
import { AddregisterasexportunitComponent } from './addregisterasexportunit/addregisterasexportunit.component';
import { ViewregisterasexportunitComponent } from './viewregisterasexportunit/viewregisterasexportunit.component';

const routes: Routes = [
  {
    path : 'add',
    component : AddregisterasexportunitComponent
  },
  {
    path : 'view',
    component : ViewregisterasexportunitComponent
  },
  {
    path : 'list',
    component : RegisterasexportunitComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RegisterasexportunitRoutingModule { }
