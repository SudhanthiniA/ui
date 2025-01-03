import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StockinomdComponent } from './stockinomd.component';
import { AddstockinomdComponent } from './addstockinomd/addstockinomd.component';
import { ViewstockinomdComponent } from './viewstockinomd/viewstockinomd.component';

const routes: Routes = [
  { path: 'list', component: StockinomdComponent },
  { path: 'add', component: AddstockinomdComponent },
  { path: 'view', component: ViewstockinomdComponent }
]


@NgModule({
  imports: 
  [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StockinomdRoutingModule { }
