import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IndustryoutsidestateComponent } from './industryoutsidestate.component';

const routes: Routes = [
  {
    path : 'list',
    component : IndustryoutsidestateComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class IndustryoutsidestateRoutingModule { }
