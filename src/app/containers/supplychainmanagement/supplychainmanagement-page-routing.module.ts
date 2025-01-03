import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'stockavailability',
    loadChildren: () => import('./stockavailability/stockavailability.module').then(m => m.StockavailabilityModule)
  },
  {
    path: 'newdashboard',
    loadChildren: () => import('./newdashboard/dashboard.module').then(m => m.NewDashboardModule)
  },
  {
    path: 'stockavailabilitycommon',
    loadChildren: () => import('./stockavailability-common/stockavailability-common.module').then(m => m.StockavailabilityCommonModule)
  },
  {
    path: 'importunit',
    loadChildren: () => import('./importunit/importunit.module').then(m => m.ImportunitModule)
  },
  {
    path: 'casemanagement',
    loadChildren: () => import('./casemanagement/casemanagement.module').then(m => m.CasemanagementModule)
  },
  {
    path: 'returnfilling',
    loadChildren: () => import('./returnfilling/returnfilling.module').then(m => m.returnfillingModule)
  },
  {
    path: 'vigillance',
    loadChildren: () => import('./vigillance/vigilance.module').then(m => m.VigilanceModule)
  },
  {
    path: 'sugarmills',
    loadChildren: () => import('./sugarmills/sugarmills.module').then(m => m.SugarmillsModule)
  },
  {
    path: 'chemicalab',
    loadChildren: () => import('./chemicallab/chemicallab.module').then(m => m. ChemicallabModule)
  },
  {
    path: 'distillery',
    loadChildren: () => import('./distillery/distillery.module').then(m => m.DistilleryModule)
  },
  {
    path: 'payment',
    loadChildren: () => import('./payment/payment.module').then(m => m.PaymentModule)
  },
  {
    path: 'foundryindustiewithup',
    loadChildren: () => import('./foundryindustiewithup/foundryindustiewithup.module').then(m => m.FoundryindustrieswithupModule)
  },
  {
    path: 'bonds',
    loadChildren: () => import('./bonds/bonds.module').then(m => m.BondsModule)
  },
  {
    path: 'wholesale',
    loadChildren: () => import('./wholesale/wholesale.module').then(m => m.WholesaleModule)
  },
  {
    path: 'dashboard',
    loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule)
  },
  {
    path: 'retail',
    loadChildren: () => import('./retail/retail.module').then(m => m.RetailModule)
  },
  {
    path: 'retailtoretailtransfer',
    loadChildren: () => import('./retailtoretailtransfer/retailtoretailtransfer.module').then(m => m.RetailtoretailtransferModule)
  },
  {
    path: 'warehouse',
    loadChildren: () => import('./warehouse/warehouse.module').then(m => m.WarehouseModule)
  },
  {
    path: 'custombond',
    loadChildren: () => import('./custombond/custombond.module').then(m => m.CustombondModule)
  },
  {
    path: 'controlregulation',
    loadChildren: () => import('./controlregulation/controlregulation.module').then(m => m.ControlregulationModule)
  },
{
  path: 'auditmanagement',
  loadChildren: () => import('./auditmanagement/auditmanagement.module').then(m => m.AuditmanagementModule)
},
{
  path: 'version2',
  loadChildren: () => import('./version2/version2.module').then(m => m.Version2Module)
},
{
  path: 'version2brewery',
  loadChildren: () => import('./version2brewery/version2brewery.module').then(m => m.Version2breweryModule)
},
{
  path: 'alertandcasemanagement',
  loadChildren: () => import('./alertandcasemanagement/alertandcasemanagement.module').then(m => m.AlertandcasemanagementModule)
},
{
  path: 'parentunit',
  loadChildren: () => import('./parentunit/parentunit.module').then(m => m.ParentunitModule)
},
{
  path: 'cattlefeed',
  loadChildren: () => import('./cattlefeedindustry-withinup/cattlefeedindustry-withinup.module').then(m => m.CattlefeedindustryWithinupModule)
},
{
  path: 'billing',
  loadChildren: () => import('./billing/billing.module').then(m => m.BillingModule)
},
{
  path: 'palletmanagement',
  loadChildren: () => import('./palletmanagement/palletmanagement.module').then(m => m.PalletmanagementModule)
},
{
  path: 'aec',
  loadChildren: () => import('./aec/aec.module').then(m => m.AecModule)
},
{
  path: 'bio',
  loadChildren: () => import('./bio/bio.module').then(m => m.BioModule)
},
{
  path: 'hardwareandsoftware',
  loadChildren: () => import('./hardwareandsoftware/hardwareandsoftware.module').then(m => m.HardwareandsoftwareModule)
},
{
  path: 'niveshmitra',
  loadChildren: () => import('./niveshmitra/niveshmitra.module').then(m => m.NiveshmitraModule)
},
{
  path: 'vintinery',
  loadChildren: () => import('./vintinery/vintinery.module').then(m => m.VintineryModule)
},
{
  path: 'methylalcohol',
  loadChildren: () => import('./methylalcohol/methylalcohol.module').then(m => m.MethylalcoholModule)
}

];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class SupplychainmanagementPageRoutingModule { }
