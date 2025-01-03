import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { StockinEalComponent } from './stockin-eal.component';
import { AddComponent } from './add/add.component';
import { ViewComponent } from './view/view.component';
import { UnmappedaddComponent } from './unmappedadd/unmappedadd.component';
import { UnmappedviewComponent } from './unmappedview/unmappedview.component';

const routes: Routes = [
  { path: 'list', component: StockinEalComponent },
  { path: 'add', component: AddComponent },
  { path: 'view', component: ViewComponent },
  { path: 'unmappedadd', component: UnmappedaddComponent },
  { path: 'unmappedview', component: UnmappedviewComponent }
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StockinEalRoutingModule { }
