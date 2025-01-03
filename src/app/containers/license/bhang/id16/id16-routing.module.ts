import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Id16Component } from './id16.component';
import { ViewComponent } from './view/view.component';

const routes: Routes = [
  {
    path : 'list',
    component : Id16Component
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
export class Id16RoutingModule { }
