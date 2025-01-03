import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { StockmovementComponent } from './stockmovement.component';

const routes: Routes = [
  { path: 'list', component: StockmovementComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StockmovementRoutingModule { }
