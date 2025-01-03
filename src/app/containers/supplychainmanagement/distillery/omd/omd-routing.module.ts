import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OmdComponent } from './omd.component';
import { AddComponent } from './add/add.component';
import { ViewComponent } from './view/view.component';
import { EditComponent } from './edit/edit.component';

const routes: Routes = [
  {
    path: 'list',
    component: OmdComponent
  },
  {
    path: 'add',
    component: AddComponent
  },
  {
    path: 'edit',
    component: EditComponent
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
export class OmdRoutingModule { }
