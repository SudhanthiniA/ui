import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Debondunitfl22Component } from './debondunitfl22.component';
import { AddComponent } from './add/add.component';
import { ViewComponent } from './view/view.component';

const routes: Routes = [
  {
    path: 'list',
    component: Debondunitfl22Component
  },
  {
    path: 'add',
    component: AddComponent
  },
  {
    path: 'view',
    component: ViewComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Debondunitfl22RoutingModule { }
