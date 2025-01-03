import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Bwfl4Component } from './bwfl4.component';
import { Addbwfl4Component } from './addbwfl4/addbwfl4.component';
import { Viewbwfl4Component } from './viewbwfl4/viewbwfl4.component';

const routes: Routes = [ 
  {
    path : 'list',
    component : Bwfl4Component
  },
  {
    path : 'add',
    component : Addbwfl4Component
  },
  {
    path : 'edit/:id',
    component : Addbwfl4Component
  },
  {
    path : 'view/:id',
    component : Viewbwfl4Component
  }  
];  

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Bwfl4RoutingModule { }
