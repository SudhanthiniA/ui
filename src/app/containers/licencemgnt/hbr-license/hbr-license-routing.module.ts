import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HBRLandingComponent } from './hbr-landing/hbr-landing.component';
// import { HbrLicenseFormComponent } from './hbr-license-form/hbr-license-form.component';
// import { HbrLicenseViewComponent } from './hbr-license-view/hbr-license-view.component';
import { AddhbrlicenseComponent } from './addhbrlicense/addhbrlicense.component';
import { ViewhbrlicenseComponent } from './viewhbrlicense/viewhbrlicense.component';
import { Fl6Component } from './fl6/fl6.component';
import { Fl7Component } from './fl7/fl7.component';
import { Fl7aComponent } from './fl7a/fl7a.component';
import { Fla1Component } from './fla1/fla1.component';

const routes: Routes = [
  {
    path: '',
    component: HBRLandingComponent
  },
  // {
  //   path: ':screenSubType', // fl4a
  //   component: HbrLicenseFormComponent
  // },
  // {
  //   path: ':screenSubType/:applicationNumber', // fl4a
  //   component: HbrLicenseFormComponent
  // },
  // {
  //   path: ':screenSubType/:applicationNumber/view',
  //   component: HbrLicenseViewComponent
  // },
  {
    path: 'hbr/add',
    component: AddhbrlicenseComponent
  },
  {
    path: 'hbr/view',
    component: ViewhbrlicenseComponent
  },
  {
    path: 'fl6',
    loadChildren: () => import('./fl6/fl6.module').then(m => m.Fl6Module)
  },
  {
    path: 'fl7',
    component: Fl7Component
  },
  {
    path: 'fl7a',
    component: Fl7aComponent
  },
  // {
  //   path: 'fl8',
  //   component: Fl8Component
  // },
  {
    path: 'fla1',
    component: Fla1Component
  },
  {
    path: 'fl8',
    loadChildren: () => import('./fl8/fl8.module').then(m => m.Fl8Module)
  },
  {
    path: 'fla1',
    loadChildren: () => import('./fla1/fla1.module').then(m => m.Fla1Module)
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HBRLicenseRoutingModule { }
