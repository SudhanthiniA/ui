import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { B8formComponent } from './b8form.component';
import { Addb8formComponent } from './addb8form/addb8form.component';
import { Viewb8formComponent } from './viewb8form/viewb8form.component';


const routes: Routes = [
  {
    path : 'list',
    component : B8formComponent
  },
  {
    path : 'add',
    component : Addb8formComponent
  },
  {
    path : 'view',
    component : Viewb8formComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class B8formRoutingModule { }
