import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { BrandlabeloverviewComponent } from './brandlabeloverview.component';
import { ViewbrandlabeloverviewComponent } from './viewbrandlabeloverview/viewbrandlabeloverview.component';

const routes: Routes = [ 
  {
    path : 'list',
    component : BrandlabeloverviewComponent
  },
  {
    path : 'view',
    component : ViewbrandlabeloverviewComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BrandlabeloverviewRoutingModule { }
