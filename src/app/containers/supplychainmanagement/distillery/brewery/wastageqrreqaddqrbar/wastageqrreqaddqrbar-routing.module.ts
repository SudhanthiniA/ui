import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WastageqrreqaddqrbarComponent } from './wastageqrreqaddqrbar.component';
import { AddComponent } from './add/add.component';
import { ViewComponent } from './view/view.component';
import { PaymentscreenComponent } from './paymentscreen/paymentscreen.component';

const routes: Routes = [
  {
    path : 'add',
    component : AddComponent
  },
  {
    path : 'payment',
    component : PaymentscreenComponent
  },
  {
    path : 'view',
    component : ViewComponent
  },
  {
    path : 'list',
    component : WastageqrreqaddqrbarComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WastageqrreqaddqrbarRoutingModule { }
