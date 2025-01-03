import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MworderpickupComponent } from './mworderpickup.component';
import { AddmworderpickupComponent } from './addmworderpickup/addmworderpickup.component';
import { ViewmworderpickupComponent } from './viewmworderpickup/viewmworderpickup.component';

const routes: Routes = [
  { path: 'list', component: MworderpickupComponent },
  { path: 'edit', component: AddmworderpickupComponent },
  { path: 'view', component: ViewmworderpickupComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MworderpickupRoutingModule { }
