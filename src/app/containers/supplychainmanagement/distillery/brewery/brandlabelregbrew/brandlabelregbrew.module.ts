import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@appThemeShared/shared.module';

import { BrandlabelregbrewRoutingModule } from './brandlabelregbrew-routing.module';
import { BrandlabelregbrewComponent } from './brandlabelregbrew.component';
import { AddbrandlabelregbrewComponent } from './addbrandlabelregbrew/addbrandlabelregbrew.component';
import { ViewbrandlabelregbrewComponent } from './viewbrandlabelregbrew/viewbrandlabelregbrew.component';
import { PaymentComponent } from './payment/payment.component';
import { PreviewComponent } from './preview/preview.component';
import { AcknowledgementComponent } from './acknowledgement/acknowledgement.component';

@NgModule({
  declarations: [BrandlabelregbrewComponent, AddbrandlabelregbrewComponent, ViewbrandlabelregbrewComponent, PaymentComponent, PreviewComponent, AcknowledgementComponent],
  imports: [
    CommonModule,
    SharedModule,
    BrandlabelregbrewRoutingModule
  ]
})
export class BrandlabelregbrewModule { }
