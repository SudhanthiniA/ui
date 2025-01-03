import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { StockinhandComponent } from './stockinhand.component';
import { ViewstockinhandComponent } from './viewstockinhand/viewstockinhand.component';

const routes: Routes = [
  {
    path : 'list',
    component : StockinhandComponent
  },
  {
    path : 'view',
    component : ViewstockinhandComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StockinhandRoutingModule { }
