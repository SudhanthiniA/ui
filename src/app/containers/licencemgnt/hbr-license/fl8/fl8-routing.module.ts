import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Fl8Component } from './fl8.component';
import { Viewfl8Component } from './viewfl8/viewfl8.component';

const routes: Routes = [
  {
    path: '',
    component: Fl8Component
  },
  {
    path: 'view',
    component: Viewfl8Component
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Fl8RoutingModule { }
