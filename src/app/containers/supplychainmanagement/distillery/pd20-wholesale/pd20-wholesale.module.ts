import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@app/theme/shared/shared.module';

import { Pd20WholesaleRoutingModule } from './pd20-wholesale-routing.module';
import { Pd20WholesaleComponent } from './pd20-wholesale.component';
import { Addpd20WholesaleComponent } from './addpd20-wholesale/addpd20-wholesale.component';
import { Viewpd20WholesaleComponent } from './viewpd20-wholesale/viewpd20-wholesale.component';
import { ListApprovalPd20WholesaleComponent } from './list-approval-pd20-wholesale/list-approval-pd20-wholesale.component';
import { ViewApprovalPd20WholesaleComponent } from './view-approval-pd20-wholesale/view-approval-pd20-wholesale.component';
import { PaymentscreenComponent } from './paymentscreen/paymentscreen.component';


@NgModule({
  declarations: [Pd20WholesaleComponent, Addpd20WholesaleComponent, Viewpd20WholesaleComponent, ListApprovalPd20WholesaleComponent, ViewApprovalPd20WholesaleComponent, PaymentscreenComponent],
  imports: [
    CommonModule,
    SharedModule,
    Pd20WholesaleRoutingModule
  ]
})
export class Pd20WholesaleModule { }
