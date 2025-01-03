import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'dashboard',
    loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule)
  },
  {
    path: 'registration',
    loadChildren: () => import('./registration/registration.module').then(m => m.RegistrationModule)
  },
  {
    path: 'masterwareprofile',
    loadChildren: () => import('./masterwareprofile/masterwareprofile.module').then(m => m.MasterwareprofileModule)
  },
  {
    path: 'fl36',
    loadChildren: () => import('./subconsol-draft-tp-fl36/subconsol-draft-tp-fl36.module').then(m => m.SubconsolDraftTpFl36Module)
  },
  {
    path: 'mwhmapping',
    loadChildren: () => import('./mwhmapping/mwhmapping.module').then(m => m.MwhmappingModule)
  },
  {
    path: 'mwindentacceptance',
    loadChildren: () => import('./mwindentacceptance/mwindentacceptance.module').then(m => m.MwindentacceptanceModule)
  },
  {
    path: 'mwstockavailability',
    loadChildren: () => import('./mwstockavailability/mwstockavailability.module').then(m => m.MwstockavailabilityModule)
  },
  {
    path: 'mwdispatch',
    loadChildren: () => import('./mwdispatch/mwdispatch.module').then(m => m.MwdispatchModule)
  },
  {
    path: 'reportsonindents',
    loadChildren: () => import('./reportsonindents/reportsonindents.module').then(m => m.ReportsonindentsModule)
  },
  {
    path: 'reportstransportpass',
    loadChildren: () => import('./reportstransportpass/reportstransportpass.module').then(m => m.ReportstransportpassModule)
  },
  {
    path: 'transpassmasterwarehouse',
    loadChildren: () => import('./transpassmasterwarehouse/transpassmasterwarehouse.module').then(m => m.TranspassmasterwarehouseModule)
  },
  {
    path: 'transpassgenfordistbondware',
    loadChildren: () => import('./transpassgenfordistbondware/transpassgenfordistbondware.module').then(m => m.TranspassgenfordistbondwareModule)
  },
  {
    path: 'mwindentforward',
    loadChildren: () => import('./mwindentforward/mwindentforward.module').then(m => m.MwindentforwardModule)
  },
  {
    path: 'mworderpickup',
    loadChildren: () => import('./mworderpickup/mworderpickup.module').then(m => m.MworderpickupModule)
  },
  {
    path: 'mwapprovalflow',
    loadChildren: () => import('./mwapprovalflow/mwapprovalflow.module').then(m => m.MwapprovalflowModule)
  },
  {
    path: 'entityviewsmaprequest',
    loadChildren: () => import('./entityviewsmaprequest/entityviewsmaprequest.module').then(m => m.EntityviewsmaprequestModule)
  },
  {
    path: 'mwtranspassapproval',
    loadChildren: () => import('./mwtranspassapproval/mwtranspassapproval.module').then(m => m.MwtranspassapprovalModule)
  },
  {
    path: 'mwstockin',
    loadChildren: () => import('./mwstockin/mwstockin.module').then(m => m.MwstockinModule)
  },
  {
    path: 'stockmovement',
    loadChildren: () => import('./stockmovement/stockmovement.module').then(m => m.StockmovementModule)
  },
  {
    path: 'mwdamagedproducts',
    loadChildren: () => import('./mwdamagedproducts/mwdamagedproducts.module').then(m => m.MwdamagedproductsModule)
  },
  {
    path: 'mwbreakageentry',
    loadChildren: () => import('./mwbreakageentry/mwbreakageentry.module').then(m => m.MwbreakageentryModule)
  },
  {
    path: 'mwlostandmissing',
    loadChildren: () => import('./mwlostandmissing/mwlostandmissing.module').then(m => m.MwlostandmissingModule)
  },
  {
    path: 'mwtranspasscanmod',
    loadChildren: () => import('./mwtranspasscanmod/mwtranspasscanmod.module').then(m => m.MwtranspasscanmodModule)
  },
  {
    path: 'mwfoundandduplicates',
    loadChildren: () => import('./mwfoundandduplicates/mwfoundandduplicates.module').then(m => m.MwfoundandduplicatesModule)
  },
  {
    path: 'mwqrcodeupload',
    loadChildren: () => import('./mwqrcodeupload/mwqrcodeupload.module').then(m => m.MwqrcodeuploadModule)
  },
  {
    path: 'mwadvancedutyregister',
    loadChildren: () => import('./mwadvancedutyregister/mwadvancedutyregister.module').then(m => m.MwadvancedutyregisterModule)
  },
  {
    path: 'mwconsolidatedtpforwh',
    loadChildren: () => import('./mwconsolidatedtpforwh/mwconsolidatedtpforwh.module').then(m => m.MwconsolidatedtpforwhModule)
  },
  {
    path: 'receiptconsuption',
    loadChildren: () => import('./receiptconsuption/receiptconsuption.module').then(m => m.ReceiptconsuptionModule)
  },
  {
    path: 'mwconsolidatedforsubwh',
    loadChildren: () => import('./mwconsolidatedforsubwh/mwconsolidatedforsubwh.module').then(m => m.MwconsolidatedforsubwhModule)
  },
  {
    path: 'transitgatepass',
    loadChildren: () => import('./transitgatepass/transitgatepass.module').then(m => m.TransitgatepassModule)
  } ,
  {
    path: 'tranportpasscancel',
    loadChildren: () => import('./transportpasscancel/transportpasscancel.module').then(m => m.TransportpasscancelModule)
  },
  {
    path: 'dispatch',
    loadChildren: () => import('./dispatch/dispatch.module').then(m => m.DispatchModule)
  },
  {
    path: 'accidentalrequest',
    loadChildren: () => import('./accidentalrequest/accidentalrequest.module').then(m => m.AccidentalrequestModule)
  },   
  {
    path: 'tpack',
    loadChildren: () => import('./tpack/tpack.module').then(m => m.TpackModule)
  },
  {
    path: 'subindentcancellation',
    loadChildren: () => import('./subindentcancellation/subindentcancellation.module').then(m => m.SubindentcancellationModule)
  },
  {
    path: 'advanceduty',
    loadChildren: () => import('./advance-duty/advance-duty.module').then(m => m.AdvanceDutyModule)
  }               
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WarehousemasterRoutingModule { }    
