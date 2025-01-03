import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddbrandregistrationComponent } from './addbrandregistration/addbrandregistration.component';
import { ViewbrandregistrationComponent } from './viewbrandregistration/viewbrandregistration.component';

import { BrandregistrationComponent } from './brandregistration.component';

const routes: Routes = [
  {
    path : 'list',
    component : BrandregistrationComponent
  },
  {
    path : 'add',
    component : AddbrandregistrationComponent
  },
  {
    path : 'view',
    component : ViewbrandregistrationComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BrandregistrationRoutingModule { }
