import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@appThemeShared/shared.module';


import { SpiritRoutingModule } from './spirit-routing.module';
import { TankconversionreportComponent } from './tankconversionreport/tankconversionreport.component';
import { SpiritorderreportComponent } from './spiritorderreport/spiritorderreport.component';
import { MonthlydistillerywiseproductionComponent } from './monthlydistillerywiseproduction/monthlydistillerywiseproduction.component';
import { ReportonstatewisealcoholComponent } from './reportonstatewisealcohol/reportonstatewisealcohol.component';
import { DetailedproductionofspiritComponent } from './detailedproductionofspirit/detailedproductionofspirit.component';
import { MonthlyexportofalcoholComponent } from './monthlyexportofalcohol/monthlyexportofalcohol.component';
import { SalesandconsumptionofspiritComponent } from './salesandconsumptionofspirit/salesandconsumptionofspirit.component';
import { ReportonproductionandconsumptionComponent } from './reportonproductionandconsumption/reportonproductionandconsumption.component';
import { ReportonenapurchaseforclbysellerComponent } from './reportonenapurchaseforclbyseller/reportonenapurchaseforclbyseller.component';


@NgModule({
  declarations: [TankconversionreportComponent, SpiritorderreportComponent, MonthlydistillerywiseproductionComponent, ReportonstatewisealcoholComponent, DetailedproductionofspiritComponent, MonthlyexportofalcoholComponent, SalesandconsumptionofspiritComponent, ReportonproductionandconsumptionComponent, ReportonenapurchaseforclbysellerComponent],
  imports: [
    CommonModule,
    SharedModule,
    SpiritRoutingModule
  ]
})
export class SpiritModule { }
