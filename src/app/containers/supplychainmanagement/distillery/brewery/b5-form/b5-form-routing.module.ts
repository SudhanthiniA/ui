import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { B5FormComponent } from './b5-form.component';
import { Addb5FormComponent } from './addb5-form/addb5-form.component';
import { Viewb5FormComponent } from './viewb5-form/viewb5-form.component';

const routes: Routes = [
  {
    path : 'list',
    component : B5FormComponent
  },
  {
    path : 'add',
    component : Addb5FormComponent
  },
  {
    path : 'view',
    component : Viewb5FormComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class B5FormRoutingModule { }
