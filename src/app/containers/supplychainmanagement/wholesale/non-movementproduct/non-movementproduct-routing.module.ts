import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NonMovementproductComponent } from './non-movementproduct.component';

const routes: Routes = [

  {
    path: 'list',
    component: NonMovementproductComponent
  },
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NonMovementproductRoutingModule { }
