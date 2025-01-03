import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ReportentitywiseComponent } from './reportentitywise.component';

const routes: Routes = [
  { path: 'list', component: ReportentitywiseComponent } 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReportentitywiseRoutingModule { }
