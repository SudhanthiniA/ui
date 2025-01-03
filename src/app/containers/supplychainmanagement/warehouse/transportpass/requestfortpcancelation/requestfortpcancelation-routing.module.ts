import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RequestfortpcancelationComponent } from './requestfortpcancelation.component';
import { AddrequestfortpcancelationComponent } from './addrequestfortpcancelation/addrequestfortpcancelation.component';
import { ViewrequestfortpcancelationComponent } from './viewrequestfortpcancelation/viewrequestfortpcancelation.component';

const routes: Routes = [
  { path: '', component: RequestfortpcancelationComponent },
  { path: 'list', component: RequestfortpcancelationComponent },
  { path: 'add', component: AddrequestfortpcancelationComponent },
  { path: 'edit/:id', component: AddrequestfortpcancelationComponent },
  { path: 'view/:id', component: ViewrequestfortpcancelationComponent },
  { path: 'preview/:id', component: ViewrequestfortpcancelationComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RequestfortpcancelationRoutingModule { }
