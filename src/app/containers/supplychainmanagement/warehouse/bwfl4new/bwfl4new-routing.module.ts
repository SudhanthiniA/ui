import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Bwfl4newComponent } from './bwfl4new.component';
import { Viewbwfl4newComponent } from './viewbwfl4new/viewbwfl4new.component';

const routes: Routes = [ 
  {
    path : 'list',
    component : Bwfl4newComponent
  },
  {
    path : 'view',
    component : Viewbwfl4newComponent
  }  
];  

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Bwfl4newRoutingModule { }
