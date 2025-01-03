import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ExecutiveviewprofileComponent } from './executiveviewprofile.component';

const routes: Routes = [
  { path: 'view', component: ExecutiveviewprofileComponent }
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ExecutiveviewprofileRoutingModule { }
