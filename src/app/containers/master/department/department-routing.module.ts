import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DepartmentComponent } from './department.component';
import { AddDepartmentComponent } from './add-department/add-department.component';
import { ViewDepartmentComponent } from './view-department/view-department.component';
const routes: Routes = [
  { path: 'list', component: DepartmentComponent },
  { path: 'add', component: AddDepartmentComponent },
  { path: 'view', component: ViewDepartmentComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DepartmentRoutingModule { }
