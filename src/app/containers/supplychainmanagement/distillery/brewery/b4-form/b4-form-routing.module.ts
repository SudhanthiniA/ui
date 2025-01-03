import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { B4FormComponent } from './b4-form.component';
import { Addb4FormComponent } from './addb4-form/addb4-form.component';
import { Viewb4FormComponent } from './viewb4-form/viewb4-form.component';

const routes: Routes = [
  {
    path : 'list',
    component : B4FormComponent
  },
  {
    path : 'add',
    component : Addb4FormComponent
  },
  {
    path : 'view',
    component : Viewb4FormComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class B4FormRoutingModule { }
