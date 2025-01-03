import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Bwfl6Component } from './bwfl6.component';
import { Addbwfl6Component } from './addbwfl6/addbwfl6.component';
import { Viewbwfl6Component } from './viewbwfl6/viewbwfl6.component';

const routes: Routes = [
  { path: 'list', component: Bwfl6Component },
  { path: 'add', component: Addbwfl6Component },
  { path: 'edit/:id', component: Addbwfl6Component },
  { path: 'view/:id', component: Viewbwfl6Component }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Bwfl6RoutingModule { }
