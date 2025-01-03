import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EdpreportsComponent } from './edpreports.component';


const routes: Routes = [
  {
    path : 'list',
    component : EdpreportsComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EdpreportsRoutingModule { }
