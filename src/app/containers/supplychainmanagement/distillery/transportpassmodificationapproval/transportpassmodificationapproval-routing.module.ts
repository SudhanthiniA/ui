import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TransportpassmodificationapprovalComponent } from './transportpassmodificationapproval.component';
import { ViewComponent } from './view/view.component';

const routes: Routes = [
  {
    path : 'list',
    component : TransportpassmodificationapprovalComponent
  },
  {
    path: 'view',
    component : ViewComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TransportpassmodificationapprovalRoutingModule { }
