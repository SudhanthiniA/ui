import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RedistillationforbottledstockComponent } from './redistillationforbottledstock.component';
import { ViewComponent } from './view/view.component';
import { AddComponent } from './add/add.component';

const routes: Routes = [
  {
    path: 'list',
    component: RedistillationforbottledstockComponent
  },
  {
    path: 'view',
    component: ViewComponent
  },
  {
    path: 'add',
    component: AddComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RedistillationforbottledstockRoutingModule { }
