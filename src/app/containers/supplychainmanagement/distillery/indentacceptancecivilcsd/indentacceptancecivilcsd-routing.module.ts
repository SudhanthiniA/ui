import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IndentacceptancecivilcsdComponent } from './indentacceptancecivilcsd.component';

const routes: Routes = [
  {
    path: 'list',
    component: IndentacceptancecivilcsdComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class IndentacceptancecivilcsdRoutingModule { }
