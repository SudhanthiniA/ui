import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'flb11',
    loadChildren: () => import('./flb11/flb11.module').then(m => m.Flb11Module)
  },
  {
    path: 'accidentalrequest',
    loadChildren: () => import('./accidentalrequest/accidentalrequest.module').then(m => m.AccidentalrequestModule)
  },
  {
    path: 'repackaging',
    loadChildren: () => import('./repackaging/accidentalrequest.module').then(m => m.AccidentalrequestModule)
  },
  {
    path: 'accidentalrequestacknowledgement',
    loadChildren: () => import('./accidentalrequestacknowledgement/accidentalrequest.module').then(m => m.AccidentalrequestModule)
  },
  {
    path: 'indentrequestnew',
    loadChildren: () => import('./indentrequestnew/indentrequestnew.module').then(m => m.IndentrequestnewModule)
  },
  {
    path: 'declarationofproducplan',
    loadChildren: () => import('./declarationofproducplan/bottlingprodplannewup.module').then(m => m.BottlingprodplannewupModule)
  },
  {
    path: 'prefermenter',
    loadChildren: () => import('./prefermenter/prefermenter.module').then(m => m.PrefermenterModule)
  },
  {
    path: 'penalityonundefinedsubject',
    loadChildren: () => import('./penalityonundefinedsubject/penalityonundefinedsubject.module').then(m => m.PenalityonundefinedsubjectModule)
  },
  {
    path: 'transportpasscan',
    loadChildren: () => import('./transportpasscan/transportpasscan.module').then(m => m.TransportpasscanModule)
  },
  {
    path: 'dispatched',
    loadChildren: () => import('./dispatched/dispatched.module').then(m => m.DispatchedModule)
  },
  {
    path: 'dispatch',
    loadChildren: () => import('./dispatchnew/dispatchnew.module').then(m => m.DispatchnewModule)
  },
  {
    path: 'fl36',
    loadChildren: () => import('./fl36/fl36.module').then(m => m.Fl36Module)
  },
  {
    path: 'fl1aindent',
    loadChildren: () => import('./fl1aindent/fl1aindent.module').then(m => m.Fl1aindentModule)
  },
  {
    path: 'tankdismentle',
    loadChildren: () => import('./tankdismentle/tankdismentle.module').then(m => m.TankdismentleModule)
  },
  {
    path: 'manualscanning',
    loadChildren: () => import('./manualscanning/manualscanning.module').then(m => m.ManualscanningModule)
  },
  {
    path: 'indentforclosure',
    loadChildren: () => import('./indentforclosure/indentforclosure.module').then(m => m.IndentforclosureModule)
  },
  {
    path: 'fl32-pd21',
    loadChildren: () => import('./fl32-pd21/fl32-pd21.module').then(m => m.Fl32Pd21Module)
  },
  {
    path: 'fl32-pd25',
    loadChildren: () => import('./fl32-pd25/fl32-pd25.module').then(m => m.Fl32Pd25Module)
  },
  // {
  //   path: 'bottlingproplannew',
  //   loadChildren: () => import('./bottlingproplannew/bottlingproplannew.module').then(m => m.BottlingproplannewModule)
  // },
  {
    path: 'bottlingprodplannewup',
    loadChildren: () => import('./bottlingprodplannewup/bottlingprodplannewup.module').then(m => m.BottlingprodplannewupModule)
  },
  {
    path: 'indentrequest',
    loadChildren: () => import('./indentrequest/indentrequest.module').then(m => m.IndentrequestModule)
  },
  {
    path: 'orderpickupomd',
    loadChildren: () => import('./orderpickup-omd/orderpickupomd.module').then(m => m.OrderpickupomdModule)
  },
  {
    path: 'indentrequestomd',
    loadChildren: () => import('./indentrequest-omd/indentrequest.module').then(m => m.IndentrequestModule)
  },
  {
    path: 'blendtransferrequest',
    loadChildren: () => import('./blendtransferrequest/blendtransferrequest.module').then(m => m.BlendtransferrequestModule)
  },
  {
    path: 'blendingtransferclmassflow',
    loadChildren: () => import('./blendingtransferclmassflow/blendingtransfercl.module').then(m => m.BlendingtransferclModule)
  },
  {
    path: 'mstistofspirit',
    loadChildren: () => import('./mstistofspirit/mstistofspirit.module').then(m => m.MstistofspiritModule)
  },
  {
    path: 'mstistprocess',
    loadChildren: () => import('./mstistprocess/mstistprocess.module').then(m => m.MstistprocessModule)
  },
  {
    path: 'ethanolorder',
    loadChildren: () => import('./ethanolorder/ethanolorder.module').then(m => m.EthanolorderModule)
  },
  {
    path: 'ethanolindent',
    loadChildren: () => import('./ethanolindent/ethanolindent.module').then(m => m.EthanolindentModule)
  },
  {
    path: 'dipbook',
    loadChildren: () => import('./dipbook/dipbook.module').then(m => m.DipbookModule)
  },
  {
    path: 'sendtostill',
    loadChildren: () => import('./sendtostill/sendtostill.module').then(m => m.SendtostillModule)
  },
  {
    path: 'clb4',
    loadChildren: () => import('./clb4/clb4.module').then(m => m.Clb4Module)
  },
  {
    path: 'clb5',
    loadChildren: () => import('./clb5/clb5.module').then(m => m.Clb5Module)
  },
  {
    path: 'clb6',
    loadChildren: () => import('./clb6/clb6.module').then(m => m.Clb6Module)
  },
  {
    path: 'clb7',
    loadChildren: () => import('./clb7/clb7.module').then(m => m.Clb7Module)
  },
  {
    path: 'clb8',
    loadChildren: () => import('./clb8/clb8.module').then(m => m.Clb8Module)
  },
  {
    path: 'clb9',
    loadChildren: () => import('./clb9/clb9.module').then(m => m.Clb9Module)
  },
  {
    path: 'clb10',
    loadChildren: () => import('./clb10/clb10.module').then(m => m.Clb10Module)
  },
  {
    path: 'clb11',
    loadChildren: () => import('./clb11/clb11.module').then(m => m.Clb11Module)
  },
  {
    path: 'clb12',
    loadChildren: () => import('./clb12/clb12.module').then(m => m.Clb12Module)
  },
  {
    path: 'clb13',
    loadChildren: () => import('./clb13/clb13.module').then(m => m.Clb13Module)
  },
  {
    path: 'clb14',
    loadChildren: () => import('./clb14/clb14.module').then(m => m.Clb14Module)
  },
  {
    path: 'clb15',
    loadChildren: () => import('./clb15/clb15.module').then(m => m.Clb15Module)
  },
  {
    path: 'clb16',
    loadChildren: () => import('./clb16/clb16.module').then(m => m.Clb16Module)
  },
  {
    path: 'clb17',
    loadChildren: () => import('./clb17/clb17.module').then(m => m.Clb17Module)
  },
  {
    path: 'clb18',
    loadChildren: () => import('./clb18/clb18.module').then(m => m.Clb18Module)
  },
  {
    path: 'clb19',
    loadChildren: () => import('./clb19/clb19.module').then(m => m.Clb19Module)
  },
  {
    path: 'clb20',
    loadChildren: () => import('./clb20/clb20.module').then(m => m.Clb20Module)
  },
  {
    path: 'preprationofflclblend',
    loadChildren: () => import('./preprationofflclblend/preprationofflclblend.module').then(m => m.PreprationofflclblendModule)
  },
  {
    path: 'requestforaccidentalcase',
    loadChildren: () => import('./requestforaccidentalcase/requestforaccidentalcase.module').then(m => m.RequestforaccidentalcaseModule)
  },
  {
    path: 'requestforextensionpermitvalidity',
    loadChildren: () => import('./requestforextensionpermitvalidity/requestforextensionpermitvalidity.module').then(m => m.RequestforextensionpermitvalidityModule)
  },
  {
    path: 'spiritpermitforeclose',
    loadChildren: () => import('./spiritpermitforeclose/spiritpermitforeclose.module').then(m => m.SpiritpermitforecloseModule)
  },

  {
    path: 'allotmentforeclosure',
    loadChildren: () => import('./allotmentforeclosure/allotmentforeclosure.module').then(m => m.AllotmentforeclosureModule)
  },
  // {
  //   path: 'stockinold',
  //   loadChildren: () => import('./stockinold/stockin.module').then(m => m.StockinModule)
  // },
  {
    path: 'yeastprocess',
    loadChildren: () => import('./yeastprocess/yeastprocess.module').then(m => m.YeastprocessModule)
  },
  {
    path: 'blendingprocess',
    loadChildren: () => import('./blendingprocess/blendingprocess.module').then(m => m.BlendingprocessModule)
  },
  {
    path: 'blendingtransfercl',
    loadChildren: () => import('./blendingtransfercl/blendingtransfercl.module').then(m => m.BlendingtransferclModule)
  },
  {
    path: 'otproductionplan',
    loadChildren: () => import('./otproductionplan/otproductionplan.module').then(m => m.OtproductionplanModule)
  },
  {
    path: 'prefermentation',
    loadChildren: () => import('./prefermentation/prefermentation.module').then(m => m.PrefermentationModule)
  },
  {
    path: 'fermentation',
    loadChildren: () => import('./fermentation/fermentation.module').then(m => m.FermentationModule)
  },
  {
    path: 'fermentation-new',
    loadChildren: () => import('./fermentation-new/fermentation-new.module').then(m => m.FermentationNewModule)
  },
  {
    path: 'cotdeclaration',
    loadChildren: () => import('./cotdeclaration/cotdeclaration.module').then(m => m.CotdeclarationModule)
  },
  {
    path: 'otprocess',
    loadChildren: () => import('./otprocess/otprocess.module').then(m => m.OtprocessModule)
  },
  {
    path: 'receiver',
    loadChildren: () => import('./receiver/receiver.module').then(m => m.ReceiverModule)
  },
  {
    path: 'importenaoutsidestate',
    loadChildren: () => import('./importenaoutsidestate/importenaoutsidestate.module').then(m => m.ImportenaoutsidestateModule)
  },
  {
    path: 'gatepasscancellation',
    loadChildren: () => import('./gatepasscancellation/gatepasscancellation.module').then(m => m.GatepasscancellationModule)
  },
  {
    path: 'stockin',
    loadChildren: () => import('./stockin/stockin.module').then(m => m.StockinModule)
  },
  {
    path: 'stockavailability',
    loadChildren: () => import('./stockavailability/stockavailability.module').then(m => m.StockavailabilityModule)
  },
  {
    path: 'sampledetailsentry',
    loadChildren: () => import('./sampledetailsentry/sampledetailsentry.module').then(m => m.SampledetailsentryModule)
  },
  {
    path: 'digitallocks',
    loadChildren: () => import('./digitallocks/digitallocks.module').then(m => m.DigitallocksModule)
  },
  {
    path: 'orderrequestfromwholesale',
    loadChildren: () => import('./orderrequestfromwholesale/orderrequestfromwholesale.module')
      .then(m => m.OrderrequestfromwholesaleModule)
  },
  {
    path: 'orderrequestfromwarehouse',
    loadChildren: () => import('./orderrequestfromwarehouse/orderrequestfromwarehouse.module')
      .then(m => m.OrderrequestfromwarehouseModule)
  },
  {
    path: 'requitionofrawmaterial',
    loadChildren: () => import('./requitionofrawmaterial/requitionofrawmaterial.module').then(m => m.RequitionofrawmaterialModule)
  },
  {
    path: 'orderverification',
    loadChildren: () => import('./orderverification/orderverification.module').then(m => m.OrderverificationModule)
  },
  {
    path: 'transferofdistillation',
    loadChildren: () => import('./transferofdistillation/transferofdistillation.module').then(m => m.TransferofdistillationModule)
  },
  {
    path: 'orderallocation',
    loadChildren: () => import('./orderallocation/orderallocation.module').then(m => m.OrderallocationModule)
  },
  {
    path: 'allotmentrequest',
    loadChildren: () => import('./allotmentrequest/allotmentrequest.module').then(m => m.AllotmentrequestModule)
  },
  {
    path: 'mf4-acknowledgement',
    loadChildren: () => import('./mf4-acknowledgement/mf4-acknowledgement.module')
      .then(m => m.Mf4AcknowledgementModule)
  },
  {
    path: 'mf4-receivedbydistillery',
    loadChildren: () => import('./mf4-receivedbydistillery/mf4-receivedbydistillery.module').then(m => m.Mf4ReceivedbydistilleryModule)
  },
  {
    path: 'pd-8',
    loadChildren: () => import('./pd-eight/pd-eight.module').then(m => m.PdEightModule)
  },
  {
    path: 'mf6-part2',
    loadChildren: () => import('./mf6-part2/mf6-part2.module').then(module => module.Mf6Part2Module)
  },
  {
    path: 'mf6-part-one',
    loadChildren: () => import('./mf6part1/mf6part1.module').then(m => m.Mf6part1Module)
  },
  {
    path: 'mf12-molassesregister',
    loadChildren: () => import('./mf12-molassesregister/mf12-molassesregister.module').then(m => m.Mf12MolassesregisterModule)
  },
  {
    path: 'pd8b-distillationdetails',
    loadChildren: () => import('./pd8b-distillationdetails/pd8b-distillationdetails.module').then(m => m.Pd8bDistillationdetailsModule)
  },
  {
    path: 'indentforblend',
    loadChildren: () => import('./indentforblend/indentforblend.module').then(m => m.IndentforblendModule)
  },
  {
    path: 'printqrcodes',
    loadChildren: () => import('./printqrcodes/printqrcodes.module').then(m => m.PrintqrcodesModule)
  },
  {
    path: 'bottlingprocess',
    loadChildren: () => import('./bottlingprocess/bottlingprocess.module').then(m => m.BottlingprocessModule)
  },
  {
    path: 'pd9a-rawmaterial',
    loadChildren: () => import('./pd9a-rawmaterial/pd9a-rawmaterial.module').then(m => m.Pd9aRawmaterialModule)
  },
  {
    path: 'blendingproductionplan',
    loadChildren: () => import('./blendingproductionplan/blendingproductionplan.module').then(m => m.BlendingproductionplanModule)
  },
  {
    path: 'indentspiritpurchase',
    loadChildren: () => import('./indentspiritpurchase/indentspiritpurchase.module').then(m => m.IndentspiritpurchaseModule)
  },
  {
    path: 'pd9b-productionsummary',
    loadChildren: () => import('./pd9b-productionsummary/pd9b-productionsummary.module').then(m => m.Pd9bProductionsummaryModule)
  },
  {
    path: 'pd8a',
    loadChildren: () => import('./pd8a/pd8a.module').then(m => m.Pd8aModule)
  },
  {
    path: 'orderpickup',
    loadChildren: () => import('./orderpickup/orderpickup.module').then(m => m.OrderpickupModule)
  },
  {
    path: 'pd22-registerofissuance',
    loadChildren: () => import('./pd22-registerofissuance/pd22-registerofissuance.module').then(m => m.Pd22RegisterofissuanceModule)
  },
  {
    path: 'pd9c-efficiencysummary',
    loadChildren: () => import('./pd9c-efficiencysummary/pd9c-efficiencysummary.module').then(m => m.Pd9cEfficiencysummaryModule)
  },
  {
    path: 'pd24-partwiseissuance',
    loadChildren: () => import('./pd24-partwiseissuance/pd24-partwiseissuance.module').then(m => m.Pd24PartwiseissuanceModule)
  },
  {
    path: 'pd26-accompanypass',
    loadChildren: () => import('./pd26-accompanypass/pd26-accompanypass.module').then(m => m.Pd26AccompanypassModule)
  },
  {
    path: 'pd26fortanker-id',
    loadChildren: () => import('./pd26fortanker-id/pd26fortanker-id.module').then(m => m.Pd26fortankerIdModule)
  },
  {
    path: 'pd25-passforremovalspirit',
    loadChildren: () => import('./pd25-passforremovalspririt/pd25-passforremovalspririt.module')
      .then(m => m.Pd25PassforremovalspriritModule)
  },
  {
    path: 'importpermit-outside-up',
    loadChildren: () => import('./importpermit-outside-up/importpermit-outside-up.module').then(m => m.ImportpermitOutsideUpModule)
  },
  {
    path: 'purchasepermitwithinup',
    loadChildren: () => import('./purchasepermitwithinup/purchasepermitwithinup.module').then(m => m.PurchasepermitwithinupModule)
  },
  {
    path: 'spiritpurchaseindent',
    loadChildren: () => import('./spiritpurchaseindent/spiritpurchaseindent.module').then(m => m.SpiritpurchaseindentModule)
  },
  {
    path: 'importrequest',
    loadChildren: () => import('./importrequest/importrequest.module').then(m => m.ImportrequestModule)
  },
  {
    path: 'purchaserequest',
    loadChildren: () => import('./purchaserequest/purchaserequest.module').then(m => m.PurchaserequestModule)
  },
  {
    path: 'exportorder',
    loadChildren: () => import('./exportorder/exportorder.module').then(m => m.ExportorderModule)
  },
  {
    path: 'purchase-permitrequest-withinup',
    loadChildren: () => import('./purchase-permitrequest-withinup/purchase-permitrequest-withinup.module')
      .then(m => m.PurchasePermitrequestWithinupModule)
  },
  {
    path: 'export-permit-request',
    loadChildren: () => import('./export-permit-request/export-permit-request.module').then(m => m.ExportPermitRequestModule)
  },
  {
    path: 'mf10-molassesentry',
    loadChildren: () => import('./mf10-molassesentry/mf10-molassesentry.module').then(m => m.Mf10MolassesentryModule)
  },
  {
    path: 'mf10',
    loadChildren: () => import('./mf10/mf10.module').then(m => m.Mf10Module)
  },
  {
    path: 'tankoverview',
    loadChildren: () => import('./tankoverview/tankoverview.module').then(m => m.TankoverviewModule)
  },
  {
    path: 'pd11-register-of-issuespirit',
    loadChildren: () => import('./pd11-register-of-issuespirit/pd11-register-of-issuespirit.module')
      .then(m => m.Pd11RegisterOfIssuespiritModule)
  },
  {
    path: 'pd6',
    loadChildren: () => import('./pd6-others/pd6-others.module')
      .then(m => m.Pd6OthersModule)
  },
  {
    path: 'pd17-registerof-bonds',
    loadChildren: () => import('./pd17-registerof-bonds/pd17-registerof-bonds.module')
      .then(m => m.Pd17RegisterofBondsModule)
  },
  {
    path: 'pd17-pd',
    loadChildren: () => import('./pd17-pd/pd17-registerof-bonds.module')
      .then(m => m.Pd17RegisterofBondsModule)
  },
  {
    path: 'pd17-id',
    loadChildren: () => import('./pd17-id/pd17-registerof-bonds.module')
      .then(m => m.Pd17RegisterofBondsModule)
  },
  { path: 'pd5-InspectorDiary', loadChildren: () => import('./pd5-inspector-diary/pd5-inspector-diary.module').then(m => m.Pd5InspectorDiaryModule) },
  { path: 'tankregistration', loadChildren: () => import('./tankregistration/tankregistration.module').then(m => m.TankregistrationModule) },
  {
    path: 'bottlingindent',
    loadChildren: () => import('./bottlingindent/bottlingindent.module')
      .then(m => m.BottlingindentModule)
  },
  {
    path: 'bottlingproductionplan',
    loadChildren: () => import('./bottlingproductionplan/bottlingproductionplan.module')
      .then(m => m.BottlingproductionplanModule)
  },
  { path: 'bottling-for-fl', loadChildren: () => import('./bottling-for-fl/bottling-for-fl.module').then(m => m.BottlingForFlModule) },
  {
    path: 'bottleboxing',
    loadChildren: () => import('./bottleboxing/bottleboxing.module')
      .then(m => m.BottleboxingModule)
  },
  {
    path: 'pd2',
    loadChildren: () => import('./pd2/pd2.module')
      .then(m => m.Pd2Module)
  },
  {
    path: 'pd18-form',
    loadChildren: () => import('./pd18-form/pd18-form.module')
      .then(m => m.Pd18FormModule)
  },
  {
    path: 'pd20-form',
    loadChildren: () => import('./pd20-form/pd20-form.module')
      .then(m => m.Pd20FormModule)
  },
  {
    path: 'pd20-id',
    loadChildren: () => import('./pd20-id/pd20-form.module')
      .then(m => m.Pd20FormModule)
  },
  {
    path: 'flb3',
    loadChildren: () => import('./flb3/flb3.module')
      .then(m => m.Flb3Module)
  },
  {
    path: 'flb4-form',
    loadChildren: () => import('./flb4-form/flb4-form.module')
      .then(m => m.Flb4FormModule)
  },
  {
    path: 'flb5-form',
    loadChildren: () => import('./flb5-form/flb5-form.module')
      .then(m => m.Flb5FormModule)
  },
  {
    path: 'flb6-form',
    loadChildren: () => import('./flb6-form/flb6-form.module')
      .then(m => m.Flb6FormModule)
  },
  {
    path: 'pd7',
    loadChildren: () => import('./pd7gaugeregister/pd7gaugeregister.module')
      .then(m => m.Pd7gaugeregisterModule)
  },
  {
    path: 'distilleryregreqwithinup',
    loadChildren: () => import('./distilleryregreqwithinup/distilleryregreqwithinup.module')
      .then(m => m.DistilleryregreqwithinupModule)
  },
  {
    path: 'distilleryregoutsideup',
    loadChildren: () => import('./distilleryregoutsideup/distilleryregoutsideup.module')
      .then(m => m.DistilleryregoutsideupModule)
  },
  {
    path: 'pd13',
    loadChildren: () => import('./pd13-form/pd13-form.module')
      .then(m => m.Pd13FormModule)
  },
  {
    path: 'pd12',
    loadChildren: () => import('./pd12form/pd12form.module')
      .then(m => m.Pd12formModule)
  },
  {
    path: 'pd10',
    loadChildren: () => import('./pd10form/pd10form.module')
      .then(m => m.Pd10formModule)
  },
  {
    path: 'brewery',
    loadChildren: () => import('./brewery/brewery.module').then(m => m.BreweryModule)
  },
  {
    path: 'pd9',
    loadChildren: () => import('./pd9/pd9.module').then(m => m.Pd9Module)
  },
  {
    path: 'pamr1',
    loadChildren: () => import('./poweralcoholmovementreport1/poweralcoholmovementreport1.module').then(m => m.Poweralcoholmovementreport1Module)
  },
  {
    path: 'pamr2',
    loadChildren: () => import('./poweralcoholmoveamendrpt/poweralcoholmoveamendrpt.module').then(m => m.PoweralcoholmoveamendrptModule)
  },
  {
    path: 'pamr3',
    loadChildren: () => import('./pamr3/pamr3.module').then(m => m.Pamr3Module)
  },
  {
    path: 'gatepassfromdistillerytomanufacturewholesale',
    loadChildren: () => import('./gatepassfromdistillerytomanufacturewholesale/gatepassfromdistillerytomanufacturewholesale.module').then(m => m.GatepassfromdistillerytomanufacturewholesaleModule)
  },
  {
    path: 'removalofspiritfordenaturing',
    loadChildren: () => import('./removalofspiritfordenaturing/removalofspiritfordenaturing.module').then(m => m.RemovalofspiritfordenaturingModule)
  },
  {
    path: 'pd29-form',
    loadChildren: () => import('./pd29-form/pd29-form.module')
      .then(m => m.Pd29FormModule)
  },
  {
    path: 'pd8-form',
    loadChildren: () => import('./pd8-form/pd8-form.module')
      .then(m => m.Pd8FormModule)
  },
  {
    path: 'pd4-form',
    loadChildren: () => import('./pd4-form/pd4-form.module')
      .then(m => m.Pd4FormModule)
  },
  {
    path: 'molassesdeclaration',
    loadChildren: () => import('./molassesdeclaration/molassesdeclaration.module')
      .then(m => m.MolassesdeclarationModule)
  },
  // {
  //   path: 'productionplanforspirit',
  //   loadChildren: () => import('./productionplanforspirit/productionplanforspirit.module')
  //     .then(m => m.ProductionplanforspiritModule)
  // },
  {
    path: 'pd32-form',
    loadChildren: () => import('./pd32-form/pd32-form.module')
      .then(m => m.Pd32FormModule)
  },
  {
    path: 'pd30-form',
    loadChildren: () => import('./pd30-form/pd30-form.module')
      .then(m => m.Pd30FormModule)
  },
  {
    path: 'alcoholtechnologistatlab',
    loadChildren: () => import('./alcoholtechnologistatlab/alcoholtechnologistatlab.module')
      .then(m => m.AlcoholtechnologistatlabModule)
  },
  {
    path: 'cotregister',
    loadChildren: () => import('./cotregister/cotregister.module')
      .then(m => m.CotregisterModule)
  },
  {
    path: 'pd15-form',
    loadChildren: () => import('./pd15-form/pd15-form.module')
      .then(m => m.Pd15FormModule)
  },
  {
    path: 'pd23-form',
    loadChildren: () => import('./pd23-form/pd23-form.module')
      .then(m => m.Pd23FormModule)
  },
  {
    path: 'pd27-form',
    loadChildren: () => import('./pd27-form/pd27-form.module')
      .then(m => m.Pd27FormModule)
  },
  {
    path: 'pd21-form',
    loadChildren: () => import('./pd21-form/pd21-form.module')
      .then(m => m.Pd21FormModule)
  },
  {
    path: 'tankconversion',
    loadChildren: () => import('./tankconversion/tankconversion.module')
      .then(m => m.TankconversionModule)
  },
  {
    path: 'declarationofcot',
    loadChildren: () => import('./declarationofcot/declarationofcot.module')
      .then(m => m.DeclarationofcotModule)
  },
  {
    path: 'tankrepair',
    loadChildren: () => import('./tankrepair/tankrepair.module')
      .then(m => m.TankrepairModule)
  },
  {
    path: 'tankmaintenance',
    loadChildren: () => import('./tankmaintenance/tankmaintenance.module')
      .then(m => m.TankmaintenanceModule)
  },
  {
    path: 'tanktransferid',
    loadChildren: () => import('./tanktransfer-id/tanktransfer.module')
      .then(m => m.TanktransferModule)
  },
  {
    path: 'tanktransfer',
    loadChildren: () => import('./tanktransfer/tanktransfer.module')
      .then(m => m.TanktransferModule)
  },
  {
    path: 'regdistiilleryexpunit-outsideindia',
    loadChildren: () => import('./regdistexpunit-outsideindia/regdistexpunit-outsideindia.module')
      .then(m => m.RegdistexpunitOutsideindiaModule)
  },
  {
    path: 'transtoginplant',
    loadChildren: () => import('./transtoginplant/transtoginplant.module')
      .then(m => m.TranstoginplantModule)
  },
  {
    path: 'receivefromginplant',
    loadChildren: () => import('./receivefromginplant/receivefromginplant.module')
      .then(m => m.ReceivefromginplantModule)
  },
  {
    path: 'exportindentliquor',
    loadChildren: () => import('./exportindentliquor/exportindentliquor.module')
      .then(m => m.ExportindentliquorModule)
  },
  {
    path: 'transtoginbwstoragevat',
    loadChildren: () => import('./transtoginbwstoragevat/transtoginbwstoragevat.module')
      .then(m => m.TranstoginbwstoragevatModule)
  },
  {
    path: 'redistillationofspirit',
    loadChildren: () => import('./redistillationofspirit/redistillationofspirit.module')
      .then(m => m.RedistillationofspiritModule)
  },
  {
    path: 'transofspirittoclflblendingvat',
    loadChildren: () => import('./transofspirittoclflblendingvat/transofspirittoclflblendingvat.module')
      .then(m => m.TransofspirittoclflblendingvatModule)
  },
  {
    path: 'fermenterprocess',
    loadChildren: () => import('./fermenterprocess/fermenterprocess.module')
      .then(m => m.FermenterprocessModule)
  },
  {
    path: 'receivernew',
    loadChildren: () => import('./receivernew/receivernew.module')
      .then(m => m.ReceivernewModule)
  },
  {
    path: 'declarationofcotnew',
    loadChildren: () => import('./declarationofcotnew/declarationofcotnew.module')
      .then(m => m.DeclarationofcotnewModule)
  },
  {
    path: 'transfertostorage',
    loadChildren: () => import('./transfertostorage/transfertostorage.module')
      .then(m => m.TransfertostorageModule)
  },
  {
    path: 'stockinnew',
    loadChildren: () => import('./stockinnew/stockinnew.module')
      .then(m => m.StockinnewModule)
  },
  {
    path: 'breakageentry',
    loadChildren: () => import('./breakageentry/breakageentry.module')
      .then(m => m.BreakageentryModule)
  },
  {
    path: 'stockinhand',
    loadChildren: () => import('./stockinhand/stockinhand.module')
      .then(m => m.StockinhandModule)
  },
  {
    path: 'damagemissingproducts',
    loadChildren: () => import('./damagemissingproducts/damagemissingproducts.module')
      .then(m => m.DamagemissingproductsModule)
  },
  {
    path: 'transportationpass',
    loadChildren: () => import('./transportationpass/transportationpass.module')
      .then(m => m.TransportationpassModule)
  },
  {
    path: 'brandlabelreg',
    loadChildren: () => import('./brandlabelreg/brandlabelreg.module')
      .then(m => m.BrandlabelregModule)
  },
  {
    path: 'brandlabelregnew',
    loadChildren: () => import('./brandlabelregnew/brandlabelregbrew.module')
      .then(m => m.BrandlabelregbrewModule)
  },
  {
    path: 'pd20-fl1-fl1a',
    loadChildren: () => import('./pd20-fl1-fl1a/pd20-fl1-fl1a.module')
      .then(m => m.Pd20Fl1Fl1aModule)
  },
  {
    path: 'drafttransportpass',
    loadChildren: () => import('./drafttransportpass/drafttransportpass.module')
      .then(m => m.DrafttransportpassModule)
  },
  {
    path: 'finaltransportpass',
    loadChildren: () => import('./finaltransportpass/finaltransportpass.module')
      .then(m => m.FinaltransportpassModule)
  },
  {
    path: 'brandlabeloverview',
    loadChildren: () => import('./brandlabeloverview/brandlabeloverview.module')
      .then(m => m.BrandlabeloverviewModule)
  },
  {
    path: 'wholesaleindent',
    loadChildren: () => import('./wholesaleindent/wholesaleindent.module')
      .then(m => m.WholesaleindentModule)
  },
  {
    path: 'pd20-wholesale',
    loadChildren: () => import('./pd20-wholesale/pd20-wholesale.module')
      .then(m => m.Pd20WholesaleModule)
  },
  {
    path: 'pdt-declaration-fl',
    loadChildren: () => import('./pdt-declaration-fl/pdt-declaration-fl.module')
      .then(m => m.PdtDeclarationFlModule)
  },
  {
    path: 'pd18imflexport',
    loadChildren: () => import('./pd18imflexport/pd18imflexport.module')
      .then(m => m.Pd18imflexportModule)
  },
  {
    path: 'pd18',
    loadChildren: () => import('./pd18-id/pd18-id.module')
      .then(m => m.Pd18IdModule)
  },
  {
    path: 'pd18omd',
    loadChildren: () => import('./pd18-omd/pd18-id.module')
      .then(m => m.Pd18IdModule)
  },
  {
    path: 'pd26imflexport',
    loadChildren: () => import('./pd26imflexport/pd26imflexport.module')
      .then(m => m.Pd26imflexportModule)
  },
  {
    path: 'qrcodewastage',
    loadChildren: () => import('./qrcodewastage/qrcodewastage.module')
      .then(m => m.QrcodewastageModule)
  },
  {
    path: 'exportpermit',
    loadChildren: () => import('./exportpermit/exportpermit.module')
      .then(m => m.ExportpermitModule)
  },
  {
    path: 'qrcodeprinting',
    loadChildren: () => import('./qrcodeprinting/qrcodeprinting.module')
      .then(m => m.QrcodeprintingModule)
  },
 
  {
    path: 'edpreports',
    loadChildren: () => import('./edpreports/edpreports.module')
      .then(m => m.EdpreportsModule)
  },
  {
    path: 'pd25fortankerid',
    loadChildren: () => import('./pd25fortankerid/pd25fortankerid.module')
      .then(m => m.Pd25fortankeridModule)
  },
  {
    path: 'spiritpurchasepermit-id',
    loadChildren: () => import('./spiritpurchasepermit-id/spiritpurchasepermit-id.module')
      .then(m => m.SpiritpurchasepermitIdModule)
  },
  {
    path: 'spiritpurchaseindent-inup-id',
    loadChildren: () => import('./spiritpurchaseindent-inup-id/spiritpurchaseindent-inup-id.module')
      .then(m => m.SpiritpurchaseindentInupIdModule)
  },
  {
    path: 'pd25-pipiline',
    loadChildren: () => import('./pd25-pipiline/pd25-pipiline.module')
      .then(m => m.Pd25PipilineModule)
  },
  {
    path: 'pd25transportpassid',
    loadChildren: () => import('./pd25-transportpass-id/pd25-transportpass-id.module')
      .then(m => m.Pd25TransportpassIdModule)
  },
  {
    path: 'pd26-pipilineid',
    loadChildren: () => import('./pd26-pipilineid/pd25-pipiline.module')
      .then(m => m.Pd25PipilineModule)
  },
  {
    path: 'pd26-id',
    loadChildren: () => import('./pd26-id/pd26-id.module')
      .then(m => m.Pd26IdModule)
  },
  {
    path: 'atlab',
    loadChildren: () => import('./atlab/atlab.module')
      .then(m => m.AtlabModule)
  },
  { path: 'pd5', loadChildren: () => import('./pd5/pd5.module').then(m => m.Pd5Module) },
  { path: 'advancedutyreg', loadChildren: () => import('./advancedutyreg/advancedutyreg.module').then(m => m.AdvancedutyregModule) },
  { path: 'exportpermitid', loadChildren: () => import('./exportpermit-id/exportpermit-id.module').then(m => m.ExportpermitIdModule) },
  { path: 'pd24partwiseissuance', loadChildren: () => import('./pd24-partwiseissuance-id/pd24-partwiseissuance-id.module').then(m => m.Pd24PartwiseissuanceIdModule) },
  {
    path: 'pd181d',
    loadChildren: () => import('./pd18-id/pd18-id.module')
      .then(m => m.Pd18IdModule)
  },
  {
    path: 'pd26-pipelinepd',
    loadChildren: () => import('./pd26-pipelinepd/pd26-pipelinepd.module').then(m => m.Pd26PipelinepdModule)
  },
  {
    path: 'bottlingwastagereport',
    loadChildren: () => import('./bottlingwastagereport/bottlingwastagereport.module').then(m => m.BottlingwastagereportModule)
  },
  {
    path: 'maprequest',
    loadChildren: () => import('./maprequest/maprequest.module').then(m => m.MaprequestModule)
  },
  {
    path: 'indentacceptance',
    loadChildren: () => import('./indentacceptance/indentacceptance.module').then(m => m.IndentacceptanceModule)
  },
  {
    path: 'mstistmolasses',
    loadChildren: () => import('./mstistmolasses/mstistmolasses.module').then(m => m.MstistmolassesModule)
  },
  {
    path: 'omdregistration',
    loadChildren: () => import('./omdregistration/omdregistration.module').then(m => m.OmdregistrationModule)
  },
  {
    path: 'profile',
    loadChildren: () => import('./profile/profile.module').then(m => m.ProfileModule)
  },
  {
    path: 'newlineregistration',
    loadChildren: () => import('./newlineregistration/newlineregistration.module').then(m => m.NewlineregistrationModule)
  },
  {
    path: 'unmapandremapping',
    loadChildren: () => import('./unmapandremapping/unmapandremapping.module').then(m => m.UnmapandremappingModule)
  },
  {
    path: 'bottlinglineoverview',
    loadChildren: () => import('./bottlinglineoverview/bottlinglineoverview.module').then(m => m.BottlinglineoverviewModule)
  },
  {
    path: 'bottlinglinerepair',
    loadChildren: () => import('./bottlinglinerepair/bottlinglinerepair.module').then(m => m.BottlinglinerepairModule)
  },
  {
    path: 'bottlinglinedismantle',
    loadChildren: () => import('./bottlinglinedismantle/bottlinglinedismantle.module').then(m => m.BottlinglinedismantleModule)
  },
  {
    path: 'bottlinglinemaintenance',
    loadChildren: () => import('./bottlinglinemaintenance/bottlinglinemaintenance.module').then(m => m.BottlinglinemaintenanceModule)
  },
  {
    path: 'delinkconverofbottlingline',
    loadChildren: () => import('./delinkconverofbottlingline/delinkconverofbottlingline.module').then(m => m.DelinkconverofbottlinglineModule)
  },
  {
    path: 'allotherpenalties',
    loadChildren: () => import('./allotherpenalties/allotherpenalties.module').then(m => m.AllotherpenaltiesModule)
  },
  {
    path: 'palletmaster',
    loadChildren: () => import('./palletmaster/palletmaster.module').then(m => m.PalletmasterModule)
  },
  {
    path: 'palletcasecodemapping',
    loadChildren: () => import('./palletcasecodemapping/palletcasecodemapping.module').then(m => m.PalletcasecodemappingModule)
  },
  {
    path: 'palletcasecodeunmapping',
    loadChildren: () => import('./palletcasecodeunmapping/palletcasecodeunmapping.module').then(m => m.PalletcasecodeunmappingModule)
  },
  {
    path: 'enapurchaseorder',
    loadChildren: () => import('./enapurchaseorder/enapurchaseorder.module').then(m => m.EnapurchaseorderModule)
  },
  {
    path: 'allotmentofmolasses',
    loadChildren: () => import('./allotmentofmolasses/allotmentofmolasses.module').then(m => m.AllotmentofmolassesModule)
  },
  {
    path: 'enamolassesadjustment',
    loadChildren: () => import('./enamolassesadjustment/enamolassesadjustment.module').then(m => m.EnamolassesadjustmentModule)
  },
  {
  path: 'foreclosureofenapurchaseorder',
  loadChildren: () => import('./foreclosureofenapurchaseorder/foreclosureofenapurchaseorder.module').then(m => m.ForeclosureofenapurchaseorderModule)
},
{
path: 'enapurchaseorderacceptance',
loadChildren: () => import('./enapurchaseorderacceptance/enapurchaseorderacceptance.module').then(m => m.EnapurchaseorderacceptanceModule)
},
 {
  path: 'requestforethanalorder',
  loadChildren: () => import('./requestforethanalorder-id/requestfrethanalorder.module').then(m => m.RequestfrethanalorderModule)
  },
  {
    path: 'ethanalindentacceptance',
    loadChildren: () => import('./ethanalindentacceptance/ethanalindentacceptance.module').then(m => m.EthanalindentacceptanceModule)
   },
   {
    path: 'dispatchid',
    loadChildren: () => import('./dispatch-id/dispatch-id.module').then(m => m.DispatchIdModule)
   },
{
path: 'pamr1id',
loadChildren: () => import('./pamr1/pamr1-id.module').then(m => m.Pamr1IdModule)
},
{
  path: 'pd26acknowledgementid',
  loadChildren: () => import('./pd26acknowledgement-id/pd26acknowledgement-id.module').then(m => m.Pd26acknowledgementIdModule)
  },
  {
    path: 'uploadletteragainstspiritpurchaserequest',
    loadChildren: () => import('./uploadletteragainstspiritpurchaserequest/uploadletteragainstspiritpurchaserequest.module').then(m => m.UploadletteragainstspiritpurchaserequestModule)
    },
    {
      path: 'pd18enapurchaseorder',
      loadChildren: () => import('./pd18enapurchaseorder/pd8a.module').then(m => m.Pd8aModule)
      },
      {
        path: 'pd26enapurchaseorder',
        loadChildren: () => import('./pd26enapurchaseorder/pd26.module').then(m => m.Pd26Module)
        },
        {
  path: 'spiritpurchasereqwithinstate',
  loadChildren: () => import('./spiritpurchasereqwithinstate/spiritpurchasereqwithinstate.module').then(m => m.SpiritpurchasereqwithinstateModule)
  },
  {
  path: 'acceptofspiritpurchasereqwithinstate',
  loadChildren: () => import('./acceptofspiritpurchasereqwithinstate/acceptofspiritpurchasereqwithinstate.module').then(m => m.AcceptofspiritpurchasereqwithinstateModule)
  },
  {
    path: 'pd25enapurchaseorder',
    loadChildren: () => import('./pd25enapurchaseorder/pd25enapurchaseorder.module').then(m => m.Pd25enapurchaseorderModule)
    },
    {
      path: 'distilleryconfiguration',
      loadChildren: () => import('./distilleryconfiguration/distilleryconfiguration.module').then(m => m.DistilleryconfigurationModule)
      },
      {
        path: 'indentacceptance-cl2',
        loadChildren: () => import('./indentacceptance-cl2/indentacceptance-cl2.module').then(m => m.IndentacceptanceCl2Module)
        },
        {
          path: 'finaltransportpass-cl2',
          loadChildren: () => import('./finaltransportpass-cl2/finaltransportpass-cl2.module').then(m => m.FinaltransportpassCl2Module)
          },
          {
            path: 'tankdrumbarrelregistration',
            loadChildren: () => import('./tankdrumbarrelregistration/tankdrumbarrelregistration.module').then(m => m.TankdrumbarrelregistrationModule)
            },
          {
            path: 'drumbarrelregistration',
            loadChildren: () => import('./drumbarrelregistration/drumbarrelregistration.module').then(m => m.DrumbarrelregistrationModule)
            },
            {
              path: 'storageofspiritinbarreldrum',
              loadChildren: () => import('./storageofspiritinbarreldrum/drumbarrelregistration.module').then(m => m.DrumbarrelregistrationModule)
              },
              {
                path: 'denaturationprocess',
                loadChildren: () => import('./denaturationprocess/denaturationprocess.module').then(m => m.DenaturationprocessModule)
  },
  {
    path: 'transportpassforaccidentalfordispatch',
    loadChildren: () => import('./transportpassforaccidentalfordispatch/transportpassforaccidentalfordispatch.module').then(m => m.TransportpassforaccidentalfordispatchModule)
},
{
  path: 'applicationforredistillationofbottledstock',
  loadChildren: () => import('./applicationforredistillationofbottledstock/applicationforredistillationofbottledstock.module').then(m => m.ApplicationforredistillationofbottledstockModule)
},
{
  path: 'afterapprovaltransferforredistillation',
  loadChildren: () => import('./afterapprovaltransferforredistillation/afterapprovaltransferforredistillation.module').then(m => m.AfterapprovaltransferforredistillationModule)
},
{
  path: 'returntransportpass',
  loadChildren: () => import('./returntransportpass/transportpassforaccidentalfordispatch.module').then(m => m.TransportpassforaccidentalfordispatchModule)
},
{
  path: 'redistillationrequestforspiritblind',
  loadChildren: () => import('./redistillationrequestforspiritblind/redistillationrequestforspiritblind.module').then(m => m.RedistillationrequestforspiritblindModule)
},
{
  path: 'orderpickupaccidentaltp',
  loadChildren: () => import('./orderpickupaccidentaltp/orderpickupaccidentaltp.module').then(m => m.OrderpickupaccidentaltpModule)
},
  {
    path: 'fl33',
    loadChildren: () => import('./fl33/fl33.module').then(m => m.Fl33Module)
  },
  {
    path: 'accidentalrequestdeo',
    loadChildren: () => import('./accidentalrequestdeo/accidentalrequest.module').then(m => m.AccidentalrequestModule)
  },
  {
    path: 'theftapplication',
    loadChildren: () => import('./theftapplication/theftapplication.module').then(m => m.TheftapplicationModule)
  },
  {
    path: 'transportpassfortheftcase',
    loadChildren: () => import('./transportpassfortheftcase/transportpassfortheftcase.module').then(m => m.TransportpassfortheftcaseModule)
  },
  {
    path: 'orderpickuptheftcase',
    loadChildren: () => import('./orderpickuptheftcase/orderpickuptheftcase.module').then(m => m.OrderpickuptheftcaseModule)
  },
  {
    path: 'masterprimarydrumbarrelreg',
    loadChildren: () => import('./masterprimarydrumbarrelreg/masterprimarydrumbarrelreg.module').then(m => m.MasterprimarydrumbarrelregModule)
  },
  {
    path: 'importpermit',
    loadChildren: () => import('./importpermit/importpermit.module').then(m => m.ImportpermitModule)
  },
  {
    path: 'spiritimportorder',
    loadChildren: () => import('./spiritimportorder/spiritimportorder.module').then(m => m.SpiritimportorderModule)
  },
  {
    path: 'stockactivity',
    loadChildren: () => import('./stockactivity/stockactivity.module').then(m => m.StockactivityModule)
  },
  {
    path: 'spiritimportorderforeclosure',
    loadChildren: () => import('./spiritimportorderforeclosure/spiritimportorderforeclosure.module').then(m => m.SpiritimportorderforeclosureModule)
  },
  {
    path: 'spiritexportorderforeclosure',
    loadChildren: () => import('./spiritexportorderforeclosure/spiritexportorderforeclosure.module').then(m => m.SpiritexportorderforeclosureModule)
  },
  {
    path: 'applicationforpassbook',
    loadChildren: () => import('./applicationforpassbook/applicationforpassbook.module').then(m => m.ApplicationforpassbookModule)
  },
  {
    path: 'declarationofmolasses',
    loadChildren: () => import('./declarationofmolasses/declarationofmolasses.module').then(m => m.DeclarationofmolassesModule)
  },
  {
    path: 'applicationforimportofmolasses',
    loadChildren: () => import('./applicationforimportofmolasses/applicationforimportofmolasses.module').then(m => m.ApplicationforimportofmolassesModule)
  },
  {
    path: 'applicationforexportofmolasses',
    loadChildren: () => import('./applicationforexportofmolasses/applicationforexportofmolasses.module').then(m => m.ApplicationforexportofmolassesModule)
  },
  {
    path: 'payment',
    loadChildren: () => import('./payment/payment.module').then(m => m.PaymentModule)
  },
  {
    path: 'transportpassafterorderpickup',
    loadChildren: () => import('./transportpassafterorderpickup/transportpassafterorderpickup.module').then(m => m.TransportpassafterorderpickupModule)
  },
  {
    path: 'otdeclarationotcontinousprocess',
    loadChildren: () => import('./otdeclaration-otcontinousprocess/otdeclaration-otcontinousprocess.module').then(m => m.OtdeclarationotcontinousprocessModule)
  },
  {
    path: 'otdeclarationbatch',
    loadChildren: () => import('./otdeclarationbatch/otdeclaration-otcontinousprocess.module').then(m => m.OtdeclarationotcontinousprocessModule)
  },
  {
                      
    path: 'fermentationotcontinuousprocess',
    loadChildren: () => import('./fermentation-ot-continuousprocess/fermentation-ot-continuousprocess.module').then(m => m.FermentationOtContinuousprocessModule)
  },
  {
    path: 'cot-declaration-ot',
    loadChildren: () => import('./cot-otdeclaration-ot-continuation-process/cot-declaration-ot-continuation-process.module').then(m => m.CotDeclarationOtContinuationProcessModule)
  } ,                  
  
  {
    path: 'ot-type-declaration',
    loadChildren: () => import('./ottypedeclaration/ottypedeclaration.module').then(m => m.OttypedeclarationModule)
  },   
  {
    path: 'finaltransportpassmodification',
    loadChildren: () => import('./finaltransportpassmodification/finaltransportpassmodification.module').then(m => m.FinaltransportpassmodificationModule)
  },   
  {
    path: 'transportpassmodificationapproval',
    loadChildren: () => import('./transportpassmodificationapproval/transportpassmodificationapproval.module').then(m => m.TransportpassmodificationapprovalModule)
  },
  {
    path: 'ist',
    loadChildren: () => import('./ist/ist.module').then(m => m.IstModule)
  },
  {
    path: 'fl16pd25',
    loadChildren: () => import('./fl16-pd25/fl16-pd25.module').then(m => m.Fl16Pd25Module)
  },
  {
    path: 'importpermitapplofnarcoticdrug',
    loadChildren: () => import('./importpermitapplofnarcoticdrug/importpermitapplofnarcoticdrug.module').then(m => m.ImportpermitapplofnarcoticdrugModule)
  }, 
  {
    path: 'exportpermitapplofnarcoticdrug',
    loadChildren: () => import('./exportpermitapplofnarcoticdrug/exportpermitapplofnarcoticdrug.module').then(m => m.ExportpermitapplofnarcoticdrugModule)
  },    
  {
    path: 'ndtpermit',
    loadChildren: () => import('./ndtpermit/ndtpermit.module').then(m => m.NdtpermitModule)
  } ,
  {
    path: 'ndepermit',
    loadChildren: () => import('./ndepermit/ndepermit.module').then(m => m.NdepermitModule)
  } ,
  {
    path: 'stockreconcillation',
    loadChildren: () => import('./stockreconcillation/stockin.module').then(m => m.StockreconcillationModule)
  },
  {
    path: 'fl50',
    loadChildren: () => import('./fl50/fl50.module').then(m => m.Fl50Module)
  },
  {
    path: 'omd',
    loadChildren: () => import('./omd/omd.module').then(m => m.OmdModule)
  },
  {
    path: 'applicantrequestforeal',
    loadChildren: () => import('./applicantrequestforeal/applicantrequestforeal.module').then(m => m.ApplicantrequestforealModule)
  },
  {
    path: 'stockinealapproval',
    loadChildren: () => import('./stockinealapproval/stockinealapproval.module').then(m => m.StockinealapprovalModule)
  },
  {
    path: 'pd21',
    loadChildren: () => import('./pd21/pd21.module').then(m => m.Pd21Module)
  },
  {
    path: 'indentacceptancecivilcsd',
    loadChildren: () => import('./indentacceptancecivilcsd/indentacceptancecivilcsd.module').then(m => m.IndentacceptancecivilcsdModule)
  },
  {
    path: 'edpregistration',
    loadChildren: () => import('./edpregistration/edpregistration.module')
      .then(m => m.EdpregistrationModule)
  },
  {
    path: 'pd25pipilinemassflow',
    loadChildren: () => import('./pd25pipilinemassflow/pd25-pipiline.module')
      .then(m => m.Pd25PipilineModule)
  },
  {
    path: 'importofspritbyfl39',
    loadChildren: () => import('./importofspritbyfl39/importofspritbyfl39.module')
      .then(m => m.Importofspritbyfl39Module)
  },
  {
    path: 'istnew',
    loadChildren: () => import('./istnew/istnew.module')
      .then(m => m.IstnewModule)
  },
  
  {
    path: 'pd20weighmentbridge',
    loadChildren: () => import('./pd20weighmentbridge/weighmentbridge.module')
      .then(m => m.WeighmentbridgeModule)
  },
  {
    path: 'pd25weighmentbridge',
    loadChildren: () => import('./pd25weighmentbridge/weighmentbridge.module')
      .then(m => m.WeighmentbridgeModule)
  },
  {
        path: 'pd18registermassflow',
        loadChildren: () => import('./pd18-register-mass-flow/pd18-register-mass-flow.module').then(m => m.Pd18RegisterMassFlowModule)
  },
  {
          path: 'pd26massflow',
          loadChildren: () => import('./pd26-mass-flow/pd26-mass-flow.module').then(m => m.Pd26MassFlowModule)
  },
  {
          path: 'accidenatlrequestforomd',
          loadChildren: () => import('./accidentalrequestforomd/accidentalrequestforomd.module').then(m => m.AccidentalrequestforomdModule)
  },
  {
    path: 'iescmspamr',
    loadChildren: () => import('./iescms-pamr/iescmspamr.module').then(m => m.IescmspamrModule)
},
  {
    path: 'accidentalpd25omdondeo',
    loadChildren: () => import('./accidentalpd25omdondeo/accidentalrequestforomd.module').then(m => m.AccidentalrequestforomdModule)
},
  {
          path: 'accidentalrequestfordeo',
          loadChildren: () => import('./accidentalrequestfordeologin/accidentalrequestfordeologin.module').then(m => m.AccidentalrequestfordeologinModule)
  },
  {
          path: 'mf4receivingwastage',
          loadChildren: () => import('./mf4receivingwastage/mf4receivingwastage.module').then(m => m.Mf4receivingwastageModule)
  },
  {
          path: 'distillerylogin',
          loadChildren: () => import('./distillerylogin/distillerylogin.module').then(m => m.DistilleryloginModule)
  },
  {
    path: 'pd25forfl41',
    loadChildren: () => import('./pd25gatepagesforfl41-oilmixingrequest/pd25gatepassforfl41-oilmixingrequest.module').then(m => m.Pd25gatepassforfl41OilmixingrequestModule)
},
{
  path: 'pd25gatepassexportsprit',
  loadChildren: () => import('./pd25gatepassforexportspritrequest/pd25gatepassforexportspritrequest.module').then(m => m.Pd25gatepassforexportspritrequestModule)
},
{
  path: 'pd25-distillery-licenseholder',
  loadChildren: () => import('./pd25-distillery-licenseholder/pd25-distillery-licenseholder.module').then(m => m.Pd25DistilleryLicenseholderModule)
},
{
  path: 'fl50permitforeclose',
  loadChildren: () => import('./fl50permitforeclose/fl50permitforeclose.module').then(m => m.Fl50permitforecloseModule)
},
{
  path: 'fl41oilmixingindentforeclose',
  loadChildren: () => import('./fl41oilmixingindentforeclose/fl41oilmixingindentforeclose.module').then(m => m.Fl41oilmixingindentforecloseModule)
},
{
  path: 'accidentalpd25ondeologin',
  loadChildren: () => import('./accidentalpd25ondeologin/accidentalpd25ondeologin.module').then(m => m.Accidentalpd25ondeologinModule)
},
{
  path: 'accidentalrequestforspirit',
  loadChildren: () => import('./accidentalrequestforspirit/accidentalrequestforspirit.module').then(m => m.AccidentalrequestforspiritModule)
},
{
  path: 'accidentalrequestforspiritdeo',
  loadChildren: () => import('./accidentalrequestforspiritdeo/accidentalrequestforspiritdeo.module').then(m => m.AccidentalrequestforspiritdeoModule)
},
{
  path: 'accidentalmf4',
  loadChildren: () => import('./accidentalmf4/mf4.module').then(m => m.Mf4Module)
},
{
  path: 'stockinomd',
  loadChildren: () => import('./stockinomd/stockinomd.module').then(m => m.StockinomdModule)
},
{
  path: 'returntpwithinup',
  loadChildren: () => import('./returntpwithinup/returntpwithinup.module').then(m => m.ReturntpwithinupModule)
},
{
  path: 'returntpoutsideup',
  loadChildren: () => import('./returntpoutsideup/returntpwithinup.module').then(m => m.ReturntpwithinupModule)
},
{
  path: 'requestforreturntpwithinupomd',
  loadChildren: () => import('./requestforreturntpwithinupomd/requestforreturntpwithinupomd.module').then(m => m.RequestforreturntpwithinupomdModule)
},
{
  path: 'requestforreturntpomdoutsideup',
  loadChildren: () => import('./requestforreturntpomdoutsideup/requestforreturntpomdoutsideup.module').then(m => m.RequestforreturntpomdoutsideupModule)
},
{
  path: 'transportpassflb11withindent',
  loadChildren: () => import('./transportpassflb11withindent/transportpasswithindent.module').then(m => m.TransportpasswithindentModule)
},
{
  path: 'form-fl54',
  loadChildren: () => import('./form-fl54/form-fl54.module').then(m => m.FormFl54Module)
},
{
  path: 'redistillationforbottledstock',
  loadChildren: () => import('./redistillationforbottledstock/redistillationforbottledstock.module').then(m => m.RedistillationforbottledstockModule)
},
{
  path: 'redistillationforbottledstocknew',
  loadChildren: () => import('./redistillationforbottledstocknew/redistillationforbottledstock.module').then(m => m.RedistillationforbottledstockModule)
},
{
path: 'tankstockoverview',
loadChildren: () => import('./tankstockoverview/tankstockoverview.module').then(m => m.TankstockoverviewModule)
},
{
  path: 'tankstockoverviewcommissioner',
  loadChildren: () => import('./tankstockoverviewcommissioner/tankstockoverview.module').then(m => m.TankstockoverviewModule)
  },
{
  path: 'mass-tanktransfer',
  loadChildren: () => import('./massflowintegration-tanktransfer/massflowintegration-tanktransfer.module').then(m => m.MassflowintegrationTanktransferModule)
  },
  { path: 'tankregistration-pd', loadChildren: () => import('./tankregistration-pd/tankregistration.module').then(m => m.TankregistrationModule) },
  { 
    path: 'entitywiseanprdetails', loadChildren: () => import('./entitywiseanprdetails/entitywiseanprdetails.module').then(m => m.EntitywiseanprdetailsModule) 

  },
  { 
    path: 'exportofspiritpd18', loadChildren: () => import('./exportofspiritpd18/exportofspiritpd18.module').then(m => m.Exportofspiritpd18Module) 

  },
  { 
    path: 'massflowapplicant', loadChildren: () => import('./massflowapplicant/massflowapplicant.module').then(m => m.MassflowapplicantModule) 

  },
  { 
    path: 'massflowofficer', loadChildren: () => import('./massflowofficer/massflowofficer.module').then(m => m.MassflowofficerModule) 

  },
  { 
    path: 'productiondeclaration', loadChildren: () => import('./productiondeclaration/productiondeclaration.module').then(m => m.ProductiondeclarationModule) 

  },
  { 
    path: 'ealbottlingplan', loadChildren: () => import('./ealbottlingplan/ealbottlingplan.module').then(m => m.EalbottlingplanModule) 

  },
  { 
    path: 'codewastage', loadChildren: () => import('./codewastage/codewastage.module').then(m => m.CodewastageModule) 

  },
  { 
    path: 'subbottlingplan', loadChildren: () => import('./subbottlingplan/subbottlingplan.module').then(m => m.SubbottlingplanModule) 

  },
  { 
    path: 'dispatchofnewnonregisteruser', loadChildren: () => import('./dispatchofnewnonregisteruser/dispatchofnewnonregisteruser.module').then(m => m.DispatchofnewnonregisteruserModule) 

  }



];

@NgModule({
  imports: 
  [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class DistilleryRoutingModule { }
