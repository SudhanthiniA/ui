import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ViewComponent } from './view/view.component';
import { SalebillingSecondinputComponent } from './salebilling-secondinput.component';
import { AddComponent } from './add/add.component';

const routes: Routes = [
  {
    path : 'list',
    component : SalebillingSecondinputComponent
  },
  {
    path : 'add',
    component : AddComponent
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
export class SalebillingSecondinputRoutingModule { }
