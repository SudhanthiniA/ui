import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Tariandsendhicl11Component } from './tariandsendhicl11.component';
import { Viewtariandsendhicl11Component } from './viewtariandsendhicl11/viewtariandsendhicl11.component';

const routes: Routes = [
  {
    path : 'add',
    component : Tariandsendhicl11Component
  },
  {
    path : 'view',
    component : Viewtariandsendhicl11Component
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Tariandsendhicl11RoutingModule { }
