import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { Fl9aComponent } from './fl9a.component';
import { ViewComponent } from './view/view.component';

const routes: Routes = [
  {
    path : 'add',
    component : Fl9aComponent
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
export class Fl9aRoutingModule { }
