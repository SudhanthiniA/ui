import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LicensetenureComponent } from './licensetenure.component';
import { ViewlicensetenureComponent } from './viewlicensetenure/viewlicensetenure.component';
import { AddlicensetenureComponent } from './addlicensetenure/addlicensetenure.component';

const routes: Routes = [
  { path: 'list', component: LicensetenureComponent },
  { path: 'add', component: AddlicensetenureComponent },
  { path: 'view', component: ViewlicensetenureComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LicensetenureRoutingModule { }
