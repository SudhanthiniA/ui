import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { StockavailabilitynewComponent } from './stockavailabilitynew.component';

const routes: Routes = [
  { path: 'list', component: StockavailabilitynewComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StockavailabilitynewRoutingModule { }
