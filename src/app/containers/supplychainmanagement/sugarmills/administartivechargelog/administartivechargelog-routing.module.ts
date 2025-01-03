import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdministartivechargelogComponent } from './administartivechargelog.component';

const routes: Routes = [
  { path: 'list', component: AdministartivechargelogComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdministartivechargelogRoutingModule { }
