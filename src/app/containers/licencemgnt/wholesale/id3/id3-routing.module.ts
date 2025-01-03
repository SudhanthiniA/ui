import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Viewid3Component } from './viewid3/viewid3.component';
import { Id3Component } from './id3.component';

const routes: Routes = [
  {
    path : 'add',
    component : Id3Component
  },
  {
    path : 'view',
    component : Viewid3Component
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Id3RoutingModule { }
