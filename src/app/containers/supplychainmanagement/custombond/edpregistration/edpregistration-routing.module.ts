import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EdpregistrationComponent } from './edpregistration.component';
import { AddedpregistrationComponent } from './addedpregistration/addedpregistration.component';
import { ApprovalComponent } from './approval/approval.component';
import { ListbrandhistoryComponent } from './listbrandhistory/listbrandhistory.component';
import { ViewComponent } from './view/view.component';
import { ViewapprovalComponent } from './viewapproval/viewapproval.component';
import { ViewbrandhistoryComponent } from './viewbrandhistory/viewbrandhistory.component';

const routes: Routes = [
  {
    path : 'list',
    component : EdpregistrationComponent
  },
  {
    path: 'add',
    component : AddedpregistrationComponent
  },
  {
    path: 'view',
    component : ViewComponent
  },
  {
    path: 'approval',
    component : ApprovalComponent
  },
  {
    path: 'viewapproval',
    component : ViewapprovalComponent 
  },
  {
    path: 'viewbrandhistory',
    component : ViewbrandhistoryComponent 
  },
  {
    path: 'listbrandhistory',
    component : ListbrandhistoryComponent 
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EdpregistrationRoutingModule { }
