import { NgModule } from '@angular/core';
import { SharedModule } from '@appThemeShared/shared.module';
import { DatePipe } from '@angular/common';

import { returnfillingapplicationRoutingModule } from './returnfilling-routing.module';


@NgModule({
  imports: [
    SharedModule,
    returnfillingapplicationRoutingModule
  ],
  providers: [DatePipe],
  declarations: []
})
export class returnfillingModule { }
