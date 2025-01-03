import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { ActualproblemsComponent } from './actualproblems.component';
import { AddComponent } from './add/add.component';
import { ViewComponent } from './view/view.component';
import { DashboardComponent } from './dashboard/dashboard.component';

const routes: Routes = [
  {
    path: 'list',
    component: ActualproblemsComponent
  },
  {
    path: 'dashboard',
    component: DashboardComponent
  },
  {
    path: 'add',
    component: AddComponent
  },
  
  {
    path: 'view/:Id',
    component: ViewComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ActualProblemRoutingModule { }
