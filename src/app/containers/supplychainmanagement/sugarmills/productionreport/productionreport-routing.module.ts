import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductionreportComponent } from './productionreport.component';


const routes: Routes = [

  {
    path : 'report',
    component : ProductionreportComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductionreportRoutingModule { }
