import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Mf6Part2Component} from './mf6-part2.component';
import { AddMf6Part2Component } from './add-mf6-part2/add-mf6-part2.component';
import { ViewMf6Part2Component } from './view-mf6-part2/view-mf6-part2.component';


const routes: Routes = [
  {
    path : 'list',
    component : Mf6Part2Component
  },
  {
    path : 'add',
    component : AddMf6Part2Component
  },
  {
    path : 'view/:id',
    component : ViewMf6Part2Component
  },
  {
    path : 'edit/:id',
    component : AddMf6Part2Component
  },
  {
    path : 'preview',
    component : ViewMf6Part2Component
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Mf6Part2RoutingModule { }
