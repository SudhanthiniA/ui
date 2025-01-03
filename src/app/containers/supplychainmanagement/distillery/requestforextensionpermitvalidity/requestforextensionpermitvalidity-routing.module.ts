import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddrequestforextensionpermitvalidityComponent } from './addrequestforextensionpermitvalidity/addrequestforextensionpermitvalidity.component';
import { ViewrequestforextensionpermitvalidityComponent } from './viewrequestforextensionpermitvalidity/viewrequestforextensionpermitvalidity.component';
import { RequestforextensionpermitvalidityComponent } from './requestforextensionpermitvalidity.component';

const routes: Routes = [
  { path: 'list', component: RequestforextensionpermitvalidityComponent},
  {path: 'add', component: AddrequestforextensionpermitvalidityComponent},
  {path: 'view', component: ViewrequestforextensionpermitvalidityComponent}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RequestforextensionpermitvalidityRoutingModule { }
