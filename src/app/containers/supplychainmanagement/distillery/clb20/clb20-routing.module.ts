import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddComponent } from './add/add.component';
import { ViewComponent } from './view/view.component';
import { Clb20Component } from './clb20.component';

const routes: Routes = [
  { path: 'list', component: Clb20Component },
  { path: 'add', component: AddComponent },
  { path: 'view', component: ViewComponent }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Clb20RoutingModule { }
