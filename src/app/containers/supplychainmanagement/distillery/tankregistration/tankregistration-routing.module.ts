import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TankregistrationComponent } from './tankregistration.component';
import { AddedittankregistrationComponent } from './addedittankregistration/addedittankregistration.component';
import { ViewtankregistrationComponent } from './viewtankregistration/viewtankregistration.component';
import { AuditapprovalComponent } from './auditapproval/auditapproval.component';
import { SitevisitComponent } from './sitevisit/sitevisit.component';


const routes: Routes = [
  {
    path : 'list',
    component : TankregistrationComponent
  },
  {
    path : 'add',
    component : AddedittankregistrationComponent
  },
  {
    path : 'auditapproval',
    component : AuditapprovalComponent
  },
  {
    path : 'view',
    component : ViewtankregistrationComponent
  },
  {
    path : 'edit/:Id',
    component : AddedittankregistrationComponent
  },
  {
    path : 'preview',
    component : ViewtankregistrationComponent
  },
  {
    path : 'sitevisit',
    component : SitevisitComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TankregistrationRoutingModule { }
