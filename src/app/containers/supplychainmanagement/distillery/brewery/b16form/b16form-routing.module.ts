import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { B16formComponent } from './b16form.component';
import { Addb16formComponent } from './addb16form/addb16form.component';
import { Viewb16formComponent } from './viewb16form/viewb16form.component';


const routes: Routes = [
  {
    path : 'list',
    component : B16formComponent
  },
  {
    path : 'add',
    component : Addb16formComponent
  },
  {
    path : 'view',
    component : Viewb16formComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class B16formRoutingModule { }
