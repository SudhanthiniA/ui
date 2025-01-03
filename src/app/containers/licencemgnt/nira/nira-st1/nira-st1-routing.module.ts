import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NiraSt1Component } from './nira-st1.component';
import { AddniraSt1Component } from './addnira-st1/addnira-st1.component';
import { ViewniraSt1Component } from './viewnira-st1/viewnira-st1.component';

const routes: Routes = [
  {
    path : 'list',
    component : NiraSt1Component
  },
  {
    path : 'view',
    component : ViewniraSt1Component
  },
  {
    path : 'add',
    component : AddniraSt1Component
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NiraSt1RoutingModule { }
