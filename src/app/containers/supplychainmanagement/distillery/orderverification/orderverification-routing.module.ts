import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OrderverificationComponent } from './orderverification.component';
import { AddeditorderverificationComponent } from './addeditorderverification/addeditorderverification.component';
import { VieworderverificationComponent } from './vieworderverification/vieworderverification.component';


const routes: Routes = [
  {
    path : 'list',
    component : OrderverificationComponent
  },
  {
    path : 'add',
    component : AddeditorderverificationComponent
  },
  {
    path : 'view/:Id',
    component : VieworderverificationComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OrderverificationRoutingModule { }
