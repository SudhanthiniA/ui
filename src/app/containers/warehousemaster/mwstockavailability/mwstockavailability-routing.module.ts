import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MwstockavailabilityComponent } from './mwstockavailability.component';
import { ViewmwstockavailabilityComponent } from './viewmwstockavailability/viewmwstockavailability.component';

const routes: Routes = [
  { path: 'list', component: MwstockavailabilityComponent },
  { path: 'view', component: ViewmwstockavailabilityComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MwstockavailabilityRoutingModule { }
