import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// import { Fl2Component } from './fl2/fl2.component';
import { WholesaleLandingComponent } from './wholesale-landing/wholesale-landing.component';
import { WholesaleLicenseFormComponent } from './wholesale-license-form/wholesale-license-form.component';
import { WholesaleLicenseViewComponent } from './wholesale-license-view/wholesale-license-view.component';
import { AddComponent } from './add/add.component';
import { ViewComponent } from './view/view.component';

const routes: Routes = [
  {
    path : '',
    component: WholesaleLandingComponent
  },
  {
    path : 'fl2',
    // component: Fl2Component
    loadChildren: () => import('./fl2/fl2.module').then(m => m.Fl2Module)
  },
  {
    path : 'fl2-a',
    // component: Id3Component,
    loadChildren: () => import('./fl2-a/fl2.module').then(m => m.Fl2Module)
  },
  {
    path : 'sugarmilloutsideup',
    loadChildren: () => import('./sugarmilloutsideup/sugarmilloutsideup.module').then(m => m.SugarmilloutsideupModule)
  },
  {
    path : 'id3',
    // component: Id3Component,
    loadChildren: () => import('./id3/id3.module').then(m => m.Id3Module)
  },
  // {
  //   path: ':screenSubType', // withinupregistration
  //   component: WholesaleLicenseFormComponent
  // },
  // {
  //   path: ':screenSubType/:applicationNumber', // withinupregistration
  //   component: WholesaleLicenseFormComponent
  // },
  // {
  //   path: ':screenSubType/:applicationNumber/view',
  //   component: WholesaleLicenseViewComponent
  // },
  {
    path: 'sugarmilladd', // withinupregistration
    component: AddComponent
  },
  {
    path: 'sugarmillview',
    component: ViewComponent
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WholesaleRoutingModule { }
