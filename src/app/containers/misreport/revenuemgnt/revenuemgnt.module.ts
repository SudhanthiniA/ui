import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@appThemeShared/shared.module';

import { RevenuemgntRoutingModule } from './revenuemgnt-routing.module';
import { RevenuemgntComponent } from './revenuemgnt.component';
import { SalereportComponent } from './salereport/salereport.component';
import { EdpreportComponent } from './edpreport/edpreport.component';

@NgModule({
  declarations: [RevenuemgntComponent, SalereportComponent, EdpreportComponent],
  imports: [
    CommonModule,
    RevenuemgntRoutingModule,
    SharedModule
  ]
})
export class RevenuemgntModule { }
