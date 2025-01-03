import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Tankconversionreport1Component } from './tankconversionreport1.component';

const routes: Routes = [
  {
    path : 'list',
    component : Tankconversionreport1Component
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Tankconversionreport1RoutingModule { }
