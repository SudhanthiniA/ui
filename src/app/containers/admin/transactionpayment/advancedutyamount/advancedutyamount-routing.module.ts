import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdvancedutyamountComponent } from './advancedutyamount.component';
import { ViewComponent } from './view/view.component';


const routes: Routes = [
  {
    path: 'list',
    component: AdvancedutyamountComponent
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
export class AdvancedutyamountRoutingModule { }
