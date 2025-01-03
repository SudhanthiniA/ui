import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InternalauditoraudparaComponent } from './internalauditoraudpara.component';
import { ViewComponent } from './view/view.component';

const routes: Routes = [
  {
    path : 'add',
    component : InternalauditoraudparaComponent
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
export class InternalauditoraudparaRoutingModule { }
