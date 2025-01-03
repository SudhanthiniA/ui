import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProductionreportComponent } from './productionreport.component';
import { ViewComponent } from './/view/view.component';

const routes: Routes = [
  { path: 'list', component: ProductionreportComponent },
  { path: 'view', component: ViewComponent },
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductionreportRoutingModule { }
