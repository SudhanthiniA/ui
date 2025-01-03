import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LicenseacknowledgementComponent } from './licenseacknowledgement.component';


const routes: Routes = [
  {
    path : 'popup',
    component : LicenseacknowledgementComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LicenseacknowledgementRoutingModule { }
