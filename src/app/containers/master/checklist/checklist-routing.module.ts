import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ChecklistComponent } from './checklist.component';
import { AddchecklistComponent } from './addchecklist/addchecklist.component';
import { ViewchecklistComponent } from './viewchecklist/viewchecklist.component';

const routes: Routes = [
  { path: 'list', component: ChecklistComponent },
  { path: 'add', component: AddchecklistComponent },
  { path: 'view', component: ViewchecklistComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ChecklistRoutingModule { }
