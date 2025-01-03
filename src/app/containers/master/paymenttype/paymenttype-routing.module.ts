import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PaymenttypeComponent } from './paymenttype.component';
import { AddpaymenttypeComponent } from './addpaymenttype/addpaymenttype.component';
import { ViewpaymenttypeComponent } from './viewpaymenttype/viewpaymenttype.component';

const routes: Routes = [
  { path: 'list', component: PaymenttypeComponent },
  { path: 'add', component: AddpaymenttypeComponent },
  { path: 'view', component: ViewpaymenttypeComponent }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PaymenttypeRoutingModule { }
