import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ReportnoansorcalldisconnectComponent } from './reportnoansorcalldisconnect.component';


const routes: Routes = [
  { path: '', component: ReportnoansorcalldisconnectComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReportnoansorcalldisconnectRoutingModule { }
