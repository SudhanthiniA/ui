import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ReceiptackComponent } from './receiptack.component';
import { ParentunitComponent } from './parentunit/parentunit.component';
import { BwhtrasnportpassComponent } from './bwhtrasnportpass/bwhtrasnportpass.component';
import { ViewrequisitionoftransportpassComponent } from './bwhtrasnportpass/viewrequisitionoftransportpass/viewrequisitionoftransportpass.component';
import { WholesaleComponent } from './wholesale/wholesale.component';
import { RetailgbrComponent } from './retailhbr/retailgbr.component';

const routes: Routes = [
  { path: 'list', component: ReceiptackComponent },
  { path: 'parentunit', component: ParentunitComponent },
  { path: 'bwhreport', component: BwhtrasnportpassComponent },
  { path: 'viewbwhreport', component: ViewrequisitionoftransportpassComponent },
  { path: 'wholesale', component: WholesaleComponent },
  { path: 'retail', component: RetailgbrComponent }
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TransportpassRoutingModule { }
