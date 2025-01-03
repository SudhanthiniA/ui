import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductiondeclarationComponent } from './productiondeclaration.component';
import { AddComponent } from './add/add.component';
import { ViewComponent } from './view/view.component';

import { ApprovalComponent } from './approval/approval.component';
const routes: Routes = [

  {
    path : 'list',
    component : ProductiondeclarationComponent
  },
  {
    path: 'view',
    component : ViewComponent
  },
  {
    path : 'add',
    component : AddComponent
  },
  {
    path : 'approval',
    component : ApprovalComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductiondeclarationRoutingModule { }
