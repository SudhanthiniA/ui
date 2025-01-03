import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Bwfl5Component } from './bwfl5.component';
import { Addbwfl5Component } from './addbwfl5/addbwfl5.component';
import { Viewbwfl5Component } from './viewbwfl5/viewbwfl5.component';

const routes: Routes = [
  { path: 'list', component: Bwfl5Component },
  { path: 'add', component: Addbwfl5Component },
  { path: 'edit/:id', component: Addbwfl5Component },
  { path: 'view/:id', component: Viewbwfl5Component }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Bwfl5RoutingModule { }
