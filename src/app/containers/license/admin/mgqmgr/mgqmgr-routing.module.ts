import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { MgqmgrComponent } from './mgqmgr.component';
import { DataupdatedComponent } from './dataupdated/dataupdated.component';



const routes: Routes = [
  {
    path: 'list',
    component: MgqmgrComponent
  },
  {
    path: 'dataupdated',
    component: DataupdatedComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MgqmgrRoutingModule { }
