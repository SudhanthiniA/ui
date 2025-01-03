import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StockbatchesComponent } from './stockbatches.component';
import { ViewstockbatchesComponent } from './viewstockbatches/viewstockbatches.component';

const routes: Routes = [
  {
    path : 'list',
    component : StockbatchesComponent
  },
  {
    path : 'view', 
    component : ViewstockbatchesComponent
  }
 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StockbatchesRoutingModule { }
