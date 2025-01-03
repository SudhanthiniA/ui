import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NdepermitComponent } from './ndepermit.component';
import { AddndepermitComponent } from './addndepermit/addndepermit.component';
import { ViewndepermitComponent } from './viewndepermit/viewndepermit.component';
import { ApprovalndepermitComponent } from './approvalndepermit/approvalndepermit.component';


const routes: Routes = [
  {
    path: 'list',
    component : NdepermitComponent
  },
  {
    path: 'add',
    component : AddndepermitComponent
  },

  {
    path: 'view',
    component : ViewndepermitComponent
  },
  {
    path: 'approval',
    component : ApprovalndepermitComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NdepermitRoutingModule { }
