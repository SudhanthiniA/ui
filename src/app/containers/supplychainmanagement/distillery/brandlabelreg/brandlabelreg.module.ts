import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@app/theme/shared/shared.module';

import { BrandlabelregRoutingModule } from './brandlabelreg-routing.module';
import { BrandlabelregComponent } from './brandlabelreg.component';
import { AddbrandlabelregComponent } from './addbrandlabelreg/addbrandlabelreg.component';
import { ViewbrandlabelregComponent } from './viewbrandlabelreg/viewbrandlabelreg.component';
import { AcknowledgementComponent } from './acknowledgement/acknowledgement.component';
import { PaymentComponent } from './payment/payment.component';
import { EditbrandlabelregComponent } from './editbrandlabelreg/editbrandlabelreg.component';
import { PreviewComponent } from './preview/preview.component';

@NgModule({
  declarations: [BrandlabelregComponent, AddbrandlabelregComponent, ViewbrandlabelregComponent, AcknowledgementComponent, PaymentComponent, EditbrandlabelregComponent, PreviewComponent],
  imports: [
    CommonModule,
    SharedModule,
    BrandlabelregRoutingModule
  ]
})
export class BrandlabelregModule { }
