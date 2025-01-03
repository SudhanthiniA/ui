import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Ds1Component } from './ds1.component';


const routes: Routes = [
  {
    path : 'add',
    component : Ds1Component
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Ds1RoutingModule { }
