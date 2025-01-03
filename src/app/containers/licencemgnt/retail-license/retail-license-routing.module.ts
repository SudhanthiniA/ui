import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RetailLandingComponent } from './retail-landing/retail-landing.component';
import { LicenseFormComponent } from './license-form/license-form.component';

const routes: Routes = [
  {
    path: '',
    component: RetailLandingComponent
  },
  {
    path: ':screenSubType', // fl4a
    component: LicenseFormComponent
  },
  {
    path: ':screenSubType/:applicationNumber', // fl4a
    component: LicenseFormComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RetailLicenseRoutingModule { }
