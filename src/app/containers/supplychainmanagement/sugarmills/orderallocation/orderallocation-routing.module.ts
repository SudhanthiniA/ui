import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OrderallocationComponent } from './orderallocation.component';
import { VieworderallocationComponent } from './vieworderallocation/vieworderallocation.component';
import { AddeditorderallocationComponent } from './addeditorderallocation/addeditorderallocation.component';


const routes: Routes = [
  {
    path : 'list',
    component : OrderallocationComponent
  },
  {
    path : 'view/:Id',
    component : VieworderallocationComponent
  },
  {
    path : 'edit/:Id',
    component : AddeditorderallocationComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OrderallocationRoutingModule { }
