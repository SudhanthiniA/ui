import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BwhtrasnportpassComponent } from './bwhtrasnportpass.component';
import { ViewrequisitionoftransportpassComponent } from './viewrequisitionoftransportpass/viewrequisitionoftransportpass.component';

const routes: Routes = [
  { path: 'list', component: BwhtrasnportpassComponent },
  { path: 'view', component: ViewrequisitionoftransportpassComponent },
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BwhtransportpassRoutingModule { }
