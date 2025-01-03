import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Flb11FormComponent } from './flb11-form.component';
import { Addflb11FormComponent } from './addflb11-form/addflb11-form.component';
import { Viewflb11FormComponent } from './viewflb11-form/viewflb11-form.component';

const routes: Routes = [
  {
    path : 'list',
    component : Flb11FormComponent
  },
  {
    path : 'add',
    component : Addflb11FormComponent
  },
  {
    path : 'view',
    component : Viewflb11FormComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Flb11FormRoutingModule { }
