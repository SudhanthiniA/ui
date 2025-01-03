import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'orderpick',
    loadChildren: () => import('./orderpick/orderpick.module').then(module => module.OrderpickModule)
  },
  {
    path: 'dipbook',
    loadChildren: () => import('./dipbook/dipbook.module').then(module => module.DipbookModule)
  },
  {
    path: 'registeruserexceptadvduty',
    loadChildren: () => import('./registeruserexceptadvduty/registeruserexceptadvduty.module').then(module => module.RegisteruserexceptadvdutyModule)
  },
  {
    path: 'predeclaration',
    loadChildren: () => import('./predeclaration/predeclaration.module').then(module => module.PredeclarationModule)
  },
  {
    path: 'indentfl11a',
    loadChildren: () => import('./indentfl11a/indentfl11a.module').then(module => module.Indentfl11aModule)
  },
  {
    path: 'bottlinglineconversion',
    loadChildren: () => import('./bottlinglineconversion/bottlinglineoverview.module').then(module => module.BottlinglineoverviewModule)
  },
  {
    path: 'boxingprocess',
    loadChildren: () => import('./boxingprocess/boxingprocess.module').then(module => module.BoxingprocessModule)
  },
  {
    path: 'breakageentry',
    loadChildren: () => import('./breakageentry/breakageentry.module').then(module => module.BreakageentryModule)
  },
  {
    path: 'subindent',
    loadChildren: () => import('./subindent/mwindentforward.module').then(module => module.MwindentforwardModule)
  },
 {
    path: 'issueofraw',
    loadChildren: () => import('./issueofraw/issueofraw.module').then(module => module.IssueofrawModule)
  }, 
  {
    path: 'stockavailability',
    loadChildren: () => import('./stockavailability/stockavailability.module').then(module => module.StockavailabilityModule)
  },
  {
    path: 'brandregistration',
    loadChildren: () => import('./brandregistration/brandregistration.module').then(module => module.BrandregistrationModule)
  },
  {
    path: 'brandlabeloverview',
    loadChildren: () => import('./brandlabeloverview/brandlabeloverview.module').then(module => module.BrandlabeloverviewModule)
  },
  {
    path: 'brandlabelreg',
    loadChildren: () => import('./brandlabelregbrew/brandlabelregbrew.module').then(module => module.BrandlabelregbrewModule)
  },
  {
    path: 'tankmaintenance',
    loadChildren: () => import('./tankmaintenance/tankmaintenance.module').then(module => module.TankmaintenanceModule)
  },
  {
    path: 'tanktransfer',
    loadChildren: () => import('./tanktransfer/tanktransfer.module').then(module => module.TanktransferModule)
  },
  {
    path: 'passcancellation',
    loadChildren: () => import('./passcancellation/passcancellation.module').then(module => module.PasscancellationModule)
  },
  {
    path: 'l1',
    loadChildren: () => import('./l1/l1.module').then(module => module.L1Module)
  },
  {
    path: 'mstistoffg',
    loadChildren: () => import('./mstistoffg/mstistoffg.module').then(module => module.MstistoffgModule)
  },
  {
    path: 'l2',
    loadChildren: () => import('./l2/l2.module').then(module => module.L2Module)
  },
  {
    path: 'b14',
    loadChildren: () => import('./b14/b14.module').then(module => module.B14Module)
  },
  {
    path: 'brewerytankregistration',
    loadChildren: () => import('./brewerytankregistration/brewerytankregistration.module').then(module => module.BrewerytankregistrationModule)
  },
  {
    path: 'accidentalrequest',
    loadChildren: () => import('./accidentalrequest/accidentalrequest.module').then(module => module.AccidentalrequestModule)
  },
  {
    path: 'transportpass',
    loadChildren: () => import('./transportpass/mwtranspasscanmod.module').then(module => module.MwtranspasscanmodModule)
  },
  {
    path: 'b7form',
    loadChildren: () => import('./b7form/b7form.module').then(module => module.B7formModule)
  },
  {
    path: 'b8form',
    loadChildren: () => import('./b8form/b8form.module').then(module => module.B8formModule)
  },
  {
    path: 'b9form',
    loadChildren: () => import('./b9form/b9form.module').then(module => module.B9formModule)
  },
  {
    path: 'b17-form',
    loadChildren: () => import('./b17-form/b17-form.module').then(module => module.B17FormModule)
  },
  {
    path: 'b16form',
    loadChildren: () => import('./b16form/b16form.module').then(module => module.B16formModule)
  },
  {
    path: 'b3form',
    loadChildren: () => import('./b3form/b3form.module').then(module => module.B3formModule)
  },
  {
    path: 'flb9form',
    loadChildren: () => import('./flb9form/flb9form.module').then(module => module.Flb9formModule)
  },
  {
    path: 'b4-form',
    loadChildren: () => import('./b4-form/b4-form.module').then(module => module.B4FormModule)
  },
  {
    path: 'b6-form',
    loadChildren: () => import('./b6-form/b6-form.module').then(module => module.B6FormModule)
  },
  {
    path: 'b5-form',
    loadChildren: () => import('./b5-form/b5-form.module').then(module => module.B5FormModule)
  },
  {
    path: 'flb11-form',
    loadChildren: () => import('./flb11-form/flb11-form.module').then(module => module.Flb11FormModule)
  },
  {
    path: 'bondregistration',
    loadChildren: () => import('./bondregistration/bondregistration.module').then(module => module.BondregistrationModule)
  },
  {
    path: 'b10form',
    loadChildren: () => import('./b10form/b10form.module').then(module => module.B10formModule)
  },
  {
    path: 'b10formfl2',
    loadChildren: () => import('./b10formfl2/b10form.module').then(module => module.B10formModule)
  },
  {
    path: 'b13form',
    loadChildren: () => import('./b13form/b13form.module').then(module => module.B13formModule)
  },
  {
    path: 'b12form',
    loadChildren: () => import('./b12form/b12form.module').then(module => module.B12formModule)
  },
  {
    path: 'b11form',
    loadChildren: () => import('./b11form/b11form.module').then(module => module.B11formModule)
  },
  {
    path: 'b15form',
    loadChildren: () => import('./b15form/b15form.module').then(module => module.B15formModule)
  },
  {
    path: 'breweryregistration',
    loadChildren: () => import('./breweryregistration/breweryregistration.module').then(module => module.BreweryregistrationModule)
  },
  {
    path: 'ovearseasgatepass',
    loadChildren: () => import('./ovearseasgatepass/ovearseasgatepass.module').then(module => module.OvearseasgatepassModule)
  },
  {
    path: 'registerasexportunit',
    loadChildren: () => import('./registerasexportunit/registerasexportunit.module').then(module => module.RegisterasexportunitModule)
  },
  {
    path: 'applicationforlableapproval',
    loadChildren: () => import('./applicationforlableapproval/applicationforlableapproval.module').then(module => module.ApplicationforlableapprovalModule)
  },
  {
    path: 'gatepassfrombrewery',
    loadChildren: () => import('./gatepassfrombrewery/gatepassfrombrewery.module').then(module => module.GatepassfrombreweryModule)
  },
  {
    path: 'rolloverstock',
    loadChildren: () => import('./rolloverstock/rolloverstock.module').then(module => module.RolloverstockModule)
  },
  {
    path: 'stockrollover',
    loadChildren: () => import('./stockrollover/rolloverstock.module').then(module => module.RolloverstockModule)
  },
  {
    path: 'transferofbeer',
    loadChildren: () => import('./transferofbeer/transferofbeer.module').then(module => module.TransferofbeerModule)
  },
  {
    path: 'declarationforyear',
    loadChildren: () => import('./declarationforyear/declarationforyear.module').then(module => module.DeclarationforyearModule)
  },
  {
    path: 'stockinbrewery',
    loadChildren: () => import('./stockinbrewery/stockinbrewery.module').then(module => module.StockinbreweryModule)
  },
  {
    path: 'intimationbook',
    loadChildren: () => import('./intimationbook/intimationbook.module').then(module => module.IntimationbookModule)
  },
  {
    path: 'atlab',
    loadChildren: () => import('./atlab/atlab.module').then(module => module.AtlabModule)
  },
  {
    path: 'samplefeebook',
    loadChildren: () => import('./samplefeebook/samplefeebook.module').then(module => module.SamplefeebookModule)
  },
  {
    path: 'bottlingfeesregister',
    loadChildren: () => import('./bottlingfeesregister/bottlingfeesregister.module').then(module => module.BottlingfeesregisterModule)
  },
  {
    path: 'wholesaleindent',
    loadChildren: () => import('./wholesaleindent/wholesaleindent.module').then(module => module.WholesaleindentModule)
  },
  {
    path: 'g6register',
    loadChildren: () => import('./g6register/g6register.module').then(module => module.G6registerModule)
  },
  {
    path: 'transfertobbt',
    loadChildren: () => import('./processedbeertransfertobbt/processedbeertransfertobbt.module').then(module => module.ProcessedbeertransfertobbtModule)
  },
  {
    path: 'declarationofbatch',
    loadChildren: () => import('./declarationofbatch/declarationofbatch.module').then(module => module.DeclarationofbatchModule)
  },
  {
  path: 'applicationfortransfer',
  loadChildren: () => import('./applicationfortransfer/applicationfortransfer.module').then(module => module.ApplicationfortransferModule)
  },
  {
    path: 'appfortransbeerfilteration',
    loadChildren: () => import('./appfortransbeerfilteration/appfortransbeerfilteration.module').then(module => module.AppfortransbeerfilterationModule)
  },
  {
    path: 'appfortransbeerfilteration',
    loadChildren: () => import('./appfortransbeerfilteration/appfortransbeerfilteration.module').then(module => module.AppfortransbeerfilterationModule)
  },
  {
    path: 'flb36',
    loadChildren: () => import('./flb36/flb36.module').then(module => module.Flb36Module)
  },
  {
    path: 'manualscanning',
    loadChildren: () => import('./manualscanning/manualscanning.module').then(module => module.ManualscanningModule)
  },
  {
    path: 'printqrcode',
    loadChildren: () => import('./printqrcode/printqrcode.module').then(module => module.PrintqrcodeModule)
  },
  {
    path: 'dispatched',
    loadChildren: () => import('./dispatched/dispatched.module').then(module => module.DispatchedModule)
  },
  {
    path: 'boxing',
    loadChildren: () => import('./boxing/boxing.module').then(module => module.BoxingModule)
  },
  {
    path: 'bottlingplan',
    loadChildren: () => import('./bottlingplan/bottlingplan.module').then(module => module.BottlingplanModule)
  },
  {
    path: 'bottlingplanclosure',
    loadChildren: () => import('./bottlingplanclosure/bottlingplanclosure.module').then(module => module.BottlingplanclosureModule)
  },
  {
    path: 'exportapplication',
    loadChildren: () => import('./exportapplication/exportapplication.module').then(module => module.ExportapplicationModule)
  },
  {
    path: 'processingwastage',
    loadChildren: () => import('./processingwastage/processingwastage.module').then(module => module.ProcessingwastageModule)
  },
  {
    path: 'wastageqrreqaddqrbar',
    loadChildren: () => import('./wastageqrreqaddqrbar/wastageqrreqaddqrbar.module').then(module => module.WastageqrreqaddqrbarModule)
  },
  {
    path: 'wastageqrreqaddqrbar',
    loadChildren: () => import('./wastageqrreqaddqrbar/wastageqrreqaddqrbar.module').then(module => module.WastageqrreqaddqrbarModule)
  },
    {
    path: 'wastageqrreqaddqrbar',
    loadChildren: () => import('./wastageqrreqaddqrbar/wastageqrreqaddqrbar.module').then(module => module.WastageqrreqaddqrbarModule)
  },
  {
    path: 'wastageofbeerduringbottlingprocess',
    loadChildren: () => import('./wastageofbeerduringbottlingprocess/wastageofbeerduringbottlingprocess.module').then(module => module.WastageofbeerduringbottlingprocessModule)
  },
  {
    path: 'wastcalcdurprocessbeer',
    loadChildren: () => import('./wastcalcdurprocessbeer/wastcalcdurprocessbeer.module').then(module => module.WastcalcdurprocessbeerModule)
  },
  {
    path: 'tankoverview',
    loadChildren: () => import('./tankoverview/tankoverview.module').then(module => module.TankoverviewModule)
  },
  {
    path: 'tankregistration',
    loadChildren: () => import('./tankregistration/tankregistration.module').then(module => module.TankregistrationModule)
  },
  {
    path: 'tankrepair',
    loadChildren: () => import('./tankrepair/tankrepair.module').then(module => module.TankrepairModule)
  },
  {
    path: 'stocktransferexpired',
    loadChildren: () => import('./stocktransferexpired/stocktransferexpired.module').then(module => module.StocktransferexpiredModule)
  },
  {
    path: 'appltransbeerfrmunittobbt',
    loadChildren: () => import('./appltransbeerfrmunittobbt/appltransbeerfrmunittobbt.module').then(module => module.AppltransbeerfrmunittobbtModule)
  },
  {
    path: 'declarationofproplanofbeer',
    loadChildren: () => import('./declarationofproplanofbeer/declarationofproplanofbeer.module').then(module => module.DeclarationofproplanofbeerModule)
  },
  {
    path: 'flb11',
    loadChildren: () => import('./flb11/flb11.module').then(module => module.Flb11Module)
  },
  {
    path: 'flb11-fl2b',
    loadChildren: () => import('./flb11-fl2b/flb11.module').then(module => module.Flb11Module)
  },
  {
    path: 'flb11-export',
    loadChildren: () => import('./flb11-export/flb11.module').then(module => module.Flb11Module)
  },
  {
    path: 'fl36',
    loadChildren: () => import('./fl36/fl36.module').then(module => module.Fl36Module)
  },
  {
    path: 'newlineregistration',
    loadChildren: () => import('./newlineregistration/newlineregistration.module').then(module => module.NewlineregistrationModule)
  },
  {
    path: 'tankdismentle',
    loadChildren: () => import('./tankdismentle/tankdismentle.module').then(module => module.TankdismentleModule)
  },
  {
    path: 'stockactivity',
    loadChildren: () => import('./stockactivity/stockactivity.module').then(module => module.StockactivityModule)
  },
  {
    path: 'maprequest',
    loadChildren: () => import('./maprequest/maprequest.module').then(module => module.MaprequestModule)
  },
  {
    path: 'profile',
    loadChildren: () => import('./profile/profile.module').then(module => module.ProfileModule)
  },
  {
    path: 'alcoholtechnologyatlab',
    loadChildren: () => import('./alcoholtechnologyatlab/alcoholtechnologyatlab.module').then(module => module.AlcoholtechnologyatlabModule)
  },
  {
    path: 'mstist',
    loadChildren: () => import('./mstist/mstist.module').then(module => module.MstistModule)
  },
  {
    path: 'indentacceptance',
    loadChildren: () => import('./indentacceptance/indentacceptance.module').then(m => m.IndentacceptanceModule)
  },
  {
    path: 'bottlinglineoverview',
    loadChildren: () => import('./bottlinglineoverview/bottlinglineoverview.module').then(m => m.BottlinglineoverviewModule)
  },
  {
    path: 'b20',
    loadChildren: () => import('./b20/b16form.module').then(m => m.B16formModule)
  },
  {
    path: 'delinkconverofbottlingline',
    loadChildren: () => import('./delinkconverofbottlingline/delinkconverofbottlingline.module').then(m => m.DelinkconverofbottlinglineModule)
  },
  {
    path: 'unmapandremap',
    loadChildren: () => import('./unmappingandremapping/unmappingandremapping.module').then(m => m.UnmappingandremappingModule)
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
    path: 'palletmaster',
    loadChildren: () => import('./palletmaster/palletmaster.module').then(m => m.PalletmasterModule)
  },
  {
    path: 'payment',
    loadChildren: () => import('./payment/payment.module').then(m => m.PaymentModule)
  },
  {
    path: 'declarationofplan',
    loadChildren: () => import('./declarationofplan/declarationofplan.module').then(m => m.DeclarationofplanModule)
  },
  {
    path: 'bottlingproductionplan',
    loadChildren: () => import('./bottlingproductionplan/bottlingproductionplan.module').then(m => m.BottlingproductionplanModule)
  },
  {
    path: 'productiondeclaration',
    loadChildren: () => import('./pdt-declaration-fl/pdt-declaration-fl.module').then(m => m.PdtDeclarationFlModule)
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
    path: 'accidentalreturntpstockin',
    loadChildren: () => import('./accidentalreturntpstockin/accidentalrequest.module').then(m => m.AccidentalrequestModule)
  },
  {
    path: 'accidentalrequestacknowledgement',
    loadChildren: () => import('./accidentalrequestacknowledgement/accidentalrequest.module').then(m => m.AccidentalrequestModule)
  },
  {
    path: 'accidentaldestruction',
    loadChildren: () => import('./accidentaldestruction/accidentaldestruction.module').then(m => m.AccidentaldestructionModule)
  },
  {
    path: 'accidentalreturntpstockinhand',
    loadChildren: () => import('./accidentalreturntpstockinhand/accidentalrequest.module').then(m => m.AccidentalrequestModule)
  },
  {
    path: 'indentacceptancebeer',
    loadChildren: () => import('./indentacceptancebeer/indentacceptance.module').then(m => m.IndentacceptanceModule)
  },
  {
    path: 'nacoverview',
    loadChildren: () => import('./nacoverview/paymentoverviewscreen.module').then(m => m.PaymentoverviewscreenModule)
    
  },
  {
    path: 'indentrequest',
    loadChildren: () => import('./indentrequest/indentrequest.module').then(m => m.IndentrequestModule)
  },
  {
    path: 'indentapprovaldeo',
    loadChildren: () => import('./indentapprovaldeo/indentapprovaldeo.module').then(m => m.IndentapprovaldeoModule)
  },
  {
    path: 'racaccount',
    loadChildren: () => import('./racaccount/racaccount.module').then(m => m.RacaccountModule)
  }
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BreweryRoutingModule { }
