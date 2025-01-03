import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BhangComponent } from './bhang.component';
import { BhangLicenseFormComponent } from './bhang-license-form/bhang-license-form.component';

const routes: Routes = [
  {
    path : '',
    component : BhangComponent
  },
  {
    path: 'cl7',
    loadChildren: () => import('./cl7/cl7.module').then(m => m.Cl7Module)
  },
  {
    path: 'cl8',
    loadChildren: () => import('./cl8/cl8.module').then(m => m.Cl8Module)
  },
  {
    path: 'cl9',
    loadChildren: () => import('./cl9/cl9.module').then(m => m.Cl9Module)
  },
  {
    path: 'cl10',
    loadChildren: () => import('./cl10/cl10.module').then(m => m.Cl10Module)
  },
  {
    path: 'cl10a',
    loadChildren: () => import('./cl10a/cl10a.module').then(m => m.Cl10aModule)
  },
  {
    path: 'cl11',
    loadChildren: () => import('./cl11/cl11.module').then(m => m.Cl11Module)
  },
  {
    path: 'cl12',
    loadChildren: () => import('./cl12/cl12.module').then(m => m.Cl12Module)
  },
  {
    path: 'st1',
    loadChildren: () => import('./st1/st1.module').then(m => m.St1Module)
  },
  {
    path: 'st2',
    loadChildren: () => import('./st2/st2.module').then(m => m.St2Module)
  },
  {
    path: 'st3',
    loadChildren: () => import('./st3/st3.module').then(m => m.St3Module)
  },
  {
    path: 'st4',
    loadChildren: () => import('./st4/st4.module').then(m => m.St4Module)
  },
  {
    path: 'id3',
    loadChildren: () => import('./id3/id3.module').then(m => m.Id3Module)
  },
  {
    path: 'hm1',
    loadChildren: () => import('./hm1/hm1.module').then(m => m.Hm1Module)
  },
  // {
  //   path: ':screenSubType', // fl4a
  //   component: BhangLicenseFormComponent
  // },
  // {
  //   path: ':screenSubType/:applicationNumber', // fl4a
  //   component: BhangLicenseFormComponent
  // },
  {
    path: 'id14a',
    loadChildren: () => import('./id14a/id14a.module').then(m => m.Id14aModule)
  },
  {
    path: 'id14b',
    loadChildren: () => import('./id14b/id14b.module').then(m => m.Id14bModule)
  },
  {
    path: 'id15',
    loadChildren: () => import('./id15/id15.module').then(m => m.Id15Module)
  },
  {
    path: 'id16',
    loadChildren: () => import('./id16/id16.module').then(m => m.Id16Module)
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BhangRoutingModule { }
