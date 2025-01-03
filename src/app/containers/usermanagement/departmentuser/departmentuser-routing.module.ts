import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { DepartmentuserComponent } from './departmentuser.component';
import { AddComponent } from './add/add.component';


const routes: Routes = [
  {
    path : 'list',
    component : DepartmentuserComponent
  },
  {
    path : 'add',
    component : AddComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DepartmentuserRoutingModule { }
