import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TheftapplicationComponent } from './theftapplication.component';
import { AddComponent } from './add/add.component';
import { ViewComponent } from './view/view.component';


const routes: Routes = [
  {
    path : 'list',
    component : TheftapplicationComponent
  },
  {
    path : 'view',
    component : ViewComponent
  },
  {
    path: 'add',
    component: AddComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TheftapplicationRoutingModule { }
