import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Bwfl10newComponent } from './bwfl10new.component';
import { Viewbwfl10newComponent } from './viewbwfl10new/viewbwfl10new.component';

const routes: Routes = [ 
  {
    path : 'list',
    component : Bwfl10newComponent
  },
  {
    path : 'view',
    component : Viewbwfl10newComponent
  }  
];  

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Bwfl10newRoutingModule { }
