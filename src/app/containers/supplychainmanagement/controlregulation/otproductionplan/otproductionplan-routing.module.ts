import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OtproductionplanComponent } from './otproductionplan.component';
import { AddotproductionplanComponent } from './addotproductionplan/addotproductionplan.component';
import { ViewotproductionplanComponent } from './viewotproductionplan/viewotproductionplan.component';

const routes: Routes = [
  { path: 'list', component: OtproductionplanComponent},
  {path: 'add', component: AddotproductionplanComponent},
  {path: 'view', component:ViewotproductionplanComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OtproductionplanRoutingModule { }
