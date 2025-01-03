import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Flb6FormComponent } from './flb6-form.component';
import { Addflb6FormComponent } from './addflb6-form/addflb6-form.component';
import { Viewflb6FormComponent } from './viewflb6-form/viewflb6-form.component';

const routes: Routes = [
  {
    path : 'list',
    component : Flb6FormComponent
  },
  {
    path: 'add',
    component : Addflb6FormComponent
  },
  {
    path: 'view',
    component : Viewflb6FormComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Flb6FormRoutingModule { }
