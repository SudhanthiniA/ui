import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DistilleryoutsidestateComponent } from './distilleryoutsidestate.component';

const routes: Routes = [
  {
    path : 'list',
    component : DistilleryoutsidestateComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DistilleryoutsidestateRoutingModule { }
