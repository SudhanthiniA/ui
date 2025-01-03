import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BwflLicenseViewComponent } from './bwfl-license-view/bwfl-license-view.component';
import { BwflLandingComponent } from './bwfl-landing/bwfl-landing.component';
import { BwflLicenseFormComponent } from './bwfl-license-form/bwfl-license-form.component';
import { Bwfl2a2b2c2dComponent } from './bwfl2a2b2c2d/bwfl2a2b2c2d.component'; 

const routes: Routes = [
  {
    path: '',
    component: BwflLandingComponent
  },
  {
    path: ':screenSubType',
    component: BwflLicenseFormComponent
  },
  {
    path: ':screenSubType/:applicationNumber',
    component: BwflLicenseFormComponent
  },
  {
    path: ':screenSubType/:applicationNumber/view',
    component: BwflLicenseViewComponent
  },
  {
    path: 'bwfl2a2b2c2d', loadChildren: () => import('./bwfl2a2b2c2d/bwfl2a2b2c2d.module').then(m => m.Bwfl2a2b2c2dModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BwflRoutingModule { }
