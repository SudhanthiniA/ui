import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AccidentalrequestComponent } from './accidentalrequest.component';
import { AddaccidentalrequestComponent } from './addaccidentalrequest/addaccidentalrequest.component';
import { ViewaccidentalrequestComponent } from './viewaccidentalrequest/viewaccidentalrequest.component';

const routes: Routes = [
  {
    path: 'list',
    component: AccidentalrequestComponent
  },
  {
    path: 'add',
    component: AddaccidentalrequestComponent
  },
  {
    path: 'view',
    component: ViewaccidentalrequestComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AccidentalrequestRoutingModule { }
