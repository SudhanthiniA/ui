import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { B6FormComponent } from './b6-form.component';
import { Addb6FormComponent } from './addb6-form/addb6-form.component';
import { Viewb6FormComponent } from './viewb6-form/viewb6-form.component';

const routes: Routes = [
  {
    path : 'list',
    component : B6FormComponent
  },
  {
    path : 'add',
    component : Addb6FormComponent
  },
  {
    path : 'view',
    component : Viewb6FormComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class B6FormRoutingModule { }
