import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BrewerytankregistrationComponent } from './brewerytankregistration.component';
import { AddbrewerytankregistrationComponent } from './addbrewerytankregistration/addbrewerytankregistration.component';
import { ViewbrewerytankregistrationComponent } from './viewbrewerytankregistration/viewbrewerytankregistration.component';

const routes: Routes = [
  {
    path : 'list',
    component : BrewerytankregistrationComponent
  },
  {
    path : 'add',
    component : AddbrewerytankregistrationComponent
  },
  {
    path : 'view',
    component : ViewbrewerytankregistrationComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BrewerytankregistrationRoutingModule { }
