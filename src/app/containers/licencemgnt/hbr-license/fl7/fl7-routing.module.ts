import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Viewfl7Component } from './viewfl7/viewfl7.component';

const routes: Routes = [
  {
    path: 'view',
    component: Viewfl7Component
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Fl7RoutingModule { }
