import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AddmassflowofficerComponent } from './addmassflowofficer/addmassflowofficer.component';
import { ViewmassflowofficerComponent } from './viewmassflowofficer/viewmassflowofficer.component';
import { MassflowofficerComponent } from './massflowofficer.component';

import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'list',
    component: MassflowofficerComponent
  },
  {
    path: 'add',
    component: AddmassflowofficerComponent
  },

  {
    path: 'view',
    component: ViewmassflowofficerComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MassflowofficerRoutingModule { }
