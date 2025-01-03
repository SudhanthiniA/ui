import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DispatchComponent } from './dispatch.component';
import { AddeditdispatchComponent } from './addeditdispatch/addeditdispatch.component';
import { ViewdispatchComponent } from './viewdispatch/viewdispatch.component';
import { ApprovalComponent } from './approval/approval.component';


const routes: Routes = [
  {
    path : 'list',
    component : DispatchComponent
  },
  {
    path : 'approval',
    component : ApprovalComponent
  },
  {
    path : 'add/:Id',
    component : AddeditdispatchComponent
  },
  {
    path : 'edit/:Id',
    component : AddeditdispatchComponent
  },
  {
    path : 'view/:Id',
    component : ViewdispatchComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DispatchRoutingModule { }
