import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BlockComponent } from './block.component';
import { AddBlockComponent } from './add-block/add-block.component';
import { ViewBlockComponent } from './view-block/view-block.component';
const routes: Routes = [
  {
    path: 'list',
    component: BlockComponent
  },
  {
    path: 'add',
    component: AddBlockComponent
  },
  {
    path: 'edit/:id',
    component: AddBlockComponent
  },
  {
    path: 'view/:id',
    component: ViewBlockComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BlockRoutingModule { }
