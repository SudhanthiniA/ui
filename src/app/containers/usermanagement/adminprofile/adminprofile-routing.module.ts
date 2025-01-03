import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { AdminprofileComponent } from './adminprofile.component';

const routes: Routes = [
  {
    path : 'view',
    component : AdminprofileComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminprofileRoutingModule { }
