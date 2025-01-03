import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PlanestimationapplicationComponent } from './planestimationapplication.component';
import { AddplanestimationapplicationComponent } from './addplanestimationapplication/addplanestimationapplication.component';
import { ViewplanestimationapplicationComponent } from './viewplanestimationapplication/viewplanestimationapplication.component';

const routes: Routes = [
  { path: 'list', component: PlanestimationapplicationComponent },
  { path: 'add', component: AddplanestimationapplicationComponent },
  { path: 'view', component: ViewplanestimationapplicationComponent }
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PlanestimationapplicationRoutingModule { }
