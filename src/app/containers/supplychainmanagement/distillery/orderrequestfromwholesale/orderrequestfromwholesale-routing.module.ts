import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OrderrequestfromwholesaleComponent } from './orderrequestfromwholesale.component';
import { VieworderrequestfromwholesaleComponent } from './vieworderrequestfromwholesale/vieworderrequestfromwholesale.component';


const routes: Routes = [
  {
    path : 'list',
    component : OrderrequestfromwholesaleComponent
  },
  {
    path : 'view/:Id',
    component : VieworderrequestfromwholesaleComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class OrderrequestfromwholesaleRoutingModule { }
