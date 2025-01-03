import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ViewComponent } from './view/view.component';
import { IndentacceptanceCl2Component } from './indentacceptance-cl2.component';
const routes: Routes = [
  {
    path: 'list',
    component: IndentacceptanceCl2Component
  },
  {
    path: 'view',
    component: ViewComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class IndentacceptanceCl2RoutingModule { }
