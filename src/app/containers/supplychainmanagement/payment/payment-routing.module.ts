import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'bottlingfees',
    loadChildren: () => import('./bottlingfees/bottling.module').then(module => module.BottlingModule)
  },
  {
    path: 'liquordispatchfees',
    loadChildren: () => import('./liquordispatchfees/liquordispatchfees.module').then(module => module.LiquordispatchfeesModule)
  },
  {
    path: 'barqrwastage',
    loadChildren: () => import('./barqrwastage/barqrwastage.module').then(module => module.BarqrwastageModule)
  },
  {
    path: 'cancelindentafter72hrs',
    loadChildren: () => import('./cancelindentafter72hrs/cancelindentafter72hrs.module').then(module => module.Cancelindentafter72hrsModule)
  },
  {
    path: 'nontransfer-ng-wh24hrs',
    loadChildren: () => import('./nontransfer-ng-wh24hrs/nontransfer-ng-wh24hrs.module').then(module => module.NontransferNgWh24hrsModule)
  },
  {
    path: 'bottleproductplancancel',
    loadChildren: () => import('./bottleproductplancancel/bottleproductplancancel.module').then(module => module.BottleproductplancancelModule)
  },
  {
    path: 'nonmaintainance',
    loadChildren: () => import('./nonmaintainanceofindentregister/nonmaintainanceofindentregister.module').then(module => module.NonmaintainanceofindentregisterModule)
  },
  {
    path: 'administrativefees',
    loadChildren: () => import('./administrativefees/administrativefees.module').then(module => module.AdministrativefeesModule)
  },
  {
    path: 'denaturationofspirit',
    loadChildren: () => import('./denaturationofspirit/denaturationofspirit.module').then(module => module.DenaturationofspiritModule)
  },
  {
    path: 'reconciliation',
    loadChildren: () => import('./reconciliation/reconciliation.module').then(module => module.ReconciliationModule)
  },
  {
    path: 'reconciliationoverview',
    loadChildren: () => import('./reconciliation-overview/reconciliation.module').then(module => module.ReconciliationModule)
  },
  {
    path: 'mismatchoftransportpass',
    loadChildren: () => import('./mismatchoftransportpass/mismatchoftransportpass.module').then(module => module.MismatchoftransportpassModule)
  },
{  
    path: 'penaltyonnonexecofind',
    loadChildren: () => import('./penaltyonnonexecofind/penaltyonnonexecofind.module').then(module => module.PenaltyonnonexecofindModule)
  },
  {
    path: 'allotherpenalities',
    loadChildren: () => import('./allotherpenalities/allotherpenalities.module').then(module => module.AllotherpenalitiesModule)
  },
  {
    path: 'sheeranidhi',
    loadChildren: () => import('./sheeranidhi/sheeranidhi.module').then(module => module.SheeranidhiModule)
  },
  {
    path: 'wastageofmolasses',
    loadChildren: () => import('./wastageofmolasses/wastageofmolasses.module').then(module => module.WastageofmolassesModule)
  },
  {
    path: 'mstist',
    loadChildren: () => import('./mstist/mstist.module').then(module => module.MstistModule)
  },
  {
    path: 'spiritdispatchfees',
    loadChildren: () => import('./spiritdispatchfees/spiritdispatchfees.module').then(module => module.SpiritdispatchfeesModule)
  },
  {
    path: 'bottlingfees',
    loadChildren: () => import('./bottlingfees/bottling.module').then(module => module.BottlingModule)
  },
  {
    path: 'beerwastageduringbottling',
    loadChildren: () => import('./beerwastageduringbottling/beerwastageduringbottling.module').then(module => module.BeerwastageduringbottlingModule)
  },
  {
    path: 'penaltyonaccidentalcases',
    loadChildren: () => import('./penaltyonaccidentalcases/penaltyonaccidentalcases.module').then(module => module.PenaltyonaccidentalcasesModule)
  },
  {
    path: 'penalityonundefinedsubject',
    loadChildren: () => import('./penalityonundefinedsubject/penalityonundefinedsubject.module').then(module => module.PenalityonundefinedsubjectModule)
  },
  {
    path: 'brandandlabel',
    loadChildren: () => import('./brandandlabel/brandandlabel.module').then(module => module.BrandandlabelModule)
  },
  {
    path: 'importofgrainmaltspiritis',
    loadChildren: () => import('./importofgrainmaltspiritis/importofgrainmaltspiritis.module').then(module => module.ImportofgrainmaltspiritisModule)
  },
  {
    path: 'importpermit',
    loadChildren: () => import('./importpermit/importpermit.module').then(module => module.ImportpermitModule)
  },
  {
    path: 'breakagefees',
    loadChildren: () => import('./breakagefees/breakagefees.module').then(module => module.BreakagefeesModule)
  },
  {
    path: 'quotarevenuetransferfees',
    loadChildren: () => import('./quotarevenuetransferfees/quotarevenuetransferfees.module').then(module => module.QuotarevenuetransferfeesModule)
  },
  {
    path: 'spiritimportfees',
    loadChildren: () => import('./spiritimportfees/spiritimportfees.module').then(module => module.SpiritimportfeesModule)
  },
  {
    path: 'saleofdenaturedfees',
    loadChildren: () => import('./saleofdenaturedfees/saleofdenaturedfees.module').then(module => module.SaleofdenaturedfeesModule)
  },
  {
    path: 'lowrecoveryfees',
    loadChildren: () => import('./lowrecoveryfees/lowrecoveryfees.module').then(module => module.LowrecoveryfeesModule)
  },
  {
    path: 'sampletestfees',
    loadChildren: () => import('./sampletestfees/sampletestfees.module').then(module => module.SampletestfeesModule)
  },
  {
    path: 'wastagefees',
    loadChildren: () => import('./wastagefees/wastagefees.module').then(module => module.WastagefeesModule)
  },
  {
    path: 'nonregistereduser',
    loadChildren: () => import('./nonregistereduser/nonregistereduser.module').then(module => module.NonregistereduserModule)
  },
  {
    path: 'registeruserexceptadvduty',
    loadChildren: () => import('./registeruserexceptadvduty/registeruserexceptadvduty.module').then(module => module.RegisteruserexceptadvdutyModule)
  },
  {
    path: 'paymentoverview',
    loadChildren: () => import('./paymentoverview/paymentoverview.module').then(module => module.PaymentoverviewModule)
  },
  {
    path: 'rolloverconfigpage',
    loadChildren: () => import('./rolloverconfigpage/rolloverconfigpage.module').then(module => module.RolloverconfigpageModule)
  },   
  {
    path: 'rolloverfees',
    loadChildren: () => import('./rolloverfees/rolloverfees.module').then(module => module.RolloverfeesModule)
  },
  {
    path: 'processrequest',
    loadChildren: () => import('./processrequest/processrequest.module').then(module => module.ProcessrequestModule)
  },   
  {
    path: 'processapprovalperson',
    loadChildren: () => import('./processapprovalperson/processapprovalperson.module').then(module => module.ProcessapprovalpersonModule)
  },   
  {
    path: 'paymentmis',
    loadChildren: () => import('./paymentmis/paymentmis.module').then(module => module.PaymentmisModule)
  }, 
  {
    path: 'onlinechallan',
    loadChildren: () => import('./onlinechallanregistraion/onlinechallanregistraion.module').then(module => module.OnlinechallanregistraionModule)
  },
  {
    path: 'nonregisterbrandforoverseas',
    loadChildren: () => import('./nonregisterbrandforoverseas/nonregisterbrandforoverseas.module').then(module => module.NonregisterbrandforoverseasModule)
  },
  {
    path: 'non-registerbrand-edp-mrp',
    loadChildren: () => import('./non-registerbrand-edp-mrp/non-registerbrand-edp-mrp.module').then(module => module.NonRegisterbrandEDPMRPModule)
  },
  {
    path: 'mrp-edp-nonregisterbrand',
    loadChildren: () => import('./mrp-edp-nonregisterbrand/mrp-edp-nonregisterbrand.module').then(module => module.MRPEDPNonregisterbrandModule)
  }      
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PaymentRoutingModule { }
