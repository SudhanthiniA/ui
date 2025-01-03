import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Flb5FormComponent } from './flb5-form.component';
import { Addflb5FormComponent } from './addflb5-form/addflb5-form.component';
import { Viewflb5FormComponent } from './viewflb5-form/viewflb5-form.component';

const routes: Routes = [
  {
    path : 'list',
    component : Flb5FormComponent
  },
  {
    path: 'add',
    component : Addflb5FormComponent
  },
  {
    path: 'view',
    component : Viewflb5FormComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Flb5FormRoutingModule { }
