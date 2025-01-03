import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OwnershipComponent } from './ownership.component';
import { ViewownershipComponent } from './viewownership/viewownership.component';

const routes: Routes = [
  {
    path : 'list',
    component : OwnershipComponent
  },
  {
    path : 'view',
    component : ViewownershipComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OwnershipRoutingModule { }
