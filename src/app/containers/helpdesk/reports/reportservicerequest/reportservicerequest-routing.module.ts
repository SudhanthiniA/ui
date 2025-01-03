import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ReportservicerequestComponent } from './reportservicerequest.component';


const routes: Routes = [
  { path: '', component: ReportservicerequestComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReportservicerequestRoutingModule { }
