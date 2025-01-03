import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@appThemeShared/shared.module';

import { RetailRoutingModule } from './retail-routing.module';
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
import { MonthwiserevenueModule } from './monthwiserevenue/monthwiserevenue.module';



@NgModule({
  declarations: [ModalshoprevenuereportComponent,ShopwisedispatchComponent,RetailshopreportComponent, BeerliftingcompComponent, FlrevenueComponent,FlliftingcompareComponent, BeerrevenueComponent, RetailhbrComponent,ClmgqachievementComponent, ClcummulativemgqComponent, ClcummumgqachivshopwiseComponent, ClflhighlowliftingComponent, SalesreportComponent, DaywisereportComponent, WeekwisereportComponent, BrandwisereportComponent, MonthwisereportComponent, PeakseasonreportComponent, DrydayreportComponent, LastyearReportComponent, RolloverstockreportComponent],
    imports: [
    CommonModule,
    SharedModule,
    RetailRoutingModule,
    MonthwiserevenueModule
  ]
})
export class RetailModule { }
