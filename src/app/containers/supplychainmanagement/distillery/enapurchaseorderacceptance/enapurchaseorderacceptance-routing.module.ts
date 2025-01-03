import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { EnapurchaseorderacceptanceComponent } from './enapurchaseorderacceptance.component';
import { ViewComponent } from './view/view.component';

const routes: Routes = [
  {
    path : 'list',
    component : EnapurchaseorderacceptanceComponent
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
export class EnapurchaseorderacceptanceRoutingModule { }
