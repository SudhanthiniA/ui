import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TransportpassComponent } from './transportpass.component';
import { ParentunitComponent } from './parentunit/parentunit.component';
import { BwhtrasnportpassComponent } from './bwhtrasnportpass/bwhtrasnportpass.component';
import { ViewrequisitionoftransportpassComponent } from './bwhtrasnportpass/viewrequisitionoftransportpass/viewrequisitionoftransportpass.component';
import { BwhtransportpassackComponent } from './bwhtransportpassack/bwhtransportpassack.component';

const routes: Routes = [
  { path: 'list', component: TransportpassComponent },
  { path: 'parentunit', component: ParentunitComponent },
  { path: 'bwhreport', component: BwhtrasnportpassComponent },
  { path: 'viewbwhreport', component: ViewrequisitionoftransportpassComponent },
  { path: 'bwhtransportpassack', component: BwhtransportpassackComponent }
  
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TransportpassRoutingModule { }
