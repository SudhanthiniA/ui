import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TehsilComponent } from './tehsil.component';
import { ViewtehsilComponent } from './viewtehsil/viewtehsil.component';

const routes: Routes = [
  {
    path : 'list',
    component : TehsilComponent
  },
  {
    path : 'view',
    component : ViewtehsilComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TehsilRoutingModule { }
