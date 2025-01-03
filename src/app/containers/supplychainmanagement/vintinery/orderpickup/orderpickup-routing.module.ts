import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OrderpickupComponent } from './orderpickup.component';
import { EditComponent } from './edit/edit.component';
import { ViewComponent } from './view/view.component';

const routes: Routes = [
  { path: 'list', component: OrderpickupComponent },
  { path: 'edit', component: EditComponent },
  { path: 'view', component: ViewComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OrderpickupRoutingModule { }
