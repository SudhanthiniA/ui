import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StockactivityComponent } from './stockactivity.component';
import { AddstockactivityComponent } from './addstockactivity/addstockactivity.component';
import { ViewstockactivityComponent } from './viewstockactivity/viewstockactivity.component';

const routes: Routes = [
  { path: 'list', component: StockactivityComponent},
  {path: 'add', component: AddstockactivityComponent},
  {path: 'view', component:ViewstockactivityComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StockactivityRoutingModule { }
