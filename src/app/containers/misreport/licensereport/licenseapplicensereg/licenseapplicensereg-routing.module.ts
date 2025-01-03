import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LicenseapplicenseregComponent } from './licenseapplicensereg.component';
import { ViewComponent } from './view/view.component';

const routes: Routes = [
  { path: 'list', component: LicenseapplicenseregComponent },
  { path: 'view', component: ViewComponent },
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LicenseapplicenseregRoutingModule { }
