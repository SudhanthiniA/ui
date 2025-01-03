import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OrderpickupparentComponent } from './orderpickupparent.component';
import { AddorderpickupparentComponent } from './addorderpickupparent/addorderpickupparent.component';
import { VieworderpickupparentComponent } from './vieworderpickupparent/vieworderpickupparent.component';

const routes: Routes = [
  { path: 'list', component: OrderpickupparentComponent },
  { path: 'add', component: AddorderpickupparentComponent },
  { path: 'view', component: VieworderpickupparentComponent }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OrderpickupparentRoutingModule { }
