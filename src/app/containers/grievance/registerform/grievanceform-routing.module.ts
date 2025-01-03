import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GrievanceformComponent } from './grievanceform.component';
import { AddgrievanceformComponent } from './addgrievanceform/addgrievanceform.component';
import { ViewgrievanceformComponent } from './viewgrievanceform/viewgrievanceform.component';
import { CheckgrievanceformComponent } from './checkgrievanceform/checkgrievanceform.component';

const routes: Routes = [
  { path: 'list', component: GrievanceformComponent },
  { path: 'add', component: AddgrievanceformComponent },
  { path: 'view', component: ViewgrievanceformComponent },
  { path: 'status', component: CheckgrievanceformComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GrievanceformRoutingModule { }

