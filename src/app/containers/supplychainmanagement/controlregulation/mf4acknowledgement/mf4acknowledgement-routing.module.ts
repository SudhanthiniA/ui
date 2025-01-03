import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Mf4acknowledgementComponent } from './mf4acknowledgement.component';

const routes: Routes = [
  {path: 'add', component: Mf4acknowledgementComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Mf4acknowledgementRoutingModule { }
