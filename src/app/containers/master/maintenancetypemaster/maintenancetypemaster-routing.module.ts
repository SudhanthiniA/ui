import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MaintenancetypemasterComponent } from './maintenancetypemaster.component';
import { AddmaintenancetypemasterComponent } from './addmaintenancetypemaster/addmaintenancetypemaster.component';
import { ViewmaintenancetypemasterComponent } from './viewmaintenancetypemaster/viewmaintenancetypemaster.component';

const routes: Routes = [
  { path: 'list', component: MaintenancetypemasterComponent },
  { path: 'add', component: AddmaintenancetypemasterComponent },
  { path: 'view', component: ViewmaintenancetypemasterComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MaintenancetypemasterRoutingModule { }
