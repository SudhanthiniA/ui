import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { StockinComponent } from './stockin.component';
import { AddeditstockinComponent } from './addeditstockin/addeditstockin.component';

const routes: Routes = [
  {
    path : 'list',
    component : StockinComponent
  },
  {
    path : 'add',
    component : AddeditstockinComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StockinRoutingModule { }
