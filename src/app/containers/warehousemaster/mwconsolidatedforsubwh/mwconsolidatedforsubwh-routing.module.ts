import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MwconsolidatedforsubwhComponent } from './mwconsolidatedforsubwh.component';
import { ViewmwconsolidatedforsubwhComponent } from './viewmwconsolidatedforsubwh/viewmwconsolidatedforsubwh.component';

const routes: Routes = [
  { path: 'list', component: MwconsolidatedforsubwhComponent },
  { path: 'view', component: ViewmwconsolidatedforsubwhComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MwconsolidatedforsubwhRoutingModule { }
