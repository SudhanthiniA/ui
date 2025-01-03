import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NiraSt4Component } from './nira-st4.component';
import { AddniraSt4Component } from './addnira-st4/addnira-st4.component';
import { ViewniraSt4Component } from './viewnira-st4/viewnira-st4.component';

const routes: Routes = [
  {
    path : 'list',
    component : NiraSt4Component
  },
  {
    path : 'view',
    component : ViewniraSt4Component
  },
  {
    path : 'add',
    component : AddniraSt4Component
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NiraSt4RoutingModule { }
