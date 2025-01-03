import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OrderpickingComponent } from './orderpicking.component';
import { AddeditorderpickingComponent } from './addeditorderpicking/addeditorderpicking.component';


const routes: Routes = [
  {
    path : 'list',
    component : OrderpickingComponent
  },
  {
    path : 'add',
    component : AddeditorderpickingComponent
  },
  {
    path : 'edit/:Id',
    component : AddeditorderpickingComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OrderpickingRoutingModule { }
