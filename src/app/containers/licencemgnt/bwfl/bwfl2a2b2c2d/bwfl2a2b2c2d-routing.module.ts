import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Bwfl2a2b2c2dComponent } from './bwfl2a2b2c2d.component'; 
import { Viewbwfl2a2b2c2dComponent } from './viewbwfl2a2b2c2d/viewbwfl2a2b2c2d.component';

const routes: Routes = [
  {
    path: 'add',
    component: Bwfl2a2b2c2dComponent
  },
  {
    path: 'view',
    component: Viewbwfl2a2b2c2dComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Bwfl2a2b2c2dRoutingModule { }
