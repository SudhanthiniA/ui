import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { MassflowapplicantComponent } from './massflowapplicant.component';
import { AddmassflowapplicantComponent } from './addmassflowapplicant/addmassflowapplicant.component';
import { ViewmassflowapplicantComponent } from './viewmassflowapplicant/viewmassflowapplicant.component';

const routes: Routes = [
  {
    path: 'list',
    component: MassflowapplicantComponent
  },
  {
    path: 'add',
    component: AddmassflowapplicantComponent
  },

  {
    path: 'view',
    component: ViewmassflowapplicantComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MassflowapplicantRoutingModule { }
