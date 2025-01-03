import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ReceivernewComponent } from './receivernew.component';
import { AddreceivernewComponent } from './addreceivernew/addreceivernew.component';
import { ViewreceivernewComponent } from './viewreceivernew/viewreceivernew.component';

const routes: Routes = [
  {
    path : 'list',
    component : ReceivernewComponent
  },
  {
    path: 'add',
    component : AddreceivernewComponent
  },
  {
    path : 'view',
    component : ViewreceivernewComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReceivernewRoutingModule { }
