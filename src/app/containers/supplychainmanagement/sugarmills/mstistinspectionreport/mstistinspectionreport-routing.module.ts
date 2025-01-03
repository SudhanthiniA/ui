import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MstistinspectionreportComponent } from './mstistinspectionreport.component';
import { AddmstistinspectionComponent } from './addmstistinspection/addmstistinspection.component';
import { ViewmstistinspectionComponent } from './viewmstistinspection/viewmstistinspection.component';

import { PaymentComponent } from './payment/payment.component';
const routes: Routes = [

  { path : 'list', component : MstistinspectionreportComponent },
  { path : 'add', component : AddmstistinspectionComponent },
  { path : 'view', component : ViewmstistinspectionComponent },
  { path : 'payment', component : PaymentComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MstistinspectionreportRoutingModule { }

