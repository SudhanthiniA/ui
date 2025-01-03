import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HelpdeskexecutiveComponent } from './helpdeskexecutive.component';
import { AddhelpdeskexecutiveComponent } from './addhelpdeskexecutive/addhelpdeskexecutive.component';
import { ViewhelpdeskexecutiveComponent } from './viewhelpdeskexecutive/viewhelpdeskexecutive.component';

const routes: Routes = [
  { path: '', component: HelpdeskexecutiveComponent },
  { path: 'add', component: AddhelpdeskexecutiveComponent },
  { path: 'view', component: ViewhelpdeskexecutiveComponent }
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HelpdeskexecutiveRoutingModule { }
