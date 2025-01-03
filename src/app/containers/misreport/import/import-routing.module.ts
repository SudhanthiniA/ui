import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RptbwflimportpermitComponent } from './rptbwflimportpermit/rptbwflimportpermit.component';
import { Rptfl2dcbwimportpermitComponent } from './rptfl2dcbwimportpermit/rptfl2dcbwimportpermit.component';
import { BwflmasterbondComponent } from './bwflmasterbond/bwflmasterbond.component';

const routes: Routes = [
  { path: 'bwfllist', component: RptbwflimportpermitComponent },
  { path: 'fl2dcbwlist', component: Rptfl2dcbwimportpermitComponent },
  { path: 'bwflmasterlist', component: BwflmasterbondComponent }
  
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ImportRoutingModule { }
