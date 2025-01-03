import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Orderpickupnew2Component } from './orderpickupnew2.component';
import { EditComponent } from './edit/edit.component';
import { ViewComponent } from './view/view.component';

const routes: Routes = [
  { path: 'list', component: Orderpickupnew2Component },
  { path: 'edit', component: EditComponent },
  { path: 'view', component: ViewComponent   }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Orderpickupnew2RoutingModule { }
