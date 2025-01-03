import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DashboardComponent } from './dashboard.component';
import { DashboardNewComponent } from './dashboard-new/dashboard-new.component';

const routes: Routes = [
  { path: '', component: DashboardComponent },
{
  path : 'dashboard-new',
  component : DashboardNewComponent
},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
