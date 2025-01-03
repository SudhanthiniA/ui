import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StockoutComponent } from './stockout.component';
import { AddshelfsaleComponent } from './addshelfsale/addshelfsale.component';
import { ViewshelfsaleComponent } from './viewshelfsale/viewshelfsale.component';

const routes: Routes = [
  { path: 'list', component: StockoutComponent },
  { path: 'add', component: AddshelfsaleComponent },
  { path: 'view', component: ViewshelfsaleComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StockoutRoutingModule { }
