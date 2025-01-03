import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CheavyliftingandbalancereportComponent } from './cheavyliftingandbalancereport.component';

const routes: Routes = [
  {
    path : 'list',
    component : CheavyliftingandbalancereportComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CheavyliftingandbalancereportRoutingModule { }
