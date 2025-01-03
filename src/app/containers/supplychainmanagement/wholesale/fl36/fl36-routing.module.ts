import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Fl36Component } from './fl36.component';

const routes: Routes = [{ path: 'list', component: Fl36Component }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Fl36RoutingModule { }
