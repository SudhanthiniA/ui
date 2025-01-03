import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LicensedomainComponent } from './licensedomain.component';
import { ViewlicensedomainComponent } from './viewlicensedomain/viewlicensedomain.component';

const routes: Routes = [
  {
    path : 'list',
    component : LicensedomainComponent
  },
  {
    path : 'view',
    component : ViewlicensedomainComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LicensedomainRoutingModule { }
