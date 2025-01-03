import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SugarmilloutsideupComponent } from './sugarmilloutsideup.component';
import { ViewComponent } from './view/view.component';

const routes: Routes = [
  {
    path : 'add',
    component : SugarmilloutsideupComponent
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
export class SugarmilloutsideupRoutingModule { }
