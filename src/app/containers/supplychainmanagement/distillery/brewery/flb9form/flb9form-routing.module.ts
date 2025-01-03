import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Flb9formComponent } from './flb9form.component';
import { Addflb9formComponent } from './addflb9form/addflb9form.component';
import { Viewflb9formComponent } from './viewflb9form/viewflb9form.component';


const routes: Routes = [
  {
    path : 'list',
    component : Flb9formComponent
  },
  {
    path : 'add',
    component : Addflb9formComponent
  },
  {
    path : 'view',
    component : Viewflb9formComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Flb9formRoutingModule { }
