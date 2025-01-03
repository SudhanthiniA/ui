import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HelpdeskprofileComponent } from './helpdeskprofile.component';


const routes: Routes = [
  {
    path : 'view',
    component : HelpdeskprofileComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HelpdeskprofileRoutingModule { }
