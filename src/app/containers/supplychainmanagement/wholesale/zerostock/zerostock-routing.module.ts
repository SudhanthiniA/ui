import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ZerostockComponent } from './zerostock.component';

const routes: Routes = [
  {
    path : 'list',
    component : ZerostockComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ZerostockRoutingModule { }
