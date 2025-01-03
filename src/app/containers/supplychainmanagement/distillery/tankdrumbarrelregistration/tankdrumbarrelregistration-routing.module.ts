import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TankdrumbarrelregistrationComponent } from './tankdrumbarrelregistration.component';
import { AddComponent } from './add/add.component';
import { ViewComponent } from './view/view.component';

import { ApprovalComponent } from './approval/approval.component';



const routes: Routes = [
  {
    path : 'list',
    component : TankdrumbarrelregistrationComponent
  },
  {
    path : 'add',
    component : AddComponent
  },
  {
    path : 'approval',
    component : ApprovalComponent
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
export class TankdrumbarrelregistrationRoutingModule { }
