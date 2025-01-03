import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ReprtevidsubcompagnshpshoplicseeComponent } from './reprtevidsubcompagnshpshoplicsee.component';
import { ViewComponent } from './view/view.component';

const routes: Routes = [
  { path: 'list', component: ReprtevidsubcompagnshpshoplicseeComponent },
  { path: 'view', component: ViewComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReprtevidsubcompagnshpshoplicseeRoutingModule { }
