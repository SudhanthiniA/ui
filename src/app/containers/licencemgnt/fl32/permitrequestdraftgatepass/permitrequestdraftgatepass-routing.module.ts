import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PermitrequestdraftgatepassComponent } from './permitrequestdraftgatepass.component';
import { AddpermitrequestdraftgatepassComponent } from './addpermitrequestdraftgatepass/addpermitrequestdraftgatepass.component';
import { ViewpermitrequestdraftgatepassComponent } from './viewpermitrequestdraftgatepass/viewpermitrequestdraftgatepass.component';
import { ApprovalComponent } from './approval/approval.component';


const routes: Routes = [
  {
    path : 'list',
    component :PermitrequestdraftgatepassComponent
  },
  {
    path : 'add',
    component :AddpermitrequestdraftgatepassComponent
  },
  {
    path : 'view',
    component :ViewpermitrequestdraftgatepassComponent
  },
  {
    path : 'approve',
    component :ApprovalComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PermitrequestdraftgatepassRoutingModule { }
