import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EalwastageComponent } from './ealwastage.component';
import { AddComponent } from './add.component';
import { ViewComponent } from './view.component';



const routes: Routes = [
  {
    path : 'list',
    component : EalwastageComponent
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
export class EalwastageRoutingModule { }
