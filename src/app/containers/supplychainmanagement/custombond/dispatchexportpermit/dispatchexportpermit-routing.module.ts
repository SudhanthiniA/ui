import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DispatchexportpermitComponent } from './dispatchexportpermit.component';
import { EditComponent } from './edit/edit.component';
import { ViewComponent } from './view/view.component';
import { PaymentComponent } from './payment/payment.component';


const routes: Routes = [
  { path: 'list', component: DispatchexportpermitComponent },
  { path: 'edit', component: EditComponent },
  { path: 'view', component: ViewComponent },
  { path: 'payment', component: PaymentComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DispatchexportpermitRoutingModule { }
