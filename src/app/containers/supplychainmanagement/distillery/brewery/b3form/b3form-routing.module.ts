import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { B3formComponent } from './b3form.component';
import { Addb3formComponent } from './addb3form/addb3form.component';
import { Viewb3formComponent } from './viewb3form/viewb3form.component';


const routes: Routes = [
  {
    path : 'list',
    component : B3formComponent
  },
  {
    path : 'add',
    component : Addb3formComponent
  },
  {
    path : 'view',
    component : Viewb3formComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class B3formRoutingModule { }
