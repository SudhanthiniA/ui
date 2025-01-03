import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { B13formComponent } from './b13form.component';
import { Addb13formComponent } from './addb13form/addb13form.component';
import { Viewb13formComponent } from './viewb13form/viewb13form.component';


const routes: Routes = [
  {
    path : 'list',
    component : B13formComponent
  },
  {
    path : 'add',
    component : Addb13formComponent
  },
  {
    path : 'view',
    component : Viewb13formComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class B13formRoutingModule { }
