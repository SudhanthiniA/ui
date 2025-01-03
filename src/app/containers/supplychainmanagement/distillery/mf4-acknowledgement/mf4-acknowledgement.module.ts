import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Mf4AcknowledgementRoutingModule } from './mf4-acknowledgement-routing.module';
import { Mf4AcknowledgementComponent } from './mf4-acknowledgement.component';
import { SharedModule } from '@appThemeShared/shared.module';


@NgModule({
  declarations: [Mf4AcknowledgementComponent],
  imports: [
    CommonModule,
    Mf4AcknowledgementRoutingModule,
    SharedModule
  ]
})
export class Mf4AcknowledgementModule { }
