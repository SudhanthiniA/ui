import { NgModule } from '@angular/core';
import { SharedModule } from '@appThemeShared/shared.module';
import { CommonModule } from '@angular/common';

import { StockavailabilitynewRoutingModule } from './stockavailabilitynew-routing.module';
import { StockavailabilitynewComponent } from './stockavailabilitynew.component';

@NgModule({
  declarations: [StockavailabilitynewComponent],
  imports: [
    CommonModule,
    StockavailabilitynewRoutingModule,
    SharedModule
  ]
})
export class StockavailabilitynewModule { }
