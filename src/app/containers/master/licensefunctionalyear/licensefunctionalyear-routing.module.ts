import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LicensefunctionalyearComponent } from './licensefunctionalyear.component';
import { AddlicensefunctionalyearComponent } from './addlicensefunctionalyear/addlicensefunctionalyear.component';
import { ViewlicensefunctionalyearComponent } from './viewlicensefunctionalyear/viewlicensefunctionalyear.component';

const routes: Routes = [
  { path: 'list', component: LicensefunctionalyearComponent },
  { path: 'add', component: AddlicensefunctionalyearComponent },
  { path: 'view', component: ViewlicensefunctionalyearComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LicensefunctionalyearRoutingModule { }
