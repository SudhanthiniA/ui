import { NgModule } from '@angular/core';
import { SharedModule } from '@appThemeShared/shared.module';
import { CommonModule } from '@angular/common';

import { RetailtransferRoutingModule } from './retailtransfer-routing.module';
import { RetailtransferComponent } from './retailtransfer.component';
import { AddComponent } from './add/add.component';
import { ViewComponent } from './view/view.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { PaymentComponent } from './payment/payment.component';
import { QuotaComponent } from './quota/quota.component';

@NgModule({
  declarations: [QuotaComponent,RetailtransferComponent, AddComponent, ViewComponent, PaymentComponent,],
  imports: [
    CommonModule,
    RetailtransferRoutingModule,
    NgbModule,
    SharedModule
  ]
})
export class RetailtransferModule { }
