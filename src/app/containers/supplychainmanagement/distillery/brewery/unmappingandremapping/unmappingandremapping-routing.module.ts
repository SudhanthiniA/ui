import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {UnmappingandremappingComponent} from './unmappingandremapping.component';
import { AddComponent } from './add/add.component';
import { ViewComponent } from './view/view.component';
const routes: Routes = [
  { path: 'list', component: UnmappingandremappingComponent },
  { path: 'add', component: AddComponent },
  { path: 'view', component: ViewComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UnmappingandremappingRoutingModule { }
