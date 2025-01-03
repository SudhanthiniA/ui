import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OfficerloginapprovalComponent } from './officerloginapproval.component';
import { ViewComponent } from './view/view.component';
const routes: Routes = [
  {
    path: 'list',
    component: OfficerloginapprovalComponent
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
export class OfficerloginapprovalRoutingModule { }
