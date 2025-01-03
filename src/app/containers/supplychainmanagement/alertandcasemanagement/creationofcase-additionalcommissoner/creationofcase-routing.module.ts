import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CreationofcaseComponent } from './creationofcase.component';
import { AddComponent } from './add/add.component';
import { ViewComponent } from './view/view.component';
import { CaseinitiatingofficerloginComponent } from './caseinitiatingofficerlogin/caseinitiatingofficerlogin.component';
import {ViewcaseinitiatingofficerloginComponent } from './viewcaseinitiatingofficerlogin/viewcaseinitiatingofficerlogin.component';

const routes: Routes = [
  { path: 'list', component: CreationofcaseComponent },
  { path: 'add', component: AddComponent },
  { path: 'view', component: ViewComponent },
  { path: 'officerlist', component: CaseinitiatingofficerloginComponent },
  { path: 'officerview', component: ViewcaseinitiatingofficerloginComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UnscheduledinspectionRoutingModule { }
