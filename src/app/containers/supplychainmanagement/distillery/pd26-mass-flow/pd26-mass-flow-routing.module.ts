import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Pd26MassFlowComponent } from './pd26-mass-flow.component';
import { AddComponent } from './add/add.component';
import { ViewComponent } from './view/view.component';
import { AcknowledgementComponent } from './acknowledgement/acknowledgement.component';

const routes: Routes = [
  { path: 'list', component: Pd26MassFlowComponent },
{ path: 'add', component: AddComponent },
{ path: 'view', component: ViewComponent },
{ path: 'ack', component: AcknowledgementComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Pd26MassFlowRoutingModule { }
