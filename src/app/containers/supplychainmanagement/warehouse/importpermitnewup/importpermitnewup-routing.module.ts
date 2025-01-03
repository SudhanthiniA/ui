import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ImportpermitnewupComponent } from './importpermitnewup.component';
import { AddimportpermitnewupComponent } from './addimportpermitnewup/addimportpermitnewup.component';
import { ViewimportpermitnewupComponent } from './viewimportpermitnewup/viewimportpermitnewup.component';
import { ImportpermitnewupsuccComponent } from './importpermitnewupsucc/importpermitnewupsucc.component';
import { PaymentComponent } from './payment/payment.component';

const routes: Routes = [
  { path: 'list', component: ImportpermitnewupComponent },
  { path: 'add', component: AddimportpermitnewupComponent },
  { path: 'view', component: ViewimportpermitnewupComponent },
  { path: 'success', component: ImportpermitnewupsuccComponent },
  { path: 'payment', component: PaymentComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ImportpermitnewupRoutingModule { }
