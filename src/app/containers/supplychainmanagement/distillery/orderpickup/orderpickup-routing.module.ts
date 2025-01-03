import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddorderpickupComponent } from './addorderpickup/addorderpickup.component';
import { VieworderpickupComponent } from './vieworderpickup/vieworderpickup.component';
import { OrderpickupComponent } from './orderpickup.component';

const routes: Routes = [
  { path: 'list', component: OrderpickupComponent},
  {path: 'add', component: AddorderpickupComponent},
  {path: 'view', component: VieworderpickupComponent}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OrderpickupRoutingModule { }
