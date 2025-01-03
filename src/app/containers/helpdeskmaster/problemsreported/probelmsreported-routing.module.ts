import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { ViewComponent } from './view/view.component';
import { ProblemsreportedComponent } from './problemsreported.component';
import { AddComponent } from './add/add.component';
import { DashboardComponent } from './dashboard/dashboard.component';

const routes: Routes = [
  {
    path: 'list',
    component: ProblemsreportedComponent
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
    path: 'view',
    component: ViewComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProbelmReportedRoutingModule { }
