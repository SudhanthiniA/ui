import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddeditPd9bComponent } from './addedit-pd9b/addedit-pd9b.component';

import { Pd9bProductionsummaryComponent } from './pd9b-productionsummary.component';
import { ViewPd9bComponent } from './view-pd9b/view-pd9b.component';

const routes: Routes = [
  { path: 'list', component: Pd9bProductionsummaryComponent },
  { path: 'add', component: AddeditPd9bComponent },
  { path: 'edit/:id', component: AddeditPd9bComponent },
  { path: 'view/:id', component: ViewPd9bComponent },
  { path: 'preview', component: ViewPd9bComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Pd9bProductionsummaryRoutingModule { }
