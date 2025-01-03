import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OfficeruserComponent } from './officeruser.component';
import { AddComponent } from './add/add.component';
import { ViewComponent } from './view/view.component';
import { EditComponent } from './edit/edit.component';

const routes: Routes = [
  {
    path : 'list',
    component : OfficeruserComponent
  },
  {
    path : 'add',
    component : AddComponent
  },
  {
    path : 'view',
    component : ViewComponent
  },
  {
    path : 'edit',
    component : EditComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OfficeruserRoutingModule { }
