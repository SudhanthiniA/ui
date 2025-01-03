import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {Hbrfl7addComponent}  from './hbrfl7add.component'
import { ViewComponent } from './view/view.component'

const routes: Routes = [
  {
  path:'add',
  component:Hbrfl7addComponent
 },
 {
  path:'view',
  component:ViewComponent
 }  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Hbrfl7addRoutingModule { }
