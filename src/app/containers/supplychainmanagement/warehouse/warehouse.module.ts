import { NgModule } from '@angular/core';
import { SharedModule } from '@appThemeShared/shared.module';
import { DatePipe } from '@angular/common';

import { WarehouseRoutingModule } from './warehouse-routing.module';


@NgModule({
  imports: [
    SharedModule,
    WarehouseRoutingModule,
  ],
  providers: [DatePipe],
  declarations: []
})
export class WarehouseModule { }
