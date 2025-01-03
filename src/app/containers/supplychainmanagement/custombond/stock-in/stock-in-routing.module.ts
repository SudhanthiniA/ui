import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StockInComponent } from './stock-in.component';
import { AddstockinComponent } from './addstockin.component';
import { ViewstockinComponent } from './viewstockin.component';

const routes: Routes = [

  {
    path: 'list',
    component: StockInComponent
  },
  {
    path: 'add',
    component: AddstockinComponent
  },
  {
    path: 'view',
    component: ViewstockinComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StockInRoutingModule { }
