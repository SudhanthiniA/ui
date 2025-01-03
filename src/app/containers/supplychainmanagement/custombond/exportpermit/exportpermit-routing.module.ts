import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ExportpermitComponent } from './exportpermit.component';
import { AddexportpermitComponent } from './addexportpermit/addexportpermit.component';
import { ViewexportpermitComponent } from './viewexportpermit/viewexportpermit.component';
import { PaymentscreenComponent } from './paymentscreen/paymentscreen.component';

const routes: Routes = [
  {
    path: 'list',
    component: ExportpermitComponent
  },
  {
    path: 'add',
    component: AddexportpermitComponent
  },
  {
    path: 'view',
    component: ViewexportpermitComponent
  },
  {
    path: 'payment',
    component: PaymentscreenComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ExportpermitRoutingModule { }
