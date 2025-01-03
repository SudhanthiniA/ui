import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { StockinealapprovalComponent } from './stockinealapproval.component';
import { ViewComponent } from './view/view.component';
const routes: Routes = [ 
  
  {
    path : 'view',
    component : ViewComponent
  },
  {
    path : 'list',
    component : StockinealapprovalComponent
  } 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StockinealapprovalRoutingModule { }
