import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LicensefunctionalComponent } from './licensefunctional.component';
import { ViewlicensefunctionalComponent } from './viewlicensefunctional/viewlicensefunctional.component';

const routes: Routes = [
  {
    path : 'list',
    component : LicensefunctionalComponent
  },
  {
    path : 'view',
    component : ViewlicensefunctionalComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LicensefunctionalRoutingModule { }
