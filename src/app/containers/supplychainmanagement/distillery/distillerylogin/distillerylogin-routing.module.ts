import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DistilleryloginComponent } from './distillerylogin.component';
import { ViewComponent } from './view/view.component';

const routes: Routes = [
  {
    path: 'list',
    component: DistilleryloginComponent
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
export class DistilleryloginRoutingModule { }
