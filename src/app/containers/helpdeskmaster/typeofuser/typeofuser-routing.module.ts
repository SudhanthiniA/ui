import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TypeofuserComponent } from './typeofuser.component';
import { AddtypeofuserComponent } from './addtypeofuser/addtypeofuser.component';
import { ViewtypeofuserComponent } from './viewtypeofuser/viewtypeofuser.component';

const routes: Routes = [
  {
    path: 'list',
    component: TypeofuserComponent
  },
  {
    path: 'add',
    component: AddtypeofuserComponent
  },
  {
    path: 'view',
    component: ViewtypeofuserComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TypeofuserRoutingModule { }
