import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Cl10aComponent } from './cl10a.component';
import { ViewComponent } from './view/view.component';

const routes: Routes = [
  {
    path : 'list',
    component : Cl10aComponent
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
export class Cl10aRoutingModule { }
