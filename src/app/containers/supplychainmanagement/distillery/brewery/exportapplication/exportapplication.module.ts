import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@appThemeShared/shared.module';

import { ExportapplicationRoutingModule } from './exportapplication-routing.module';
import { ExportapplicationComponent } from './exportapplication.component';
import { AddexportapplicationComponent } from './addexportapplication/addexportapplication.component';
import { ViewexportapplicationComponent } from './viewexportapplication/viewexportapplication.component';
import { PaymentComponent } from './payment/payment.component';



@NgModule({
  declarations: [ExportapplicationComponent, AddexportapplicationComponent, ViewexportapplicationComponent, PaymentComponent],
  imports: [
    CommonModule,
    SharedModule,
    ExportapplicationRoutingModule
  ]
})
export class ExportapplicationModule { }
