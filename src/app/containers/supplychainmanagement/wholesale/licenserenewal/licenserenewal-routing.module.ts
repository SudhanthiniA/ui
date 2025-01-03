import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LicenserenewalComponent } from './licenserenewal.component';
import { AddlicenseComponent } from './addlicense/addlicense.component';
import { ViewlicenserenewalComponent } from './viewlicenserenewal/viewlicenserenewal.component';

const routes: Routes = [
  { path: 'list', component: LicenserenewalComponent },

  {
    path: 'add',
    component: AddlicenseComponent
  },
  {
    path: 'add/:Id',
    component: AddlicenseComponent
  },
  {
    path: 'view/:Id',
    component: ViewlicenserenewalComponent
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LicenserenewalRoutingModule { }
