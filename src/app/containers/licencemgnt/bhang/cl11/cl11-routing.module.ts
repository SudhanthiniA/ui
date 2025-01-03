import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Cl11Component } from './cl11.component';
import { Viewcl11Component } from './viewcl11/viewcl11.component';

const routes: Routes = [
  {
    path : 'list',
    component : Cl11Component
  },
  {
    path : 'view',
    component : Viewcl11Component
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Cl11RoutingModule { }
