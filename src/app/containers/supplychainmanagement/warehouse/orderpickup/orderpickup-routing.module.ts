import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OrderpickupComponent } from './orderpickup.component';
import { AddorderpickupComponent } from './addorderpickup/addorderpickup.component';
import { VieworderpickupComponent } from './vieworderpickup/vieworderpickup.component';

const routes: Routes = [
  { path: 'list', component: OrderpickupComponent },
  { path: 'add', component: AddorderpickupComponent },
  { path: 'edit/:id', component: AddorderpickupComponent },
  { path: 'view/:id', component: VieworderpickupComponent }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OrderpickupRoutingModule { }
