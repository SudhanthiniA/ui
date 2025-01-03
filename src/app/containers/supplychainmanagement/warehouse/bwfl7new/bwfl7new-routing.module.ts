import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Bwfl7newComponent } from './bwfl7new.component';
import { Viewbwfl7newComponent } from './viewbwfl7new/viewbwfl7new.component';

const routes: Routes = [ 
  {
    path : 'list',
    component : Bwfl7newComponent
  },
  {
    path : 'view',
    component : Viewbwfl7newComponent
  }  
];  

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Bwfl7newRoutingModule { }
