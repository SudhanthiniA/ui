import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TypeofuserComponent } from './typeofuser.component';

const routes: Routes = [
  { path: 'add', component: TypeofuserComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TypeofuserRoutingModule { }
