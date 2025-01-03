import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Mf7registerComponent } from './mf7register.component';
import { Addeditmf7registerComponent } from './addeditmf7register/addeditmf7register.component';
import { Viewmf7registerComponent } from './viewmf7register/viewmf7register.component';


const routes: Routes = [
  {
    path : 'list',
    component : Mf7registerComponent
  },
  {
    path : 'view/:Id',
    component : Viewmf7registerComponent
  },
  {
    path : 'add',
    component : Addeditmf7registerComponent
  },
  {
    path : 'edit/:Id',
    component : Addeditmf7registerComponent
  },
  {
    path : 'preview',
    component : Viewmf7registerComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Mf7registerRoutingModule { }
