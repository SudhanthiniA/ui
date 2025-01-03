import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Pd30FormComponent } from './pd30-form.component';
import { Addpd30FormComponent } from './addpd30-form/addpd30-form.component';
import { Viewpd30FormComponent } from './viewpd30-form/viewpd30-form.component';

const routes: Routes = [
  { path: 'list', component: Pd30FormComponent},
  {path: 'add', component: Addpd30FormComponent},
  {path: 'view', component: Viewpd30FormComponent} 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Pd30FormRoutingModule { }
