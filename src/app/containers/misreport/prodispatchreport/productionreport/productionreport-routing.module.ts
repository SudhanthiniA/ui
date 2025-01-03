import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// import { ProdispatchreportComponent } from './productionreport.component';

const routes: Routes = [
  // {
  //   path : 'productionreport',
  //   component : ProducitonreportComponent
  // },
  {
    path: 'parentunit',
    loadChildren: () => import('./parentunit/parentunit.module').then(m => m.ParentunitModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductionreportRoutingModule { }
