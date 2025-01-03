import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FinaltransportpassCl2Component } from './finaltransportpass-cl2.component';
import { ViewComponent } from './view/view.component';
const routes: Routes = [
  {
    path : 'list',
    component : FinaltransportpassCl2Component
  },
  {
    path: 'view',
    component : ViewComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FinaltransportpassCl2RoutingModule { }
