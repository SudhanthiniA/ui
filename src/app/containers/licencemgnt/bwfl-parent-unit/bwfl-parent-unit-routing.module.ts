import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BwflParentFormComponent } from './bwfl-parent-form/bwfl-parent-form.component';
import { BwflParentViewComponent } from './bwfl-parent-view/bwfl-parent-view.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'BWFL',
    pathMatch: 'full'
  },
  {
    path: ':screenSubType', // withinupregistration
    component: BwflParentFormComponent
  },
  {
    path: ':screenSubType', // withinupregistration
    component: BwflParentFormComponent
  },
  {
    path: ':screenSubType/:applicationNumber', // withinupregistration
    component: BwflParentFormComponent
  },
  {
    path: ':screenSubType/:applicationNumber/view',
    component: BwflParentViewComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BwflParentUnitRoutingModule { }
