import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Pd32FormComponent } from './pd32-form.component';
import { Addpd32FormComponent } from './addpd32-form/addpd32-form.component';
import { Viewpd32FormComponent } from './viewpd32-form/viewpd32-form.component';

const routes: Routes = [
  { path: 'list', component: Pd32FormComponent},
  {path: 'add', component: Addpd32FormComponent},
  {path: 'view', component: Viewpd32FormComponent}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Pd32FormRoutingModule { }
