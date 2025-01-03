import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NiraSt3Component } from './nira-st3.component';
import { AddniraSt3Component } from './addnira-st3/addnira-st3.component';
import { ViewniraSt3Component } from './viewnira-st3/viewnira-st3.component';

const routes: Routes = [
  {
    path : 'list',
    component : NiraSt3Component
  },
  {
    path : 'view',
    component : ViewniraSt3Component
  },
  {
    path : 'add',
    component : AddniraSt3Component
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NiraSt3RoutingModule { }
