import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Bwfl9newComponent } from './bwfl9new.component';
import { Viewbwfl9newComponent } from './viewbwfl9new/viewbwfl9new.component';

const routes: Routes = [ 
  {
    path : 'list',
    component : Bwfl9newComponent
  },
  {
    path : 'view',
    component : Viewbwfl9newComponent
  }  
];  

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Bwfl9newRoutingModule { }
