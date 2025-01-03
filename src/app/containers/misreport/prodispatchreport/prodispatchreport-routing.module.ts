import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProdispatchreportComponent } from './prodispatchreport.component';

const routes: Routes = [
  {
    path : 'prodispatch',
    component : ProdispatchreportComponent
  },
  {
    path: 'bondwarehouse',
    loadChildren: () => import('./bondwarehouse/bondwarehouse.module').then(m => m.BondwarehouseModule)
  },
  {
    path: 'parentunitdispatch',
    loadChildren: () => import('./parentunit/parentunit.module').then(m => m.ParentunitModule)
  },
  {
    path: 'productionreport',
    loadChildren: () => import('./productionreport/productionreport.module').then(m => m.ProductionreportModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProdispatchreportRoutingModule { }
