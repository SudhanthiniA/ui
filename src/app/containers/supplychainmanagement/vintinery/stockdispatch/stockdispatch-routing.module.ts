import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { StockdispatchComponent } from './stockdispatch.component';
import { ViewComponent } from './view/view.component';


const routes: Routes = [
  {
    path : 'list',
    component : StockdispatchComponent
  },
  {
    path : 'view',
    component : ViewComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StockdispatchRoutingModule { }
