import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@appThemeShared/shared.module';

import { ProductionconsumptionRoutingModule } from './productionconsumption-routing.module';
import { ProductionconsumptionComponent } from './productionconsumption.component';


@NgModule({
  declarations: [ProductionconsumptionComponent],
  imports: [
    CommonModule,
    SharedModule,
    ProductionconsumptionRoutingModule
  ]
})
export class ProductionconsumptionModule { }
