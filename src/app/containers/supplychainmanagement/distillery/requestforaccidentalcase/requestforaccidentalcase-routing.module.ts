import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddrequestforaccidentalcaseComponent } from './addrequestforaccidentalcase/addrequestforaccidentalcase.component';
import { ViewrequestforaccidentalcaseComponent } from './viewrequestforaccidentalcase/viewrequestforaccidentalcase.component';
import { RequestforaccidentalcaseComponent } from './requestforaccidentalcase.component';

const routes: Routes = [
  { path: 'list', component: RequestforaccidentalcaseComponent},
  {path: 'add', component: AddrequestforaccidentalcaseComponent},
  {path: 'view', component: ViewrequestforaccidentalcaseComponent}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RequestforaccidentalcaseRoutingModule { }
