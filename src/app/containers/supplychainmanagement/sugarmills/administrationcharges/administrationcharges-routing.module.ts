import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdministrationchargesComponent } from './administrationcharges.component';
import { AddadministrationchargesComponent } from './addadministrationcharges/addadministrationcharges.component';
import { ViewadministrationchargesComponent } from './viewadministrationcharges/viewadministrationcharges.component';

const routes: Routes = [
  { path: 'list', component: AdministrationchargesComponent },
  { path: 'add', component: AddadministrationchargesComponent },
  { path: 'view', component: ViewadministrationchargesComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdministrationchargesRoutingModule { }
