import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NarcoticComponent } from './narcotic.component';

const routes: Routes = [
  // {
  //   path : 'list',
  //   component : NarcoticComponent
  // },
  // {
  // path : 'add',
  // component : AddnarcoticComponent 
  // },
  // {
  //   path : 'view',
  //   component : ViewnarcoticComponent   
  // },
  {
    path: 'narcoticexport',
    loadChildren: () => import('./narcoticexport/narcoticexport.module').then(m => m.NarcoticexportModule)
  },
  {
    path: 'narcoticimport',
    loadChildren: () => import('./narcoticimport/narcoticimport.module').then(m => m.NarcoticimportModule)
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NarcoticRoutingModule { }
