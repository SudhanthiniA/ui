import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ViewComponent } from './view/view.component';
import { ApprovalComponent } from './approval/approval.component';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
{ path: 'approval', component: ApprovalComponent },
{ path: 'view', component: ViewComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})



export class Pd25gatepassforexportspritrequestRoutingModule { }
