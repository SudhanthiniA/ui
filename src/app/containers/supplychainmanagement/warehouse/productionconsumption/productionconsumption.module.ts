import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@appThemeShared/shared.module';

import { ProductionconsumptionRoutingModule } from './productionconsumption-routing.module';
import { ProductionconsumptionComponent } from './productionconsumption.component';
import { ViewproductionconsumptionComponent } from './viewproductionconsumption/viewproductionconsumption.component';


@NgModule({
  declarations: [ProductionconsumptionComponent, ViewproductionconsumptionComponent],
  imports: [
    CommonModule,
    SharedModule,
    ProductionconsumptionRoutingModule
  ]
})
export class ProductionconsumptionModule { }
