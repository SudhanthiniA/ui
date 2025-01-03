import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OrderrequestfromwarehouseComponent } from './orderrequestfromwarehouse.component';
import { VieworderrequestfromwarehouseComponent } from './vieworderrequestfromwarehouse/vieworderrequestfromwarehouse.component';


const routes: Routes = [
  {
    path : 'list',
    component : OrderrequestfromwarehouseComponent
  },
  {
    path : 'view/:Id',
    component : VieworderrequestfromwarehouseComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OrderrequestfromwarehouseRoutingModule { }
