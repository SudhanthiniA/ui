import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Tankconversionreport2Component } from './tankconversionreport2.component';

const routes: Routes = [
  {
    path : 'list',
    component : Tankconversionreport2Component
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Tankconversionreport2RoutingModule { }
