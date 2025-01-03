import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BondregistrationComponent } from './bondregistration.component';
import { AddbondregistrationComponent } from './addbondregistration/addbondregistration.component';
import { ViewbondregistrationComponent } from './viewbondregistration/viewbondregistration.component';

const routes: Routes = [
  {
    path : 'list',
    component : BondregistrationComponent
  },
  {
    path : 'add',
    component : AddbondregistrationComponent
  },
  {
    path : 'view',
    component : ViewbondregistrationComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BondregistrationRoutingModule { }
