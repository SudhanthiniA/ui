import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BrandlabeloverviewwhComponent } from './brandlabeloverviewwh.component';
import { ViewbrandlabeloverviewwhComponent } from './viewbrandlabeloverviewwh/viewbrandlabeloverviewwh.component';

const routes: Routes = [ 
  {
    path : 'list',
    component : BrandlabeloverviewwhComponent
  },
  {
    path : 'view',
    component : ViewbrandlabeloverviewwhComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BrandlabeloverviewwhRoutingModule { }
