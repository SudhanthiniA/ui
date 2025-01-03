import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ManufactureplanestimationofbasewineapplicationComponent } from './manufactureplanestimationofbasewineapplication.component';
import { AddplanestimationapplicationComponent } from './addplanestimationapplication/addplanestimationapplication.component';
import { ViewplanestimationapplicationComponent } from './viewplanestimationapplication/viewplanestimationapplication.component';

const routes: Routes = [
  { path: 'list', component: ManufactureplanestimationofbasewineapplicationComponent },
  { path: 'add', component: AddplanestimationapplicationComponent },
  { path: 'view', component: ViewplanestimationapplicationComponent }
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ManufactureplanestimationofbasewineapplicationRoutingModule { }
