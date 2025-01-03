import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AlertnewComponent } from './alertnew.component';
import { ViewComponent } from './view/view.component';

const routes: Routes = [
  { path: 'list', component: AlertnewComponent },
  { path: 'view', component: ViewComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AlertnewRoutingModule { }
