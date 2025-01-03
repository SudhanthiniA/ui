import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EventbarLandingComponent } from './eventbar-landing/eventbar-landing.component';
import { EventbarLicenseFormComponent } from './eventbar-license-form/eventbar-license-form.component';
import { EventbarLicenseViewComponent } from './eventbar-license-view/eventbar-license-view.component';

const routes: Routes = [
  {
    path: '',
    component: EventbarLandingComponent
  },
  {
    path: ':screenSubType',
    component: EventbarLicenseFormComponent
  },
  {
    path: ':screenSubType/:applicationNumber',
    component: EventbarLicenseFormComponent
  },
  {
    path: ':screenSubType/:applicationNumber/view',
    component: EventbarLicenseViewComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EventbarLicenseRoutingModule { }
