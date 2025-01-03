import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UnreservedmolassesreportComponent } from './unreservedmolassesreport.component';

const routes: Routes = [
  {
    path : 'list',
    component : UnreservedmolassesreportComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UnreservedmolassesreportRoutingModule { }
