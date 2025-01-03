import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FinishedgoodsComponent } from './finishedgoods.component';

const routes: Routes = [
  {
    path : 'add',
    component : FinishedgoodsComponent
  }
]
  @NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })
export class FinishedgoodsRoutingModule { }
