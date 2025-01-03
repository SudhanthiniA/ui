import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BondwiseregistrationComponent } from './bondwiseregistration.component';

const routes: Routes = [
  {
    path : 'list',
    component : BondwiseregistrationComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BondwiseregistrationRoutingModule { }
