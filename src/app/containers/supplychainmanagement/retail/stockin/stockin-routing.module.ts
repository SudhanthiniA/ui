import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { StockinComponent } from './stockin.component';
import { StockinqrscanComponent } from './stockinqrscan/stockinqrscan.component';
import { AddstockinComponent } from './addstockin/addstockin.component';
import { ViewstockinComponent } from './viewstockin/viewstockin.component';

const routes: Routes = [
  { path: '', component: StockinComponent },
  { path: 'qr-scan', component: StockinqrscanComponent },
  { path: 'add/:code', component: AddstockinComponent },
  { path: 'view', component: ViewstockinComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StockinRoutingModule { }
