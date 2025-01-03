import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Pd18RegisterMassFlowComponent } from './pd18-register-mass-flow.component';
import { AddComponent } from './add/add.component';
import { ViewComponent } from './view/view.component';

const routes: Routes = [
  { path: 'list', component: Pd18RegisterMassFlowComponent },
{
  path : 'view',
  component : ViewComponent
},
{
  path : 'add',
  component : AddComponent
}
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Pd18RegisterMassFlowRoutingModule { }
