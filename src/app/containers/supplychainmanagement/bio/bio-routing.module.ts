import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [

  {
    path: 'applicantrequestforeal',
    loadChildren: () => import('./applicantrequestforeal/applicantrequestforeal.module').then(module => module.ApplicantrequestforealModule)
  },
  {
    path: 'stockinealapproval',
    loadChildren: () => import('./stockinealapproval/stockinealapproval.module').then(m => m.StockinealapprovalModule)
  },
  {
    path: 'labelrequestplan',
    loadChildren: () => import('./labelrequestplan/labelrequestplan.module').then(m => m.LabelrequestplanModule)
  },
  {
    path: 'productiondeclaration',
    loadChildren: () => import('./productiondeclaration/productiondeclaration.module').then(m => m.ProductiondeclarationModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BioRoutingModule { }
