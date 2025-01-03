import { NgModule } from '@angular/core';
import { SharedModule } from '@appThemeShared/shared.module';
import { CommonModule } from '@angular/common';

import { ReadyforsaleRoutingModule } from './readyforsale-routing.module';
import { ReadyforsaleComponent } from './readyforsale.component';
import { BillconfirmationComponent } from './billconfirmation/billconfirmation.component';


@NgModule({
  declarations: [ReadyforsaleComponent, BillconfirmationComponent],
  imports: [
    CommonModule,
    ReadyforsaleRoutingModule,
    SharedModule
  ]
})
export class ReadyforsaleModule { }
