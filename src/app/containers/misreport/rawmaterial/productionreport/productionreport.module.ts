import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@appThemeShared/shared.module';

import { ProductionreportRoutingModule } from './productionreport-routing.module';
import { ProductionreportComponent } from './productionreport.component';
import { ViewComponent } from './/view/view.component';

@NgModule({
  declarations: [ProductionreportComponent, ViewComponent],
  imports: [
    CommonModule,
    SharedModule,
    ProductionreportRoutingModule
  ]
})
export class ProductionreportModule { }
