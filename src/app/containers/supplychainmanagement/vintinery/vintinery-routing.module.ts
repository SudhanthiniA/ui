import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  
  {
    path: 'coldroomregistration',
    loadChildren: () => import('./coldroomregistration/coldroomregistration.module').then(module => module.ColdroomregistrationModule)
  },
  {
    path: 'coldstoragetransfer',
    loadChildren: () => import('./coldstoragetransfer/coldstoragetransfer.module').then(module => module.ColdstoragetransferModule)
  },
  {
    path: 'coldroomdismantle',
    loadChildren: () => import('./coldroomdismantle/coldroomdismantle.module').then(module => module.ColdroomdismantleModule)
  },
  {
    path: 'crushing',
    loadChildren: () => import('./crushing/crushing.module').then(module => module.CrushingModule)
  },
  {
    path: 'purchaseofbrandy',
    loadChildren: () => import('./purchaseofbrandy/purchaseofliquor.module').then(module => module.PurchaseofliquorModule)
  },
  {
    path: 'importoforder',
    loadChildren: () => import('./importoforder/importoforder.module').then(module => module.ImportoforderModule)
  },
  {
    path: 'spiritimportpermitorder',
    loadChildren: () => import('./spiritimportpermitorder/importoforder.module').then(module => module.ImportoforderModule)
  },
  {
    path: 'spiritpurchaserequestwithinup',
    loadChildren: () => import('./spiritpurchaserequestwithinup/spiritpurchaserequestwithinup.module').then(module => module.SpiritpurchaserequestwithinupModule)
  },
  {
    path: 'brandlabel',
    loadChildren: () => import('./brandlabel/brandlabel.module').then(module => module.BrandlabelModule)
  },
  {
    path: 'bottlinglineregistration',
    loadChildren: () => import('./bottlinglineregistration/bottlinglineregistration.module').then(module => module.BottlinglineregistrationModule)
  },
  {
    path: 'tankregistration',
    loadChildren: () => import('./tankregistration/tankregistration.module').then(module => module.TankregistrationModule)
  },
  {
    path: 'purchaserequestbasewine',
    loadChildren: () => import('./purchaserequestbasewine/purchaserequestbasewine.module').then(module => module.PurchaserequestbasewineModule)
  },
  {
    path: 'breakageentry',
    loadChildren: () => import('./breakageentry/breakageentry.module').then(module => module.BreakageentryModule)
  },
  {
    path: 'advancedeposit',
    loadChildren: () => import('./advancedeposit/advancedeposit.module').then(module => module.AdvancedepositModule)
  },
  {
    path: 'stockinhand',
    loadChildren: () => import('./stockinhand/stockinhand.module').then(module => module.StockinhandModule)
  },
  {
    path: 'indentacceptance',
    loadChildren: () => import('./indentacceptance/indentacceptance.module').then(module => module.IndentacceptanceModule)
  },
  {
    path: 'dispatchprocess',
    loadChildren: () => import('./dispatchprocess/dispatchprocess.module').then(module => module.DispatchprocessModule)
  },
  {
    path: 'stockoverview',
    loadChildren: () => import('./stockoverview/stockoverview.module').then(module => module.StockoverviewModule)
  },
  {
    path: 'raiseealrequestforbottlingplan',
    loadChildren: () => import('./raiseealrequestforbottlingplan/raiseealrequestforbottlingplan.module').then(module => module.RaiseealrequestforbottlingplanModule)
  },
  {
    path: 'orderpickup',
    loadChildren: () => import('./orderpickup/orderpickup.module').then(module => module.OrderpickupModule)
  },
  {
    path: 'bottlingprocess',
    loadChildren: () => import('./bottlingprocess/bottlingprocess.module').then(module => module.BottlingprocessModule)
  },
  {
    path: 'productiondeclaration',
    loadChildren: () => import('./productiondeclaration/productiondeclaration.module').then(module => module.ProductiondeclarationModule)
  },
  {
    path: 'transportpassflb11withindent',
    loadChildren: () => import('./transportpassflb11withindent/transportpasswithindent.module').then(module => module.TransportpasswithindentModule)
  },
  {
    path: 'fl36final',
    loadChildren: () => import('./fl36final/fl36.module').then(module => module.Fl36Module)
  },
  {
  path: 'fl36draft',
  loadChildren: () => import('./fl36draft/fl36draft.module').then(module => module.Fl36draftModule)
  },
  {
    path: 'stockdispatch',
    loadChildren: () => import('./stockdispatch/stockdispatch.module').then(module => module.StockdispatchModule)
  },
  {
    path: 'indentraise',
    loadChildren: () => import('./indentraise/indentraise.module').then(module => module.IndentraiseModule)
  },
  {    path: 'dispatchtotraverwithindent',
    loadChildren: () => import('./dispatchtotraverwithindent/dispatchtotraverwithindent.module').then(module => module.DispatchtotraverwithindentModule)
  },
  {
    path: 'stockdispatchedfortraves',
    loadChildren: () => import('./stockdispatchedfortraves/dispatched.module').then(module => module.DispatchedModule)
  },
  {
   path: 'indentacceptancefortraves',
   loadChildren: () => import('./indentacceptancefortraves/indentacceptancefortraves.module').then(module => module.IndentacceptancefortravesModule)
  },
  {
    path: 'brandwiseplanestimation',
    loadChildren: () => import('./brandwiseplanestimation/brandwiseplanestimation.module').then(module => module.BrandwiseplanestimationModule)
   },
   {
    path: 'indentacceptancefortraves',
    loadChildren: () => import('./indentacceptancefortraves/indentacceptancefortraves.module').then(module => module.IndentacceptancefortravesModule)
  },
  {
      path: 'planestimationapplication',
      loadChildren: () => import('./planestimationapplication/planestimationapplication.module').then(module => module.PlanestimationapplicationModule)
    },
    {
      path: 'basewinesetup',
      loadChildren: () => import('./basewinesetup/basewinesetup.module').then(module => module.BasewinesetupModule)
    },
    {
      path: 'basewinetransfromprodstoragetank',
      loadChildren: () => import('./basewinetransfromprodstoragetank/basewinetransfromprodstoragetank.module').then(module => module.BasewinetransfromprodstoragetankModule)
    },
    {
      path: 'brandwisesetup',
      loadChildren: () => import('./brandwisesetup/brandwisesetup.module').then(module => module.BrandwisesetupModule)
    },
    {
      path: 'productiontostorageandproductiontobottling',
      loadChildren: () => import('./productiontostorageandproductiontobottling/productiontostorageandproductiontobottling.module').then(module => module.ProductiontostorageandproductiontobottlingModule)
    },
    {
      path: 'transferfromstoragetobottling',
      loadChildren: () => import('./transferfromstoragetobottling/transferfromstoragetobottling.module').then(module => module.TransferfromstoragetobottlingModule)
    },
    {
      path: 'manufactureplanestimationofbasewineapplication',
      loadChildren: () => import('./manufactureplanestimationofbasewineapplication/manufactureplanestimationofbasewineapplication.module').then(module => module.ManufactureplanestimationofbasewineapplicationModule)
    },
    {
      path: 'brandwisemanufacturesetup',
      loadChildren: () => import('./brandwisemanufacturesetup/brandwisemanufacturesetup.module').then(module => module.BrandwisemanufacturesetupModule)
    },
    {
      path: 'stockactivity',
      loadChildren: () => import('./stockactivity/stockactivity.module').then(module => module.StockactivityModule)
    },
    {
      path: 'stockactivity2',
      loadChildren: () => import('./stockactivity2/stockactivity2.module').then(module => module.Stockactivity2Module)
    },
    {
      path: 'saletovintnery',
      loadChildren: () => import('./saletovintnery/saletofl11.module').then(module => module.Saletofl11Module)
    },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VintineryRoutingModule { }
