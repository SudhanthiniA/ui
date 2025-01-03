import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddComponent } from './add/add.component';
import { ViewComponent } from './view/view.component';
import { Clb19Component } from './clb19.component';

const routes: Routes = [
  { path: 'list', component: Clb19Component },
  { path: 'add', component: AddComponent },
  { path: 'view', component: ViewComponent }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Clb19RoutingModule { }
