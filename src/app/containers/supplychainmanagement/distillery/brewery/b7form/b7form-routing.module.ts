import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { B7formComponent } from './b7form.component';
import { Addb7formComponent } from './addb7form/addb7form.component';
import { Viewb7formComponent } from './viewb7form/viewb7form.component';


const routes: Routes = [
  {
    path : 'list',
    component : B7formComponent
  },
  {
    path : 'add',
    component : Addb7formComponent
  },
  {
    path : 'view',
    component : Viewb7formComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class B7formRoutingModule { }
