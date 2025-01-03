import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Fl23Component } from './fl23.component';

const routes: Routes = [{ path: 'list', component: Fl23Component }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Fl23RoutingModule { }
