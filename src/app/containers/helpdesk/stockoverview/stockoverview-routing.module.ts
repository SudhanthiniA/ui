import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { StockoverviewComponent } from './stockoverview.component';
import { AddComponent } from './add/add.component';
import { ViewComponent } from './view/view.component';
import { UnmappedviewComponent } from './unmappedview/unmappedview.component';

const routes: Routes = [
  { path: 'list', component: StockoverviewComponent },
  { path: 'add', component: AddComponent },
  { path: 'view', component: ViewComponent },
  { path: 'unmappedview', component: UnmappedviewComponent }
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StockoverviewRoutingModule { }
