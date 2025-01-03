import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [

  {
    path: 'actionslevied',
    loadChildren: () => import('./actionslevied/actionslevied.module').then(module => module.ActionsleviedModule)
  },
  {
    path: 'internalauditor',
    loadChildren: () => import('./internalauditor/internalauditor.module').then(module => module.AdvancedutyregModule)
  },
  {
    path: 'financecontroller',
    loadChildren: () => import('./financecontroller/financecontroller.module').then(module => module.AdvancedutyregModule)
  },
  {
    path: 'excercisecommisioner',
    loadChildren: () => import('./excercisecommisioner/excercisecommisioner.module').then(module => module.AdvancedutyregModule)
  },
  {
    path: 'auditreport',
    loadChildren: () => import('./auditreport/auditreport.module').then(module => module.AuditreportModule)
  },
  {
    path: 'excisecommissionerapproval',
    loadChildren: () => import('./excisecommissioner/excisecommissioner.module').then(module => module.ExcisecommissionerModule)
  },
  {
    path: 'answertype',
    loadChildren: () => import('./answertype/answertype.module').then(module => module.AnswertypeModule)
  },
  {
    path: 'entitydashboard',
    loadChildren: () => import('./entitydashboard/entitydashboard.module').then(module => module.AdvancedutyregModule)
  },
  {
    path: 'externalauditor',
    loadChildren: () => import('./externalauditor/internalauditor.module').then(module => module.AdvancedutyregModule)
  },
  {
    path: 'internalauditoraudpara',
    loadChildren: () => import('./internalauditoraudpara/internalauditoraudpara.module').then(module => module.InternalauditoraudparaModule)
  }
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuditmanagementRoutingModule { }
