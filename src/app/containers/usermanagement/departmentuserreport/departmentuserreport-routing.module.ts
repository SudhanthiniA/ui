import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DepartmentuserreportComponent } from './departmentuserreport.component';
import { ViewemailComponent } from './viewemail/viewemail.component';
import { AddComponent } from './add/add.component';

const routes: Routes = [
  { path: '', component: DepartmentuserreportComponent },
  { path: 'add', component: AddComponent },
  { path: 'viewemail', component: ViewemailComponent }
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DepartmentuserreportRoutingModule { }
