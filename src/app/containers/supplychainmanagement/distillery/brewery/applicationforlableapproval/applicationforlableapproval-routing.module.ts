import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ApplicationforlableapprovalComponent } from './applicationforlableapproval.component';
import { AddapplicationforlableapprovalComponent } from './addapplicationforlableapproval/addapplicationforlableapproval.component';
import { ViewapplicationforlableapprovalComponent } from './viewapplicationforlableapproval/viewapplicationforlableapproval.component';


const routes: Routes = [
  {
    path : 'list',
    component : ApplicationforlableapprovalComponent
  },
  {
    path : 'add',
    component : AddapplicationforlableapprovalComponent
  },
  {
    path : 'view',
    component : ViewapplicationforlableapprovalComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ApplicationforlableapprovalRoutingModule { }
