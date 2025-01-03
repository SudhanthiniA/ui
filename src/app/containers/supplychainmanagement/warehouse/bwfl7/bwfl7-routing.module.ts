import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Bwfl7Component } from './bwfl7.component';
import { Addbwfl7Component } from './addbwfl7/addbwfl7.component';
import { Viewbwfl7Component } from './viewbwfl7/viewbwfl7.component';

const routes: Routes = [
  { path: 'list', component: Bwfl7Component },
  { path: 'add', component: Addbwfl7Component },
  { path: 'edit/:id', component: Addbwfl7Component },
  { path: 'view/:id', component: Viewbwfl7Component }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Bwfl7RoutingModule { }
