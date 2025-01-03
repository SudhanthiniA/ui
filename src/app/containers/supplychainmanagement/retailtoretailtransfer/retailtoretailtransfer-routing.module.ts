import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'retailtransfer', 
    loadChildren: () => import('./retailtransfer/retailtransfer.module').then(m => m.RetailtransferModule)
  },
  {
    path: 'fineforretailer', 
    loadChildren: () => import('./fineforretailer/fineforretailer.module').then(m => m.FineforretailModule)
  },
  {
    path: 'retailtransferacceptance', 
    loadChildren: () => import('./retailtransferacceptance/retailtransferacceptance.module').then(m => m.RetailtransferacceptanceModule)
  },
  {
    path: 'orderpickupnew', 
    loadChildren: () => import('./orderpickupnew/orderpickupnew.module').then(m => m.OrderpickupnewModule)
  },
  {
    path: 'accidentalrequest', 
    loadChildren: () => import('./accidentalrequest/accidentalrequest.module').then(m => m.AccidentalrequestModule)
  },
  {
    path: 'transportpass', 
    loadChildren: () => import('./transportpass/transportpass.module').then(m => m.TransportpassModule)
  },
  {
    path: 'retailmstist', 
    loadChildren: () => import('./retailmstist/retailmstist.module').then(m => m.RetailmstistModule)
  },
  {
    path: 'retailtransferreport', 
    loadChildren: () => import('./retailtransferreport/retailtransferreport.module').then(m => m.RetailtransferreportModule)
  },
  {
    path: 'stockavailability', 
    loadChildren: () => import('./stockavailability/stockavailability.module').then(m => m.StockavailabilityModule)
  },
  {
    path: 'quotatransferrequest', 
    loadChildren: () => import('./quotatransferrequest/quotatransferrequest.module').then(m => m.QuotatransferrequestModule)
  },
  {
    path: 'retailtransferacceptancenew', 
    loadChildren: () => import('./retailtransferaccepatancenew/retailtransferacceptancenew.module').then(m => m.RetailtransferacceptancenewModule)
  },
  {
    path: 'retailmstistnew', 
    loadChildren: () => import('./retailmstistnew/retailmstistnew.module').then(m => m.RetailmstistnewModule)
  },
  {
    path: 'deoscreenformgq', 
    loadChildren: () => import('./deoscreenformgq/deoscreenformgq.module').then(m => m.DeoscreenformgqModule)
  }, 
  {
    path: 'mgqmgrforthismonth', 
    loadChildren: () => import('./mgqmgrforthismonth/deoscreenformgr.module').then(m => m.DeoscreenformgrModule)
  },
  {
    path: 'deoconfigurationmgr', 
    loadChildren: () => import('./deoconfigurationmgr/retailtransferconfigurationmgr.module').then(m => m.RetailtransferconfigurationmgrModule)
  },
  {
    path: 'indentrequestquotatransfer', 
    loadChildren: () => import('./indentrequestquotatransfer/indentrequestnew.module').then(m => m.IndentrequestnewModule)
  },
  {
    path: 'deoscreenformgr', 
    loadChildren: () => import('./deoscreenformgr/deoscreenformgr.module').then(m => m.DeoscreenformgrModule)
  },
  {
    path: 'retailtransferconfigurationmgr', 
    loadChildren: () => import('./retailtransferconfigurationmgr/retailtransferconfigurationmgr.module').then(m => m.RetailtransferconfigurationmgrModule)
  },
  {
    path: 'retailtransferconfigurationmgq', 
    loadChildren: () => import('./retailtransferconfigurationmgq/retailtransferconfigurationmgq.module').then(m => m.RetailtransferconfigurationmgqModule)
  },
  {
    path: 'retailtransferrequest-mgr', 
    loadChildren: () => import('./retailtransferrequestmgr/retailtransferrequestmgr.module').then(m => m.RetailtransferrequestmgrModule)
  },
  {
    path: 'retailtransferrequest-mgq', 
    loadChildren: () => import('./retailtransferrequestmgq/retailtransferrequestmgq.module').then(m => m.RetailtransferrequestmgqModule)
  },
  {
    path: 'retailtransferacceptance-mgr', 
    loadChildren: () => import('./retailtransferacceptancemgr/retailtransferacceptancemgr.module').then(m => m.RetailtransferacceptancemgrModule)
  },
  {
    path: 'retailtransferacceptance-mgq', 
    loadChildren: () => import('./retailtransferacceptancemgq/retailtransferacceptancemgq.module').then(m => m.RetailtransferacceptancemgqModule)
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RetailtoretailtransferRoutingModule { }
