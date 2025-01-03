import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [

  {
    path: 'sugarmillreport',
    loadChildren: () => import('./sugarmillreport/sugarmillreport.module').then(module => module.SugarmillreportModule)
  },
  {
    path: 'distilleryreport',
    loadChildren: () => import('./distilleryreport/distilleryreport.module').then(module => module.DistilleryreportModule)
  },
  {
    path: 'bondsreport',
    loadChildren: () => import('./bondsreport/bondsreport.module').then(module => module.BondsreportModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReportRoutingModule { }
