import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { ExcisecommissionerComponent } from './excisecommissioner.component';
import { ViewComponent } from './view/view.component';

const routes: Routes = [
  {
    path : 'list',
    component : ExcisecommissionerComponent
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
export class ExcisecommissionerRoutingModule { }
