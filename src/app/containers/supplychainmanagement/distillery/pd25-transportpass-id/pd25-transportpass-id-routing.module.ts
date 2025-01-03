import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddComponent } from './add/add.component';
import { ViewComponent } from './view/view.component';
import { Pd25TransportpassIdComponent } from './pd25-transportpass-id.component';

const routes: Routes = [
  { path: 'list', component: Pd25TransportpassIdComponent },
{ path: 'add', component: AddComponent },
{ path: 'view', component: ViewComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Pd25TransportpassIdRoutingModule { }
