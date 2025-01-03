import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { B17FormComponent } from './b17-form.component';
import { Addb17FormComponent } from './addb17-form/addb17-form.component';
import { Viewb17FormComponent } from './viewb17-form/viewb17-form.component';

const routes: Routes = [
  {
    path : 'list',
    component : B17FormComponent
  },
  {
    path : 'add',
    component : Addb17FormComponent
  },
  {
    path : 'view',
    component : Viewb17FormComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class B17FormRoutingModule { }
