import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { StockavailabilityComponent } from './stockavailability.component';
import { ViewComponent } from './view/view.component';


const routes: Routes = [
  { path: 'list', component: StockavailabilityComponent },
  { path: 'view', component: ViewComponent },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StockavailabilityRoutingModule { }
