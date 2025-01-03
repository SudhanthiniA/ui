import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddComponent } from './add/add.component';
import { ViewComponent } from './view/view.component';
import { ListComponent } from './list/list.component';
import { Routes, RouterModule } from '@angular/router';
import { ApprovalComponent } from './approval/approval.component';

const routes: Routes = [
{ path: 'list', component: ListComponent },
{ path: 'add', component: AddComponent },
{ path: 'view', component: ViewComponent },
{ path: 'approval', component: ApprovalComponent }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AccidentalrequestondeologinRoutingModule { }
