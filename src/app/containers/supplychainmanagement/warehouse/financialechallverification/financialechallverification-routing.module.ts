import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FinancialechallverificationComponent } from './financialechallverification.component';
import { AddfinancialechallverificationComponent } from './addfinancialechallverification/addfinancialechallverification.component';
import { ViewfinancialechallverificationComponent } from './viewfinancialechallverification/viewfinancialechallverification.component';

const routes: Routes = [
  { path: 'list', component: FinancialechallverificationComponent },
  { path: 'add', component: AddfinancialechallverificationComponent },
  { path: 'view', component: ViewfinancialechallverificationComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FinancialechallverificationRoutingModule { }
