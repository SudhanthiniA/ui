import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TransferofdistillationComponent } from './transferofdistillation.component';
import { AddedittransferofdistillationComponent } from './addedittransferofdistillation/addedittransferofdistillation.component';
import { ViewtransferofdistillationComponent } from './viewtransferofdistillation/viewtransferofdistillation.component';


const routes: Routes = [
  {
    path : 'list',
    component : TransferofdistillationComponent
  },
  {
    path : 'add',
    component : AddedittransferofdistillationComponent
  },
  {
    path: 'edit/:id',
    component: AddedittransferofdistillationComponent
  },
  {
    path: 'view/:id',
    component: ViewtransferofdistillationComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TransferofdistillationRoutingModule { }
