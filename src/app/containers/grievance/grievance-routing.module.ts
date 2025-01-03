import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'grievanceform',
    loadChildren: () => import('./grievanceform/grievanceform.module').then(m => m.GrievanceformModule)
  },
  {
    path: 'assignment',
    loadChildren: () => import('./assignment/grievanceform.module').then(m => m.GrievanceformModule)
  },
  {
    path: 'exciseofficer',
    loadChildren: () => import('./exciseofficer/inspectingofficer.module').then(m => m.InspectingofficerModule)
  },
  {
    path: 'registerform',
    loadChildren: () => import('./registerform/grievanceform.module').then(m => m.GrievanceformModule)
  },
  {
    path: 'template',
    loadChildren: () => import('./template/exticket.module').then(m => m.ExticketModule)
  },
  {
    path: 'commonsearch',
    loadChildren: () => import('./commonsearch/inappticket.module').then(m => m.InappticketModule)
  },
  {
    path: 'faq',
    loadChildren: () => import('./faq/faq.module').then(m => m.FaqModule)
  },
  {
    path: 'inspectingofficer',
    loadChildren: () => import('./inspectingofficer/inspectingofficer.module').then(m => m.InspectingofficerModule)
  },
  {
    path: 'inspectionandredressal',
    loadChildren: () => import('./inspectionandredressal/inspectionandredressal.module').then(m => m.InspectionandredressalModule)
  },
  {
    path: 'profile',
    loadChildren: () => import('./profile/profile.module').then(m => m.ProfileModule)
  },
  {
    path: 'dashboard',
    loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule)
  },
  {
    path: 'typeofuser',
    loadChildren: () => import('./typeofuser/typeofuser.module').then(m => m.TypeofuserModule)
  },
  {
    path: 'grievancestatus',
    loadChildren: () => import('./grievancestatus/grievancestatus.module').then(m => m.GrievancestatusModule)
  }
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GrievanceRoutingModule { }    
