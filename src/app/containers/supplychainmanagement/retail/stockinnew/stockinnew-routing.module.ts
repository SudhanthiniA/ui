import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { StockinnewComponent } from './stockinnew.component';
import { StockinnewqrscanComponent } from './stockinnewqrscan/stockinnewqrscan.component';
import { AddstockinnewComponent } from './addstockinnew/addstockinnew.component';
import { ViewstockinnewComponent } from './viewstockinnew/viewstockinnew.component';
import { PreviewstockinnewComponent } from './previewstockinnew/previewstockinnew.component';

const routes: Routes = [
  { path: 'list', component: StockinnewComponent },
  { path: 'qrscan', component: StockinnewqrscanComponent },
  { path: 'add', component: AddstockinnewComponent },
  { path: 'view', component: ViewstockinnewComponent },
  { path: 'preview', component: PreviewstockinnewComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StockinnewRoutingModule { }
