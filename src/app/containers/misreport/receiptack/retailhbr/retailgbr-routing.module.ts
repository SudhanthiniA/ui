import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RetailgbrComponent } from './retailgbr.component';

const routes: Routes = [
  { path: 'list', component: RetailgbrComponent },
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WholesaleRoutingModule { }
