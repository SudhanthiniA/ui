import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddpasscancellationComponent } from './addpasscancellation/addpasscancellation.component';
import { ViewpasscancellationComponent } from './viewpasscancellation/viewpasscancellation.component';

import { PasscancellationComponent } from './passcancellation.component';

const routes: Routes = [
  {
    path : 'list',
    component : PasscancellationComponent
  },
  {
    path : 'add',
    component : AddpasscancellationComponent
  },
  {
    path : 'view',
    component : ViewpasscancellationComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PasscancellationRoutingModule { }
