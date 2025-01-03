import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { QueryticketsummaryComponent } from './queryticketsummary.component';


const routes: Routes = [
  { path: '', component: QueryticketsummaryComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class QueryticketsummaryRoutingModule { }
