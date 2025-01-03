import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CsdpermitsComponent } from './csdpermits/csdpermits.component';
import { WholesaledispatchesComponent } from './wholesaledispatches/wholesaledispatches.component';
import { SaledutyComponent } from './saleduty/saleduty.component';
import { FeereportComponent } from './feereport/feereport.component';
import { ReceivingatwholesaleComponent } from './receivingatwholesale/receivingatwholesale.component';
import { WholesalereceiptdispatchComponent } from './wholesalereceiptdispatch/wholesalereceiptdispatch.component';
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
// import { ImportpermitComponent } from './importpermit/importpermit.component';
import { ImportpermitacceptanceComponent } from './importpermitacceptance/importpermitacceptance.component';
import { IndentreportComponent } from './indentreport/indentreport.component';
import { IndentacceptancereportComponent } from './indentacceptancereport/indentacceptancereport.component';
import { LicensereportComponent } from './licensereport/licensereport.component';
import { OverallreportComponent } from './overallreport/overallreport.component';
import { NonmovementproductComponent } from './nonmovementproduct/nonmovementproduct.component';
import { ZerostockviewComponent } from './zerostockview/zerostockview.component';

const routes: Routes = [
  { path: 'csdpermits', component: CsdpermitsComponent },
  { path: 'wholesaledispatches', component: WholesaledispatchesComponent },
  { path: 'saleduty', component: SaledutyComponent },
  { path: 'feereport', component: FeereportComponent },
  { path: 'receivingatwholesale', component: ReceivingatwholesaleComponent },
  { path: 'wholesalereceiptdispatch', component: WholesalereceiptdispatchComponent },
  { path: 'indentstatuspending', component: IndentstatuspendingComponent },
  { path: 'stockregisterreport', component: StockregisterreportComponent },
  { path: 'advancedutyregister', component: AdvancedutyregisterComponent },
  { path: 'expiredproducts', component: ExpiredproductsComponent },
  { path: 'damagedproducts', component: DamagedproductsComponent },
  { path: 'consignmentreceipt', component: ConsignmentreceiptComponent },
  { path: 'breakageentry', component: BreakageentryComponent },
  { path: 'consignmentreceipt', component: ConsignmentreceiptComponent},
  { path: 'importpermit', component: ImportpermitComponent},
  { path: 'lostandmissing', component: LostandmissingComponent},
  { path: 'brandandlabel', component: BrandandlabelComponent},
  { path: 'wastage', component: WastageComponent},
  { path: 'challan', component: ChallanComponent},
  { path: 'dispatch', component: DispatchComponent},
  { path: 'stockinreport', component: StockinreportComponent },
  { path: 'consignmentreceipt', component: ConsignmentreceiptComponent},
  { path: 'importpermit', component: ImportpermitComponent},
  { path: 'importpermitacceptance', component: ImportpermitacceptanceComponent},
  { path: 'indentreport', component: IndentreportComponent},
  { path: 'indentacceptance', component: IndentacceptancereportComponent},
  { path: 'licensereport', component: LicensereportComponent},
  { path: 'overallreport', component: OverallreportComponent},
  { path: 'nonmovementproduct', component: NonmovementproductComponent},
  { path: 'zerostockview', component: ZerostockviewComponent}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WholesaleRoutingModule { }
