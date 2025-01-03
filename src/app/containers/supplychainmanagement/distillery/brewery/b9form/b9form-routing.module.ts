import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { B9formComponent } from './b9form.component';
import { Addb9formComponent } from './addb9form/addb9form.component';
import { Viewb9formComponent } from './viewb9form/viewb9form.component';


const routes: Routes = [
  {
    path : 'list',
    component : B9formComponent
  },
  {
    path : 'add',
    component : Addb9formComponent
  },
  {
    path : 'view',
    component : Viewb9formComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class B9formRoutingModule { }
