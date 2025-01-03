import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Fl50Component } from './fl50.component';
import { ViewComponent } from './view/view.component';

const routes: Routes = [
  { path: 'add', component: Fl50Component },
  { path: 'view', component: ViewComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Fl50RoutingModule { }
