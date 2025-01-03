import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DispatchComponent } from './dispatch.component';
import { ViewdispatchComponent } from './viewdispatch/viewdispatch.component';
import { EditdispatchComponent } from './editdispatch/editdispatch.component';

const routes: Routes = [
  {
    path: 'list',
    component: DispatchComponent
  },
  {
    path: 'view',
    component: ViewdispatchComponent
  },
  {
    path: 'edit',
    component: EditdispatchComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DispatchRoutingModule { }
