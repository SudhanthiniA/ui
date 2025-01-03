
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DecComponent } from './dec.component';

import { EditdecComponent } from './editdec/editdec.component';

const routes: Routes = [
 
  {
    path : 'view',
    component : EditdecComponent
  },
  {
    path : '',
    component : DecComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DecRoutingModule { }
