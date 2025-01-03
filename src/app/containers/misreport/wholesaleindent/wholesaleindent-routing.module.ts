import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UnitwisependindentComponent } from './unitwisependindent/unitwisependindent.component';
import { UpexsdeptdiswisependindComponent } from './upexsdeptdiswisependind/upexsdeptdiswisependind.component';
import { UnitwisependingindrptComponent } from './unitwisependingindrpt/unitwisependingindrpt.component';
import { IndentstatusrptComponent } from './indentstatusrpt/indentstatusrpt.component';

const routes: Routes = [
  { path: 'unittypewiselist', component: UnitwisependindentComponent },
  { path: 'districtwiselist', component: UpexsdeptdiswisependindComponent },
  { path: 'unitwiselist', component: UnitwisependingindrptComponent },
  { path: 'indentstatuslist', component: IndentstatusrptComponent }
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WholesaleindentRoutingModule { }
