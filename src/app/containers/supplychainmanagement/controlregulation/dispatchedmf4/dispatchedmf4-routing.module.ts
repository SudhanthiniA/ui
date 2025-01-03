import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Dispatchedmf4Component } from './dispatchedmf4.component';

const routes: Routes = [
  { path: 'add', component: Dispatchedmf4Component}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Dispatchedmf4RoutingModule { }
