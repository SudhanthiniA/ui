import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EiComponent } from './ei.component';
import { ViewComponent } from './view/view.component';

const routes: Routes = [
  {
    path : 'list',
    component : EiComponent
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
export class EiRoutingModule { }
