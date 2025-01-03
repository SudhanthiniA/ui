import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { LmfeeComponent } from './lmfee.component';
import { DataupdatedComponent } from './dataupdated/dataupdated.component';



const routes: Routes = [
  {
    path: 'list',
    component: LmfeeComponent
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
export class LmfeeRoutingModule { }
