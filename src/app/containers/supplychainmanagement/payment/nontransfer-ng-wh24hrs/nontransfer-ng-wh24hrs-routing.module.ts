import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NontransferNgWh24hrsComponent } from './nontransfer-ng-wh24hrs.component';
import { ViewComponent } from './view/view.component';
import { AddComponent } from './add/add.component';
import { EditComponent } from './edit/edit.component';

const routes: Routes = [
  {
    path: 'list',
    component: NontransferNgWh24hrsComponent
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
  },
  
 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NontransferNgWh24hrsRoutingModule { }
