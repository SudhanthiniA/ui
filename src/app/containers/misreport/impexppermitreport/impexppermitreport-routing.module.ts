import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// import { ImpexppermitreportComponent } from './impexppermitreport.component';

const routes: Routes = [
  // {
  //   path : 'impexppermitreport',
  //   component : ImpexppermitreportComponent
  // },
  {
    path: 'bondwarehouse',
    loadChildren: () => import('./bondwarehouse/bondwarehouse.module').then(m => m.BondwarehouseModule)
  },
  {
    path: 'indentpendancy',
    loadChildren: () => import('./indentpendancyreport/indentpendancyreport.module').then(m => m.IndentpendancyreportModule)
  }
  // {
  //   path: 'productionreport',
  //   loadChildren: () => import('./productionreport/productionreport.module').then(m => m.ProductionreportModule)
  // }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ImpexppermitreportRoutingModule { }
