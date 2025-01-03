import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SalesreturnComponent } from './salesreturn.component';


const routes: Routes = [
  {
    path: 'list',
    component: SalesreturnComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SalesreturnRoutingModule { }
