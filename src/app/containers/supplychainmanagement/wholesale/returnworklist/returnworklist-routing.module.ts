import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ReturnworklistComponent } from './returnworklist.component';
import { AddreturnworklistComponent } from './addreturnworklist/addreturnworklist.component';
import { ViewreturnworklistComponent } from './viewreturnworklist/viewreturnworklist.component';

const routes: Routes = [
  {
    path: 'list',
    component: ReturnworklistComponent
  },
  {
    path: 'add',
    component: AddreturnworklistComponent
  },
  {
    path: 'add/:Id',
    component: AddreturnworklistComponent
  },
  {
    path: 'view/:Id',
    component: ViewreturnworklistComponent
  },
  {
    path: 'view',
    component: ViewreturnworklistComponent
  },
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReturnworklistRoutingModule { }
