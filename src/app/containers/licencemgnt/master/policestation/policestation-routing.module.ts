import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PolicestationComponent } from './policestation.component';
import { ViewpolicestationComponent } from './viewpolicestation/viewpolicestation.component';

const routes: Routes = [
  {
    path : 'list',
    component : PolicestationComponent
  },
  {
    path : 'view',
    component : ViewpolicestationComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PolicestationRoutingModule { }
