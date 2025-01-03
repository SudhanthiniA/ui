import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PaymentoverviewComponent } from './paymentoverview.component';
import { ViewComponent } from './view/view.component';
import { DetailviewComponent } from './detailview/detailview.component';


const routes: Routes = [
  {
    path: 'list',
    component: PaymentoverviewComponent
  },  
  {
    path: 'view',
    component: ViewComponent
  },
  {
    path: 'detailview',
    component: DetailviewComponent
  }
  
 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PaymentoverviewRoutingModule { }
