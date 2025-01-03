import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LicensestatusComponent } from './licensestatus.component';


const routes: Routes = [
  {
    path : '',
    component : LicensestatusComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LicensestatusRoutingModule { }
