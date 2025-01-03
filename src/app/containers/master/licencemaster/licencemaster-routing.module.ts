import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LicencemasterComponent } from './licencemaster.component';
import { AddlicenceComponent } from './addlicence/addlicence.component';
import { ViewlicenceComponent } from './viewlicence/viewlicence.component';


const routes: Routes = [
  {
    path: 'list',
    component: LicencemasterComponent
  },
  {
    path: 'add',
    component: AddlicenceComponent
  },
  {
    path: 'edit/:Id',
    component: AddlicenceComponent
  },
  {
    path: 'view/:Id',
    component: ViewlicenceComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LicencemasterRoutingModule { }
