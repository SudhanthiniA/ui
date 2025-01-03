import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Sw1Component } from './sw1.component';
import { ViewComponent } from './view/view.component';

const routes: Routes = [
  {
    path : 'list',
    component : Sw1Component
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
export class Sw1RoutingModule { }
