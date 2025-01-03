import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ViewComponent } from './view/view.component'
import { ApplicantComponent } from './applicant.component'

const routes: Routes = [
 {
  path:'view',
  component:ViewComponent
 } ,
 {
  path:'',
  component:ApplicantComponent
 } 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ApplicantRoutingModule { }
