import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DaybookComponent } from './daybook.component';

const routes: Routes = [
  {
    path : 'list',
    component : DaybookComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DaybookRoutingModule { }
