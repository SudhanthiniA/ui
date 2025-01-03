import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BreakageentryComponent } from './breakageentry.component';
import { AddbreakageentryComponent } from './addbreakageentry/addbreakageentry.component';
import { ViewbreakageentryComponent } from './viewbreakageentry/viewbreakageentry.component';

const routes: Routes = [ 
  {
    path : 'list',
    component : BreakageentryComponent
  },
  {
    path : 'add',
    component : AddbreakageentryComponent
  },
  {
    path : 'edit/:id',
    component : AddbreakageentryComponent
  },
  {
    path : 'view/:id',
    component : ViewbreakageentryComponent
  } 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BreakageentryRoutingModule { }
