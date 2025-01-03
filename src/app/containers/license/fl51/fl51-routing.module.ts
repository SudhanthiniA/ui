import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Fl51Component } from './fl51.component';
import { ViewComponent } from './view/view.component';

const routes: Routes = [
  { path: 'add', component: Fl51Component },
  { path: 'view', component: ViewComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Fl51RoutingModule { }
