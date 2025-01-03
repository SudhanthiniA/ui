import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'mf5part1', loadChildren: () => import('./mf5part1/mf5part1.module').then(m => m.Mf5part1Module)
  },
  {
    path: 'indentacceptance', loadChildren: () => import('./indentacceptance/indentacceptanceforwholesale.module').then(m => m.IndentacceptanceforwholesaleModule)
  },
  {
    path: 'indentrequest', loadChildren: () => import('./indentrequest/indentacceptanceforwholesale.module').then(m => m.IndentacceptanceforwholesaleModule)
  },
  {
    path: 'importpermitnew', loadChildren: () => import('./importpermitnew/importpermitnew.module').then(m => m.ImportpermitnewModule)
  },
  {
    path: 'importpermitnewupapproval', loadChildren: () => import('./importpermitnewupapproval/importpermitnewup.module').then(m => m.ImportpermitnewupapprovalModule)
  },
  {
    path: 'transportationpass', loadChildren: () => import('./transportationpass/transportationpass.module').then(m => m.TransportationpassModule)
  },
  {
    path: 'receiptacknwlge', loadChildren: () => import('./receiptacknwlge/receiptack.module').then(m => m.Fl36Module)
  },
  {
    path: 'capturedetailsofqrcodedspt', loadChildren: () => import('./capturedetailsofqrcode-dspt/dispatch.module').then(m => m.DispatchModule)
  },
  {
    path: 'importpermitcancellation', loadChildren: () => import('./importpermitcancellation/importpermitcancellation.module').then(m => m.ImportpermitcancellationModule)
  },
  {
  path: 'qrcodesonbottleslables', loadChildren: () => import('./qrcodesonbottleslables/orderpick.module').then(m => m.OrderpickModule)
  },
  {
    path: 'mf4', loadChildren: () => import('./mf4/mf4.module').then(m => m.Mf4Module)
  },
  {
    path: 'dispatchedmf4', loadChildren: () => import('./dispatchedmf4/dispatchedmf4.module').then(m => m.Dispatchedmf4Module)
  },
  {
    path: 'mf6part1', loadChildren: () => import('./mf6part1/mf6part1.module').then(m => m.Mf6part1Module)
  },
  {
    path: 'mf4acknowledgement', loadChildren: () => import('./mf4acknowledgement/mf4acknowledgement.module').then(m => m.Mf4acknowledgementModule)
  },
  {
    path: 'mstist', loadChildren: () => import('./mstist/mstist.module').then(m => m.MstistModule)
  },
  {
    path: 'mf7', loadChildren: () => import('./mf7/mf7.module').then(m => m.Mf7Module)
  },
  {
    path: 'indentformolasses', loadChildren: () => import('./indentformolasses/indentformolasses.module').then(m => m.IndentformolassesModule)
  },
  {
    path: 'blendingproductionplan', loadChildren: () => import('./blendingproductionplan/blendingproductionplan.module').then(m => m.BlendingproductionplanModule)
  },
  {
    path: 'intimationforbrewplan', loadChildren: () => import('./intimationforbrewplan/intimationforbrewplan.module').then(m => m.IntimationforbrewplanModule)
  },
  {
    path: 'stockactivity', loadChildren: () => import('./stockactivity/stockactivity.module').then(m => m.StockactivityModule)
  },
  {
    path: 'otproductionplan', loadChildren: () => import('./otproductionplan/otproductionplan.module').then(m => m.OtproductionplanModule)
  },
  {
    path: 'requisitionoftransportpass', loadChildren: () => import('./requisitionoftransportpass/requisitionoftransportpass.module').then(m => m.RequisitionoftransportpassModule)
  },
  {
    path: 'mf4receivable', loadChildren: () => import('./mf4receivable/mf4receivable.module').then(m => m.Mf4receivableModule)
  }
 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ControlregulationRoutingModule { }
