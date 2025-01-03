import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// import { WholesaleComponent } from './Wholesale.component';


const routes: Routes = [
  { path: 'wholesale',  },
  {
    path : 'id3',
    // component: Fl2Component
    loadChildren: () => import('./id3jun22/id3jun22.module').then(m => m.Id3jun22Module)
  },
  {
    path : 'id15',
    loadChildren: () => import('./id15/id15.module').then(m => m.ID15Module)
  },
  {
    path : 'elottery',
    loadChildren: () => import('./e-lottery/elottery.module').then(m => m.ElotteryModule)
  },
  {
    path : 'etender',
    loadChildren: () => import('./e-tender/etender.module').then(m => m.EtenderModule)
  },
  {
    path : 'etenderdeo',
    loadChildren: () => import('./e-tender-deo/etender.module').then(m => m.EtenderModule)
  },
  {
    path : 'renewal',
    loadChildren: () => import('./renewal/renewal.module').then(m => m.RenewalModule)
  },
  {
    path : 'renewalpayment',
    loadChildren: () => import('./renewalpayment/renewalpayment.module').then(m => m.RenewalpaymentModule)
  },
  {
    path : 'applicantlottery',
    loadChildren: () => import('./applicante-lottery/applicant.module').then(m => m.ApplicantModule)
  },
  {
    path : 'id15',
    loadChildren: () => import('./id15/id15.module').then(m => m.ID15Module)
  },
 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WholesaleRoutingModule { }
