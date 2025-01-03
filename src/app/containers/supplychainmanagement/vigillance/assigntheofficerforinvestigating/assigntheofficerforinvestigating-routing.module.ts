import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AssigntheofficerforinvestigatingComponent } from './assigntheofficerforinvestigating.component';
import { AddassigntheofficerforinvestigatingComponent } from './addassigntheofficerforinvestigating/addassigntheofficerforinvestigating.component';
import { ViewassigntheofficerforinvestigatingComponent } from './viewassigntheofficerforinvestigating/viewassigntheofficerforinvestigating.component';

const routes: Routes = [
  { path: 'list', component: AssigntheofficerforinvestigatingComponent },
  { path: 'add', component: AddassigntheofficerforinvestigatingComponent },
  { path: 'view', component: ViewassigntheofficerforinvestigatingComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class AssigntheofficerforinvestigatingRoutingModule { }
