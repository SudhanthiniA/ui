import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MwbreakageentryComponent } from './mwbreakageentry.component';
import { AddmwbreakageentryComponent } from './addmwbreakageentry/addmwbreakageentry.component';
import { ViewmwbreakageentryComponent } from './viewmwbreakageentry/viewmwbreakageentry.component';


const routes: Routes = [
  { path: 'list', component: MwbreakageentryComponent },
  { path: 'add', component: AddmwbreakageentryComponent },
  { path: 'view', component: ViewmwbreakageentryComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MwbreakageentryRoutingModule { }
