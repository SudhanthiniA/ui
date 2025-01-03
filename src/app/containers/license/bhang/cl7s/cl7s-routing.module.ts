import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Cl7sComponent } from './cl7s.component';
import { ViewComponent } from './view/view.component';

const routes: Routes = [
  {
    path : 'list',
    component : Cl7sComponent
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
export class Cl7sRoutingModule { }
