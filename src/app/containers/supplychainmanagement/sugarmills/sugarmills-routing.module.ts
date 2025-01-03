import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [

  {
    path: 'stockavailability',
    loadChildren: () => import('./stockavailability/stockavailability.module').then(module => module.StockavailabilityModule)
  },
  {
    path: 'atlab',
    loadChildren: () => import('./atlab/atlab.module').then(module => module.AtlabModule)
  },
  {
    path: 'mf4tpgeneration',
    loadChildren: () => import('./mf4-tp-generation/mf4-tp-generation.module').then(module => module.Mf4TpGenerationModule)
  },
  {
    path: 'mf2',
    loadChildren: () => import('./mf2/mf2.module').then(module => module.Mf9Module)
  },
  {
    path: 'stockin',
    loadChildren: () => import('./stockin/stockin.module').then(module => module.StockinModule)
  },
  {
    path: 'stockout',
    loadChildren: () => import('./stockout/stockout.module').then(module => module.StockoutModule)
  },
  {
    path: 'indentrequest',
    loadChildren: () => import('./orderrequest/orderrequest.module').then(module => module.OrderrequestModule)
  },
  {
    path: 'registrationrequest',
    loadChildren: () => import('./registrationrequest/registrationrequest.module').then(module => module.RegistrationrequestModule)
  },
  {
    path: 'orderallocation',
    loadChildren: () => import('./orderallocation/orderallocation.module').then(module => module.OrderallocationModule)
  },
  {
    path: 'sampledetailsentry',
    loadChildren: () => import('./sampledetailsentry/sampledetailsentry.module').then(module => module.SampledetailsentryModule)
  },
  {
    path: 'registrationform',
    loadChildren: () => import('./registrationform/registrationform.module').then(module => module.RegistrationformModule)
  },
  {
    path: 'registration',
    loadChildren: () => import('./registration/registration.module').then(module => module.RegistrationModule)
  },
  {
    path: 'orderpicking',
    loadChildren: () => import('./orderpicking/orderpicking.module').then(module => module.OrderpickingModule)
  },
  {
    path: 'dispatch',
    loadChildren: () => import('./dispatch/dispatch.module').then(module => module.DispatchModule)
  },
  {
    path: 'transportgeneration',
    loadChildren: () => import('./transportgeneration/transportgeneration.module').then(module => module.TransportgenerationModule)
  },
  {
    path: 'molassesrecieptandconsumption',
    loadChildren: () => import('./molassesrecieptandconsump/molassesrecieptandconsump.module').then(module => module.MolassesrecieptandconsumpModule)
  },
  {
    path: 'inspectionreport',
    loadChildren: () => import('./inspectionreport/inspectionreport.module').then(module => module.InspectionreportModule)
  },
  {
    path: 'tankregistration',
    loadChildren: () => import('./tankregistration/tankregistration.module').then(module => module.TankregistrationModule)
  },
  {
    path: 'tankconversion',
    loadChildren: () => import('./tankconversion/tankconversion.module').then(module => module.TankconversionModule)
  },
  {
    path: 'tankoverview',
    loadChildren: () => import('./tankoverview/tankoverview.module').then(module => module.TankoverviewModule)
  },
  {
    path: 'tankmaintainance',
    loadChildren: () => import('./tankmaintainance/tankmaintainance.module').then(module => module.TankmaintainanceModule)
  },
  {
    path: 'tankactiveinactive',
    loadChildren: () => import('./tankactive-inactive/tankactive-inactive.module').then(module => module.TankactiveInactiveModule)
  },
  {
    path: 'molassesadministrationcharges',
    loadChildren: () => import('./molassesadministrationcharges/molassesadministrationcharges.module').then(module => module.MolassesadministrationchargesModule)
  },
  {
    path: 'molassesfundreg',
    loadChildren: () => import('./molassesregester/molassesregester.module').then(m => m.MolassesregesterModule)
  },
  {
    path: 'mf5',
    loadChildren: () => import('./mf5partone/mf5partone.module').then(module => module.Mf5partoneModule)
  },
  {
    path: 'mf5-part2',
    loadChildren: () => import('./mf5-part2/mf5-part2.module').then(m => m.Mf5Part2Module) 
  },
  {
    path: 'mf5-part3',
    loadChildren: () => import('./mf5-part3/mf5-part3.module').then(m => m.Mf5Part3Module)
  },
  {
    path: 'mf7register',
    loadChildren: () => import('./mf7register/mf7register.module').then(m => m.Mf7registerModule)
  },
  {
    path: 'passbook',
    loadChildren: () => import('./passbook/passbook.module').then(m => m.PassbookModule)
  },
  { path: 'mf9', loadChildren: () => import('./mf9/mf9.module').then(m => m.Mf9Module) },
  { path: 'allotment-approval', loadChildren: () => import('./allotment-approval/allotment-approval.module').then(m => m.AllotmentApprovalModule) },
  {
    path: 'inspectionmf5',
    loadChildren: () => import('./inspectionmf5partone/inspectionmf5partone.module').then(module => module.Inspectionmf5partoneModule)
  },
  {
    path: 'profile',
    loadChildren: () => import('./profile/profile.module').then(module => module.ProfileModule)
  },
  {
    path: 'tanktransfer',
    loadChildren: () => import('./tanktransfer/tanktransfer.module').then(module => module.TanktransferModule)
  },
  {
    path: 'tankremovel',
    loadChildren: () => import('./tankremovel/tankremovel.module').then(module => module.TankremovelModule)
  },
  {
    path: 'mf9fortnight',
    loadChildren: () => import('./mf9fortnight/mf9fortnight.module').then( m => m.Mf9fortnightModule)
  },{
    path: 'tankregestrationapproval',
    loadChildren: () => import('./tankregestrationapproval/tankregestrationapproval.module').then( m => m.TankregestrationapprovalModule)
  },
  {
    path: 'administartivechargelog',
    loadChildren: () => import('./administartivechargelog/administartivechargelog.module').then( m => m.AdministartivechargelogModule)
  },
  {
    path: 'mf7molassesformat',
    loadChildren: () => import('./mf7molassesformat/mf7molassesformat.module').then( m => m.Mf7molassesformatModule)
  },
  {
    path: 'indentprocessinsideup',
    loadChildren: () => import('./indentprocessinsideup/indentprocessinsideup.module').then( m => m.IndentprocessinsideupModule)
  },
  {
    path: 'indentprocessoutsideup',
    loadChildren: () => import('./indentprocessoutsideup/indentprocessoutsideup.module').then( m => m.IndentprocessinsideupModule)
  },
  {
    path: 'indentcattlefield',
    loadChildren: () => import('./indentcattlefield/indentcattlefield.module').then( m => m.IndentcattlefieldModule)
  },
  {
    path: 'tankrepair',
    loadChildren: () => import('./tankrepair/tankrepair.module').then(module => module.TankrepairModule)
  },
  {
    path: 'tankdismantle',
    loadChildren: () => import('./tankdismantle/tankdismantle.module').then(module => module.TankdismantleModule)
  },
  {
    path: 'indenttradersexport',
    loadChildren: () => import('./indenttradersexport/indenttradersexport.module').then( m => m.IndenttradersexportModule)
  },
  {
    path: 'gatepasscancel',
    loadChildren: () => import('./gatepasscancel/gatepasscancel.module').then( m => m.GatepasscancelModule)
  },
  {
    path: 'administrationcharges',
    loadChildren: () => import('./administrationcharges/administrationcharges.module').then( m => m.AdministrationchargesModule)
  },
  {
    path: 'accidentalrequest',
    loadChildren: () => import('./accidentalrequest/accidentalrequest.module').then(m => m.AccidentalrequestModule)
  },
  {
    path: 'molassesdispatchreport',
    loadChildren: () => import('./molassesdispatchreport/molassesdispatchreport.module').then(m => m.MolassesdispatchreportModule)
  },
  {
    path: 'productionreport',
    loadChildren: () => import('./productionreport/productionreport.module').then(m => m.ProductionreportModule)
  },
  {
    path: 'wastagereport',
    loadChildren: () => import('./wastagereport/wastagereport.module').then(m => m.WastagereportModule)
  },
  {
    path: 'mstistinspectionreport',
    loadChildren: () => import('./mstistinspectionreport/mstistinspectionreport.module').then(m => m.MstistinspectionreportModule)
  },
  {
    path: 'receiptandconsumptionreport',
    loadChildren: () => import('./receiptandconsumptionreport/receiptandconsumptionreport.module').then(m => m.ReceiptandconsumptionreportModule)
  },
  {
    path: 'indentmetallurgyandfoundryindustries',
    loadChildren: () => import('./indentmetallurgyandfoundryindustries/indentmetallurgyandfoundryindustries.module').then(m => m.IndentmetallurgyandfoundryindustriesModule)
  },
  {
    path: 'indentbrickindustries',
    loadChildren: () => import('./indentbrickindustries/indentbrickindustries.module').then(m => m.IndentbrickindustriesModule)
  },
  {
    path: 'mf1',
    loadChildren: () => import('./mf1/mf1.module').then(m => m.Mf1Module)
  },
  {
    path: 'sheeranidhiregister',
    loadChildren: () => import('./sheeranidhiregister/sheeranidhiregister.module').then(m => m.SheeranidhiregisterModule)
  },
  {
    path: 'sheeranidhiregister2ndinput',
    loadChildren: () => import('./sheeranidhiregister2ndinput/sheeranidhiregister2ndinput.module').then(m => m.Sheeranidhiregister2ndinputModule)
  },
  {
    path: 'configuration',
    loadChildren: () => import('./configuration/configuration.module').then(m => m.ConfigurationModule)
  },
  {
    path: 'allotherpenalties',
    loadChildren: () => import('./allotherpenalties/allotherpenalties.module').then(m => m.AllotherpenaltiesModule)
  },
  {
    path: 'tankmixing',
    loadChildren: () => import('./tankmixing/tankmixing.module').then(m => m.TankmixingModule)
  },
  {
    path: 'tankcleaning',
    loadChildren: () => import('./tankcleaning/tankcleaning.module').then(m => m.TankcleaningModule)
  },
  {
    path: 'declarationofmolasses',
    loadChildren: () => import('./declarationofmolasses/declarationofmolasses.module').then(m => m.DeclarationofmolassesModule)
  },
  {
    path: 'appforreleasesheeranidhi',
    loadChildren: () => import('./applicationforreleaseofsheeranidhi/applicationforreleaseofsheeranidhi.module').then(m => m.ApplicationforreleaseofsheeranidhiModule)
  },
  {
    path: 'stockactivity',
    loadChildren: () => import('./stockactivity/stockactivity.module').then(m => m.StockactivityModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class SugarmillsRoutingModule { }
