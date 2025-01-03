import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Bwfl9Component } from './bwfl9.component';
import { Addbwfl9Component } from './addbwfl9/addbwfl9.component';
import { Viewbwfl9Component } from './viewbwfl9/viewbwfl9.component';

const routes: Routes = [
  { path: 'list', component: Bwfl9Component },
  { path: 'add', component: Addbwfl9Component },
  { path: 'edit/:id', component: Addbwfl9Component },
  { path: 'view/:id', component: Viewbwfl9Component }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Bwfl9RoutingModule { }
