import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DivisionComponent } from './division.component';
import { AddDivisionComponent } from './add-division/add-division.component';
import { ViewDivisionComponent } from './view-division/view-division.component';

const routes: Routes = [
  { path: 'list', component: DivisionComponent },
  { path: 'add', component: AddDivisionComponent },
  { path: 'edit/:id', component: AddDivisionComponent },
  { path: 'view', component: ViewDivisionComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DivisionRoutingModule { }
