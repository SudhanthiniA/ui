import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Mf6part1Component } from './mf6part1.component';
import { Viewmf6part1Component } from './viewmf6part1/viewmf6part1.component';
import { AddComponent } from './add/add.component';

const routes: Routes = [
  { path: 'list', component: Mf6part1Component},
  {path: 'view', component:Viewmf6part1Component},
  {path: 'add', component:AddComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Mf6part1RoutingModule { }
