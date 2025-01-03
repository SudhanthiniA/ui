import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DesignationComponent } from './designation.component';
import { ViewdesignationComponent } from './viewdesignation/viewdesignation.component';

const routes: Routes = [
  {
    path : 'list',
    component : DesignationComponent
  },
  {
    path : 'view',
    component : ViewdesignationComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DesignationRoutingModule { }
