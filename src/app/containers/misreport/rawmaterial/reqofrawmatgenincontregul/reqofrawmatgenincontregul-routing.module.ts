import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ReqofrawmatgenincontregulComponent } from './reqofrawmatgenincontregul.component';
import { ViewComponent } from './view/view.component';

const routes: Routes = [
  { path: 'list', component: ReqofrawmatgenincontregulComponent },
  { path: 'view', component: ViewComponent },
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReqofrawmatgenincontregulRoutingModule { }
