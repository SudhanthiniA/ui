import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Bwfl8Component } from './bwfl8.component';
import { Addbwfl8Component } from './addbwfl8/addbwfl8.component';
import { Viewbwfl8Component } from './viewbwfl8/viewbwfl8.component';

const routes: Routes = [
  { path: 'list', component: Bwfl8Component },
  { path: 'add', component: Addbwfl8Component },
  { path: 'edit/:id', component: Addbwfl8Component },
  { path: 'view/:id', component: Viewbwfl8Component }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Bwfl8RoutingModule { }
