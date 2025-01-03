import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NodalofficerComponent } from './nodalofficer.component';
import { ViewnodalofficerComponent } from './viewnodalofficer/viewnodalofficer.component';

const routes: Routes = [
  { path: 'list', component: NodalofficerComponent },
  { path: 'view', component: ViewnodalofficerComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NodalofficerRoutingModule { }
