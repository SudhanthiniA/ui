import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MasterwareprofileComponent } from './masterwareprofile.component';
import { ViewmasterwareprofileComponent } from './viewmasterwareprofile/viewmasterwareprofile.component';

const routes: Routes = [
  { path: 'list', component: MasterwareprofileComponent },
  { path: 'view', component: ViewmasterwareprofileComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MasterwareprofileRoutingModule { }
