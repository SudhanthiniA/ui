import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NiveshmitradashboardComponent } from './niveshmitradashboard.component';
import { NiveshmitraserviceComponent } from './niveshmitraservice/niveshmitraservice.component';

const routes: Routes = [
  {
    path : 'list',
    component : NiveshmitradashboardComponent
  },
  {
    path : 'add',
    component : NiveshmitraserviceComponent
  }
]
  @NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })
export class NiveshmitradashboardRoutingModule { }
