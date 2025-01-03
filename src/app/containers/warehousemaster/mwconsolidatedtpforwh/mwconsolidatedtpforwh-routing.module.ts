import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MwconsolidatedtpforwhComponent } from './mwconsolidatedtpforwh.component';
import { ViewmwconsolidatedtpforwhComponent } from './viewmwconsolidatedtpforwh/viewmwconsolidatedtpforwh.component';


const routes: Routes = [
  { path: 'list', component: MwconsolidatedtpforwhComponent },
  { path: 'view', component: ViewmwconsolidatedtpforwhComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MwconsolidatedtpforwhRoutingModule { }
