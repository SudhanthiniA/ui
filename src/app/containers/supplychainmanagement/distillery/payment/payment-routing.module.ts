import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BottlingPlanComponent } from './bottling-plan/bottling-plan.component';


import { AddComponent } from './add/add.component';
import { ViewComponent } from './view/view.component';
import { PaymentComponent } from './payment.component';


const routes: Routes = [
  { path: 'list', component: PaymentComponent },
{ path: 'add', component: AddComponent },
{ path: 'view', component: ViewComponent },
{ path: 'bottlingplan', component: BottlingPlanComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PaymentRoutingModule { }
