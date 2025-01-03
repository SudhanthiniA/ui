import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MunicipalityComponent } from './municipality.component';
import { AddMunicipalityComponent } from './add-municipality/add-municipality.component';
import { ViewMunicipalityComponent } from './view-municipality/view-municipality.component';

const routes: Routes = [
  {
    path: 'list',
    component: MunicipalityComponent
  },
  {
    path: 'add',
    component: AddMunicipalityComponent
  },
  {
    path: 'edit/:id',
    component: AddMunicipalityComponent
  },
  {
    path: 'view/:id',
    component: ViewMunicipalityComponent
  }
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MunicipalityRoutingModule { }
