import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ReceiptandconsumptionreportComponent } from './receiptandconsumptionreport.component';


const routes: Routes = [

  {
    path : 'report',
    component : ReceiptandconsumptionreportComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReceiptandconsumptionreportRoutingModule { }
