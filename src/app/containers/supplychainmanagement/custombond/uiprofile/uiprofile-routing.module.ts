import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UiprofileComponent } from './uiprofile.component';

const routes: Routes = [ 
  {
    path : '',
    component : UiprofileComponent
  }
];  

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UiprofileRoutingModule { }
