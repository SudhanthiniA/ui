import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NonregistereduserComponent } from './nonregistereduser.component';

const routes: Routes = [
  {
    path: 'add',
    component: NonregistereduserComponent
  }
 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NonregistereduserRoutingModule { }
