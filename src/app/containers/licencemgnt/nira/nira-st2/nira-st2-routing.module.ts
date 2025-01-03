import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NiraSt2Component } from './nira-st2.component';
import { AddniraSt2Component } from './addnira-st2/addnira-st2.component';
import { ViewniraSt2Component } from './viewnira-st2/viewnira-st2.component';

const routes: Routes = [
  {
    path : 'list',
    component : NiraSt2Component
  },
  {
    path : 'view',
    component : ViewniraSt2Component
  },
  {
    path : 'add',
    component : AddniraSt2Component
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NiraSt2RoutingModule { }
