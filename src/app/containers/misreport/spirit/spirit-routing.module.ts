import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TankconversionreportComponent } from './tankconversionreport/tankconversionreport.component';
import { SpiritorderreportComponent } from './spiritorderreport/spiritorderreport.component';
import { MonthlydistillerywiseproductionComponent } from './monthlydistillerywiseproduction/monthlydistillerywiseproduction.component';
import { ReportonstatewisealcoholComponent } from './reportonstatewisealcohol/reportonstatewisealcohol.component';
import { DetailedproductionofspiritComponent } from './detailedproductionofspirit/detailedproductionofspirit.component';
import { MonthlyexportofalcoholComponent } from './monthlyexportofalcohol/monthlyexportofalcohol.component';
import { SalesandconsumptionofspiritComponent } from './salesandconsumptionofspirit/salesandconsumptionofspirit.component';
import { ReportonproductionandconsumptionComponent } from './reportonproductionandconsumption/reportonproductionandconsumption.component';
import { ReportonenapurchaseforclbysellerComponent } from './reportonenapurchaseforclbyseller/reportonenapurchaseforclbyseller.component';

const routes: Routes = [
  { path: 'tankconversion', component: TankconversionreportComponent },
  { path: 'Spiritorderreport', component: SpiritorderreportComponent },
  { path: 'monthlydistillerywiseproduction', component: MonthlydistillerywiseproductionComponent },
  { path: 'reportonstatewisealcohol', component: ReportonstatewisealcoholComponent },
  { path: 'detailedproductionofspirit', component: DetailedproductionofspiritComponent },
  { path: 'monthlyexportofalcohol', component: MonthlyexportofalcoholComponent },
  { path: 'salesandconsumptionofspirit', component: SalesandconsumptionofspiritComponent },
  { path: 'reportonproductionandconsumption', component: ReportonproductionandconsumptionComponent },
  { path: 'reportonenapurchaseforclbyseller', component: ReportonenapurchaseforclbysellerComponent }
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SpiritRoutingModule { }
