import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Pd13FormComponent } from './pd13-form.component';
import { Addpd13FormComponent } from './addpd13-form/addpd13-form.component';
import { Viewpd13FormComponent } from './viewpd13-form/viewpd13-form.component';


const routes: Routes = [
  { path: 'list', component: Pd13FormComponent },
  { path: 'add', component: Addpd13FormComponent },
  { path: 'view', component: Viewpd13FormComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Pd13FormRoutingModule { }
