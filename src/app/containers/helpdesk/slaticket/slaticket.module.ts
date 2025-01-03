import { NgModule } from '@angular/core';
import { SharedModule } from '@appThemeShared/shared.module';
import { DatePipe } from '@angular/common';

import { SlaticketRoutingModule } from './slaticket-routing.module';

@NgModule({
  imports: [
    SharedModule,
    SlaticketRoutingModule
  ],
  providers: [DatePipe],
  declarations: []
})
export class SlaticketModule { }
