
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AecComponent } from './aec.component';

import { EditaecComponent } from './editaec/editaec.component';

const routes: Routes = [
 
  {
    path : 'view',
    component : EditaecComponent
  },
  {
    path : '',
    component : AecComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AecRoutingModule { }
