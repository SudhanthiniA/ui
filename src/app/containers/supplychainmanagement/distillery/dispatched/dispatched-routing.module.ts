import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DispatchedComponent } from './dispatched.component';
import { AdddispatchedComponent } from './adddispatched/adddispatched.component';
import { ViewdispatchedComponent } from './viewdispatched/viewdispatched.component';

const routes: Routes = [
  { path: 'list', component: DispatchedComponent },
  { path: 'add', component: AdddispatchedComponent },
   { path: 'view', component: ViewdispatchedComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DispatchedRoutingModule { }
