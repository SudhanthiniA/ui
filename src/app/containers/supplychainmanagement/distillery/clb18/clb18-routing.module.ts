import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddComponent } from './add/add.component';
import { ViewComponent } from './view/view.component';
import { Clb18Component } from './clb18.component';

const routes: Routes = [
  { path: 'list', component: Clb18Component },
  { path: 'add', component: AddComponent },
  { path: 'view', component: ViewComponent }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Clb18RoutingModule { }
