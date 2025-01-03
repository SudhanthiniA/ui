import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  
  {
    path: 'unscheduledinspection', 
    loadChildren: () => import('./unscheduledinspection/unscheduledinspection.module').then(m => m.UnscheduledinspectionModule)
  },
  {
    path: 'vigillance', 
    loadChildren: () => import('./vigillance/vigillance.module').then(m => m.VigillanceModule)
  },
  {
    path: 'scheduledinspection', 
    loadChildren: () => import('./scheduledinspection/unscheduledinspection.module').then(m => m.UnscheduledinspectionModule)
  },
  {
    path: 'complaintagainstshoplicensee', 
    loadChildren: () => import('./complaintagainstshoplicensee/unscheduledinspection.module').then(m => m.UnscheduledinspectionModule)
  },
  {
    path: 'submissionofrptunscheduled', 
    loadChildren: () => import('./submisofrptevidforunschdledinspect/submisofrptevidforunschdledinspect.module').then(m => m.SubmisofrptevidforunschdledinspectModule)
  },
  {
    path: 'reportevidsubshoplicsee', 
    loadChildren: () => import('./reprtevidsubcompagnshpshoplicsee/reprtevidsubcompagnshpshoplicsee.module').then(m => m.ReprtevidsubcompagnshpshoplicseeModule)
  },
  {
    path: 'submissionofrptscheduled', 
    loadChildren: () => import('./submisofrptevidforschdledinspect/submisofrptevidforunschdledinspect.module').then(m => m.SubmisofrptevidforunschdledinspectModule)
  },
  {
    path: 'complaintagainstexciseofficial', 
    loadChildren: () => import('./complaintagainstexciseofficial/complaintagainstexciseofficial.module').then(m => m.ComplaintagainstexciseofficialModule)
  },
  {
    path: 'assigntheofficerforinvestigating', 
    loadChildren: () => import('./assigntheofficerforinvestigating/assigntheofficerforinvestigating.module').then(m => m.AssigntheofficerforinvestigatingModule)
  },
  {
    path: 'reportevidencesubmissionexofficial', 
    loadChildren: () => import('./reportevidencesubmissionexofficial/reportevidencesubmissionexofficial.module').then(m => m.ReportevidencesubmissionexofficialModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class VigilanceRoutingModule { }
