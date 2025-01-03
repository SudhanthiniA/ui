import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {Hbrfl7aAddComponent}  from './hbrfl7a-add.component'
import { ViewComponent } from './view/view.component'

const routes: Routes = [
  {
  path:'add',
  component:Hbrfl7aAddComponent
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
export class Hbrfl7aAddRoutingModule { }
