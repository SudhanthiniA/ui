import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FinalgatepassComponent } from './finalgatepass.component';
import { AddfinalgatepassComponent } from './addfinalgatepass/addfinalgatepass.component';
import { ViewfinalgatepassComponent } from './viewfinalgatepass/viewfinalgatepass.component';

const routes: Routes = [
  { path: 'list', component: FinalgatepassComponent },
  { path: 'add', component: AddfinalgatepassComponent },
  { path: 'view', component: ViewfinalgatepassComponent }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FinalgatepassRoutingModule { }
