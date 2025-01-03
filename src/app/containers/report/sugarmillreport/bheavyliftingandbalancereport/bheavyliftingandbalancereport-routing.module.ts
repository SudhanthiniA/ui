import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BheavyliftingandbalancereportComponent } from './bheavyliftingandbalancereport.component';

const routes: Routes = [
  {
    path : 'list',
    component : BheavyliftingandbalancereportComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BheavyliftingandbalancereportRoutingModule { }
