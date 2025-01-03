import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@appThemeShared/shared.module';

import { WholesaleRoutingModule } from './wholesale-routing.module';
import { CsdpermitsComponent } from './csdpermits/csdpermits.component';
import { WholesaledispatchesComponent } from './wholesaledispatches/wholesaledispatches.component';
import { SaledutyComponent } from './saleduty/saleduty.component';
import { WholesalereceiptdispatchComponent } from './wholesalereceiptdispatch/wholesalereceiptdispatch.component';
import { FeereportComponent } from './feereport/feereport.component';
import { ReceivingatwholesaleComponent } from './receivingatwholesale/receivingatwholesale.component';
import { IndentstatuspendingComponent } from './indentstatuspending/indentstatuspending.component';
import { StockregisterreportComponent } from './stockregisterreport/stockregisterreport.component';
import { AdvancedutyregisterComponent } from './advancedutyregister/advancedutyregister.component';
import { ExpiredproductsComponent } from './expiredproducts/expiredproducts.component';
import { DamagedproductsComponent } from './damagedproducts/damagedproducts.component';
import { ConsignmentreceiptComponent } from './consignmentreceipt/consignmentreceipt.component';
import { BreakageentryComponent } from './breakageentry/breakageentry.component';
import { ImportpermitComponent } from './importpermit/importpermit.component';
import { LostandmissingComponent } from './lostandmissing/lostandmissing.component';
import { BrandandlabelComponent } from './brandandlabel/brandandlabel.component';
import { WastageComponent } from './wastage/wastage.component';
import { ChallanComponent } from './challan/challan.component';
import { DispatchComponent } from './dispatch/dispatch.component';
import { StockinreportComponent } from './stockinreport/stockinreport.component';
// import { DistilleryeoireportComponent } from './distilleryeoireport/distilleryeoireport.component';
// import { ImportpermitComponent } from './importpermit/importpermit.component';
import { ImportpermitacceptanceComponent } from './importpermitacceptance/importpermitacceptance.component';
import { IndentreportComponent } from './indentreport/indentreport.component';
import { IndentacceptancereportComponent } from './indentacceptancereport/indentacceptancereport.component';
import { LicensereportComponent } from './licensereport/licensereport.component';
import { OverallreportComponent } from './overallreport/overallreport.component';
import { NonmovementproductComponent } from './nonmovementproduct/nonmovementproduct.component';
import { ZerostockviewComponent } from './zerostockview/zerostockview.component';


@NgModule({

  declarations: [CsdpermitsComponent,ChallanComponent,DispatchComponent,LostandmissingComponent,BrandandlabelComponent,WastageComponent,BreakageentryComponent, WholesaledispatchesComponent, SaledutyComponent, WholesalereceiptdispatchComponent, FeereportComponent, ReceivingatwholesaleComponent, IndentstatuspendingComponent, StockregisterreportComponent, AdvancedutyregisterComponent, ExpiredproductsComponent, DamagedproductsComponent, ConsignmentreceiptComponent, ImportpermitComponent, StockinreportComponent, ImportpermitacceptanceComponent, IndentreportComponent, IndentacceptancereportComponent, LicensereportComponent, OverallreportComponent, NonmovementproductComponent, ZerostockviewComponent],
    imports: [
    CommonModule,
    SharedModule,
    WholesaleRoutingModule
  ]
})
export class WholesaleModule { }
