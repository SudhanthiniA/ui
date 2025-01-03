import { NgModule } from '@angular/core';
import { SharedModule } from '@appThemeShared/shared.module';
import { DatePipe } from '@angular/common';

import { BondsRoutingModule } from './bonds-routing.module';

@NgModule({
  imports: [
    SharedModule,
    BondsRoutingModule
  ],
  providers: [DatePipe],
  declarations: []
})
export class BondsModule { }
