import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {Hbrfl6addComponent}  from './hbrfl6add.component'
import { ViewComponent } from './view/view.component'

const routes: Routes = [
  {
  path:'add',
  component:Hbrfl6addComponent
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
export class Hbrfl6addRoutingModule { }
