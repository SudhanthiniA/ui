import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InsideupdistilleryforbheavyComponent } from './insideupdistilleryforbheavy.component';

const routes: Routes = [
  {
    path : 'list',
    component : InsideupdistilleryforbheavyComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InsideupdistilleryforbheavyRoutingModule { }
