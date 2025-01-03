
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DeoComponent } from './deo.component';

import { EditdeoComponent } from './editdeo/editdeo.component';

const routes: Routes = [
 
  {
    path : 'view',
    component : EditdeoComponent
  },
  {
    path : '',
    component : DeoComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DeoRoutingModule { }
