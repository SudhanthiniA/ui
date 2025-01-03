import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RoleComponent } from './role.component';

import { ViewroleComponent } from './viewrole/viewrole.component';

const routes: Routes = [
  {
    path: 'list',
    component: RoleComponent
  },
  {
    path: 'view',
    component: ViewroleComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RoleRoutingModule { }
