import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CorporationComponent } from './corporation.component';
import { AddCorporationComponent } from './add-corporation/add-corporation.component';
import { ViewCorporationComponent } from './view-corporation/view-corporation.component';
const routes: Routes = [
  {
    path: 'list',
    component: CorporationComponent
  },
  {
    path: 'add',
    component: AddCorporationComponent
  },
  {
    path: 'edit/:id',
    component: AddCorporationComponent
  },
  {
    path: 'view/:id',
    component: ViewCorporationComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CorporationRoutingModule { }
