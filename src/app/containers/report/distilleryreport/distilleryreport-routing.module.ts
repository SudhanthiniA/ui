import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [

  {
    path: 'tankconversionreport1',
    loadChildren: () => import('./tankconversionreport1/tankconversionreport1.module').then(module => module.Tankconversionreport1Module)
  },
  {
    path: 'tankconversionreport2',
    loadChildren: () => import('./tankconversionreport2/tankconversionreport2.module').then(module => module.Tankconversionreport2Module)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DistilleryreportRoutingModule { }
