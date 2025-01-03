import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SalesledgerComponent } from './salesledger.component';
import { ViewsalesledgerComponent } from './viewsalesledger/viewsalesledger.component';
import { AddsalesledgerComponent } from './addsalesledger/addsalesledger.component';

const routes: Routes = [
  {
    path: 'list',
    component: SalesledgerComponent
  },
  {
    path: 'add',
    component: AddsalesledgerComponent
  },
  {
    path: 'view/:id',
    component: ViewsalesledgerComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SalesledgerRoutingModule { }
