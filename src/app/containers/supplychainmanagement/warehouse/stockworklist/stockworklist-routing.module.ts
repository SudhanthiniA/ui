import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { StockworklistComponent } from './stockworklist.component';

const routes: Routes = [
  {
    path: 'list',
    component: StockworklistComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StockworklistRoutingModule { }
