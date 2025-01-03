import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RetailshopreportComponent } from './retailshopreport/retailshopreport.component';
import { BeerliftingcompComponent } from './beerliftingcomp/beerliftingcomp.component';
import { BeerrevenueComponent } from './beerrevenue/beerrevenue.component';
import { ClmgqachievementComponent } from './clmgqachievement/clmgqachievement.component';
import { FlrevenueComponent } from './flrevenue/flrevenue.component';
import { FlliftingcompareComponent } from './flliftingcompare/flliftingcompare.component';
import { RetailhbrComponent } from './retail-hbr/retail-hbr.component';
import { ShopwisedispatchComponent } from './shopwisedispatch/shopwisedispatch.component';
import { ModalshoprevenuereportComponent } from './modalshoprevenuereport/modalshoprevenuereport.component';
import { ClcummulativemgqComponent } from './clcummulativemgq/clcummulativemgq.component';
import { ClcummumgqachivshopwiseComponent } from './clcummumgqachivshopwise/clcummumgqachivshopwise.component';
import { ClflhighlowliftingComponent } from './clflhighlowlifting/clflhighlowlifting.component';
import { SalesreportComponent } from './salesreport/salesreport.component';
import { DaywisereportComponent } from './daywisereport/daywisereport.component';
import { WeekwisereportComponent } from './weekwisereport/weekwisereport.component';
import { BrandwisereportComponent } from './brandwisereport/brandwisereport.component';
import { MonthwisereportComponent } from './monthwisereport/monthwisereport.component';
import { PeakseasonreportComponent } from './peakseasonreport/peakseasonreport.component';
import { DrydayreportComponent } from './drydayreport/drydayreport.component';
import { LastyearReportComponent } from './lastyear-report/lastyear-report.component';
import { RolloverstockreportComponent } from './rolloverstockreport/rolloverstockreport.component';
 
const routes: Routes = [
  { path: 'retailshopreport', component: RetailshopreportComponent },
  { path: 'beerliftingcomp', component: BeerliftingcompComponent },
  { path: 'beerrevenue', component: BeerrevenueComponent },
  { path: 'clmgq', component: ClmgqachievementComponent },
  { path: 'flliftcompare', component: FlliftingcompareComponent },
  { path: 'flrevenue', component: FlrevenueComponent },
  { path: 'clcummulativemgq', component: ClcummulativemgqComponent },
  { path: 'clcummumgqachivshopwise', component: ClcummumgqachivshopwiseComponent },
  { path: 'clflhighlowlifting', component: ClflhighlowliftingComponent },
  { path: 'Retailhbr', component: RetailhbrComponent },
  { path: 'shopwisedispatch', component: ShopwisedispatchComponent },
  { path: 'modalshoprevenuereport', component: ModalshoprevenuereportComponent },
  { path: 'salesreport', component: SalesreportComponent },
  { path: 'daywisereport', component: DaywisereportComponent },
  { path: 'weekwisereport', component: WeekwisereportComponent },
  { path: 'brandwisereport', component: BrandwisereportComponent },
  { path: 'monthwisereport', component: MonthwisereportComponent },
  { path: 'peakseasonreport', component: PeakseasonreportComponent },
  { path: 'drydayreport', component: DrydayreportComponent },
  { path: 'lastyear-report', component: LastyearReportComponent },
  { path: 'rolloverstockreport', component: RolloverstockreportComponent },
  {
    path: '',
    children: [
  {
    path: 'monthwiserevenue',
    loadChildren: () => import('./monthwiserevenue/monthwiserevenue.module').then(m => m.MonthwiserevenueModule)
  },
]
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RetailRoutingModule { }
