import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SugarmillLicenseComponent } from './sugarmill-license.component';
import { SugarmillLicenseFormComponent } from './sugarmill-license-form/sugarmill-license-form.component';
import { AcknowledgementComponent } from './acknowledgement/acknowledgement.component';

const routes: Routes = [
  {
    path : '',
    component : SugarmillLicenseComponent
  },
  {
    path: 'acknowledgement/:applicationNumber', // withinupregistration
    component: AcknowledgementComponent
  },
  {
    path: ':screenSubType', // withinupregistration
    component: SugarmillLicenseFormComponent
  },
  {
    path: ':screenSubType/:applicationNumber', // withinupregistration
    component: SugarmillLicenseFormComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SugarmillLicenseRoutingModule { }
