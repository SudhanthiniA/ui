import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { B15formComponent } from './b15form.component';
import { Addb15formComponent } from './addb15form/addb15form.component';
import { Viewb15formComponent } from './viewb15form/viewb15form.component';


const routes: Routes = [
  {
    path : 'list',
    component : B15formComponent
  },
  {
    path : 'add',
    component : Addb15formComponent
  },
  {
    path : 'view',
    component : Viewb15formComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class B15formRoutingModule { }
