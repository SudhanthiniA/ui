import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RepairtypemasterComponent } from './repairtypemaster.component';
import { AddrepairtypemasterComponent } from './addrepairtypemaster/addrepairtypemaster.component';
import { ViewrepairtypemasterComponent } from './viewrepairtypemaster/viewrepairtypemaster.component';

const routes: Routes = [
  { path: 'list', component: RepairtypemasterComponent },
  { path: 'add', component: AddrepairtypemasterComponent },
  { path: 'view', component: ViewrepairtypemasterComponent }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RepairtypemasterRoutingModule { }
