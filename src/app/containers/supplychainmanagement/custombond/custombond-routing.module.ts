import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'dashboard', loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule)
  },
  {
    path: 'indentcancellation', loadChildren: () => import('./indentcancellation/indentrequest.module').then(m => m.IndentrequestModule)
  },
  {
    path: 'draft-tp', loadChildren: () => import('./draft-tp/draft-tp.module').then(m => m.DraftTpModule)
  },
  {
    path: 'labelrequest', loadChildren: () => import('./labelrequest/labelrequest.module').then(m => m.LabelrequestModule)
  },
  {
    path: 'generatecode', loadChildren: () => import('./generatecode/generatecode.module').then(m => m.GeneratecodeModule)
  },
  {
    path: 'iuprofile', loadChildren: () => import('./iuprofile/iuprofile.module').then(m => m.IuprofileModule)
  },
  {
    path: 'labelregistration', loadChildren: () => import('./labelregistration/labelregistration.module').then(m => m.LabelregistrationModule)
  },
  {
    path: 'billofentry', loadChildren: () => import('./billofentry/billofentry.module').then(m => m.BillofentryModule)
  },
  {
    path: 'stockavailability', loadChildren: () => import('./stockavailability/stockavailability.module').then(m => m.StockavailabilityModule)
  },
  {
    path: 'stockinhand', loadChildren: () => import('./stockinhand/stockinhand.module').then(m => m.StockinhandModule)
  },
  {
    path: 'exportpassoutsideup', loadChildren: () => import('./exportpassoutsideup/exportpassoutsideup.module').then(m => m.ExportpassoutsideupModule)
  },
  {
    path: 'mappingforoverseasup', loadChildren: () => import('./mappingforoverseasup/mappingforoverseasup.module').then(m => m.MappingforoverseasupModule)
  },
  {
    path: 'convertetin', loadChildren: () => import('./convertetin/convertetin.module').then(m => m.ConvertetinModule)
  },
  {
    path: 'brandregistration', loadChildren: () => import('./brandregistration/brandregistration.module').then(m => m.BrandregistrationModule)
  },
  {
    path: 'brandandlabelregistration', loadChildren: () => import('./brandandlabelregistration/brandandlabelregistration.module').then(m => m.BrandandlabelregistrationModule)
  },
  {
    path: 'bottlingplan', loadChildren: () => import('./bottlingplan/bottlingplan.module').then(m => m.BottlingplanModule)
  },
  {
    path: 'uiprofile', loadChildren: () => import('./uiprofile/uiprofile.module').then(m => m.UiprofileModule)
  },
  {
    path: 'registeroverseasunit', loadChildren: () => import('./registeroverseasunit/registeroverseasunit.module').then(m => m.RegisteroverseasunitModule)
  },
  {
    path: 'registrationandmapdebond', loadChildren: () => import('./registrationandmapdebond/registrationandmapdebond.module').then(m => m.RegistrationandmapdebondModule)
  },
  {
    path: 'registrationandmapcb', loadChildren: () => import('./registrationandmapcb/registrationandmapcb.module').then(m => m.RegistrationandmapcbModule)
  },
  {
    path: 'dispatchdistrict', loadChildren: () => import('./dispatchdistrict/dispatchdistrict.module').then(m => m.DispatchdistrictModule)
  },
  {
    path: 'finishedgoods', loadChildren: () => import('./finishedgoods/finishedgoods.module').then(m => m.FinishedgoodsModule)
  },
  {
    path: 'repackcartons', loadChildren: () => import('./repackcartons/repackcartons.module').then(m => m.RepackcartonsModule)
  },
  {
    path: 'boxing', loadChildren: () => import('./boxing/boxing.module').then(m => m.BoxingModule)
  },
  {
    path: 'imflout', loadChildren: () => import('./imflout/imflout.module').then(m => m.ImfloutModule)
  },
  {
    path: 'importliquor', loadChildren: () => import('./importliquor/importliquor.module').then(m => m.ImportliquorModule)
  },
  {
    path: 'indentrequest', loadChildren: () => import('./indentrequest/indentrequest.module').then(m => m.IndentrequestModule)
  },
  {
    path: 'implabelregistration', loadChildren: () => import('./implabelregistration/implabelregistration.module').then(m => m.ImplabelregistrationModule)
  },
  {
    path: 'impunitregistration', loadChildren: () => import('./impunitregistration/impunitregistration.module').then(m => m.ImpunitregistrationModule)
  },
  {
    path: 'indentacceptance', loadChildren: () => import('./indentacceptance/indentacceptance.module').then(m => m.IndentacceptanceModule)
  },
  {
    path: 'transpassgeneration', loadChildren: () => import('./transpassgeneration/transpassgeneration.module').then(m => m.TranspassgenerationModule)
},
{
  path: 'debondingrequest', loadChildren: () => import('./debondingrequest/debondingrequest.module').then(m => m.DebondingrequestModule)
},
{
  path: 'importpermit', loadChildren: () => import('./importpermit/importpermit.module').then(m => m.ImportpermitModule)
},
{
  path: 'importpermitnew', loadChildren: () => import('./importpermitnew/importpermit.module').then(m => m.ImportpermitModule)
},
{
  path: 'bioack', loadChildren: () => import('./bioack/receiptack.module').then(m => m.Fl36Module)
},
{
  path: 'dispatch', loadChildren: () => import('./dispatch/dispatch.module').then(m => m.DispatchModule)
  
},
// {
//   path: 'orderpickup', loadChildren: () => import('./orderpickup/orderpickup.module').then(m => m.OrderpickupModule)
// },
{
  path: 'wsstockinnew', loadChildren: () => import('./wsstockinnew/wsstockinnew.module').then(m => m.WsstockinnewModule)
},
{
  path: 'receiptconsumption', loadChildren: () => import('./receiptconsumption/receiptconsumption.module').then(m => m.ReceiptconsumptionModule)
  
},
{
  path: 'orderpickupnew', loadChildren: () => import('./orderpickupnew/orderpickupnew.module').then(m => m.OrderpickupnewModule)
},
{
  path: 'productionconsumption', loadChildren: () => import('./productionconsumption/productionconsumption.module').then(m => m.ProductionconsumptionModule)
},
{
  path: 'manualscanning', loadChildren: () => import('./manualscanning/manualscanning.module').then(m => m.ManualscanningModule)
},
{
  path: 'qrcodeprinting', loadChildren: () => import('./qrcodeprinting/qrcodeprinting.module').then(m => m.QrcodeprintingModule)
},
{
  path: 'qrcodewastage', loadChildren: () => import('./qrcodewastage/qrcodewastage.module').then(m => m.QrcodewastageModule)
},
{
  path: 'moveoffinishedgoods', loadChildren: () => import('./moveoffinishedgoods/moveoffinishedgoods.module').then(m => m.MoveoffinishedgoodsModule)
},
{
  path: 'brandlabelreg', loadChildren: () => import('./brandlabelreg/brandlabelreg.module').then(m => m.BrandlabelregModule)
},
{
  path: 'transportpasscancel', loadChildren: () => import('./transportpasscancel/transportpasscancel.module').then(m => m.TransportpasscancelModule)
},
{
  path: 'brandlabeloverview', loadChildren: () => import('./brandlabeloverview/brandlabeloverview.module').then(m => m.BrandlabeloverviewModule)
},
{
  path: 'transitgatepass', loadChildren: () => import('./transitgatepass/transitgatepass.module').then(m => m.TransitgatepassModule)
},
{
  path: 'transitgatepassapproval', loadChildren: () => import('./transitgatepassapproval/transitgatepass.module').then(m => m.TransitgatepassModule)
},
{
  path: 'printqrcodes', loadChildren: () => import('./printqrcodes/printqrcodes.module').then(m => m.PrintqrcodesModule)
},
{
  path: 'consignmentreceipt', loadChildren: () => import('./consignmentreceipt/consignmentreceipt.module').then(m => m.ConsignmentreceiptModule)
},
{
  path: 'stockout', loadChildren: () => import('./stockout/stockout.module').then(m => m.StockoutModule)
},
{
  path: 'intercbwtp', loadChildren: () => import('./intercbwtp/intercbwtp.module').then(m => m.IntercbwtpModule)
},
{
  path: 'clb5declaration', loadChildren: () => import('./clb5declaration/clb5declaration.module').then(m => m.Clb5declarationModule)
},
{
  path: 'rolloverstock', loadChildren: () => import('./rolloverstock/rolloverstock.module').then(m => m.RolloverstockModule)
},
{
  path: 'expiredproduct', loadChildren: () => import('./expiredproduct/expiredproduct.module').then(m => m.ExpiredproductModule)
},
{
  path: 'stock-in', loadChildren: () => import('./stock-in/stock-in.module').then(m => m.StockInModule)
},
{
  path: 'export-permit', loadChildren: () => import('./export-permit/export-permit.module').then(m => m.ExportPermitModule)
},
{
  path: 'exportpermit-tp-ack', loadChildren: () => import('./exportpermit-tp-ack/exportpermit-tp-ack.module').then(m => m.ExportpermitTpAckModule)
},
{
  path: 'updateexpiry', loadChildren: () => import('./updateexpiry/updateexpiry.module').then(m => m.UpdateexpiryModule)
},
{
  path: 'stockadjustment', loadChildren: () => import('./stockadjustment/stockadjustment.module').then(m => m.StockadjustmentModule)
},
{
  path: 'returnworklist', loadChildren: () => import('./returnworklist/returnworklist.module').then(m => m.ReturnworklistModule)
},
{
  path: 'non-movementproduct', loadChildren: () => import('./non-movementproduct/non-movementproduct.module').then(m => m.NonMovementproductModule)
},
{
  path: 'rollovernonrecognised', loadChildren: () => import('./rollovernonrecognised/rollovernonrecognised.module').then(m => m.RollovernonrecognisedModule)
},
{
  path: 'zerostock', loadChildren: () => import('./zerostock/zerostock.module').then(m => m.ZerostockModule)
},
{
  path: 'stockworklist', loadChildren: () => import('./stockworklist/stockworklist.module').then(m => m.StockworklistModule)
},
{
  path: 'damageproducts', loadChildren: () => import('./damageproducts/damageproducts.module').then(m => m.DamageproductsModule)
},
{
  path: 'advancedutyregister', loadChildren: () => import('./advancedutyregister/advancedutyregister.module').then(m => m.AdvancedutyregisterModule)
},
{
  path: 'dispatchreport', loadChildren: () => import('./dispatchreport/dispatchreport.module').then(m => m.DispatchreportModule)
},
{
  path: 'lostandmissing', loadChildren: () => import('./lostandmissing/lostandmissing.module').then(m => m.LostandmissingModule)
},
{
  path: 'foundandduplicates', loadChildren: () => import('./foundandduplicates/foundandduplicates.module').then(m => m.FoundandduplicatesModule)
},
{
  path: 'stockmovement', loadChildren: () => import('./stockmovement/stockmovement.module').then(m => m.StockmovementModule)
},
{
  path: 'breakageentry', loadChildren: () => import('./breakageentry/breakageentry.module').then(m => m.BreakageentryModule)
},
{
  path: 'dispatchnew', loadChildren: () => import('./dispatchnew/dispatchnew.module').then(m => m.DispatchnewModule)
},
{
  path: 'dispatchexportpermit', loadChildren: () => import('./dispatchexportpermit/dispatchexportpermit.module').then(m => m.DispatchexportpermitModule)
},
{
  path: 'profilecb', loadChildren: () => import('./profilecb/profilecb.module').then(m => m.ProfilecbModule)
},
{
  path: 'edpregistration', loadChildren: () => import('./edpregistration/edpregistration.module').then(m => m.EdpregistrationModule)
},
{
  path: 'accidentalrequest',
  loadChildren: () => import('./accidentalrequest/accidentalrequest.module').then(m => m.AccidentalrequestModule)
},  
{
  path: 'accidentalcaserequest',
  loadChildren: () => import('./accidentalcaserequest/accidentalcaserequest.module').then(m => m.AccidentalcaserequestModule)
},  
{
  path: 'tpack',
  loadChildren: () => import('./tpack/tpack.module').then(m => m.TpackModule)
},
{
  path: 'stockregister',
  loadChildren: () => import('./stockregister/stockregister.module').then(m => m.StockregisterModule)
},
{
  path: 'flb11',
  loadChildren: () => import('./flb11/flb11.module').then(m => m.Flb11Module)
},
{ 
  path: 'advancedutyreg', 
  loadChildren: () => import('./advancedutyreg/advancedutyreg.module').then(m => m.AdvancedutyregModule) 
},
{ 
  path: 'labelprinting', 
  loadChildren: () => import('./labelprinting/labelprinting.module').then(m => m.LabelprintingModule) 
},
{ 
  path: 'monthlystock', 
  loadChildren: () => import('./monthlystock/monthlystock.module').then(m => m.MonthlystockModule) 
},
{ 
  path: 'exportpermit', 
  loadChildren: () => import('./exportpermit/exportpermit.module').then(m => m.ExportpermitModule) 
},
{ 
  path: 'debondunitfl22', 
  loadChildren: () => import('./debondunitfl22/debondunitfl22.module').then(m => m.Debondunitfl22Module) 
},
{ 
  path: 'intercbwindentaccept', 
  loadChildren: () => import('./intercbwindentaccept/intercbwindentaccept.module').then(m => m.IntercbwindentacceptModule) 
},
{ 
  path: 'intercbwdispatch', 
  loadChildren: () => import('./intercbwdispatch/intercbwdispatch.module').then(m => m.IntercbwdispatchModule) 
},
{ 
  path: 'productiondeclaration', 
  loadChildren: () => import('./productiondeclaration/productiondeclaration.module').then(m => m.ProductiondeclarationModule) 
},
{ 
  path: 'importpermitcancellation', 
  loadChildren: () => import('./importpermitcancellation/importpermitcancellation.module').then(m => m.ImportpermitcancellationModule) 
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class CustombondRoutingModule { }
