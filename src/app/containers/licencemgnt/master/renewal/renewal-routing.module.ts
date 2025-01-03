import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RenewalComponent } from './renewal.component';
import { ViewrenewalComponent } from './viewrenewal/viewrenewal.component';

const routes: Routes = [
  {
    path : 'list',
    component : RenewalComponent
  },
  {
    path : 'view',
    component : ViewrenewalComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RenewalRoutingModule { }
