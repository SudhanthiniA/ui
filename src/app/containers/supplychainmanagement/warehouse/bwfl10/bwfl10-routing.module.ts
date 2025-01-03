import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Bwfl10Component } from './bwfl10.component';
import { Addbwfl10Component } from './addbwfl10/addbwfl10.component';
import { Viewbwfl10Component } from './viewbwfl10/viewbwfl10.component';

const routes: Routes = [
  { path: 'list', component: Bwfl10Component },
  { path: 'add', component: Addbwfl10Component },
  { path: 'edit/:id', component: Addbwfl10Component },
  { path: 'view/:id', component: Viewbwfl10Component }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Bwfl10RoutingModule { }
