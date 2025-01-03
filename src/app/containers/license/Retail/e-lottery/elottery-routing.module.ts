import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [

  {
    path: 'scheduler',
    loadChildren: () => import('./scheduler/scheduler.module').then(module => module.SchedulerModule)
  },
  {
    path: 'retailreport',
    loadChildren: () => import('./retailreport/reselection.module').then(module => module.ReselectionModule)
  },
  {
    path: 'summaryreport',
    loadChildren: () => import('./summaryreport/summaryreport.module').then(module => module.SummaryreportModule)
  },
  {
    path: 'applicant',
    loadChildren: () => import('./applicante-lottery/applicant.module').then(module => module.ApplicantModule)
  },
  {
    path: 'winner',
    loadChildren: () => import('./winner/winner.module').then(module => module.WinnerModule)
  },
  {
    path: 'reselection',
    loadChildren: () => import('./reselection/reselection.module').then(module => module.ReselectionModule)
  },
  {
    path: 'dashboard',
    loadChildren: () => import('./dashboard/dashboard.module').then(module => module.DashboardModule)
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ElotteryRoutingModule { }
