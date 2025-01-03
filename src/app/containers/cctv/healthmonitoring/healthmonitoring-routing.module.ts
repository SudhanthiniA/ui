import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HealthmonitoringComponent } from './healthmonitoring.component';

const routes: Routes = [
  {
    path: 'view',
    component: HealthmonitoringComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HealthmonitoringRoutingModule { }
