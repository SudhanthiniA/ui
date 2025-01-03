import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { B11formComponent } from './b11form.component';
import { Addb11formComponent } from './addb11form/addb11form.component';
import { Viewb11formComponent } from './viewb11form/viewb11form.component';

const routes: Routes = [
  {
    path : 'list',
    component : B11formComponent
  },
  {
    path : 'add',
    component : Addb11formComponent
  },
  {
    path : 'view',
    component : Viewb11formComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class B11formRoutingModule { }
