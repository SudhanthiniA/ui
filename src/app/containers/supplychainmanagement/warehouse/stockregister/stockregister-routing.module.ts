import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { StockregisterComponent } from './stockregister.component';
import { AddstockregisterComponent } from './addstockregister/addstockregister.component';

const routes: Routes = [
  { path: 'list', component: StockregisterComponent },
  { path: 'add', component: AddstockregisterComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StockregisterRoutingModule { }
