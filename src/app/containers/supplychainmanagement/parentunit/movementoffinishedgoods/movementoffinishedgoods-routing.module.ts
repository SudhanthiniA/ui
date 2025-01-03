import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MovementoffinishedgoodsComponent } from './movementoffinishedgoods.component';

import { AddComponent } from './add/add.component';
import { ViewComponent } from './view/view.component';
import { PaymentComponent } from './payment/payment.component';

const routes: Routes = [{ path:'list', component: MovementoffinishedgoodsComponent },
                        { path:'add', component: AddComponent},
                        { path:'view', component: ViewComponent},
                        { path:'payment', component: PaymentComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MovementoffinishedgoodsRoutingModule { }
