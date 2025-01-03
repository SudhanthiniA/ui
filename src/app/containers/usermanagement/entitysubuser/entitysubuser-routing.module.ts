import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EntitysubuserComponent } from './entitysubuser.component';
import { ViewentitysubuserComponent } from './Viewentitysubuser/Viewentitysubuser.component';
import { AddentitysubuserComponent } from './addentitysubuser/addentitysubuser.component';
import { EditComponent } from './edit/edit.component';

const routes: Routes = [
  {
    path : 'list',
    component : EntitysubuserComponent
  },
  {
    path : 'add',
    component : AddentitysubuserComponent
  },
  {
    path : 'edit',
    component : EditComponent
  },
  {
    path : 'view',
    component : ViewentitysubuserComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EntitysubuserRoutingModule { }
