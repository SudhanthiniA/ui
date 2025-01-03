import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DesignationmanageComponent } from './designationmanage.component';
import { AddeditdesignationmanageComponent } from './addeditdesignationmanage/addeditdesignationmanage.component';
import { ViewdesignationmanageComponent } from './viewdesignationmanage/viewdesignationmanage.component';

const routes: Routes = [
  {
    path : 'list',
    component : DesignationmanageComponent
  },
  {
    path : 'add',
    component : AddeditdesignationmanageComponent
  },
  {
    path : 'edit/:id',
    component : AddeditdesignationmanageComponent
  },
  {
    path : 'view/:id',
    component : ViewdesignationmanageComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DesignationmanageRoutingModule { }
