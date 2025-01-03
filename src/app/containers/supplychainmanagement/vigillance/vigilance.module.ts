import { NgModule } from '@angular/core';
import { SharedModule } from '@appThemeShared/shared.module';
import { DatePipe } from '@angular/common';

import { VigilanceRoutingModule } from './vigilance-routing.module';

@NgModule({
  imports: [
    SharedModule,
    VigilanceRoutingModule,
  ],
  providers: [DatePipe],
  declarations: []
})
export class VigilanceModule { }
