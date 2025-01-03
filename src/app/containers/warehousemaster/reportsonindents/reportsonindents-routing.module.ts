import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { ReportsonindentsComponent } from './reportsonindents.component';

const routes: Routes = [
  { path: 'list', component: ReportsonindentsComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReportsonindentsRoutingModule { }
