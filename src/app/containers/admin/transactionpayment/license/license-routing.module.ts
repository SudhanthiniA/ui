import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LicenseComponent } from './license.component';
import { ViewComponent } from './view/view.component';


const routes: Routes = [
  {
    path: 'list',
    component: LicenseComponent
  },
  {
    path: 'view',
    component: ViewComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LicenseRoutingModule { }
