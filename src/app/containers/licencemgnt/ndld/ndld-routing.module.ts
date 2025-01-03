import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NdldComponent } from './ndld.component';
import { Viewflid3Component } from './viewflid3/viewflid3.component';

const routes: Routes = [
  {
    path: '',
    component: NdldComponent
  },
  {
    path: 'view',
    component: Viewflid3Component
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NdldRoutingModule { }
