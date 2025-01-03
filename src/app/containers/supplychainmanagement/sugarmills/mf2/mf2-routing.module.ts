import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Addeditmf9Component } from './addeditmf9/addeditmf9.component';

import { Mf2Component } from './mf2.component';
import { Viewmf9Component } from './viewmf9/viewmf9.component';
import { Previewmf9Component } from './previewmf9/previewmf9.component';

const routes: Routes = [
  { path: 'list', component: Mf2Component },
  { path: 'add', component: Addeditmf9Component },
  {
    path: 'view/:Id',
    component: Viewmf9Component
  },
  {
    path: 'view',
    component: Viewmf9Component
  },
  {
    path: 'preview',
    component: Previewmf9Component
  },
  {
    path: 'edit/:Id',
    component: Addeditmf9Component
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Mf9RoutingModule { }
