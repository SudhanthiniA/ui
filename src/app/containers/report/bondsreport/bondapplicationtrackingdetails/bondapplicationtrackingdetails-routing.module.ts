import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BondapplicationtrackingdetailsComponent } from './bondapplicationtrackingdetails.component';

const routes: Routes = [
  {
    path : 'list',
    component : BondapplicationtrackingdetailsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BondapplicationtrackingdetailsRoutingModule { }
