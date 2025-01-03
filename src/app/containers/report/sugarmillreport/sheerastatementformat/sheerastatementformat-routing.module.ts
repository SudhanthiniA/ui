import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SheerastatementformatComponent } from './sheerastatementformat.component';

const routes: Routes = [
  {
    path : 'list',
    component : SheerastatementformatComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SheerastatementformatRoutingModule { }
