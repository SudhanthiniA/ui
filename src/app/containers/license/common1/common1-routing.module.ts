import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Common1Component } from './common1.component';


const routes: Routes = [
  { path: '1', component: Common1Component },
 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Common1RoutingModule { }
