import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: 'dispatchreport',
    loadChildren: () => import('./dispatchreport/dispatchreport.module').then(m => m.DispatchreportModule)
  },
  {
    path: 'productionreport',
    loadChildren: () => import('./productionreport/productionreport.module').then(m => m.ProductionreportModule)
  },
  {
    path: 'procureofmolasses',
    loadChildren: () => import('./procureofmolasses/procureofmolasses.module').then(m => m.ProcureofmolassesModule)
  },
  {
    path: 'reqofrawmatgenincontregul',
    loadChildren: () => import('./reqofrawmatgenincontregul/reqofrawmatgenincontregul.module').then(m => m.ReqofrawmatgenincontregulModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RawmaterialRoutingModule { }
