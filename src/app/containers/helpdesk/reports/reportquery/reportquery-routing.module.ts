import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ReportqueryComponent } from './reportquery.component';


const routes: Routes = [
  { path: '', component: ReportqueryComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReportqueryRoutingModule { }
