import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'dashboard',
    loadChildren: () => import('./dashboard/dashboard.module').then(module => module.DashboardModule)
  },
  {
    path: 'readyforsale',
    loadChildren: () => import('./readyforsale/readyforsale.module').then(module => module.ReadyforsaleModule)
  },
  {
    path: 'brandwisedetails',
    loadChildren: () => import('./brandwisedetails/brandwisedetails.module').then(module => module.BrandwisedetailsModule)
  },
  {
    path: 'readyforsale-HBR',
    loadChildren: () => import('./readyforsale-HBR/readyforsale.module').then(module => module.ReadyforsaleModule)
  },
  {
    path: 'transactionlist',
    loadChildren: () => import('./transactionlist/transactionlist.module').then(module => module.TransactionlistModule)
  },
  {
    path: 'indentrequest',
    loadChildren: () => import('./indentrequest/indentrequest.module').then(module => module.IndentrequestModule)
  },
  {
    path: 'stockavailabilitywholesale',
    loadChildren: () => import('./stockavailabilitywholesale/stockavailabilitywholesale.module').then(module => module.StockavailabilitywholesaleModule)
  },
  {
    path: 'stockin',
    loadChildren: () => import('./stockin/stockin.module').then(module => module.StockinModule)
  },
  {
    path: 'return',
    loadChildren: () => import('./return/return.module').then(module => module.ReturnModule)
  },
  {
    path: 'stockinhand',
    loadChildren: () => import('./stockinhand/stockinhand.module').then(module => module.StockinhandModule)
  },
  {
    path: 'reports',
    loadChildren: () => import('./reports/reports.module').then(module => module.ReportsModule)
  },
  {
    path: 'returnfromcustomer',
    loadChildren: () => import('./returnfromcustomer/returnfromcustomer.module').then(module => module.ReturnfromcustomerModule)
  },
  { path: 'formfl13', loadChildren: () => import('./formfl13/formfl13.module').then(m => m.Formfl13Module) },
  { path: 'formfl24', loadChildren: () => import('./formfl24/formfl24.module').then(m => m.Formfl24Module) },
  { path: 'formfl28', loadChildren: () => import('./formfl28/formfl28.module').then(m => m.Formfl28Module) },
  { path: 'formfl35', loadChildren: () => import('./formfl35/formfl35.module').then(m => m.Formfl35Module) },
  { path: 'formfl42', loadChildren: () => import('./formfl42/formfl42.module').then(m => m.Formfl42Module) },
  { path: 'dailyabstract', loadChildren: () => import('./dailyabstract/dailyabstract.module').then(m => m.DailyabstractModule) },
  { path: 'accountpurchaser', loadChildren: () => import('./accountpurchaser/accountpurchaser.module').then(m => m.AccountpurchaserModule) },
  { path: 'salesledger', loadChildren: () => import('./salesledger/salesledger.module').then(m => m.SalesledgerModule) },
  { path: 'winedistribution', loadChildren: () => import('./winedistribution/winedistribution.module').then(m => m.WinedistributionModule) },
  { path: 'formfl21', loadChildren: () => import('./formfl21/formfl21.module').then(m => m.Formfl21Module) },
  { path: 'formfl25', loadChildren: () => import('./formfl25/formfl25.module').then(m => m.Formfl25Module) },
  { path: 'formfl25-a', loadChildren: () => import('./formfl25-a/formfl25-a.module').then(m => m.Formfl25AModule) },
  { path: 'formfl25-b', loadChildren: () => import('./formfl25-b/formfl25-b.module').then(m => m.Formfl25BModule) },
  { path: 'formfl30', loadChildren: () => import('./formfl30/formfl30.module').then(m => m.Formfl30Module) },
  { path: 'formfl33', loadChildren: () => import('./formfl33/formfl33.module').then(m => m.Formfl33Module) },
  { path: 'fl17', loadChildren: () => import('./fl17/fl17.module').then(m => m.Fl17Module) },
  {
    path: 'stockinnew',
    loadChildren: () => import('./stockinnew/stockinnew.module').then(module => module.StockinnewModule)
  },
  { path: 'wsstockinnew', loadChildren: () => import('./wsstockinnew/wsstockinnew.module').then(m => m.WsstockinnewModule) },
  {
    path: 'stockavailability',
    loadChildren: () => import('./stockavailabilitynew/stockavailabilitynew.module').then(module => module.StockavailabilitynewModule)
  },
  {
    path: 'stockinhandnew',
    loadChildren: () => import('./stockinhandnew/stockinhandnew.module').then(module => module.StockinhandnewModule)
  },
  {
    path: 'indentrequestnew',
    loadChildren: () => import('./indentrequestnew/indentrequestnew.module').then(module => module.IndentrequestnewModule)
  },
  {
    path: 'retailmonocartonindentrequest',
    loadChildren: () => import('./retailmonocartonindentrequest/retailmonocartonindentrequest.module').then(module => module.RetailmonocartonindentrequestModule)
  },
  {
    path: 'consignmentreceipt',
    loadChildren: () => import('./consignmentreceipt/consignmentreceipt.module').then(module => module.ConsignmentreceiptModule)
  },
  {
    path: 'breakageentry', 
    loadChildren: () => import('./breakageentry/breakageentry.module').then(m => m.BreakageentryModule)
  },
  {
    path: 'rolloverstock', 
    loadChildren: () => import('./rolloverstock/rolloverstock.module').then(m => m.RolloverstockModule)
  },
  {
    path: 'profile', 
    loadChildren: () => import('./profile/profile.module').then(m => m.ProfileModule)
  },
  {
    path: 'shelfsale', 
    loadChildren: () => import('./shelfsale/stockout.module').then(m => m.StockoutModule)
  },
  {
    path: 'saletofl11', 
    loadChildren: () => import('./saletofl11/saletofl11.module').then(m => m.Saletofl11Module)
  },
  {
    path: 'transpassacknowledgement',
    loadChildren: () => import('./transpassacknowledgement/transpassacknowledgement.module').then(m => m.TranspassacknowledgementModule)
  },
  {
    path: 'advanceduty', 
    loadChildren: () => import('./advanceduty/advanceduty.module').then(m => m.AdvancedutyModule)
  },
  {
    path: 'salesreturn', 
    loadChildren: () => import('./salesreturn/salesreturn.module').then(m => m.SalesreturnModule)
  },
  {
    path: 'damagedproduct', 
    loadChildren: () => import('./damagedproduct/damageproduct.module').then(m => m.DamageproductModule)
  },
  {
    path: 'retailtransfer', 
    loadChildren: () => import('./retailtransfer/retailtransfer.module').then(m => m.RetailtransferModule)
  },
  {
    path: 'retailtransferacceptance', 
    loadChildren: () => import('./retailtransferacceptance/retailtransferacceptance.module').then(m => m.RetailtransferacceptanceModule)
  },
  {
    path: 'rolloveraddpage', 
    loadChildren: () => import('./rolloveraddpage/rolloveraddpage.module').then(m => m.RolloveraddpageModule)
  },
  {
    path: 'retailbilling', 
    loadChildren: () => import('./retailbilling/retailbilling.module').then(m => m.RetailbillingModule)
  },
  {
    path: 'retailtransaction', 
    loadChildren: () => import('./retailtransaction/retailtransaction.module').then(m => m.RetailtransactionModule)
  },
  {
    path: 'exception-liftingprocess', 
    loadChildren: () => import('./exception-liftingprocess/exception-liftingprocess.module').then(m => m.ExceptionLiftingprocessModule)
  },
  {
    path: 'mstistprocess',
    loadChildren: () => import('./mstistprocess/mstistprocess.module').then(m => m.MstistprocessModule)
  },
  {
    path: 'geoaddress',
    loadChildren: () => import('./geoaddress/geoaddress.module').then(m => m.GeoaddressModule)
  },
  {
    path: 'retailindentrequest',
    loadChildren: () => import('./retailindentrequest/indentraise.module').then(m => m.IndentraiseModule)
  },
  {
    path: 'stocktransferrequest',
    loadChildren: () => import('./stocktransferrequest/stocktransferrequest.module').then(m => m.StocktransferrequestModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RetailRoutingModule { }
