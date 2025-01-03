import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TranspassparentloginComponent } from './transpassparentlogin.component';
import { AddtranspassparentloginComponent } from './addtranspassparentlogin/addtranspassparentlogin.component';
import { ViewtranspassparentloginComponent } from './viewtranspassparentlogin/viewtranspassparentlogin.component';

const routes: Routes = [
  { path: 'list', component: TranspassparentloginComponent },
  { path: 'add', component: AddtranspassparentloginComponent },
  { path: 'edit/:id', component: AddtranspassparentloginComponent },
  { path: 'view/:id', component: ViewtranspassparentloginComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TranspassparentloginRoutingModule { }
