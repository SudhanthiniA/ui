import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MwapprovalflowComponent } from './mwapprovalflow.component';
import { ViewmwindentapprovalComponent } from './viewmwindentapproval/viewmwindentapproval.component';


const routes: Routes = [
  { path: 'list', component: MwapprovalflowComponent },
  { path: 'view', component: ViewmwindentapprovalComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MwapprovalflowRoutingModule { }
