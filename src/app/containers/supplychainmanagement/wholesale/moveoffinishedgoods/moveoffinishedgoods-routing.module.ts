import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MoveoffinishedgoodsComponent } from './moveoffinishedgoods.component';
import { AddmoveoffinishedgoodsComponent } from './addmoveoffinishedgoods/addmoveoffinishedgoods.component';
import { ViewmoveoffinishedgoodsComponent } from './viewmoveoffinishedgoods/viewmoveoffinishedgoods.component';

const routes: Routes = [
  { path: 'list', component: MoveoffinishedgoodsComponent },
  {
    path: 'add',
    component: AddmoveoffinishedgoodsComponent
  },
  {
    path: 'view',
    component: ViewmoveoffinishedgoodsComponent
  }
]; 

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MoveoffinishedgoodsRoutingModule { }
