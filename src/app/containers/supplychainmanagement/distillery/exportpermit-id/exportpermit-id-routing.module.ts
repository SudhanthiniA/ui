import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ExportpermitIdComponent } from './exportpermit-id.component';
import { AddComponent } from './add/add.component';
import { ViewComponent } from './view/view.component';
import { PaymentscreenComponent } from './paymentscreen/paymentscreen.component';

const routes: Routes = [
  { path: 'list', component: ExportpermitIdComponent},
  {path: 'add', component: AddComponent},
  {path: 'view', component: ViewComponent},
  {path: 'payment', component: PaymentscreenComponent}


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ExportpermitIdRoutingModule { }
