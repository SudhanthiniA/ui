import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ViewComponent } from './view/view.component'
import { EtenderComponent } from './etender.component'

const routes: Routes = [
 {
  path:'view',
  component:ViewComponent
 } ,
 {
  path:'',
  component:EtenderComponent
 } 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EtenderRoutingModule { }
