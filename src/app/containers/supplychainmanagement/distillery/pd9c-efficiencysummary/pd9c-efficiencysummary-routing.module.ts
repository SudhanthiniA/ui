import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddeditPd9cComponent } from './addedit-pd9c/addedit-pd9c.component';

import { Pd9cEfficiencysummaryComponent } from './pd9c-efficiencysummary.component';
import { ViewPd9cComponent } from './view-pd9c/view-pd9c.component';

const routes: Routes = [
  { path: 'list', component: Pd9cEfficiencysummaryComponent },
  { path: 'edit/:id', component: AddeditPd9cComponent },
  { path: 'add', component: AddeditPd9cComponent },
  { path: 'preview', component: ViewPd9cComponent },
  { path: 'view/:id', component: ViewPd9cComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Pd9cEfficiencysummaryRoutingModule { }
