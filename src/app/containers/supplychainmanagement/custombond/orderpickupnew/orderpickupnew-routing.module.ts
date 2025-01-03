import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OrderpickupnewComponent } from './orderpickupnew.component';
import { AddorderpickupnewComponent } from './addorderpickupnew/addorderpickupnew.component';
import { VieworderpickupnewComponent } from './vieworderpickupnew/vieworderpickupnew.component';

const routes: Routes = [
  { path: 'list', component: OrderpickupnewComponent },
  { path: 'add', component: AddorderpickupnewComponent },
  { path: 'view', component: VieworderpickupnewComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OrderpickupnewRoutingModule { } 
