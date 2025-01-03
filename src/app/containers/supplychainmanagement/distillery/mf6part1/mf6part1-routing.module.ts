import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Viewpreviewmf6part1Component } from './viewpreviewmf6part1/viewpreviewmf6part1.component';
import { Addeditmf6part1Component } from './addeditmf6part1/addeditmf6part1.component';
import { Mf6part1Component } from './mf6part1.component';


const routes: Routes = [

  {
    path : 'list',
    component : Mf6part1Component
  },
  {
    path: 'view/:id',
    component : Viewpreviewmf6part1Component
  },
  {
    path: 'preview',
    component : Viewpreviewmf6part1Component
  },
  {
    path : 'add',
    component : Addeditmf6part1Component
  },
  {
    path : 'edit/:id',
    component : Addeditmf6part1Component
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Mf6part1RoutingModule { }
