import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Fl1Component } from './fl1.component';
import { ViewComponent } from './view/view.component';
import { AddComponent } from './add/add.component';

const routes: Routes = [
  {
    path: '',
    component: Fl1Component
  },
  {
    path: 'add',
    component: AddComponent
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
export class Fl1RoutingModule { }
