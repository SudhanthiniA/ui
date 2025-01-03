import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Pd4FormComponent } from './pd4-form.component';
import { Addpd4FormComponent } from './addpd4-form/addpd4-form.component';
import { Viewpd4FormComponent } from './viewpd4-form/viewpd4-form.component';

const routes: Routes = [
  { path: 'list', component: Pd4FormComponent},
  {path: 'add', component: Addpd4FormComponent},
  {path: 'view', component: Viewpd4FormComponent}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Pd4FormRoutingModule { }
