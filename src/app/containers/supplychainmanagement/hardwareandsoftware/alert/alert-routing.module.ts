import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AlertComponent } from './alert.component';
import { ViewComponent } from './view/view.component';

const routes: Routes = [
  { path: 'list', component: AlertComponent },
  { path: 'view', component: ViewComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AlertRoutingModule { }
