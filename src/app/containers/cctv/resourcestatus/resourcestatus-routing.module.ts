import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ResourcestatusComponent } from './resourcestatus.component';

const routes: Routes = [
  {
    path: 'list',
    component: ResourcestatusComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ResourcestatusRoutingModule { }
