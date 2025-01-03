import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListComponent } from './list/list.component';
import { AddComponent } from './add/add.component';
import { PuapplicantviewComponent } from './puapplicantview/puapplicantview.component';
import { BwflacceptanceComponent } from './bwflacceptance/bwflacceptance.component';
import { BwfltransportpassComponent } from './bwfltransportpass/bwfltransportpass.component';
import { BwfltransportpassviewComponent } from './bwfltransportpassview/bwfltransportpassview.component';
import { VendordispatchComponent } from './vendordispatch/vendordispatch.component';
import { VendordispatchviewComponent } from './vendordispatchlist/vendordispatchview.component'

const routes: Routes = [
  { path: 'list', component: ListComponent },
  { path: 'add', component: AddComponent }, 
  { path: 'view', component: PuapplicantviewComponent },
  { path: 'bwflacceptance', component: BwflacceptanceComponent },
  { path: 'bwfltransportpass', component: BwfltransportpassComponent },
  { path: 'bwfltransportpassview', component: BwfltransportpassviewComponent },
  { path: 'vendordispatch', component: VendordispatchComponent },
  { path: 'vendordispatchlist', component: VendordispatchviewComponent },
  {
    path: 'vendortemplate',
    loadChildren: () => import('./vendortemplate/vendortemplate.module').then(m => m.VendortemplateModule)
  },
  {
    path: 'reverselogic',
    loadChildren: () => import('./reverselogic/reverselogic.module').then(m => m.ReverselogicModule)
  },
  {
    path: 'raiseealrequest',
    loadChildren: () => import('./raiseealrequest/raiseealrequest.module').then(m => m.RaiseealrequestModule)
  },
  {
    path: 'newealrequest',
    loadChildren: () => import('./newealrequest/newealrequest.module').then(m => m.NewealrequestModule)
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EalrequestRoutingModule { }
