import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { StockinhandComponent } from './stockinhand.component';
import { ViewComponent } from './view/view.component';
const routes: Routes = [ 
  
  {
    path : 'view',
    component : ViewComponent
  },
  {
    path : 'list',
    component : StockinhandComponent
  } 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StockinhandRoutingModule { }
