import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ReportticketsummaryComponent } from './reportticketsummary.component';

const routes: Routes = [
  { path: 'list', component: ReportticketsummaryComponent } 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReportticketsummaryRoutingModule { }
