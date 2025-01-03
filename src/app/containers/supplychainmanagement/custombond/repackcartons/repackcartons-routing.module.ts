import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RepackcartonsComponent } from './repackcartons.component';

const routes: Routes = [
  {
    path : 'add',
    component : RepackcartonsComponent
  }
]
  @NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })
export class RepackcartonsRoutingModule { }
