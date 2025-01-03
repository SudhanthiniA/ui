import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AllotherpenaltiesComponent } from './allotherpenalties.component';
import { AddComponent } from './add/add.component';
import { PaymentComponent } from './payment/payment.component';
import { ViewComponent } from './view/view.component';

const routes: Routes = [
  { path: 'list', component: AllotherpenaltiesComponent },
  { path: 'add', component: AddComponent },
  { path: 'view', component: ViewComponent },
  { path: 'payment', component: PaymentComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AllotherpenaltiesRoutingModule { }
