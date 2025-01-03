import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Bwfl6newComponent } from './bwfl6new.component';
import { Viewbwfl6newComponent } from './viewbwfl6new/viewbwfl6new.component';

const routes: Routes = [ 
  {
    path : 'list',
    component : Bwfl6newComponent
  },
  {
    path : 'view',
    component : Viewbwfl6newComponent
  }  
];  

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Bwfl6newRoutingModule { }
