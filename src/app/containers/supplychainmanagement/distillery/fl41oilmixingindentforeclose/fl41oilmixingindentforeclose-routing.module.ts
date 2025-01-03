import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ViewComponent } from './view/view.component';
import { ApprovalComponent } from './approval/approval.component';

const routes: Routes = [
  {
    path: 'view', 
    component : ViewComponent
  },
  {
    path: 'approval',
    component : ApprovalComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Fl41oilmixingindentforecloseRoutingModule { }
