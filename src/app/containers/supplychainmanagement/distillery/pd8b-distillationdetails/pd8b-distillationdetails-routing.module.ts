import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddeditPd8bComponent } from './addedit-pd8b/addedit-pd8b.component';

import { Pd8bDistillationdetailsComponent } from './pd8b-distillationdetails.component';
import { ViewPd8bComponent } from './view-pd8b/view-pd8b.component';

const routes: Routes = [
  { path: 'list', component: Pd8bDistillationdetailsComponent },
  { path: 'add', component: AddeditPd8bComponent },
  { path: 'edit/:id', component: AddeditPd8bComponent },
  { path: 'view/:id', component: ViewPd8bComponent },
  { path: 'preview', component: ViewPd8bComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Pd8bDistillationdetailsRoutingModule { }
