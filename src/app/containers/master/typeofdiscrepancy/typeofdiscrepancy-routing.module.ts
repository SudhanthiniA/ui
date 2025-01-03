import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TypeofdiscrepancyComponent } from './typeofdiscrepancy.component';
import { AddComponent } from './add/add.component';
import { ViewComponent } from './view/view.component';

const routes: Routes = [
  { path: 'list', component: TypeofdiscrepancyComponent },
  { path: 'add', component: AddComponent },
  // { path: 'edit/:id', component: AddeditTypeofdiscrepancyComponent },
  { path: 'view', component: ViewComponent }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TypeofdiscrepancyRoutingModule { }
