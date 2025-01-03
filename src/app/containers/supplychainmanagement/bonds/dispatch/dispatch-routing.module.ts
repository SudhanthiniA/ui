import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DispatchComponent } from './dispatch.component';
import { AddeditdispatchComponent } from './addeditdispatch/addeditdispatch.component';
import { ViewdispatchComponent } from './viewdispatch/viewdispatch.component';

const routes: Routes = [
  {
    path : 'list',
    component : DispatchComponent
  },
  {
    path : 'add',
    component : AddeditdispatchComponent
  },
  {
    path : 'view/:Id',
    component : ViewdispatchComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DispatchRoutingModule { }
