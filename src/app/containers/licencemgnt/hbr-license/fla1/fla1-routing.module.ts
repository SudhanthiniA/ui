import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Fla1Component } from './fla1.component';
import { Viewfla1Component } from './viewfla1/viewfla1.component';

const routes: Routes = [
  {
    path: '',
    component: Fla1Component
  },
  {
    path: 'view',
    component: Viewfla1Component
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Fla1RoutingModule { }
