import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Fl36Component } from './receiptack.component';
import { Acknowledgementfl36Component } from './view/acknowledgementfl36.component';


const routes: Routes = [
  {
    path : 'list',
    component : Fl36Component
  },
  
  {
    path: 'acknowledge',
    component : Acknowledgementfl36Component
  },
 
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Fl36RoutingModule { }