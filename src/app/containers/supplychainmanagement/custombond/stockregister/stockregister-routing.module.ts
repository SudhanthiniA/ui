import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { StockregisterComponent } from './stockregister.component';

const routes: Routes = [
  {
    path : 'list',
    component : StockregisterComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StockregisterRoutingModule { }
