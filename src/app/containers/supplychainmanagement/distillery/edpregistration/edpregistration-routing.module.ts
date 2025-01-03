import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EdpregistrationComponent } from './edpregistration.component';
import { AddComponent } from './add/add.component';
import { ViewComponent } from './view/view.component';
import { ApprovalComponent } from './approval/approval.component';
import { ViewapprovalComponent } from './viewapproval/viewapproval.component';
import { ViewbrandhistoryComponent } from './viewbrandhistory/viewbrandhistory.component';
import { ListbrandhistoryComponent } from './listbrandhistory/listbrandhistory.component';
import { CivilcsdComponent } from './civilcsd/civilcsd.component';
import { CsdexportComponent } from './csdexport/csdexport.component';
import { CsdwithinupComponent } from './csdwithinup/csdwithinup.component';

const routes: Routes = [
  {
    path : 'list',
    component : EdpregistrationComponent
  },
  {
    path: 'add',
    component : AddComponent
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
  },
  {
    path: 'civilcsd',
    component : CivilcsdComponent 
  },
  {
    path: 'csdexport',
    component : CsdexportComponent 
  },
  {
    path: 'csdwithinup',
    component : CsdwithinupComponent 
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EdpregistrationRoutingModule { }
