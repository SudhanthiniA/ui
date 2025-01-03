import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InsideupdistilleryforcheavyComponent } from './insideupdistilleryforcheavy.component';

const routes: Routes = [
  {
    path : 'list',
    component : InsideupdistilleryforcheavyComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InsideupdistilleryforcheavyRoutingModule { }
