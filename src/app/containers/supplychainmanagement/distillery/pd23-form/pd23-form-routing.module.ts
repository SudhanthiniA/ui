import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Pd23FormComponent } from './pd23-form.component';
import { Addpd23FormComponent } from './addpd23-form/addpd23-form.component';
import { Viewpd23FormComponent } from './viewpd23-form/viewpd23-form.component';

const routes: Routes = [
  { path: 'list', component: Pd23FormComponent },
  { path: 'add', component: Addpd23FormComponent },
   { path: 'view', component: Viewpd23FormComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Pd23FormRoutingModule { }
