import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MwhmappingComponent } from './mwhmapping.component';
import { AddmwhmappingComponent } from './addmwhmapping/addmwhmapping.component';
import { ViewmwhmappingComponent } from './viewmwhmapping/viewmwhmapping.component';
import { MwhmappingsuccessComponent } from './mwhmappingsuccess/mwhmappingsuccess.component';

const routes: Routes = [
  { path: 'list', component: MwhmappingComponent },
  { path: 'add', component: AddmwhmappingComponent },
{ path: 'view', component: ViewmwhmappingComponent },
{ path: 'success', component: MwhmappingsuccessComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MwhmappingRoutingModule { }
