import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  
 
  {
    path: 'creationofcase', 
    loadChildren: () => import('./creationofcase/creationofcase.module').then(m => m.UnscheduledinspectionModule)
  },
  {
    path: 'casetracking', 
    loadChildren: () => import('./casetracking/creationofcase.module').then(m => m.UnscheduledinspectionModule)
  },
  {
    path: 'creationofcaseapprovaldec', 
    loadChildren: () => import('./creationofcase-approvaldec/creationofcase.module').then(m => m.UnscheduledinspectionModule)
  },
  {
    path: 'creationofcaseaddcomm', 
    loadChildren: () => import('./creationofcase-additionalcommissoner/creationofcase.module').then(m => m.UnscheduledinspectionModule)
  },
  {
    path: 'entitydashboard', 
    loadChildren: () => import('./entitydashboard/entitydashboard.module').then(m => m.AdvancedutyregModule)
  },
  {
    path: 'creationofcasefieldofc', 
    loadChildren: () => import('./creationofcase-fieldofc/creationofcase.module').then(m => m.UnscheduledinspectionModule)
  },
  
   {
    path: 'submissionexofagainst', 
    loadChildren: () => import('./submissionexofagainst/reportevidencesubmissionexofficial.module').then(m => m.ReportevidencesubmissionexofficialModule)
  },
  {
    path: 'alert', 
    loadChildren: () => import('./alert/alert.module').then(m => m.AlertModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class AlertandcasemanagementRoutingModule { }
