import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ParentunitComponent } from './parentunit.component';
import { ViewComponent } from './view/view.component';

const routes: Routes = [
  {
    path : 'list',
    component : ParentunitComponent
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
export class ParentunitRoutingModule { }
