import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Mf10Component } from './mf10.component';
import { AddComponent } from './add/add.component';


const routes: Routes = [
  { path: 'list', component: Mf10Component },
  { path: 'add', component: AddComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Mf10RoutingModule { }
