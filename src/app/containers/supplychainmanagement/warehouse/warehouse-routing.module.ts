import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'dashboard',
    loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule)
  },
  {
    path: 'importpermit',
    loadChildren: () => import('./importpermit/importpermit.module').then(m => m.ImportpermitModule)
  },
  {
    path: 'importpermitstatus',
    loadChildren: () => import('./importpermitstatus/importpermitstatus.module').then(m => m.ImportpermitstatusModule)
  },
  {
    path: 'consignementreceipt',
    loadChildren: () => import('./consignementreceipt/consignementreceipt.module').then(m => m.ConsignementreceiptModule)
  },
  {
    path: 'financialchallandeposit',
    loadChildren: () => import('./financialchallandeposit/financialchallandeposit.module').then(m => m.FinancialchallandepositModule)
  },
  {
    path: 'financialechallverification',
    loadChildren: () => import('./financialechallverification/financialechallverification.module').then(m => m.FinancialechallverificationModule)
  },
  {
    path: 'generateqrcode',
    loadChildren: () => import('./generateqrcode/generateqrcode.module').then(m => m.GenerateqrcodeModule)
  },
  {
    path: 'accidental-application',
    loadChildren: () => import('./accidental-application/accidental-application.module').then(m => m.AccidentalApplicationModule)
  },
  {
    path: 'advancedutyregister',
    loadChildren: () => import('./advancedutyregister/advancedutyregister.module').then(m => m.AdvancedutyregisterModule)
  },
  {
    path: 'rolloverstockentry',
    loadChildren: () => import('./rolloverstockentry/rolloverstockentry.module').then(m => m.RolloverstockentryModule)
  },
  {
    path: 'rolloverstkentryprevyear',
    loadChildren: () => import('./rolloverstkentryprevyear/rolloverstkentryprevyear.module').then(m => m.RolloverstkentryprevyearModule)
  },
  {
    path: 'indentacceptanceforwholesale',
    loadChildren: () => import('./indentacceptanceforwholesale/indentacceptanceforwholesale.module').then(m => m.IndentacceptanceforwholesaleModule)
  },
  {
    path: 'stockinhand',
    loadChildren: () => import('./stockinhand/stockinhand.module').then(m => m.StockinhandModule)
  },
  {
    path: 'transportpass',
    loadChildren: () => import('./transportpass/transportpass.module').then(m => m.TransportpassModule)
  },
  {
    path: 'bwfl4',
    loadChildren: () => import('./bwfl4/bwfl4.module').then(m => m.Bwfl4Module)
  },
  {
    path: 'bwfl5',
    loadChildren: () => import('./bwfl5/bwfl5.module').then(m => m.Bwfl5Module)
  },
  {
    path: 'bwfl6',
    loadChildren: () => import('./bwfl6/bwfl6.module').then(m => m.Bwfl6Module)
  },
  {
    path: 'bwfl7',
    loadChildren: () => import('./bwfl7/bwfl7.module').then(m => m.Bwfl7Module)
  },
  {
    path: 'bwfl8',
    loadChildren: () => import('./bwfl8/bwfl8.module').then(m => m.Bwfl8Module)
  },
  {
    path: 'bwfl9',
    loadChildren: () => import('./bwfl9/bwfl9.module').then(m => m.Bwfl9Module)
  },
  {
    path: 'bwfl10',
    loadChildren: () => import('./bwfl10/bwfl10.module').then(m => m.Bwfl10Module)
  },
  // { 
  //   path: 'stockin', loadChildren: () => import('./stockin/stockin.module').then(m => m.StockinModule)
  // },
  {
    path: 'warehousestockin',
    loadChildren: () => import('./warehousestockin/warehousestockin.module').then(m => m.WarehousestockinModule)
  },
  {
    path: 'stockregister',
    loadChildren: () => import('./stockregister/stockregister.module').then(m => m.StockregisterModule)
  },
  {
    path: 'requestforqrcodecasecode',
    loadChildren: () => import('./requestforqrcodecasecode/requestforqrcodecasecode.module').then(m => m.RequestforqrcodecasecodeModule)
  },
  {
    path: 'licenserenewal',
    loadChildren: () => import('./licenserenewal/licenserenewal.module').then(m => m.LicenserenewalModule)
  },
  {
    path: 'movementoffinishedgoods',
    loadChildren: () => import('./movementoffinishedgoods/movementoffinishedgoods.module').then(m => m.MovementoffinishedgoodsModule)
  },
  {
    path: 'movementfinishgoodparentunit',
    loadChildren: () => import('./movementfinishgoodparentunit/movementfinishgoodparentunit.module').then(m => m.MovementfinishgoodparentunitModule)
  },
  {
    path: 'profileparentlogin',
    loadChildren: () => import('./profileparentlogin/profileparentlogin.module').then(m => m.ProfileparentloginModule)
  },
  {
    path: 'profilebondwarehouse',
    loadChildren: () => import('./profilebondwarehouse/profilebondwarehouse.module').then(m => m.ProfilebondwarehouseModule)
  },
  {
    path: 'brandlabelrequest',
    loadChildren: () => import('./brandlabelrequest/brandlabelrequest.module').then(m => m.BrandlabelrequestModule)
  },
  {
    path: 'receivedimportpermits',
    loadChildren: () => import('./receivedimportpermits/receivedimportpermits.module').then(m => m.ReceivedimportpermitsModule)
  },
  {
    path: 'breakageentry', loadChildren: () => import('./breakageentry/breakageentry.module').then(m => m.BreakageentryModule)
  },
  {
    path: 'licenserenewalparentunit', loadChildren: () => import('./licenserenewalparentunit/licenserenewalparentunit.module').then(m => m.LicenserenewalparentunitModule)
  },
  {
    path: 'stockworklist',
    loadChildren: () => import('./stockworklist/stockworklist.module').then(m => m.StockworklistModule)
  },
  {
    path: 'expiredproduct',
    loadChildren: () => import('./expiredproduct/expiredproduct.module').then(m => m.ExpiredproductModule)
  },
  {
    path: 'updateexpiry',
    loadChildren: () => import('./updateexpiry/updateexpiry.module').then(m => m.UpdateexpiryModule)
  },
  {
    path: 'stockadjustment',
    loadChildren: () => import('./stockadjustment/stockadjustment.module').then(m => m.StockadjustmentModule)
  },
  {
    path: 'returnworklist',
    loadChildren: () => import('./returnworklist/returnworklist.module').then(m => m.ReturnworklistModule)
  },
  {
    path: 'nonmovementproduct',
    loadChildren: () => import('./non-movementproduct/non-movementproduct.module').then(m => m.NonMovementproductModule)
  },
  {
    path: 'damageproducts',
    loadChildren: () => import('./damageproducts/damageproducts.module').then(m => m.DamageproductsModule)
  },
  {
    path: 'productionconsumption',
    loadChildren: () => import('./productionconsumption/productionconsumption.module').then(m => m.ProductionconsumptionModule)
  },
  {
    path: 'zerostockview',
    loadChildren: () => import('./zerostockview/zerostockview.module').then(m => m.ZerostockviewModule)
  },
  {
    path: 'stockmovement',
    loadChildren: () => import('./stockmovement/stockmovement.module').then(m => m.StockmovementModule)
  },
  {
    path: 'purchasereturn',
    loadChildren: () => import('./purchasereturn/purchasereturn.module').then(m => m.PurchasereturnModule)
  },
  {
    path: 'dispatch', loadChildren: () => import('./dispatch/dispatch.module').then(m => m.DispatchModule)
  },
  { path: 'bottling', loadChildren: () => import('./bottlingplan/bottlingplan.module').then(m => m.BottlingplanModule) },
  { path: 'boxing', loadChildren: () => import('./boxing/boxing.module').then(m => m.BoxingModule) },
  {
    path: 'outupdistbrandreg',
    loadChildren: () => import('./outupdistbrandreg/outupdistbrandreg.module').then(m => m.OutupdistbrandregModule)
  },
  {
    path: 'outupdistlabelreg',
    loadChildren: () => import('./outupdistlabelreg/outupdistlabelreg.module').then(m => m.OutupdistlabelregModule)
  },
  {
    path: 'reqforgodownchange',
    loadChildren: () => import('./reqforgodownchange/reqforgodownchange.module').then(m => m.ReqforgodownchangeModule)
  },
  { path: 'bwfl4new', loadChildren: () => import('./bwfl4new/bwfl4new.module').then(m => m.Bwfl4newModule) },
  { path: 'bwfl6new', loadChildren: () => import('./bwfl6new/bwfl6new.module').then(m => m.Bwfl6newModule) },
  { path: 'bwfl7new', loadChildren: () => import('./bwfl7new/bwfl7new.module').then(m => m.Bwfl7newModule) },
  { path: 'bwfl9new', loadChildren: () => import('./bwfl9new/bwfl9new.module').then(m => m.Bwfl9newModule) },
  { path: 'bwfl10new', loadChildren: () => import('./bwfl10new/bwfl10new.module').then(m => m.Bwfl10newModule) },
  { path: 'importpermitnew', loadChildren: () => import('./importpermitnew/importpermitnew.module').then(m => m.ImportpermitnewModule) },
  { path: 'importpermitnewup', loadChildren: () => import('./importpermitnewup/importpermitnewup.module').then(m => m.ImportpermitnewupModule) },
  { path: 'importpermitnewupapproval', loadChildren: () => import('./importpermitnewupapproval/importpermitnewup.module').then(m => m.ImportpermitnewupapprovalModule) },
  { path: 'orderpickupnew', loadChildren: () => import('./orderpickupnew/orderpickupnew.module').then(m => m.OrderpickupnewModule) },
  { path: 'orderpickupnewparent', loadChildren: () => import('./orderpickupnewparent/orderpickupnew.module').then(m => m.OrderpickupnewModule) },
  {
    path: 'transpassparentlogin',
    loadChildren: () => import('./transpassparentlogin/transpassparentlogin.module').then(m => m.TranspassparentloginModule)
  },
  {
    path: 'bottlingprodplannew',
    loadChildren: () => import('./bottlingprodplannew/bottlingprodplannew.module').then(m => m.BottlingprodplannewModule)
  },
  { path: 'orderpickup', loadChildren: () => import('./orderpickup/orderpickup.module').then(m => m.OrderpickupModule) },
  { path: 'stockin', loadChildren: () => import('./stockin/stockin.module').then(m => m.StockinModule) },
  { path: 'manualscanning', loadChildren: () => import('./manualscanning/manualscanning.module').then(m => m.ManualscanningModule) },
  {
    path: 'orderpickupparent',
    loadChildren: () => import('./orderpickupparent/orderpickupparent.module').then(m => m.OrderpickupparentModule)
  },
  // {
  //   path: 'brandlabeloverview',
  //   loadChildren: () => import('../distillery/brandlabeloverview/brandlabeloverview.module').then(m => m.BrandlabeloverviewModule)
  // },
  {
    path: 'importpermitcancellation',
    loadChildren: () => import('./importpermitcancellation/importpermitcancellation.module').then(m => m.ImportpermitcancellationModule)
  },
  {
    path: 'brandlabelregws',
    loadChildren: () => import('./brandlabelregws/brandlabelregws.module').then(m => m.BrandlabelregwsModule)
  },
  {
    path: 'bottlingprodplannewup',
    loadChildren: () => import('./bottlingprodplannewup/bottlingprodplannewup.module').then(m => m.BottlingprodplannewupModule)
  },
  {
    path: 'qrcodeprinting',
    loadChildren: () => import('./qrcodeprinting/qrcodeprinting.module').then(m => m.QrcodeprintingModule)
  },
  {
  
    path: 'brandlabeloverview',
    loadChildren: () => import('./brandlabeloverviewwh/brandlabeloverviewwh.module').then(m => m.BrandlabeloverviewwhModule)
  },
  {
  
    path: 'qrcodewastage',
    loadChildren: () => import('./qrcodewastage/qrcodewastage.module').then(m => m.QrcodewastageModule)
  },
  {
    path: 'transportpassparentunit',
    loadChildren: () => import('./transportpassparentunit/transportpassparentunit.module').then(m => m.TransportpassparentunitModule)
  },
  {
    path: 'dispatchparentunit',
    loadChildren: () => import('./dispatchparentunit/dispatchparentunit.module').then(m => m.DispatchparentunitModule)
  },
  {
    path: 'stockinhandparentunit',
    loadChildren: () => import('./stockinhandparentunit/stockinhandparentunit.module').then(m => m.StockinhandparentunitModule)
  },
  {
    path: 'transpassacknowledgement',
    loadChildren: () => import('./transpassacknowledgement/transpassacknowledgement.module').then(m => m.TranspassacknowledgementModule)
  },
  {
    path: 'rolloverstock', 
    loadChildren: () => import('./rolloverstock/rolloverstock.module').then(m => m.RolloverstockModule)
  },
  {
    path: 'advanceduty', 
    loadChildren: () => import('./advanceduty/advanceduty.module').then(m => m.AdvancedutyModule)
  },
  {
    path: 'maprequest',
    loadChildren: () => import('./maprequest/maprequest.module').then(m => m.MaprequestModule)
  },
  {
    path: 'processingwastage',
    loadChildren: () => import('./processingwastage/processingwastage.module').then(m => m.ProcessingwastageModule)
  },
  {
    path: 'accidentalcaserequest',
    loadChildren: () => import('./accidentalcaserequest/accidentalcaserequest.module').then(m => m.AccidentalcaserequestModule)
  },
  {
    path: 'applicantrequestforeal',
    loadChildren: () => import('./applicantrequestforeal/applicantrequestforeal.module').then(m => m.ApplicantrequestforealModule)
  },
  {
    path: 'stockinealapproval',
    loadChildren: () => import('./stockinealapproval/stockinealapproval.module').then(m => m.StockinealapprovalModule)
  }
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class WarehouseRoutingModule { }
