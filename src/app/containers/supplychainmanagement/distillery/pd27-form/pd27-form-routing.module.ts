import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Pd27FormComponent } from './pd27-form.component';
import { Addpd27FormComponent } from './addpd27-form/addpd27-form.component';
import { Viewpd27FormComponent } from './viewpd27-form/viewpd27-form.component';

const routes: Routes = [
  { path: 'list', component: Pd27FormComponent },
  { path: 'add', component: Addpd27FormComponent },
   { path: 'view', component: Viewpd27FormComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Pd27FormRoutingModule { }
