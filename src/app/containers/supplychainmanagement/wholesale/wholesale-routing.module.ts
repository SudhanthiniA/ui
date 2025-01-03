import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'dashboard', loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule)
  },
  // {
  //   path: 'indentrequest', loadChildren: () => import('./indentrequest/indentrequest.module').then(m => m.IndentrequestModule)
  // },
  {
    path: 'indentacceptance', loadChildren: () => import('./indentacceptance/indentacceptance.module').then(m => m.IndentacceptanceModule)
  },
  {
    path: 'wholesalemonocartonindentacceptance', loadChildren: () => import('./wholesalemonocartonindentacceptance/wholesalemonocartonindentacceptance.module').then(m => m.WholesalemonocartonindentacceptanceModule)
  },
  {
    path: 'advancedutyreport', loadChildren: () => import('./advancedutyreport/registeruserexceptadvduty.module').then(m => m.RegisteruserexceptadvdutyModule)
  },
  {
    path: 'paymentoverview', loadChildren: () => import('./paymentoverview/paymentoverview.module').then(m => m.PaymentoverviewModule)
  },
  {
    path: 'stockavailability', loadChildren: () => import('./stockavailability/stockavailability.module').then(m => m.StockavailabilityModule)
  },
  {
    path: 'consignmentreceipt', loadChildren: () => import('./consignmentreceipt/consignmentreceipt.module').then(m => m.ConsignmentreceiptModule)
  },
  {
    path: 'stockin', loadChildren: () => import('./stockin/stockin.module').then(m => m.StockinModule)
  },
  {
    path: 'stockout', loadChildren: () => import('./stockout/stockout.module').then(m => m.StockoutModule)
  },
  {
    path: 'stockinhand', loadChildren: () => import('./stockinhand/stockinhand.module').then(m => m.StockinhandModule)
  },
  {
    path: 'rolloverstock', loadChildren: () => import('./rolloverstock/rolloverstock.module').then(m => m.RolloverstockModule)
  },
  {
    path: 'breakageentry', loadChildren: () => import('./breakageentry/breakageentry.module').then(m => m.BreakageentryModule)
  },
  {
    path: 'rollovernonrecognised', loadChildren: () => import('./rollovernonrecognised/rollovernonrecognised.module').then(m => m.RollovernonrecognisedModule)
  },
  {
    path: 'zerostock', loadChildren: () => import('./zerostock/zerostock.module').then(m => m.ZerostockModule)
  },
  {
    path: 'delink', loadChildren: () => import('./delink/delink.module').then(m => m.DelinkModule)
  },
  {
    path: 'wholesalemonocartontransportpassdraft', loadChildren: () => import('./wholesalemonocartontransportpassdraft/wholesalemonocartontransportpassdraft.module').then(m => m.WholesalemonocartontransportpassdraftModule)
  },
  {
    path: 'wholesalemonocartonorderpickup', loadChildren: () => import('./wholesalemonocartonorderpickup/wholesalemonocartonorderpickup.module').then(m => m.WholesalemonocartonorderpickupModule)
  },
  {
    path: 'monocartontransportpassfinal', loadChildren: () => import('./monocartontransportpassfinal/monocartontransportpassfinal.module').then(m => m.MonocartontransportpassfinalModule)
  },
  {
    path: 'monocartondispatch', loadChildren: () => import('./monocartondispatch/monocartondispatch.module').then(m => m.MonocartondispatchModule)
  },
  {
    path: 'purchasereturn', loadChildren: () => import('./purchasereturn/purchasereturn.module').then(m => m.PurchasereturnModule)
  },
  { path: 'stockworklist', loadChildren: () => import('./stockworklist/stockworklist.module').then(m => m.StockworklistModule) },
  { path: 'expiredproduct', loadChildren: () => import('./expiredproduct/expiredproduct.module').then(m => m.ExpiredproductModule) },
  { path: 'updateexpiry', loadChildren: () => import('./updateexpiry/updateexpiry.module').then(m => m.UpdateexpiryModule) },
  { path: 'stockadjustment', loadChildren: () => import('./stockadjustment/stockadjustment.module').then(m => m.StockadjustmentModule) },
  { path: 'returnworklist', loadChildren: () => import('./returnworklist/returnworklist.module').then(m => m.ReturnworklistModule) },
  { path: 'nonmovementproduct', loadChildren: () => import('./non-movementproduct/non-movementproduct.module').then(m => m.NonMovementproductModule) },
  { path: 'transitgatepass', loadChildren: () => import('./transitgatepass/transitgatepass.module').then(m => m.TransitgatepassModule) },
  { path: 'damageproducts', loadChildren: () => import('./damageproducts/damageproducts.module').then(m => m.DamageproductsModule) },
  { path: 'fl16', loadChildren: () => import('./fl16/fl16.module').then(m => m.Fl16Module) },
  { path: 'fl7c', loadChildren: () => import('./fl7c/fl7c.module').then(m => m.Fl7cModule) },
  { path: 'fl36', loadChildren: () => import('./fl36/fl36.module').then(m => m.Fl36Module) },
  { path: 'fl23', loadChildren: () => import('./fl23/fl23.module').then(m => m.Fl23Module) },
  { path: 'productionconsumption', loadChildren: () => import('./productionconsumption/productionconsumption.module').then(m => m.ProductionconsumptionModule) },
  { path: 'transportpasscancel', loadChildren: () => import('./transportpasscancel/transportpasscancel.module').then(m => m.TransportpasscancelModule) },
  { path: 'licenserenewal', loadChildren: () => import('./licenserenewal/licenserenewal.module').then(m => m.LicenserenewalModule) },
  { path: 'advancedutyregister', loadChildren: () => import('./advancedutyregister/advancedutyregister.module').then(m => m.AdvancedutyregisterModule) },
  { path: 'challandoubleverify', loadChildren: () => import('./challandoubleverify/challandoubleverify.module').then(m => m.ChallandoubleverifyModule) },
  { path: 'dispatchreport', loadChildren: () => import('./dispatchreport/dispatchreport.module').then(m => m.DispatchreportModule) },
  { path: 'stockreport', loadChildren: () => import('./stockreport/stockreport.module').then(m => m.StockreportModule) },
  // { path: 'importpermitindreqfl2acsd', loadChildren: () => import('./importpermitindreqfl2acsd/importpermitindreqfl2acsd.module').then(m => m.Importpermitindreqfl2acsdModule) },
  // { path: 'importpermitindreqfl2d', loadChildren: () => import('./importpermitindreqfl2d/importpermitindreqfl2d.module').then(m => m.Importpermitindreqfl2dModule) },
  { path: 'wsstockinnew', loadChildren: () => import('./wsstockinnew/wsstockinnew.module').then(m => m.WsstockinnewModule) },
  {
    path: 'indentrequestnew', loadChildren: () => import('./indentrequest/indentrequest.module').then(m => m.IndentrequestModule)
  },
  {
    path: 'wholesaleconfiguration', loadChildren: () => import('./wholesaleconfiguration/wholesaleconfiguration.module').then(m => m.WholesaleconfigurationModule)
  },
  {
    path: 'lostandmissing', loadChildren: () => import('./lostandmissing/lostandmissing.module').then(m => m.LostandmissingModule)
  },
  {
    path: 'foundandduplicates', loadChildren: () => import('./foundandduplicates/foundandduplicates.module').then(m => m.FoundandduplicatesModule)
  },
  {
    path: 'orderpickup', loadChildren: () => import('./orderpickup/orderpickup.module').then(m => m.OrderpickupModule)
  },  
  {
    path: 'stockmovement', loadChildren: () => import('./stockmovement/stockmovement.module').then(m => m.StockmovementModule)
  },
  {
    path: 'dispatch', loadChildren: () => import('./dispatch/dispatch.module').then(m => m.DispatchModule)
  },
  {
    path: 'importpermit', loadChildren: () => import('./importpermit/importpermit.module').then(m => m.ImportpermitModule)
  },
  {
    path: 'receiptconsumption', loadChildren: () => import('./receiptconsumption/receiptconsumption.module').then(m => m.ReceiptconsumptionModule)
  },
  {
     path: 'bottlingprodplan', loadChildren: () => import('./bottlingprodplan/bottlingprodplan.module').then(m => m.BottlingprodplanModule)
  },
  {
     path: 'manualscanning', loadChildren: () => import('./manualscanning/manualscanning.module').then(m => m.ManualscanningModule)
  },
  {
     path: 'moveoffinishedgoods', loadChildren: () => import('./moveoffinishedgoods/moveoffinishedgoods.module').then(m => m.MoveoffinishedgoodsModule)
  },
  {
    path: 'qrcodeprinting', loadChildren: () => import('./qrcodeprinting/qrcodeprinting.module').then(m => m.QrcodeprintingModule)
  },
  {
    path: 'importpermitcancel', loadChildren: () => import('./importpermitcancel/importpermitcancel.module').then(m => m.ImportpermitcancelModule)
  },
  {
    path: 'profile', loadChildren: () => import('./profile/profile.module').then(m => m.ProfileModule)
  },
  {
    path: 'orderpickupnew', loadChildren: () => import('./orderpickupnew/orderpickupnew.module').then(m => m.OrderpickupnewModule)
  },
  {
    path: 'orderpickupnew2', loadChildren: () => import('./orderpickupnew2/orderpickupnew2.module').then(m => m.Orderpickupnew2Module)
  },
  // {
  //   path: 'brandlabeloverview', loadChildren: () => import('./brandlabeloverview/brandlabeloverview.module').then(m => m.BrandlabeloverviewModule)
  // },
  {
    path: 'brandlabelreg', loadChildren: () => import('./brandlabelregws/brandlabelregws.module').then(m => m.BrandlabelregwsModule)
  },
  {
    path: 'accidentalrequest', loadChildren: () => import('./accidentalrequest/accidentalrequest.module').then(m => m.AccidentalrequestModule)
  },
  {
    path: 'transpassacknowledgement', loadChildren: () => import('./transpassacknowledgement/transpassacknowledgement.module').then(m => m.TranspassacknowledgementModule)
  },
  {
    path: 'receivedimportpermits', loadChildren: () => import('./receivedimportpermits/receivedimportpermits.module').then(m => m.ReceivedimportpermitsModule)
  },
  {
    path: 'indentrequestcancel', loadChildren: () => import('./indentrequestcancel/importpermitcancel.module').then(m => m.IndentrequestModule)
  },
  {
    path: 'financialchallandeposit', loadChildren: () => import('./financialchallandeposit/financialchallandeposit.module').then(m => m.FinancialchallandepositModule)
  },
  {
    path: 'unmapandremap', loadChildren: () => import('./unmapandremap/unmapandremap.module').then(m => m.UnmapandremapModule)
  },
  {
    path: 'finanechallanverify', loadChildren: () => import('./finanechallanverify/finanechallanverify.module').then(m => m.FinanechallanverifyModule)
  },
  {
    path: 'bottlingprodplannewup',
    loadChildren: () => import('./bottlingprodplannewup/bottlingprodplannewup.module').then(m => m.BottlingprodplannewupModule)
  },
  {
    path: 'brandlabeloverview',
    loadChildren: () => import('./brandlabeloverviewwh/brandlabeloverviewwh.module').then(m => m.BrandlabeloverviewwhModule)
  },
  {
    path: 'brandlabelregws',
    loadChildren: () => import('./brandlabelregws/brandlabelregws.module').then(m => m.BrandlabelregwsModule)
  },
  {
    path: 'movementoffinishedgoods',
    loadChildren: () => import('./movementoffinishedgoods/movementoffinishedgoods.module').then(m => m.MovementoffinishedgoodsModule)
  },
  {
    path: 'labelrequest',
    loadChildren: () => import('./labelrequest/labelrequest.module').then(m => m.LabelrequestModule)
  },
  {
    path: 'salesreturn',
    loadChildren: () => import('./salesreturn/salesreturn.module').then(m => m.SalesreturnModule)
  },
  {
    path: 'stockregister',
    loadChildren: () => import('./stockregister/stockregister.module').then(m => m.StockregisterModule)
  },
  {
    path: 'csdoutsideupregistration',
    loadChildren: () => import('./csdoutsideupregistration/csdoutsideupregistration.module').then(m => m.CsdoutsideupregistrationModule)
  },
  {
    path: 'csd-dispatch',
    loadChildren: () => import('./csd-dispatch/csd-dispatch.module').then(m => m.CsdDispatchModule)
  },
  {
    path: 'rolloveraddpage', 
    loadChildren: () => import('./rolloveraddpage/rolloveraddpage.module').then(m => m.RolloveraddpageModule)
  },
  {
    path: 'mstist', 
    loadChildren: () => import('./mstist/mstist.module').then(m => m.MstistModule)
  },
  {
    path: 'cl2indentrequest', 
    loadChildren: () => import('./cl2indentrequest/cl2indentrequest.module').then(m => m.Cl2indentrequestModule)
  },
  {
    path: 'wholesaletoretaildispatch', 
    loadChildren: () => import('./wholesaletoretaildispatch/wholesaletoretaildispatch.module').then(m => m.WholesaletoretaildispatchModule)
  },
  {
    path: 'tpcancellationrequest', 
    loadChildren: () => import('./tpcancellationrequest/tpcancellationrequest.module').then(m => m.TpcancellationrequestModule)
  },
  {
    path: 'clindentapproval', 
    loadChildren: () => import('./clindentapproval/indentapproval.module').then(m => m.IndentapprovalModule)
  },
  {
    path: 'mstistprocess', 
    loadChildren: () => import('./mstistprocess/mstist.module').then(m => m.MstistModule)
  },
  {
    path: 'newindentrequest', 
    loadChildren: () => import('./newindentrequest/indentrequest.module').then(m => m.IndentrequestModule)
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class WholesaleRoutingModule { }
