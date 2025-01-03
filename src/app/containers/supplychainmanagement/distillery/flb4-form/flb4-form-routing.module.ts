import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Flb4FormComponent } from './flb4-form.component';
import { Addflb4FormComponent } from './addflb4-form/addflb4-form.component';
import { Viewflb4FormComponent } from './viewflb4-form/viewflb4-form.component';

const routes: Routes = [
  {
    path : 'list',
    component : Flb4FormComponent
  },
  {
    path: 'add',
    component : Addflb4FormComponent
  },
  {
    path: 'view',
    component : Viewflb4FormComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Flb4FormRoutingModule { }
