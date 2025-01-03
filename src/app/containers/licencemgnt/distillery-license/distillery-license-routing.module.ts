import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DistilleryLandingComponent } from './distillery-landing/distillery-landing.component';
import { DistilleryLicenseFormComponent } from './distillery-license-form/distillery-license-form.component';
import { DistilleryLicenseViewComponent } from './distillery-license-view/distillery-license-view.component';

const routes: Routes = [
  {
    path: '',
    component: DistilleryLandingComponent
  },
  {
    path: ':screenSubType', // fl4a
    component: DistilleryLicenseFormComponent
  },
  {
    path: ':screenSubType/:applicationNumber', // fl4a
    component: DistilleryLicenseFormComponent
  },
  {
    path: ':screenSubType/:applicationNumber/view',
    component: DistilleryLicenseViewComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DistilleryLicenseRoutingModule { }
