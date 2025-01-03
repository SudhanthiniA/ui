import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MovementoffinishedgoodsComponent } from './movementoffinishedgoods.component';
import { AddmovementoffinishedgoodsComponent } from './addmovementoffinishedgoods/addmovementoffinishedgoods.component';
import { ViewmovementoffinishedgoodsComponent } from './viewmovementoffinishedgoods/viewmovementoffinishedgoods.component';

const routes: Routes = [
  { 
  path: 'list', component: MovementoffinishedgoodsComponent },
  { 
    path: 'add', component: AddmovementoffinishedgoodsComponent },
    { 
      path: 'view', component: ViewmovementoffinishedgoodsComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MovementoffinishedgoodsRoutingModule { }
