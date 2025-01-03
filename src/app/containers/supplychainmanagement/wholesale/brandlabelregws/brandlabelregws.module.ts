import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@appThemeShared/shared.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { BrandlabelregwsRoutingModule } from './brandlabelregws-routing.module';
import { BrandlabelregwsComponent } from './brandlabelregws.component';
import { AddbrandlabelregwsComponent } from './addbrandlabelregws/addbrandlabelregws.component';
import { ViewbrandlabelregwsComponent } from './viewbrandlabelregws/viewbrandlabelregws.component';
import { PaymentComponent } from './payment/payment.component';
import { AcknowledgementComponent } from './acknowledgement/acknowledgement.component';

@NgModule({
  declarations: [BrandlabelregwsComponent, AddbrandlabelregwsComponent, ViewbrandlabelregwsComponent, PaymentComponent, AcknowledgementComponent],
  imports: [
    BrandlabelregwsRoutingModule,
    CommonModule,
    SharedModule,
    NgbModule
  ]
})
export class BrandlabelregwsModule { }
